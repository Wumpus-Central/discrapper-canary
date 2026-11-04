var i = n(477900);
n(582128);
var a = n(192308),
    l = n(73153);
n.d(
    t,
    {},
    {
        A: {
            open(e) {
                (l.h.dispatch({ type: "SAFETY_HUB_APPEAL_OPEN", classificationId: e }),
                    (0, a.mM)(async () => {
                        let { default: t } = await Promise.all([n.e(726464), n.e(480098)]).then(n.bind(n, 894683));
                        return (n) => (0, i.jsx)(t, { classificationId: e, ...n });
                    }));
            },
            close() {
                l.h.dispatch({ type: "SAFETY_HUB_APPEAL_CLOSE" });
            },
        },
    },
);
