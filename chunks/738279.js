r.d(n, {
    R: function () {
        return l;
    }
});
var i = r(661763),
    a = r(662845),
    o = r(192379),
    s = r(726983);
function l(e, n) {
    let { role: r = 'dialog' } = e,
        l = (0, i.mp)();
    l = e['aria-label'] ? void 0 : l;
    let u = (0, o.useRef)(!1);
    return (
        (0, o.useEffect)(() => {
            if (n.current && !n.current.contains(document.activeElement)) {
                (0, a.ex)(n.current);
                let e = setTimeout(() => {
                    document.activeElement === n.current && ((u.current = !0), n.current && (n.current.blur(), (0, a.ex)(n.current)), (u.current = !1));
                }, 500);
                return () => {
                    clearTimeout(e);
                };
            }
        }, [n]),
        (0, s.Bq)(),
        {
            dialogProps: {
                ...(0, i.zL)(e, { labelable: !0 }),
                role: r,
                tabIndex: -1,
                'aria-labelledby': e['aria-labelledby'] || l,
                onBlur: (e) => {
                    u.current && e.stopPropagation();
                }
            },
            titleProps: { id: l }
        }
    );
}
