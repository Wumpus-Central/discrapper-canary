n.d(t, { O: () => u });
var a = n(200651);
n(192379);
var i = n(481060),
    l = n(447003),
    s = n(687352),
    c = n(237583),
    o = n(823379),
    r = n(619915),
    d = n(243247);
function u(e) {
    let { channel: t, users: n } = e,
        u = (0, r.ZP)(t);
    return (0, a.jsxs)('div', {
        className: d.channelInfo,
        children: [
            (0, l.Z)(t)
                ? (0, a.jsx)(i.gjC, {
                      size: 'md',
                      color: 'currentColor',
                      className: d.speakerIcon
                  })
                : (0, a.jsx)(i.gj8, {
                      size: 'md',
                      color: 'currentColor',
                      className: d.speakerIcon
                  }),
            (0, a.jsx)('div', {
                className: d.channelName,
                children: t.name
            }),
            u.length > 0
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)('div', { className: d.divider }),
                          (0, a.jsx)(s.Z, {
                              embeddedApps: u,
                              className: d.channelItemActivities
                          }),
                          (0, a.jsx)('div', {
                              className: d.channelActivitiesText,
                              children: u
                                  .map((e) => {
                                      var t;
                                      return null === (t = e.application) || void 0 === t ? void 0 : t.name;
                                  })
                                  .filter(o.lm)
                                  .join(', ')
                          })
                      ]
                  })
                : null,
            (0, a.jsx)('div', {
                className: d.voiceUserContainer,
                children: (0, a.jsx)(c.Z, {
                    users: n,
                    max: 4
                })
            })
        ]
    });
}
