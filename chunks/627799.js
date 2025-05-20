n.d(t, { Z: () => d }), n(539854);
var r = n(255367);
n(73800);
var i = n(243814),
    a = n(993365),
    o = n(481060),
    s = n(63063),
    l = n(981631),
    c = n(388032),
    u = n(398032);
function d(e) {
    let t,
        { accountScopes: n } = e,
        a = [];
    return (n.includes(i.x.SDK_SOCIAL_LAYER)
        ? ((t = c.intl.format(c.t.DfBeUl, { learnMoreURL: s.Z.getArticleURL(l.BhN.SOCIAL_LAYER_CONNECTIONS) })),
          a.push(
              {
                  icon: o.iFz,
                  text: c.intl.formatToPlainString(c.t.WNKzo6, { maxFriends: l.L4X })
              },
              {
                  icon: o.mrm,
                  text: c.intl.string(c.t.j7peBg)
              },
              {
                  icon: o.iWm,
                  text: c.intl.string(c.t['feD3+v'])
              },
              {
                  icon: o.ewm,
                  text: c.intl.string(c.t.YFFVMz)
              }
          ))
        : n.includes(i.x.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = c.intl.format(c.t.DfBeUl, { learnMoreURL: s.Z.getArticleURL(l.BhN.SOCIAL_LAYER_CONNECTIONS) })),
          a.push(
              {
                  icon: o.iFz,
                  text: c.intl.formatToPlainString(c.t.WNKzo6, { maxFriends: l.L4X })
              },
              {
                  icon: o.iWm,
                  text: c.intl.string(c.t['feD3+v'])
              },
              {
                  icon: o.ewm,
                  text: c.intl.string(c.t.YFFVMz)
              }
          )),
    0 === a.length)
        ? null
        : (0, r.jsxs)('div', {
              className: u.applicationEducation,
              children: [
                  null != t
                      ? (0, r.jsx)(o.X6q, {
                            variant: 'heading-sm/normal',
                            className: u.sectionLabel,
                            children: t
                        })
                      : null,
                  a.map((e, t) => {
                      let { icon: n, text: i } = e;
                      return (0, r.jsx)(
                          f,
                          {
                              icon: n,
                              text: i
                          },
                          t
                      );
                  })
              ]
          });
}
function f(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)('div', {
        className: u.entry,
        children: [
            (0, r.jsx)(t, {
                className: u.entryIcon,
                color: 'currentColor'
            }),
            (0, r.jsx)(a.x, {
                variant: 'text-md/normal',
                className: u.entryText,
                children: n
            })
        ]
    });
}
