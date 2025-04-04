n.d(t, { Z: () => d }), n(653041);
var r = n(200651);
n(192379);
var i = n(243814),
    o = n(993365),
    a = n(481060),
    s = n(63063),
    l = n(981631),
    c = n(388032),
    u = n(398032);
function d(e) {
    let t,
        { accountScopes: n } = e,
        o = [];
    return (n.includes(i.x.SDK_SOCIAL_LAYER)
        ? ((t = c.NW.format(c.t.DfBeUl, { learnMoreURL: s.Z.getArticleURL(l.BhN.SOCIAL_LAYER_CONNECTIONS) })),
          o.push(
              {
                  icon: a.iFz,
                  text: c.NW.formatToPlainString(c.t.WNKzo6, { maxFriends: l.L4X })
              },
              {
                  icon: a.mrm,
                  text: c.NW.string(c.t.j7peBg)
              },
              {
                  icon: a.iWm,
                  text: c.NW.string(c.t['feD3+v'])
              },
              {
                  icon: a.ewm,
                  text: c.NW.string(c.t.YFFVMz)
              }
          ))
        : n.includes(i.x.SDK_SOCIAL_LAYER_PRESENCE) &&
          ((t = c.NW.format(c.t.DfBeUl, { learnMoreURL: s.Z.getArticleURL(l.BhN.SOCIAL_LAYER_CONNECTIONS) })),
          o.push(
              {
                  icon: a.iFz,
                  text: c.NW.formatToPlainString(c.t.WNKzo6, { maxFriends: l.L4X })
              },
              {
                  icon: a.iWm,
                  text: c.NW.string(c.t['feD3+v'])
              },
              {
                  icon: a.ewm,
                  text: c.NW.string(c.t.YFFVMz)
              }
          )),
    0 === o.length)
        ? null
        : (0, r.jsxs)('div', {
              className: u.applicationEducation,
              children: [
                  null != t
                      ? (0, r.jsx)(a.X6q, {
                            variant: 'heading-sm/normal',
                            className: u.sectionLabel,
                            children: t
                        })
                      : null,
                  o.map((e, t) => {
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
            (0, r.jsx)(o.x, {
                variant: 'text-md/normal',
                className: u.entryText,
                children: n
            })
        ]
    });
}
