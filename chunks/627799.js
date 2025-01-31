n.d(t, { Z: () => c }), n(653041);
var i = n(200651);
n(192379);
var r = n(243814),
    a = n(993365),
    s = n(481060),
    o = n(981631),
    l = n(388032),
    u = n(908453);
function c(e) {
    let t,
        { accountScopes: n } = e,
        a = [];
    return (n.includes(r.x.SDK_SOCIAL_LAYER) &&
        ((t = l.intl.string(l.t.ex4sMT)),
        a.push(
            {
                icon: s.iFz,
                text: l.intl.formatToPlainString(l.t.WNKzo6, { maxFriends: o.L4X })
            },
            {
                icon: s.mrm,
                text: l.intl.string(l.t.j7peBg)
            },
            {
                icon: s.iWm,
                text: l.intl.string(l.t['feD3+v'])
            },
            {
                icon: s.ewm,
                text: l.intl.string(l.t.YFFVMz)
            }
        )),
    0 === a.length)
        ? null
        : (0, i.jsxs)('div', {
              className: u.applicationEducation,
              children: [
                  null != t && t.length > 0
                      ? (0, i.jsx)(s.X6q, {
                            variant: 'heading-sm/normal',
                            className: u.sectionLabel,
                            children: t
                        })
                      : null,
                  a.map((e, t) => {
                      let { icon: n, text: r } = e;
                      return (0, i.jsx)(
                          d,
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
function d(e) {
    let { icon: t, text: n } = e;
    return (0, i.jsxs)('div', {
        className: u.entry,
        children: [
            (0, i.jsx)(t, {
                className: u.entryIcon,
                color: 'currentColor'
            }),
            (0, i.jsx)(a.x, {
                variant: 'text-md/normal',
                className: u.entryText,
                children: n
            })
        ]
    });
}
