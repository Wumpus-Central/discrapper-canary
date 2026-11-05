var i = r(477900),
    n = r(769015),
    s = r(227196);
r.d(
    t,
    {},
    {
        A: function (e) {
            let { application: t, useComma: r = !1 } = e;
            return (0, i.jsxs)("div", {
                className: s.z,
                children: [
                    (0, i.jsx)(n.A, { className: s.I, game: t, size: n.M.XSMALL }),
                    (0, i.jsx)("strong", { children: `${t.name}${r ? ", " : ""}` }),
                ],
            });
        },
    },
);
