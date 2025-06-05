a.d(e, { default: () => h }), a(953529);
var i = a(255367);
a(73800);
var t = a(512722),
    l = a.n(t),
    o = a(481060),
    c = a(99690),
    s = a(23551),
    r = a(122021),
    p = a(388032),
    d = a(625276);
function u(n) {
    let { onComplete: e, excludedPlatformTypes: a, includedPlatformTypes: t } = n,
        l = (0, r.fq)();
    return (0, i.jsx)('div', {
        className: d.connectionsContainer,
        children: l
            .filter((n) => !(null == a ? void 0 : a.has(n.type)) && (null == t || t.has(n.type)))
            .map((n) =>
                (0, i.jsx)(
                    s.Z,
                    {
                        type: n.type,
                        className: d.accountBtn,
                        innerClassName: d.accountBtnInner,
                        onConnect: () => e(n.type)
                    },
                    n.type
                )
            )
    });
}
function m(n) {
    let { integrations: e, onCompleteApplication: a } = n;
    if (null == e || null == a) return null;
    let t = e.filter((n) => {
        var e;
        return (null == (e = n.application) ? void 0 : e.roleConnectionsVerificationUrl) != null;
    });
    return 0 === t.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(o.Text, {
                      variant: 'eyebrow',
                      color: 'interactive-normal',
                      className: d.applicationsHeader,
                      children: p.intl.string(p.t.PHjkRE)
                  }),
                  (0, i.jsx)('div', {
                      className: d.applicationsContainer,
                      children: t.map((n) => {
                          let e = n.application;
                          l()(null != e, 'application is null');
                          let t = null == e ? void 0 : e.bot;
                          return (
                              l()(null != t, 'bot is null'),
                              (0, i.jsxs)(
                                  o.P3F,
                                  {
                                      onClick: () => a(e.id),
                                      className: d.application,
                                      children: [
                                          (0, i.jsx)(c.Z, {
                                              user: t,
                                              className: d.applicationIcon
                                          }),
                                          (0, i.jsxs)('div', {
                                              className: d.applicationNameContainer,
                                              children: [
                                                  (0, i.jsx)(o.X6q, {
                                                      variant: 'heading-sm/semibold',
                                                      className: d.applicationNameText,
                                                      children: e.name
                                                  }),
                                                  null != e.description && e.description.length > 0
                                                      ? (0, i.jsx)(o.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'header-secondary',
                                                            className: d.applicationNameText,
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
    let { transitionState: e, onComplete: a, onClose: t, excludedPlatformTypes: l, includedPlatformTypes: c, integrations: s, onCompleteApplication: r } = n;
    return (0, i.jsx)(o.Y0X, {
        'aria-label': p.intl.string(p.t.syl6HR),
        size: o.CgR.SMALL,
        transitionState: e,
        className: d.container,
        fullscreenOnMobile: !1,
        parentComponent: 'ConnectionsGridModal',
        children: (0, i.jsxs)(o.hzk, {
            children: [
                (0, i.jsxs)('div', {
                    className: d.header,
                    children: [
                        (0, i.jsx)(o.X6q, {
                            className: d.title,
                            variant: 'heading-md/bold',
                            children: p.intl.string(p.t.syl6HR)
                        }),
                        (0, i.jsx)(o.olH, { onClick: t })
                    ]
                }),
                (0, i.jsx)(u, {
                    onComplete: function (n) {
                        a(n), t();
                    },
                    excludedPlatformTypes: l,
                    includedPlatformTypes: c
                }),
                (0, i.jsx)(m, {
                    integrations: s,
                    onCompleteApplication:
                        null != r
                            ? function (n) {
                                  null == r || r(n), t();
                              }
                            : void 0
                })
            ]
        })
    });
}
