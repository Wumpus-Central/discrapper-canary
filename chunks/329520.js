n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e) {
    let { stream: t, game: n, textVariant: u, textClassName: h, iconClassName: E, hideIcon: b = !1, hideText: y = !1, hideTooltip: O = !1, canTruncate: v = !0 } = e,
        I = (0, a.e7)([d.Z], () => d.Z.getChannel(t.channelId)),
        S = (0, c.ZP)(I),
        { analyticsLocations: T } = (0, s.ZP)(),
        A = i.useCallback(() => {
            (0, f.A)({
                analyticsLocations: T,
                activityType: m.IIU.STREAMING,
                voiceChannelId: t.channelId
            });
        }, [T, t.channelId]);
    if (b && y) return null;
    let N = (null == n ? void 0 : n.name) === '' ? null : null == n ? void 0 : n.name,
        C = null != N ? g.intl.format(g.t['0wJXSk'], { name: N }) : g.intl.string(g.t.eXan7O),
        P = !O && null != I && null != S;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !b &&
                (0, r.jsx)(_.Z, {
                    icon: o.ARS,
                    tooltipText: P ? S : void 0,
                    tooltipAriaLabel: P ? (0, l.ZP)({ channel: I }) : void 0,
                    className: E,
                    onTooltipShow: P ? A : void 0
                }),
            !y &&
                (0, r.jsx)(p.Z, {
                    variant: u,
                    className: h,
                    canTruncate: v,
                    hideTooltip: O,
                    children: C
                })
        ]
    });
}
function O(e) {
    let { stream: t, game: n, textVariant: i, textClassName: s, iconClassName: l, hideIcon: u = !1, hideText: f = !1, hideTooltip: p = !1, canTruncate: m = !0, showChannelName: E = !1 } = e,
        b = (0, a.e7)([d.Z], () => d.Z.getChannel(t.channelId)),
        y = (0, c.ZP)(b),
        O = (null == n ? void 0 : n.name) === '' ? null : null == n ? void 0 : n.name,
        v = null != O ? g.intl.format(g.t['0wJXSk'], { name: O }) : g.intl.string(g.t.eXan7O),
        I = null != O ? g.intl.formatToPlainString(g.t['0wJXSk'], { name: O }) : g.intl.string(g.t.eXan7O),
        S =
            null != y
                ? (0, r.jsxs)(r.Fragment, {
                      children: [v, ' (', y, ')']
                  })
                : v,
        T = E ? S : v,
        A = null != y ? ''.concat(I, ' (').concat(y, ')') : I;
    return (0, r.jsx)(h.Z, {
        icon: u
            ? void 0
            : (0, r.jsx)(_.Z, {
                  icon: o.ARS,
                  className: l
              }),
        text: T,
        tooltipText: p ? void 0 : S,
        textVariant: i,
        className: s,
        canTruncate: m,
        hideTooltip: p,
        'aria-label': A,
        hideText: f
    });
}
function v(e) {
    return (0, u.b)({ location: 'VoiceActivityStatusExperimentWrapper' }) ? (0, r.jsx)(O, b({}, e)) : (0, r.jsx)(y, b({}, e));
}
