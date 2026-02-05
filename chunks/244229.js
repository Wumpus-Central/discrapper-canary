n.d(t, { A: () => o });
var i = n(627968),
    r = n(64700),
    a = n(397927),
    l = n(517905),
    s = n(480601);
let o = function (e) {
    let { className: t, guildId: n } = e,
        o = r.useRef(null),
        d = r.useCallback((e, t) => {
            e.stopPropagation(), t.onClick(e);
        }, []);
    return (0, i.jsx)(l.A, {
        guildId: n,
        position: "left",
        targetElementRef: o,
        children: (e) =>
            (0, i.jsx)(a.DUT, {
                ...e,
                innerRef: o,
                className: t,
                onClick: (t) => d(t, e),
                children: (0, i.jsx)("div", {
                    className: s.K,
                    children: (0, i.jsx)(a._Xm, { size: "xs", color: "currentColor" }),
                }),
            }),
    });
};
