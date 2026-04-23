n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(526181),
    s = n(47167),
    _ = n(734057),
    l = n(864436),
    o = n(200041),
    E = n(985018);
function d(e) {
    let {
            stream: t,
            game: n,
            textVariant: d,
            textClassName: c,
            iconClassName: u,
            hideIcon: I = !1,
            hideText: A = !1,
            hideTooltip: T = !1,
            canTruncate: S = !0,
            showChannelName: N = !1,
        } = e,
        O = (0, r.bG)([_.A], () => _.A.getChannel(t.channelId)),
        R = (0, s.Ay)(O),
        f = n?.name === "" ? null : n?.name,
        C = null != f ? f : E.intl.string(E.t.eXan7B),
        p = null != R ? `${C} (${R})` : C,
        m = N ? p : C;
    return (0, i.jsx)(o.A, {
        icon: I ? void 0 : (0, i.jsx)(l.A, { icon: a.U, className: u }),
        text: m,
        tooltipText: T ? void 0 : p,
        textVariant: d,
        className: c,
        canTruncate: S,
        hideTooltip: T,
        "aria-label": p,
        hideText: A,
    });
}
