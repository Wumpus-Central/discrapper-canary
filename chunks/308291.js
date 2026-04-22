n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(192308),
    a = n(271866),
    r = n(419954),
    o = n(147964),
    d = n(253932),
    u = n(780964),
    c = n(867099),
    g = n(985018);
let m = (0, r.zD)(u.X.APPLICATION_TEST_MODE, {
    useTitle: () => g.intl.string(g.t.erOqlh),
    useSubtitle: () => g.intl.string(g.t["52hMnD"]),
    usePredicate: d.Q_.useSetting,
    useValue: () => (0, s.bG)([o.A], () => null != o.A.testModeApplicationId),
    setValue: (e) => {
        e ? (0, l.openModal)((e) => (0, i.jsx)(c.A, { ...e })) : a.cL();
    },
});
