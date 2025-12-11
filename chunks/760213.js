n.d(t, {
    W: () => y,
    Z: () => C,
}),
    n(457542);
var r,
    i = n(54381),
    s = n(473749),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    c = n(481060),
    u = n(893776),
    d = n(239091),
    h = n(623602),
    f = n(598077),
    g = n(314897),
    m = n(246946),
    p = n(594174),
    x = n(626135),
    _ = n(51144),
    E = n(480387),
    v = n(726745),
    b = n(251423),
    j = n(981631),
    I = n(388032),
    N = n(805079),
    y =
        (((r = {})[(r.LOGIN_REQUIRED = 0)] = "LOGIN_REQUIRED"),
        (r[(r.SWITCHED = 1)] = "SWITCHED"),
        (r[(r.REMOVED = 2)] = "REMOVED"),
        r);
function S(e) {
    let { actionText: t, user: n, onAction: r } = e,
        {
            currentUser: s,
            hidePrivateData: a,
            isAuthenticated: b,
        } = (0, o.cj)([p.default, m.Z, g.default], () => ({
            currentUser: p.default.getCurrentUser(),
            hidePrivateData: m.Z.hidePersonalInformation,
            isAuthenticated: g.default.isAuthenticated(),
        })),
        y = new f.Z(n),
        S = b && (null == s ? void 0 : s.id) === y.id,
        C = n.tokenStatus === v.q.INVALID,
        O = a || y.hasUniqueUsername() ? null : "#".concat(y.discriminator),
        T = null;
    return (
        h.Z.useConfig({ location: "Account card load" }),
        S
            ? (T = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: N.hintText,
                  color: "text-feedback-positive",
                  children: I.intl.string(I.t.seV8yt),
              }))
            : C &&
              (T = (0, i.jsx)(c.Text, {
                  variant: "text-sm/semibold",
                  className: N.hintText,
                  color: "text-feedback-critical",
                  children: I.intl.string(I.t.tYX2ps),
              })),
        (0, i.jsx)("div", {
            className: N.accountCard,
            children: (0, i.jsxs)("div", {
                className: N.userDetails,
                children: [
                    (0, i.jsx)(c.qEK, {
                        src: y.getAvatarURL(void 0, 40),
                        size: c.EFr.SIZE_40,
                        "aria-label": n.username,
                    }),
                    (0, i.jsxs)("div", {
                        className: l()(N.usernameSection, { [N.hasActionMaxWidth]: !S }),
                        children: [
                            (0, i.jsxs)("div", {
                                className: N.username,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        lineClamp: 1,
                                        children: _.ZP.getUserTag(y, {
                                            mode: "username",
                                            identifiable: a ? "never" : "always",
                                        }),
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        color: "text-default",
                                        variant: "text-sm/normal",
                                        children: O,
                                    }),
                                ],
                            }),
                            T,
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: N.userActions,
                        children: [
                            !S &&
                                (0, i.jsx)(c.Button, {
                                    variant: "secondary",
                                    text: C ? I.intl.string(I.t["DSN+hw"]) : t,
                                    onClick: function () {
                                        if (C) return void r(0, n.id);
                                        x.default.track(j.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
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
                                                        x.default.track(j.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
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
function C(e) {
    let { actionText: t, onAction: n } = e,
        { isLoading: r, multiAccountUsers: a } = (0, b.L)();
    return (0, i.jsx)("div", {
        className: N.list,
        children: r
            ? (0, i.jsx)(c.$jN, { className: N.spinner })
            : a.map((e, r) =>
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
                              a.length - 1 !== r &&
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
