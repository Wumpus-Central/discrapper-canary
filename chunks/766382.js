"use strict";
let r;
n.d(t, { Cl: () => T, K7: () => A, ME: () => k, lb: () => C, pP: () => S });
var i = n(959722),
    a = n(361037),
    o = n(139835),
    s = n(745391),
    l = n(582128),
    u = n(446649);
let c = null,
    d = new Set(),
    f = new Map(),
    p = !1,
    h = !1,
    m = { Tab: !0, Escape: !0 };
function g(e, t) {
    for (let n of d) n(e, t);
}
function v(e) {
    (p = !0),
        e.metaKey ||
            (!(0, a.cX)() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            ((c = "keyboard"), g("keyboard", e));
}
function y(e) {
    (c = "pointer"), ("mousedown" === e.type || "pointerdown" === e.type) && ((p = !0), g("pointer", e));
}
function b(e) {
    (0, o.Y)(e) && ((p = !0), (c = "virtual"));
}
function _(e) {
    e.target !== window &&
        e.target !== document &&
        !i.lR &&
        e.isTrusted &&
        (p || h || ((c = "virtual"), g("virtual", e)), (p = !1), (h = !1));
}
function w() {
    i.lR || ((p = !1), (h = !0));
}
function x(e) {
    if ("u" < typeof window || "u" < typeof document || f.get((0, s.mD)(e))) return;
    let t = (0, s.mD)(e),
        n = (0, s.TW)(e),
        r = t.HTMLElement.prototype.focus;
    (t.HTMLElement.prototype.focus = function () {
        (p = !0), r.apply(this, arguments);
    }),
        n.addEventListener("keydown", v, !0),
        n.addEventListener("keyup", v, !0),
        n.addEventListener("click", b, !0),
        t.addEventListener("focus", _, !0),
        t.addEventListener("blur", w, !1),
        "u" > typeof PointerEvent &&
            (n.addEventListener("pointerdown", y, !0),
            n.addEventListener("pointermove", y, !0),
            n.addEventListener("pointerup", y, !0)),
        t.addEventListener(
            "beforeunload",
            () => {
                E(e);
            },
            { once: !0 },
        ),
        f.set(t, { focus: r });
}
let E = (e, t) => {
    let n = (0, s.mD)(e),
        r = (0, s.TW)(e);
    t && r.removeEventListener("DOMContentLoaded", t),
        f.has(n) &&
            ((n.HTMLElement.prototype.focus = f.get(n).focus),
            r.removeEventListener("keydown", v, !0),
            r.removeEventListener("keyup", v, !0),
            r.removeEventListener("click", b, !0),
            n.removeEventListener("focus", _, !0),
            n.removeEventListener("blur", w, !1),
            "u" > typeof PointerEvent &&
                (r.removeEventListener("pointerdown", y, !0),
                r.removeEventListener("pointermove", y, !0),
                r.removeEventListener("pointerup", y, !0)),
            f.delete(n));
};
function S() {
    return "pointer" !== c;
}
function k() {
    return c;
}
function T(e) {
    (c = e), g(e, null);
}
function C() {
    x();
    let [e, t] = (0, l.useState)(c);
    return (
        (0, l.useEffect)(() => {
            let e = () => {
                t(c);
            };
            return (
                d.add(e),
                () => {
                    d.delete(e);
                }
            );
        }, []),
        (0, u.wR)() ? null : e
    );
}
"u" > typeof document &&
    ("loading" !== (r = (0, s.TW)(void 0)).readyState
        ? x(void 0)
        : r.addEventListener("DOMContentLoaded", () => {
              x(void 0);
          }));
let P = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function A(e, t, n) {
    x(),
        (0, l.useEffect)(() => {
            let t = (t, r) => {
                var i;
                let a, o, l, u, c;
                (i = !!(null == n ? void 0 : n.isTextInput)),
                    (a = (0, s.TW)(null == r ? void 0 : r.target)),
                    (o =
                        "u" > typeof window
                            ? (0, s.mD)(null == r ? void 0 : r.target).HTMLInputElement
                            : HTMLInputElement),
                    (l =
                        "u" > typeof window
                            ? (0, s.mD)(null == r ? void 0 : r.target).HTMLTextAreaElement
                            : HTMLTextAreaElement),
                    (u = "u" > typeof window ? (0, s.mD)(null == r ? void 0 : r.target).HTMLElement : HTMLElement),
                    (c = "u" > typeof window ? (0, s.mD)(null == r ? void 0 : r.target).KeyboardEvent : KeyboardEvent),
                    ((i =
                        i ||
                        (a.activeElement instanceof o && !P.has(a.activeElement.type)) ||
                        a.activeElement instanceof l ||
                        (a.activeElement instanceof u && a.activeElement.isContentEditable)) &&
                        "keyboard" === t &&
                        r instanceof c &&
                        !m[r.key]) ||
                        e(S());
            };
            return (
                d.add(t),
                () => {
                    d.delete(t);
                }
            );
        }, t);
}
