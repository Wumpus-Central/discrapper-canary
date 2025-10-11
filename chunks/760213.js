n.d(t, {
    W: () => S,
    Z: () => y,
}),
    n(457542);
var r,
    i = n(951288),
    l = n(647438),
    s = n(120356),
    a = n.n(s),
    o = n(442837),
    c = n(481060),
    u = n(893776),
    d = n(239091),
    h = n(623602),
    g = n(598077),
    m = n(314897),
    p = n(246946),
    f = n(594174),
    _ = n(626135),
    x = n(51144),
    E = n(480387),
    v = n(726745),
    b = n(251423),
    j = n(981631),
    I = n(388032),
    N = n(878709),
    S =
        (((r = {})[(r.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (r[(r.SWITCHED = 1)] = "SWITCHED"),
        (r[(r.REMOVED = 2)] = "REMOVED"),
        r);
function O(e) {
    let { actionText: t, user: n, onAction: r } = e,
        {
            currentUser: l,
            hidePrivateData: s,
            isAuthenticated: b,
        } = (0, o.cj)([f.default, p.Z, m.default], () => ({
            currentUser: f.default.getCurrentUser(),
            hidePrivateData: p.Z.hidePersonalInformation,
            isAuthenticated: m.default.isAuthenticated(),
        })),
        S = new g.default(n),
        O = b && (null == l ? void 0 : l.id) === S.id,
        y = n.tokenStatus === v.q.INVALID,
        C = s || S.hasUniqueUsername() ? null : "#".concat(S.discriminator),
        A = null;
    return (
        h.Z.useConfig({ location: "Account card load" }),
        O
            ? (A = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: N.hintText,
                  color: "text-feedback-positive",
                  children: I.intl.string(I.t.seV8ys),
              }))
            : y &&
              (A = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: N.hintText,
                  color: "text-danger",
                  children: I.intl.string(I.t.tYX2pq),
              })),
        (0, i.jsx)("div", {
            className: N.accountCard,
            children: (0, i.jsxs)("div", {
                className: N.userDetails,
                children: [
                    (0, i.jsx)(c.qEK, {
                        src: S.getAvatarURL(void 0, 40),
                        size: c.EFr.SIZE_40,
                        "aria-label": n.username,
                    }),
                    (0, i.jsxs)("div", {
                        className: a()(N.usernameSection, { [N.hasActionMaxWidth]: !O }),
                        children: [
                            (0, i.jsxs)("div", {
                                className: N.username,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        lineClamp: 1,
                                        children: x.ZP.getUserTag(S, {
                                            mode: "username",
                                            identifiable: s ? "never" : "always",
                                        }),
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        color: "header-secondary",
                                        variant: "text-sm/normal",
                                        children: C,
                                    }),
                                ],
                            }),
                            A,
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: N.userActions,
                        children: [
                            !O &&
                                (0, i.jsx)(c.Button, {
                                    variant: "secondary",
                                    text: y ? I.intl.string(I.t["DSN+h4"]) : t,
                                    onClick: function () {
                                        if (y) return void r(0, n.id);
                                        _.default.track(j.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: j.jXE.MANAGE_ACCOUNTS_MODAL },
                                        }),
                                            E.yD(n.id),
                                            r(1, n.id);
                                    },
                                }),
                            (0, i.jsx)(c.hU, {
                                icon: c.xhG,
                                onClick: function (e) {
                                    (0, d.vq)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, i.jsx)(c.v2r, {
                                            "aria-label": I.intl.string(I.t["41qiDQ"]),
                                            navId: "manage-multi-account",
                                            onClose: d.Zy,
                                            onSelect: t,
                                            children: (0, i.jsx)(c.sNh, {
                                                id: "remove-account",
                                                label: I.intl.string(I.t.lSLMaW),
                                                action: () => {
                                                    u.Z.logout("multi_accounts_list", null, n.id).finally(() => {
                                                        E.Zd(n.id);
                                                    });
                                                    let e = {};
                                                    null != l
                                                        ? (e.section = j.jXE.MANAGE_ACCOUNTS_MODAL)
                                                        : (e.page = j.Usc.LOGIN),
                                                        _.default.track(j.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
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
                                "aria-label": I.intl.string(I.t.PdRCRk),
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
        { isLoading: r, multiAccountUsers: s } = (0, b.L)();
    return (0, i.jsx)("div", {
        className: N.list,
        children: r
            ? (0, i.jsx)(c.$jN, { className: N.spinner })
            : s.map((e, r) =>
                  (0, i.jsxs)(
                      l.Fragment,
                      {
                          children: [
                              (0, i.jsx)(
                                  O,
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
                                      className: N.separator,
                                  }),
                          ],
                      },
                      e.id,
                  ),
              ),
    });
}
