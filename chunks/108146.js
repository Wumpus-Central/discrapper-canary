"use strict";
s.d(t, { t: () => n });
var i = s(13163),
    r = s(3388),
    l = s(290424),
    a = s(64700),
    o = s(853590);
function n(e, t) {
    let { "aria-label": s, "aria-labelledby": n, orientation: d = "horizontal" } = e,
        [u, c] = (0, a.useState)(!1);
    (0, r.N)(() => {
        var e;
        c(!!(t.current && (null == (e = t.current.parentElement) ? void 0 : e.closest('[role="toolbar"]'))));
    });
    let { direction: p } = (0, o.Y)(),
        f = "rtl" === p && "horizontal" === d,
        h = (0, i.C7)(t),
        v = (0, a.useRef)(null);
    return {
        toolbarProps: {
            ...(0, l.$)(e, { labelable: !0 }),
            role: u ? "group" : "toolbar",
            "aria-orientation": d,
            "aria-label": s,
            "aria-labelledby": null == s ? n : void 0,
            onKeyDownCapture: u
                ? void 0
                : (e) => {
                      if (e.currentTarget.contains(e.target)) {
                          if (
                              ("horizontal" === d && "ArrowRight" === e.key) ||
                              ("vertical" === d && "ArrowDown" === e.key)
                          )
                              f ? h.focusPrevious() : h.focusNext();
                          else if (
                              ("horizontal" === d && "ArrowLeft" === e.key) ||
                              ("vertical" === d && "ArrowUp" === e.key)
                          )
                              f ? h.focusNext() : h.focusPrevious();
                          else {
                              if ("Tab" !== e.key) return;
                              e.stopPropagation(),
                                  (v.current = document.activeElement),
                                  e.shiftKey ? h.focusFirst() : h.focusLast();
                              return;
                          }
                          e.stopPropagation(), e.preventDefault();
                      }
                  },
            onFocusCapture: u
                ? void 0
                : (e) => {
                      var s, i;
                      v.current &&
                          !e.currentTarget.contains(e.relatedTarget) &&
                          (null == (s = t.current) ? void 0 : s.contains(e.target)) &&
                          (null == (i = v.current) || i.focus(), (v.current = null));
                  },
            onBlurCapture: u
                ? void 0
                : (e) => {
                      e.currentTarget.contains(e.relatedTarget) || v.current || (v.current = e.target);
                  },
        },
    };
}
