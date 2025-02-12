i.d(t, { Z: () => x });
var s = i(200651);
i(192379);
var a = i(120356),
    n = i.n(a),
    r = i(442837),
    l = i(481060),
    c = i(434404),
    d = i(999382),
    o = i(259674),
    u = i(981631),
    m = i(388032),
    g = i(184330);
let x = (e) => {
    var t;
    let { guild: i, headerId: a } = e,
        x = (0, r.e7)([d.Z], () => 'description' in d.Z.getErrors())
            ? m.intl.format(m.t.loup7u, {
                  onLearnMoreClick: () => {
                      (0, o.lW)({
                          articleId: u.BhN.SERVER_DISCOVERY_GUIDELINES,
                          guildId: i.id,
                          modalStep: o.tK.DESCRIPTION
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
                    (0, s.jsx)('div', { className: n()(g.stepImage, g.pencilImage) }),
                    (0, s.jsx)(l.X6q, {
                        variant: 'heading-xl/semibold',
                        className: g.header,
                        id: a,
                        children: m.intl.string(m.t.HY9iWF)
                    }),
                    (0, s.jsx)(l.Text, {
                        color: 'none',
                        variant: 'text-md/normal',
                        className: g.headerCaption,
                        children: m.intl.string(m.t.zTZSv7)
                    })
                ]
            }),
            (0, s.jsxs)(l.hjN, {
                className: g.form,
                children: [
                    (0, s.jsx)(l.vwX, {
                        required: !0,
                        children: m.intl.string(m.t['RSfm+v'])
                    }),
                    (0, s.jsx)(l.R94, {
                        type: l.geA.DESCRIPTION,
                        className: g.description,
                        children: m.intl.string(m.t['6jNp19'])
                    }),
                    (0, s.jsx)(l.Kx8, {
                        autoFocus: !0,
                        value: null !== (t = i.description) && void 0 !== t ? t : '',
                        placeholder: m.intl.string(m.t.Nvfows),
                        onChange: (e) => {
                            c.Z.updateGuild({ description: e });
                        },
                        maxLength: 120,
                        className: g.textArea,
                        error: x
                    })
                ]
            })
        ]
    });
};
