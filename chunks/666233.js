n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    a = n(594174),
    o = n(246364),
    s = n(489813),
    c = n(186078),
    d = n(73880),
    u = n(196345),
    m = n(707592),
    x = n(388032);
let h = function (e) {
    let { guildId: t, formFields: n, user: h, showRequirements: j = !0 } = e;
    return null == (0, l.e7)([a.default], () => (null != h ? h : a.default.getCurrentUser()))
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  j &&
                      (0, r.jsx)(s.Ih, {
                          icon: i.b7C,
                          text: x.NW.string(x.t.v2z4c3),
                          meetsRequirement: !0
                      }),
                  n.map((e, t) =>
                      (function (e, t) {
                          switch (e.field_type) {
                              case o.QJ.TERMS:
                                  return (0, r.jsx)(u.QC, { formField: e }, t);
                              case o.QJ.TEXT_INPUT:
                                  return (0, r.jsx)(m.YJ, { formField: e }, t);
                              case o.QJ.PARAGRAPH:
                                  return (0, r.jsx)(d.jn, { formField: e }, t);
                              case o.QJ.MULTIPLE_CHOICE:
                                  return (0, r.jsx)(c.QH, { formField: e }, t);
                          }
                      })(e, t)
                  )
              ]
          });
};
