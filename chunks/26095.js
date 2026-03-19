i.d(t, { A: () => s });
var n = i(627968);
i(64700);
var a = i(397927),
    l = i(73153);
let s = {
    open(e) {
        l.h.dispatch({ type: "SAFETY_HUB_APPEAL_OPEN", classificationId: e }),
            (0, a.mMO)(async () => {
                let { default: t } = await Promise.all([i.e("74327"), i.e("30734")]).then(i.bind(i, 355690));
                return (i) => (0, n.jsx)(t, { classificationId: e, ...i });
            });
    },
    close() {
        l.h.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
    },
};
