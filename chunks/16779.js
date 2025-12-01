n.d(t, {
    Rg: () => _,
    Xh: () => p,
    ho: () => f,
});
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(841784),
    o = n(297781),
    s = n(371991),
    l = n(561308),
    c = n(232174),
    u = n(981631);
let d = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, a.Z)(e)
        ? t
            ? i.iWm
            : i.jje
        : e.type === u.IIU.LISTENING
          ? i.RZG
          : e.type === u.IIU.WATCHING
            ? i.ARS
            : i.iWm;
};
function f(e) {
    var t, n, a;
    let { activity: l } = e,
        u = null != (a = null == (t = l.timestamps) ? void 0 : t.start) ? a : l.created_at;
    if (null == u || (0, c.Z)(l)) return null;
    let f = d(l);
    return (0, r.jsxs)(o.m7, {
        children: [
            (0, r.jsx)(f, {
                size: "xxs",
                color: i.TVs.colors.TEXT_FEEDBACK_POSITIVE,
            }),
            (0, r.jsx)(s.x3, {
                entry: {
                    start: u,
                    end: null == (n = l.timestamps) ? void 0 : n.end,
                },
                textColor: "text-feedback-positive",
                bold: !0,
            }),
        ],
    });
}
function p(e) {
    let { activity: t } = e;
    if ((0, a.Z)(t) || null == t.party) return null;
    let n = (0, l.bT)(t.state, t.party);
    return null == n
        ? null
        : (0, r.jsx)(o.ej, {
              Icon: i.BFJ,
              text: n,
          });
}
function _(e) {
    var t;
    let { activity: n } = e,
        a = (0, l.ap)(null == (t = n.assets) ? void 0 : t.large_text);
    return null == a
        ? null
        : (0, r.jsx)(o.ej, {
              Icon: i.sVe,
              text: a,
          });
}
