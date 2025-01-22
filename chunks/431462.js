r.d(n, {
    A: function () {
        return f;
    }
});
var i = r(262068),
    a = r(961742),
    o = r(27273),
    s = r(295415);
async function l(e, n, r) {
    var a;
    let o = null === (a = n.style) || void 0 === a ? void 0 : a.getPropertyValue(e);
    if (o) {
        let a = await (0, i.vg)(o, null, r);
        return n.style.setProperty(e, a, n.style.getPropertyPriority(e)), !0;
    }
    return !1;
}
async function u(e, n) {
    !(await l('background', e, n)) && (await l('background-image', e, n)), !(await l('mask', e, n)) && (await l('mask-image', e, n));
}
async function c(e, n) {
    let r = (0, a.oY)(e, HTMLImageElement);
    if (!(r && !(0, o.pZ)(e.src)) && !((0, a.oY)(e, SVGImageElement) && !(0, o.pZ)(e.href.baseVal))) return;
    let i = r ? e.src : e.href.baseVal,
        l = await (0, o.sx)(i, (0, s.b)(i), n);
    await new Promise((n, i) => {
        (e.onload = n), (e.onerror = i);
        let a = e;
        a.decode && (a.decode = n), 'lazy' === a.loading && (a.loading = 'eager'), r ? ((e.srcset = ''), (e.src = l)) : (e.href.baseVal = l);
    });
}
async function d(e, n) {
    let r = (0, a.qo)(e.childNodes).map((e) => f(e, n));
    await Promise.all(r).then(() => e);
}
async function f(e, n) {
    (0, a.oY)(e, Element) && (await u(e, n), await c(e, n), await d(e, n));
}
