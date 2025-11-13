n.d(t, {
    W: () => S,
    Z: () => O,
}),
    n(457542);
var r,
    i = n(951288),
    s = n(647438),
    l = n(120356),
    a = n.n(l),
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
    j = n(251423),
    b = n(981631),
    I = n(388032),
    y = n(878709),
    S =
        (((r = {})[(r.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (r[(r.SWITCHED = 1)] = "SWITCHED"),
        (r[(r.REMOVED = 2)] = "REMOVED"),
        r);
function N(e) {
    let { actionText: t, user: n, onAction: r } = e,
        {
            currentUser: s,
            hidePrivateData: l,
            isAuthenticated: j,
        } = (0, o.cj)([f.default, p.Z, m.default], () => ({
            currentUser: f.default.getCurrentUser(),
            hidePrivateData: p.Z.hidePersonalInformation,
            isAuthenticated: m.default.isAuthenticated(),
        })),
        S = new g.Z(n),
        N = j && (null == s ? void 0 : s.id) === S.id,
        O = n.tokenStatus === v.q.INVALID,
        C = l || S.hasUniqueUsername() ? null : "#".concat(S.discriminator),
        T = null;
    return (
        h.Z.useConfig({ location: "Account card load" }),
        N
            ? (T = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: y.hintText,
                  color: "text-feedback-positive",
                  children: I.intl.string(I.t.seV8yt),
              }))
            : O &&
              (T = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: y.hintText,
                  color: "text-danger",
                  children: I.intl.string(I.t.tYX2ps),
              })),
        (0, i.jsx)("div", {
            className: y.accountCard,
            children: (0, i.jsxs)("div", {
                className: y.userDetails,
                children: [
                    (0, i.jsx)(c.qEK, {
                        src: S.getAvatarURL(void 0, 40),
                        size: c.EFr.SIZE_40,
                        "aria-label": n.username,
                    }),
                    (0, i.jsxs)("div", {
                        className: a()(y.usernameSection, { [y.hasActionMaxWidth]: !N }),
                        children: [
                            (0, i.jsxs)("div", {
                                className: y.username,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        lineClamp: 1,
                                        children: x.ZP.getUserTag(S, {
                                            mode: "username",
                                            identifiable: l ? "never" : "always",
                                        }),
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        color: "header-secondary",
                                        variant: "text-sm/normal",
                                        children: C,
                                    }),
                                ],
                            }),
                            T,
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: y.userActions,
                        children: [
                            !N &&
                                (0, i.jsx)(c.Button, {
                                    variant: "secondary",
                                    text: O ? I.intl.string(I.t["DSN+hw"]) : t,
                                    onClick: function () {
                                        if (O) return void r(0, n.id);
                                        _.default.track(b.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                            location: { section: b.jXE.MANAGE_ACCOUNTS_MODAL },
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
                                            "aria-label": I.intl.string(I.t["41qiDU"]),
                                            navId: "manage-multi-account",
                                            onClose: d.Zy,
                                            onSelect: t,
                                            children: (0, i.jsx)(c.sNh, {
                                                id: "remove-account",
                                                label: I.intl.string(I.t.lSLMaU),
                                                action: () => {
                                                    u.Z.logout("multi_accounts_list", null, n.id).finally(() => {
                                                        E.Zd(n.id);
                                                    });
                                                    let e = {};
                                                    null != s
                                                        ? (e.section = b.jXE.MANAGE_ACCOUNTS_MODAL)
                                                        : (e.page = b.Usc.LOGIN),
                                                        _.default.track(b.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
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
                                "aria-label": I.intl.string(I.t.PdRCRg),
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
        { isLoading: r, multiAccountUsers: l } = (0, j.L)();
    return (0, i.jsx)("div", {
        className: y.list,
        children: r
            ? (0, i.jsx)(c.$jN, { className: y.spinner })
            : l.map((e, r) =>
                  (0, i.jsxs)(
                      s.Fragment,
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
                              l.length - 1 !== r &&
                                  (0, i.jsx)("div", {
                                      role: "separator",
                                      className: y.separator,
                                  }),
                          ],
                      },
                      e.id,
                  ),
              ),
    });
}
