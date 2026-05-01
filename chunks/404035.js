"use strict";
n.d(t, { A: () => f }), n(321073);
var i = n(627968);
n(64700);
var r = n(179771),
    s = n(834730),
    a = n(214947),
    o = n(845798),
    l = n(687966),
    _ = n(625903),
    d = n(534514),
    u = n(62447),
    c = n(975571),
    E = n(652215),
    h = n(985018),
    m = n(645650);
function f(e) {
    let t,
        { application: n, accountScopes: s } = e,
        f = [],
        A = (0, u.A)(n);
    return (s.includes(r.F.SDK_SOCIAL_LAYER)
        ? ((t = A
              ? h.intl.format(h.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: c.A.getArticleURL(E.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : h.intl.format(h.t.DfBeUq, { learnMoreURL: c.A.getArticleURL(E.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          f.push(
              {
                  icon: a.$,
                  text: A
                      ? h.intl.formatToPlainString(h.t.z9peav, { maxFriends: E.$4X })
                      : h.intl.formatToPlainString(h.t.WNKzo9, { maxFriends: E.$4X }),
              },
              { icon: o.S, text: A ? h.intl.string(h.t.daY6xj) : h.intl.string(h.t.j7peBh) },
              { icon: l._, text: A ? h.intl.string(h.t["/bdaNN"]) : h.intl.string(h.t["feD3+i"]) },
              { icon: _.Z, text: A ? h.intl.string(h.t.mSqazC) : h.intl.string(h.t.YFFVM1) },
          ))
        : s.includes(r.F.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = A
              ? h.intl.format(h.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: c.A.getArticleURL(E.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : h.intl.format(h.t.DfBeUq, { learnMoreURL: c.A.getArticleURL(E.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          f.push(
              {
                  icon: a.$,
                  text: A
                      ? h.intl.formatToPlainString(h.t.z9peav, { maxFriends: E.$4X })
                      : h.intl.formatToPlainString(h.t.WNKzo9, { maxFriends: E.$4X }),
              },
              { icon: l._, text: A ? h.intl.string(h.t["/bdaNN"]) : h.intl.string(h.t["feD3+i"]) },
              { icon: _.Z, text: A ? h.intl.string(h.t.mSqazC) : h.intl.string(h.t.YFFVM1) },
          )),
    0 === f.length)
        ? null
        : (0, i.jsxs)("div", {
              className: m.b9,
              children: [
                  null != t ? (0, i.jsx)(d.D, { variant: "heading-sm/normal", className: m.a9, children: t }) : null,
                  f.map((e, t) => {
                      let { icon: n, text: r } = e;
                      return (0, i.jsx)(g, { icon: n, text: r }, t);
                  }),
              ],
          });
}
function g(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)("div", {
        className: m.f_,
        children: [
            (0, i.jsx)(t, { className: m.u7, color: "currentColor" }),
            (0, i.jsx)(s.E, { variant: "text-md/normal", className: m.u0, children: n }),
        ],
    });
}
