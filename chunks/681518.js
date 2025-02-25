r.d(t, { Z: () => p }), r(266796);
var s = r(200651);
r(192379);
var a = r(120356),
    i = r.n(a),
    n = r(442837),
    c = r(481060),
    l = r(434404),
    o = r(999382),
    d = r(259674),
    u = r(981631),
    m = r(388032),
    g = r(414225);
let p = (e) => {
    var t;
    let { guild: r, headerId: a } = e,
        p = (0, n.e7)([o.Z], () => 'description' in o.Z.getErrors())
            ? m.NW.format(m.t.loup7u, {
                  onLearnMoreClick: () => {
                      (0, d.lW)({
                          articleId: u.BhN.SERVER_DISCOVERY_GUIDELINES,
                          guildId: r.id,
                          modalStep: d.tK.DESCRIPTION
                      });
                  }
              })
            : null;
    return (0, s.jsxs)('div', {
        className: g.container,
        children: [
            (0, s.jsxs)('div', {
                className: g.content,
                children: [
                    (0, s.jsx)('div', { className: i()(g.stepImage, g.pencilImage) }),
                    (0, s.jsx)(c.X6q, {
                        variant: 'heading-xl/semibold',
                        className: g.header,
                        id: a,
                        children: m.NW.string(m.t.HY9iWF)
                    }),
                    (0, s.jsx)(c.Text, {
                        color: 'none',
                        variant: 'text-md/normal',
                        className: g.headerCaption,
                        children: m.NW.string(m.t.zTZSv7)
                    })
                ]
            }),
            (0, s.jsxs)(c.hjN, {
                className: g.form,
                children: [
                    (0, s.jsx)(c.vwX, {
                        required: !0,
                        children: m.NW.string(m.t['RSfm+v'])
                    }),
                    (0, s.jsx)(c.R94, {
                        type: c.geA.DESCRIPTION,
                        className: g.description,
                        children: m.NW.string(m.t['6jNp19'])
                    }),
                    (0, s.jsx)(c.Kx8, {
                        autoFocus: !0,
                        value: null !== (t = r.description) && void 0 !== t ? t : '',
                        placeholder: m.NW.string(m.t.Nvfows),
                        onChange: (e) => {
                            l.Z.updateGuild({ description: e });
                        },
                        maxLength: 120,
                        className: g.textArea,
                        error: p
                    })
                ]
            })
        ]
    });
};
