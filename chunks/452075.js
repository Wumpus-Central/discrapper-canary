n.d(t, { e: () => f }), n(321073);
var r = n(64700),
    i = n(311907),
    a = n(532624),
    l = n(531685),
    o = n(350535),
    d = n(365971),
    s = n(395011),
    c = n(222506),
    u = n(545807);
let _ = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function A(e) {
    let { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: a } = e;
    return { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: a };
}
function h(e, t) {
    return (
        e.keyCode === t.keyCode &&
        e.shiftKey === t.shiftKey &&
        e.metaKey === t.metaKey &&
        e.altKey === t.altKey &&
        e.ctrlKey === t.ctrlKey
    );
}
function f() {
    let e = (0, u.A)(),
        t = (0, i.bG)([s.A], () => s.A.getTargetPID(), []),
        n = (0, i.bG)([a.Ay], () => {
            let e = a.Ay.getOverlayKeybind();
            return null != e ? e.shortcut : [];
        }, []),
        f = (0, i.bG)([c.A], () => c.A.isInputLocked(t), [t]),
        g = (0, i.bG)([l.A], () => {
            let t = (0, d.Q2)(e);
            return l.A.isVisible(t) && l.A.isFocused(t);
        }, [e]),
        m = r.useRef([]),
        b = r.useMemo(() => (0, o.pi)(n).map((e) => A(e)), [n]),
        p = r.useMemo(() => n.length > 0, [n]),
        v = !f && p && g;
    r.useEffect(() => {
        m.current = [];
    }, [f, b]),
        r.useEffect(() => {
            if (!v) {
                m.current = [];
                return;
            }
            let t = (e) => {
                    let t = A(e),
                        n = m.current,
                        r = n.some((e) => h(e, t)),
                        i = (function (e) {
                            let t = e.key.toLowerCase();
                            for (let e of _) if (t.includes(e)) return !0;
                            return !1;
                        })(e);
                    r || i || n.push(t),
                        0 !== b.length &&
                            n.length === b.length &&
                            b.every((e) => n.some((t) => h(e, t))) &&
                            (e.preventDefault(), e.stopPropagation());
                },
                n = (e) => {
                    let t = A(e),
                        n = m.current,
                        r = n.findIndex((e) => h(e, t));
                    r > -1 && n.splice(r, 1);
                };
            return (
                e.addEventListener("keydown", t, !0),
                e.addEventListener("keyup", n, !0),
                () => {
                    e.removeEventListener("keydown", t, !0), e.removeEventListener("keyup", n, !0);
                }
            );
        }, [v, b, e]);
}
