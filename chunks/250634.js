"use strict";
s.d(t, { $: () => n, O: () => u });
var i = s(331250),
    l = s(693321),
    r = s(3388),
    a = s(290424),
    o = s(64700),
    d = s(402112);
function n(e, t, s) {
    let { isDisabled: i } = e,
        { toolbarProps: n } = (function (e, t) {
            let { "aria-label": s, "aria-labelledby": i, orientation: n = "horizontal" } = e,
                [u, c] = (0, o.useState)(!1);
            (0, r.N)(() => {
                var e;
                c(!!(t.current && (null == (e = t.current.parentElement) ? void 0 : e.closest('[role="toolbar"]'))));
            });
            let { direction: p } = (0, d.Y)(),
                h = "rtl" === p && "horizontal" === n,
                b = (0, l.C7)(t),
                f = (0, o.useRef)(null);
            return {
                toolbarProps: {
                    ...(0, a.$)(e, { labelable: !0 }),
                    role: u ? "group" : "toolbar",
                    "aria-orientation": n,
                    "aria-label": s,
                    "aria-labelledby": null == s ? i : void 0,
                    onKeyDownCapture: u
                        ? void 0
                        : (e) => {
                              if (e.currentTarget.contains(e.target)) {
                                  if (
                                      ("horizontal" === n && "ArrowRight" === e.key) ||
                                      ("vertical" === n && "ArrowDown" === e.key)
                                  )
                                      h ? b.focusPrevious() : b.focusNext();
                                  else if (
                                      ("horizontal" === n && "ArrowLeft" === e.key) ||
                                      ("vertical" === n && "ArrowUp" === e.key)
                                  )
                                      h ? b.focusNext() : b.focusPrevious();
                                  else {
                                      if ("Tab" !== e.key) return;
                                      e.stopPropagation(),
                                          (f.current = document.activeElement),
                                          e.shiftKey ? b.focusFirst() : b.focusLast();
                                      return;
                                  }
                                  e.stopPropagation(), e.preventDefault();
                              }
                          },
                    onFocusCapture: u
                        ? void 0
                        : (e) => {
                              var s, i;
                              f.current &&
                                  !e.currentTarget.contains(e.relatedTarget) &&
                                  (null == (s = t.current) ? void 0 : s.contains(e.target)) &&
                                  (null == (i = f.current) || i.focus(), (f.current = null));
                          },
                    onBlurCapture: u
                        ? void 0
                        : (e) => {
                              e.currentTarget.contains(e.relatedTarget) || f.current || (f.current = e.target);
                          },
                },
            };
        })(e, s);
    return { groupProps: { ...n, role: "single" === t.selectionMode ? "radiogroup" : n.role, "aria-disabled": i } };
}
function u(e, t, s) {
    let l = {
            isSelected: t.selectedKeys.has(e.id),
            defaultSelected: !1,
            setSelected(s) {
                t.setSelected(e.id, s);
            },
            toggle() {
                t.toggleKey(e.id);
            },
        },
        {
            isPressed: r,
            isSelected: a,
            isDisabled: o,
            buttonProps: d,
        } = (0, i.q)({ ...e, id: void 0, isDisabled: e.isDisabled || t.isDisabled }, l, s);
    return (
        "single" === t.selectionMode &&
            ((d.role = "radio"), (d["aria-checked"] = l.isSelected), delete d["aria-pressed"]),
        { isPressed: r, isSelected: a, isDisabled: o, buttonProps: d }
    );
}
