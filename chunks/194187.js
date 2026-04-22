n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(935154),
    s = n(652215),
    o = n(47167),
    u = n(10862),
    c = n(200041),
    d = n(985018),
    _ = n(124704);
function p(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: l,
            iconClassName: p,
            hideText: h = !1,
            hideTooltip: m = !1,
            canTruncate: A = !0,
            showChannelName: f = !1,
        } = e,
        g = (0, a.S3)(s.clD.ONLINE),
        E = (0, o.Ay)(t),
        C =
            t.isDM() || t.isGroupDM()
                ? d.intl.string(d.t["9FaEzi"])
                : t.isGuildStageVoice()
                  ? d.intl.string(d.t.QygGCN)
                  : d.intl.string(d.t.msxteM),
        I = null != E ? `${C} (${E})` : C,
        v = f ? I : C;
    return (0, r.jsx)(c.A, {
        icon: (0, r.jsx)(u.A, { size: "custom", color: g, channel: t, className: i()(_.Kk, p) }),
        text: v,
        tooltipText: m ? void 0 : I,
        textVariant: n,
        textClassName: l,
        hideTooltip: m,
        canTruncate: A,
        "aria-label": I,
        hideText: h,
    });
}
