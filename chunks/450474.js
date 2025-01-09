var i = n(200651);
n(192379);
var r = n(481060),
    l = n(285888),
    s = n(456268),
    a = n(526429),
    o = n(203377),
    c = n(883979);
t.Z = (e) => {
    let { guild: t, guildMetadata: n, menuPlacement: d, disabled: u } = e,
        m = (e) => {
            let { secondaryCategoryIds: i } = n,
                r = e.map((e) => e.value);
            if (e.length < i.length) i.filter((e) => !r.includes(e)).forEach((e) => (0, s.K0)(t.id, e));
            else {
                if (i.length >= o.Pg) return;
                r.filter((e) => !i.includes(e)).forEach((e) => (0, s.Kq)(t.id, e));
            }
        },
        h = (e) => {
            (0, s.K0)(t.id, e);
        },
        g = (e) => {
            e.preventDefault(), e.stopPropagation();
        },
        x = a.Z.getAllCategories().map((e) => {
            let { categoryId: t, name: n } = e;
            return {
                value: t,
                label: n
            };
        });
    return (0, i.jsx)(l.Z, {
        value: n.secondaryCategoryIds,
        searchable: !0,
        clearable: !1,
        options: x,
        onChange: (e) => m(e),
        multiValueRenderer: (e) => {
            let { label: t, value: n } = e;
            return (0, i.jsxs)('span', {
                className: c.subcategory,
                onMouseDown: g,
                children: [
                    t,
                    (0, i.jsx)(r.Clickable, {
                        className: c.closeWrapper,
                        onClick: () => h(n),
                        children: (0, i.jsx)(r.XSmallIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            className: c.close
                        })
                    })
                ]
            });
        },
        menuPlacement: d,
        disabled: u,
        isMulti: !0
    });
};
