"use strict";
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
                        "none" === t.documentElement.style.webkitUserSelect &&
                            (t.documentElement.style.webkitUserSelect = u || ""),
                            (u = ""),
                            (l = "default");
                    }
                });
            }, 300));
    else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && c.has(e)) {
        let t = c.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
        "none" === e.style[r] && (e.style[r] = t),
            "" === e.getAttribute("style") && e.removeAttribute("style"),
            c.delete(e);
    }
}
var d = r(346711),
    p = r(256062);
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
    x = r(808141);
r(333007);
class E {
    #l;
    constructor(e, t, r, n) {
        this.#l = !0;
        let i = n?.target ?? r.currentTarget;
        const o = i?.getBoundingClientRect();
        let a,
            s = 0,
            l,
            u = null;
        null != r.clientX && null != r.clientY && ((l = r.clientX), (u = r.clientY)),
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
            (this.key = r.key);
    }
    continuePropagation() {
        this.#l = !1;
    }
    get shouldStopPropagation() {
        return this.#l;
    }
}
let k = Symbol("linkClicked"),
    C = "react-aria-pressable-style",
    T = "data-react-aria-pressable";
function M(e) {
    let {
            onPress: t,
            onPressChange: r,
            onPressStart: s,
            onPressEnd: M,
            onPressUp: D,
            onClick: R,
            isDisabled: L,
            isPressed: F,
            preventFocusOnPress: N,
            shouldCancelOnPointerExit: j,
            allowTextSelectionOnPress: B,
            ref: K,
            ...$
        } = (function (e) {
            let t = (0, b.useContext)(w);
            if (t) {
                let { register: r, ref: n, ...i } = t;
                (e = (0, y.v)(i, e)), r();
            }
            return (0, x.w)(t, e.ref), e;
        })(e),
        [V, U] = (0, b.useState)(!1),
        z = (0, b.useRef)({
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
        { addGlobalListener: W, removeAllGlobalListeners: H } = (0, S.A)(),
        G = (0, b.useCallback)(
            (e, t) => {
                let n = z.current;
                if (L || n.didFirePressStart) return !1;
                let i = !0;
                if (((n.isTriggeringEvent = !0), s)) {
                    let r = new E("pressstart", t, e);
                    s(r), (i = r.shouldStopPropagation);
                }
                return r && r(!0), (n.isTriggeringEvent = !1), (n.didFirePressStart = !0), U(!0), i;
            },
            [L, s, r],
        ),
        q = (0, b.useCallback)(
            (e, n, i = !0) => {
                let o = z.current;
                if (!o.didFirePressStart) return !1;
                (o.didFirePressStart = !1), (o.isTriggeringEvent = !0);
                let a = !0;
                if (M) {
                    let t = new E("pressend", n, e);
                    M(t), (a = t.shouldStopPropagation);
                }
                if ((r && r(!1), U(!1), t && i && !L)) {
                    let r = new E("press", n, e);
                    t(r), (a &&= r.shouldStopPropagation);
                }
                return (o.isTriggeringEvent = !1), a;
            },
            [L, M, r, t],
        ),
        Y = (0, _.J)(q),
        X = (0, b.useCallback)(
            (e, t) => {
                let r = z.current;
                if (L) return !1;
                if (D) {
                    r.isTriggeringEvent = !0;
                    let n = new E("pressup", t, e);
                    return D(n), (r.isTriggeringEvent = !1), n.shouldStopPropagation;
                }
                return !0;
            },
            [L, D],
        ),
        J = (0, _.J)(X),
        Q = (0, b.useCallback)(
            (e) => {
                let t = z.current;
                if (t.isPressed && t.target) {
                    for (let r of (t.didFirePressStart && null != t.pointerType && q(I(t.target, e), t.pointerType, !1),
                    (t.isPressed = !1),
                    (t.isOverTarget = !1),
                    (t.activePointerId = null),
                    (t.pointerType = null),
                    H(),
                    B || f(t.target),
                    t.disposables))
                        r();
                    t.disposables = [];
                }
            },
            [B, H, q],
        ),
        Z = (0, _.J)(Q);
    (0, b.useEffect)(() => {
        L &&
            z.current.isPressed &&
            Z({ currentTarget: z.current.target, shiftKey: !1, ctrlKey: !1, metaKey: !1, altKey: !1 });
    }, [L]);
    let ee = (0, b.useCallback)(
            (e) => {
                j && Q(e);
            },
            [j, Q],
        ),
        et = (0, b.useCallback)(
            (e) => {
                L || R?.(e);
            },
            [L, R],
        ),
        er = (0, b.useCallback)(
            (e, t) => {
                if (!L && R) {
                    let r = new MouseEvent("click", e);
                    (0, i.o1)(r, t), R((0, i.eg)(r));
                }
            },
            [L, R],
        ),
        en = (0, b.useMemo)(() => {
            let e = z.current,
                t = {
                    onKeyDown(t) {
                        if (A(t.nativeEvent, t.currentTarget) && (0, p.sD)(t.currentTarget, (0, p.wt)(t))) {
                            O((0, p.wt)(t), t.key) && t.preventDefault();
                            let i = !0;
                            e.isPressed ||
                                t.repeat ||
                                ((e.target = t.currentTarget),
                                (e.isPressed = !0),
                                (e.pointerType = "keyboard"),
                                (i = G(t, "keyboard")));
                            let s = t.currentTarget;
                            W(
                                (0, o.TW)(t.currentTarget),
                                "keyup",
                                (0, n.c)((t) => {
                                    A(t, s) &&
                                        !t.repeat &&
                                        (0, p.sD)(s, (0, p.wt)(t)) &&
                                        e.target &&
                                        J(I(e.target, t), "keyboard");
                                }, r),
                                !0,
                            ),
                                i && t.stopPropagation(),
                                t.metaKey && (0, a.cX)() && e.metaKeyEvents?.set(t.key, t.nativeEvent);
                        } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                    },
                    onClick(t) {
                        if (
                            (!t || (0, p.sD)(t.currentTarget, (0, p.wt)(t))) &&
                            t &&
                            0 === t.button &&
                            !e.isTriggeringEvent &&
                            !g.Fe.isOpening
                        ) {
                            let r = !0;
                            if (
                                (L && t.preventDefault(),
                                !e.ignoreEmulatedMouseEvents &&
                                    !e.isPressed &&
                                    ("virtual" === e.pointerType || (0, v.Y)(t.nativeEvent)))
                            ) {
                                let e = G(t, "virtual"),
                                    n = J(t, "virtual"),
                                    i = Y(t, "virtual");
                                et(t), (r = e && n && i);
                            } else if (e.isPressed && "keyboard" !== e.pointerType) {
                                let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                                    i = J(I(t.currentTarget, t), n),
                                    o = Y(I(t.currentTarget, t), n, !0);
                                (r = i && o), (e.isOverTarget = !1), et(t), Z(t);
                            }
                            (e.ignoreEmulatedMouseEvents = !1), r && t.stopPropagation();
                        }
                    },
                },
                r = (t) => {
                    if (e.isPressed && e.target && A(t, e.target)) {
                        O((0, p.wt)(t), t.key) && t.preventDefault();
                        let r = (0, p.wt)(t),
                            n = (0, p.sD)(e.target, r);
                        Y(I(e.target, t), "keyboard", n),
                            n && er(t, e.target),
                            H(),
                            "Enter" !== t.key &&
                                P(e.target) &&
                                (0, p.sD)(e.target, r) &&
                                !t[k] &&
                                ((t[k] = !0), (0, g.Fe)(e.target, t, !1)),
                            (e.isPressed = !1),
                            e.metaKeyEvents?.delete(t.key);
                    } else if ("Meta" === t.key && e.metaKeyEvents?.size) {
                        let t = e.metaKeyEvents;
                        for (let r of ((e.metaKeyEvents = void 0), t.values()))
                            e.target?.dispatchEvent(new KeyboardEvent("keyup", r));
                    }
                };
            if ("u" > typeof PointerEvent) {
                (t.onPointerDown = (t) => {
                    if (0 !== t.button || !(0, p.sD)(t.currentTarget, (0, p.wt)(t))) return;
                    if ((0, v.P)(t.nativeEvent)) {
                        e.pointerType = "virtual";
                        return;
                    }
                    e.pointerType = t.pointerType;
                    let i = !0;
                    if (!e.isPressed) {
                        (e.isPressed = !0),
                            (e.isOverTarget = !0),
                            (e.activePointerId = t.pointerId),
                            (e.target = t.currentTarget),
                            B ||
                                (function (e) {
                                    if ((0, a.un)() && (0, a.Tc)()) {
                                        if ("default" === l) {
                                            let t = (0, o.TW)(e);
                                            (u = t.documentElement.style.webkitUserSelect),
                                                (t.documentElement.style.webkitUserSelect = "none");
                                        }
                                        l = "disabled";
                                    } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                                        let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                                        c.set(e, e.style[t]), (e.style[t] = "none");
                                    }
                                })(e.target),
                            (i = G(t, e.pointerType));
                        let s = (0, p.wt)(t);
                        "releasePointerCapture" in s &&
                            ("hasPointerCapture" in s
                                ? s.hasPointerCapture(t.pointerId) && s.releasePointerCapture(t.pointerId)
                                : s.releasePointerCapture(t.pointerId)),
                            W((0, o.TW)(t.currentTarget), "pointerup", r, !1),
                            W((0, o.TW)(t.currentTarget), "pointercancel", n, !1);
                    }
                    i && t.stopPropagation();
                }),
                    (t.onMouseDown = (t) => {
                        if ((0, p.sD)(t.currentTarget, (0, p.wt)(t)) && 0 === t.button) {
                            if (N) {
                                let r = (0, i.LE)(t.target);
                                r && e.disposables.push(r);
                            }
                            t.stopPropagation();
                        }
                    }),
                    (t.onPointerUp = (t) => {
                        (0, p.sD)(t.currentTarget, (0, p.wt)(t)) &&
                            "virtual" !== e.pointerType &&
                            (0 !== t.button || e.isPressed || J(t, e.pointerType || t.pointerType));
                    }),
                    (t.onPointerEnter = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            !e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !0), G(I(e.target, t), e.pointerType));
                    }),
                    (t.onPointerLeave = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !1), Y(I(e.target, t), e.pointerType, !1), ee(t));
                    });
                let r = (t) => {
                        if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                            if ((0, p.sD)(e.target, (0, p.wt)(t)) && null != e.pointerType) {
                                let r = !1,
                                    n = setTimeout(() => {
                                        e.isPressed &&
                                            e.target instanceof HTMLElement &&
                                            (r ? Z(t) : ((0, d.e)(e.target), e.target.click()));
                                    }, 80);
                                W(t.currentTarget, "click", () => (r = !0), !0),
                                    e.disposables.push(() => clearTimeout(n));
                            } else Z(t);
                            e.isOverTarget = !1;
                        }
                    },
                    n = (e) => {
                        Z(e);
                    };
                t.onDragStart = (e) => {
                    (0, p.sD)(e.currentTarget, (0, p.wt)(e)) && Z(e);
                };
            }
            return t;
        }, [W, L, N, H, B, ee, G, et, er]);
    return (
        (0, b.useEffect)(() => {
            if (!K) return;
            let e = (0, o.TW)(K.current);
            if (!e || !e.head || e.getElementById(C)) return;
            let t = e.createElement("style");
            t.id = C;
            let r = (function (e) {
                let t = e ?? ("u" > typeof document ? document : void 0);
                if (!t) return h(t);
                if (m.has(t)) return m.get(t);
                let r = t.querySelector('meta[property="csp-nonce"]'),
                    n = (r && r instanceof (0, o.mD)(r).HTMLMetaElement && (r.nonce || r.content)) || h(t) || void 0;
                return void 0 !== n && m.set(t, n), n;
            })(e);
            r && (t.nonce = r),
                (t.textContent = `
@layer {
  [${T}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim()),
                e.head.prepend(t);
        }, [K]),
        (0, b.useEffect)(() => {
            let e = z.current;
            return () => {
                for (let t of (B || f(e.target ?? void 0), e.disposables)) t();
                e.disposables = [];
            };
        }, [B]),
        { isPressed: F || V, pressProps: (0, y.v)($, en, { [T]: !0 }) }
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
            (t instanceof (0, o.mD)(t).HTMLInputElement && !R(t, r)) ||
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
            ? ("Enter" !== t || ("checkbox" !== e.type && "radio" !== e.type)) && !R(e, t)
            : !(e instanceof HTMLInputElement) &&
              (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !P(e)))
    );
}
let D = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function R(e, t) {
    return "checkbox" === e.type || "radio" === e.type ? " " === t : D.has(e.type);
}
