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
    g = n(658122);
function m(e) {
    let { label: t, icon: n, setStatus: s, isFavorited: m, onFavoriteClick: p } = e,
        [_, x] = l.useState(!1),
        f = (0, r.bG)([u.A], () => u.A.getFavoritedStatuses().length >= u.x),
        E = null != p,
        C = l.useCallback(
            (e) => {
                e.stopPropagation(), p?.();
            },
            [p],
        ),
        I = m ? c.Gg5 : c.yA2;
    return (0, i.jsxs)(c.DUT, {
        onClick: s,
        onMouseEnter: () => {
            x(!0);
        },
        onMouseLeave: () => {
            x(!1);
        },
        className: a()(g.item, g.labelContainer, A.kL),
        children: [
            (0, i.jsx)("div", { children: n }),
            (0, i.jsx)(c.Text, { variant: "text-md/normal", className: A.rv, children: t }),
            _ &&
                E &&
                (0, i.jsx)(d.m_, {
                    text: f && !m ? h.intl.string(h.t.YSDH9n) : void 0,
                    children: (0, i.jsx)(c.DUT, {
                        className: a()(A.ff, A.wB),
                        onClick: C,
                        children: (0, i.jsx)(I, {
                            className: A.ut,
                            color: m ? o.A.colors.ICON_FEEDBACK_WARNING : "currentColor",
                        }),
                    }),
                }),
        ],
    });
}
