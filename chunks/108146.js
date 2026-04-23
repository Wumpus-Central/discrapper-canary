"use strict";
n.d(t, { t: () => l });
var r = n(13163),
    i = n(3388),
    s = n(290424),
    a = n(64700),
    o = n(853590);
function l(e, t) {
    let { "aria-label": n, "aria-labelledby": l, orientation: u = "horizontal" } = e,
        [c, d] = (0, a.useState)(!1);
    (0, i.N)(() => {
        var e;
        d(!!(t.current && (null == (e = t.current.parentElement) ? void 0 : e.closest('[role="toolbar"]'))));
    });
    let { direction: _ } = (0, o.Y)(),
        f = "rtl" === _ && "horizontal" === u,
        p = (0, r.C7)(t),
        h = (0, a.useRef)(null);
    return {
        toolbarProps: {
            ...(0, s.$)(e, { labelable: !0 }),
            role: c ? "group" : "toolbar",
            "aria-orientation": u,
            "aria-label": n,
            "aria-labelledby": null == n ? l : void 0,
            onKeyDownCapture: c
                ? void 0
                : (e) => {
                      if (e.currentTarget.contains(e.target)) {
                          if (
                              ("horizontal" === u && "ArrowRight" === e.key) ||
                              ("vertical" === u && "ArrowDown" === e.key)
                          )
                              f ? p.focusPrevious() : p.focusNext();
                          else if (
                              ("horizontal" === u && "ArrowLeft" === e.key) ||
                              ("vertical" === u && "ArrowUp" === e.key)
                          )
                              f ? p.focusNext() : p.focusPrevious();
                          else {
                              if ("Tab" !== e.key) return;
                              e.stopPropagation(),
                                  (h.current = document.activeElement),
                                  e.shiftKey ? p.focusFirst() : p.focusLast();
                              return;
                          }
                          e.stopPropagation(), e.preventDefault();
                      }
                  },
            onFocusCapture: c
                ? void 0
                : (e) => {
                      var n, r;
                      h.current &&
                          !e.currentTarget.contains(e.relatedTarget) &&
                          (null == (n = t.current) ? void 0 : n.contains(e.target)) &&
                          (null == (r = h.current) || r.focus(), (h.current = null));
                  },
            onBlurCapture: c
                ? void 0
                : (e) => {
                      e.currentTarget.contains(e.relatedTarget) || h.current || (h.current = e.target);
                  },
        },
    };
}
