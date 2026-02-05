"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(47167),
    l = n(10862),
    u = n(200041),
    c = n(985018),
    d = n(123511);
function _(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: i,
            iconClassName: _,
            hideText: f = !1,
            hideTooltip: p = !1,
            canTruncate: h = !0,
            showChannelName: m = !1,
        } = e,
        g = (0, s.S31)(s.clD.ONLINE),
        E = (0, o.Ay)(t),
        A = t.isDM() || t.isGroupDM(),
        I = A
            ? c.intl.string(c.t["9FaEzi"])
            : t.isGuildStageVoice()
              ? c.intl.string(c.t.QygGCN)
              : c.intl.string(c.t.msxteM),
        T = null != E ? `${I} (${E})` : I,
        y = m ? T : I;
    return (0, r.jsx)(u.A, {
        icon: (0, r.jsx)(l.A, { size: "custom", color: g, channel: t, className: a()(d.Kk, _) }),
        text: y,
        tooltipText: p ? void 0 : T,
        textVariant: n,
        textClassName: i,
        hideTooltip: p,
        canTruncate: h,
        "aria-label": T,
        hideText: f,
    });
}
