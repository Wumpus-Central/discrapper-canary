n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(906732),
    l = n(201895),
    c = n(933557),
    u = n(209698),
    d = n(592125),
    f = n(814454),
    _ = n(473919),
    p = n(170187),
    h = n(532657),
    m = n(981631),
    g = n(388032);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e) {
    let {
            stream: t,
            game: n,
            textVariant: u,
            textClassName: h,
            iconClassName: E,
            hideIcon: b = !1,
            hideText: y = !1,
            hideTooltip: O = !1,
            canTruncate: v = !0,
        } = e,
        I = (0, a.e7)([d.Z], () => d.Z.getChannel(t.channelId)),
        T = (0, c.ZP)(I),
        { analyticsLocations: S } = (0, s.ZP)(),
        A = i.useCallback(() => {
            (0, f.A)({
                analyticsLocations: S,
                activityType: m.IIU.STREAMING,
                voiceChannelId: t.channelId,
            });
        }, [S, t.channelId]);
    if (b && y) return null;
    let C = (null == n ? void 0 : n.name) === "" ? null : null == n ? void 0 : n.name,
        N = null != C ? C : g.intl.string(g.t.eXan7B),
        R = !O && null != I && null != T;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !b &&
                (0, r.jsx)(_.Z, {
                    icon: o.ARS,
                    tooltipText: R ? T : void 0,
                    tooltipAriaLabel: R ? (0, l.ZP)({ channel: I }) : void 0,
                    className: E,
                    onTooltipShow: R ? A : void 0,
                }),
            !y &&
                (0, r.jsx)(p.Z, {
                    variant: u,
                    className: h,
                    canTruncate: v,
                    hideTooltip: O,
                    children: N,
                }),
        ],
    });
}
function O(e) {
    let {
            stream: t,
            game: n,
            textVariant: i,
            textClassName: s,
            iconClassName: l,
            hideIcon: u = !1,
            hideText: f = !1,
            hideTooltip: p = !1,
            canTruncate: m = !0,
            showChannelName: E = !1,
        } = e,
        b = (0, a.e7)([d.Z], () => d.Z.getChannel(t.channelId)),
        y = (0, c.ZP)(b),
        O = (null == n ? void 0 : n.name) === "" ? null : null == n ? void 0 : n.name,
        v = null != O ? O : g.intl.string(g.t.eXan7B),
        I = null != O ? O : g.intl.string(g.t.eXan7B),
        T =
            null != y
                ? (0, r.jsxs)(r.Fragment, {
                      children: [v, " (", y, ")"],
                  })
                : v,
        S = E ? T : v,
        A = null != y ? "".concat(I, " (").concat(y, ")") : I;
    return (0, r.jsx)(h.Z, {
        icon: u
            ? void 0
            : (0, r.jsx)(_.Z, {
                  icon: o.ARS,
                  className: l,
              }),
        text: S,
        tooltipText: p ? void 0 : T,
        textVariant: i,
        className: s,
        canTruncate: m,
        hideTooltip: p,
        "aria-label": A,
        hideText: f,
    });
}
function v(e) {
    return (0, u.b)({ location: "VoiceActivityStatusExperimentWrapper" })
        ? (0, r.jsx)(O, b({}, e))
        : (0, r.jsx)(y, b({}, e));
}
