n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var a = n(442837),
    i = n(481060),
    o = n(594174),
    l = n(63568),
    s = n(246364),
    c = n(489813),
    d = n(186078),
    u = n(73880),
    m = n(196345),
    p = n(707592),
    f = n(476770),
    x = n(483760),
    h = n(465588),
    b = n(644929),
    j = n(814960),
    _ = n(388032);
let g = function (e) {
    let { guildId: t, formFields: n, user: g, showRequirements: v = !0 } = e,
        C = (0, a.e7)([o.default], () => (null != g ? g : o.default.getCurrentUser())),
        y = (0, l.jS)(t, 'DisabledFormRenderer');
    if (null == C) return null;
    let N = y ? f.Ih : c.Ih;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            v &&
                (0, r.jsx)(N, {
                    icon: i.b7C,
                    text: _.NW.string(_.t.v2z4c3),
                    meetsRequirement: !0
                }),
            n.map((e, t) =>
                y
                    ? (function (e, t) {
                          switch (e.field_type) {
                              case s.QJ.TERMS:
                                  return (0, r.jsx)(b.QC, { formField: e }, t);
                              case s.QJ.TEXT_INPUT:
                                  return (0, r.jsx)(j.YJ, { formField: e }, t);
                              case s.QJ.PARAGRAPH:
                                  return (0, r.jsx)(h.jn, { formField: e }, t);
                              case s.QJ.MULTIPLE_CHOICE:
                                  return (0, r.jsx)(x.QH, { formField: e }, t);
                          }
                      })(e, t)
                    : (function (e, t) {
                          switch (e.field_type) {
                              case s.QJ.TERMS:
                                  return (0, r.jsx)(m.QC, { formField: e }, t);
                              case s.QJ.TEXT_INPUT:
                                  return (0, r.jsx)(p.YJ, { formField: e }, t);
                              case s.QJ.PARAGRAPH:
                                  return (0, r.jsx)(u.jn, { formField: e }, t);
                              case s.QJ.MULTIPLE_CHOICE:
                                  return (0, r.jsx)(d.QH, { formField: e }, t);
                          }
                      })(e, t)
            )
        ]
    });
};
