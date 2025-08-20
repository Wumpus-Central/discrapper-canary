n.d(t, {
    W: () => O,
    Z: () => y,
}),
    n(457542);
var r,
    i = n(951288),
    l = n(647438),
    s = n(120356),
    o = n.n(s),
    a = n(442837),
    c = n(481060),
    u = n(893776),
    d = n(239091),
    h = n(598077),
    p = n(314897),
    m = n(246946),
    g = n(594174),
    f = n(626135),
    _ = n(51144),
    x = n(480387),
    E = n(726745),
    v = n(251423),
    j = n(981631),
    b = n(388032),
    I = n(878709),
    O =
        (((r = {})[(r.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (r[(r.SWITCHED = 1)] = "SWITCHED"),
        (r[(r.REMOVED = 2)] = "REMOVED"),
        r);
function N(e) {
    let { actionText: t, user: n, onAction: r } = e,
        {
            currentUser: l,
            hidePrivateData: s,
            isAuthenticated: v,
        } = (0, a.cj)([g.default, m.Z, p.default], () => ({
            currentUser: g.default.getCurrentUser(),
            hidePrivateData: m.Z.hidePersonalInformation,
            isAuthenticated: p.default.isAuthenticated(),
        })),
        O = new h.Z(n),
        N = v && (null == l ? void 0 : l.id) === O.id,
        y = n.tokenStatus === E.q.INVALID,
        S = s || O.hasUniqueUsername() ? null : "#".concat(O.discriminator),
        C = null;
    return (
        N
            ? (C = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: I.hintText,
                  color: "text-feedback-positive",
                  children: b.intl.string(b.t.seV8ys),
              }))
            : y &&
              (C = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: I.hintText,
                  color: "text-danger",
                  children: b.intl.string(b.t.tYX2pq),
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
                        className: o()(I.usernameSection, { [I.hasActionMaxWidth]: !N }),
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
                                            identifiable: s ? "never" : "always",
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
                            !N &&
                                (0, i.jsx)(c.zxk, {
                                    variant: "secondary",
                                    text: y ? b.intl.string(b.t["DSN+h4"]) : t,
                                    onClick: function () {
                                        if (y) return void r(0, n.id);
                                        f.default.track(j.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: j.jXE.MANAGE_ACCOUNTS_MODAL },
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
                                            "aria-label": b.intl.string(b.t["41qiDQ"]),
                                            navId: "manage-multi-account",
                                            onClose: d.Zy,
                                            onSelect: t,
                                            children: (0, i.jsx)(c.sNh, {
                                                id: "remove-account",
                                                label: b.intl.string(b.t.lSLMaW),
                                                action: () => {
                                                    u.Z.logout("multi_accounts_list", null, n.id).finally(() => {
                                                        x.Zd(n.id);
                                                    });
                                                    let e = {};
                                                    null != l
                                                        ? (e.section = j.jXE.MANAGE_ACCOUNTS_MODAL)
                                                        : (e.page = j.Usc.LOGIN),
                                                        f.default.track(j.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
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
                                "aria-label": b.intl.string(b.t.PdRCRk),
                                variant: "icon-only",
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function y(e) {
    let { actionText: t, onAction: n } = e,
        { isLoading: r, multiAccountUsers: s } = (0, v.L)();
    return (0, i.jsx)("div", {
        className: I.list,
        children: r
            ? (0, i.jsx)(c.$jN, { className: I.spinner })
            : s.map((e, r) =>
                  (0, i.jsxs)(
                      l.Fragment,
                      {
                          children: [
                              (0, i.jsx)(
                                  N,
                                  {
                                      user: e,
                                      actionText: t,
                                      onAction: n,
                                  },
                                  e.id,
                              ),
                              s.length - 1 !== r &&
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
