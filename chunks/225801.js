let n;
r.d(t, { Cl: () => M, K7: () => I, ME: () => T, lb: () => P, pP: () => C });
var i = r(256062),
    o = r(143761),
    a = r(872197),
    s = r(644255),
    l = r(423189),
    u = r(993558),
    c = r(447502),
    f = r(582128);
let d = null,
    p = new Set(),
    h = new Map(),
    m = !1,
    v = !1,
    y = { Tab: !0, Escape: !0 };
function g(e, t) {
    for (let r of p) r(e, t);
}
function b(e) {
    (m = !0),
        u.Fe.isOpening ||
            e.metaKey ||
            (!(0, s.cX)() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            ((d = "keyboard"), g("keyboard", e));
}
function w(e) {
    (d = "pointer"),
        "pointerType" in e && e.pointerType,
        ("mousedown" === e.type || "pointerdown" === e.type) && ((m = !0), g("pointer", e));
}
function _(e) {
    !u.Fe.isOpening && (0, l.Y)(e) && ((m = !0), (d = "virtual"));
}
function S(e) {
    let t = (0, o.mD)((0, i.wt)(e)),
        r = (0, o.TW)((0, i.wt)(e));
    (0, i.wt)(e) !== t &&
        (0, i.wt)(e) !== r &&
        !a.lR &&
        e.isTrusted &&
        (m || v || ((d = "virtual"), g("virtual", e)), (m = !1), (v = !1));
}
function x() {
    a.lR || ((m = !1), (v = !0));
}
function E(e) {
    if ("u" < typeof window || "u" < typeof document) return;
    let t = (0, o.mD)(e),
        r = (0, o.TW)(e);
    if (h.get(t)) return;
    let n = t.HTMLElement.prototype.focus;
    Reflect.defineProperty(t.HTMLElement.prototype, "focus", {
        configurable: !0,
        writable: !0,
        value: function () {
            (m = !0), n.apply(this, arguments);
        },
    }),
        r.addEventListener("keydown", b, !0),
        r.addEventListener("keyup", b, !0),
        r.addEventListener("click", _, !0),
        t.addEventListener("focus", S, !0),
        t.addEventListener("blur", x, !1),
        "u" > typeof PointerEvent &&
            (r.addEventListener("pointerdown", w, !0),
            r.addEventListener("pointermove", w, !0),
            r.addEventListener("pointerup", w, !0)),
        t.addEventListener(
            "beforeunload",
            () => {
                k(e);
            },
            { once: !0 },
        ),
        h.set(t, { focus: n });
}
let k = (e, t) => {
    let r = (0, o.mD)(e),
        n = (0, o.TW)(e);
    t && n.removeEventListener("DOMContentLoaded", t),
        h.has(r) &&
            (Reflect.defineProperty(r.HTMLElement.prototype, "focus", {
                configurable: !0,
                writable: !0,
                value: h.get(r).focus,
            }),
            n.removeEventListener("keydown", b, !0),
            n.removeEventListener("keyup", b, !0),
            n.removeEventListener("click", _, !0),
            r.removeEventListener("focus", S, !0),
            r.removeEventListener("blur", x, !1),
            "u" > typeof PointerEvent &&
                (n.removeEventListener("pointerdown", w, !0),
                n.removeEventListener("pointermove", w, !0),
                n.removeEventListener("pointerup", w, !0)),
            h.delete(r));
};
function C() {
    return "pointer" !== d;
}
function T() {
    return d;
}
function M(e) {
    (d = e), g(e, null);
}
function P() {
    E();
    let [e, t] = (0, f.useState)(d);
    return (
        (0, f.useEffect)(() => {
            let e = () => {
                t(d);
            };
            return (
                p.add(e),
                () => {
                    p.delete(e);
                }
            );
        }, []),
        (0, c.wR)() ? null : e
    );
}
"u" > typeof document &&
    ("loading" !== (n = (0, o.TW)(void 0)).readyState
        ? E(void 0)
        : n.addEventListener("DOMContentLoaded", () => {
              E(void 0);
          }));
let A = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function I(e, t, r) {
    E(),
        (0, f.useEffect)(() => {
            if (r?.enabled === !1) return;
            let t = (t, n) => {
                var a;
                let s, l, u, c, f, d, p, h;
                (a = !!r?.isTextInput),
                    (s = n ? (0, i.wt)(n) : void 0),
                    (l = (0, o.TW)(s)),
                    (c = void 0 !== (u = (0, o.mD)(s)) ? u.HTMLInputElement : HTMLInputElement),
                    (f = void 0 !== u ? u.HTMLTextAreaElement : HTMLTextAreaElement),
                    (d = void 0 !== u ? u.HTMLElement : HTMLElement),
                    (p = void 0 !== u ? u.KeyboardEvent : KeyboardEvent),
                    (h = (0, i.bq)(l)),
                    ((a =
                        a ||
                        (h instanceof c && !A.has(h.type)) ||
                        h instanceof f ||
                        (h instanceof d && h.isContentEditable)) &&
                        "keyboard" === t &&
                        n instanceof p &&
                        !y[n.key]) ||
                        e(C());
            };
            return (
                p.add(t),
                () => {
                    p.delete(t);
                }
            );
        }, t);
}
