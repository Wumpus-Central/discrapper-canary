n.d(t, {
    Cn: () => S,
    wV: () => v,
});
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(299206),
    c = n(389052),
    u = n(158508),
    d = n(710631),
    f = n(622724),
    p = n(785717),
    _ = n(732380),
    m = n(228168),
    h = n(388032);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e) {
    let { user: t, guildId: n, viewProfileItem: i, appContext: _, popoutTargetRef: g, children: b } = e,
        { trackUserProfileAction: y } = (0, p.KZ)(),
        { analyticsLocations: O, newestAnalyticsLocation: v } = (0, s.ZP)(o.Z.USER_PROFILE_OVERFLOW_MENU),
        S = {
            action: m.yM.PRESS_OPTIONS,
            icon: a.xhG,
            tooltipText: h.intl.string(h.t["UKOtz+"]),
            "aria-label": h.intl.string(h.t["UKOtz+"]),
        },
        I = (0, d.Z)({
            user: t,
            guildId: n,
            onAction: () =>
                y({
                    action: "PRESS_INVITE_TO_SERVER",
                    analyticsLocations: O,
                }),
        }),
        T = (0, c.Z)({
            user: t,
            guildId: n,
            location: v,
            color: "danger",
            appContext: _,
            onBlock: () =>
                y({
                    action: "BLOCK",
                    analyticsLocations: O,
                }),
            onIgnore: () =>
                y({
                    action: "IGNORE",
                    analyticsLocations: O,
                }),
            onUnblock: () =>
                y({
                    action: "UNBLOCK",
                    analyticsLocations: O,
                }),
        }),
        C = (0, u.Z)({
            user: t,
            guildId: n,
            location: v,
            appContext: _,
            onBlock: () =>
                y({
                    action: "BLOCK",
                    analyticsLocations: O,
                }),
            onIgnore: () =>
                y({
                    action: "IGNORE",
                    analyticsLocations: O,
                }),
            onUnignore: () =>
                y({
                    action: "UNIGNORE",
                    analyticsLocations: O,
                }),
        }),
        A = (0, f.Z)({
            user: t,
            guildId: n,
            location: v,
            appContext: _,
            color: "danger",
            onAction: () =>
                y({
                    action: "REPORT",
                    analyticsLocations: O,
                }),
        }),
        N = [
            [i, I],
            [
                C,
                T,
                A,
                (0, f.T)({
                    user: t,
                    guildId: n,
                    location: v,
                    appContext: _,
                    color: "danger",
                    onAction: () =>
                        y({
                            action: "REPORT",
                            analyticsLocations: O,
                        }),
                }),
            ],
            [
                (0, l.Z)({
                    id: t.id,
                    label: h.intl.string(h.t["/AXYnE"]),
                    onSuccess: () =>
                        y({
                            action: "COPY_USER_ID",
                            analyticsLocations: O,
                        }),
                }),
            ],
        ];
    return N.every((e) => e.every((e) => null == e))
        ? null
        : (0, r.jsx)(s.Gt, {
              value: O,
              children: (0, r.jsx)(a.yRy, {
                  targetElementRef: g,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (0, r.jsx)(a.v2r, {
                          navId: "user-profile-overflow-menu",
                          onSelect: void 0,
                          onClose: t,
                          "aria-label": h.intl.string(h.t.AXIHpV),
                          children: N.map((e, t) => (0, r.jsx)(a.kSQ, { children: e.map((e) => e) }, t)),
                      });
                  },
                  children: (e) => b(E({}, e, S)),
              }),
          });
}
function v(e) {
    let t = i.useRef(null);
    return (0, r.jsx)(
        O,
        y(E({}, e), {
            popoutTargetRef: t,
            children: (e) => (0, r.jsx)(_.pt, E({ buttonRef: t }, e)),
        }),
    );
}
function S(e) {
    let t = i.useRef(null);
    return (0, r.jsx)(
        O,
        y(E({}, e), {
            popoutTargetRef: t,
            children: (e) => (0, r.jsx)(_.f6, E({ buttonRef: t }, e)),
        }),
    );
}
