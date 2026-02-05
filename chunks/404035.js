"use strict";
n.d(t, { A: () => _ }), n(321073);
var r = n(627968);
n(64700);
var i = n(179771),
    a = n(571356),
    s = n(397927),
    o = n(62447),
    l = n(975571),
    u = n(652215),
    c = n(985018),
    d = n(968363);
function _(e) {
    let t,
        { application: n, accountScopes: a } = e,
        _ = [],
        p = (0, o.A)(n);
    return (a.includes(i.F.SDK_SOCIAL_LAYER)
        ? ((t = p
              ? c.intl.format(c.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: l.A.getArticleURL(u.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : c.intl.format(c.t.DfBeUq, { learnMoreURL: l.A.getArticleURL(u.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          _.push(
              {
                  icon: s.$yI,
                  text: p
                      ? c.intl.formatToPlainString(c.t.z9peav, { maxFriends: u.$4X })
                      : c.intl.formatToPlainString(c.t.WNKzo9, { maxFriends: u.$4X }),
              },
              { icon: s.SYr, text: p ? c.intl.string(c.t.daY6xj) : c.intl.string(c.t.j7peBh) },
              { icon: s._xR, text: p ? c.intl.string(c.t["/bdaNN"]) : c.intl.string(c.t["feD3+i"]) },
              { icon: s.Zes, text: p ? c.intl.string(c.t.mSqazC) : c.intl.string(c.t.YFFVM1) },
          ))
        : a.includes(i.F.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = p
              ? c.intl.format(c.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: l.A.getArticleURL(u.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : c.intl.format(c.t.DfBeUq, { learnMoreURL: l.A.getArticleURL(u.MVz.SOCIAL_LAYER_CONNECTIONS) })),
          _.push(
              {
                  icon: s.$yI,
                  text: p
                      ? c.intl.formatToPlainString(c.t.z9peav, { maxFriends: u.$4X })
                      : c.intl.formatToPlainString(c.t.WNKzo9, { maxFriends: u.$4X }),
              },
              { icon: s._xR, text: p ? c.intl.string(c.t["/bdaNN"]) : c.intl.string(c.t["feD3+i"]) },
              { icon: s.Zes, text: p ? c.intl.string(c.t.mSqazC) : c.intl.string(c.t.YFFVM1) },
          )),
    0 === _.length)
        ? null
        : (0, r.jsxs)("div", {
              className: d.b9,
              children: [
                  null != t
                      ? (0, r.jsx)(s.Heading, { variant: "heading-sm/normal", className: d.a9, children: t })
                      : null,
                  _.map((e, t) => {
                      let { icon: n, text: i } = e;
                      return (0, r.jsx)(f, { icon: n, text: i }, t);
                  }),
              ],
          });
}
function f(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: d.f_,
        children: [
            (0, r.jsx)(t, { className: d.u7, color: "currentColor" }),
            (0, r.jsx)(a.E, { variant: "text-md/normal", className: d.u0, children: n }),
        ],
    });
}
