i.d(t, { default: () => _ }), i(953529);
var a = i(54381);
i(473749);
var e = i(512722),
    l = i.n(e),
    o = i(793030),
    c = i(481060),
    s = i(99690),
    p = i(23551),
    r = i(122021),
    d = i(388032),
    u = i(122048);
function m(n) {
    let { onComplete: t, excludedPlatformTypes: i, includedPlatformTypes: e } = n,
        l = (0, r.fq)();
    return (0, a.jsx)("div", {
        className: u.connectionsContainer,
        children: l
            .filter((n) => !(null == i ? void 0 : i.has(n.type)) && (null == e || e.has(n.type)))
            .map((n) =>
                (0, a.jsx)(
                    p.Z,
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
    let { integrations: t, onCompleteApplication: i } = n;
    if (null == t || null == i) return null;
    let e = t.filter((n) => {
        var t;
        return (null == (t = n.application) ? void 0 : t.roleConnectionsVerificationUrl) != null;
    });
    return 0 === e.length
        ? null
        : (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      color: "interactive-normal",
                      className: u.applicationsHeader,
                      children: d.intl.string(d.t.PHjkRE),
                  }),
                  (0, a.jsx)("div", {
                      className: u.applicationsContainer,
                      children: e.map((n) => {
                          let t = n.application;
                          l()(null != t, "application is null");
                          let e = null == t ? void 0 : t.bot;
                          return (
                              l()(null != e, "bot is null"),
                              (0, a.jsxs)(
                                  c.P3F,
                                  {
                                      onClick: () => i(t.id),
                                      className: u.application,
                                      children: [
                                          (0, a.jsx)(s.Z, {
                                              user: e,
                                              className: u.applicationIcon,
                                          }),
                                          (0, a.jsxs)("div", {
                                              className: u.applicationNameContainer,
                                              children: [
                                                  (0, a.jsx)(c.Heading, {
                                                      variant: "heading-sm/semibold",
                                                      className: u.applicationNameText,
                                                      children: t.name,
                                                  }),
                                                  null != t.description && t.description.length > 0
                                                      ? (0, a.jsx)(c.Text, {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
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
function _(n) {
    let {
        transitionState: t,
        onComplete: i,
        onClose: e,
        excludedPlatformTypes: l,
        includedPlatformTypes: c,
        integrations: s,
        onCompleteApplication: p,
    } = n;
    return (0, a.jsxs)(o.Modal, {
        title: d.intl.string(d.t.syl6HS),
        transitionState: t,
        onClose: e,
        actions: [],
        children: [
            (0, a.jsx)(m, {
                onComplete: function (n) {
                    i(n), e();
                },
                excludedPlatformTypes: l,
                includedPlatformTypes: c,
            }),
            (0, a.jsx)(x, {
                integrations: s,
                onCompleteApplication:
                    null != p
                        ? function (n) {
                              null == p || p(n), e();
                          }
                        : void 0,
            }),
        ],
    });
}
