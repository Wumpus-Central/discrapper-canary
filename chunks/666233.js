n.d(t, { Z: () => v });
var a = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    l = n(594174),
    o = n(63568),
    s = n(246364),
    c = n(489813),
    d = n(186078),
    u = n(73880),
    m = n(196345),
    x = n(707592),
    h = n(476770),
    _ = n(483760),
    p = n(465588),
    f = n(644929),
    C = n(814960),
    j = n(388032);
let v = function (e) {
    let { guildId: t, formFields: n, user: v, showRequirements: b = !0 } = e,
        g = (0, i.e7)([l.default], () => (null != v ? v : l.default.getCurrentUser())),
        T = (0, o.jS)(t, 'DisabledFormRenderer');
    if (null == g) return null;
    let I = T ? h.Ih : c.Ih;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            b &&
                (0, a.jsx)(I, {
                    icon: r.b7C,
                    text: j.intl.string(j.t.v2z4c3),
                    meetsRequirement: !0
                }),
            n.map((e, t) =>
                T
                    ? (function (e, t) {
                          switch (e.field_type) {
                              case s.QJ.TERMS:
                                  return (0, a.jsx)(f.QC, { formField: e }, t);
                              case s.QJ.TEXT_INPUT:
                                  return (0, a.jsx)(C.YJ, { formField: e }, t);
                              case s.QJ.PARAGRAPH:
                                  return (0, a.jsx)(p.jn, { formField: e }, t);
                              case s.QJ.MULTIPLE_CHOICE:
                                  return (0, a.jsx)(_.QH, { formField: e }, t);
                          }
                      })(e, t)
                    : (function (e, t) {
                          switch (e.field_type) {
                              case s.QJ.TERMS:
                                  return (0, a.jsx)(m.QC, { formField: e }, t);
                              case s.QJ.TEXT_INPUT:
                                  return (0, a.jsx)(x.YJ, { formField: e }, t);
                              case s.QJ.PARAGRAPH:
                                  return (0, a.jsx)(u.jn, { formField: e }, t);
                              case s.QJ.MULTIPLE_CHOICE:
                                  return (0, a.jsx)(d.QH, { formField: e }, t);
                          }
                      })(e, t)
            )
        ]
    });
};
