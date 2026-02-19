"use strict";
n.d(t, { u: () => g });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(827734),
    c = n(435371),
    d = n(397927),
    u = n(242919),
    h = n(985018),
    A = n(519501),
    p = n(658122);
function g(e) {
    let { label: t, icon: n, setStatus: l, isFavorited: g, onFavoriteClick: m } = e,
        [_, f] = s.useState(!1),
        x = (0, a.bG)([u.A], () => u.A.getFavoritedStatuses().length >= u.x),
        C = null != m,
        E = s.useCallback(
            (e) => {
                e.stopPropagation(), m?.();
            },
            [m],
        ),
        I = g ? d.Gg5 : d.yA2;
    return (0, i.jsxs)(d.DUT, {
        onClick: l,
        onMouseEnter: () => {
            f(!0);
        },
        onMouseLeave: () => {
            f(!1);
        },
        className: r()(p.item, p.labelContainer, A.kL),
        children: [
            (0, i.jsx)("div", { className: A.P0, children: n }),
            (0, i.jsx)(d.Text, { variant: "text-md/normal", className: A.rv, children: t }),
            _ &&
                C &&
                (0, i.jsx)(c.m_, {
                    text: x && !g ? h.intl.string(h.t.YSDH9n) : void 0,
                    children: (0, i.jsx)(d.DUT, {
                        className: r()(A.ff, A.wB),
                        onClick: E,
                        children: (0, i.jsx)(I, {
                            className: A.ut,
                            color: g ? o.A.colors.ICON_FEEDBACK_WARNING : "currentColor",
                        }),
                    }),
                }),
        ],
    });
}
