n.d(t, { J: () => s });
var r = n(477232);
let i = "undefined" != typeof Element && "checkVisibility" in Element.prototype;
function a(e) {
    let t = (0, r.kR)(e);
    if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
    let { display: n, visibility: i } = e.style,
        a = "none" !== n && "hidden" !== i && "collapse" !== i;
    if (a) {
        let { getComputedStyle: t } = e.ownerDocument.defaultView,
            { display: n, visibility: r } = t(e);
        a = "none" !== n && "hidden" !== r && "collapse" !== r;
    }
    return a;
}
function o(e, t) {
    return (
        !e.hasAttribute("hidden") &&
        !e.hasAttribute("data-react-aria-prevent-focus") &&
        ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
    );
}
function s(e, t) {
    return i
        ? e.checkVisibility({ visibilityProperty: !0 }) && !e.closest("[data-react-aria-prevent-focus]")
        : "#comment" !== e.nodeName && a(e) && o(e, t) && (!e.parentElement || s(e.parentElement, e));
}
