var r = n(477900),
    i = n(582128);
function s(t) {
    return (e) => {
        (e?.stopPropagation(), t());
    };
}
n.d(
    e,
    {},
    {
        A: function (t) {
            let { onClick: e, className: n, children: u } = t,
                a = i.useRef(null);
            return (0, r.jsx)("div", {
                onClick: e,
                ref: a,
                className: n,
                children: u({ areaRef: a, handleStopPropagation: s }),
            });
        },
    },
);
