n.d(t, { Z: () => I });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(835834),
    l = n(906732),
    c = n(201895),
    u = n(933557),
    d = n(209698),
    f = n(592125),
    _ = n(814454),
    p = n(473919),
    h = n(170187),
    m = n(532657),
    g = n(981631),
    E = n(388032);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e) {
    let {
            stream: t,
            game: n,
            textVariant: d,
            textClassName: m,
            iconClassName: b,
            hideIcon: y = !1,
            hideText: O = !1,
            hideTooltip: v = !1,
            canTruncate: I = !0,
        } = e,
        T = (0, a.e7)([f.Z], () => f.Z.getChannel(t.channelId)),
        S = (0, u.ZP)(T),
        { analyticsLocations: A } = (0, l.ZP)(),
        C = i.useCallback(() => {
            (0, _.A)({
                analyticsLocations: A,
                activityType: g.IIU.STREAMING,
                voiceChannelId: t.channelId,
            });
        }, [A, t.channelId]);
    if (y && O) return null;
    let N = (0, s.R)("formatActivityString"),
        R = (null == n ? void 0 : n.name) === "" ? null : null == n ? void 0 : n.name,
        P = null != R ? (N ? R : E.intl.format(E.t["0wJXSh"], { name: R })) : E.intl.string(E.t.eXan7B),
        D = !v && null != T && null != S;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !y &&
                (0, r.jsx)(p.Z, {
                    icon: o.ARS,
                    tooltipText: D ? S : void 0,
                    tooltipAriaLabel: D ? (0, c.ZP)({ channel: T }) : void 0,
                    className: b,
                    onTooltipShow: D ? C : void 0,
                }),
            !O &&
                (0, r.jsx)(h.Z, {
                    variant: d,
                    className: m,
                    canTruncate: I,
                    hideTooltip: v,
                    children: P,
                }),
        ],
    });
}
function v(e) {
    let {
            stream: t,
            game: n,
            textVariant: i,
            textClassName: l,
            iconClassName: c,
            hideIcon: d = !1,
            hideText: _ = !1,
            hideTooltip: h = !1,
            canTruncate: g = !0,
            showChannelName: b = !1,
        } = e,
        y = (0, a.e7)([f.Z], () => f.Z.getChannel(t.channelId)),
        O = (0, u.ZP)(y),
        v = (null == n ? void 0 : n.name) === "" ? null : null == n ? void 0 : n.name,
        I = (0, s.R)("formatActivityString"),
        T = null != v ? (I ? v : E.intl.format(E.t["0wJXSh"], { name: v })) : E.intl.string(E.t.eXan7B),
        S = null != v ? (I ? v : E.intl.formatToPlainString(E.t["0wJXSh"], { name: v })) : E.intl.string(E.t.eXan7B),
        A =
            null != O
                ? (0, r.jsxs)(r.Fragment, {
                      children: [T, " (", O, ")"],
                  })
                : T,
        C = b ? A : T,
        N = null != O ? "".concat(S, " (").concat(O, ")") : S;
    return (0, r.jsx)(m.Z, {
        icon: d
            ? void 0
            : (0, r.jsx)(p.Z, {
                  icon: o.ARS,
                  className: c,
              }),
        text: C,
        tooltipText: h ? void 0 : A,
        textVariant: i,
        className: l,
        canTruncate: g,
        hideTooltip: h,
        "aria-label": N,
        hideText: _,
    });
}
function I(e) {
    return (0, d.b)({ location: "VoiceActivityStatusExperimentWrapper" })
        ? (0, r.jsx)(v, y({}, e))
        : (0, r.jsx)(O, y({}, e));
}
