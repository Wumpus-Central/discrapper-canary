n.d(t, { Z: () => f }), n(539854);
var r = n(255367);
n(73800);
var i = n(243814),
    o = n(993365),
    a = n(481060),
    s = n(589414),
    l = n(63063),
    c = n(981631),
    u = n(388032),
    d = n(398032);
function f(e) {
    let t,
        { application: n, accountScopes: o } = e,
        f = [],
        p = (0, s.Z)(n);
    return (o.includes(i.x.SDK_SOCIAL_LAYER)
        ? ((t = p
              ? u.intl.format(u.t.GxjwZG, {
                    applicationName: n.name,
                    learnMoreURL: l.Z.getArticleURL(c.BhN.SOCIAL_LAYER_CONNECTIONS),
                })
              : u.intl.format(u.t.DfBeUl, { learnMoreURL: l.Z.getArticleURL(c.BhN.SOCIAL_LAYER_CONNECTIONS) })),
          f.push(
              {
                  icon: a.iFz,
                  text: p
                      ? u.intl.formatToPlainString(u.t.z9peam, { maxFriends: c.L4X })
                      : u.intl.formatToPlainString(u.t.WNKzo6, { maxFriends: c.L4X }),
              },
              {
                  icon: a.mrm,
                  text: p ? u.intl.string(u.t.daY6xs) : u.intl.string(u.t.j7peBg),
              },
              {
                  icon: a.iWm,
                  text: p ? u.intl.string(u.t["/bdaND"]) : u.intl.string(u.t["feD3+v"]),
              },
              {
                  icon: a.ewm,
                  text: p ? u.intl.string(u.t.mSqazM) : u.intl.string(u.t.YFFVMz),
              },
          ))
        : o.includes(i.x.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = p
              ? u.intl.format(u.t.GxjwZG, {
                    applicationName: n.name,
                    learnMoreURL: l.Z.getArticleURL(c.BhN.SOCIAL_LAYER_CONNECTIONS),
                })
              : u.intl.format(u.t.DfBeUl, { learnMoreURL: l.Z.getArticleURL(c.BhN.SOCIAL_LAYER_CONNECTIONS) })),
          f.push(
              {
                  icon: a.iFz,
                  text: p
                      ? u.intl.formatToPlainString(u.t.z9peam, { maxFriends: c.L4X })
                      : u.intl.formatToPlainString(u.t.WNKzo6, { maxFriends: c.L4X }),
              },
              {
                  icon: a.iWm,
                  text: p ? u.intl.string(u.t["/bdaND"]) : u.intl.string(u.t["feD3+v"]),
              },
              {
                  icon: a.ewm,
                  text: p ? u.intl.string(u.t.mSqazM) : u.intl.string(u.t.YFFVMz),
              },
          )),
    0 === f.length)
        ? null
        : (0, r.jsxs)("div", {
              className: d.applicationEducation,
              children: [
                  null != t
                      ? (0, r.jsx)(a.X6q, {
                            variant: "heading-sm/normal",
                            className: d.sectionLabel,
                            children: t,
                        })
                      : null,
                  f.map((e, t) => {
                      let { icon: n, text: i } = e;
                      return (0, r.jsx)(
                          _,
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
function _(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: d.entry,
        children: [
            (0, r.jsx)(t, {
                className: d.entryIcon,
                color: "currentColor",
            }),
            (0, r.jsx)(o.x, {
                variant: "text-md/normal",
                className: d.entryText,
                children: n,
            }),
        ],
    });
}
