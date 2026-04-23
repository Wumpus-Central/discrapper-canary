"use strict";
n.d(t, { A: () => T }), n(323874), n(14289), n(35956);
var i = n(627968);
n(64700);
var r = n(179771),
    s = n(834730),
    a = n(998445),
    o = n(11023),
    l = n(173936),
    d = n(194261),
    _ = n(406810),
    u = n(430392),
    c = n(231483),
    E = n(224750),
    h = n(20015),
    m = n(935208),
    f = n(62447),
    g = n(985018),
    p = n(647053),
    A = n(652215),
    I = n(348418);
function T(e) {
    let t,
        { application: n, scopes: s, redirectUri: T, approximateGuildCount: N, isEmbeddedFlow: C, disclosures: R } = e,
        O = new Date(m.default.extractTimestamp(n.id)),
        y = (0, p.i4)(s),
        v = (0, h.n)(n, A.gfo.EMBEDDED);
    if (null != T && !v && !C)
        try {
            let e = new URL(T);
            t = null != e.host && e.host.length > 0 ? e.origin : e.href;
        } catch (e) {
            t = null;
        }
    return (0, i.jsxs)("div", {
        className: I.B_,
        children: [
            null != t ? (0, i.jsx)(S, { icon: l.q, text: g.intl.format(g.t["5k5OKD"], { origin: t }) }) : null,
            (0, i.jsx)(S, {
                icon: d.X,
                text: (function (e) {
                    let t = (0, f.t)(e);
                    if (null != e.privacy_policy_url && null != e.terms_of_service_url) {
                        let n = t ? g.t.yVfotv : g.t.rxlyKL;
                        return g.intl.format(n, {
                            application: e.name,
                            privacyPolicyURL: e.privacy_policy_url,
                            termsOfServiceURL: e.terms_of_service_url,
                        });
                    }
                    if (null != e.privacy_policy_url) {
                        let n = t ? g.t.pYVSah : g.t.TBvmM2;
                        return g.intl.format(n, { application: e.name, privacyPolicyURL: e.privacy_policy_url });
                    }
                    if (null != e.terms_of_service_url) {
                        let n = t ? g.t.nBLOp5 : g.t["q0T/Q1"];
                        return g.intl.format(n, { application: e.name, termsOfServiceURL: e.terms_of_service_url });
                    }
                    let n = t ? g.t["8LemYv"] : g.t["3Ywek3"];
                    return g.intl.formatToPlainString(n, { application: e.name });
                })(n),
            }),
            (0, i.jsx)(S, { icon: _.O, text: g.intl.formatToPlainString(g.t["+1bjc8"], { date: O }) }),
            s.includes(r.F.BOT) && null != N
                ? (0, i.jsx)(S, { icon: u.C, text: g.intl.formatToPlainString(g.t.UHGHSP, { guildCount: N }) })
                : null,
            (0, i.jsx)(S, { icon: c.l, text: y }),
            null != R
                ? R.map((e) => {
                      let t = (0, E.wI)(e),
                          n = ((e) => {
                              switch (e) {
                                  case E.yW.IP_LOCATION:
                                      return a.L;
                                  case E.yW.DISPLAYS_ADVERTISEMENTS:
                                      return o.J;
                                  default:
                                      return null;
                              }
                          })(e);
                      return null != n && null != t ? (0, i.jsx)(S, { icon: n, text: t }) : null;
                  })
                : null,
        ],
    });
}
function S(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: I.f_,
        children: [
            (0, i.jsx)(t, { className: I.u7, color: "currentColor" }),
            (0, i.jsx)(s.E, { variant: "text-xs/normal", className: I.z9, children: n }),
        ],
    });
}
