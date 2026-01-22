n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    a = n(156828),
    s = n(311907),
    o = n(87001),
    l = n(540999),
    c = n(723702),
    u = n(538064),
    d = n(265059),
    f = n(652215);
let p = (0, a.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("94678"),
            n.e("896"),
            n.e("92777"),
            n.e("49862"),
            n.e("59541"),
            n.e("83898"),
            n.e("4787"),
            n.e("28979"),
            n.e("20725"),
            n.e("74492"),
            n.e("42944"),
            n.e("98763"),
            n.e("22477"),
            n.e("31294"),
        ]).then(n.bind(n, 902592)),
    webpackId: 902592,
});
function _(e) {
    let { mobile: t } = e,
        n = (0, s.bG)([l.A], () => l.A.isDeveloper),
        a = (0, s.bG)([d.A], () => d.A.displayTools),
        _ = (0, s.bG)([o.A], () => o.A.getWindowOpen(f.MLl.DEVTOOLS_POPOUT)),
        h = i.useCallback((e) => {
            ((0, c.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && "KeyO" === e.code && (0, u.pf)();
        }, []);
    return (i.useLayoutEffect(
        () => (
            window.addEventListener("keydown", h),
            () => {
                window.removeEventListener("keydown", h);
            }
        ),
        [h],
    ),
    (t ? n : a) && !_)
        ? (0, r.jsx)(p, { mobile: t })
        : null;
}
