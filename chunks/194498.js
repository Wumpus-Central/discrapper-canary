"use strict";
r.d(t, { A: () => c, t: () => u });
var n = r(745391);
let o = "u" > typeof Element && "checkVisibility" in Element.prototype;
function i(e, t) {
    return o
        ? e.checkVisibility({ visibilityProperty: !0 }) && !e.closest("[data-react-aria-prevent-focus]")
        : "#comment" !== e.nodeName &&
              (function (e) {
                  let t = (0, n.mD)(e);
                  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
                  let { display: r, visibility: o } = e.style,
                      i = "none" !== r && "hidden" !== o && "collapse" !== o;
                  if (i) {
                      let { getComputedStyle: t } = e.ownerDocument.defaultView,
                          { display: r, visibility: n } = t(e);
                      i = "none" !== r && "hidden" !== n && "collapse" !== n;
                  }
                  return i;
              })(e) &&
              !e.hasAttribute("hidden") &&
              !e.hasAttribute("data-react-aria-prevent-focus") &&
              ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open")) &&
              (!e.parentElement || i(e.parentElement, e));
}
let a = [
        "input:not([disabled]):not([type=hidden])",
        "select:not([disabled])",
        "textarea:not([disabled])",
        "button:not([disabled])",
        "a[href]",
        "area[href]",
        "summary",
        "iframe",
        "object",
        "embed",
        "audio[controls]",
        "video[controls]",
        '[contenteditable]:not([contenteditable^="false"])',
        "permission",
    ],
    s = a.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
a.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
let l = a.join(':not([hidden]):not([tabindex="-1"]),');
function u(e) {
    return e.matches(s) && i(e) && !f(e);
}
function c(e) {
    return e.matches(l) && i(e) && !f(e);
}
function f(e) {
    let t = e;
    for (; null != t; ) {
        if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
        t = t.parentElement;
    }
    return !1;
}
