"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(526181),
    a = n(47167),
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
            hideTooltip: E = !1,
            canTruncate: m = !0,
            showChannelName: g = !1,
        } = e,
        A = (0, i.bG)([o.A], () => o.A.getChannel(t.channelId)),
        I = (0, a.Ay)(A),
        T = n?.name === "" ? null : n?.name,
        S = null != T ? T : c.intl.string(c.t.eXan7B),
        y = null != I ? `${S} (${I})` : S,
        N = g ? y : S;
    return (0, r.jsx)(u.A, {
        icon: p ? void 0 : (0, r.jsx)(l.A, { icon: s.U, className: f }),
        text: N,
        tooltipText: E ? void 0 : y,
        textVariant: d,
        className: _,
        canTruncate: m,
        hideTooltip: E,
        "aria-label": y,
        hideText: h,
    });
}
