"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(47167),
    o = n(734057),
    l = n(864436),
    u = n(200041),
    c = n(985018);
function d(e) {
    let {
            stream: t,
            game: n,
            textVariant: d,
            textClassName: _,
            iconClassName: f,
            hideIcon: p = !1,
            hideText: h = !1,
            hideTooltip: m = !1,
            canTruncate: g = !0,
            showChannelName: E = !1,
        } = e,
        A = (0, i.bG)([o.A], () => o.A.getChannel(t.channelId)),
        I = (0, s.Ay)(A),
        T = n?.name === "" ? null : n?.name,
        y = null != T ? T : c.intl.string(c.t.eXan7B),
        S = null != I ? `${y} (${I})` : y,
        v = E ? S : y,
        C = S;
    return (0, r.jsx)(u.A, {
        icon: p ? void 0 : (0, r.jsx)(l.A, { icon: a.Uk3, className: f }),
        text: v,
        tooltipText: m ? void 0 : S,
        textVariant: d,
        className: _,
        canTruncate: g,
        hideTooltip: m,
        "aria-label": C,
        hideText: h,
    });
}
