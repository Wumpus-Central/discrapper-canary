(i.d(e, { default: () => x }), i(953529));
var a = i(255367);
i(73800);
var t = i(512722),
    l = i.n(t),
    o = i(481060),
    c = i(99690),
    s = i(23551),
    r = i(122021),
    p = i(388032),
    d = i(625276);
function u(n) {
    let { onComplete: e, excludedPlatformTypes: i, includedPlatformTypes: t } = n,
        l = (0, r.fq)();
    return (0, a.jsx)('div', {
        className: d.connectionsContainer,
        children: l
            .filter((n) => !(null == i ? void 0 : i.has(n.type)) && (null == t || t.has(n.type)))
            .map((n) =>
                (0, a.jsx)(
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
    let { integrations: e, onCompleteApplication: i } = n;
    if (null == e || null == i) return null;
    let t = e.filter((n) => {
        var e;
        return (null == (e = n.application) ? void 0 : e.roleConnectionsVerificationUrl) != null;
    });
    return 0 === t.length
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(o.Text, {
                      variant: 'text-sm/medium',
                      color: 'interactive-normal',
                      className: d.applicationsHeader,
                      children: p.intl.string(p.t.PHjkRE)
                  }),
                  (0, a.jsx)('div', {
                      className: d.applicationsContainer,
                      children: t.map((n) => {
                          let e = n.application;
                          l()(null != e, 'application is null');
                          let t = null == e ? void 0 : e.bot;
                          return (
                              l()(null != t, 'bot is null'),
                              (0, a.jsxs)(
                                  o.P3F,
                                  {
                                      onClick: () => i(e.id),
                                      className: d.application,
                                      children: [
                                          (0, a.jsx)(c.Z, {
                                              user: t,
                                              className: d.applicationIcon
                                          }),
                                          (0, a.jsxs)('div', {
                                              className: d.applicationNameContainer,
                                              children: [
                                                  (0, a.jsx)(o.X6q, {
                                                      variant: 'heading-sm/semibold',
                                                      className: d.applicationNameText,
                                                      children: e.name
                                                  }),
                                                  null != e.description && e.description.length > 0
                                                      ? (0, a.jsx)(o.Text, {
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
function x(n) {
    let { transitionState: e, onComplete: i, onClose: t, excludedPlatformTypes: l, includedPlatformTypes: c, integrations: s, onCompleteApplication: r } = n;
    return (0, a.jsx)(o.Y0X, {
        'aria-label': p.intl.string(p.t.syl6HR),
        size: o.CgR.SMALL,
        transitionState: e,
        className: d.container,
        fullscreenOnMobile: !1,
        parentComponent: 'ConnectionsGridModal',
        children: (0, a.jsxs)(o.hzk, {
            children: [
                (0, a.jsxs)('div', {
                    className: d.header,
                    children: [
                        (0, a.jsx)(o.X6q, {
                            className: d.title,
                            variant: 'text-lg/semibold',
                            children: p.intl.string(p.t.syl6HR)
                        }),
                        (0, a.jsx)(o.olH, { onClick: t })
                    ]
                }),
                (0, a.jsx)(u, {
                    onComplete: function (n) {
                        (i(n), t());
                    },
                    excludedPlatformTypes: l,
                    includedPlatformTypes: c
                }),
                (0, a.jsx)(m, {
                    integrations: s,
                    onCompleteApplication:
                        null != r
                            ? function (n) {
                                  (null == r || r(n), t());
                              }
                            : void 0
                })
            ]
        })
    });
}
