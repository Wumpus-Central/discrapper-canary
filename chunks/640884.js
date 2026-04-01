t.d(s, { A: () => i });
var n = t(627968),
    l = t(64700),
    a = t(91299),
    r = t(549719);
function i(e) {
    let { percentage: s, className: t, onClick: i } = e,
        c = (0, l.useRef)(null),
        o = (0, l.useCallback)(
            (e) => {
                if (null == c.current) return;
                let s = Math.min(Math.max(((e.clientX - c.current.left) / c.current.width) * 100, 0), 100);
                i?.(s);
            },
            [i],
        ),
        d = (0, l.useCallback)(() => {
            window.removeEventListener("mousemove", o);
        }, [o]);
    return (
        (0, l.useEffect)(
            () => () => {
                window.removeEventListener("mousemove", o), window.removeEventListener("mouseup", d);
            },
            [o, d],
        ),
        (0, n.jsx)(a.A, {
            className: t,
            onMouseDown: (e) => {
                (c.current = e.currentTarget.getBoundingClientRect()),
                    o(e),
                    window.addEventListener("mousemove", o),
                    window.addEventListener("mouseup", d, { once: !0 });
            },
            children: (0, n.jsx)(r.A, { percentage: s }),
        })
    );
}
