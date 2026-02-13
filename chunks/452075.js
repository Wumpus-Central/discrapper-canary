n.d(t, { e: () => p }), n(321073);
var i = n(64700),
    l = n(311907),
    a = n(532624),
    s = n(531685),
    r = n(350535),
    o = n(365971),
    d = n(395011),
    u = n(222506),
    c = n(545807);
let h = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function A(e) {
    let { keyCode: t, shiftKey: n, metaKey: i, altKey: l, ctrlKey: a } = e;
    return { keyCode: t, shiftKey: n, metaKey: i, altKey: l, ctrlKey: a };
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
        t = (0, l.bG)([d.A], () => d.A.getTargetPID(), []),
        n = (0, l.bG)([a.Ay], () => {
            let e = a.Ay.getOverlayKeybind();
            return null != e ? e.shortcut : [];
        }, []),
        p = (0, l.bG)([u.A], () => u.A.isInputLocked(t), [t]),
        g = (0, l.bG)([s.A], () => s.A.isVisible((0, o.Q2)(e)) && s.A.isFocused((0, o.Q2)(e)), [e]),
        f = i.useRef([]),
        _ = i.useMemo(() => (0, r.pi)(n).map((e) => A(e)), [n]),
        E = i.useMemo(() => n.length > 0, [n]),
        x = !p && E && g;
    i.useEffect(() => {
        f.current = [];
    }, [p, _]),
        i.useEffect(() => {
            if (!x) {
                f.current = [];
                return;
            }
            let t = (e) => {
                    let t = A(e),
                        n = f.current,
                        i = n.some((e) => m(e, t)),
                        l = (function (e) {
                            let t = e.key.toLowerCase();
                            for (let e of h) if (t.includes(e)) return !0;
                            return !1;
                        })(e);
                    i || l || n.push(t),
                        0 !== _.length &&
                            n.length === _.length &&
                            _.every((e) => n.some((t) => m(e, t))) &&
                            (e.preventDefault(), e.stopPropagation());
                },
                n = (e) => {
                    let t = A(e),
                        n = f.current,
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
        }, [x, _, e]);
}
