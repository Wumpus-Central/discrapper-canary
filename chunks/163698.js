n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    l = n(397927),
    a = n(854378),
    o = n(813516),
    c = n(524832),
    u = n(652215),
    d = n(985018),
    h = n(497039),
    f = n(473169);

function p(e) {
    let { children: t } = e;
    return (0, r.jsx)("li", {
        className: h.Aw,
        children: (0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            color: "text-default",
            children: t,
        }),
    });
}

function g(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(a._V, {
                src: n(79418),
                className: s()(f.SX, f.Ot),
            }),
            (0, r.jsx)(a.hE, {
                className: f.QB,
                children: d.intl.string(d.t["8UcxI6"]),
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                children: d.intl.string(d.t.O37hMl),
            }),
            (0, r.jsxs)(a.eB, {
                className: s()(f.SX, f.QX),
                children: [
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                    }),
                    (0, r.jsxs)("ul", {
                        className: h.qI,
                        children: [
                            (0, r.jsx)(p, {
                                children: d.intl.string(d.t.Gj1Zry),
                            }),
                            (0, r.jsx)(o.A, {}),
                            (0, r.jsx)(p, {
                                children: d.intl.string(d.t["8C6t3B"]),
                            }),
                            (0, r.jsx)(o.A, {}),
                            (0, r.jsx)(p, {
                                children: d.intl.string(d.t.mToZMA),
                            }),
                            (0, r.jsx)(o.A, {}),
                            (0, r.jsx)(p, {
                                children: d.intl.string(d.t.TPEvkc),
                            }),
                            (0, r.jsx)(o.A, {}),
                            (0, r.jsx)(p, {
                                children: d.intl.string(d.t.H8Y1Ln),
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsxs)(l.ButtonGroup, {
                direction: "vertical",
                fullWidth: !0,
                className: h.UD,
                children: [
                    (0, r.jsx)(l.Button, {
                        text: d.intl.string(d.t.GgCRqR),
                        onClick: () => t(c.k.PASSWORD),
                    }),
                    (0, r.jsx)(l.Button, {
                        text: d.intl.string(d.t["B/yHcQ"]),
                        variant: "secondary",
                        onClick: () =>
                            i(u.BVt.LOGIN, {
                                source: "account_revert",
                            }),
                    }),
                ],
            }),
        ],
    });
}
