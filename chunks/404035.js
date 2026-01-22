n.d(t, {
    A: () => f,
}),
    n(321073);
var r = n(627968);
n(64700);
var i = n(179771),
    a = n(571356),
    s = n(397927),
    o = n(62447),
    l = n(975571),
    c = n(652215),
    u = n(985018),
    d = n(968363);

function f(e) {
    let t,
        { application: n, accountScopes: a } = e,
        f = [],
        _ = (0, o.A)(n);
    return (a.includes(i.F.SDK_SOCIAL_LAYER)
        ? ((t = _
              ? u.intl.format(u.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: l.A.getArticleURL(c.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : u.intl.format(u.t.DfBeUq, {
                    learnMoreURL: l.A.getArticleURL(c.MVz.SOCIAL_LAYER_CONNECTIONS),
                })),
          f.push(
              {
                  icon: s.$yI,
                  text: _
                      ? u.intl.formatToPlainString(u.t.z9peav, {
                            maxFriends: c.$4X,
                        })
                      : u.intl.formatToPlainString(u.t.WNKzo9, {
                            maxFriends: c.$4X,
                        }),
              },
              {
                  icon: s.SYr,
                  text: _ ? u.intl.string(u.t.daY6xj) : u.intl.string(u.t.j7peBh),
              },
              {
                  icon: s._xR,
                  text: _ ? u.intl.string(u.t["/bdaNN"]) : u.intl.string(u.t["feD3+i"]),
              },
              {
                  icon: s.Zes,
                  text: _ ? u.intl.string(u.t.mSqazC) : u.intl.string(u.t.YFFVM1),
              },
          ))
        : a.includes(i.F.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = _
              ? u.intl.format(u.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: l.A.getArticleURL(c.MVz.SOCIAL_LAYER_CONNECTIONS),
                })
              : u.intl.format(u.t.DfBeUq, {
                    learnMoreURL: l.A.getArticleURL(c.MVz.SOCIAL_LAYER_CONNECTIONS),
                })),
          f.push(
              {
                  icon: s.$yI,
                  text: _
                      ? u.intl.formatToPlainString(u.t.z9peav, {
                            maxFriends: c.$4X,
                        })
                      : u.intl.formatToPlainString(u.t.WNKzo9, {
                            maxFriends: c.$4X,
                        }),
              },
              {
                  icon: s._xR,
                  text: _ ? u.intl.string(u.t["/bdaNN"]) : u.intl.string(u.t["feD3+i"]),
              },
              {
                  icon: s.Zes,
                  text: _ ? u.intl.string(u.t.mSqazC) : u.intl.string(u.t.YFFVM1),
              },
          )),
    0 === f.length)
        ? null
        : (0, r.jsxs)("div", {
              className: d.b9,
              children: [
                  null != t
                      ? (0, r.jsx)(s.Heading, {
                            variant: "heading-sm/normal",
                            className: d.a9,
                            children: t,
                        })
                      : null,
                  f.map((e, t) => {
                      let { icon: n, text: i } = e;
                      return (0, r.jsx)(
                          p,
                          {
                              icon: n,
                              text: i,
                          },
                          t,
                      );
                  }),
              ],
          });
}

function p(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: d.f_,
        children: [
            (0, r.jsx)(t, {
                className: d.u7,
                color: "currentColor",
            }),
            (0, r.jsx)(a.E, {
                variant: "text-md/normal",
                className: d.u0,
                children: n,
            }),
        ],
    });
}
