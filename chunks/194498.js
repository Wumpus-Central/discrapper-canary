"use strict";
n.d(t, { A: () => c, t: () => u });
var r = n(745391);
let i = "u" > typeof Element && "checkVisibility" in Element.prototype;
function a(e, t) {
    return i
        ? e.checkVisibility({ visibilityProperty: !0 }) && !e.closest("[data-react-aria-prevent-focus]")
        : "#comment" !== e.nodeName &&
              (function (e) {
                  let t = (0, r.mD)(e);
                  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
                  let { display: n, visibility: i } = e.style,
                      a = "none" !== n && "hidden" !== i && "collapse" !== i;
                  if (a) {
                      let { getComputedStyle: t } = e.ownerDocument.defaultView,
                          { display: n, visibility: r } = t(e);
                      a = "none" !== n && "hidden" !== r && "collapse" !== r;
                  }
                  return a;
              })(e) &&
              !e.hasAttribute("hidden") &&
              !e.hasAttribute("data-react-aria-prevent-focus") &&
              ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open")) &&
              (!e.parentElement || a(e.parentElement, e));
}
let o = [
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
    s = o.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
o.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
let l = o.join(':not([hidden]):not([tabindex="-1"]),');
function u(e) {
    return e.matches(s) && a(e) && !d(e);
}
function c(e) {
    return e.matches(l) && a(e) && !d(e);
}
function d(e) {
    let t = e;
    for (; null != t; ) {
        if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
        t = t.parentElement;
    }
    return !1;
}
