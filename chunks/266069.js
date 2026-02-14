n.d(t, { u: () => m });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(827734),
    d = n(435371),
    c = n(397927),
    u = n(242919),
    h = n(985018),
    A = n(519501),
    p = n(658122);
function m(e) {
    let { label: t, icon: n, setStatus: s, isFavorited: m, onFavoriteClick: g } = e,
        [_, f] = l.useState(!1),
        x = (0, r.bG)([u.A], () => u.A.getFavoritedStatuses().length >= u.x),
        C = null != g,
        E = l.useCallback(
            (e) => {
                e.stopPropagation(), g?.();
            },
            [g],
        ),
        I = m ? c.Gg5 : c.yA2;
    return (0, i.jsxs)(c.DUT, {
        onClick: s,
        onMouseEnter: () => {
            f(!0);
        },
        onMouseLeave: () => {
            f(!1);
        },
        className: a()(p.item, p.labelContainer, A.kL),
        children: [
            (0, i.jsx)("div", { className: A.P0, children: n }),
            (0, i.jsx)(c.Text, { variant: "text-md/normal", className: A.rv, children: t }),
            _ &&
                C &&
                (0, i.jsx)(d.m_, {
                    text: x && !m ? h.intl.string(h.t.YSDH9n) : void 0,
                    children: (0, i.jsx)(c.DUT, {
                        className: a()(A.ff, A.wB),
                        onClick: E,
                        children: (0, i.jsx)(I, {
                            className: A.ut,
                            color: m ? o.A.colors.ICON_FEEDBACK_WARNING : "currentColor",
                        }),
                    }),
                }),
        ],
    });
}
