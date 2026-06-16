"use strict";
n.d(t, { d: () => D });
var i = n(89494),
    r = n(408713),
    s = n(297987),
    a = n(17118);
let o = "default",
    l = "",
    u = new WeakMap();
function c(e) {
    if ((0, r.un)())
        "disabled" === o &&
            ((o = "restoring"),
            setTimeout(() => {
                (0, a.v)(() => {
                    if ("restoring" === o) {
                        let t = (0, s.TW)(e);
                        "none" === t.documentElement.style.webkitUserSelect &&
                            (t.documentElement.style.webkitUserSelect = l || ""),
                            (l = ""),
                            (o = "default");
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
var d = n(64700);
let _ = d.createContext({ register: () => {} });
function h(e, t, n) {
    if (!t.has(e)) throw TypeError("attempted to " + n + " private field on non-instance");
    return t.get(e);
}
_.displayName = "PressResponderContext";
var f = n(693770);
function p(e, t, n) {
    var i = h(e, t, "set");
    if (i.set) i.set.call(e, n);
    else {
        if (!i.writable) throw TypeError("attempted to set read only private field");
        i.value = n;
    }
    return n;
}
var E = n(318473),
    m = n(434067),
    g = n(114099),
    A = n(959462),
    I = n(241827),
    T = n(260431),
    S = n(132716),
    y = n(23975),
    C = n(401705);
n(340287);
var N = new WeakMap();
class v {
    continuePropagation() {
        p(this, N, !1);
    }
    get shouldStopPropagation() {
        var e;
        return (e = h(this, N, "get")), e.get ? e.get.call(this) : e.value;
    }
    constructor(e, t, n, i) {
        var r;
        (0, f._)(this, N, { writable: !0, value: void 0 }), p(this, N, !0);
        let s = null != (r = null == i ? void 0 : i.target) ? r : n.currentTarget;
        const a = null == s ? void 0 : s.getBoundingClientRect();
        let o,
            l = 0,
            u,
            c = null;
        null != n.clientX && null != n.clientY && ((u = n.clientX), (c = n.clientY)),
            a &&
                (null != u && null != c
                    ? ((o = u - a.left), (l = c - a.top))
                    : ((o = a.width / 2), (l = a.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = n.currentTarget),
            (this.shiftKey = n.shiftKey),
            (this.metaKey = n.metaKey),
            (this.ctrlKey = n.ctrlKey),
            (this.altKey = n.altKey),
            (this.x = o),
            (this.y = l);
    }
}
let R = Symbol("linkClicked"),
    O = "react-aria-pressable-style",
    b = "data-react-aria-pressable";
function D(e) {
    let {
            onPress: t,
            onPressChange: n,
            onPressStart: a,
            onPressEnd: h,
            onPressUp: f,
            onClick: p,
            isDisabled: N,
            isPressed: D,
            preventFocusOnPress: x,
            shouldCancelOnPointerExit: k,
            allowTextSelectionOnPress: U,
            ref: G,
            ...F
        } = (function (e) {
            let t = (0, d.useContext)(_);
            if (t) {
                let { register: n, ...i } = t;
                (e = (0, E.v)(i, e)), n();
            }
            return (0, m.w)(t, e.ref), e;
        })(e),
        [V, B] = (0, d.useState)(!1),
        j = (0, d.useRef)({
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
        { addGlobalListener: H, removeAllGlobalListeners: Y } = (0, g.A)(),
        W = (0, A.J)((e, t) => {
            let i = j.current;
            if (N || i.didFirePressStart) return !1;
            let r = !0;
            if (((i.isTriggeringEvent = !0), a)) {
                let n = new v("pressstart", t, e);
                a(n), (r = n.shouldStopPropagation);
            }
            return n && n(!0), (i.isTriggeringEvent = !1), (i.didFirePressStart = !0), B(!0), r;
        }),
        K = (0, A.J)((e, i, r = !0) => {
            let s = j.current;
            if (!s.didFirePressStart) return !1;
            (s.didFirePressStart = !1), (s.isTriggeringEvent = !0);
            let a = !0;
            if (h) {
                let t = new v("pressend", i, e);
                h(t), (a = t.shouldStopPropagation);
            }
            if ((n && n(!1), B(!1), t && r && !N)) {
                let n = new v("press", i, e);
                t(n), a && (a = n.shouldStopPropagation);
            }
            return (s.isTriggeringEvent = !1), a;
        }),
        $ = (0, A.J)((e, t) => {
            let n = j.current;
            if (N) return !1;
            if (f) {
                n.isTriggeringEvent = !0;
                let i = new v("pressup", t, e);
                return f(i), (n.isTriggeringEvent = !1), i.shouldStopPropagation;
            }
            return !0;
        }),
        z = (0, A.J)((e) => {
            let t = j.current;
            if (t.isPressed && t.target) {
                for (let n of (t.didFirePressStart && null != t.pointerType && K(M(t.target, e), t.pointerType, !1),
                (t.isPressed = !1),
                (t.isOverTarget = !1),
                (t.activePointerId = null),
                (t.pointerType = null),
                Y(),
                U || c(t.target),
                t.disposables))
                    n();
                t.disposables = [];
            }
        }),
        q = (0, A.J)((e) => {
            k && z(e);
        }),
        Z = (0, A.J)((e) => {
            N || null == p || p(e);
        }),
        X = (0, A.J)((e, t) => {
            if (!N && p) {
                let n = new MouseEvent("click", e);
                (0, i.o1)(n, t), p((0, i.eg)(n));
            }
        }),
        Q = (0, d.useMemo)(() => {
            let e = j.current,
                t = {
                    onKeyDown(t) {
                        if (w(t.nativeEvent, t.currentTarget) && (0, I.sD)(t.currentTarget, (0, I.wt)(t.nativeEvent))) {
                            var i;
                            P((0, I.wt)(t.nativeEvent), t.key) && t.preventDefault();
                            let a = !0;
                            if (!e.isPressed && !t.repeat) {
                                (e.target = t.currentTarget),
                                    (e.isPressed = !0),
                                    (e.pointerType = "keyboard"),
                                    (a = W(t, "keyboard"));
                                let i = t.currentTarget;
                                H(
                                    (0, s.TW)(t.currentTarget),
                                    "keyup",
                                    (0, T.c)((t) => {
                                        w(t, i) &&
                                            !t.repeat &&
                                            (0, I.sD)(i, (0, I.wt)(t)) &&
                                            e.target &&
                                            $(M(e.target, t), "keyboard");
                                    }, n),
                                    !0,
                                );
                            }
                            a && t.stopPropagation(),
                                t.metaKey &&
                                    (0, r.cX)() &&
                                    (null == (i = e.metaKeyEvents) || i.set(t.key, t.nativeEvent));
                        } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                    },
                    onClick(t) {
                        if (
                            (!t || (0, I.sD)(t.currentTarget, (0, I.wt)(t.nativeEvent))) &&
                            t &&
                            0 === t.button &&
                            !e.isTriggeringEvent &&
                            !S.Fe.isOpening
                        ) {
                            let n = !0;
                            if (
                                (N && t.preventDefault(),
                                !e.ignoreEmulatedMouseEvents &&
                                    !e.isPressed &&
                                    ("virtual" === e.pointerType || (0, y.Y)(t.nativeEvent)))
                            ) {
                                let e = W(t, "virtual"),
                                    i = $(t, "virtual"),
                                    r = K(t, "virtual");
                                Z(t), (n = e && i && r);
                            } else if (e.isPressed && "keyboard" !== e.pointerType) {
                                let i = e.pointerType || t.nativeEvent.pointerType || "virtual",
                                    r = $(M(t.currentTarget, t), i),
                                    s = K(M(t.currentTarget, t), i, !0);
                                (n = r && s), (e.isOverTarget = !1), Z(t), z(t);
                            }
                            (e.ignoreEmulatedMouseEvents = !1), n && t.stopPropagation();
                        }
                    },
                },
                n = (t) => {
                    var n, i, r;
                    if (e.isPressed && e.target && w(t, e.target)) {
                        P((0, I.wt)(t), t.key) && t.preventDefault();
                        let n = (0, I.wt)(t),
                            r = (0, I.sD)(e.target, (0, I.wt)(t));
                        K(M(e.target, t), "keyboard", r),
                            r && X(t, e.target),
                            Y(),
                            "Enter" !== t.key &&
                                L(e.target) &&
                                (0, I.sD)(e.target, n) &&
                                !t[R] &&
                                ((t[R] = !0), (0, S.Fe)(e.target, t, !1)),
                            (e.isPressed = !1),
                            null == (i = e.metaKeyEvents) || i.delete(t.key);
                    } else if ("Meta" === t.key && (null == (n = e.metaKeyEvents) ? void 0 : n.size)) {
                        let t = e.metaKeyEvents;
                        for (let n of ((e.metaKeyEvents = void 0), t.values()))
                            null == (r = e.target) || r.dispatchEvent(new KeyboardEvent("keyup", n));
                    }
                };
            if ("u" > typeof PointerEvent) {
                (t.onPointerDown = (t) => {
                    if (0 !== t.button || !(0, I.sD)(t.currentTarget, (0, I.wt)(t.nativeEvent))) return;
                    if ((0, y.P)(t.nativeEvent)) {
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
                            U ||
                                (function (e) {
                                    if ((0, r.un)()) {
                                        if ("default" === o) {
                                            let t = (0, s.TW)(e);
                                            (l = t.documentElement.style.webkitUserSelect),
                                                (t.documentElement.style.webkitUserSelect = "none");
                                        }
                                        o = "disabled";
                                    } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                                        let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                                        u.set(e, e.style[t]), (e.style[t] = "none");
                                    }
                                })(e.target),
                            (i = W(t, e.pointerType));
                        let c = (0, I.wt)(t.nativeEvent);
                        "releasePointerCapture" in c && c.releasePointerCapture(t.pointerId),
                            H((0, s.TW)(t.currentTarget), "pointerup", n, !1),
                            H((0, s.TW)(t.currentTarget), "pointercancel", a, !1);
                    }
                    i && t.stopPropagation();
                }),
                    (t.onMouseDown = (t) => {
                        if ((0, I.sD)(t.currentTarget, (0, I.wt)(t.nativeEvent)) && 0 === t.button) {
                            if (x) {
                                let n = (0, i.LE)(t.target);
                                n && e.disposables.push(n);
                            }
                            t.stopPropagation();
                        }
                    }),
                    (t.onPointerUp = (t) => {
                        (0, I.sD)(t.currentTarget, (0, I.wt)(t.nativeEvent)) &&
                            "virtual" !== e.pointerType &&
                            (0 !== t.button || e.isPressed || $(t, e.pointerType || t.pointerType));
                    }),
                    (t.onPointerEnter = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            !e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !0), W(M(e.target, t), e.pointerType));
                    }),
                    (t.onPointerLeave = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !1), K(M(e.target, t), e.pointerType, !1), q(t));
                    });
                let n = (t) => {
                        if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                            if ((0, I.sD)(e.target, (0, I.wt)(t)) && null != e.pointerType) {
                                let n = !1,
                                    i = setTimeout(() => {
                                        e.isPressed &&
                                            e.target instanceof HTMLElement &&
                                            (n ? z(t) : ((0, C.e)(e.target), e.target.click()));
                                    }, 80);
                                H(t.currentTarget, "click", () => (n = !0), !0),
                                    e.disposables.push(() => clearTimeout(i));
                            } else z(t);
                            e.isOverTarget = !1;
                        }
                    },
                    a = (e) => {
                        z(e);
                    };
                t.onDragStart = (e) => {
                    (0, I.sD)(e.currentTarget, (0, I.wt)(e.nativeEvent)) && z(e);
                };
            }
            return t;
        }, [H, N, x, Y, U, z, q, K, W, $, Z, X]);
    return (
        (0, d.useEffect)(() => {
            if (!G) return;
            let e = (0, s.TW)(G.current);
            if (!e || !e.head || e.getElementById(O)) return;
            let t = e.createElement("style");
            (t.id = O),
                (t.textContent = `
@layer {
  [${b}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim()),
                e.head.prepend(t);
        }, [G]),
        (0, d.useEffect)(() => {
            let e = j.current;
            return () => {
                var t;
                for (let n of (U || c(null != (t = e.target) ? t : void 0), e.disposables)) n();
                e.disposables = [];
            };
        }, [U]),
        { isPressed: D || V, pressProps: (0, E.v)(F, Q, { [b]: !0 }) }
    );
}
function L(e) {
    return "A" === e.tagName && e.hasAttribute("href");
}
function w(e, t) {
    let { key: n, code: i } = e,
        r = t.getAttribute("role");
    return (
        ("Enter" === n || " " === n || "Spacebar" === n || "Space" === i) &&
        !(
            (t instanceof (0, s.mD)(t).HTMLInputElement && !k(t, n)) ||
            t instanceof (0, s.mD)(t).HTMLTextAreaElement ||
            t.isContentEditable
        ) &&
        !(("link" === r || (!r && L(t))) && "Enter" !== n)
    );
}
function M(e, t) {
    let n = t.clientX,
        i = t.clientY;
    return {
        currentTarget: e,
        shiftKey: t.shiftKey,
        ctrlKey: t.ctrlKey,
        metaKey: t.metaKey,
        altKey: t.altKey,
        clientX: n,
        clientY: i,
    };
}
function P(e, t) {
    return e instanceof HTMLInputElement
        ? !k(e, t)
        : !(e instanceof HTMLInputElement) &&
              (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !L(e));
}
let x = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function k(e, t) {
    return "checkbox" === e.type || "radio" === e.type ? " " === t : x.has(e.type);
}
