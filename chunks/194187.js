n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(133171),
    _ = n(652215),
    l = n(47167),
    o = n(10862),
    E = n(200041),
    d = n(985018),
    c = n(124704);
function u(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: r,
            iconClassName: u,
            hideText: I = !1,
            hideTooltip: A = !1,
            canTruncate: T = !0,
            showChannelName: S = !1,
        } = e,
        N = (0, s.S3)(_.clD.ONLINE),
        O = (0, l.Ay)(t),
        R =
            t.isDM() || t.isGroupDM()
                ? d.intl.string(d.t["9FaEzi"])
                : t.isGuildStageVoice()
                  ? d.intl.string(d.t.QygGCN)
                  : d.intl.string(d.t.msxteM),
        f = null != O ? `${R} (${O})` : R,
        C = S ? f : R;
    return (0, i.jsx)(E.A, {
        icon: (0, i.jsx)(o.A, { size: "custom", color: N, channel: t, className: a()(c.Kk, u) }),
        text: C,
        tooltipText: A ? void 0 : f,
        textVariant: n,
        textClassName: r,
        hideTooltip: A,
        canTruncate: T,
        "aria-label": f,
        hideText: I,
    });
}
