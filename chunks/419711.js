"use strict";
r.d(t, { A: () => c, t: () => u });
var n = r(297987);
let a = "u" > typeof Element && "checkVisibility" in Element.prototype;
function s(e, t) {
    return a
        ? e.checkVisibility({ visibilityProperty: !0 }) && !e.closest("[data-react-aria-prevent-focus]")
        : "#comment" !== e.nodeName &&
              (function (e) {
                  let t = (0, n.mD)(e);
                  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
                  let { display: r, visibility: a } = e.style,
                      s = "none" !== r && "hidden" !== a && "collapse" !== a;
                  if (s) {
                      let { getComputedStyle: t } = e.ownerDocument.defaultView,
                          { display: r, visibility: n } = t(e);
                      s = "none" !== r && "hidden" !== n && "collapse" !== n;
                  }
                  return s;
              })(e) &&
              !e.hasAttribute("hidden") &&
              !e.hasAttribute("data-react-aria-prevent-focus") &&
              ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open")) &&
              (!e.parentElement || s(e.parentElement, e));
}
let i = [
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
    o = i.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
i.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
let l = i.join(':not([hidden]):not([tabindex="-1"]),');
function u(e) {
    return e.matches(o) && s(e) && !d(e);
}
function c(e) {
    return e.matches(l) && s(e) && !d(e);
}
function d(e) {
    let t = e;
    for (; null != t; ) {
        if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
        t = t.parentElement;
    }
    return !1;
}
