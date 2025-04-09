n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    i = n(594174),
    s = n(63568),
    o = n(246364),
    c = n(489813),
    d = n(186078),
    u = n(73880),
    m = n(196345),
    x = n(707592),
    h = n(476770),
    j = n(483760),
    b = n(465588),
    f = n(644929),
    N = n(814960),
    C = n(388032);
let p = function (e) {
    let { guildId: t, formFields: n, user: p, showRequirements: v = !0 } = e,
        g = (0, l.e7)([i.default], () => (null != p ? p : i.default.getCurrentUser())),
        _ = (0, s.jS)(t, 'DisabledFormRenderer');
    if (null == g) return null;
    let T = _ ? h.Ih : c.Ih;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            v &&
                (0, r.jsx)(T, {
                    icon: a.b7C,
                    text: C.NW.string(C.t.v2z4c3),
                    meetsRequirement: !0
                }),
            n.map((e, t) =>
                _
                    ? (function (e, t) {
                          switch (e.field_type) {
                              case o.QJ.TERMS:
                                  return (0, r.jsx)(f.QC, { formField: e }, t);
                              case o.QJ.TEXT_INPUT:
                                  return (0, r.jsx)(N.YJ, { formField: e }, t);
                              case o.QJ.PARAGRAPH:
                                  return (0, r.jsx)(b.jn, { formField: e }, t);
                              case o.QJ.MULTIPLE_CHOICE:
                                  return (0, r.jsx)(j.QH, { formField: e }, t);
                          }
                      })(e, t)
                    : (function (e, t) {
                          switch (e.field_type) {
                              case o.QJ.TERMS:
                                  return (0, r.jsx)(m.QC, { formField: e }, t);
                              case o.QJ.TEXT_INPUT:
                                  return (0, r.jsx)(x.YJ, { formField: e }, t);
                              case o.QJ.PARAGRAPH:
                                  return (0, r.jsx)(u.jn, { formField: e }, t);
                              case o.QJ.MULTIPLE_CHOICE:
                                  return (0, r.jsx)(d.QH, { formField: e }, t);
                          }
                      })(e, t)
            )
        ]
    });
};
