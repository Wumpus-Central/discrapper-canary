r.d(n, {
    Rg: function () {
        return m;
    },
    Xh: function () {
        return p;
    },
    ho: function () {
        return h;
    }
});
var i = r(627341);
var a = r(200651);
r(192379);
var s = r(278074),
    o = r(481060),
    l = r(841784),
    u = r(297781),
    c = r(371991),
    d = r(561308),
    f = r(232174),
    _ = r(981631);
function h(e) {
    var n, r, i;
    let { activity: d } = e,
        h = null !== (i = null === (n = d.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== i ? i : d.created_at;
    if (null == h || (0, f.Z)(d)) return null;
    let p = (0, s.EQ)(d)
        .when(l.Z, () => o.AppsIcon)
        .with({ type: _.IIU.LISTENING }, () => o.RecordPlayerIcon)
        .with({ type: _.IIU.WATCHING }, () => o.TvIcon)
        .otherwise(() => o.GameControllerIcon);
    return (0, a.jsxs)(u.m7, {
        children: [
            (0, a.jsx)(p, {
                size: 'xxs',
                color: o.tokens.colors.TEXT_POSITIVE
            }),
            (0, a.jsx)(c.x3, {
                entry: {
                    start: h,
                    end: null === (r = d.timestamps) || void 0 === r ? void 0 : r.end
                },
                textColor: 'text-positive',
                bold: !0
            })
        ]
    });
}
function p(e) {
    let { activity: n } = e;
    if ((0, l.Z)(n) || null == n.party) return null;
    let r = (0, d.bT)(n.state, n.party);
    return null == r
        ? null
        : (0, a.jsx)(u.ej, {
              Icon: o.GroupIcon,
              text: r
          });
}
function m(e) {
    var n;
    let { activity: r } = e,
        i = (0, d.ap)(null === (n = r.assets) || void 0 === n ? void 0 : n.large_text);
    return null == i
        ? null
        : (0, a.jsx)(u.ej, {
              Icon: o.TopicsIcon,
              text: i
          });
}
