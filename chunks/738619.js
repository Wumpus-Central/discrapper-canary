(i.d(e, {
    ZP: () => k,
    d7: () => U,
    iD: () => M
}),
    i(539854),
    i(388685));
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
    m = i(843693),
    v = i(246642),
    O = i(624030),
    b = i(314897),
    S = i(699516),
    y = i(885110),
    E = i(111583),
    Z = i(594174),
    I = i(451478),
    P = i(626135),
    w = i(823379),
    T = i(5192),
    x = i(981631),
    j = i(388032),
    C = i(486850);
function _(t, e, i) {
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
function A(t) {
    for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(i);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (t) {
                    return Object.getOwnPropertyDescriptor(i, t).enumerable;
                })
            )),
            n.forEach(function (e) {
                _(t, e, i[e]);
            }));
    }
    return t;
}
let N = [];
class F extends r.PureComponent {
    componentDidMount() {
        this.timeout = setTimeout(() => {
            (this.setState({ fadeIn: !0 }), (this.timeout = null), this.logShownEventIfNeeded());
        }, 100);
    }
    componentDidUpdate() {
        this.logShownEventIfNeeded();
    }
    logShownEventIfNeeded() {
        let t = this.props.activity.application_id;
        null != t &&
            -1 === N.indexOf(t) &&
            (P.default.track(x.rMx.SHOW_TUTORIAL, {
                tutorial: 'activity-invite-nux-inline',
                application_id: t
            }),
            N.push(t));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: t } = this.props;
        return (0, n.jsxs)('div', {
            className: o()(C.activityInviteEducation, { [C.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                (0, n.jsx)('div', { className: C.activityInviteEducationArrow }),
                (0, n.jsx)('span', {
                    children: j.intl.format(j.t['i/MoCg'], {
                        game: t.name,
                        dismissOnClick: this.handleDismissInviteEducation
                    })
                })
            ]
        });
    }
    constructor(...t) {
        (super(...t),
            _(this, 'state', { fadeIn: !1 }),
            _(this, 'timeout', null),
            _(this, 'handleDismissInviteEducation', () => {
                let { activity: t } = this.props;
                null != t && null != t.application_id && h.Z.dismissForApplicationId(t.application_id);
            }));
    }
}
function D(t) {
    let { activityInviteEducationActivity: e, isFocused: i, typingUsers: r, className: s, channel: l, isThreadCreation: a, renderDots: d, poggermodeEnabled: u, isComboing: h, isInTextChannel: p } = t,
        { rateLimitPerUser: g } = l;
    if (0 === r.length && !(g > 0) && !h)
        return null != e
            ? (0, n.jsx)(F, {
                  activity: e,
                  isFocused: i
              })
            : null;
    let [m, O, b] = r,
        S = '';
    return (
        1 === r.length
            ? (S = j.intl.format(j.t.lJ9sZW, { a: m }))
            : 2 === r.length
              ? (S = j.intl.format(j.t.rB0CUV, {
                    a: m,
                    b: O
                }))
              : 3 === r.length
                ? (S = j.intl.format(j.t.StKTho, {
                      a: m,
                      b: O,
                      c: b
                  }))
                : r.length > 3 && (S = j.intl.string(j.t.uVDhqa)),
        (0, n.jsxs)('div', {
            className: o()(
                C.typing,
                {
                    'stop-animation': !i,
                    [C.isComboing]: u && h,
                    [C.inTextChannel]: p
                },
                s
            ),
            children: [
                (0, n.jsxs)('div', {
                    className: C.typingDots,
                    children: [
                        r.length > 0 &&
                            !1 !== d &&
                            (0, n.jsx)(c.bbz, {
                                className: C.ellipsis,
                                dotRadius: 3.5,
                                themed: !0
                            }),
                        (0, n.jsx)('span', {
                            className: C.text,
                            'aria-live': 'polite',
                            'aria-atomic': !0,
                            children: S
                        })
                    ]
                }),
                (0, n.jsx)(f.Z, {
                    channel: l,
                    isThreadCreation: a
                }),
                u && h && (0, n.jsx)(v.Z, { channelId: l.id })
            ]
        })
    );
}
function M(t) {
    let e = (0, d.e7)([E.Z], () => E.Z.getTypingUsers(t.id)),
        i = (0, d.e7)([Z.default], () => Z.default.getCurrentUser());
    return a()(e)
        .keys()
        .filter((t) => t !== (null == i ? void 0 : i.id))
        .reject((t) => S.Z.isBlockedOrIgnored(t))
        .map((t) => Z.default.getUser(t))
        .filter(w.lm)
        .map((e) => T.ZP.getName(t.guild_id, t.id, e))
        .value();
}
function U(t) {
    let e = (0, d.e7)([y.Z], () => y.Z.findActivity((t) => null != t.application_id));
    return (0, d.e7)([O.Z, g.Z, S.Z], () => (0, p.Z)(t, e, O.Z, g.Z, S.Z)) ? e : null;
}
function k(t) {
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
                    for (n = 0; n < s.length; n++) ((i = s[n]), e.indexOf(i) >= 0 || (r[i] = t[i]));
                    return r;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                for (n = 0; n < s.length; n++) ((i = s[n]), !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i]));
            }
            return r;
        })(t, ['channel', 'isThreadCreation']);
    let l = (0, d.e7)([m.ZP, b.default], () => m.ZP.getUserCombo(b.default.getId(), r.id)),
        a = M(r),
        h =
            ((e = A({}, o)),
            (i = i =
                {
                    baseTextColor: (0, c.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
                    activeTextColor: (0, c.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
                    activityInviteEducationActivity: U(r),
                    typingUsers: s ? [] : a,
                    isFocused: (0, d.e7)([I.Z], () => I.Z.isFocused()),
                    guildId: r.guild_id,
                    isComboing: null != l,
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
    return (0, n.jsx)(D, A({}, h));
}
