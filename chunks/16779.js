n.d(t, {
    Rg: () => p,
    Xh: () => _,
    ho: () => f
}),
    n(627341);
var i = n(200651);
n(192379);
var r = n(278074),
    a = n(481060),
    s = n(841784),
    o = n(297781),
    l = n(371991),
    u = n(561308),
    c = n(232174),
    d = n(981631);
function f(e) {
    var t, n, u;
    let { activity: f } = e,
        _ = null !== (u = null === (t = f.timestamps) || void 0 === t ? void 0 : t.start) && void 0 !== u ? u : f.created_at;
    if (null == _ || (0, c.Z)(f)) return null;
    let p = (0, r.EQ)(f)
        .when(s.Z, () => a.jje)
        .with({ type: d.IIU.LISTENING }, () => a.aXf)
        .with({ type: d.IIU.WATCHING }, () => a.ARS)
        .otherwise(() => a.iWm);
    return (0, i.jsxs)(o.m7, {
        children: [
            (0, i.jsx)(p, {
                size: 'xxs',
                color: a.TVs.colors.TEXT_POSITIVE
            }),
            (0, i.jsx)(l.x3, {
                entry: {
                    start: _,
                    end: null === (n = f.timestamps) || void 0 === n ? void 0 : n.end
                },
                textColor: 'text-positive',
                bold: !0
            })
        ]
    });
}
function _(e) {
    let { activity: t } = e;
    if ((0, s.Z)(t) || null == t.party) return null;
    let n = (0, u.bT)(t.state, t.party);
    return null == n
        ? null
        : (0, i.jsx)(o.ej, {
              Icon: a.BFJ,
              text: n
          });
}
function p(e) {
    var t;
    let { activity: n } = e,
        r = (0, u.ap)(null === (t = n.assets) || void 0 === t ? void 0 : t.large_text);
    return null == r
        ? null
        : (0, i.jsx)(o.ej, {
              Icon: a.sVe,
              text: r
          });
}
