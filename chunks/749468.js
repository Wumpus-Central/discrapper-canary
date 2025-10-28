t.d(a, { R: () => l });
var u = t(677061),
    n = t(735437),
    r = t(495873),
    i = t(647438),
    o = t(765772);
function l(e, a) {
    let { role: t = "dialog" } = e,
        l = (0, u.mp)();
    l = e["aria-label"] ? void 0 : l;
    let s = (0, i.useRef)(!1);
    return (
        (0, i.useEffect)(() => {
            if (a.current && !a.current.contains(document.activeElement)) {
                (0, r.e)(a.current);
                let e = setTimeout(() => {
                    (document.activeElement === a.current || document.activeElement === document.body) &&
                        ((s.current = !0), a.current && (a.current.blur(), (0, r.e)(a.current)), (s.current = !1));
                }, 500);
                return () => {
                    clearTimeout(e);
                };
            }
        }, [a]),
        (0, o.Bq)(),
        {
            dialogProps: {
                ...(0, n.z)(e, { labelable: !0 }),
                role: t,
                tabIndex: -1,
                "aria-labelledby": e["aria-labelledby"] || l,
                onBlur: (e) => {
                    s.current && e.stopPropagation();
                },
            },
            titleProps: { id: l },
        }
    );
}
