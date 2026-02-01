n.d(t, {
    A: () => f,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(397927),
    s = n(47167),
    l = n(10862),
    c = n(200041),
    u = n(985018),
    d = n(123511);

function f(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: i,
            iconClassName: f,
            hideText: p = !1,
            hideTooltip: _ = !1,
            canTruncate: h = !0,
            showChannelName: m = !1,
        } = e,
        g = (0, o.S31)(o.clD.ONLINE),
        E = (0, s.Ay)(t),
        y = t.isDM() || t.isGroupDM(),
        b = y
            ? u.intl.string(u.t["9FaEzi"])
            : t.isGuildStageVoice()
              ? u.intl.string(u.t.QygGCN)
              : u.intl.string(u.t.msxteM),
        O = null != E ? "".concat(b, " (").concat(E, ")") : b,
        v = m ? O : b;
    return (0, r.jsx)(c.A, {
        icon: (0, r.jsx)(l.A, {
            size: "custom",
            color: g,
            channel: t,
            className: a()(d.Kk, f),
        }),
        text: v,
        tooltipText: _ ? void 0 : O,
        textVariant: n,
        textClassName: i,
        hideTooltip: _,
        canTruncate: h,
        "aria-label": O,
        hideText: p,
    });
}
