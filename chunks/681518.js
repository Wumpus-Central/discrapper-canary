var s = i(200651);
i(192379);
var n = i(120356),
    r = i.n(n),
    a = i(442837),
    l = i(481060),
    o = i(434404),
    d = i(999382),
    c = i(259674),
    u = i(981631),
    m = i(388032),
    g = i(331592);
t.Z = (e) => {
    var t;
    let { guild: i, headerId: n } = e,
        x = (0, a.e7)([d.Z], () => 'description' in d.Z.getErrors()),
        h = x
            ? m.intl.format(m.t.loup7u, {
                  onLearnMoreClick: () => {
                      (0, c.lW)({
                          articleId: u.BhN.SERVER_DISCOVERY_GUIDELINES,
                          guildId: i.id,
                          modalStep: c.tK.DESCRIPTION
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
                    (0, s.jsx)('div', { className: r()(g.stepImage, g.pencilImage) }),
                    (0, s.jsx)(l.Heading, {
                        variant: 'heading-xl/semibold',
                        className: g.header,
                        id: n,
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
            (0, s.jsxs)(l.FormSection, {
                className: g.form,
                children: [
                    (0, s.jsx)(l.FormTitle, {
                        required: !0,
                        children: m.intl.string(m.t['RSfm+v'])
                    }),
                    (0, s.jsx)(l.FormText, {
                        type: l.FormTextTypes.DESCRIPTION,
                        className: g.description,
                        children: m.intl.string(m.t['6jNp19'])
                    }),
                    (0, s.jsx)(l.TextArea, {
                        autoFocus: !0,
                        value: null !== (t = i.description) && void 0 !== t ? t : '',
                        placeholder: m.intl.string(m.t.Nvfows),
                        onChange: (e) => {
                            o.Z.updateGuild({ description: e });
                        },
                        maxLength: 120,
                        className: g.textArea,
                        error: h
                    })
                ]
            })
        ]
    });
};
