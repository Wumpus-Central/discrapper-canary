n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    o = n(565138),
    a = n(246364),
    s = n(602606),
    c = n(705563),
    u = n(594174),
    d = n(967128),
    p = n(388032),
    h = n(156292);
function f(e) {
    var t;
    let { joinRequest: n, guild: s } = e,
        c = (0, i.e7)([u.default], () => u.default.getUser(n.userId));
    return (0, r.jsxs)('div', {
        className: h.summaryContainer,
        children: [
            (0, r.jsxs)('div', {
                className: h.summaryHeader,
                children: [
                    null != s &&
                        (0, r.jsxs)('div', {
                            className: h.summaryHeaderClanInfo,
                            children: [
                                (0, r.jsx)(o.Z, {
                                    guild: s,
                                    active: !0,
                                    size: o.Z.Sizes.SMOL,
                                    className: h.guildIcon
                                }),
                                (0, r.jsx)(l.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    children: s.name
                                })
                            ]
                        }),
                    null != c &&
                        (0, r.jsx)(l.X6q, {
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            children: p.intl.format(p.t.jDV3i4, { username: c.globalName })
                        })
                ]
            }),
            null == (t = n.formResponses)
                ? void 0
                : t
                      .filter((e) => e.field_type !== a.QJ.TERMS)
                      .map((e) => {
                          let t = e.field_type === a.QJ.MULTIPLE_CHOICE && null != e.response ? e.choices[e.response] : e.response;
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
        { loading: n, joinRequest: i, joinRequestGuild: o } = (0, s.Z)(t.id);
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
                                  guild: o,
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
