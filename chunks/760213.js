n.d(t, {
    W: () => O,
    Z: () => N,
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
    p = n(314897),
    m = n(246946),
    f = n(594174),
    _ = n(626135),
    x = n(51144),
    E = n(480387),
    v = n(726745),
    b = n(251423),
    j = n(981631),
    I = n(388032),
    y = n(878709),
    O =
        (((r = {})[(r.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (r[(r.SWITCHED = 1)] = "SWITCHED"),
        (r[(r.REMOVED = 2)] = "REMOVED"),
        r);
function S(e) {
    let { actionText: t, user: n, onAction: r } = e,
        {
            currentUser: s,
            hidePrivateData: l,
            isAuthenticated: b,
        } = (0, o.cj)([f.default, m.Z, p.default], () => ({
            currentUser: f.default.getCurrentUser(),
            hidePrivateData: m.Z.hidePersonalInformation,
            isAuthenticated: p.default.isAuthenticated(),
        })),
        O = new g.Z(n),
        S = b && (null == s ? void 0 : s.id) === O.id,
        N = n.tokenStatus === v.q.INVALID,
        C = l || O.hasUniqueUsername() ? null : "#".concat(O.discriminator),
        A = null;
    return (
        h.Z.useConfig({ location: "Account card load" }),
        S
            ? (A = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: y.hintText,
                  color: "text-feedback-positive",
                  children: I.intl.string(I.t.seV8yt),
              }))
            : N &&
              (A = (0, i.jsx)(c.Text, {
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
                        src: O.getAvatarURL(void 0, 40),
                        size: c.EFr.SIZE_40,
                        "aria-label": n.username,
                    }),
                    (0, i.jsxs)("div", {
                        className: a()(y.usernameSection, { [y.hasActionMaxWidth]: !S }),
                        children: [
                            (0, i.jsxs)("div", {
                                className: y.username,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        lineClamp: 1,
                                        children: x.ZP.getUserTag(O, {
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
                            A,
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: y.userActions,
                        children: [
                            !S &&
                                (0, i.jsx)(c.Button, {
                                    variant: "secondary",
                                    text: N ? I.intl.string(I.t["DSN+hw"]) : t,
                                    onClick: function () {
                                        if (N) return void r(0, n.id);
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
function N(e) {
    let { actionText: t, onAction: n } = e,
        { isLoading: r, multiAccountUsers: l } = (0, b.L)();
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
                                  S,
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
