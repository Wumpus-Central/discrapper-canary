t.d(r, {
    $2: () => h,
    $Q: () => o,
    CD: () => f,
    GD: () => l,
    LL: () => i,
    RV: () => u,
    SS: () => C,
    ZH: () => c,
    bS: () => d,
    kK: () => n,
    pG: () => p,
    r4: () => v,
    rO: () => b,
    xO: () => q,
    yR: () => s,
    zO: () => m
});
var a = t(652525);
function o(e) {
    var r;
    return null != (r = e.localName) ? r : e.tagName.toLowerCase();
}
function n(e) {
    return null !== e && e.nodeType === e.ELEMENT_NODE;
}
function l(e) {
    return n(e) && 'caption' === o(e);
}
function i(e) {
    return n(e) && 'input' === o(e);
}
function s(e) {
    return n(e) && 'optgroup' === o(e);
}
function u(e) {
    return n(e) && 'select' === o(e);
}
function d(e) {
    return n(e) && 'table' === o(e);
}
function c(e) {
    return n(e) && 'textarea' === o(e);
}
function p(e) {
    var r = (null === e.ownerDocument ? e : e.ownerDocument).defaultView;
    if (null === r) throw TypeError('no window available');
    return r;
}
function m(e) {
    return n(e) && 'fieldset' === o(e);
}
function f(e) {
    return n(e) && 'legend' === o(e);
}
function b(e) {
    return n(e) && 'slot' === o(e);
}
function v(e) {
    return n(e) && 'svg' === o(e);
}
function h(e) {
    return n(e) && void 0 !== e.ownerSVGElement && 'title' === o(e);
}
function C(e, r) {
    return n(e) && e.hasAttribute(r)
        ? e
              .getAttribute(r)
              .split(' ')
              .map(function (r) {
                  return e.ownerDocument.getElementById(r);
              })
              .filter(function (e) {
                  return null !== e;
              })
        : [];
}
function q(e, r) {
    return !!n(e) && -1 !== r.indexOf((0, a.Z)(e));
}
