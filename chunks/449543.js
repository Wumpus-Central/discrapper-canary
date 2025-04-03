r.d(t, { Z: () => u }), r(266796);
var s = r(200651);
r(192379);
var a = r(120356),
    i = r.n(a),
    n = r(481060),
    c = r(718157),
    l = r(450474),
    o = r(388032),
    d = r(878003);
let u = (e) => {
    let { guild: t, guildMetadata: r, headerId: a } = e;
    return (0, s.jsxs)('div', {
        className: d.container,
        children: [
            (0, s.jsxs)('div', {
                className: d.content,
                children: [
                    (0, s.jsx)('div', { className: i()(d.stepImage, d.tagImage) }),
                    (0, s.jsx)(n.X6q, {
                        variant: 'heading-xl/semibold',
                        className: d.header,
                        id: a,
                        children: o.NW.string(o.t.Rv9An5)
                    }),
                    (0, s.jsx)(n.Text, {
                        color: 'none',
                        variant: 'text-md/normal',
                        className: d.headerCaption,
                        children: o.NW.string(o.t.MMEJFB)
                    })
                ]
            }),
            (0, s.jsxs)(n.hjN, {
                className: d.form,
                children: [
                    (0, s.jsx)(n.vwX, {
                        required: !0,
                        children: o.NW.string(o.t.Rv9An5)
                    }),
                    (0, s.jsx)(n.R94, {
                        type: n.geA.DESCRIPTION,
                        className: d.description,
                        children: o.NW.string(o.t.CE5Gyc)
                    }),
                    (0, s.jsx)(c.E, {
                        guildId: t.id,
                        guildMetadata: r,
                        clearable: !1
                    })
                ]
            }),
            (0, s.jsxs)(n.hjN, {
                className: d.form,
                children: [
                    (0, s.jsx)(n.vwX, { children: o.NW.string(o.t.pcrcpK) }),
                    (0, s.jsx)(n.R94, {
                        type: n.geA.DESCRIPTION,
                        className: d.description,
                        children: o.NW.string(o.t['4jnzlZ'])
                    }),
                    (0, s.jsx)(l.Z, {
                        guild: t,
                        guildMetadata: r
                    })
                ]
            })
        ]
    });
};
