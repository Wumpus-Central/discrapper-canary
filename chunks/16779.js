r.d(n, {
    Rg: function () {
        return m;
    },
    Xh: function () {
        return _;
    },
    ho: function () {
        return h;
    }
});
var i = r(627341);
var a = r(200651);
r(192379);
var o = r(278074),
    s = r(481060),
    l = r(841784),
    u = r(297781),
    c = r(371991),
    d = r(561308),
    f = r(232174),
    p = r(981631);
function h(e) {
    var n, r, i;
    let { activity: d } = e,
        h = null !== (i = null === (n = d.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== i ? i : d.created_at;
    if (null == h || (0, f.Z)(d)) return null;
    let _ = (0, o.EQ)(d)
        .when(l.Z, () => s.AppsIcon)
        .with({ type: p.IIU.LISTENING }, () => s.RecordPlayerIcon)
        .with({ type: p.IIU.WATCHING }, () => s.TvIcon)
        .otherwise(() => s.GameControllerIcon);
    return (0, a.jsxs)(u.m7, {
        children: [
            (0, a.jsx)(_, {
                size: 'xxs',
                color: s.tokens.colors.TEXT_POSITIVE
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
function _(e) {
    let { activity: n } = e;
    if ((0, l.Z)(n) || null == n.party) return null;
    let r = (0, d.bT)(n.state, n.party);
    return null == r
        ? null
        : (0, a.jsx)(u.ej, {
              Icon: s.GroupIcon,
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
              Icon: s.TopicsIcon,
              text: i
          });
}
