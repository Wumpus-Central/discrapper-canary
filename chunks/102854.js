n.d(t, {
    A: () => _,
});
var r = n(627968),
    i = n(64700),
    a = n(156828),
    o = n(311907),
    s = n(87001),
    l = n(540999),
    c = n(723702),
    u = n(538064),
    d = n(265059),
    f = n(652215);
let p = (0, a.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("54809"),
            n.e("38939"),
            n.e("94678"),
            n.e("896"),
            n.e("84511"),
            n.e("92777"),
            n.e("3795"),
            n.e("28936"),
            n.e("40396"),
            n.e("13088"),
            n.e("48330"),
            n.e("92414"),
            n.e("62175"),
            n.e("97283"),
            n.e("94857"),
            n.e("88332"),
            n.e("7034"),
            n.e("49559"),
            n.e("37372"),
            n.e("67923"),
            n.e("3183"),
            n.e("64935"),
            n.e("2292"),
            n.e("45586"),
            n.e("62733"),
            n.e("83518"),
            n.e("52199"),
            n.e("47995"),
            n.e("44411"),
            n.e("49862"),
            n.e("34749"),
            n.e("44667"),
            n.e("7803"),
            n.e("84704"),
            n.e("67646"),
            n.e("78376"),
            n.e("59541"),
            n.e("40198"),
            n.e("16865"),
            n.e("83898"),
            n.e("95782"),
            n.e("4787"),
            n.e("20545"),
            n.e("4670"),
            n.e("32502"),
            n.e("20725"),
            n.e("74492"),
            n.e("10253"),
            n.e("87557"),
            n.e("31294"),
        ]).then(n.bind(n, 902592)),
    webpackId: 902592,
});

function _(e) {
    let { mobile: t } = e,
        n = (0, o.bG)([l.A], () => l.A.isDeveloper),
        a = (0, o.bG)([d.A], () => d.A.displayTools),
        _ = (0, o.bG)([s.A], () => s.A.getWindowOpen(f.MLl.DEVTOOLS_POPOUT)),
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
        ? (0, r.jsx)(p, {
              mobile: t,
          })
        : null;
}
