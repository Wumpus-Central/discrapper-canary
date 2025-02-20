n.d(t, {
    Rg: () => _,
    Xh: () => p,
    ho: () => f
}),
    n(627341);
var r = n(200651);
n(192379);
var i = n(278074),
    o = n(481060),
    a = n(841784),
    s = n(297781),
    l = n(371991),
    c = n(561308),
    u = n(232174),
    d = n(981631);
function f(e) {
    var t, n, c;
    let { activity: f } = e,
        p = null !== (c = null === (t = f.timestamps) || void 0 === t ? void 0 : t.start) && void 0 !== c ? c : f.created_at;
    if (null == p || (0, u.Z)(f)) return null;
    let _ = (0, i.EQ)(f)
        .when(a.Z, () => o.jje)
        .with({ type: d.IIU.LISTENING }, () => o.aXf)
        .with({ type: d.IIU.WATCHING }, () => o.ARS)
        .otherwise(() => o.iWm);
    return (0, r.jsxs)(s.m7, {
        children: [
            (0, r.jsx)(_, {
                size: 'xxs',
                color: o.TVs.colors.TEXT_POSITIVE
            }),
            (0, r.jsx)(l.x3, {
                entry: {
                    start: p,
                    end: null === (n = f.timestamps) || void 0 === n ? void 0 : n.end
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
              Icon: o.BFJ,
              text: n
          });
}
function _(e) {
    var t;
    let { activity: n } = e,
        i = (0, c.ap)(null === (t = n.assets) || void 0 === t ? void 0 : t.large_text);
    return null == i
        ? null
        : (0, r.jsx)(s.ej, {
              Icon: o.sVe,
              text: i
          });
}
