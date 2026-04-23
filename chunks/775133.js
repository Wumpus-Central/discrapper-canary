"use strict";
r.d(t, { d: () => M });
var n = r(89494),
    a = r(408713),
    s = r(297987),
    i = r(17118);
let o = "default",
    l = "",
    u = new WeakMap();
function c(e) {
    if ((0, a.un)())
        "disabled" === o &&
            ((o = "restoring"),
            setTimeout(() => {
                (0, i.v)(() => {
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
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
        "none" === e.style[r] && (e.style[r] = t),
            "" === e.getAttribute("style") && e.removeAttribute("style"),
            u.delete(e);
    }
}
var d = r(64700);
let f = d.createContext({ register: () => {} });
function p(e, t, r) {
    if (!t.has(e)) throw TypeError("attempted to " + r + " private field on non-instance");
    return t.get(e);
}
f.displayName = "PressResponderContext";
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
var _ = r(318473),
    g = r(434067),
    v = r(114099),
    b = r(959462),
    y = r(241827),
    E = r(260431),
    S = r(132716),
    T = r(23975),
    x = r(401705);
r(340287);
var w = new WeakMap();
class C {
    continuePropagation() {
        m(this, w, !1);
    }
    get shouldStopPropagation() {
        var e;
        return (e = p(this, w, "get")), e.get ? e.get.call(this) : e.value;
    }
    constructor(e, t, r, n) {
        var a;
        (0, h._)(this, w, { writable: !0, value: void 0 }), m(this, w, !0);
        let s = null != (a = null == n ? void 0 : n.target) ? a : r.currentTarget;
        const i = null == s ? void 0 : s.getBoundingClientRect();
        let o,
            l = 0,
            u,
            c = null;
        null != r.clientX && null != r.clientY && ((u = r.clientX), (c = r.clientY)),
            i &&
                (null != u && null != c
                    ? ((o = u - i.left), (l = c - i.top))
                    : ((o = i.width / 2), (l = i.height / 2))),
            (this.type = e),
            (this.pointerType = t),
            (this.target = r.currentTarget),
            (this.shiftKey = r.shiftKey),
            (this.metaKey = r.metaKey),
            (this.ctrlKey = r.ctrlKey),
            (this.altKey = r.altKey),
            (this.x = o),
            (this.y = l);
    }
}
let D = Symbol("linkClicked"),
    O = "react-aria-pressable-style",
    A = "data-react-aria-pressable";
function M(e) {
    let {
            onPress: t,
            onPressChange: r,
            onPressStart: i,
            onPressEnd: p,
            onPressUp: h,
            onClick: m,
            isDisabled: w,
            isPressed: M,
            preventFocusOnPress: I,
            shouldCancelOnPointerExit: P,
            allowTextSelectionOnPress: F,
            ref: B,
            ...Y
        } = (function (e) {
            let t = (0, d.useContext)(f);
            if (t) {
                let { register: r, ...n } = t;
                (e = (0, _.v)(n, e)), r();
            }
            return (0, g.w)(t, e.ref), e;
        })(e),
        [U, j] = (0, d.useState)(!1),
        V = (0, d.useRef)({
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
        { addGlobalListener: H, removeAllGlobalListeners: G } = (0, v.A)(),
        z = (0, b.J)((e, t) => {
            let n = V.current;
            if (w || n.didFirePressStart) return !1;
            let a = !0;
            if (((n.isTriggeringEvent = !0), i)) {
                let r = new C("pressstart", t, e);
                i(r), (a = r.shouldStopPropagation);
            }
            return r && r(!0), (n.isTriggeringEvent = !1), (n.didFirePressStart = !0), j(!0), a;
        }),
        W = (0, b.J)((e, n, a = !0) => {
            let s = V.current;
            if (!s.didFirePressStart) return !1;
            (s.didFirePressStart = !1), (s.isTriggeringEvent = !0);
            let i = !0;
            if (p) {
                let t = new C("pressend", n, e);
                p(t), (i = t.shouldStopPropagation);
            }
            if ((r && r(!1), j(!1), t && a && !w)) {
                let r = new C("press", n, e);
                t(r), i && (i = r.shouldStopPropagation);
            }
            return (s.isTriggeringEvent = !1), i;
        }),
        q = (0, b.J)((e, t) => {
            let r = V.current;
            if (w) return !1;
            if (h) {
                r.isTriggeringEvent = !0;
                let n = new C("pressup", t, e);
                return h(n), (r.isTriggeringEvent = !1), n.shouldStopPropagation;
            }
            return !0;
        }),
        $ = (0, b.J)((e) => {
            let t = V.current;
            if (t.isPressed && t.target) {
                for (let r of (t.didFirePressStart && null != t.pointerType && W(N(t.target, e), t.pointerType, !1),
                (t.isPressed = !1),
                (t.isOverTarget = !1),
                (t.activePointerId = null),
                (t.pointerType = null),
                G(),
                F || c(t.target),
                t.disposables))
                    r();
                t.disposables = [];
            }
        }),
        K = (0, b.J)((e) => {
            P && $(e);
        }),
        Q = (0, b.J)((e) => {
            w || null == m || m(e);
        }),
        X = (0, b.J)((e, t) => {
            if (!w && m) {
                let r = new MouseEvent("click", e);
                (0, n.o1)(r, t), m((0, n.eg)(r));
            }
        }),
        Z = (0, d.useMemo)(() => {
            let e = V.current,
                t = {
                    onKeyDown(t) {
                        if (k(t.nativeEvent, t.currentTarget) && (0, y.sD)(t.currentTarget, (0, y.wt)(t.nativeEvent))) {
                            var n;
                            L((0, y.wt)(t.nativeEvent), t.key) && t.preventDefault();
                            let i = !0;
                            if (!e.isPressed && !t.repeat) {
                                (e.target = t.currentTarget),
                                    (e.isPressed = !0),
                                    (e.pointerType = "keyboard"),
                                    (i = z(t, "keyboard"));
                                let n = t.currentTarget;
                                H(
                                    (0, s.TW)(t.currentTarget),
                                    "keyup",
                                    (0, E.c)((t) => {
                                        k(t, n) &&
                                            !t.repeat &&
                                            (0, y.sD)(n, (0, y.wt)(t)) &&
                                            e.target &&
                                            q(N(e.target, t), "keyboard");
                                    }, r),
                                    !0,
                                );
                            }
                            i && t.stopPropagation(),
                                t.metaKey &&
                                    (0, a.cX)() &&
                                    (null == (n = e.metaKeyEvents) || n.set(t.key, t.nativeEvent));
                        } else "Meta" === t.key && (e.metaKeyEvents = new Map());
                    },
                    onClick(t) {
                        if (
                            (!t || (0, y.sD)(t.currentTarget, (0, y.wt)(t.nativeEvent))) &&
                            t &&
                            0 === t.button &&
                            !e.isTriggeringEvent &&
                            !S.Fe.isOpening
                        ) {
                            let r = !0;
                            if (
                                (w && t.preventDefault(),
                                !e.ignoreEmulatedMouseEvents &&
                                    !e.isPressed &&
                                    ("virtual" === e.pointerType || (0, T.Y)(t.nativeEvent)))
                            ) {
                                let e = z(t, "virtual"),
                                    n = q(t, "virtual"),
                                    a = W(t, "virtual");
                                Q(t), (r = e && n && a);
                            } else if (e.isPressed && "keyboard" !== e.pointerType) {
                                let n = e.pointerType || t.nativeEvent.pointerType || "virtual",
                                    a = q(N(t.currentTarget, t), n),
                                    s = W(N(t.currentTarget, t), n, !0);
                                (r = a && s), (e.isOverTarget = !1), Q(t), $(t);
                            }
                            (e.ignoreEmulatedMouseEvents = !1), r && t.stopPropagation();
                        }
                    },
                },
                r = (t) => {
                    var r, n, a;
                    if (e.isPressed && e.target && k(t, e.target)) {
                        L((0, y.wt)(t), t.key) && t.preventDefault();
                        let r = (0, y.wt)(t),
                            a = (0, y.sD)(e.target, (0, y.wt)(t));
                        W(N(e.target, t), "keyboard", a),
                            a && X(t, e.target),
                            G(),
                            "Enter" !== t.key &&
                                R(e.target) &&
                                (0, y.sD)(e.target, r) &&
                                !t[D] &&
                                ((t[D] = !0), (0, S.Fe)(e.target, t, !1)),
                            (e.isPressed = !1),
                            null == (n = e.metaKeyEvents) || n.delete(t.key);
                    } else if ("Meta" === t.key && (null == (r = e.metaKeyEvents) ? void 0 : r.size)) {
                        let t = e.metaKeyEvents;
                        for (let r of ((e.metaKeyEvents = void 0), t.values()))
                            null == (a = e.target) || a.dispatchEvent(new KeyboardEvent("keyup", r));
                    }
                };
            if ("u" > typeof PointerEvent) {
                (t.onPointerDown = (t) => {
                    if (0 !== t.button || !(0, y.sD)(t.currentTarget, (0, y.wt)(t.nativeEvent))) return;
                    if ((0, T.P)(t.nativeEvent)) {
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
                            F ||
                                (function (e) {
                                    if ((0, a.un)()) {
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
                            (n = z(t, e.pointerType));
                        let c = (0, y.wt)(t.nativeEvent);
                        "releasePointerCapture" in c && c.releasePointerCapture(t.pointerId),
                            H((0, s.TW)(t.currentTarget), "pointerup", r, !1),
                            H((0, s.TW)(t.currentTarget), "pointercancel", i, !1);
                    }
                    n && t.stopPropagation();
                }),
                    (t.onMouseDown = (t) => {
                        if ((0, y.sD)(t.currentTarget, (0, y.wt)(t.nativeEvent)) && 0 === t.button) {
                            if (I) {
                                let r = (0, n.LE)(t.target);
                                r && e.disposables.push(r);
                            }
                            t.stopPropagation();
                        }
                    }),
                    (t.onPointerUp = (t) => {
                        (0, y.sD)(t.currentTarget, (0, y.wt)(t.nativeEvent)) &&
                            "virtual" !== e.pointerType &&
                            (0 !== t.button || e.isPressed || q(t, e.pointerType || t.pointerType));
                    }),
                    (t.onPointerEnter = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            !e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !0), z(N(e.target, t), e.pointerType));
                    }),
                    (t.onPointerLeave = (t) => {
                        t.pointerId === e.activePointerId &&
                            e.target &&
                            e.isOverTarget &&
                            null != e.pointerType &&
                            ((e.isOverTarget = !1), W(N(e.target, t), e.pointerType, !1), K(t));
                    });
                let r = (t) => {
                        if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                            if ((0, y.sD)(e.target, (0, y.wt)(t)) && null != e.pointerType) {
                                let r = !1,
                                    n = setTimeout(() => {
                                        e.isPressed &&
                                            e.target instanceof HTMLElement &&
                                            (r ? $(t) : ((0, x.e)(e.target), e.target.click()));
                                    }, 80);
                                H(t.currentTarget, "click", () => (r = !0), !0),
                                    e.disposables.push(() => clearTimeout(n));
                            } else $(t);
                            e.isOverTarget = !1;
                        }
                    },
                    i = (e) => {
                        $(e);
                    };
                t.onDragStart = (e) => {
                    (0, y.sD)(e.currentTarget, (0, y.wt)(e.nativeEvent)) && $(e);
                };
            }
            return t;
        }, [H, w, I, G, F, $, K, W, z, q, Q, X]);
    return (
        (0, d.useEffect)(() => {
            if (!B) return;
            let e = (0, s.TW)(B.current);
            if (!e || !e.head || e.getElementById(O)) return;
            let t = e.createElement("style");
            (t.id = O),
                (t.textContent = `
@layer {
  [${A}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim()),
                e.head.prepend(t);
        }, [B]),
        (0, d.useEffect)(() => {
            let e = V.current;
            return () => {
                var t;
                for (let r of (F || c(null != (t = e.target) ? t : void 0), e.disposables)) r();
                e.disposables = [];
            };
        }, [F]),
        { isPressed: M || U, pressProps: (0, _.v)(Y, Z, { [A]: !0 }) }
    );
}
function R(e) {
    return "A" === e.tagName && e.hasAttribute("href");
}
function k(e, t) {
    let { key: r, code: n } = e,
        a = t.getAttribute("role");
    return (
        ("Enter" === r || " " === r || "Spacebar" === r || "Space" === n) &&
        !(
            (t instanceof (0, s.mD)(t).HTMLInputElement && !P(t, r)) ||
            t instanceof (0, s.mD)(t).HTMLTextAreaElement ||
            t.isContentEditable
        ) &&
        !(("link" === a || (!a && R(t))) && "Enter" !== r)
    );
}
function N(e, t) {
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
function L(e, t) {
    return e instanceof HTMLInputElement
        ? !P(e, t)
        : !(e instanceof HTMLInputElement) &&
              (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !R(e));
}
let I = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
function P(e, t) {
    return "checkbox" === e.type || "radio" === e.type ? " " === t : I.has(e.type);
}
