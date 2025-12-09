n.d(t, {
    Rg: () => m,
    Xh: () => _,
    ho: () => p,
});
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(841784),
    o = n(368176),
    s = n(297781),
    l = n(371991),
    c = n(561308),
    u = n(232174),
    d = n(981631);
let f = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, a.Z)(e)
        ? t
            ? i.iWm
            : i.jje
        : e.type === d.IIU.LISTENING
          ? i.RZG
          : e.type === d.IIU.WATCHING
            ? i.ARS
            : i.iWm;
};
function p(e) {
    var t, n, a;
    let { activity: c } = e,
        { enabled: d } = o.Q.useConfig({ location: "profile_timestamp_badge" }),
        p = null != (a = null == (t = c.timestamps) ? void 0 : t.start) ? a : c.created_at;
    if (null == p || (0, u.Z)(c)) return null;
    let _ = f(c);
    return (0, r.jsxs)(s.m7, {
        children: [
            (0, r.jsx)(_, {
                size: "xxs",
                color: d ? i.TVs.colors.ICON_FEEDBACK_POSITIVE : i.TVs.colors.TEXT_FEEDBACK_POSITIVE,
            }),
            (0, r.jsx)(l.x3, {
                entry: {
                    start: p,
                    end: null == (n = c.timestamps) ? void 0 : n.end,
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
