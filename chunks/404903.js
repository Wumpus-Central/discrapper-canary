"use strict";
r.d(t, { d: () => A });
var n = r(959722),
    i = r(361037),
    o = r(745391),
    a = r(244426);
let s = "default",
    l = "",
    u = new WeakMap();
function c(e) {
    if ((0, i.un)())
        "disabled" === s &&
            ((s = "restoring"),
            setTimeout(() => {
                (0, a.v)(() => {
                    if ("restoring" === s) {
                        let t = (0, o.TW)(e);
                        "none" === t.documentElement.style.webkitUserSelect &&
                            (t.documentElement.style.webkitUserSelect = l || ""),
                            (l = ""),
                            (s = "default");
                    }
                });
            }, 300));
    else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && u.has(e)) {
        let t = u.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
        "none" === e.style[r] && (e.style[r] = t),
            "" === e.getAttribute("style") && e.removeAttribute("style"),
            u.delete(e);
    }
}
var f = r(582128);
let d = f.createContext({ register: () => {} });
function p(e, t, r) {
    if (!t.has(e)) throw TypeError("attempted to " + r + " private field on non-instance");
    return t.get(e);
}
d.displayName = "PressResponderContext";
var h = r(693770);
function m(e, t, r) {
    var n = p(e, t, "set");
    if (n.set) n.set.call(e, r);
    else {
        if (!n.writable) throw TypeError("attempted to set read only private field");
        n.value = r;
    }
    return r;
}
var v = r(192734),
    y = r(912167),
    g = r(11079),
    b = r(654978),
    w = r(712247),
    _ = r(389979),
    S = r(356560),
    x = r(139835),
    E = r(20853);
r(333007);
var k = new WeakMap();
class C {
    continuePropagation() {
        m(this, k, !1);
    }
    get shouldStopPropagation() {
        var e;
        return (e = p(this, k, "get")), e.get ? e.get.call(this) : e.value;
    }
    constructor(e, t, r, n) {
        var i;
        (0, h._)(this, k, { writable: !0, value: void 0 }), m(this, k, !0);
        let o = null != (i = null == n ? void 0 : n.target) ? i : r.currentTarget;
        const a = null == o ? void 0 : o.getBoundingClientRect();
        let s,
            l = 0,
            u,
            c = null;
        null != r.clientX && null != r.clientY && ((u = r.clientX), (c = r.clientY)),
            a &&
                (null != u && null != c
                    ? ((s = u - a.left), (l = c - a.top))
                    : ((s = a.width / 2), (l = a.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = r.currentTarget),
            (this.shiftKey = r.shiftKey),
            (this.metaKey = r.metaKey),
            (this.ctrlKey = r.ctrlKey),
            (this.altKey = r.altKey),
            (this.x = s),
            (this.y = l);
    }
}
let T = Symbol("linkClicked"),
    M = "react-aria-pressable-style",
    P = "data-react-aria-pressable";
function A(e) {
    let {
            onPress: t,
            onPressChange: r,
            onPressStart: a,
            onPressEnd: p,
            onPressUp: h,
            onClick: m,
            isDisabled: k,
            isPressed: A,
            preventFocusOnPress: L,
            shouldCancelOnPointerExit: F,
            allowTextSelectionOnPress: N,
            ref: j,
            ...B
        } = (function (e) {
            let t = (0, f.useContext)(d);
            if (t) {
                let { register: r, ...n } = t;
                (e = (0, v.v)(n, e)), r();
            }
            return (0, y.w)(t, e.ref), e;
        })(e),
        [K, $] = (0, f.useState)(!1),
        V = (0, f.useRef)({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            didFirePressStart: !1,
            isTriggeringEvent: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null,
            disposables: [],
        }),
        { addGlobalListener: U, removeAllGlobalListeners: z } = (0, g.A)(),
        W = (0, b.J)((e, t) => {
            let n = V.current;
            if (k || n.didFirePressStart) return !1;
            let i = !0;
            if (((n.isTriggeringEvent = !0), a)) {
                let r = new C("pressstart", t, e);
                a(r), (i = r.shouldStopPropagation);
            }
            return r && r(!0), (n.isTriggeringEvent = !1), (n.didFirePressStart = !0), $(!0), i;
        }),
        H = (0, b.J)((e, n, i = !0) => {
            let o = V.current;
            if (!o.didFirePressStart) return !1;
            (o.didFirePressStart = !1), (o.isTriggeringEvent = !0);
            let a = !0;
            if (p) {
                let t = new C("pressend", n, e);
                p(t), (a = t.shouldStopPropagation);
            }
            if ((r && r(!1), $(!1), t && i && !k)) {
                let r = new C("press", n, e);
                t(r), a && (a = r.shouldStopPropagation);
            }
            return (o.isTriggeringEvent = !1), a;
        }),
        G = (0, b.J)((e, t) => {
            let r = V.current;
            if (k) return !1;
            if (h) {
                r.isTriggeringEvent = !0;
                let n = new C("pressup", t, e);
                return h(n), (r.isTriggeringEvent = !1), n.shouldStopPropagation;
            }
            return !0;
        }),
        q = (0, b.J)((e) => {
            let t = V.current;
            if (t.isPressed && t.target) {
                for (let r of (t.didFirePressStart && null != t.pointerType && H(D(t.target, e), t.pointerType, !1),
                (t.isPressed = !1),
                (t.isOverTarget = !1),
                (t.activePointerId = null),
                (t.pointerType = null),
                z(),
                N || c(t.target),
                t.disposables))
                    r();
                t.disposables = [];
            }
        }),
        Y = (0, b.J)((e) => {
            F && q(e);
        }),
        X = (0, b.J)((e) => {
            k || null == m || m(e);
        }),
        J = (0, b.J)((e, t) => {
            if (!k && m) {
                let r = new MouseEvent("click", e);
                (0, n.o1)(r, t), m((0, n.eg)(r));
            }
        }),
        Q = (0, f.useMemo)(() => {
            let e = V.current,
                t = {
                    onKeyDown(t) {
                        if (O(t.nativeEvent, t.currentTarget) && (0, w.sD)(t.currentTarget, (0, w.wt)(t.nativeEvent))) {
                            var n;
                            R((0, w.wt)(t.nativeEvent), t.key) && t.preventDefault();
                            let a = !0;
                            if (!e.isPressed && !t.repeat) {
                                (e.target = t.currentTarget),
                                    (e.isPressed = !0),
                                    (e.pointerType = "keyboard"),
                                    (a = W(t, "keyboard"));
                                let n = t.currentTarget;
                                U(
                                    (0, o.TW)(t.currentTarget),
                                    "keyup",
                                    (0, _.c)((t) => {
                                        O(t, n) &&
                                            !t.repeat &&
                                            (0, w.sD)(n, (0, w.wt)(t)) &&
                                            e.target &&
                                            G(D(e.target, t), "keyboard");
                                    }, r),
                                    !0,
                                );
                            }
                            a && t.stopPropagation(),
                                t.metaKey &&
                                    (0, i.cX)() &&
                                    (null == (n = e.metaKeyEvents) || n.set(t.key, t.nativeEvent));
                        } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                    },
                    onClick(t) {
                        if (
                            (!t || (0, w.sD)(t.currentTarget, (0, w.wt)(t.nativeEvent))) &&
                            t &&
                            0 === t.button &&
                            !e.isTriggeringEvent &&
                            !S.Fe.isOpening
                        ) {
                            let r = !0;
                            if (
                                (k && t.preventDefault(),
                                !e.ignoreEmulatedMouseEvents &&
                                    !e.isPressed &&
                                    ("virtual" === e.pointerType || (0, x.Y)(t.nativeEvent)))
                            ) {
                                let e = W(t, "virtual"),
                                    n = G(t, "virtual"),
                                    i = H(t, "virtual");
                                X(t), (r = e && n && i);
                            } else if (e.isPressed && "keyboard" !== e.pointerType) {
                                let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                                    i = G(D(t.currentTarget, t), n),
                                    o = H(D(t.currentTarget, t), n, !0);
                                (r = i && o), (e.isOverTarget = !1), X(t), q(t);
                            }
                            (e.ignoreEmulatedMouseEvents = !1), r && t.stopPropagation();
                        }
                    },
                },
                r = (t) => {
                    var r, n, i;
                    if (e.isPressed && e.target && O(t, e.target)) {
                        R((0, w.wt)(t), t.key) && t.preventDefault();
                        let r = (0, w.wt)(t),
                            i = (0, w.sD)(e.target, (0, w.wt)(t));
                        H(D(e.target, t), "keyboard", i),
                            i && J(t, e.target),
                            z(),
                            "Enter" !== t.key &&
                                I(e.target) &&
                                (0, w.sD)(e.target, r) &&
                                !t[T] &&
                                ((t[T] = !0), (0, S.Fe)(e.target, t, !1)),
                            (e.isPressed = !1),
                            null == (n = e.metaKeyEvents) || n.delete(t.key);
                    } else if ("Meta" === t.key && (null == (r = e.metaKeyEvents) ? void 0 : r.size)) {
                        let t = e.metaKeyEvents;
                        for (let r of ((e.metaKeyEvents = void 0), t.values()))
                            null == (i = e.target) || i.dispatchEvent(new KeyboardEvent("keyup", r));
                    }
                };
            if ("u" > typeof PointerEvent) {
                (t.onPointerDown = (t) => {
                    if (0 !== t.button || !(0, w.sD)(t.currentTarget, (0, w.wt)(t.nativeEvent))) return;
                    if ((0, x.P)(t.nativeEvent)) {
                        e.pointerType = "virtual";
                        return;
                    }
                    e.pointerType = t.pointerType;
                    let n = !0;
                    if (!e.isPressed) {
                        (e.isPressed = !0),
                            (e.isOverTarget = !0),
                            (e.activePointerId = t.pointerId),
                            (e.target = t.currentTarget),
                            N ||
                                (function (e) {
                                    if ((0, i.un)()) {
                                        if ("default" === s) {
                                            let t = (0, o.TW)(e);
                                            (l = t.documentElement.style.webkitUserSelect),
                                                (t.documentElement.style.webkitUserSelect = "none");
                                        }
                                        s = "disabled";
                                    } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                                        let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                                        u.set(e, e.style[t]), (e.style[t] = "none");
                                    }
                                })(e.target),
                            (n = W(t, e.pointerType));
                        let c = (0, w.wt)(t.nativeEvent);
                        "releasePointerCapture" in c && c.releasePointerCapture(t.pointerId),
                            U((0, o.TW)(t.currentTarget), "pointerup", r, !1),
                            U((0, o.TW)(t.currentTarget), "pointercancel", a, !1);
                    }
                    n && t.stopPropagation();
                }),
                    (t.onMouseDown = (t) => {
                        if ((0, w.sD)(t.currentTarget, (0, w.wt)(t.nativeEvent)) && 0 === t.button) {
                            if (L) {
                                let r = (0, n.LE)(t.target);
                                r && e.disposables.push(r);
                            }
                            t.stopPropagation();
                        }
                    }),
                    (t.onPointerUp = (t) => {
                        (0, w.sD)(t.currentTarget, (0, w.wt)(t.nativeEvent)) &&
                            "virtual" !== e.pointerType &&
                            (0 !== t.button || e.isPressed || G(t, e.pointerType || t.pointerType));
                    }),
                    (t.onPointerEnter = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            !e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !0), W(D(e.target, t), e.pointerType));
                    }),
                    (t.onPointerLeave = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !1), H(D(e.target, t), e.pointerType, !1), Y(t));
                    });
                let r = (t) => {
                        if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                            if ((0, w.sD)(e.target, (0, w.wt)(t)) && null != e.pointerType) {
                                let r = !1,
                                    n = setTimeout(() => {
                                        e.isPressed &&
                                            e.target instanceof HTMLElement &&
                                            (r ? q(t) : ((0, E.e)(e.target), e.target.click()));
                                    }, 80);
                                U(t.currentTarget, "click", () => (r = !0), !0),
                                    e.disposables.push(() => clearTimeout(n));
                            } else q(t);
                            e.isOverTarget = !1;
                        }
                    },
                    a = (e) => {
                        q(e);
                    };
                t.onDragStart = (e) => {
                    (0, w.sD)(e.currentTarget, (0, w.wt)(e.nativeEvent)) && q(e);
                };
            }
            return t;
        }, [U, k, L, z, N, q, Y, H, W, G, X, J]);
    return (
        (0, f.useEffect)(() => {
            if (!j) return;
            let e = (0, o.TW)(j.current);
            if (!e || !e.head || e.getElementById(M)) return;
            let t = e.createElement("style");
            (t.id = M),
                (t.textContent = `
@layer {
  [${P}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim()),
                e.head.prepend(t);
        }, [j]),
        (0, f.useEffect)(() => {
            let e = V.current;
            return () => {
                var t;
                for (let r of (N || c(null != (t = e.target) ? t : void 0), e.disposables)) r();
                e.disposables = [];
            };
        }, [N]),
        { isPressed: A || K, pressProps: (0, v.v)(B, Q, { [P]: !0 }) }
    );
}
function I(e) {
    return "A" === e.tagName && e.hasAttribute("href");
}
function O(e, t) {
    let { key: r, code: n } = e,
        i = t.getAttribute("role");
    return (
        ("Enter" === r || " " === r || "Spacebar" === r || "Space" === n) &&
        !(
            (t instanceof (0, o.mD)(t).HTMLInputElement && !F(t, r)) ||
            t instanceof (0, o.mD)(t).HTMLTextAreaElement ||
            t.isContentEditable
        ) &&
        !(("link" === i || (!i && I(t))) && "Enter" !== r)
    );
}
function D(e, t) {
    let r = t.clientX,
        n = t.clientY;
    return {
        currentTarget: e,
        shiftKey: t.shiftKey,
        ctrlKey: t.ctrlKey,
        metaKey: t.metaKey,
        altKey: t.altKey,
        clientX: r,
        clientY: n,
    };
}
function R(e, t) {
    return e instanceof HTMLInputElement
        ? !F(e, t)
        : !(e instanceof HTMLInputElement) &&
              (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !I(e));
}
let L = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function F(e, t) {
    return "checkbox" === e.type || "radio" === e.type ? " " === t : L.has(e.type);
}
