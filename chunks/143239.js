n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(526181),
    a = n(47167),
    s = n(734057),
    o = n(864436),
    u = n(200041),
    c = n(985018);
function d(e) {
    let {
            stream: t,
            game: n,
            textVariant: d,
            textClassName: _,
            iconClassName: p,
            hideIcon: h = !1,
            hideText: m = !1,
            hideTooltip: A = !1,
            canTruncate: f = !0,
            showChannelName: g = !1,
        } = e,
        E = (0, l.bG)([s.A], () => s.A.getChannel(t.channelId)),
        C = (0, a.Ay)(E),
        I = n?.name === "" ? null : n?.name,
        v = null != I ? I : c.intl.string(c.t.eXan7B),
        y = null != C ? `${v} (${C})` : v,
        T = g ? y : v;
    return (0, r.jsx)(u.A, {
        icon: h ? void 0 : (0, r.jsx)(o.A, { icon: i.U, className: p }),
        text: T,
        tooltipText: A ? void 0 : y,
        textVariant: d,
        className: _,
        canTruncate: f,
        hideTooltip: A,
        "aria-label": y,
        hideText: m,
    });
}
