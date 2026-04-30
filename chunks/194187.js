n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    s = n(133171),
    l = n(652215),
    o = n(47167),
    d = n(10862),
    c = n(200041),
    _ = n(985018),
    E = n(124704);
function u(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: a,
            iconClassName: u,
            hideText: A = !1,
            hideTooltip: I = !1,
            canTruncate: T = !0,
            showChannelName: h = !1,
        } = e,
        S = (0, s.S3)(l.clD.ONLINE),
        N = (0, o.Ay)(t),
        f =
            t.isDM() || t.isGroupDM()
                ? _.intl.string(_.t["9FaEzi"])
                : t.isGuildStageVoice()
                  ? _.intl.string(_.t.QygGCN)
                  : _.intl.string(_.t.msxteM),
        p = null != N ? `${f} (${N})` : f,
        m = h ? p : f;
    return (0, i.jsx)(c.A, {
        icon: (0, i.jsx)(d.A, { size: "custom", color: S, channel: t, className: r()(E.Kk, u) }),
        text: m,
        tooltipText: I ? void 0 : p,
        textVariant: n,
        textClassName: a,
        hideTooltip: I,
        canTruncate: T,
        "aria-label": p,
        hideText: A,
    });
}
