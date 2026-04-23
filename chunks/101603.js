"use strict";
t.d(r, {
    A3: () => n,
    Er: () => m,
    IV: () => f,
    Jb: () => b,
    Jk: () => a.J,
    Ke: () => p,
    NU: () => q,
    QB: () => C,
    QY: () => c,
    SS: () => d,
    SY: () => i,
    UA: () => s,
    UC: () => l,
    h1: () => v,
    nW: () => h,
    q4: () => u,
    vq: () => o,
});
var a = t(512757),
    l = ["presentation", "none"];
function o(e) {
    return null !== e && e.nodeType === e.ELEMENT_NODE;
}
function s(e) {
    return o(e) && "caption" === (0, a.J)(e);
}
function n(e) {
    return o(e) && "input" === (0, a.J)(e);
}
function i(e) {
    return o(e) && "optgroup" === (0, a.J)(e);
}
function u(e) {
    return o(e) && "select" === (0, a.J)(e);
}
function d(e) {
    return o(e) && "table" === (0, a.J)(e);
}
function c(e) {
    return o(e) && "textarea" === (0, a.J)(e);
}
function p(e) {
    var r = (null === e.ownerDocument ? e : e.ownerDocument).defaultView;
    if (null === r) throw TypeError("no window available");
    return r;
}
function m(e) {
    return o(e) && "fieldset" === (0, a.J)(e);
}
function b(e) {
    return o(e) && "legend" === (0, a.J)(e);
}
function f(e) {
    return o(e) && "slot" === (0, a.J)(e);
}
function v(e) {
    return o(e) && "svg" === (0, a.J)(e);
}
function h(e) {
    return o(e) && void 0 !== e.ownerSVGElement && "title" === (0, a.J)(e);
}
function C(e, r) {
    if (o(e) && e.hasAttribute(r)) {
        var t = e.getAttribute(r).split(" "),
            a = e.getRootNode ? e.getRootNode() : e.ownerDocument;
        return t
            .map(function (e) {
                return a.getElementById(e);
            })
            .filter(function (e) {
                return null !== e;
            });
    }
    return [];
}
function q(e, r) {
    return !!o(e) && -1 !== r.indexOf((0, a.A)(e));
}
