n.d(t, {
    Rg: () => m,
    Xh: () => _,
    ho: () => p,
});
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(841784),
    o = n(201812),
    s = n(297781),
    l = n(371991),
    c = n(561308),
    u = n(232174),
    d = n(981631);
let f = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return t
        ? i.wGF
        : (0, a.Z)(e)
          ? n
              ? i.iWm
              : i.jje
          : e.type === d.IIU.LISTENING
            ? i.RZG
            : e.type === d.IIU.WATCHING
              ? i.ARS
              : i.iWm;
};
function p(e) {
    var t, n, a, c, d;
    let { activity: p } = e,
        _ = null != (c = null == (t = p.timestamps) ? void 0 : t.start) ? c : p.created_at,
        { now: m } = (0, o.t)();
    if (null == _ || (0, u.Z)(p)) return null;
    let h = null == (n = p.timestamps) ? void 0 : n.end,
        g = null != (d = null == (a = p.timestamps) ? void 0 : a.isCountDown) && d,
        E = f(p, g && null != h && h > m);
    return (0, r.jsxs)(s.m7, {
        children: [
            (0, r.jsx)(E, {
                size: "xxs",
                color: i.TVs.colors.TEXT_FEEDBACK_POSITIVE,
            }),
            (0, r.jsx)(l.x, {
                entry: {
                    start: _,
                    end: h,
                    isCountDown: g,
                },
                textColor: "text-feedback-positive",
                bold: !0,
            }),
        ],
    });
}
function _(e) {
    let { activity: t } = e;
    if ((0, a.Z)(t) || null == t.party) return null;
    let n = (0, c.bT)(t.state, t.party);
    return null == n
        ? null
        : (0, r.jsx)(s.ej, {
              Icon: i.BFJ,
              text: n,
          });
}
function m(e) {
    var t;
    let { activity: n } = e,
        a = (0, c.ap)(null == (t = n.assets) ? void 0 : t.large_text);
    return null == a
        ? null
        : (0, r.jsx)(s.ej, {
              Icon: i.sVe,
              text: a,
          });
}
