n.d(t, { Z: () => b });
var l = n(54381);
n(473749);
var r = n(442837),
    a = n(481060),
    i = n(594174),
    s = n(246364),
    o = n(489813),
    c = n(186078),
    d = n(73880),
    u = n(196345),
    m = n(707592),
    x = n(388032);
let b = function (e) {
    let { guildId: t, formFields: n, user: b, showRequirements: j = !0 } = e;
    return null == (0, r.e7)([i.default], () => (null != b ? b : i.default.getCurrentUser()))
        ? null
        : (0, l.jsxs)(l.Fragment, {
              children: [
                  j &&
                      (0, l.jsx)(o.Ih, {
                          icon: a.b7C,
                          text: x.intl.string(x.t.v2z4c1),
                          meetsRequirement: !0,
                      }),
                  n.map((e, t) =>
                      (function (e, t) {
                          switch (e.field_type) {
                              case s.QJ.TERMS:
                                  return (0, l.jsx)(u.QC, { formField: e }, t);
                              case s.QJ.TEXT_INPUT:
                                  return (0, l.jsx)(m.YJ, { formField: e }, t);
                              case s.QJ.PARAGRAPH:
                                  return (0, l.jsx)(d.jn, { formField: e }, t);
                              case s.QJ.MULTIPLE_CHOICE:
                                  return (0, l.jsx)(c.QH, { formField: e }, t);
                          }
                      })(e, t),
                  ),
              ],
          });
};
