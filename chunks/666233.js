n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var l = n(442837),
    i = n(481060),
    a = n(594174),
    s = n(246364),
    o = n(476770),
    c = n(483760),
    d = n(465588),
    u = n(644929),
    m = n(814960),
    x = n(388032);
let h = function (e) {
    let { guildId: t, formFields: n, user: h, showRequirements: j = !0 } = e;
    if (null == (0, l.e7)([a.default], () => (null != h ? h : a.default.getCurrentUser()))) return null;
    let b = o.Ih;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            j &&
                (0, r.jsx)(b, {
                    icon: i.b7C,
                    text: x.NW.string(x.t.v2z4c3),
                    meetsRequirement: !0
                }),
            n.map((e, t) =>
                (function (e, t) {
                    switch (e.field_type) {
                        case s.QJ.TERMS:
                            return (0, r.jsx)(u.QC, { formField: e }, t);
                        case s.QJ.TEXT_INPUT:
                            return (0, r.jsx)(m.YJ, { formField: e }, t);
                        case s.QJ.PARAGRAPH:
                            return (0, r.jsx)(d.jn, { formField: e }, t);
                        case s.QJ.MULTIPLE_CHOICE:
                            return (0, r.jsx)(c.QH, { formField: e }, t);
                    }
                })(e, t)
            )
        ]
    });
};
