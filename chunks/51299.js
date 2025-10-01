a.d(t, { default: () => h }), a(953529);
var i = a(951288);
a(647438);
var e = a(512722),
    l = a.n(e),
    o = a(793030),
    c = a(481060),
    s = a(99690),
    r = a(23551),
    p = a(122021),
    d = a(388032),
    u = a(122048);
function m(n) {
    let { onComplete: t, excludedPlatformTypes: a, includedPlatformTypes: e } = n,
        l = (0, p.fq)();
    return (0, i.jsx)("div", {
        className: u.connectionsContainer,
        children: l
            .filter((n) => !(null == a ? void 0 : a.has(n.type)) && (null == e || e.has(n.type)))
            .map((n) =>
                (0, i.jsx)(
                    r.Z,
                    {
                        type: n.type,
                        className: u.accountBtn,
                        innerClassName: u.accountBtnInner,
                        onConnect: () => t(n.type),
                    },
                    n.type,
                ),
            ),
    });
}
function x(n) {
    let { integrations: t, onCompleteApplication: a } = n;
    if (null == t || null == a) return null;
    let e = t.filter((n) => {
        var t;
        return (null == (t = n.application) ? void 0 : t.roleConnectionsVerificationUrl) != null;
    });
    return 0 === e.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      color: "interactive-normal",
                      className: u.applicationsHeader,
                      children: d.intl.string(d.t.PHjkRE),
                  }),
                  (0, i.jsx)("div", {
                      className: u.applicationsContainer,
                      children: e.map((n) => {
                          let t = n.application;
                          l()(null != t, "application is null");
                          let e = null == t ? void 0 : t.bot;
                          return (
                              l()(null != e, "bot is null"),
                              (0, i.jsxs)(
                                  c.P3F,
                                  {
                                      onClick: () => a(t.id),
                                      className: u.application,
                                      children: [
                                          (0, i.jsx)(s.Z, {
                                              user: e,
                                              className: u.applicationIcon,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: u.applicationNameContainer,
                                              children: [
                                                  (0, i.jsx)(c.X6q, {
                                                      variant: "heading-sm/semibold",
                                                      className: u.applicationNameText,
                                                      children: t.name,
                                                  }),
                                                  null != t.description && t.description.length > 0
                                                      ? (0, i.jsx)(c.Text, {
                                                            variant: "text-xs/normal",
                                                            color: "header-secondary",
                                                            className: u.applicationNameText,
                                                            children: t.description,
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      ],
                                  },
                                  n.id,
                              )
                          );
                      }),
                  }),
              ],
          });
}
function h(n) {
    let {
        transitionState: t,
        onComplete: a,
        onClose: e,
        excludedPlatformTypes: l,
        includedPlatformTypes: c,
        integrations: s,
        onCompleteApplication: r,
    } = n;
    return (0, i.jsxs)(o.Modal, {
        title: d.intl.string(d.t.syl6HR),
        transitionState: t,
        onClose: e,
        actions: [],
        children: [
            (0, i.jsx)(m, {
                onComplete: function (n) {
                    a(n), e();
                },
                excludedPlatformTypes: l,
                includedPlatformTypes: c,
            }),
            (0, i.jsx)(x, {
                integrations: s,
                onCompleteApplication:
                    null != r
                        ? function (n) {
                              null == r || r(n), e();
                          }
                        : void 0,
            }),
        ],
    });
}
