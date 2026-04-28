n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var a = n(192308),
    l = n(228366);
let o = {
    open(e) {
        l.h.dispatch({ type: "SAFETY_HUB_APPEAL_OPEN", classificationId: e }),
            (0, a.openModalLazy)(async () => {
                let { default: t } = await Promise.all([
                    n.e("61659"),
                    n.e("70760"),
                    n.e("57546"),
                    n.e("8891"),
                    n.e("51471"),
                ]).then(n.bind(n, 550560));
                return (n) => (0, i.jsx)(t, { classificationId: e, ...n });
            });
    },
    close() {
        l.h.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
    },
};
