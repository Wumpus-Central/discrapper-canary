n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(805519),
    a = n(565138),
    s = n(246364),
    c = n(705563),
    u = n(594174),
    d = n(967128),
    p = n(388032),
    h = n(156292);
function f(e) {
    var t;
    let { joinRequest: n, guild: o } = e,
        c = (0, i.e7)([u.default], () => u.default.getUser(n.userId));
    return (0, r.jsxs)('div', {
        className: h.summaryContainer,
        children: [
            (0, r.jsxs)('div', {
                className: h.summaryHeader,
                children: [
                    null != o &&
                        (0, r.jsxs)('div', {
                            className: h.summaryHeaderClanInfo,
                            children: [
                                (0, r.jsx)(a.Z, {
                                    guild: o,
                                    active: !0,
                                    size: a.Z.Sizes.SMOL,
                                    className: h.guildIcon
                                }),
                                (0, r.jsx)(l.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    children: o.name
                                })
                            ]
                        }),
                    null != c &&
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            children: p.NW.format(p.t.jDV3i4, { username: c.globalName })
                        })
                ]
            }),
            null == (t = n.formResponses)
                ? void 0
                : t
                      .filter((e) => e.field_type !== s.QJ.TERMS)
                      .map((e) => {
                          let t = e.field_type === s.QJ.MULTIPLE_CHOICE && null != e.response ? e.choices[e.response] : e.response;
                          return (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsx)('hr', { className: h.summarySeparator }),
                                  (0, r.jsxs)('div', {
                                      className: h.formResponseContainer,
                                      children: [
                                          (0, r.jsx)(l.Text, {
                                              variant: 'text-xs/semibold',
                                              color: 'text-muted',
                                              children: e.label
                                          }),
                                          (0, r.jsx)(l.Text, {
                                              variant: 'text-md/medium',
                                              color: 'text-primary',
                                              children: t
                                          })
                                      ]
                                  })
                              ]
                          });
                      })
        ]
    });
}
function m(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: i, joinRequestGuild: a } = (0, o.Z)(t.id);
    return (0, r.jsx)(d.ZP, {
        channelId: t.id,
        className: h.container,
        children:
            null != i && null != i.formResponses
                ? (0, r.jsxs)('div', {
                      className: h.formContainer,
                      children: [
                          (0, r.jsx)('div', {
                              children: (0, r.jsx)(f, {
                                  guild: a,
                                  joinRequest: i
                              })
                          }),
                          (0, r.jsx)(c.Z, {
                              channelId: t.id,
                              showProfile: !0
                          })
                      ]
                  })
                : n
                  ? (0, r.jsx)(l.$jN, {})
                  : null
    });
}
