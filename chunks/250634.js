"use strict";
n.d(t, { $: () => u, O: () => c });
var i = n(331250),
    r = n(693321),
    s = n(3388),
    a = n(290424),
    o = n(64700),
    l = n(402112);
function u(e, t, n) {
    let { isDisabled: i } = e,
        { toolbarProps: u } = (function (e, t) {
            let { "aria-label": n, "aria-labelledby": i, orientation: u = "horizontal" } = e,
                [c, d] = (0, o.useState)(!1);
            (0, s.N)(() => {
                var e;
                d(!!(t.current && (null == (e = t.current.parentElement) ? void 0 : e.closest('[role="toolbar"]'))));
            });
            let { direction: _ } = (0, l.Y)(),
                h = "rtl" === _ && "horizontal" === u,
                f = (0, r.C7)(t),
                p = (0, o.useRef)(null);
            return {
                toolbarProps: {
                    ...(0, a.$)(e, { labelable: !0 }),
                    role: c ? "group" : "toolbar",
                    "aria-orientation": u,
                    "aria-label": n,
                    "aria-labelledby": null == n ? i : void 0,
                    onKeyDownCapture: c
                        ? void 0
                        : (e) => {
                              if (e.currentTarget.contains(e.target)) {
                                  if (
                                      ("horizontal" === u && "ArrowRight" === e.key) ||
                                      ("vertical" === u && "ArrowDown" === e.key)
                                  )
                                      h ? f.focusPrevious() : f.focusNext();
                                  else if (
                                      ("horizontal" === u && "ArrowLeft" === e.key) ||
                                      ("vertical" === u && "ArrowUp" === e.key)
                                  )
                                      h ? f.focusNext() : f.focusPrevious();
                                  else {
                                      if ("Tab" !== e.key) return;
                                      e.stopPropagation(),
                                          (p.current = document.activeElement),
                                          e.shiftKey ? f.focusFirst() : f.focusLast();
                                      return;
                                  }
                                  e.stopPropagation(), e.preventDefault();
                              }
                          },
                    onFocusCapture: c
                        ? void 0
                        : (e) => {
                              var n, i;
                              p.current &&
                                  !e.currentTarget.contains(e.relatedTarget) &&
                                  (null == (n = t.current) ? void 0 : n.contains(e.target)) &&
                                  (null == (i = p.current) || i.focus(), (p.current = null));
                          },
                    onBlurCapture: c
                        ? void 0
                        : (e) => {
                              e.currentTarget.contains(e.relatedTarget) || p.current || (p.current = e.target);
                          },
                },
            };
        })(e, n);
    return { groupProps: { ...u, role: "single" === t.selectionMode ? "radiogroup" : u.role, "aria-disabled": i } };
}
function c(e, t, n) {
    let r = {
            isSelected: t.selectedKeys.has(e.id),
            defaultSelected: !1,
            setSelected(n) {
                t.setSelected(e.id, n);
            },
            toggle() {
                t.toggleKey(e.id);
            },
        },
        {
            isPressed: s,
            isSelected: a,
            isDisabled: o,
            buttonProps: l,
        } = (0, i.q)({ ...e, id: void 0, isDisabled: e.isDisabled || t.isDisabled }, r, n);
    return (
        "single" === t.selectionMode &&
            ((l.role = "radio"), (l["aria-checked"] = r.isSelected), delete l["aria-pressed"]),
        { isPressed: s, isSelected: a, isDisabled: o, buttonProps: l }
    );
}
