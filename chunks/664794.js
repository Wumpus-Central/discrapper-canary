n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(299206),
    c = n(389052),
    u = n(158508),
    d = n(710631),
    f = n(622724),
    _ = n(785717),
    p = n(475413),
    h = n(388032);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = b(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function b(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function y(e) {
    var { type: t, user: n, guildId: m, viewProfileItem: b, appContext: y } = e,
        v = E(e, ['type', 'user', 'guildId', 'viewProfileItem', 'appContext']);
    let O = i.useRef(null),
        { trackUserProfileAction: I } = (0, _.KZ)(),
        { analyticsLocations: S, newestAnalyticsLocation: T } = (0, s.ZP)(o.Z.USER_PROFILE_OVERFLOW_MENU),
        A = (0, d.Z)({
            user: n,
            guildId: m,
            onAction: () =>
                I({
                    action: 'PRESS_INVITE_TO_SERVER',
                    analyticsLocations: S
                })
        }),
        N = (0, c.Z)({
            user: n,
            guildId: m,
            location: T,
            color: 'danger',
            appContext: y,
            onBlock: () =>
                I({
                    action: 'BLOCK',
                    analyticsLocations: S
                }),
            onIgnore: () =>
                I({
                    action: 'IGNORE',
                    analyticsLocations: S
                }),
            onUnblock: () =>
                I({
                    action: 'UNBLOCK',
                    analyticsLocations: S
                })
        }),
        C = (0, u.Z)({
            user: n,
            guildId: m,
            location: T,
            appContext: y,
            onBlock: () =>
                I({
                    action: 'BLOCK',
                    analyticsLocations: S
                }),
            onIgnore: () =>
                I({
                    action: 'IGNORE',
                    analyticsLocations: S
                }),
            onUnignore: () =>
                I({
                    action: 'UNIGNORE',
                    analyticsLocations: S
                })
        }),
        R = (0, f.Z)({
            user: n,
            guildId: m,
            location: T,
            appContext: y,
            color: 'danger',
            onAction: () =>
                I({
                    action: 'REPORT',
                    analyticsLocations: S
                })
        }),
        P = [
            [b, A],
            [
                C,
                N,
                R,
                (0, f.T)({
                    user: n,
                    guildId: m,
                    location: T,
                    appContext: y,
                    color: 'danger',
                    onAction: () =>
                        I({
                            action: 'REPORT',
                            analyticsLocations: S
                        })
                })
            ],
            [
                (0, l.Z)({
                    id: n.id,
                    label: h.intl.string(h.t['/AXYnJ']),
                    onSuccess: () =>
                        I({
                            action: 'COPY_USER_ID',
                            analyticsLocations: S
                        })
                })
            ]
        ];
    if (P.every((e) => e.every((e) => null == e))) return null;
    let w = t === p.j8.BANNER ? p.oY : p.ef;
    return (0, r.jsx)(s.Gt, {
        value: S,
        children: (0, r.jsx)(a.yRy, {
            targetElementRef: O,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(a.v2r, {
                    navId: 'user-profile-overflow-menu',
                    onSelect: void 0,
                    onClose: t,
                    'aria-label': h.intl.string(h.t.AXIHpa),
                    children: P.map((e, t) => (0, r.jsx)(a.kSQ, { children: e.map((e) => e) }, t))
                });
            },
            children: (e) =>
                (0, r.jsx)(
                    w,
                    g(
                        {
                            ref: O,
                            action: 'PRESS_OPTIONS',
                            icon: a.xhG,
                            tooltipText: h.intl.string(h.t.UKOtz8)
                        },
                        e,
                        v
                    )
                )
        })
    });
}
