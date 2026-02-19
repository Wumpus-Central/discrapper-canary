n.d(t, { e: () => p }), n(321073);
var i = n(64700),
    s = n(311907),
    l = n(532624),
    r = n(531685),
    a = n(350535),
    o = n(365971),
    d = n(395011),
    u = n(222506),
    c = n(545807);
let h = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function g(e) {
    let { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: l } = e;
    return { keyCode: t, shiftKey: n, metaKey: i, altKey: s, ctrlKey: l };
}
function m(e, t) {
    return (
        e.keyCode === t.keyCode &&
        e.shiftKey === t.shiftKey &&
        e.metaKey === t.metaKey &&
        e.altKey === t.altKey &&
        e.ctrlKey === t.ctrlKey
    );
}
function p() {
    let e = (0, c.A)(),
        t = (0, s.bG)([d.A], () => d.A.getTargetPID(), []),
        n = (0, s.bG)([l.Ay], () => {
            let e = l.Ay.getOverlayKeybind();
            return null != e ? e.shortcut : [];
        }, []),
        p = (0, s.bG)([u.A], () => u.A.isInputLocked(t), [t]),
        A = (0, s.bG)([r.A], () => {
            let t = (0, o.Q2)(e);
            return r.A.isVisible(t) && r.A.isFocused(t);
        }, [e]),
        x = i.useRef([]),
        E = i.useMemo(() => (0, a.pi)(n).map((e) => g(e)), [n]),
        f = i.useMemo(() => n.length > 0, [n]),
        S = !p && f && A;
    i.useEffect(() => {
        x.current = [];
    }, [p, E]),
        i.useEffect(() => {
            if (!S) {
                x.current = [];
                return;
            }
            let t = (e) => {
                    let t = g(e),
                        n = x.current,
                        i = n.some((e) => m(e, t)),
                        s = (function (e) {
                            let t = e.key.toLowerCase();
                            for (let e of h) if (t.includes(e)) return !0;
                            return !1;
                        })(e);
                    i || s || n.push(t),
                        0 !== E.length &&
                            n.length === E.length &&
                            E.every((e) => n.some((t) => m(e, t))) &&
                            (e.preventDefault(), e.stopPropagation());
                },
                n = (e) => {
                    let t = g(e),
                        n = x.current,
                        i = n.findIndex((e) => m(e, t));
                    i > -1 && n.splice(i, 1);
                };
            return (
                e.addEventListener("keydown", t, !0),
                e.addEventListener("keyup", n, !0),
                () => {
                    e.removeEventListener("keydown", t, !0), e.removeEventListener("keyup", n, !0);
                }
            );
        }, [S, E, e]);
}
