n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var a = n(17928),
    r = n(526181),
    s = n(47167),
    l = n(734057),
    o = n(864436),
    d = n(200041),
    c = n(985018);
function _(e) {
    let {
            stream: t,
            game: n,
            textVariant: _,
            textClassName: E,
            iconClassName: u,
            hideIcon: A = !1,
            hideText: I = !1,
            hideTooltip: T = !1,
            canTruncate: h = !0,
            showChannelName: S = !1,
        } = e,
        N = (0, a.bG)([l.A], () => l.A.getChannel(t.channelId)),
        f = (0, s.Ay)(N),
        p = n?.name === "" ? null : n?.name,
        m = null != p ? p : c.intl.string(c.t.eXan7B),
        O = null != f ? `${m} (${f})` : m,
        C = S ? O : m;
    return (0, i.jsx)(d.A, {
        icon: A ? void 0 : (0, i.jsx)(o.A, { icon: r.U, className: u }),
        text: C,
        tooltipText: T ? void 0 : O,
        textVariant: _,
        className: E,
        canTruncate: h,
        hideTooltip: T,
        "aria-label": O,
        hideText: I,
    });
}
