i.d(e, {
    Z: () => L,
    i: () => R
}),
    i(539854),
    i(388685);
var n = i(255367),
    r = i(73800),
    s = i(120356),
    o = i.n(s),
    l = i(392711),
    a = i.n(l),
    d = i(442837),
    u = i(692547),
    c = i(481060),
    h = i(980568),
    p = i(560768),
    g = i(812206),
    f = i(405701),
    m = i(243778),
    v = i(843693),
    O = i(246642),
    b = i(921227),
    y = i(314897),
    S = i(430824),
    E = i(699516),
    w = i(885110),
    Z = i(111583),
    I = i(594174),
    x = i(451478),
    j = i(626135),
    P = i(823379),
    C = i(5192),
    T = i(981631),
    _ = i(388032),
    A = i(486850);
function N(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
function F(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(i);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(i, t).enumerable;
                })
            )),
            n.forEach(function (e) {
                N(t, e, i[e]);
            });
    }
    return t;
}
let D = [];
class M extends r.PureComponent {
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ fadeIn: !0 }), (this.timeout = null), this.logShownEventIfNeeded();
        }, 100);
    }
    componentDidUpdate() {
        this.logShownEventIfNeeded();
    }
    logShownEventIfNeeded() {
        let t = this.props.activity.application_id;
        null != t &&
            -1 === D.indexOf(t) &&
            (j.default.track(T.rMx.SHOW_TUTORIAL, {
                tutorial: 'activity-invite-nux-inline',
                application_id: t
            }),
            D.push(t));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: t, isRefreshChatInputEnabled: e } = this.props;
        return (0, n.jsxs)('div', {
            className: o()(A.activityInviteEducation, { [A.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                e
                    ? (0, n.jsx)(c.whL, {
                          size: 'sm',
                          className: A.activityInviteEducationLeftArrow
                      })
                    : (0, n.jsx)('div', { className: A.activityInviteEducationArrow }),
                (0, n.jsx)('span', {
                    children: _.intl.format(_.t['i/MoCg'], {
                        game: t.name,
                        dismissOnClick: this.handleDismissInviteEducation
                    })
                })
            ]
        });
    }
    constructor(...t) {
        super(...t),
            N(this, 'state', { fadeIn: !1 }),
            N(this, 'timeout', null),
            N(this, 'handleDismissInviteEducation', () => {
                let { activity: t } = this.props;
                null != t && null != t.application_id && h.Z.dismissForApplicationId(t.application_id);
            });
    }
}
function U(t) {
    let { channel: e, guild: i } = t;
    return (0, n.jsx)(m.ZP, {
        contentTypes: [],
        children: (t) => {
            let { visibleContent: e, markAsDismissed: i } = t;
            return null;
        }
    });
}
function k(t) {
    let { guildId: e, activity: i, showInviteEducation: r, isFocused: s, typingUsers: l, className: a, channel: d, isThreadCreation: u, renderDots: h, poggermodeEnabled: p, isComboing: g } = t,
        { rateLimitPerUser: m } = d,
        v = S.Z.getGuild(e);
    if (0 === l.length && !(m > 0) && !g)
        return r && null != i
            ? (0, n.jsx)(M, {
                  activity: i,
                  isFocused: s,
                  isRefreshChatInputEnabled: !1
              })
            : (0, n.jsx)(U, {
                  channel: d,
                  guild: v
              });
    let [b, y, E] = l,
        w = '';
    return (
        1 === l.length
            ? (w = _.intl.format(_.t.lJ9sZW, { a: b }))
            : 2 === l.length
              ? (w = _.intl.format(_.t.rB0CUV, {
                    a: b,
                    b: y
                }))
              : 3 === l.length
                ? (w = _.intl.format(_.t.StKTho, {
                      a: b,
                      b: y,
                      c: E
                  }))
                : l.length > 3 && (w = _.intl.string(_.t.uVDhqa)),
        (0, n.jsxs)('div', {
            className: o()(
                A.typing,
                {
                    'stop-animation': !s,
                    [A.isComboing]: p && g
                },
                a
            ),
            children: [
                (0, n.jsxs)('div', {
                    className: A.typingDots,
                    children: [
                        l.length > 0 &&
                            !1 !== h &&
                            (0, n.jsx)(c.bbz, {
                                className: A.ellipsis,
                                dotRadius: 3.5,
                                themed: !0
                            }),
                        (0, n.jsx)('span', {
                            className: A.text,
                            'aria-live': 'polite',
                            'aria-atomic': !0,
                            children: w
                        })
                    ]
                }),
                (0, n.jsx)(f.Z, {
                    channel: d,
                    isThreadCreation: u
                }),
                p && g && (0, n.jsx)(O.Z, { channelId: d.id })
            ]
        })
    );
}
function R(t) {
    let e = (0, d.e7)([Z.Z], () => Z.Z.getTypingUsers(t.id)),
        i = (0, d.e7)([I.default], () => I.default.getCurrentUser());
    return a()(e)
        .keys()
        .filter((t) => t !== (null == i ? void 0 : i.id))
        .reject((t) => E.Z.isBlockedOrIgnored(t))
        .map((t) => I.default.getUser(t))
        .filter(P.lm)
        .map((e) => C.ZP.getName(t.guild_id, t.id, e))
        .value();
}
function L(t) {
    var e,
        i,
        { channel: r, isThreadCreation: s = !1 } = t,
        o = (function (t, e) {
            if (null == t) return {};
            var i,
                n,
                r = (function (t, e) {
                    if (null == t) return {};
                    var i,
                        n,
                        r = {},
                        s = Object.keys(t);
                    for (n = 0; n < s.length; n++) (i = s[n]), e.indexOf(i) >= 0 || (r[i] = t[i]);
                    return r;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                for (n = 0; n < s.length; n++) (i = s[n]), !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i]);
            }
            return r;
        })(t, ['channel', 'isThreadCreation']);
    let l = (0, d.e7)([w.Z], () => w.Z.findActivity((t) => null != t.application_id)),
        a = (0, d.e7)([v.ZP, y.default], () => v.ZP.getUserCombo(y.default.getId(), r.id)),
        h = (0, d.e7)([b.Z, g.Z, E.Z], () => (0, p.Z)(r, l, b.Z, g.Z, E.Z)),
        f = R(r),
        m =
            ((e = F({}, o)),
            (i = i =
                {
                    baseTextColor: (0, c.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
                    activeTextColor: (0, c.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
                    showInviteEducation: h,
                    activity: l,
                    typingUsers: s ? [] : f,
                    isFocused: (0, d.e7)([x.Z], () => x.Z.isFocused()),
                    guildId: r.guild_id,
                    isComboing: null != a,
                    channel: r,
                    isThreadCreation: s
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                : (function (t, e) {
                      var i = Object.keys(t);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(t);
                          i.push.apply(i, n);
                      }
                      return i;
                  })(Object(i)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                  }),
            e);
    return (0, n.jsx)(k, F({}, m));
}
