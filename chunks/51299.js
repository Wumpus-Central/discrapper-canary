t.d(e, { default: () => h });
var a = t(200651);
t(192379);
var i = t(120356),
    l = t.n(i),
    o = t(512722),
    c = t.n(o),
    r = t(481060),
    s = t(99690),
    p = t(23551),
    d = t(122021),
    u = t(388032),
    m = t(638323);
function _(n) {
    let { onComplete: e, excludedPlatformTypes: t, includedPlatformTypes: i } = n,
        l = (0, d.fq)();
    return (0, a.jsx)('div', {
        className: m.connectionsContainer,
        children: l
            .filter((n) => !(null == t ? void 0 : t.has(n.type)) && (null == i || i.has(n.type)))
            .map((n) =>
                (0, a.jsx)(
                    p.Z,
                    {
                        type: n.type,
                        className: m.accountBtn,
                        innerClassName: m.accountBtnInner,
                        onConnect: () => e(n.type)
                    },
                    n.type
                )
            )
    });
}
function x(n) {
    let { integrations: e, onCompleteApplication: t } = n;
    if (null == e || null == t) return null;
    let i = e.filter((n) => {
        var e;
        return (null === (e = n.application) || void 0 === e ? void 0 : e.roleConnectionsVerificationUrl) != null;
    });
    return 0 === i.length
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(r.Text, {
                      variant: 'eyebrow',
                      color: 'interactive-normal',
                      className: m.applicationsHeader,
                      children: u.intl.string(u.t.PHjkRE)
                  }),
                  (0, a.jsx)('div', {
                      className: m.applicationsContainer,
                      children: i.map((n) => {
                          let e = n.application;
                          c()(null != e, 'application is null');
                          let i = null == e ? void 0 : e.bot;
                          return (
                              c()(null != i, 'bot is null'),
                              (0, a.jsxs)(
                                  r.P3F,
                                  {
                                      onClick: () => t(e.id),
                                      className: m.application,
                                      children: [
                                          (0, a.jsx)(s.Z, {
                                              user: i,
                                              className: m.applicationIcon
                                          }),
                                          (0, a.jsxs)('div', {
                                              className: m.applicationNameContainer,
                                              children: [
                                                  (0, a.jsx)(r.X6q, {
                                                      variant: 'heading-sm/semibold',
                                                      className: m.applicationNameText,
                                                      children: e.name
                                                  }),
                                                  null != e.description && e.description.length > 0
                                                      ? (0, a.jsx)(r.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-secondary',
                                                            className: m.applicationNameText,
                                                            children: e.description
                                                        })
                                                      : null
                                              ]
                                          })
                                      ]
                                  },
                                  n.id
                              )
                          );
                      })
                  })
              ]
          });
}
function h(n) {
    let { transitionState: e, onComplete: t, onClose: i, excludedPlatformTypes: o, includedPlatformTypes: c, integrations: s, onCompleteApplication: p } = n;
    return (0, a.jsx)(r.Y0X, {
        'aria-label': u.intl.string(u.t.syl6HR),
        size: r.CgR.SMALL,
        transitionState: e,
        className: l()(m.container),
        fullscreenOnMobile: !1,
        children: (0, a.jsxs)(r.hzk, {
            children: [
                (0, a.jsxs)('div', {
                    className: m.header,
                    children: [
                        (0, a.jsx)(r.X6q, {
                            className: m.title,
                            variant: 'heading-md/bold',
                            children: u.intl.string(u.t.syl6HR)
                        }),
                        (0, a.jsx)(r.olH, { onClick: i })
                    ]
                }),
                (0, a.jsx)(_, {
                    onComplete: function (n) {
                        t(n), i();
                    },
                    excludedPlatformTypes: o,
                    includedPlatformTypes: c
                }),
                (0, a.jsx)(x, {
                    integrations: s,
                    onCompleteApplication:
                        null != p
                            ? function (n) {
                                  null == p || p(n), i();
                              }
                            : void 0
                })
            ]
        })
    });
}
