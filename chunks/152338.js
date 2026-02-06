i.r(t), i.d(t, { default: () => o });
var r = i(627968),
    s = i(64700),
    n = i(816288),
    a = i(308030);
function o() {
    let [e, t] = s.useState(1);
    return (
        s.useEffect(() => {
            let e = setTimeout(() => {
                t(15);
            }, 500);
            return () => clearTimeout(e);
        }, []),
        (0, r.jsx)("div", {
            className: a.KD,
            children: (0, r.jsx)("div", {
                className: a.oU,
                children: (0, r.jsx)(n.n, {
                    className: a.hr,
                    appliedBoostCount: e,
                    maxBoostCount: 20,
                    premiumSubscriberCount: e,
                }),
            }),
        })
    );
}
