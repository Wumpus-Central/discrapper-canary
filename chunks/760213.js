n.d(t, {
    W: () => O,
    Z: () => N,
}),
    n(457542);
var r,
    i = n(255367),
    l = n(73800),
    o = n(120356),
    s = n.n(o),
    a = n(442837),
    c = n(481060),
    u = n(893776),
    d = n(239091),
    h = n(598077),
    p = n(314897),
    f = n(246946),
    m = n(594174),
    g = n(626135),
    _ = n(51144),
    x = n(480387),
    b = n(726745),
    E = n(251423),
    v = n(981631),
    j = n(388032),
    I = n(43716),
    O =
        (((r = {})[(r.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (r[(r.SWITCHED = 1)] = "SWITCHED"),
        (r[(r.REMOVED = 2)] = "REMOVED"),
        r);
function S(e) {
    let { actionText: t, user: n, onAction: r } = e,
        {
            currentUser: l,
            hidePrivateData: o,
            isAuthenticated: E,
        } = (0, a.cj)([m.default, f.Z, p.default], () => ({
            currentUser: m.default.getCurrentUser(),
            hidePrivateData: f.Z.hidePersonalInformation,
            isAuthenticated: p.default.isAuthenticated(),
        })),
        O = new h.Z(n),
        S = E && (null == l ? void 0 : l.id) === O.id,
        N = n.tokenStatus === b.q.INVALID,
        y = o || O.hasUniqueUsername() ? null : "#".concat(O.discriminator),
        C = null;
    return (
        S
            ? (C = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: I.hintText,
                  color: "text-feedback-positive",
                  children: j.intl.string(j.t.seV8ys),
              }))
            : N &&
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
                        src: O.getAvatarURL(void 0, 40),
                        size: c.EFr.SIZE_40,
                        "aria-label": n.username,
                    }),
                    (0, i.jsxs)("div", {
                        className: s()(I.usernameSection, { [I.hasActionMaxWidth]: !S }),
                        children: [
                            (0, i.jsxs)("div", {
                                className: I.username,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        lineClamp: 1,
                                        children: _.ZP.getUserTag(O, {
                                            mode: "username",
                                            identifiable: o ? "never" : "always",
                                        }),
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        color: "header-secondary",
                                        variant: "text-sm/normal",
                                        children: y,
                                    }),
                                ],
                            }),
                            C,
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: I.userActions,
                        children: [
                            !S &&
                                (0, i.jsx)(c.zxk, {
                                    variant: "secondary",
                                    text: N ? j.intl.string(j.t["DSN+h4"]) : t,
                                    onClick: function () {
                                        if (N) return void r(0, n.id);
                                        g.default.track(v.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: v.jXE.MANAGE_ACCOUNTS_MODAL },
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
                                                        ? (e.section = v.jXE.MANAGE_ACCOUNTS_MODAL)
                                                        : (e.page = v.Usc.LOGIN),
                                                        g.default.track(v.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
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
function N(e) {
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
                                  S,
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
