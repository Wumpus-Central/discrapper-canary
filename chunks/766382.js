"use strict";
let n;
r.d(t, { Cl: () => C, K7: () => P, ME: () => k, lb: () => T, pP: () => E });
var i = r(959722),
    o = r(361037),
    a = r(139835),
    s = r(745391),
    l = r(582128),
    u = r(446649);
let c = null,
    f = new Set(),
    d = new Map(),
    p = !1,
    h = !1,
    m = { Tab: !0, Escape: !0 };
function v(e, t) {
    for (let r of f) r(e, t);
}
function y(e) {
    (p = !0),
        e.metaKey ||
            (!(0, o.cX)() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            ((c = "keyboard"), v("keyboard", e));
}
function g(e) {
    (c = "pointer"), ("mousedown" === e.type || "pointerdown" === e.type) && ((p = !0), v("pointer", e));
}
function b(e) {
    (0, a.Y)(e) && ((p = !0), (c = "virtual"));
}
function w(e) {
    e.target !== window &&
        e.target !== document &&
        !i.lR &&
        e.isTrusted &&
        (p || h || ((c = "virtual"), v("virtual", e)), (p = !1), (h = !1));
}
function _() {
    i.lR || ((p = !1), (h = !0));
}
function S(e) {
    if ("u" < typeof window || "u" < typeof document || d.get((0, s.mD)(e))) return;
    let t = (0, s.mD)(e),
        r = (0, s.TW)(e),
        n = t.HTMLElement.prototype.focus;
    (t.HTMLElement.prototype.focus = function () {
        (p = !0), n.apply(this, arguments);
    }),
        r.addEventListener("keydown", y, !0),
        r.addEventListener("keyup", y, !0),
        r.addEventListener("click", b, !0),
        t.addEventListener("focus", w, !0),
        t.addEventListener("blur", _, !1),
        "u" > typeof PointerEvent &&
            (r.addEventListener("pointerdown", g, !0),
            r.addEventListener("pointermove", g, !0),
            r.addEventListener("pointerup", g, !0)),
        t.addEventListener(
            "beforeunload",
            () => {
                x(e);
            },
            { once: !0 },
        ),
        d.set(t, { focus: n });
}
let x = (e, t) => {
    let r = (0, s.mD)(e),
        n = (0, s.TW)(e);
    t && n.removeEventListener("DOMContentLoaded", t),
        d.has(r) &&
            ((r.HTMLElement.prototype.focus = d.get(r).focus),
            n.removeEventListener("keydown", y, !0),
            n.removeEventListener("keyup", y, !0),
            n.removeEventListener("click", b, !0),
            r.removeEventListener("focus", w, !0),
            r.removeEventListener("blur", _, !1),
            "u" > typeof PointerEvent &&
                (n.removeEventListener("pointerdown", g, !0),
                n.removeEventListener("pointermove", g, !0),
                n.removeEventListener("pointerup", g, !0)),
            d.delete(r));
};
function E() {
    return "pointer" !== c;
}
function k() {
    return c;
}
function C(e) {
    (c = e), v(e, null);
}
function T() {
    S();
    let [e, t] = (0, l.useState)(c);
    return (
        (0, l.useEffect)(() => {
            let e = () => {
                t(c);
            };
            return (
                f.add(e),
                () => {
                    f.delete(e);
                }
            );
        }, []),
        (0, u.wR)() ? null : e
    );
}
"u" > typeof document &&
    ("loading" !== (n = (0, s.TW)(void 0)).readyState
        ? S(void 0)
        : n.addEventListener("DOMContentLoaded", () => {
              S(void 0);
          }));
let M = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function P(e, t, r) {
    S(),
        (0, l.useEffect)(() => {
            let t = (t, n) => {
                var i;
                let o, a, l, u, c;
                (i = !!(null == r ? void 0 : r.isTextInput)),
                    (o = (0, s.TW)(null == n ? void 0 : n.target)),
                    (a =
                        "u" > typeof window
                            ? (0, s.mD)(null == n ? void 0 : n.target).HTMLInputElement
                            : HTMLInputElement),
                    (l =
                        "u" > typeof window
                            ? (0, s.mD)(null == n ? void 0 : n.target).HTMLTextAreaElement
                            : HTMLTextAreaElement),
                    (u = "u" > typeof window ? (0, s.mD)(null == n ? void 0 : n.target).HTMLElement : HTMLElement),
                    (c = "u" > typeof window ? (0, s.mD)(null == n ? void 0 : n.target).KeyboardEvent : KeyboardEvent),
                    ((i =
                        i ||
                        (o.activeElement instanceof a && !M.has(o.activeElement.type)) ||
                        o.activeElement instanceof l ||
                        (o.activeElement instanceof u && o.activeElement.isContentEditable)) &&
                        "keyboard" === t &&
                        n instanceof c &&
                        !m[n.key]) ||
                        e(E());
            };
            return (
                f.add(t),
                () => {
                    f.delete(t);
                }
            );
        }, t);
}
