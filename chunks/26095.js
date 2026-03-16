E.d(A, { A: () => C });
var e = E(627968);
E(64700);
var I = E(397927),
    T = E(73153);
let C = {
    open(_) {
        T.h.dispatch({ type: "SAFETY_HUB_APPEAL_OPEN", classificationId: _ }),
            (0, I.mMO)(async () => {
                let { default: A } = await Promise.all([E.e("74327"), E.e("5482")]).then(E.bind(E, 355690));
                return (E) => (0, e.jsx)(A, { classificationId: _, ...E });
            });
    },
    close() {
        T.h.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
    },
};
