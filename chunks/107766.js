t.d(n, { Ew: () => l, nk: () => o });
var a = t(477900);
t(582128);
var d = t(192308),
    i = t(138054);
function l(e, n) {
    (0, d.openModalLazy)(
        async () => {
            let { default: d } = await Promise.all([
                t.e("684986"),
                t.e("780262"),
                t.e("531997"),
                t.e("689913"),
                t.e("202669"),
                t.e("310023"),
                t.e("890078"),
            ]).then(t.bind(t, 904685));
            return (t) => (0, a.jsx)(d, { ...t, userId: e, linkCode: n });
        },
        { modalKey: "family-center-request-modal" },
    );
}
function o() {
    let e = i.A.getPendingConnection();
    return null != e && (l(e.teenId, e.linkCode), !0);
}
