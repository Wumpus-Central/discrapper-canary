n.d(t, { Z: () => f }), n(539854);
var r = n(54381);
n(473749);
var i = n(243814),
    a = n(993365),
    o = n(481060),
    s = n(589414),
    l = n(63063),
    c = n(981631),
    u = n(388032),
    d = n(411479);
function f(e) {
    let t,
        { application: n, accountScopes: a } = e,
        f = [],
        _ = (0, s.Z)(n);
    return (a.includes(i.x.SDK_SOCIAL_LAYER)
        ? ((t = _
              ? u.intl.format(u.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: l.Z.getArticleURL(c.BhN.SOCIAL_LAYER_CONNECTIONS),
                })
              : u.intl.format(u.t.DfBeUq, { learnMoreURL: l.Z.getArticleURL(c.BhN.SOCIAL_LAYER_CONNECTIONS) })),
          f.push(
              {
                  icon: o.iFz,
                  text: _
                      ? u.intl.formatToPlainString(u.t.z9peav, { maxFriends: c.L4X })
                      : u.intl.formatToPlainString(u.t.WNKzo9, { maxFriends: c.L4X }),
              },
              {
                  icon: o.mrm,
                  text: _ ? u.intl.string(u.t.daY6xj) : u.intl.string(u.t.j7peBh),
              },
              {
                  icon: o.iWm,
                  text: _ ? u.intl.string(u.t["/bdaNN"]) : u.intl.string(u.t["feD3+i"]),
              },
              {
                  icon: o.ewm,
                  text: _ ? u.intl.string(u.t.mSqazC) : u.intl.string(u.t.YFFVM1),
              },
          ))
        : a.includes(i.x.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = _
              ? u.intl.format(u.t.GxjwZM, {
                    applicationName: n.name,
                    learnMoreURL: l.Z.getArticleURL(c.BhN.SOCIAL_LAYER_CONNECTIONS),
                })
              : u.intl.format(u.t.DfBeUq, { learnMoreURL: l.Z.getArticleURL(c.BhN.SOCIAL_LAYER_CONNECTIONS) })),
          f.push(
              {
                  icon: o.iFz,
                  text: _
                      ? u.intl.formatToPlainString(u.t.z9peav, { maxFriends: c.L4X })
                      : u.intl.formatToPlainString(u.t.WNKzo9, { maxFriends: c.L4X }),
              },
              {
                  icon: o.iWm,
                  text: _ ? u.intl.string(u.t["/bdaNN"]) : u.intl.string(u.t["feD3+i"]),
              },
              {
                  icon: o.ewm,
                  text: _ ? u.intl.string(u.t.mSqazC) : u.intl.string(u.t.YFFVM1),
              },
          )),
    0 === f.length)
        ? null
        : (0, r.jsxs)("div", {
              className: d.applicationEducation,
              children: [
                  null != t
                      ? (0, r.jsx)(o.Heading, {
                            variant: "heading-sm/normal",
                            className: d.sectionLabel,
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
        className: d.entry,
        children: [
            (0, r.jsx)(t, {
                className: d.entryIcon,
                color: "currentColor",
            }),
            (0, r.jsx)(a.x, {
                variant: "text-md/normal",
                className: d.entryText,
                children: n,
            }),
        ],
    });
}
