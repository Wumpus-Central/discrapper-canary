n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    r = n(192308),
    a = n(187322),
    o = n(821609),
    d = n(452027),
    c = n(946274),
    u = n(555337),
    m = n(339984),
    g = n(985018),
    h = n(695291);
function x(e) {
    let { profile: t, handleIconChange: s, canManageGuild: d } = e,
        u = l.useCallback(() => {
            s(null);
        }, [s]),
        x = l.useCallback(
            (e, t) => {
                (0, r.openModalLazy)(async () => {
                    let { default: l } = await Promise.all([
                        n.e("79149"),
                        n.e("29259"),
                        n.e("74571"),
                        n.e("56000"),
                    ]).then(n.bind(n, 142630));
                    return (n) =>
                        (0, i.jsx)(l, {
                            uploadType: m.HL.GUILD_ICON,
                            imageUri: e,
                            file: t,
                            onCrop: (e) => {
                                let { imageUri: t } = e;
                                return s(t);
                            },
                            ...n,
                        });
                }, {});
            },
            [s],
        );
    return (0, i.jsxs)("div", {
        className: h.Uo,
        children: [
            (0, i.jsx)(a.vN, {
                within: !0,
                children: (0, i.jsxs)("div", {
                    className: h.UD,
                    children: [
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            size: "sm",
                            variant: "primary",
                            disabled: !d,
                            text: g.intl.string(g.t.r3JdsT),
                        }),
                        (0, i.jsx)(c.Ay, { tabIndex: 0, onChange: x, disabled: !d }),
                    ],
                }),
            }),
            null != t.icon
                ? (0, i.jsx)(o.$, {
                      variant: "critical-secondary",
                      size: "sm",
                      text: g.intl.string(g.t.x8AlTm),
                      onClick: u,
                      disabled: !d,
                  })
                : null,
        ],
    });
}
function _(e) {
    let { profile: t, canManageGuild: n, onIconChange: l } = e,
        r = (0, s.bG)([u.A], () => u.A.getError("icon"));
    return (0, i.jsx)("section", {
        className: h.kL,
        children: (0, i.jsx)(d.D, {
            label: g.intl.string(g.t.FkQnxJ),
            description: g.intl.string(g.t.KjkA0W),
            errorMessage: r,
            children: (0, i.jsx)(x, { profile: t, canManageGuild: n, handleIconChange: l }),
        }),
    });
}
