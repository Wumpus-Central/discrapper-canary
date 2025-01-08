var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    o = n(594174),
    l = n(63568),
    c = n(246364),
    s = n(489813),
    d = n(186078),
    u = n(73880),
    m = n(196345),
    f = n(707592),
    x = n(476770),
    b = n(483760),
    h = n(465588),
    p = n(644929),
    C = n(814960),
    _ = n(388032);
t.Z = function (e) {
    let { guildId: t, formFields: n, user: g, showRequirements: v = !0 } = e,
        j = (0, r.e7)([o.default], () => (null != g ? g : o.default.getCurrentUser())),
        I = (0, l.jS)(t, 'DisabledFormRenderer');
    if (null == j) return null;
    let T = I ? x.Ih : s.Ih;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            v &&
                (0, i.jsx)(T, {
                    icon: a.ShieldIcon,
                    text: _.intl.string(_.t.v2z4c3),
                    meetsRequirement: !0
                }),
            n.map((e, t) =>
                I
                    ? (function (e, t) {
                          switch (e.field_type) {
                              case c.QJ.TERMS:
                                  return (0, i.jsx)(p.QC, { formField: e }, t);
                              case c.QJ.TEXT_INPUT:
                                  return (0, i.jsx)(C.YJ, { formField: e }, t);
                              case c.QJ.PARAGRAPH:
                                  return (0, i.jsx)(h.jn, { formField: e }, t);
                              case c.QJ.MULTIPLE_CHOICE:
                                  return (0, i.jsx)(b.QH, { formField: e }, t);
                          }
                      })(e, t)
                    : (function (e, t) {
                          switch (e.field_type) {
                              case c.QJ.TERMS:
                                  return (0, i.jsx)(m.QC, { formField: e }, t);
                              case c.QJ.TEXT_INPUT:
                                  return (0, i.jsx)(f.YJ, { formField: e }, t);
                              case c.QJ.PARAGRAPH:
                                  return (0, i.jsx)(u.jn, { formField: e }, t);
                              case c.QJ.MULTIPLE_CHOICE:
                                  return (0, i.jsx)(d.QH, { formField: e }, t);
                          }
                      })(e, t)
            )
        ]
    });
};
