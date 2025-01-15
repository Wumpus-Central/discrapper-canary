var s = i(200651);
i(192379);
var n = i(120356),
    r = i.n(n),
    a = i(481060),
    l = i(285888),
    o = i(456268),
    d = i(526429),
    c = i(450474),
    u = i(128449),
    m = i(388032),
    g = i(331592);
t.Z = (e) => {
    let { guild: t, guildMetadata: i, headerId: n } = e,
        x = d.Z.getPrimaryCategories().map((e) => {
            let { categoryId: t, name: i } = e;
            return {
                value: t,
                label: i
            };
        });
    return (0, s.jsxs)('div', {
        className: g.container,
        children: [
            (0, s.jsxs)('div', {
                className: g.content,
                children: [
                    (0, s.jsx)('div', { className: r()(g.stepImage, g.tagImage) }),
                    (0, s.jsx)(a.Heading, {
                        variant: 'heading-xl/semibold',
                        className: g.header,
                        id: n,
                        children: m.intl.string(m.t.Rv9An5)
                    }),
                    (0, s.jsx)(a.Text, {
                        color: 'none',
                        variant: 'text-md/normal',
                        className: g.headerCaption,
                        children: m.intl.string(m.t.MMEJFB)
                    })
                ]
            }),
            (0, s.jsxs)(a.FormSection, {
                className: g.form,
                children: [
                    (0, s.jsx)(a.FormTitle, {
                        required: !0,
                        children: m.intl.string(m.t.Rv9An5)
                    }),
                    (0, s.jsx)(a.FormText, {
                        type: a.FormTextTypes.DESCRIPTION,
                        className: g.description,
                        children: m.intl.string(m.t.CE5Gyc)
                    }),
                    (0, s.jsx)(l.Z, {
                        value: i.primaryCategoryId === u.o3 ? null : i.primaryCategoryId,
                        placeholder: m.intl.string(m.t.XqMe3N),
                        searchable: !0,
                        clearable: !1,
                        options: x,
                        onChange: (e) => {
                            var i;
                            (null == t ? void 0 : t.id) != null && (0, o.TA)(null == t ? void 0 : t.id, null !== (i = null == e ? void 0 : e.value) && void 0 !== i ? i : u.o3);
                        },
                        maxMenuHeight: 250
                    })
                ]
            }),
            (0, s.jsxs)(a.FormSection, {
                className: g.form,
                children: [
                    (0, s.jsx)(a.FormTitle, { children: m.intl.string(m.t.pcrcpK) }),
                    (0, s.jsx)(a.FormText, {
                        type: a.FormTextTypes.DESCRIPTION,
                        className: g.description,
                        children: m.intl.string(m.t['4jnzlZ'])
                    }),
                    (0, s.jsx)(c.Z, {
                        guild: t,
                        guildMetadata: i,
                        menuPlacement: l.Z.MenuPlacements.TOP
                    })
                ]
            })
        ]
    });
};
