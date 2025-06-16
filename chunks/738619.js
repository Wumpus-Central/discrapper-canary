n.d(t, {
    Z: () => H,
    i: () => Z
}),
    n(539854),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    f = n(980568),
    _ = n(560768),
    p = n(812206),
    h = n(405701),
    m = n(243778),
    g = n(843693),
    E = n(246642),
    b = n(921227),
    y = n(314897),
    O = n(430824),
    v = n(699516),
    I = n(885110),
    T = n(111583),
    S = n(594174),
    A = n(451478),
    N = n(626135),
    C = n(823379),
    R = n(5192),
    P = n(981631),
    w = n(388032),
    D = n(486850);
function L(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                L(e, t, n[t]);
            });
    }
    return e;
}
function k(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function M(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : k(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = U(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let G = [];
class B extends i.PureComponent {
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({ fadeIn: !0 }), (this.timeout = null), this.logShownEventIfNeeded();
        }, 100);
    }
    componentDidUpdate() {
        this.logShownEventIfNeeded();
    }
    logShownEventIfNeeded() {
        let e = this.props.activity.application_id;
        null != e &&
            -1 === G.indexOf(e) &&
            (N.default.track(P.rMx.SHOW_TUTORIAL, {
                tutorial: 'activity-invite-nux-inline',
                application_id: e
            }),
            G.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: e, isRefreshChatInputEnabled: t } = this.props;
        return (0, r.jsxs)('div', {
            className: o()(D.activityInviteEducation, { [D.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                t
                    ? (0, r.jsx)(d.whL, {
                          size: 'sm',
                          className: D.activityInviteEducationLeftArrow
                      })
                    : (0, r.jsx)('div', { className: D.activityInviteEducationArrow }),
                (0, r.jsx)('span', {
                    children: w.intl.format(w.t['i/MoCg'], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            L(this, 'state', { fadeIn: !1 }),
            L(this, 'timeout', null),
            L(this, 'handleDismissInviteEducation', () => {
                let { activity: e } = this.props;
                null != e && null != e.application_id && f.Z.dismissForApplicationId(e.application_id);
            });
    }
}
function V(e) {
    let { channel: t, guild: n } = e,
        i = [];
    return (0, r.jsx)(m.ZP, {
        contentTypes: i,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return null;
        }
    });
}
function F(e) {
    let { guildId: t, activity: n, showInviteEducation: i, isFocused: a, typingUsers: s, className: l, channel: c, isThreadCreation: u, renderDots: f, poggermodeEnabled: _, isComboing: p } = e,
        { rateLimitPerUser: m } = c,
        g = O.Z.getGuild(t),
        b = m > 0;
    if (0 === s.length && !b && !p)
        return i && null != n
            ? (0, r.jsx)(B, {
                  activity: n,
                  isFocused: a,
                  isRefreshChatInputEnabled: !1
              })
            : (0, r.jsx)(V, {
                  channel: c,
                  guild: g
              });
    let [y, v, I] = s,
        T = '';
    return (
        1 === s.length
            ? (T = w.intl.format(w.t.lJ9sZW, { a: y }))
            : 2 === s.length
              ? (T = w.intl.format(w.t.rB0CUV, {
                    a: y,
                    b: v
                }))
              : 3 === s.length
                ? (T = w.intl.format(w.t.StKTho, {
                      a: y,
                      b: v,
                      c: I
                  }))
                : s.length > 3 && (T = w.intl.string(w.t.uVDhqa)),
        (0, r.jsxs)('div', {
            className: o()(
                D.typing,
                {
                    'stop-animation': !a,
                    [D.isComboing]: _ && p
                },
                l
            ),
            children: [
                (0, r.jsxs)('div', {
                    className: D.typingDots,
                    children: [
                        s.length > 0 &&
                            !1 !== f &&
                            (0, r.jsx)(d.bbz, {
                                className: D.ellipsis,
                                dotRadius: 3.5,
                                themed: !0
                            }),
                        (0, r.jsx)('span', {
                            className: D.text,
                            'aria-live': 'polite',
                            'aria-atomic': !0,
                            children: T
                        })
                    ]
                }),
                (0, r.jsx)(h.Z, {
                    channel: c,
                    isThreadCreation: u
                }),
                _ && p && (0, r.jsx)(E.Z, { channelId: c.id })
            ]
        })
    );
}
function Z(e) {
    let t = (0, c.e7)([T.Z], () => T.Z.getTypingUsers(e.id)),
        n = (0, c.e7)([S.default], () => S.default.getCurrentUser());
    return l()(t)
        .keys()
        .filter((e) => e !== (null == n ? void 0 : n.id))
        .reject((e) => v.Z.isBlockedOrIgnored(e))
        .map((e) => S.default.getUser(e))
        .filter(C.lm)
        .map((t) => R.ZP.getName(e.guild_id, e.id, t))
        .value();
}
function H(e) {
    var { channel: t, isThreadCreation: n = !1 } = e,
        i = j(e, ['channel', 'isThreadCreation']);
    let a = (0, c.e7)([I.Z], () => I.Z.findActivity((e) => null != e.application_id)),
        o = (0, c.e7)([g.ZP, y.default], () => g.ZP.getUserCombo(y.default.getId(), t.id)),
        s = (0, c.e7)([b.Z, p.Z, v.Z], () => (0, _.Z)(t, a, b.Z, p.Z, v.Z)),
        l = Z(t),
        f = M(x({}, i), {
            baseTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
            activeTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
            showInviteEducation: s,
            activity: a,
            typingUsers: n ? [] : l,
            isFocused: (0, c.e7)([A.Z], () => A.Z.isFocused()),
            guildId: t.guild_id,
            isComboing: null != o,
            channel: t,
            isThreadCreation: n
        });
    return (0, r.jsx)(F, x({}, f));
}
