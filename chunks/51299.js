e.d(t, { default: () => _ }), e(953529);
var i = e(54381);
e(473749);
var a = e(512722),
    l = e.n(a),
    o = e(793030),
    c = e(481060),
    s = e(99690),
    p = e(23551),
    r = e(122021),
    d = e(388032),
    u = e(122048);
function m(n) {
    let { onComplete: t, excludedPlatformTypes: e, includedPlatformTypes: a } = n,
        l = (0, r.fq)();
    return (0, i.jsx)("div", {
        className: u.connectionsContainer,
        children: l
            .filter((n) => !(null == e ? void 0 : e.has(n.type)) && (null == a || a.has(n.type)))
            .map((n) =>
                (0, i.jsx)(
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
    let { integrations: t, onCompleteApplication: e } = n;
    if (null == t || null == e) return null;
    let a = t.filter((n) => {
        var t;
        return (null == (t = n.application) ? void 0 : t.roleConnectionsVerificationUrl) != null;
    });
    return 0 === a.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.Text, {
                      variant: "text-sm/medium",
                      color: "interactive-text-default",
                      className: u.applicationsHeader,
                      children: d.intl.string(d.t.PHjkRE),
                  }),
                  (0, i.jsx)("div", {
                      className: u.applicationsContainer,
                      children: a.map((n) => {
                          let t = n.application;
                          l()(null != t, "application is null");
                          let a = null == t ? void 0 : t.bot;
                          return (
                              l()(null != a, "bot is null"),
                              (0, i.jsxs)(
                                  c.P3F,
                                  {
                                      onClick: () => e(t.id),
                                      className: u.application,
                                      children: [
                                          (0, i.jsx)(s.Z, {
                                              user: a,
                                              className: u.applicationIcon,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: u.applicationNameContainer,
                                              children: [
                                                  (0, i.jsx)(c.Heading, {
                                                      variant: "heading-sm/semibold",
                                                      className: u.applicationNameText,
                                                      children: t.name,
                                                  }),
                                                  null != t.description && t.description.length > 0
                                                      ? (0, i.jsx)(c.Text, {
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
        onComplete: e,
        onClose: a,
        excludedPlatformTypes: l,
        includedPlatformTypes: c,
        integrations: s,
        onCompleteApplication: p,
    } = n;
    return (0, i.jsxs)(o.Modal, {
        title: d.intl.string(d.t.syl6HS),
        transitionState: t,
        onClose: a,
        actions: [],
        children: [
            (0, i.jsx)(m, {
                onComplete: function (n) {
                    e(n), a();
                },
                excludedPlatformTypes: l,
                includedPlatformTypes: c,
            }),
            (0, i.jsx)(x, {
                integrations: s,
                onCompleteApplication:
                    null != p
                        ? function (n) {
                              null == p || p(n), a();
                          }
                        : void 0,
            }),
        ],
    });
}
