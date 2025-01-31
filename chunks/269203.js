n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(805519),
    s = n(565138),
    o = n(246364),
    c = n(705563),
    d = n(594174),
    u = n(967128),
    h = n(388032),
    p = n(932212);
function m(e) {
    var t;
    let { joinRequest: n, guild: r } = e,
        c = (0, l.e7)([d.default], () => d.default.getUser(n.userId));
    return (0, i.jsxs)('div', {
        className: p.summaryContainer,
        children: [
            (0, i.jsxs)('div', {
                className: p.summaryHeader,
                children: [
                    null != r &&
                        (0, i.jsxs)('div', {
                            className: p.summaryHeaderClanInfo,
                            children: [
                                (0, i.jsx)(s.Z, {
                                    guild: r,
                                    active: !0,
                                    size: s.Z.Sizes.SMOL,
                                    className: p.guildIcon
                                }),
                                (0, i.jsx)(a.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    children: r.name
                                })
                            ]
                        }),
                    null != c &&
                        (0, i.jsx)(a.X6q, {
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            children: h.intl.format(h.t.jDV3i4, { username: c.globalName })
                        })
                ]
            }),
            null === (t = n.formResponses) || void 0 === t
                ? void 0
                : t
                      .filter((e) => e.field_type !== o.QJ.TERMS)
                      .map((e) => {
                          let t = e.field_type === o.QJ.MULTIPLE_CHOICE && null != e.response ? e.choices[e.response] : e.response;
                          return (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)('hr', { className: p.summarySeparator }),
                                  (0, i.jsxs)('div', {
                                      className: p.formResponseContainer,
                                      children: [
                                          (0, i.jsx)(a.Text, {
                                              variant: 'text-xs/semibold',
                                              color: 'text-muted',
                                              children: e.label
                                          }),
                                          (0, i.jsx)(a.Text, {
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
function f(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: l, joinRequestGuild: s } = (0, r.Z)(t.id);
    return (0, i.jsx)(u.ZP, {
        channelId: t.id,
        className: p.container,
        children:
            null != l && null != l.formResponses
                ? (0, i.jsxs)('div', {
                      className: p.formContainer,
                      children: [
                          (0, i.jsx)('div', {
                              children: (0, i.jsx)(m, {
                                  guild: s,
                                  joinRequest: l
                              })
                          }),
                          (0, i.jsx)(c.Z, {
                              channelId: t.id,
                              showProfile: !0
                          })
                      ]
                  })
                : n
                  ? (0, i.jsx)(a.$jN, {})
                  : null
    });
}
