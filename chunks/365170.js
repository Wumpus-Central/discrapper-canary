"use strict";
n.d(t, { $: () => s, v: () => a });
var l = n(583954),
    i = n(241678);
function s(e) {
    let t,
        { canvas: n, badges: s, startPosition: a, maxWidth: r } = e;
    for (let { iconPath: e, text: o } of (n.setFont({ size: 12, family: i.mw, weight: 500, truncate: l.Kq.None }), s)) {
        let l = null != t ? t.w + t.x + 12 : a,
            i = null != t ? t.w + t.x + 12 + 18 : a + 18;
        n.drawPath(e, { x: l, y: 88 }, !0, 0.6), (t = n.drawText(o, { x: i, y: 99, w: r }, !0));
    }
}
function a(e) {
    let {
        canvas: t,
        avatarSrcs: n,
        position: { x: i, y: s },
        avatarImageSize: a,
    } = e;
    for (let e = 0; e < n.length; e++)
        e < n.length - 1 &&
            t.clipRoundedRect({ x: i + (e + 1) * (a - 8) - 2, y: s - 1, w: a + 2, h: a + 2 }, a / 2, !0),
            t.drawRoundedImage(n[e], { x: i + e * (a - 8), y: s }, { w: a, h: a }, 50, { fillMode: l.VZ.Cover }),
            t.restoreContext();
}
