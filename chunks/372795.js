l.d(t, { A: () => u });
var n = l(477900),
    a = l(582128),
    r = l(598047),
    i = l(546772);
let s = ["left", "middle", "right"];
function o(e) {
    return !!e.altKey | (2 * !!e.ctrlKey) | (4 * !!e.metaKey) | (8 * !!e.shiftKey);
}
function u(e) {
    let {
            projectId: t,
            sessionId: l,
            fps: u,
            interactive: c = !1,
            paused: d = !1,
            drawWidth: f,
            className: m,
            "aria-label": h,
            onStateChange: g,
        } = e,
        p = a.useRef(null),
        x = a.useRef(null),
        v = a.useRef(null),
        [j, b] = a.useState(!1),
        y = (0, r.A)(),
        k = a.useCallback(
            async (e) => {
                let n = await createImageBitmap(new Blob([e.jpeg], { type: "image/jpeg" }));
                try {
                    let a = p.current,
                        r = a?.getContext("2d");
                    if (null == a || null == r || !(0, i.j_)(t, l, e)) return;
                    ((a.width !== n.width || a.height !== n.height) && ((a.width = n.width), (a.height = n.height)),
                        r.drawImage(n, 0, 0),
                        (x.current = e),
                        b(!0));
                } finally {
                    n.close();
                }
            },
            [t, l],
        ),
        w = window.devicePixelRatio > 0 ? window.devicePixelRatio : 1,
        N = null == f ? 0 : Math.round(f * Math.min(w, 2)),
        A = (0, i.KK)(t, l, { fps: u, onFrame: k, enabled: !d && y, width: N }),
        S = (0, i.AV)(t, l),
        C = a.useRef(S);
    (a.useEffect(() => {
        if (C.current === S) return;
        ((C.current = S), (x.current = null), b(!1));
        let e = p.current;
        e?.getContext("2d")?.clearRect(0, 0, e.width, e.height);
    }, [S]),
        a.useEffect(() => {
            g?.(A, j);
        }, [A, j, g]),
        a.useEffect(() => {
            c && p.current?.focus();
        }, [c]));
    let E = a.useRef(new Map());
    function I(e) {
        let t = e.currentTarget,
            l = t.getBoundingClientRect(),
            n = Math.min(l.width / t.width, l.height / t.height),
            a = l.left + (l.width - t.width * n) / 2,
            r = l.top + (l.height - t.height * n) / 2,
            i = x.current?.deviceWidth ?? t.width,
            s = x.current?.deviceHeight ?? t.height;
        return {
            x: Math.round(((e.clientX - a) / (t.width * n)) * i),
            y: Math.round(((e.clientY - r) / (t.height * n)) * s),
        };
    }
    function M(e) {
        return (n) => {
            if (!c) return;
            if ("mouseMoved" === e) {
                let e = I(n);
                (null == v.current &&
                    requestAnimationFrame(() => {
                        let e = v.current;
                        ((v.current = null),
                            null != e && (0, i.ZL)(t, l, { type: "input_mouse", eventType: "mouseMoved", ...e }));
                    }),
                    (v.current = { ...e, modifiers: o(n) }));
                return;
            }
            let a = s[n.button];
            if (null == a) return;
            v.current = null;
            let r = I(n);
            ("mousePressed" === e && n.currentTarget.focus(),
                (0, i.ZL)(t, l, {
                    type: "input_mouse",
                    eventType: e,
                    ...r,
                    button: a,
                    clickCount: n.detail > 0 ? n.detail : 1,
                    modifiers: o(n),
                }));
        };
    }
    function T(e) {
        return (n) => {
            if (!c || "Escape" === n.key) return;
            n.preventDefault();
            let a = n.getModifierState("AltGraph") ? -4 & o(n) : o(n);
            ((0, i.ZL)(t, l, { type: "input_keyboard", eventType: e, key: n.key, code: n.code, modifiers: a }),
                "keyDown" === e ? E.current.set(n.code, n.key) : E.current.delete(n.code));
            let r = "Enter" === n.key ? "\r" : n.key;
            "keyDown" === e &&
                1 === r.length &&
                (6 & a) == 0 &&
                (0, i.ZL)(t, l, { type: "input_keyboard", eventType: "char", text: r });
        };
    }
    return (0, n.jsx)("canvas", {
        ref: p,
        className: m,
        role: c ? "application" : "img",
        "aria-label": h,
        tabIndex: c ? 0 : -1,
        onPointerDown: function (e) {
            c && e.currentTarget.setPointerCapture?.(e.pointerId);
        },
        onContextMenu: function (e) {
            c && e.preventDefault();
        },
        onMouseDown: M("mousePressed"),
        onMouseUp: M("mouseReleased"),
        onMouseMove: M("mouseMoved"),
        onWheel: function (e) {
            c &&
                (0, i.ZL)(t, l, {
                    type: "input_mouse",
                    eventType: "mouseWheel",
                    ...I(e),
                    deltaX: e.deltaX,
                    deltaY: e.deltaY,
                    modifiers: o(e),
                });
        },
        onKeyDown: T("keyDown"),
        onKeyUp: T("keyUp"),
        onBlur: function () {
            for (let [e, n] of E.current)
                (0, i.ZL)(t, l, { type: "input_keyboard", eventType: "keyUp", key: n, code: e, modifiers: 0 });
            E.current.clear();
        },
    });
}
