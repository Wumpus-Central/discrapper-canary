n.d(t, { A: () => u });
var l = n(477900),
    r = n(582128),
    a = n(598047),
    i = n(546772);
let s = ["left", "middle", "right"];
function o(e) {
    return !!e.altKey | (2 * !!e.ctrlKey) | (4 * !!e.metaKey) | (8 * !!e.shiftKey);
}
function u(e) {
    let {
            projectId: t,
            sessionId: n,
            fps: u,
            interactive: c = !1,
            paused: d = !1,
            drawWidth: m,
            className: f,
            "aria-label": h,
            onStateChange: g,
        } = e,
        p = r.useRef(null),
        x = r.useRef(null),
        v = r.useRef(null),
        [j, b] = r.useState(!1),
        y = (0, a.A)(),
        w = r.useCallback(
            async (e) => {
                let l = await createImageBitmap(new Blob([e.jpeg], { type: "image/jpeg" }));
                try {
                    let r = p.current,
                        a = r?.getContext("2d");
                    if (null == r || null == a || !(0, i.j_)(t, n, e)) return;
                    ((r.width !== l.width || r.height !== l.height) && ((r.width = l.width), (r.height = l.height)),
                        a.drawImage(l, 0, 0),
                        (x.current = e),
                        b(!0));
                } finally {
                    l.close();
                }
            },
            [t, n],
        ),
        k = window.devicePixelRatio > 0 ? window.devicePixelRatio : 1,
        A = null == m ? 0 : Math.round(m * Math.min(k, 2)),
        N = (0, i.KK)(t, n, { fps: u, onFrame: w, enabled: !d && y, width: A }),
        S = (0, i.AV)(t, n),
        C = r.useRef(S);
    (r.useEffect(() => {
        if (C.current === S) return;
        ((C.current = S), (x.current = null), b(!1));
        let e = p.current;
        e?.getContext("2d")?.clearRect(0, 0, e.width, e.height);
    }, [S]),
        r.useEffect(() => {
            g?.(N, j);
        }, [N, j, g]),
        r.useEffect(() => {
            c && p.current?.focus();
        }, [c]));
    let E = r.useRef(new Map());
    function I(e) {
        let t = e.currentTarget,
            n = t.getBoundingClientRect(),
            l = Math.min(n.width / t.width, n.height / t.height),
            r = n.left + (n.width - t.width * l) / 2,
            a = n.top + (n.height - t.height * l) / 2,
            i = x.current?.deviceWidth ?? t.width,
            s = x.current?.deviceHeight ?? t.height;
        return {
            x: Math.round(((e.clientX - r) / (t.width * l)) * i),
            y: Math.round(((e.clientY - a) / (t.height * l)) * s),
        };
    }
    function _(e) {
        return (l) => {
            if (!c) return;
            if ("mouseMoved" === e) {
                let e = I(l);
                (null == v.current &&
                    requestAnimationFrame(() => {
                        let e = v.current;
                        ((v.current = null),
                            null != e && (0, i.ZL)(t, n, { type: "input_mouse", eventType: "mouseMoved", ...e }));
                    }),
                    (v.current = { ...e, modifiers: o(l) }));
                return;
            }
            let r = s[l.button];
            if (null == r) return;
            v.current = null;
            let a = I(l);
            ("mousePressed" === e && l.currentTarget.focus(),
                (0, i.ZL)(t, n, {
                    type: "input_mouse",
                    eventType: e,
                    ...a,
                    button: r,
                    clickCount: l.detail > 0 ? l.detail : 1,
                    modifiers: o(l),
                }));
        };
    }
    function M(e) {
        return (l) => {
            if (!c || "Escape" === l.key) return;
            l.preventDefault();
            let r = l.getModifierState("AltGraph") ? -4 & o(l) : o(l);
            ((0, i.ZL)(t, n, { type: "input_keyboard", eventType: e, key: l.key, code: l.code, modifiers: r }),
                "keyDown" === e ? E.current.set(l.code, l.key) : E.current.delete(l.code));
            let a = "Enter" === l.key ? "\r" : l.key;
            "keyDown" === e &&
                1 === a.length &&
                (6 & r) == 0 &&
                (0, i.ZL)(t, n, { type: "input_keyboard", eventType: "char", text: a });
        };
    }
    return (0, l.jsx)("canvas", {
        ref: p,
        className: f,
        role: c ? "application" : "img",
        "aria-label": h,
        tabIndex: c ? 0 : -1,
        onPointerDown: function (e) {
            c && e.currentTarget.setPointerCapture?.(e.pointerId);
        },
        onContextMenu: function (e) {
            c && e.preventDefault();
        },
        onMouseDown: _("mousePressed"),
        onMouseUp: _("mouseReleased"),
        onMouseMove: _("mouseMoved"),
        onWheel: function (e) {
            c &&
                (0, i.ZL)(t, n, {
                    type: "input_mouse",
                    eventType: "mouseWheel",
                    ...I(e),
                    deltaX: e.deltaX,
                    deltaY: e.deltaY,
                    modifiers: o(e),
                });
        },
        onKeyDown: M("keyDown"),
        onKeyUp: M("keyUp"),
        onBlur: function () {
            for (let [e, l] of E.current)
                (0, i.ZL)(t, n, { type: "input_keyboard", eventType: "keyUp", key: l, code: e, modifiers: 0 });
            E.current.clear();
        },
    });
}
