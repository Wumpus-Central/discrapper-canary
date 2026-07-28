"use strict";
n.d(t, { d: () => M });
var r = n(959722),
    i = n(361037),
    a = n(745391),
    o = n(244426);
let s = "default",
    l = "",
    u = new WeakMap();
function c(e) {
    if ((0, i.un)())
        "disabled" === s &&
            ((s = "restoring"),
            setTimeout(() => {
                (0, o.v)(() => {
                    if ("restoring" === s) {
                        let t = (0, a.TW)(e);
                        "none" === t.documentElement.style.webkitUserSelect &&
                            (t.documentElement.style.webkitUserSelect = l || ""),
                            (l = ""),
                            (s = "default");
                    }
                });
            }, 300));
    else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && u.has(e)) {
        let t = u.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
        "none" === e.style[n] && (e.style[n] = t),
            "" === e.getAttribute("style") && e.removeAttribute("style"),
            u.delete(e);
    }
}
var d = n(582128);
let f = d.createContext({ register: () => {} });
function p(e, t, n) {
    if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
    return t.get(e);
}
f.displayName = "PressResponderContext";
var h = n(693770);
function m(e, t, n) {
    var r = p(e, t, "set");
    if (r.set) r.set.call(e, n);
    else {
        if (!r.writable) throw TypeError("attempted to set read only private field");
        r.value = n;
    }
    return n;
}
var g = n(192734),
    v = n(912167),
    y = n(11079),
    b = n(654978),
    _ = n(712247),
    w = n(389979),
    x = n(356560),
    E = n(139835),
    S = n(20853);
n(333007);
var k = new WeakMap();
class T {
    continuePropagation() {
        m(this, k, !1);
    }
    get shouldStopPropagation() {
        var e;
        return (e = p(this, k, "get")), e.get ? e.get.call(this) : e.value;
    }
    constructor(e, t, n, r) {
        var i;
        (0, h._)(this, k, { writable: !0, value: void 0 }), m(this, k, !0);
        let a = null != (i = null == r ? void 0 : r.target) ? i : n.currentTarget;
        const o = null == a ? void 0 : a.getBoundingClientRect();
        let s,
            l = 0,
            u,
            c = null;
        null != n.clientX && null != n.clientY && ((u = n.clientX), (c = n.clientY)),
            o &&
                (null != u && null != c
                    ? ((s = u - o.left), (l = c - o.top))
                    : ((s = o.width / 2), (l = o.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = n.currentTarget),
            (this.shiftKey = n.shiftKey),
            (this.metaKey = n.metaKey),
            (this.ctrlKey = n.ctrlKey),
            (this.altKey = n.altKey),
            (this.x = s),
            (this.y = l);
    }
}
let C = Symbol("linkClicked"),
    P = "react-aria-pressable-style",
    A = "data-react-aria-pressable";
function M(e) {
    let {
            onPress: t,
            onPressChange: n,
            onPressStart: o,
            onPressEnd: p,
            onPressUp: h,
            onClick: m,
            isDisabled: k,
            isPressed: M,
            preventFocusOnPress: D,
            shouldCancelOnPointerExit: F,
            allowTextSelectionOnPress: N,
            ref: V,
            ...j
        } = (function (e) {
            let t = (0, d.useContext)(f);
            if (t) {
                let { register: n, ...r } = t;
                (e = (0, g.v)(r, e)), n();
            }
            return (0, v.w)(t, e.ref), e;
        })(e),
        [B, U] = (0, d.useState)(!1),
        K = (0, d.useRef)({
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
        { addGlobalListener: $, removeAllGlobalListeners: z } = (0, y.A)(),
        W = (0, b.J)((e, t) => {
            let r = K.current;
            if (k || r.didFirePressStart) return !1;
            let i = !0;
            if (((r.isTriggeringEvent = !0), o)) {
                let n = new T("pressstart", t, e);
                o(n), (i = n.shouldStopPropagation);
            }
            return n && n(!0), (r.isTriggeringEvent = !1), (r.didFirePressStart = !0), U(!0), i;
        }),
        G = (0, b.J)((e, r, i = !0) => {
            let a = K.current;
            if (!a.didFirePressStart) return !1;
            (a.didFirePressStart = !1), (a.isTriggeringEvent = !0);
            let o = !0;
            if (p) {
                let t = new T("pressend", r, e);
                p(t), (o = t.shouldStopPropagation);
            }
            if ((n && n(!1), U(!1), t && i && !k)) {
                let n = new T("press", r, e);
                t(n), o && (o = n.shouldStopPropagation);
            }
            return (a.isTriggeringEvent = !1), o;
        }),
        H = (0, b.J)((e, t) => {
            let n = K.current;
            if (k) return !1;
            if (h) {
                n.isTriggeringEvent = !0;
                let r = new T("pressup", t, e);
                return h(r), (n.isTriggeringEvent = !1), r.shouldStopPropagation;
            }
            return !0;
        }),
        q = (0, b.J)((e) => {
            let t = K.current;
            if (t.isPressed && t.target) {
                for (let n of (t.didFirePressStart && null != t.pointerType && G(L(t.target, e), t.pointerType, !1),
                (t.isPressed = !1),
                (t.isOverTarget = !1),
                (t.activePointerId = null),
                (t.pointerType = null),
                z(),
                N || c(t.target),
                t.disposables))
                    n();
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
                let n = new MouseEvent("click", e);
                (0, r.o1)(n, t), m((0, r.eg)(n));
            }
        }),
        Z = (0, d.useMemo)(() => {
            let e = K.current,
                t = {
                    onKeyDown(t) {
                        if (I(t.nativeEvent, t.currentTarget) && (0, _.sD)(t.currentTarget, (0, _.wt)(t.nativeEvent))) {
                            var r;
                            O((0, _.wt)(t.nativeEvent), t.key) && t.preventDefault();
                            let o = !0;
                            if (!e.isPressed && !t.repeat) {
                                (e.target = t.currentTarget),
                                    (e.isPressed = !0),
                                    (e.pointerType = "keyboard"),
                                    (o = W(t, "keyboard"));
                                let r = t.currentTarget;
                                $(
                                    (0, a.TW)(t.currentTarget),
                                    "keyup",
                                    (0, w.c)((t) => {
                                        I(t, r) &&
                                            !t.repeat &&
                                            (0, _.sD)(r, (0, _.wt)(t)) &&
                                            e.target &&
                                            H(L(e.target, t), "keyboard");
                                    }, n),
                                    !0,
                                );
                            }
                            o && t.stopPropagation(),
                                t.metaKey &&
                                    (0, i.cX)() &&
                                    (null == (r = e.metaKeyEvents) || r.set(t.key, t.nativeEvent));
                        } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                    },
                    onClick(t) {
                        if (
                            (!t || (0, _.sD)(t.currentTarget, (0, _.wt)(t.nativeEvent))) &&
                            t &&
                            0 === t.button &&
                            !e.isTriggeringEvent &&
                            !x.Fe.isOpening
                        ) {
                            let n = !0;
                            if (
                                (k && t.preventDefault(),
                                !e.ignoreEmulatedMouseEvents &&
                                    !e.isPressed &&
                                    ("virtual" === e.pointerType || (0, E.Y)(t.nativeEvent)))
                            ) {
                                let e = W(t, "virtual"),
                                    r = H(t, "virtual"),
                                    i = G(t, "virtual");
                                X(t), (n = e && r && i);
                            } else if (e.isPressed && "keyboard" !== e.pointerType) {
                                let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                                    i = H(L(t.currentTarget, t), r),
                                    a = G(L(t.currentTarget, t), r, !0);
                                (n = i && a), (e.isOverTarget = !1), X(t), q(t);
                            }
                            (e.ignoreEmulatedMouseEvents = !1), n && t.stopPropagation();
                        }
                    },
                },
                n = (t) => {
                    var n, r, i;
                    if (e.isPressed && e.target && I(t, e.target)) {
                        O((0, _.wt)(t), t.key) && t.preventDefault();
                        let n = (0, _.wt)(t),
                            i = (0, _.sD)(e.target, (0, _.wt)(t));
                        G(L(e.target, t), "keyboard", i),
                            i && J(t, e.target),
                            z(),
                            "Enter" !== t.key &&
                                R(e.target) &&
                                (0, _.sD)(e.target, n) &&
                                !t[C] &&
                                ((t[C] = !0), (0, x.Fe)(e.target, t, !1)),
                            (e.isPressed = !1),
                            null == (r = e.metaKeyEvents) || r.delete(t.key);
                    } else if ("Meta" === t.key && (null == (n = e.metaKeyEvents) ? void 0 : n.size)) {
                        let t = e.metaKeyEvents;
                        for (let n of ((e.metaKeyEvents = void 0), t.values()))
                            null == (i = e.target) || i.dispatchEvent(new KeyboardEvent("keyup", n));
                    }
                };
            if ("u" > typeof PointerEvent) {
                (t.onPointerDown = (t) => {
                    if (0 !== t.button || !(0, _.sD)(t.currentTarget, (0, _.wt)(t.nativeEvent))) return;
                    if ((0, E.P)(t.nativeEvent)) {
                        e.pointerType = "virtual";
                        return;
                    }
                    e.pointerType = t.pointerType;
                    let r = !0;
                    if (!e.isPressed) {
                        (e.isPressed = !0),
                            (e.isOverTarget = !0),
                            (e.activePointerId = t.pointerId),
                            (e.target = t.currentTarget),
                            N ||
                                (function (e) {
                                    if ((0, i.un)()) {
                                        if ("default" === s) {
                                            let t = (0, a.TW)(e);
                                            (l = t.documentElement.style.webkitUserSelect),
                                                (t.documentElement.style.webkitUserSelect = "none");
                                        }
                                        s = "disabled";
                                    } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                                        let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                                        u.set(e, e.style[t]), (e.style[t] = "none");
                                    }
                                })(e.target),
                            (r = W(t, e.pointerType));
                        let c = (0, _.wt)(t.nativeEvent);
                        "releasePointerCapture" in c && c.releasePointerCapture(t.pointerId),
                            $((0, a.TW)(t.currentTarget), "pointerup", n, !1),
                            $((0, a.TW)(t.currentTarget), "pointercancel", o, !1);
                    }
                    r && t.stopPropagation();
                }),
                    (t.onMouseDown = (t) => {
                        if ((0, _.sD)(t.currentTarget, (0, _.wt)(t.nativeEvent)) && 0 === t.button) {
                            if (D) {
                                let n = (0, r.LE)(t.target);
                                n && e.disposables.push(n);
                            }
                            t.stopPropagation();
                        }
                    }),
                    (t.onPointerUp = (t) => {
                        (0, _.sD)(t.currentTarget, (0, _.wt)(t.nativeEvent)) &&
                            "virtual" !== e.pointerType &&
                            (0 !== t.button || e.isPressed || H(t, e.pointerType || t.pointerType));
                    }),
                    (t.onPointerEnter = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            !e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !0), W(L(e.target, t), e.pointerType));
                    }),
                    (t.onPointerLeave = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !1), G(L(e.target, t), e.pointerType, !1), Y(t));
                    });
                let n = (t) => {
                        if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                            if ((0, _.sD)(e.target, (0, _.wt)(t)) && null != e.pointerType) {
                                let n = !1,
                                    r = setTimeout(() => {
                                        e.isPressed &&
                                            e.target instanceof HTMLElement &&
                                            (n ? q(t) : ((0, S.e)(e.target), e.target.click()));
                                    }, 80);
                                $(t.currentTarget, "click", () => (n = !0), !0),
                                    e.disposables.push(() => clearTimeout(r));
                            } else q(t);
                            e.isOverTarget = !1;
                        }
                    },
                    o = (e) => {
                        q(e);
                    };
                t.onDragStart = (e) => {
                    (0, _.sD)(e.currentTarget, (0, _.wt)(e.nativeEvent)) && q(e);
                };
            }
            return t;
        }, [$, k, D, z, N, q, Y, G, W, H, X, J]);
    return (
        (0, d.useEffect)(() => {
            if (!V) return;
            let e = (0, a.TW)(V.current);
            if (!e || !e.head || e.getElementById(P)) return;
            let t = e.createElement("style");
            (t.id = P),
                (t.textContent = `
@layer {
  [${A}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim()),
                e.head.prepend(t);
        }, [V]),
        (0, d.useEffect)(() => {
            let e = K.current;
            return () => {
                var t;
                for (let n of (N || c(null != (t = e.target) ? t : void 0), e.disposables)) n();
                e.disposables = [];
            };
        }, [N]),
        { isPressed: M || B, pressProps: (0, g.v)(j, Z, { [A]: !0 }) }
    );
}
function R(e) {
    return "A" === e.tagName && e.hasAttribute("href");
}
function I(e, t) {
    let { key: n, code: r } = e,
        i = t.getAttribute("role");
    return (
        ("Enter" === n || " " === n || "Spacebar" === n || "Space" === r) &&
        !(
            (t instanceof (0, a.mD)(t).HTMLInputElement && !F(t, n)) ||
            t instanceof (0, a.mD)(t).HTMLTextAreaElement ||
            t.isContentEditable
        ) &&
        !(("link" === i || (!i && R(t))) && "Enter" !== n)
    );
}
function L(e, t) {
    let n = t.clientX,
        r = t.clientY;
    return {
        currentTarget: e,
        shiftKey: t.shiftKey,
        ctrlKey: t.ctrlKey,
        metaKey: t.metaKey,
        altKey: t.altKey,
        clientX: n,
        clientY: r,
    };
}
function O(e, t) {
    return e instanceof HTMLInputElement
        ? !F(e, t)
        : !(e instanceof HTMLInputElement) &&
              (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !R(e));
}
let D = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function F(e, t) {
    return "checkbox" === e.type || "radio" === e.type ? " " === t : D.has(e.type);
}
