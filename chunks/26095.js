i.d(t, { A: () => s });
var n = i(627968);
i(64700);
var a = i(192308),
    l = i(228366);
let s = {
    open(e) {
        l.h.dispatch({ type: "SAFETY_HUB_APPEAL_OPEN", classificationId: e }),
            (0, a.openModalLazy)(async () => {
                let { default: t } = await Promise.all([i.e("51471"), i.e("54867")]).then(i.bind(i, 550560));
                return (i) => (0, n.jsx)(t, { classificationId: e, ...i });
            });
    },
    close() {
        l.h.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
    },
};
