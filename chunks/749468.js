n.d(t, { R: () => l });
var r = n(677061),
    i = n(735437),
    a = n(495873),
    o = n(647438),
    s = n(765772);
function l(e, t) {
    let { role: n = "dialog" } = e,
        l = (0, r.mp)();
    l = e["aria-label"] ? void 0 : l;
    let c = (0, o.useRef)(!1);
    return (
        (0, o.useEffect)(() => {
            if (t.current && !t.current.contains(document.activeElement)) {
                (0, a.e)(t.current);
                let e = setTimeout(() => {
                    (document.activeElement === t.current || document.activeElement === document.body) &&
                        ((c.current = !0), t.current && (t.current.blur(), (0, a.e)(t.current)), (c.current = !1));
                }, 500);
                return () => {
                    clearTimeout(e);
                };
            }
        }, [t]),
        (0, s.Bq)(),
        {
            dialogProps: {
                ...(0, i.z)(e, { labelable: !0 }),
                role: n,
                tabIndex: -1,
                "aria-labelledby": e["aria-labelledby"] || l,
                onBlur: (e) => {
                    c.current && e.stopPropagation();
                },
            },
            titleProps: { id: l },
        }
    );
}
