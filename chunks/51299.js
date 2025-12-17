a.d(e, { default: () => h }), a(953529);
var t = a(54381);
a(473749);
var i = a(512722),
    l = a.n(i),
    o = a(793030),
    c = a(481060),
    s = a(99690),
    p = a(23551),
    r = a(122021),
    d = a(388032),
    u = a(564433);
function m(n) {
    let { onComplete: e, excludedPlatformTypes: a, includedPlatformTypes: i } = n,
        l = (0, r.fq)();
    return (0, t.jsx)("div", {
        className: u.connectionsContainer,
        children: l
            .filter((n) => !(null == a ? void 0 : a.has(n.type)) && (null == i || i.has(n.type)))
            .map((n) =>
                (0, t.jsx)(
                    p.Z,
                    {
                        type: n.type,
                        className: u.accountBtn,
                        innerClassName: u.accountBtnInner,
                        onConnect: () => e(n.type),
                    },
                    n.type,
                ),
            ),
    });
}
function x(n) {
    let { integrations: e, onCompleteApplication: a } = n;
    if (null == e || null == a) return null;
    let i = e.filter((n) => {
        var e;
        return (null == (e = n.application) ? void 0 : e.roleConnectionsVerificationUrl) != null;
    });
    return 0 === i.length
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      color: "interactive-text-default",
                      className: u.applicationsHeader,
                      children: d.intl.string(d.t.PHjkRE),
                  }),
                  (0, t.jsx)("div", {
                      className: u.applicationsContainer,
                      children: i.map((n) => {
                          let e = n.application;
                          l()(null != e, "application is null");
                          let i = null == e ? void 0 : e.bot;
                          return (
                              l()(null != i, "bot is null"),
                              (0, t.jsxs)(
                                  c.P3F,
                                  {
                                      onClick: () => a(e.id),
                                      className: u.application,
                                      children: [
                                          (0, t.jsx)(s.Z, {
                                              user: i,
                                              className: u.applicationIcon,
                                          }),
                                          (0, t.jsxs)("div", {
                                              className: u.applicationNameContainer,
                                              children: [
                                                  (0, t.jsx)(c.Heading, {
                                                      variant: "heading-sm/semibold",
                                                      className: u.applicationNameText,
                                                      children: e.name,
                                                  }),
                                                  null != e.description && e.description.length > 0
                                                      ? (0, t.jsx)(c.Text, {
                                                            variant: "text-xs/normal",
                                                            color: "text-default",
                                                            className: u.applicationNameText,
                                                            children: e.description,
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
        transitionState: e,
        onComplete: a,
        onClose: i,
        excludedPlatformTypes: l,
        includedPlatformTypes: c,
        integrations: s,
        onCompleteApplication: p,
    } = n;
    return (0, t.jsxs)(o.Modal, {
        title: d.intl.string(d.t.syl6HS),
        transitionState: e,
        onClose: i,
        actions: [],
        children: [
            (0, t.jsx)(m, {
                onComplete: function (n) {
                    a(n), i();
                },
                excludedPlatformTypes: l,
                includedPlatformTypes: c,
            }),
            (0, t.jsx)(x, {
                integrations: s,
                onCompleteApplication:
                    null != p
                        ? function (n) {
                              null == p || p(n), i();
                          }
                        : void 0,
            }),
        ],
    });
}
