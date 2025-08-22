n.d(t, {
    W: () => N,
    Z: () => O,
}),
    n(457542);
var r,
    i = n(951288),
    l = n(647438),
    o = n(120356),
    s = n.n(o),
    a = n(442837),
    c = n(481060),
    u = n(893776),
    d = n(239091),
    h = n(598077),
    f = n(314897),
    p = n(246946),
    g = n(594174),
    m = n(626135),
    _ = n(51144),
    x = n(480387),
    v = n(726745),
    E = n(251423),
    b = n(981631),
    j = n(388032),
    I = n(878709),
    N =
        (((r = {})[(r.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (r[(r.SWITCHED = 1)] = "SWITCHED"),
        (r[(r.REMOVED = 2)] = "REMOVED"),
        r);
function y(e) {
    let { actionText: t, user: n, onAction: r } = e,
        {
            currentUser: l,
            hidePrivateData: o,
            isAuthenticated: E,
        } = (0, a.cj)([g.default, p.Z, f.default], () => ({
            currentUser: g.default.getCurrentUser(),
            hidePrivateData: p.Z.hidePersonalInformation,
            isAuthenticated: f.default.isAuthenticated(),
        })),
        N = new h.Z(n),
        y = E && (null == l ? void 0 : l.id) === N.id,
        O = n.tokenStatus === v.q.INVALID,
        S = o || N.hasUniqueUsername() ? null : "#".concat(N.discriminator),
        C = null;
    return (
        y
            ? (C = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: I.hintText,
                  color: "text-feedback-positive",
                  children: j.intl.string(j.t.seV8ys),
              }))
            : O &&
              (C = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: I.hintText,
                  color: "text-danger",
                  children: j.intl.string(j.t.tYX2pq),
              })),
        (0, i.jsx)("div", {
            className: I.accountCard,
            children: (0, i.jsxs)("div", {
                className: I.userDetails,
                children: [
                    (0, i.jsx)(c.qEK, {
                        src: N.getAvatarURL(void 0, 40),
                        size: c.EFr.SIZE_40,
                        "aria-label": n.username,
                    }),
                    (0, i.jsxs)("div", {
                        className: s()(I.usernameSection, { [I.hasActionMaxWidth]: !y }),
                        children: [
                            (0, i.jsxs)("div", {
                                className: I.username,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        lineClamp: 1,
                                        children: _.ZP.getUserTag(N, {
                                            mode: "username",
                                            identifiable: o ? "never" : "always",
                                        }),
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        color: "header-secondary",
                                        variant: "text-sm/normal",
                                        children: S,
                                    }),
                                ],
                            }),
                            C,
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: I.userActions,
                        children: [
                            !y &&
                                (0, i.jsx)(c.zxk, {
                                    variant: "secondary",
                                    text: O ? j.intl.string(j.t["DSN+h4"]) : t,
                                    onClick: function () {
                                        if (O) return void r(0, n.id);
                                        m.default.track(b.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: b.jXE.MANAGE_ACCOUNTS_MODAL },
                                        }),
                                            x.yD(n.id),
                                            r(1, n.id);
                                    },
                                }),
                            (0, i.jsx)(c.hU, {
                                icon: c.xhG,
                                onClick: function (e) {
                                    (0, d.vq)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, i.jsx)(c.v2r, {
                                            "aria-label": j.intl.string(j.t["41qiDQ"]),
                                            navId: "manage-multi-account",
                                            onClose: d.Zy,
                                            onSelect: t,
                                            children: (0, i.jsx)(c.sNh, {
                                                id: "remove-account",
                                                label: j.intl.string(j.t.lSLMaW),
                                                action: () => {
                                                    u.Z.logout("multi_accounts_list", null, n.id).finally(() => {
                                                        x.Zd(n.id);
                                                    });
                                                    let e = {};
                                                    null != l
                                                        ? (e.section = b.jXE.MANAGE_ACCOUNTS_MODAL)
                                                        : (e.page = b.Usc.LOGIN),
                                                        m.default.track(b.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                                                            location: e,
                                                        }),
                                                        r(2, n.id),
                                                        null != t && t();
                                                },
                                                color: "danger",
                                            }),
                                        });
                                    });
                                },
                                "aria-label": j.intl.string(j.t.PdRCRk),
                                variant: "icon-only",
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function O(e) {
    let { actionText: t, onAction: n } = e,
        { isLoading: r, multiAccountUsers: o } = (0, E.L)();
    return (0, i.jsx)("div", {
        className: I.list,
        children: r
            ? (0, i.jsx)(c.$jN, { className: I.spinner })
            : o.map((e, r) =>
                  (0, i.jsxs)(
                      l.Fragment,
                      {
                          children: [
                              (0, i.jsx)(
                                  y,
                                  {
                                      user: e,
                                      actionText: t,
                                      onAction: n,
                                  },
                                  e.id,
                              ),
                              o.length - 1 !== r &&
                                  (0, i.jsx)("div", {
                                      role: "separator",
                                      className: I.separator,
                                  }),
                          ],
                      },
                      e.id,
                  ),
              ),
    });
}
