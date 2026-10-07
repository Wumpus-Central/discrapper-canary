r.d(t, { d: () => M });
var n = r(241453),
    i = r(872197),
    o = r(143761),
    a = r(644255),
    s = r(570340);
let l = "default",
    u = "",
    c = new WeakMap();
function f(e) {
    if ((0, a.un)() && (0, a.Tc)())
        "disabled" === l &&
            ((l = "restoring"),
            setTimeout(() => {
                (0, s.v)(() => {
                    if ("restoring" === l) {
                        let t = (0, o.TW)(e);
                        ("none" === t.documentElement.style.webkitUserSelect &&
                            (t.documentElement.style.webkitUserSelect = u || ""),
                            (u = ""),
                            (l = "default"));
                    }
                });
            }, 300));
    else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && c.has(e)) {
        let t = c.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
        ("none" === e.style[r] && (e.style[r] = t),
            "" === e.getAttribute("style") && e.removeAttribute("style"),
            c.delete(e));
    }
}
var p = r(346711),
    d = r(256062);
function h(e) {
    let t = e?.defaultView;
    return t?.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0;
}
let m = new WeakMap();
var v = r(423189),
    y = r(184093),
    g = r(993558),
    b = r(582128);
let w = b.createContext({ register: () => {} });
w.displayName = "PressResponderContext";
var _ = r(241872),
    S = r(635597),
    E = r(808141);
r(333007);
class x {
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
let C = Symbol("linkClicked"),
    k = "react-aria-pressable-style",
    T = "data-react-aria-pressable";
function M(e) {
    let {
            onPress: t,
            onPressChange: r,
            onPressStart: s,
            onPressEnd: M,
            onPressUp: R,
            onClick: L,
            isDisabled: D,
            isPressed: F,
            preventFocusOnPress: N,
            shouldCancelOnPointerExit: j,
            allowTextSelectionOnPress: B,
            ref: K,
            ...U
        } = (function (e) {
            let t = (0, b.useContext)(w);
            if (t) {
                let { register: r, ref: n, ...i } = t;
                ((e = (0, y.v)(i, e)), r());
            }
            return ((0, E.w)(t, e.ref), e);
        })(e),
        [V, $] = (0, b.useState)(!1),
        H = (0, b.useRef)({
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
        { addGlobalListener: z, removeAllGlobalListeners: G } = (0, S.A)(),
        W = (0, b.useCallback)(
            (e, t) => {
                let n = H.current;
                if (D || n.didFirePressStart) return !1;
                let i = !0;
                if (((n.isTriggeringEvent = !0), s)) {
                    let r = new x("pressstart", t, e);
                    (s(r), (i = r.shouldStopPropagation));
                }
                return (r && r(!0), (n.isTriggeringEvent = !1), (n.didFirePressStart = !0), $(!0), i);
            },
            [D, s, r],
        ),
        q = (0, b.useCallback)(
            (e, n, i = !0) => {
                let o = H.current;
                if (!o.didFirePressStart) return !1;
                ((o.didFirePressStart = !1), (o.isTriggeringEvent = !0));
                let a = !0;
                if (M) {
                    let t = new x("pressend", n, e);
                    (M(t), (a = t.shouldStopPropagation));
                }
                if ((r && r(!1), $(!1), t && i && !D)) {
                    let r = new x("press", n, e);
                    (t(r), (a &&= r.shouldStopPropagation));
                }
                return ((o.isTriggeringEvent = !1), a);
            },
            [D, M, r, t],
        ),
        Y = (0, _.J)(q),
        X = (0, b.useCallback)(
            (e, t) => {
                let r = H.current;
                if (D) return !1;
                if (R) {
                    r.isTriggeringEvent = !0;
                    let n = new x("pressup", t, e);
                    return (R(n), (r.isTriggeringEvent = !1), n.shouldStopPropagation);
                }
                return !0;
            },
            [D, R],
        ),
        J = (0, _.J)(X),
        Z = (0, b.useCallback)(
            (e) => {
                let t = H.current;
                if (t.isPressed && t.target) {
                    for (let r of (t.didFirePressStart && null != t.pointerType && q(I(t.target, e), t.pointerType, !1),
                    (t.isPressed = !1),
                    (t.isOverTarget = !1),
                    (t.activePointerId = null),
                    (t.pointerType = null),
                    G(),
                    B || f(t.target),
                    t.disposables))
                        r();
                    t.disposables = [];
                }
            },
            [B, G, q],
        ),
        Q = (0, _.J)(Z);
    (0, b.useEffect)(() => {
        D &&
            H.current.isPressed &&
            Q({ currentTarget: H.current.target, shiftKey: !1, ctrlKey: !1, metaKey: !1, altKey: !1 });
    }, [D]);
    let ee = (0, b.useCallback)(
            (e) => {
                j && Z(e);
            },
            [j, Z],
        ),
        et = (0, b.useCallback)(
            (e) => {
                D || L?.(e);
            },
            [D, L],
        ),
        er = (0, b.useCallback)(
            (e, t) => {
                if (!D && L) {
                    let r = new MouseEvent("click", e);
                    ((0, i.o1)(r, t), L((0, i.eg)(r)));
                }
            },
            [D, L],
        ),
        en = (0, b.useMemo)(() => {
            let e = H.current,
                t = {
                    onKeyDown(t) {
                        if (A(t.nativeEvent, t.currentTarget) && (0, d.sD)(t.currentTarget, (0, d.wt)(t))) {
                            O((0, d.wt)(t), t.key) && t.preventDefault();
                            let i = !0;
                            e.isPressed ||
                                t.repeat ||
                                ((e.target = t.currentTarget),
                                (e.isPressed = !0),
                                (e.pointerType = "keyboard"),
                                (i = W(t, "keyboard")));
                            let s = t.currentTarget;
                            (z(
                                (0, o.TW)(t.currentTarget),
                                "keyup",
                                (0, n.c)((t) => {
                                    A(t, s) &&
                                        !t.repeat &&
                                        (0, d.sD)(s, (0, d.wt)(t)) &&
                                        e.target &&
                                        J(I(e.target, t), "keyboard");
                                }, r),
                                !0,
                            ),
                                i && t.stopPropagation(),
                                t.metaKey && (0, a.cX)() && e.metaKeyEvents?.set(t.key, t.nativeEvent));
                        } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                    },
                    onClick(t) {
                        if (
                            (!t || (0, d.sD)(t.currentTarget, (0, d.wt)(t))) &&
                            t &&
                            0 === t.button &&
                            !e.isTriggeringEvent &&
                            !g.Fe.isOpening
                        ) {
                            let r = !0;
                            if (
                                (D && t.preventDefault(),
                                !e.ignoreEmulatedMouseEvents &&
                                    !e.isPressed &&
                                    ("virtual" === e.pointerType || (0, v.Y)(t.nativeEvent)))
                            ) {
                                let e = W(t, "virtual"),
                                    n = J(t, "virtual"),
                                    i = Y(t, "virtual");
                                (et(t), (r = e && n && i));
                            } else if (e.isPressed && "keyboard" !== e.pointerType) {
                                let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                                    i = J(I(t.currentTarget, t), n),
                                    o = Y(I(t.currentTarget, t), n, !0);
                                ((r = i && o), (e.isOverTarget = !1), et(t), Q(t));
                            }
                            ((e.ignoreEmulatedMouseEvents = !1), r && t.stopPropagation());
                        }
                    },
                },
                r = (t) => {
                    if (e.isPressed && e.target && A(t, e.target)) {
                        O((0, d.wt)(t), t.key) && t.preventDefault();
                        let r = (0, d.wt)(t),
                            n = (0, d.sD)(e.target, r);
                        (Y(I(e.target, t), "keyboard", n),
                            n && er(t, e.target),
                            G(),
                            "Enter" !== t.key &&
                                P(e.target) &&
                                (0, d.sD)(e.target, r) &&
                                !t[C] &&
                                ((t[C] = !0), (0, g.Fe)(e.target, t, !1)),
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
                    if (0 !== t.button || !(0, d.sD)(t.currentTarget, (0, d.wt)(t))) return;
                    if ((0, v.P)(t.nativeEvent)) {
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
                            B ||
                                (function (e) {
                                    if ((0, a.un)() && (0, a.Tc)()) {
                                        if ("default" === l) {
                                            let t = (0, o.TW)(e);
                                            ((u = t.documentElement.style.webkitUserSelect),
                                                (t.documentElement.style.webkitUserSelect = "none"));
                                        }
                                        l = "disabled";
                                    } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                                        let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                                        (c.set(e, e.style[t]), (e.style[t] = "none"));
                                    }
                                })(e.target),
                            (i = W(t, e.pointerType)));
                        let s = (0, d.wt)(t);
                        ("releasePointerCapture" in s &&
                            ("hasPointerCapture" in s
                                ? s.hasPointerCapture(t.pointerId) && s.releasePointerCapture(t.pointerId)
                                : s.releasePointerCapture(t.pointerId)),
                            z((0, o.TW)(t.currentTarget), "pointerup", r, !1),
                            z((0, o.TW)(t.currentTarget), "pointercancel", n, !1));
                    }
                    i && t.stopPropagation();
                }),
                    (t.onMouseDown = (t) => {
                        if ((0, d.sD)(t.currentTarget, (0, d.wt)(t)) && 0 === t.button) {
                            if (N) {
                                let r = (0, i.LE)(t.target);
                                r && e.disposables.push(r);
                            }
                            t.stopPropagation();
                        }
                    }),
                    (t.onPointerUp = (t) => {
                        (0, d.sD)(t.currentTarget, (0, d.wt)(t)) &&
                            "virtual" !== e.pointerType &&
                            (0 !== t.button || e.isPressed || J(t, e.pointerType || t.pointerType));
                    }),
                    (t.onPointerEnter = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            !e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !0), W(I(e.target, t), e.pointerType));
                    }),
                    (t.onPointerLeave = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !1), Y(I(e.target, t), e.pointerType, !1), ee(t));
                    }));
                let r = (t) => {
                        if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                            if ((0, d.sD)(e.target, (0, d.wt)(t)) && null != e.pointerType) {
                                let r = !1,
                                    n = setTimeout(() => {
                                        e.isPressed &&
                                            e.target instanceof HTMLElement &&
                                            (r ? Q(t) : ((0, p.e)(e.target), e.target.click()));
                                    }, 80);
                                (z(t.currentTarget, "click", () => (r = !0), !0),
                                    e.disposables.push(() => clearTimeout(n)));
                            } else Q(t);
                            e.isOverTarget = !1;
                        }
                    },
                    n = (e) => {
                        Q(e);
                    };
                t.onDragStart = (e) => {
                    (0, d.sD)(e.currentTarget, (0, d.wt)(e)) && Q(e);
                };
            }
            return t;
        }, [z, D, N, G, B, ee, W, et, er]);
    return (
        (0, b.useEffect)(() => {
            if (!K) return;
            let e = (0, o.TW)(K.current);
            if (!e || !e.head || e.getElementById(k)) return;
            let t = e.createElement("style");
            t.id = k;
            let r = (function (e) {
                let t = e ?? ("u" > typeof document ? document : void 0);
                if (!t) return h(t);
                if (m.has(t)) return m.get(t);
                let r = t.querySelector('meta[property="csp-nonce"]'),
                    n = (r && r instanceof (0, o.mD)(r).HTMLMetaElement && (r.nonce || r.content)) || h(t) || void 0;
                return (void 0 !== n && m.set(t, n), n);
            })(e);
            (r && (t.nonce = r),
                (t.textContent = `
@layer {
  [${T}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim()),
                e.head.prepend(t));
        }, [K]),
        (0, b.useEffect)(() => {
            let e = H.current;
            return () => {
                for (let t of (B || f(e.target ?? void 0), e.disposables)) t();
                e.disposables = [];
            };
        }, [B]),
        { isPressed: F || V, pressProps: (0, y.v)(U, en, { [T]: !0 }) }
    );
}
function P(e) {
    return "A" === e.tagName && e.hasAttribute("href");
}
function A(e, t) {
    let { key: r, code: n } = e,
        i = t.getAttribute("role");
    return (
        ("Enter" === r || " " === r || "Spacebar" === r || "Space" === n) &&
        !(
            (t instanceof (0, o.mD)(t).HTMLInputElement && !L(t, r)) ||
            t instanceof (0, o.mD)(t).HTMLTextAreaElement ||
            t.isContentEditable
        ) &&
        !(("link" === i || (!i && P(t))) && "Enter" !== r)
    );
}
function I(e, t) {
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
function O(e, t) {
    return (
        (!(0, a.cX)() || "Enter" !== t) &&
        (e instanceof HTMLInputElement
            ? ("Enter" !== t || ("checkbox" !== e.type && "radio" !== e.type)) && !L(e, t)
            : !(e instanceof HTMLInputElement) &&
              (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !P(e)))
    );
}
let R = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function L(e, t) {
    return "checkbox" === e.type || "radio" === e.type ? " " === t : R.has(e.type);
}
