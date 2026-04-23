"use strict";
n.d(t, { A: () => T }), n(323874), n(14289), n(35956);
var r = n(627968);
n(64700);
var i = n(179771),
    s = n(834730),
    a = n(998445),
    o = n(11023),
    l = n(173936),
    u = n(194261),
    c = n(406810),
    d = n(430392),
    _ = n(231483),
    f = n(224750),
    p = n(20015),
    h = n(661191),
    E = n(510783),
    m = n(647053),
    g = n(652215),
    A = n(985018),
    I = n(348418);
function T(e) {
    let t,
        { application: n, scopes: s, redirectUri: T, approximateGuildCount: y, isEmbeddedFlow: N, disclosures: v } = e,
        C = new Date(h.default.extractTimestamp(n.id)),
        O = (0, m.i4)(s),
        R = (0, p.n)(n, g.gfo.EMBEDDED);
    if (null != T && !R && !N)
        try {
            let e = new URL(T);
            t = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            t = null;
        }
    return (0, r.jsxs)("div", {
        className: I.B_,
        children: [
            null != t ? (0, r.jsx)(S, { icon: l.q, text: A.intl.format(A.t["5k5OKD"], { origin: t }) }) : null,
            (0, r.jsx)(S, { icon: u.X, text: (0, E.w)(n) }),
            (0, r.jsx)(S, { icon: c.O, text: A.intl.formatToPlainString(A.t["+1bjc8"], { date: C }) }),
            s.includes(i.F.BOT) && null != y
                ? (0, r.jsx)(S, { icon: d.C, text: A.intl.formatToPlainString(A.t.UHGHSP, { guildCount: y }) })
                : null,
            (0, r.jsx)(S, { icon: _.l, text: O }),
            null != v
                ? v.map((e) => {
                      let t = (0, f.wI)(e),
                          n = ((e) => {
                              switch (e) {
                                  case f.yW.IP_LOCATION:
                                      return a.L;
                                  case f.yW.DISPLAYS_ADVERTISEMENTS:
                                      return o.J;
                                  default:
                                      return null;
                              }
                          })(e);
                      return null != n && null != t ? (0, r.jsx)(S, { icon: n, text: t }) : null;
                  })
                : null,
        ],
    });
}
function S(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: I.f_,
        children: [
            (0, r.jsx)(t, { className: I.u7, color: "currentColor" }),
            (0, r.jsx)(s.E, { variant: "text-xs/normal", className: I.z9, children: n }),
        ],
    });
}
