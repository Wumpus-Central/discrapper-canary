let n;
var i = r(518206),
    o = r(809297),
    a = r(560581),
    s = r(67551),
    l = r(210069),
    u = r(62998),
    c = r(922446),
    f = r(582128);
let p = null,
    d = new Set(),
    h = new Map(),
    m = !1,
    v = !1,
    y = { Tab: !0, Escape: !0 };
function g(e, t) {
    for (let r of d) r(e, t);
}
function b(e) {
    ((m = !0),
        u.Fe.isOpening ||
            e.metaKey ||
            (!(0, s.cX)() && e.altKey) ||
            e.ctrlKey ||
            "Control" === e.key ||
            "Shift" === e.key ||
            "Meta" === e.key ||
            ((p = "keyboard"), g("keyboard", e)));
}
function w(e) {
    ((p = "pointer"),
        "pointerType" in e && e.pointerType,
        ("mousedown" === e.type || "pointerdown" === e.type) && ((m = !0), g("pointer", e)));
}
function _(e) {
    !u.Fe.isOpening && (0, l.Y)(e) && ((m = !0), (p = "virtual"));
}
function S(e) {
    let t = (0, o.mD)((0, i.wt)(e)),
        r = (0, o.TW)((0, i.wt)(e));
    (0, i.wt)(e) !== t &&
        (0, i.wt)(e) !== r &&
        !a.lR &&
        e.isTrusted &&
        (m || v || ((p = "virtual"), g("virtual", e)), (m = !1), (v = !1));
}
function E() {
    a.lR || ((m = !1), (v = !0));
}
function x(e) {
    if ("u" < typeof window || "u" < typeof document) return;
    let t = (0, o.mD)(e),
        r = (0, o.TW)(e);
    if (h.get(t)) return;
    let n = t.HTMLElement.prototype.focus;
    (Reflect.defineProperty(t.HTMLElement.prototype, "focus", {
        configurable: !0,
        writable: !0,
        value: function () {
            ((m = !0), n.apply(this, arguments));
        },
    }),
        r.addEventListener("keydown", b, !0),
        r.addEventListener("keyup", b, !0),
        r.addEventListener("click", _, !0),
        t.addEventListener("focus", S, !0),
        t.addEventListener("blur", E, !1),
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
        h.set(t, { focus: n }));
}
let k = (e, t) => {
    let r = (0, o.mD)(e),
        n = (0, o.TW)(e);
    (t && n.removeEventListener("DOMContentLoaded", t),
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
            r.removeEventListener("blur", E, !1),
            "u" > typeof PointerEvent &&
                (n.removeEventListener("pointerdown", w, !0),
                n.removeEventListener("pointermove", w, !0),
                n.removeEventListener("pointerup", w, !0)),
            h.delete(r)));
};
function C() {
    return "pointer" !== p;
}
"u" > typeof document &&
    ("loading" !== (n = (0, o.TW)(void 0)).readyState
        ? x(void 0)
        : n.addEventListener("DOMContentLoaded", () => {
              x(void 0);
          }));
let T = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
r.d(
    t,
    {},
    {
        Cl: function (e) {
            ((p = e), g(e, null));
        },
        K7: function (e, t, r) {
            (x(),
                (0, f.useEffect)(() => {
                    if (r?.enabled === !1) return;
                    let t = (t, n) => {
                        var a;
                        let s, l, u, c, f, p, d, h;
                        ((a = !!r?.isTextInput),
                            (s = n ? (0, i.wt)(n) : void 0),
                            (l = (0, o.TW)(s)),
                            (c = void 0 !== (u = (0, o.mD)(s)) ? u.HTMLInputElement : HTMLInputElement),
                            (f = void 0 !== u ? u.HTMLTextAreaElement : HTMLTextAreaElement),
                            (p = void 0 !== u ? u.HTMLElement : HTMLElement),
                            (d = void 0 !== u ? u.KeyboardEvent : KeyboardEvent),
                            (h = (0, i.bq)(l)),
                            ((a =
                                a ||
                                (h instanceof c && !T.has(h.type)) ||
                                h instanceof f ||
                                (h instanceof p && h.isContentEditable)) &&
                                "keyboard" === t &&
                                n instanceof d &&
                                !y[n.key]) ||
                                e(C()));
                    };
                    return (
                        d.add(t),
                        () => {
                            d.delete(t);
                        }
                    );
                }, t));
        },
        ME: function () {
            return p;
        },
        lb: function () {
            x();
            let [e, t] = (0, f.useState)(p);
            return (
                (0, f.useEffect)(() => {
                    let e = () => {
                        t(p);
                    };
                    return (
                        d.add(e),
                        () => {
                            d.delete(e);
                        }
                    );
                }, []),
                (0, c.wR)() ? null : e
            );
        },
        pP: C,
    },
);
