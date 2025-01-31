n.d(t, { Z: () => C });
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
    _ = n(707592),
    x = n(476770),
    f = n(483760),
    h = n(465588),
    p = n(644929),
    b = n(814960),
    g = n(388032);
let C = function (e) {
    let { guildId: t, formFields: n, user: C, showRequirements: v = !0 } = e,
        j = (0, i.e7)([l.default], () => (null != C ? C : l.default.getCurrentUser())),
        I = (0, o.jS)(t, 'DisabledFormRenderer');
    if (null == j) return null;
    let T = I ? x.Ih : c.Ih;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            v &&
                (0, a.jsx)(T, {
                    icon: r.b7C,
                    text: g.intl.string(g.t.v2z4c3),
                    meetsRequirement: !0
                }),
            n.map((e, t) =>
                I
                    ? (function (e, t) {
                          switch (e.field_type) {
                              case s.QJ.TERMS:
                                  return (0, a.jsx)(p.QC, { formField: e }, t);
                              case s.QJ.TEXT_INPUT:
                                  return (0, a.jsx)(b.YJ, { formField: e }, t);
                              case s.QJ.PARAGRAPH:
                                  return (0, a.jsx)(h.jn, { formField: e }, t);
                              case s.QJ.MULTIPLE_CHOICE:
                                  return (0, a.jsx)(f.QH, { formField: e }, t);
                          }
                      })(e, t)
                    : (function (e, t) {
                          switch (e.field_type) {
                              case s.QJ.TERMS:
                                  return (0, a.jsx)(m.QC, { formField: e }, t);
                              case s.QJ.TEXT_INPUT:
                                  return (0, a.jsx)(_.YJ, { formField: e }, t);
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
