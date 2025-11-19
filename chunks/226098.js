n.d(t, { r: () => C });
var r = n(990415),
    i = n(603450),
    a = n(902462),
    o = n(597600),
    s = n(375339),
    l = n(750215),
    c = n(158821),
    u = n(741433),
    d = n(920154),
    f = n(484948),
    _ = n(297808),
    p = n(477232),
    h = n(929767),
    m = n(21814),
    g = n(601339),
    E = n(383669),
    b = n(928276);
n(24156);
var y = n(473749);
function O(e) {
    let t = (0, y.useContext)(a.O);
    if (t) {
        let { register: n, ...r } = t;
        (e = (0, c.d)(r, e)), n();
    }
    return (0, u.l)(t, e.ref), e;
}
var v = new WeakMap();
class I {
    continuePropagation() {
        (0, l._)(this, v, !1);
    }
    get shouldStopPropagation() {
        return (0, o._)(this, v);
    }
    constructor(e, t, n, r) {
        var i;
        (0, s._)(this, v, {
            writable: !0,
            value: void 0,
        }),
            (0, l._)(this, v, !0);
        let a = null != (i = null == r ? void 0 : r.target) ? i : n.currentTarget,
            o = null == a ? void 0 : a.getBoundingClientRect(),
            c,
            u = 0,
            d,
            f = null;
        null != n.clientX && null != n.clientY && ((d = n.clientX), (f = n.clientY)),
            o &&
                (null != d && null != f
                    ? ((c = d - o.left), (u = f - o.top))
                    : ((c = o.width / 2), (u = o.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = n.currentTarget),
            (this.shiftKey = n.shiftKey),
            (this.metaKey = n.metaKey),
            (this.ctrlKey = n.ctrlKey),
            (this.altKey = n.altKey),
            (this.x = c),
            (this.y = u);
    }
}
let T = Symbol("linkClicked"),
    S = "react-aria-pressable-style",
    A = "data-react-aria-pressable";
function C(e) {
    let {
            onPress: t,
            onPressChange: n,
            onPressStart: a,
            onPressEnd: o,
            onPressUp: s,
            onClick: l,
            isDisabled: u,
            isPressed: v,
            preventFocusOnPress: C,
            shouldCancelOnPointerExit: D,
            allowTextSelectionOnPress: L,
            ref: x,
            ...M
        } = O(e),
        [k, j] = (0, y.useState)(!1),
        U = (0, y.useRef)({
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
        { addGlobalListener: G, removeAllGlobalListeners: B } = (0, d.x)(),
        Z = (0, f.i)((e, t) => {
            let r = U.current;
            if (u || r.didFirePressStart) return !1;
            let i = !0;
            if (((r.isTriggeringEvent = !0), a)) {
                let n = new I("pressstart", t, e);
                a(n), (i = n.shouldStopPropagation);
            }
            return n && n(!0), (r.isTriggeringEvent = !1), (r.didFirePressStart = !0), j(!0), i;
        }),
        F = (0, f.i)((e, r, i = !0) => {
            let a = U.current;
            if (!a.didFirePressStart) return !1;
            (a.didFirePressStart = !1), (a.isTriggeringEvent = !0);
            let s = !0;
            if (o) {
                let t = new I("pressend", r, e);
                o(t), (s = t.shouldStopPropagation);
            }
            if ((n && n(!1), j(!1), t && i && !u)) {
                let n = new I("press", r, e);
                t(n), s && (s = n.shouldStopPropagation);
            }
            return (a.isTriggeringEvent = !1), s;
        }),
        V = (0, f.i)((e, t) => {
            let n = U.current;
            if (u) return !1;
            if (s) {
                n.isTriggeringEvent = !0;
                let r = new I("pressup", t, e);
                return s(r), (n.isTriggeringEvent = !1), r.shouldStopPropagation;
            }
            return !0;
        }),
        H = (0, f.i)((e) => {
            let t = U.current;
            if (t.isPressed && t.target) {
                for (let n of (t.didFirePressStart && null != t.pointerType && F(P(t.target, e), t.pointerType, !1),
                (t.isPressed = !1),
                (t.isOverTarget = !1),
                (t.activePointerId = null),
                (t.pointerType = null),
                B(),
                L || (0, i.A)(t.target),
                t.disposables))
                    n();
                t.disposables = [];
            }
        }),
        Y = (0, f.i)((e) => {
            D && H(e);
        }),
        W = (0, f.i)((e) => {
            u || null == l || l(e);
        }),
        K = (0, f.i)((e, t) => {
            if (!u && l) {
                let n = new MouseEvent("click", e);
                (0, r.nh)(n, t), l((0, r.yA)(n));
            }
        }),
        z = (0, y.useMemo)(() => {
            let e = U.current,
                t = {
                    onKeyDown(t) {
                        if (R(t.nativeEvent, t.currentTarget) && (0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent))) {
                            var r;
                            w((0, _.NI)(t.nativeEvent), t.key) && t.preventDefault();
                            let i = !0;
                            if (!e.isPressed && !t.repeat) {
                                (e.target = t.currentTarget),
                                    (e.isPressed = !0),
                                    (e.pointerType = "keyboard"),
                                    (i = Z(t, "keyboard"));
                                let r = t.currentTarget,
                                    a = (t) => {
                                        R(t, r) &&
                                            !t.repeat &&
                                            (0, _.bE)(r, (0, _.NI)(t)) &&
                                            e.target &&
                                            V(P(e.target, t), "keyboard");
                                    };
                                G((0, p.r3)(t.currentTarget), "keyup", (0, h.t)(a, n), !0);
                            }
                            i && t.stopPropagation(),
                                t.metaKey &&
                                    (0, m.V5)() &&
                                    (null == (r = e.metaKeyEvents) || r.set(t.key, t.nativeEvent));
                        } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                    },
                    onClick(t) {
                        if (
                            (!t || (0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent))) &&
                            t &&
                            0 === t.button &&
                            !e.isTriggeringEvent &&
                            !g.nG.isOpening
                        ) {
                            let n = !0;
                            if (
                                (u && t.preventDefault(),
                                !e.ignoreEmulatedMouseEvents &&
                                    !e.isPressed &&
                                    ("virtual" === e.pointerType || (0, E.Z)(t.nativeEvent)))
                            ) {
                                let e = Z(t, "virtual"),
                                    r = V(t, "virtual"),
                                    i = F(t, "virtual");
                                W(t), (n = e && r && i);
                            } else if (e.isPressed && "keyboard" !== e.pointerType) {
                                let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                                    i = V(P(t.currentTarget, t), r),
                                    a = F(P(t.currentTarget, t), r, !0);
                                (n = i && a), (e.isOverTarget = !1), W(t), H(t);
                            }
                            (e.ignoreEmulatedMouseEvents = !1), n && t.stopPropagation();
                        }
                    },
                },
                n = (t) => {
                    var n, r, i;
                    if (e.isPressed && e.target && R(t, e.target)) {
                        w((0, _.NI)(t), t.key) && t.preventDefault();
                        let n = (0, _.NI)(t),
                            i = (0, _.bE)(e.target, (0, _.NI)(t));
                        F(P(e.target, t), "keyboard", i),
                            i && K(t, e.target),
                            B(),
                            "Enter" !== t.key &&
                                N(e.target) &&
                                (0, _.bE)(e.target, n) &&
                                !t[T] &&
                                ((t[T] = !0), (0, g.nG)(e.target, t, !1)),
                            (e.isPressed = !1),
                            null == (r = e.metaKeyEvents) || r.delete(t.key);
                    } else if ("Meta" === t.key && (null == (n = e.metaKeyEvents) ? void 0 : n.size)) {
                        let t = e.metaKeyEvents;
                        for (let n of ((e.metaKeyEvents = void 0), t.values()))
                            null == (i = e.target) || i.dispatchEvent(new KeyboardEvent("keyup", n));
                    }
                };
            if ("undefined" != typeof PointerEvent) {
                (t.onPointerDown = (t) => {
                    if (0 !== t.button || !(0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent))) return;
                    if ((0, E.c)(t.nativeEvent)) {
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
                            L || (0, i.l)(e.target),
                            (r = Z(t, e.pointerType));
                        let o = (0, _.NI)(t.nativeEvent);
                        "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId),
                            G((0, p.r3)(t.currentTarget), "pointerup", n, !1),
                            G((0, p.r3)(t.currentTarget), "pointercancel", a, !1);
                    }
                    r && t.stopPropagation();
                }),
                    (t.onMouseDown = (t) => {
                        if ((0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent)) && 0 === t.button) {
                            if (C) {
                                let n = (0, r.WZ)(t.target);
                                n && e.disposables.push(n);
                            }
                            t.stopPropagation();
                        }
                    }),
                    (t.onPointerUp = (t) => {
                        (0, _.bE)(t.currentTarget, (0, _.NI)(t.nativeEvent)) &&
                            "virtual" !== e.pointerType &&
                            (0 !== t.button || e.isPressed || V(t, e.pointerType || t.pointerType));
                    }),
                    (t.onPointerEnter = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            !e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !0), Z(P(e.target, t), e.pointerType));
                    }),
                    (t.onPointerLeave = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !1), F(P(e.target, t), e.pointerType, !1), Y(t));
                    });
                let n = (t) => {
                        if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                            if ((0, _.bE)(e.target, (0, _.NI)(t)) && null != e.pointerType) {
                                let n = !1,
                                    r = setTimeout(() => {
                                        e.isPressed &&
                                            e.target instanceof HTMLElement &&
                                            (n ? H(t) : ((0, b.A)(e.target), e.target.click()));
                                    }, 80);
                                G(t.currentTarget, "click", () => (n = !0), !0),
                                    e.disposables.push(() => clearTimeout(r));
                            } else H(t);
                            e.isOverTarget = !1;
                        }
                    },
                    a = (e) => {
                        H(e);
                    };
                t.onDragStart = (e) => {
                    (0, _.bE)(e.currentTarget, (0, _.NI)(e.nativeEvent)) && H(e);
                };
            }
            return t;
        }, [G, u, C, B, L, H, Y, F, Z, V, W, K]);
    return (
        (0, y.useEffect)(() => {
            if (!x) return;
            let e = (0, p.r3)(x.current);
            if (!e || !e.head || e.getElementById(S)) return;
            let t = e.createElement("style");
            (t.id = S),
                (t.textContent = `
@layer {
  [${A}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim()),
                e.head.prepend(t);
        }, [x]),
        (0, y.useEffect)(() => {
            let e = U.current;
            return () => {
                var t;
                for (let n of (L || (0, i.A)(null != (t = e.target) ? t : void 0), e.disposables)) n();
                e.disposables = [];
            };
        }, [L]),
        {
            isPressed: v || k,
            pressProps: (0, c.d)(M, z, { [A]: !0 }),
        }
    );
}
function N(e) {
    return "A" === e.tagName && e.hasAttribute("href");
}
function R(e, t) {
    let { key: n, code: r } = e,
        i = t,
        a = i.getAttribute("role");
    return (
        ("Enter" === n || " " === n || "Spacebar" === n || "Space" === r) &&
        !(
            (i instanceof (0, p.kR)(i).HTMLInputElement && !x(i, n)) ||
            i instanceof (0, p.kR)(i).HTMLTextAreaElement ||
            i.isContentEditable
        ) &&
        !(("link" === a || (!a && N(i))) && "Enter" !== n)
    );
}
function P(e, t) {
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
function D(e) {
    return (
        !(e instanceof HTMLInputElement) &&
        (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !N(e))
    );
}
function w(e, t) {
    return e instanceof HTMLInputElement ? !x(e, t) : D(e);
}
let L = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function x(e, t) {
    return "checkbox" === e.type || "radio" === e.type ? " " === t : L.has(e.type);
}
