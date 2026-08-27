"use strict";
r.d(t, { d: () => d });
var n = r(241453);
function i(e) {
    if (e)
        return (t) => {
            let r = !0;
            e({
                ...t,
                preventDefault() {
                    t.preventDefault();
                },
                isDefaultPrevented: () => t.isDefaultPrevented(),
                stopPropagation() {
                    r = !0;
                },
                continuePropagation() {
                    (r = !1), "function" == typeof t.continuePropagation && t.continuePropagation();
                },
                isPropagationStopped: () => r,
            }),
                r && !("function" == typeof t.isPropagationStopped && t.isPropagationStopped()) && t.stopPropagation();
        };
}
var o = r(644255);
let a = new Set(["shift", "alt", "control", "meta", "mod"]),
    s = ["Alt", "Control", "Meta", "Shift"];
function l(e) {
    return s.filter((t) => e.has(t));
}
function u(e) {
    return e.toLowerCase();
}
let c = {
    space: " ",
    esc: "escape",
    del: "delete",
    ins: "insert",
    left: "arrowleft",
    right: "arrowright",
    up: "arrowup",
    down: "arrowdown",
    pageup: "pageup",
    pagedown: "pagedown",
};
var f = r(256062);
function d(e) {
    let t,
        r,
        { shortcuts: s, allowRepeats: d = !1, allowComposing: p = !1 } = e;
    if (s) {
        let h = (function (e) {
                let t = new Map();
                for (let [r, n] of Object.entries(e)) {
                    let e = (function (e) {
                        let t = e.split("+").reduce(
                            (e, t) => {
                                let r = t.toLowerCase();
                                return (
                                    a.has(r)
                                        ? "shift" === r
                                            ? (e.shift = !0)
                                            : "alt" === r
                                              ? (e.alt = !0)
                                              : "control" === r
                                                ? (e.ctrl = !0)
                                                : "meta" === r
                                                  ? (e.meta = !0)
                                                  : "mod" === r && (e.mod = !0)
                                        : (e.key = t),
                                    e
                                );
                            },
                            { shift: !1, alt: !1, ctrl: !1, meta: !1, mod: !1, key: "" },
                        );
                        if ("" === t.key)
                            throw Error(
                                `Invalid keyboard shortcut: "${e}". Must include exactly one non-modifier key (e.g. "a", "Enter", "ArrowDown"). Combine any of Shift, Alt, Ctrl, Meta, and Mod.`,
                            );
                        return t;
                    })(r);
                    t.set(
                        (function (e) {
                            let t,
                                r,
                                n,
                                i = l(
                                    ((t = new Set()),
                                    e.alt && t.add("Alt"),
                                    e.shift && t.add("Shift"),
                                    e.ctrl && t.add("Control"),
                                    e.meta && t.add("Meta"),
                                    e.mod && t.add((0, o.cX)() ? "Meta" : "Control"),
                                    t),
                                ),
                                a = null != (n = c[(r = u(e.key))]) ? n : r;
                            return i.length > 0 ? `${i.join("+")}+${a}` : a;
                        })(e),
                        n,
                    );
                }
                return (e) => {
                    let r,
                        n,
                        i,
                        o =
                            ((n = l(
                                ((r = new Set()),
                                e.altKey && r.add("Alt"),
                                e.ctrlKey && r.add("Control"),
                                e.metaKey && r.add("Meta"),
                                e.shiftKey && r.add("Shift"),
                                r),
                            )),
                            (i = u(e.key)),
                            (n.length > 0 ? `${n.join("+")}+` : "") + i),
                        a = t.get(o),
                        s = a?.(e);
                    void 0 === s && void 0 !== a
                        ? (s = { shouldContinuePropagation: !1, shouldPreventDefault: !0 })
                        : "boolean" == typeof s && (s = { shouldContinuePropagation: !s, shouldPreventDefault: s }),
                        s?.shouldPreventDefault && e.preventDefault(),
                        (!a || s?.shouldContinuePropagation) && e.continuePropagation();
                };
            })(s),
            m = i((e) => {
                !(0, f.sD)(e.currentTarget, (0, f.wt)(e)) ||
                (e.nativeEvent?.repeat && !d) ||
                (e.nativeEvent?.isComposing && !p)
                    ? e.continuePropagation()
                    : h(e);
            }),
            v = i((e) => {
                !(0, f.sD)(e.currentTarget, (0, f.wt)(e)) ||
                    (e.nativeEvent?.repeat && !d) ||
                    e.nativeEvent?.isComposing,
                    e.continuePropagation();
            });
        (t = e.onKeyDown ? (0, n.c)(e.onKeyDown, m) : m), (r = e.onKeyUp ? (0, n.c)(e.onKeyUp, v) : v);
    } else (t = i(e.onKeyDown)), (r = i(e.onKeyUp));
    return { keyboardProps: e.isDisabled ? {} : { onKeyDown: t, onKeyUp: r } };
}
