n.d(t, { A: () => d });
var i = n(262068),
    r = n(961742),
    a = n(27273),
    s = n(295415);
async function o(e, t, n) {
    var r;
    let a = null === (r = t.style) || void 0 === r ? void 0 : r.getPropertyValue(e);
    if (a) {
        let r = await (0, i.vg)(a, null, n);
        return t.style.setProperty(e, r, t.style.getPropertyPriority(e)), !0;
    }
    return !1;
}
async function l(e, t) {
    (await o('background', e, t)) || (await o('background-image', e, t)), (await o('mask', e, t)) || (await o('mask-image', e, t));
}
async function u(e, t) {
    let n = (0, r.oY)(e, HTMLImageElement);
    if (!(n && !(0, a.pZ)(e.src)) && !((0, r.oY)(e, SVGImageElement) && !(0, a.pZ)(e.href.baseVal))) return;
    let i = n ? e.src : e.href.baseVal,
        o = await (0, a.sx)(i, (0, s.b)(i), t);
    await new Promise((t, i) => {
        (e.onload = t), (e.onerror = i);
        let r = e;
        r.decode && (r.decode = t), 'lazy' === r.loading && (r.loading = 'eager'), n ? ((e.srcset = ''), (e.src = o)) : (e.href.baseVal = o);
    });
}
async function c(e, t) {
    let n = (0, r.qo)(e.childNodes).map((e) => d(e, t));
    await Promise.all(n).then(() => e);
}
async function d(e, t) {
    (0, r.oY)(e, Element) && (await l(e, t), await u(e, t), await c(e, t));
}
