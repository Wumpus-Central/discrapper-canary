a.d(t, { A: () => o });
var s = a(627968),
    l = a(64700),
    r = a(939249),
    i = a(26430),
    n = a(517905),
    c = a(889452);
let o = function (e) {
    let { className: t, guildId: a } = e,
        o = l.useRef(null),
        d = l.useCallback((e, t) => {
            e.stopPropagation(), t.onClick(e);
        }, []);
    return (0, s.jsx)(n.A, {
        guildId: a,
        position: "left",
        targetElementRef: o,
        children: (e) =>
            (0, s.jsx)(r.D, {
                ...e,
                innerRef: o,
                className: t,
                onClick: (t) => d(t, e),
                children: (0, s.jsx)("div", {
                    className: c.K,
                    children: (0, s.jsx)(i._, { size: "xs", color: "currentColor" }),
                }),
            }),
    });
};
