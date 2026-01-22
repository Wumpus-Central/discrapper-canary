n.d(t, {
    A: () => p,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(47167),
    l = n(126904),
    c = n(10862),
    u = n(200041),
    d = n(985018),
    f = n(123511);

function p(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: i,
            iconClassName: p,
            hideText: _ = !1,
            hideTooltip: h = !1,
            canTruncate: m = !0,
            showChannelName: g = !1,
        } = e,
        E = (0, s.S31)(s.clD.ONLINE),
        b = (0, o.Ay)(t),
        y = t.isDM() || t.isGroupDM(),
        { enableTopNavButton: O } = (0, l.tR)({
            location: "VoiceActivityStatusWithCombinedTooltip",
        }),
        A =
            O && null != b
                ? b
                : y
                  ? d.intl.string(d.t["9FaEzi"])
                  : t.isGuildStageVoice()
                    ? d.intl.string(d.t.QygGCN)
                    : d.intl.string(d.t.msxteM),
        v = null == b || O ? A : "".concat(A, " (").concat(b, ")"),
        S = g ? v : A;
    return (0, r.jsx)(u.A, {
        icon: (0, r.jsx)(c.A, {
            size: "custom",
            color: E,
            channel: t,
            className: a()(f.Kk, p),
        }),
        text: S,
        tooltipText: h ? void 0 : v,
        textVariant: n,
        textClassName: i,
        hideTooltip: h,
        canTruncate: m,
        "aria-label": v,
        hideText: _,
    });
}
