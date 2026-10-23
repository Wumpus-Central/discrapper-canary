r.d(t, { d: () => x });
var n = r(241453),
    i = r(872197),
    o = r(964259),
    a = r(346711),
    s = r(256062),
    l = r(143761);
function u(e) {
    let t = e?.defaultView;
    return t?.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0;
}
let c = new WeakMap();
var f = r(644255),
    p = r(423189),
    d = r(184093),
    h = r(993558),
    m = r(582128);
let v = m.createContext({ register: () => {} });
v.displayName = "PressResponderContext";
var y = r(241872),
    g = r(635597),
    b = r(808141);
r(333007);
class w {
    #l;
    constructor(e, t, r, n) {
        this.#l = !0;
        let i = n?.target ?? r.currentTarget;
        const o = i?.getBoundingClientRect();
        let a,
            s = 0,
            l,
            u = null;
        (null != r.clientX && null != r.clientY && ((l = r.clientX), (u = r.clientY)),
            o &&
                (null != l && null != u
                    ? ((a = l - o.left), (s = u - o.top))
                    : ((a = o.width / 2), (s = o.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = r.currentTarget),
            (this.shiftKey = r.shiftKey),
            (this.metaKey = r.metaKey),
            (this.ctrlKey = r.ctrlKey),
            (this.altKey = r.altKey),
            (this.x = a),
            (this.y = s),
            (this.key = r.key));
    }
    continuePropagation() {
        this.#l = !1;
    }
    get shouldStopPropagation() {
        return this.#l;
    }
}
let _ = Symbol("linkClicked"),
    S = "react-aria-pressable-style",
    E = "data-react-aria-pressable";
function x(e) {
    let {
            onPress: t,
            onPressChange: r,
            onPressStart: x,
            onPressEnd: P,
            onPressUp: A,
            onClick: I,
            isDisabled: O,
            isPressed: R,
            preventFocusOnPress: D,
            shouldCancelOnPointerExit: L,
            allowTextSelectionOnPress: F,
            ref: N,
            ...j
        } = (function (e) {
            let t = (0, m.useContext)(v);
            if (t) {
                let { register: r, ref: n, ...i } = t;
                ((e = (0, d.v)(i, e)), r());
            }
            return ((0, b.w)(t, e.ref), e);
        })(e),
        [B, K] = (0, m.useState)(!1),
        V = (0, m.useRef)({
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
        { addGlobalListener: U, removeAllGlobalListeners: $ } = (0, g.A)(),
        H = (0, m.useCallback)(
            (e, t) => {
                let n = V.current;
                if (O || n.didFirePressStart) return !1;
                let i = !0;
                if (((n.isTriggeringEvent = !0), x)) {
                    let r = new w("pressstart", t, e);
                    (x(r), (i = r.shouldStopPropagation));
                }
                return (r && r(!0), (n.isTriggeringEvent = !1), (n.didFirePressStart = !0), K(!0), i);
            },
            [O, x, r],
        ),
        z = (0, m.useCallback)(
            (e, n, i = !0) => {
                let o = V.current;
                if (!o.didFirePressStart) return !1;
                ((o.didFirePressStart = !1), (o.isTriggeringEvent = !0));
                let a = !0;
                if (P) {
                    let t = new w("pressend", n, e);
                    (P(t), (a = t.shouldStopPropagation));
                }
                if ((r && r(!1), K(!1), t && i && !O)) {
                    let r = new w("press", n, e);
                    (t(r), (a &&= r.shouldStopPropagation));
                }
                return ((o.isTriggeringEvent = !1), a);
            },
            [O, P, r, t],
        ),
        G = (0, y.J)(z),
        W = (0, m.useCallback)(
            (e, t) => {
                let r = V.current;
                if (O) return !1;
                if (A) {
                    r.isTriggeringEvent = !0;
                    let n = new w("pressup", t, e);
                    return (A(n), (r.isTriggeringEvent = !1), n.shouldStopPropagation);
                }
                return !0;
            },
            [O, A],
        ),
        q = (0, y.J)(W),
        Y = (0, m.useCallback)(
            (e) => {
                let t = V.current;
                if (t.isPressed && t.target) {
                    for (let r of (t.didFirePressStart && null != t.pointerType && z(T(t.target, e), t.pointerType, !1),
                    (t.isPressed = !1),
                    (t.isOverTarget = !1),
                    (t.activePointerId = null),
                    (t.pointerType = null),
                    $(),
                    F || (0, o.E)(t.target),
                    t.disposables))
                        r();
                    t.disposables = [];
                }
            },
            [F, $, z],
        ),
        X = (0, y.J)(Y);
    (0, m.useEffect)(() => {
        O &&
            V.current.isPressed &&
            X({ currentTarget: V.current.target, shiftKey: !1, ctrlKey: !1, metaKey: !1, altKey: !1 });
    }, [O]);
    let J = (0, m.useCallback)(
            (e) => {
                L && Y(e);
            },
            [L, Y],
        ),
        Z = (0, m.useCallback)(
            (e) => {
                O || I?.(e);
            },
            [O, I],
        ),
        Q = (0, m.useCallback)(
            (e, t) => {
                if (!O && I) {
                    let r = new MouseEvent("click", e);
                    ((0, i.o1)(r, t), I((0, i.eg)(r)));
                }
            },
            [O, I],
        ),
        ee = (0, m.useMemo)(() => {
            let e = V.current,
                t = {
                    onKeyDown(t) {
                        if (k(t.nativeEvent, t.currentTarget) && (0, s.sD)(t.currentTarget, (0, s.wt)(t))) {
                            M((0, s.wt)(t), t.key) && t.preventDefault();
                            let i = !0;
                            e.isPressed ||
                                t.repeat ||
                                ((e.target = t.currentTarget),
                                (e.isPressed = !0),
                                (e.pointerType = "keyboard"),
                                (i = H(t, "keyboard")));
                            let o = t.currentTarget;
                            (U(
                                (0, l.TW)(t.currentTarget),
                                "keyup",
                                (0, n.c)((t) => {
                                    k(t, o) &&
                                        !t.repeat &&
                                        (0, s.sD)(o, (0, s.wt)(t)) &&
                                        e.target &&
                                        q(T(e.target, t), "keyboard");
                                }, r),
                                !0,
                            ),
                                i && t.stopPropagation(),
                                t.metaKey && (0, f.cX)() && e.metaKeyEvents?.set(t.key, t.nativeEvent));
                        } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                    },
                    onClick(t) {
                        if (
                            (!t || (0, s.sD)(t.currentTarget, (0, s.wt)(t))) &&
                            t &&
                            0 === t.button &&
                            !e.isTriggeringEvent &&
                            !h.Fe.isOpening
                        ) {
                            let r = !0;
                            if (
                                (O && t.preventDefault(),
                                !e.ignoreEmulatedMouseEvents &&
                                    !e.isPressed &&
                                    ("virtual" === e.pointerType || (0, p.Y)(t.nativeEvent)))
                            ) {
                                let e = H(t, "virtual"),
                                    n = q(t, "virtual"),
                                    i = G(t, "virtual");
                                (Z(t), (r = e && n && i));
                            } else if (e.isPressed && "keyboard" !== e.pointerType) {
                                let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                                    i = q(T(t.currentTarget, t), n),
                                    o = G(T(t.currentTarget, t), n, !0);
                                ((r = i && o), (e.isOverTarget = !1), Z(t), X(t));
                            }
                            ((e.ignoreEmulatedMouseEvents = !1), r && t.stopPropagation());
                        }
                    },
                },
                r = (t) => {
                    if (e.isPressed && e.target && k(t, e.target)) {
                        M((0, s.wt)(t), t.key) && t.preventDefault();
                        let r = (0, s.wt)(t),
                            n = (0, s.sD)(e.target, r);
                        (G(T(e.target, t), "keyboard", n),
                            n && Q(t, e.target),
                            $(),
                            "Enter" !== t.key &&
                                C(e.target) &&
                                (0, s.sD)(e.target, r) &&
                                !t[_] &&
                                ((t[_] = !0), (0, h.Fe)(e.target, t, !1)),
                            (e.isPressed = !1),
                            e.metaKeyEvents?.delete(t.key));
                    } else if ("Meta" === t.key && e.metaKeyEvents?.size) {
                        let t = e.metaKeyEvents;
                        for (let r of ((e.metaKeyEvents = void 0), t.values()))
                            e.target?.dispatchEvent(new KeyboardEvent("keyup", r));
                    }
                };
            if ("u" > typeof PointerEvent) {
                ((t.onPointerDown = (t) => {
                    if (0 !== t.button || !(0, s.sD)(t.currentTarget, (0, s.wt)(t))) return;
                    if ((0, p.P)(t.nativeEvent)) {
                        e.pointerType = "virtual";
                        return;
                    }
                    e.pointerType = t.pointerType;
                    let i = !0;
                    if (!e.isPressed) {
                        ((e.isPressed = !0),
                            (e.isOverTarget = !0),
                            (e.activePointerId = t.pointerId),
                            (e.target = t.currentTarget),
                            F || (0, o.M)(e.target),
                            (i = H(t, e.pointerType)));
                        let a = (0, s.wt)(t);
                        ("releasePointerCapture" in a &&
                            ("hasPointerCapture" in a
                                ? a.hasPointerCapture(t.pointerId) && a.releasePointerCapture(t.pointerId)
                                : a.releasePointerCapture(t.pointerId)),
                            U((0, l.TW)(t.currentTarget), "pointerup", r, !1),
                            U((0, l.TW)(t.currentTarget), "pointercancel", n, !1));
                    }
                    i && t.stopPropagation();
                }),
                    (t.onMouseDown = (t) => {
                        if ((0, s.sD)(t.currentTarget, (0, s.wt)(t)) && 0 === t.button) {
                            if (D) {
                                let r = (0, i.LE)(t.target);
                                r && e.disposables.push(r);
                            }
                            t.stopPropagation();
                        }
                    }),
                    (t.onPointerUp = (t) => {
                        (0, s.sD)(t.currentTarget, (0, s.wt)(t)) &&
                            "virtual" !== e.pointerType &&
                            (0 !== t.button || e.isPressed || q(t, e.pointerType || t.pointerType));
                    }),
                    (t.onPointerEnter = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            !e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !0), H(T(e.target, t), e.pointerType));
                    }),
                    (t.onPointerLeave = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !1), G(T(e.target, t), e.pointerType, !1), J(t));
                    }));
                let r = (t) => {
                        if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                            if ((0, s.sD)(e.target, (0, s.wt)(t)) && null != e.pointerType) {
                                let r = !1,
                                    n = setTimeout(() => {
                                        e.isPressed &&
                                            e.target instanceof HTMLElement &&
                                            (r ? X(t) : ((0, a.e)(e.target), e.target.click()));
                                    }, 80);
                                (U(t.currentTarget, "click", () => (r = !0), !0),
                                    e.disposables.push(() => clearTimeout(n)));
                            } else X(t);
                            e.isOverTarget = !1;
                        }
                    },
                    n = (e) => {
                        X(e);
                    };
                t.onDragStart = (e) => {
                    (0, s.sD)(e.currentTarget, (0, s.wt)(e)) && X(e);
                };
            }
            return t;
        }, [U, O, D, $, F, J, H, Z, Q]);
    return (
        (0, m.useEffect)(() => {
            if (!N) return;
            let e = (0, l.TW)(N.current);
            if (!e || !e.head || e.getElementById(S)) return;
            let t = e.createElement("style");
            t.id = S;
            let r = (function (e) {
                let t = e ?? ("u" > typeof document ? document : void 0);
                if (!t) return u(t);
                if (c.has(t)) return c.get(t);
                let r = t.querySelector('meta[property="csp-nonce"]'),
                    n = (r && r instanceof (0, l.mD)(r).HTMLMetaElement && (r.nonce || r.content)) || u(t) || void 0;
                return (void 0 !== n && c.set(t, n), n);
            })(e);
            (r && (t.nonce = r),
                (t.textContent = `
@layer {
  [${E}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim()),
                e.head.prepend(t));
        }, [N]),
        (0, m.useEffect)(() => {
            let e = V.current;
            return () => {
                for (let t of (F || (0, o.E)(e.target ?? void 0), e.disposables)) t();
                e.disposables = [];
            };
        }, [F]),
        { isPressed: R || B, pressProps: (0, d.v)(j, ee, { [E]: !0 }) }
    );
}
function C(e) {
    return "A" === e.tagName && e.hasAttribute("href");
}
function k(e, t) {
    let { key: r, code: n } = e,
        i = t.getAttribute("role");
    return (
        ("Enter" === r || " " === r || "Spacebar" === r || "Space" === n) &&
        !(
            (t instanceof (0, l.mD)(t).HTMLInputElement && !A(t, r)) ||
            t instanceof (0, l.mD)(t).HTMLTextAreaElement ||
            t.isContentEditable
        ) &&
        !(("link" === i || (!i && C(t))) && "Enter" !== r)
    );
}
function T(e, t) {
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
        key: t.key,
    };
}
function M(e, t) {
    return (
        (!(0, f.cX)() || "Enter" !== t) &&
        (e instanceof HTMLInputElement
            ? ("Enter" !== t || ("checkbox" !== e.type && "radio" !== e.type)) && !A(e, t)
            : !(e instanceof HTMLInputElement) &&
              (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !C(e)))
    );
}
let P = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function A(e, t) {
    return "checkbox" === e.type || "radio" === e.type ? " " === t : P.has(e.type);
}
