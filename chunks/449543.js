i.d(t, { Z: () => u });
var s = i(200651);
i(192379);
var a = i(120356),
    n = i.n(a),
    r = i(481060),
    l = i(718157),
    c = i(450474),
    d = i(388032),
    o = i(89388);
let u = (e) => {
    let { guild: t, guildMetadata: i, headerId: a } = e;
    return (0, s.jsxs)('div', {
        className: o.container,
        children: [
            (0, s.jsxs)('div', {
                className: o.content,
                children: [
                    (0, s.jsx)('div', { className: n()(o.stepImage, o.tagImage) }),
                    (0, s.jsx)(r.X6q, {
                        variant: 'heading-xl/semibold',
                        className: o.header,
                        id: a,
                        children: d.intl.string(d.t.Rv9An5)
                    }),
                    (0, s.jsx)(r.Text, {
                        color: 'none',
                        variant: 'text-md/normal',
                        className: o.headerCaption,
                        children: d.intl.string(d.t.MMEJFB)
                    })
                ]
            }),
            (0, s.jsxs)(r.hjN, {
                className: o.form,
                children: [
                    (0, s.jsx)(r.vwX, {
                        required: !0,
                        children: d.intl.string(d.t.Rv9An5)
                    }),
                    (0, s.jsx)(r.R94, {
                        type: r.geA.DESCRIPTION,
                        className: o.description,
                        children: d.intl.string(d.t.CE5Gyc)
                    }),
                    (0, s.jsx)(l.E, {
                        guildId: t.id,
                        guildMetadata: i,
                        clearable: !1
                    })
                ]
            }),
            (0, s.jsxs)(r.hjN, {
                className: o.form,
                children: [
                    (0, s.jsx)(r.vwX, { children: d.intl.string(d.t.pcrcpK) }),
                    (0, s.jsx)(r.R94, {
                        type: r.geA.DESCRIPTION,
                        className: o.description,
                        children: d.intl.string(d.t['4jnzlZ'])
                    }),
                    (0, s.jsx)(c.Z, {
                        guild: t,
                        guildMetadata: i
                    })
                ]
            })
        ]
    });
};
