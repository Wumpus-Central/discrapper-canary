n.d(t, {
    Rg: () => h,
    Xh: () => p,
    ho: () => _
}),
    n(627341);
var r = n(200651);
n(192379);
var i = n(278074),
    o = n(481060),
    a = n(456100),
    s = n(841784),
    l = n(297781),
    c = n(371991),
    u = n(561308),
    d = n(232174),
    f = n(981631);
function _(e) {
    var t, n, u;
    let { activity: _ } = e,
        p = null !== (u = null === (t = _.timestamps) || void 0 === t ? void 0 : t.start) && void 0 !== u ? u : _.created_at,
        { enabled: h } = a.c.useExperiment({ location: 'UserProfileActivityBadges' }, { autoTrackExposure: !0 });
    if (null == p || (0, d.Z)(_)) return null;
    let m = (0, i.EQ)(_)
        .when(s.Z, () => (h ? o.iWm : o.jje))
        .with({ type: f.IIU.LISTENING }, () => o.RZG)
        .with({ type: f.IIU.WATCHING }, () => o.ARS)
        .otherwise(() => o.iWm);
    return (0, r.jsxs)(l.m7, {
        children: [
            (0, r.jsx)(m, {
                size: 'xxs',
                color: o.TVs.colors.TEXT_POSITIVE
            }),
            (0, r.jsx)(c.x3, {
                entry: {
                    start: p,
                    end: null === (n = _.timestamps) || void 0 === n ? void 0 : n.end
                },
                textColor: 'text-positive',
                bold: !0
            })
        ]
    });
}
function p(e) {
    let { activity: t } = e;
    if ((0, s.Z)(t) || null == t.party) return null;
    let n = (0, u.bT)(t.state, t.party);
    return null == n
        ? null
        : (0, r.jsx)(l.ej, {
              Icon: o.BFJ,
              text: n
          });
}
function h(e) {
    var t;
    let { activity: n } = e,
        i = (0, u.ap)(null === (t = n.assets) || void 0 === t ? void 0 : t.large_text);
    return null == i
        ? null
        : (0, r.jsx)(l.ej, {
              Icon: o.sVe,
              text: i
          });
}
