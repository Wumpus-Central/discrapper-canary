"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(935154),
    o = n(652215),
    l = n(47167),
    u = n(10862),
    c = n(200041),
    d = n(985018),
    _ = n(124704);
function f(e) {
    let {
            channel: t,
            textVariant: n,
            textClassName: i,
            iconClassName: f,
            hideText: p = !1,
            hideTooltip: h = !1,
            canTruncate: E = !0,
            showChannelName: m = !1,
        } = e,
        g = (0, a.S3)(o.clD.ONLINE),
        A = (0, l.Ay)(t),
        I =
            t.isDM() || t.isGroupDM()
                ? d.intl.string(d.t["9FaEzi"])
                : t.isGuildStageVoice()
                  ? d.intl.string(d.t.QygGCN)
                  : d.intl.string(d.t.msxteM),
        T = null != A ? `${I} (${A})` : I,
        S = m ? T : I;
    return (0, r.jsx)(c.A, {
        icon: (0, r.jsx)(u.A, { size: "custom", color: g, channel: t, className: s()(_.Kk, f) }),
        text: S,
        tooltipText: h ? void 0 : T,
        textVariant: n,
        textClassName: i,
        hideTooltip: h,
        canTruncate: E,
        "aria-label": T,
        hideText: p,
    });
}
