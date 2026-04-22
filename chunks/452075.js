"use strict";
n.d(t, { e: () => f }), n(321073);
var r = n(64700),
    i = n(311907),
    l = n(532624),
    a = n(531685),
    s = n(350535),
    o = n(365971),
    d = n(395011),
    u = n(222506),
    c = n(545807);
let A = new Set(["shift", "ctrl", "control", "alt", "meta", "os"]);
function h(e) {
    let { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: l } = e;
    return { keyCode: t, shiftKey: n, metaKey: r, altKey: i, ctrlKey: l };
}
function g(e, t) {
    return (
        e.keyCode === t.keyCode &&
        e.shiftKey === t.shiftKey &&
        e.metaKey === t.metaKey &&
        e.altKey === t.altKey &&
        e.ctrlKey === t.ctrlKey
    );
}
function f() {
    let e = (0, c.A)(),
        t = (0, i.bG)([d.A], () => d.A.getTargetPID(), []),
        n = (0, i.bG)([l.Ay], () => {
            let e = l.Ay.getOverlayKeybind();
            return null != e ? e.shortcut : [];
        }, []),
        f = (0, i.bG)([u.A], () => u.A.isInputLocked(t), [t]),
        m = (0, i.bG)([a.A], () => {
            let t = (0, o.Q2)(e);
            return a.A.isVisible(t) && a.A.isFocused(t);
        }, [e]),
        v = r.useRef([]),
        y = r.useMemo(() => (0, s.pi)(n).map((e) => h(e)), [n]),
        p = r.useMemo(() => n.length > 0, [n]),
        _ = !f && p && m;
    r.useEffect(() => {
        v.current = [];
    }, [f, y]),
        r.useEffect(() => {
            if (!_) {
                v.current = [];
                return;
            }
            let t = (e) => {
                    let t = h(e),
                        n = v.current,
                        r = n.some((e) => g(e, t)),
                        i = (function (e) {
                            let t = e.key.toLowerCase();
                            for (let e of A) if (t.includes(e)) return !0;
                            return !1;
                        })(e);
                    r || i || n.push(t),
                        0 !== y.length &&
                            n.length === y.length &&
                            y.every((e) => n.some((t) => g(e, t))) &&
                            (e.preventDefault(), e.stopPropagation());
                },
                n = (e) => {
                    let t = h(e),
                        n = v.current,
                        r = n.findIndex((e) => g(e, t));
                    r > -1 && n.splice(r, 1);
                };
            return (
                e.addEventListener("keydown", t, !0),
                e.addEventListener("keyup", n, !0),
                () => {
                    e.removeEventListener("keydown", t, !0), e.removeEventListener("keyup", n, !0);
                }
            );
        }, [_, y, e]);
}
