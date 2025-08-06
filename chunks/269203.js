n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(565138),
    s = n(246364),
    l = n(602606),
    c = n(705563),
    u = n(594174),
    d = n(967128),
    f = n(388032),
    _ = n(156292);
function p(e) {
    var t;
    let { joinRequest: n, guild: l } = e,
        c = (0, i.e7)([u.default], () => u.default.getUser(n.userId));
    return (0, r.jsxs)('div', {
        className: _.summaryContainer,
        children: [
            (0, r.jsxs)('div', {
                className: _.summaryHeader,
                children: [
                    null != l &&
                        (0, r.jsxs)('div', {
                            className: _.summaryHeaderClanInfo,
                            children: [
                                (0, r.jsx)(a.Z, {
                                    guild: l,
                                    active: !0,
                                    size: a.Z.Sizes.SMOL,
                                    className: _.guildIcon
                                }),
                                (0, r.jsx)(o.X6q, {
                                    variant: 'heading-sm/semibold',
                                    color: 'header-primary',
                                    children: l.name
                                })
                            ]
                        }),
                    null != c &&
                        (0, r.jsx)(o.X6q, {
                            variant: 'heading-xl/semibold',
                            color: 'header-primary',
                            children: f.intl.format(f.t.jDV3i4, { username: c.globalName })
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
                                  (0, r.jsx)('hr', { className: _.summarySeparator }),
                                  (0, r.jsxs)('div', {
                                      className: _.formResponseContainer,
                                      children: [
                                          (0, r.jsx)(o.Text, {
                                              variant: 'text-xs/semibold',
                                              color: 'text-muted',
                                              children: e.label
                                          }),
                                          (0, r.jsx)(o.Text, {
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
function h(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: i, joinRequestGuild: a } = (0, l.Z)(t.id);
    return (0, r.jsx)(d.ZP, {
        channelId: t.id,
        className: _.container,
        children:
            null != i && null != i.formResponses
                ? (0, r.jsxs)('div', {
                      className: _.formContainer,
                      children: [
                          (0, r.jsx)('div', {
                              children: (0, r.jsx)(p, {
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
                  ? (0, r.jsx)(o.$jN, {})
                  : null
    });
}
