n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(481060),
    s = n(906732),
    l = n(201895),
    c = n(933557),
    u = n(592125),
    d = n(814454),
    f = n(473919),
    _ = n(170187),
    p = n(981631),
    h = n(388032);
function m(e) {
    let { stream: t, game: n, textVariant: m, textClassName: g, iconClassName: E, hideIcon: b = !1, hideText: y = !1, hideTooltip: O = !1, canTruncate: v = !0 } = e,
        I = (0, a.e7)([u.Z], () => u.Z.getChannel(t.channelId)),
        S = (0, c.ZP)(I),
        { analyticsLocations: T } = (0, s.ZP)(),
        A = i.useCallback(() => {
            (0, d.A)({
                analyticsLocations: T,
                activityType: p.IIU.STREAMING,
                voiceChannelId: t.channelId
            });
        }, [T, t.channelId]);
    if (b && y) return null;
    let N = (null == n ? void 0 : n.name) === '' ? null : null == n ? void 0 : n.name,
        C = null != N ? h.intl.format(h.t['0wJXSk'], { name: N }) : h.intl.string(h.t.eXan7O),
        P = !O && null != I && null != S;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !b &&
                (0, r.jsx)(f.Z, {
                    icon: o.ARS,
                    tooltipText: P ? S : void 0,
                    tooltipAriaLabel: P ? (0, l.ZP)({ channel: I }) : void 0,
                    className: E,
                    onTooltipShow: P ? A : void 0
                }),
            !y &&
                (0, r.jsx)(_.Z, {
                    variant: m,
                    className: g,
                    canTruncate: v,
                    children: C
                })
        ]
    });
}
