n.d(t, { A: () => d });
var r = n(262068),
    i = n(961742),
    o = n(27273),
    a = n(295415);
async function s(e, t, n) {
    var i;
    let o = null == (i = t.style) ? void 0 : i.getPropertyValue(e);
    if (o) {
        let i = await (0, r.vg)(o, null, n);
        return t.style.setProperty(e, i, t.style.getPropertyPriority(e)), !0;
    }
    return !1;
}
async function l(e, t) {
    (await s('background', e, t)) || (await s('background-image', e, t)), (await s('mask', e, t)) || (await s('mask-image', e, t));
}
async function c(e, t) {
    let n = (0, i.oY)(e, HTMLImageElement);
    if (!(n && !(0, o.pZ)(e.src)) && !((0, i.oY)(e, SVGImageElement) && !(0, o.pZ)(e.href.baseVal))) return;
    let r = n ? e.src : e.href.baseVal,
        s = await (0, o.sx)(r, (0, a.b)(r), t);
    await new Promise((t, r) => {
        (e.onload = t), (e.onerror = r);
        let i = e;
        i.decode && (i.decode = t), 'lazy' === i.loading && (i.loading = 'eager'), n ? ((e.srcset = ''), (e.src = s)) : (e.href.baseVal = s);
    });
}
async function u(e, t) {
    let n = (0, i.qo)(e.childNodes).map((e) => d(e, t));
    await Promise.all(n).then(() => e);
}
async function d(e, t) {
    (0, i.oY)(e, Element) && (await l(e, t), await c(e, t), await u(e, t));
}
