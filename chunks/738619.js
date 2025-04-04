n.d(t, { Z: () => H }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n.n(s),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    f = n(980568),
    _ = n(560768),
    p = n(812206),
    h = n(405701),
    m = n(540059),
    g = n(243778),
    E = n(843693),
    b = n(246642),
    y = n(921227),
    v = n(314897),
    O = n(430824),
    I = n(699516),
    S = n(885110),
    T = n(111583),
    N = n(594174),
    A = n(451478),
    C = n(626135),
    R = n(823379),
    P = n(5192),
    w = n(981631),
    D = n(388032),
    L = n(486850);
function x(e, t, n) {
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
function M(e) {
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
                x(e, t, n[t]);
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
function j(e, t) {
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
function U(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = G(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function G(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let B = [];
class F extends i.PureComponent {
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
            -1 === B.indexOf(e) &&
            (C.default.track(w.rMx.SHOW_TUTORIAL, {
                tutorial: 'activity-invite-nux-inline',
                application_id: e
            }),
            B.push(e));
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout);
    }
    render() {
        let { activity: e, isRefreshChatInputEnabled: t } = this.props;
        return (0, r.jsxs)('div', {
            className: a()(L.activityInviteEducation, { [L.activityInviteEducationFadeIn]: this.state.fadeIn }),
            children: [
                t
                    ? (0, r.jsx)(d.whL, {
                          size: 'sm',
                          className: L.activityInviteEducationLeftArrow
                      })
                    : (0, r.jsx)('div', { className: L.activityInviteEducationArrow }),
                (0, r.jsx)('span', {
                    children: D.NW.format(D.t['i/MoCg'], {
                        game: e.name,
                        dismissOnClick: this.handleDismissInviteEducation
                    })
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            x(this, 'state', { fadeIn: !1 }),
            x(this, 'timeout', null),
            x(this, 'handleDismissInviteEducation', () => {
                let { activity: e } = this.props;
                null != e && null != e.application_id && f.Z.dismissForApplicationId(e.application_id);
            });
    }
}
function V(e) {
    let { channel: t, guild: n } = e,
        i = [];
    return (0, r.jsx)(g.ZP, {
        contentTypes: i,
        children: (e) => {
            let { visibleContent: t, markAsDismissed: n } = e;
            return null;
        }
    });
}
function Z(e) {
    let { guildId: t, activity: n, showInviteEducation: i, isFocused: o, typingUsers: s, className: c, channel: u, isThreadCreation: f, renderDots: _, poggermodeEnabled: p, isComboing: g } = e,
        { rateLimitPerUser: E } = u,
        y = N.default.getCurrentUser(),
        v = O.Z.getGuild(t),
        S = E > 0,
        T = f
            ? []
            : l()(s)
                  .keys()
                  .filter((e) => e !== (null == y ? void 0 : y.id))
                  .reject((e) => I.Z.isBlockedOrIgnored(e))
                  .map((e) => N.default.getUser(e))
                  .filter(R.lm)
                  .map((e) => P.ZP.getName(t, u.id, e))
                  .value(),
        A = (0, m.R6)('TypingUsers');
    if (0 === T.length && !S && !g)
        return i && null != n
            ? (0, r.jsx)(F, {
                  activity: n,
                  isFocused: o,
                  isRefreshChatInputEnabled: A
              })
            : (0, r.jsx)(V, {
                  channel: u,
                  guild: v
              });
    let [C, w, x] = T,
        M = '';
    return (
        1 === T.length
            ? (M = D.NW.format(D.t.lJ9sZW, { a: C }))
            : 2 === T.length
              ? (M = D.NW.format(D.t.rB0CUV, {
                    a: C,
                    b: w
                }))
              : 3 === T.length
                ? (M = D.NW.format(D.t.StKTho, {
                      a: C,
                      b: w,
                      c: x
                  }))
                : T.length > 3 && (M = D.NW.string(D.t.uVDhqa)),
        (0, r.jsxs)('div', {
            className: a()(
                L.typing,
                {
                    'stop-animation': !o,
                    [L.isComboing]: p && g
                },
                c
            ),
            children: [
                (0, r.jsxs)('div', {
                    className: L.typingDots,
                    children: [
                        T.length > 0 &&
                            !1 !== _ &&
                            (0, r.jsx)(d.bbz, {
                                className: L.ellipsis,
                                dotRadius: 3.5,
                                themed: !0
                            }),
                        (0, r.jsx)('span', {
                            className: L.text,
                            'aria-live': 'polite',
                            'aria-atomic': !0,
                            children: M
                        })
                    ]
                }),
                A
                    ? null
                    : (0, r.jsx)(h.Z, {
                          channel: u,
                          isThreadCreation: f
                      }),
                p && g && (0, r.jsx)(b.Z, { channelId: u.id })
            ]
        })
    );
}
function H(e) {
    var { channel: t, isThreadCreation: n = !1 } = e,
        i = U(e, ['channel', 'isThreadCreation']);
    let o = (0, c.e7)([S.Z], () => S.Z.findActivity((e) => null != e.application_id)),
        a = (0, c.e7)([E.ZP, v.default], () => E.ZP.getUserCombo(v.default.getId(), t.id)),
        s = (0, c.e7)([y.Z, p.Z], () => (0, _.Z)(t, o, y.Z, p.Z)),
        l = j(M({}, i), {
            baseTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
            activeTextColor: (0, d.dQu)(u.Z.colors.INTERACTIVE_NORMAL).hex(),
            showInviteEducation: s,
            activity: o,
            typingUsers: (0, c.e7)([T.Z], () => T.Z.getTypingUsers(t.id)),
            isFocused: (0, c.e7)([A.Z], () => A.Z.isFocused()),
            guildId: t.guild_id,
            isComboing: null != a,
            channel: t,
            isThreadCreation: n
        });
    return (0, r.jsx)(Z, M({}, l));
}
