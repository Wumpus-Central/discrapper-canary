t.d(n, { Ew: () => l, nk: () => o });
var a = t(627968);
t(64700);
var d = t(192308),
    i = t(138054);
function l(e, n) {
    (0, d.openModalLazy)(
        async () => {
            let { default: d } = await Promise.all([
                t.e("75680"),
                t.e("80262"),
                t.e("31997"),
                t.e("2669"),
                t.e("89913"),
                t.e("10023"),
                t.e("72416"),
            ]).then(t.bind(t, 354902));
            return (t) => (0, a.jsx)(d, { ...t, userId: e, linkCode: n });
        },
        { modalKey: "family-center-request-modal" },
    );
}
function o() {
    let e = i.A.getPendingConnection();
    return null != e && (l(e.teenId, e.linkCode), !0);
}
