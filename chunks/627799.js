r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(653041);
var a = r(200651);
r(192379);
var s = r(243814),
    o = r(993365),
    l = r(481060),
    u = r(981631),
    c = r(388032),
    d = r(908453);
function f(e) {
    let n,
        { accountScopes: r } = e,
        i = [];
    return (r.includes(s.x.SDK_SOCIAL_LAYER) &&
        ((n = c.intl.string(c.t.ex4sMT)),
        i.push(
            {
                icon: l.FriendsIcon,
                text: c.intl.formatToPlainString(c.t.WNKzo6, { maxFriends: u.L4X })
            },
            {
                icon: l.ChatSmileIcon,
                text: c.intl.string(c.t.j7peBg)
            },
            {
                icon: l.GameControllerIcon,
                text: c.intl.string(c.t['feD3+v'])
            },
            {
                icon: l.SettingsIcon,
                text: c.intl.string(c.t.YFFVMz)
            }
        )),
    0 === i.length)
        ? null
        : (0, a.jsxs)('div', {
              className: d.applicationEducation,
              children: [
                  null != n && n.length > 0
                      ? (0, a.jsx)(l.Heading, {
                            variant: 'heading-sm/normal',
                            className: d.sectionLabel,
                            children: n
                        })
                      : null,
                  i.map((e, n) => {
                      let { icon: r, text: i } = e;
                      return (0, a.jsx)(
                          _,
                          {
                              icon: r,
                              text: i
                          },
                          n
                      );
                  })
              ]
          });
}
function _(e) {
    let { icon: n, text: r } = e;
    return (0, a.jsxs)('div', {
        className: d.entry,
        children: [
            (0, a.jsx)(n, {
                className: d.entryIcon,
                color: 'currentColor'
            }),
            (0, a.jsx)(o.x, {
                variant: 'text-md/normal',
                className: d.entryText,
                children: r
            })
        ]
    });
}
