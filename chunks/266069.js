n.d(t, { u: () => b }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(827734),
    c = n(435371),
    u = n(397927),
    d = n(242919),
    f = n(985018),
    p = n(519501),
    h = n(658122);
function b(e) {
    let { label: t, icon: n, setStatus: i, isFavorited: b, onFavoriteClick: g } = e,
        [m, A] = l.useState(!1),
        y = (0, s.bG)([d.A], () => d.A.getFavoritedStatuses().length >= d.x),
        O = null != g,
        j = l.useCallback(
            (e) => {
                e.stopPropagation(), null == g || g();
            },
            [g],
        ),
        v = b ? u.Gg5 : u.yA2;
    return (0, r.jsxs)(u.DUT, {
        onClick: i,
        onMouseEnter: () => {
            A(!0);
        },
        onMouseLeave: () => {
            A(!1);
        },
        className: a()(h.item, h.labelContainer, p.kL),
        children: [
            (0, r.jsx)("div", { children: n }),
            (0, r.jsx)(u.Text, {
                variant: "text-md/normal",
                className: p.rv,
                children: t,
            }),
            m &&
                O &&
                (0, r.jsx)(c.m_, {
                    text: y && !b ? f.intl.string(f.t.YSDH9n) : void 0,
                    children: (0, r.jsx)(u.DUT, {
                        className: a()(p.ff, p.wB),
                        onClick: j,
                        children: (0, r.jsx)(v, {
                            className: p.ut,
                            color: b ? o.A.colors.ICON_FEEDBACK_WARNING : "currentColor",
                        }),
                    }),
                }),
        ],
    });
}
