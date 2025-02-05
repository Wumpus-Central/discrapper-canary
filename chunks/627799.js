n.d(t, { Z: () => d }), n(653041);
var i = n(200651);
n(192379);
var r = n(243814),
    a = n(993365),
    s = n(481060),
    o = n(63063),
    l = n(981631),
    u = n(388032),
    c = n(908453);
function d(e) {
    let t,
        { accountScopes: n } = e,
        a = [];
    return (n.includes(r.x.SDK_SOCIAL_LAYER) &&
        ((t = u.intl.format(u.t.DfBeUl, { learnMoreURL: o.Z.getArticleURL(l.BhN.SOCIAL_LAYER_CONNECTIONS) })),
        a.push(
            {
                icon: s.iFz,
                text: u.intl.formatToPlainString(u.t.WNKzo6, { maxFriends: l.L4X })
            },
            {
                icon: s.mrm,
                text: u.intl.string(u.t.j7peBg)
            },
            {
                icon: s.iWm,
                text: u.intl.string(u.t['feD3+v'])
            },
            {
                icon: s.ewm,
                text: u.intl.string(u.t.YFFVMz)
            }
        )),
    0 === a.length)
        ? null
        : (0, i.jsxs)('div', {
              className: c.applicationEducation,
              children: [
                  null != t
                      ? (0, i.jsx)(s.X6q, {
                            variant: 'heading-sm/normal',
                            className: c.sectionLabel,
                            children: t
                        })
                      : null,
                  a.map((e, t) => {
                      let { icon: n, text: r } = e;
                      return (0, i.jsx)(
                          f,
                          {
                              icon: n,
                              text: r
                          },
                          t
                      );
                  })
              ]
          });
}
function f(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)('div', {
        className: c.entry,
        children: [
            (0, i.jsx)(t, {
                className: c.entryIcon,
                color: 'currentColor'
            }),
            (0, i.jsx)(a.x, {
                variant: 'text-md/normal',
                className: c.entryText,
                children: n
            })
        ]
    });
}
