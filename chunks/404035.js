"use strict";
n.d(t, { A: () => p }), n(321073);
var r = n(627968);
n(64700);
var i = n(179771),
    s = n(834730),
    a = n(214947),
    o = n(845798),
    l = n(687966),
    u = n(625903),
    d = n(534514),
    c = n(62447),
    _ = n(975571),
    f = n(652215),
    E = n(985018),
    h = n(645650);
function p(e) {
    let t,
        { application: n, accountScopes: s } = e,
        p = [],
        g = (0, c.A)(n);
    return (s.includes(i.F.SDK_SOCIAL_LAYER)
        ? ((t = g
              ? E.intl.format(E.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: _.A.getArticleURL(f.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : E.intl.format(E.t.DfBeUq, { learnMoreURL: _.A.getArticleURL(f.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          p.push(
              {
                  icon: a.$,
                  text: g
                      ? E.intl.formatToPlainString(E.t.z9peav, { maxFriends: f.$4X })
                      : E.intl.formatToPlainString(E.t.WNKzo9, { maxFriends: f.$4X }),
              },
              { icon: o.S, text: g ? E.intl.string(E.t.daY6xj) : E.intl.string(E.t.j7peBh) },
              { icon: l._, text: g ? E.intl.string(E.t["/bdaNN"]) : E.intl.string(E.t["feD3+i"]) },
              { icon: u.Z, text: g ? E.intl.string(E.t.mSqazC) : E.intl.string(E.t.YFFVM1) },
          ))
        : s.includes(i.F.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = g
              ? E.intl.format(E.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: _.A.getArticleURL(f.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : E.intl.format(E.t.DfBeUq, { learnMoreURL: _.A.getArticleURL(f.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          p.push(
              {
                  icon: a.$,
                  text: g
                      ? E.intl.formatToPlainString(E.t.z9peav, { maxFriends: f.$4X })
                      : E.intl.formatToPlainString(E.t.WNKzo9, { maxFriends: f.$4X }),
              },
              { icon: l._, text: g ? E.intl.string(E.t["/bdaNN"]) : E.intl.string(E.t["feD3+i"]) },
              { icon: u.Z, text: g ? E.intl.string(E.t.mSqazC) : E.intl.string(E.t.YFFVM1) },
          )),
    0 === p.length)
        ? null
        : (0, r.jsxs)("div", {
              className: h.b9,
              children: [
                  null != t ? (0, r.jsx)(d.D, { variant: "heading-sm/normal", className: h.a9, children: t }) : null,
                  p.map((e, t) => {
                      let { icon: n, text: i } = e;
                      return (0, r.jsx)(m, { icon: n, text: i }, t);
                  }),
              ],
          });
}
function m(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: h.f_,
        children: [
            (0, r.jsx)(t, { className: h.u7, color: "currentColor" }),
            (0, r.jsx)(s.E, { variant: "text-md/normal", className: h.u0, children: n }),
        ],
    });
}
