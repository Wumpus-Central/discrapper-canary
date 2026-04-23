"use strict";
n.d(t, {
    J: () =>
        function e(t, n) {
            return i
                ? t.checkVisibility({ visibilityProperty: !0 }) && !t.closest("[data-react-aria-prevent-focus]")
                : "#comment" !== t.nodeName &&
                      (function (e) {
                          let t = (0, r.mD)(e);
                          if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
                          let { display: n, visibility: i } = e.style,
                              s = "none" !== n && "hidden" !== i && "collapse" !== i;
                          if (s) {
                              let { getComputedStyle: t } = e.ownerDocument.defaultView,
                                  { display: n, visibility: r } = t(e);
                              s = "none" !== n && "hidden" !== r && "collapse" !== r;
                          }
                          return s;
                      })(t) &&
                      !t.hasAttribute("hidden") &&
                      !t.hasAttribute("data-react-aria-prevent-focus") &&
                      ("DETAILS" !== t.nodeName || !n || "SUMMARY" === n.nodeName || t.hasAttribute("open")) &&
                      (!t.parentElement || e(t.parentElement, t));
        },
});
var r = n(297987);
let i = "u" > typeof Element && "checkVisibility" in Element.prototype;
