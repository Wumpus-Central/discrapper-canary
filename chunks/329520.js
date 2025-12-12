n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(906732),
    l = n(201895),
    c = n(933557),
    u = n(209698),
    d = n(592125),
    f = n(814454),
    p = n(473919),
    _ = n(170187),
    m = n(532657),
    h = n(981631),
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
            textClassName: m,
            iconClassName: E,
            hideIcon: b = !1,
            hideText: y = !1,
            hideTooltip: O = !1,
            canTruncate: v = !0,
        } = e,
        S = (0, a.e7)([d.Z], () => d.Z.getChannel(t.channelId)),
        I = (0, c.ZP)(S),
        { analyticsLocations: T } = (0, s.ZP)(),
        C = i.useCallback(() => {
            (0, f.A)({
                analyticsLocations: T,
                activityType: h.IIU.STREAMING,
                voiceChannelId: t.channelId,
            });
        }, [T, t.channelId]);
    if (b && y) return null;
    let A = (null == n ? void 0 : n.name) === "" ? null : null == n ? void 0 : n.name,
        N = null != A ? A : g.intl.string(g.t.eXan7B),
        P = !O && null != S && null != I;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !b &&
                (0, r.jsx)(p.Z, {
                    icon: o.ARS,
                    tooltipText: P ? I : void 0,
                    tooltipAriaLabel: P ? (0, l.ZP)({ channel: S }) : void 0,
                    className: E,
                    onTooltipShow: P ? C : void 0,
                }),
            !y &&
                (0, r.jsx)(_.Z, {
                    variant: u,
                    className: m,
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
            hideTooltip: _ = !1,
            canTruncate: h = !0,
            showChannelName: E = !1,
        } = e,
        b = (0, a.e7)([d.Z], () => d.Z.getChannel(t.channelId)),
        y = (0, c.ZP)(b),
        O = (null == n ? void 0 : n.name) === "" ? null : null == n ? void 0 : n.name,
        v = null != O ? O : g.intl.string(g.t.eXan7B),
        S = null != y ? "".concat(v, " (").concat(y, ")") : v,
        I = E ? S : v,
        T = S;
    return (0, r.jsx)(m.Z, {
        icon: u
            ? void 0
            : (0, r.jsx)(p.Z, {
                  icon: o.ARS,
                  className: l,
              }),
        text: I,
        tooltipText: _ ? void 0 : S,
        textVariant: i,
        className: s,
        canTruncate: h,
        hideTooltip: _,
        "aria-label": T,
        hideText: f,
    });
}
function v(e) {
    return (0, u.b)({ location: "VoiceActivityStatusExperimentWrapper" })
        ? (0, r.jsx)(O, b({}, e))
        : (0, r.jsx)(y, b({}, e));
}
