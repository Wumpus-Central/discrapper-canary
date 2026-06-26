a.d(e, { R: () => o });
var n = a(627968);
a(64700);
var d = a(192308),
    i = a(652215);
function o() {
    let { groupId: t, initialUserIds: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    (0, d.openModalLazy)(
        async () => {
            let { default: d } = await a.e("51080").then(a.bind(a, 297147));
            return (a) => (0, n.jsx)(d, { ...a, groupId: t, initialUserIds: e });
        },
        { contextKey: (0, d.modalContextFromAppContext)(i.BRT.OVERLAY) },
    );
}
