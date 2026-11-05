var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(559106),
    o = n(663417),
    d = n(625180),
    c = n(828936),
    u = n(191850),
    _ = n(792996),
    E = n(762653),
    A = n(959760);
function f(e) {
    let { onReload: t } = e;
    return (0, i.jsxs)("div", {
        role: "status",
        className: A.eb,
        children: [
            (0, i.jsx)(l.vN, {
                offset: 4,
                children: (0, i.jsx)("button", {
                    type: "button",
                    className: A.$I,
                    onClick: t,
                    children: (0, i.jsx)("span", { className: A.Ln, children: _.intl.string(u.default["93nLLM"]) }),
                }),
            }),
            (0, i.jsx)("div", {
                className: s()(A._o, E.f),
                children: (0, i.jsx)(l.vN, {
                    offset: 4,
                    children: (0, i.jsxs)("button", {
                        type: "button",
                        className: A.hQ,
                        onClick: t,
                        children: [
                            (0, i.jsx)("span", { className: A.vE, children: _.intl.string(u.default["9091U0"]) }),
                            (0, i.jsx)(o.RefreshIcon, { size: "md", color: "currentColor", className: A.t3 }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            let { frameId: t } = e,
                n = (0, c.l)(t),
                a = r.useCallback(
                    (e) => {
                        (e.stopPropagation(), d.A.refreshProxyTicket(t));
                    },
                    [t],
                );
            return n ? (0, i.jsx)("div", { className: E.m, children: (0, i.jsx)(f, { onReload: a }) }) : null;
        },
        x: f,
    },
);
