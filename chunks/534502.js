t.d(e, { t: () => s });
var o = t(610138),
    a = t(892730),
    l = t(518206),
    u = t(811390),
    n = t(379880),
    i = t(582128);
function s(r, e) {
    let { "aria-label": t, "aria-labelledby": s, orientation: c = "horizontal" } = r,
        [p, f] = (0, i.useState)(!1);
    (0, u.N)(() => {
        f(!!(e.current && e.current.parentElement?.closest('[role="toolbar"]')));
    });
    let { direction: b } = (0, n.Y)(),
        d = "rtl" === b && "horizontal" === c,
        h = (0, o.C7)(e),
        w = (0, i.useRef)(null);
    return {
        toolbarProps: {
            ...(0, a.$)(r, { labelable: !0 }),
            role: p ? "group" : "toolbar",
            "aria-orientation": c,
            "aria-label": t,
            "aria-labelledby": null == t ? s : void 0,
            onKeyDownCapture: p
                ? void 0
                : (r) => {
                      if ((0, l.sD)(r.currentTarget, (0, l.wt)(r))) {
                          if (
                              ("horizontal" === c && "ArrowRight" === r.key) ||
                              ("vertical" === c && "ArrowDown" === r.key)
                          )
                              d ? h.focusPrevious() : h.focusNext();
                          else if (
                              ("horizontal" === c && "ArrowLeft" === r.key) ||
                              ("vertical" === c && "ArrowUp" === r.key)
                          )
                              d ? h.focusNext() : h.focusPrevious();
                          else {
                              if ("Tab" !== r.key) return;
                              ((w.current = (0, l.bq)()), r.shiftKey ? h.focusFirst() : h.focusLast());
                              return;
                          }
                          (r.stopPropagation(), r.preventDefault());
                      }
                  },
            onFocusCapture: p
                ? void 0
                : (r) => {
                      w.current &&
                          !(0, l.sD)(r.currentTarget, r.relatedTarget) &&
                          (0, l.sD)(e.current, (0, l.wt)(r)) &&
                          (w.current?.focus(), (w.current = null));
                  },
            onBlurCapture: p
                ? void 0
                : (r) => {
                      (0, l.sD)(r.currentTarget, r.relatedTarget) || w.current || (w.current = (0, l.wt)(r));
                  },
        },
    };
}
