n.d(t, {
    Rg: () => h,
    Xh: () => p,
    ho: () => _
});
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(456100),
    a = n(841784),
    s = n(297781),
    l = n(371991),
    c = n(561308),
    u = n(232174),
    d = n(981631);
let f = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, a.Z)(e) ? (t ? i.iWm : i.jje) : e.type === d.IIU.LISTENING ? i.RZG : e.type === d.IIU.WATCHING ? i.ARS : i.iWm;
};
function _(e) {
    var t, n, a;
    let { activity: c } = e,
        { enabled: d } = o.c.useExperiment({ location: 'UserProfileActivityBadges' }, { autoTrackExposure: !0 }),
        _ = null != (a = null == (t = c.timestamps) ? void 0 : t.start) ? a : c.created_at;
    if (null == _ || (0, u.Z)(c)) return null;
    let p = f(c, d);
    return (0, r.jsxs)(s.m7, {
        children: [
            (0, r.jsx)(p, {
                size: 'xxs',
                color: i.TVs.colors.TEXT_POSITIVE
            }),
            (0, r.jsx)(l.x3, {
                entry: {
                    start: _,
                    end: null == (n = c.timestamps) ? void 0 : n.end
                },
                textColor: 'text-positive',
                bold: !0
            })
        ]
    });
}
function p(e) {
    let { activity: t } = e;
    if ((0, a.Z)(t) || null == t.party) return null;
    let n = (0, c.bT)(t.state, t.party);
    return null == n
        ? null
        : (0, r.jsx)(s.ej, {
              Icon: i.BFJ,
              text: n
          });
}
function h(e) {
    var t;
    let { activity: n } = e,
        o = (0, c.ap)(null == (t = n.assets) ? void 0 : t.large_text);
    return null == o
        ? null
        : (0, r.jsx)(s.ej, {
              Icon: i.sVe,
              text: o
          });
}
