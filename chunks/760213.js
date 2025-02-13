s.d(t, {
    W: () => S,
    Z: () => A
}),
    s(773603);
var n,
    r = s(200651),
    i = s(192379),
    l = s(120356),
    a = s.n(l),
    o = s(442837),
    c = s(481060),
    d = s(893776),
    u = s(239091),
    h = s(598077),
    m = s(314897),
    p = s(246946),
    x = s(594174),
    g = s(626135),
    f = s(51144),
    j = s(480387),
    C = s(726745),
    v = s(251423),
    N = s(981631),
    E = s(388032),
    k = s(416906),
    S = (((n = {})[(n.LOGIN_REQUIRED = 0)] = 'LOGIN_REQUIRED'), (n[(n.SWITCHED = 1)] = 'SWITCHED'), (n[(n.REMOVED = 2)] = 'REMOVED'), n);
function T(e) {
    let { actionText: t, user: s, onAction: n } = e,
        {
            currentUser: i,
            hidePrivateData: l,
            isAuthenticated: v
        } = (0, o.cj)([x.default, p.Z, m.default], () => ({
            currentUser: x.default.getCurrentUser(),
            hidePrivateData: p.Z.hidePersonalInformation,
            isAuthenticated: m.default.isAuthenticated()
        })),
        S = new h.Z(s),
        T = v && (null == i ? void 0 : i.id) === S.id,
        A = s.tokenStatus === C.q.INVALID,
        Z = l || S.isPomelo() ? null : '#'.concat(S.discriminator),
        w = null;
    return (
        T
            ? (w = (0, r.jsx)(c.Text, {
                  variant: 'text-sm/semibold',
                  className: k.hintText,
                  color: 'text-positive',
                  children: E.intl.string(E.t.seV8ys)
              }))
            : A &&
              (w = (0, r.jsx)(c.Text, {
                  variant: 'text-sm/semibold',
                  className: k.hintText,
                  color: 'text-danger',
                  children: E.intl.string(E.t.tYX2pq)
              })),
        (0, r.jsx)('div', {
            className: k.accountCard,
            children: (0, r.jsxs)('div', {
                className: k.userDetails,
                children: [
                    (0, r.jsx)(c.qEK, {
                        src: S.getAvatarURL(void 0, 40),
                        size: c.EFr.SIZE_40,
                        'aria-label': s.username
                    }),
                    (0, r.jsxs)('div', {
                        className: a()(k.usernameSection, { [k.hasActionMaxWidth]: !T }),
                        children: [
                            (0, r.jsxs)('div', {
                                className: k.username,
                                children: [
                                    (0, r.jsx)(c.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        className: k.textOverflow,
                                        children: f.ZP.getUserTag(S, {
                                            mode: 'username',
                                            identifiable: l ? 'never' : 'always'
                                        })
                                    }),
                                    (0, r.jsx)(c.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-sm/normal',
                                        children: Z
                                    })
                                ]
                            }),
                            w
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: k.userActions,
                        children: [
                            !T &&
                                (0, r.jsx)(c.zxk, {
                                    onClick: function () {
                                        if (A) {
                                            n(0, s.id);
                                            return;
                                        }
                                        g.default.track(N.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: N.jXE.MANAGE_ACCOUNTS_MODAL } }), j.yD(s.id), n(1, s.id);
                                    },
                                    color: c.zxk.Colors.PRIMARY,
                                    children: A ? E.intl.string(E.t['DSN+h4']) : t
                                }),
                            (0, r.jsx)(c.zxk, {
                                className: k.userActionMenu,
                                onClick: function (e) {
                                    (0, u.vq)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, r.jsx)(c.v2r, {
                                            'aria-label': E.intl.string(E.t['41qiDQ']),
                                            navId: 'manage-multi-account',
                                            onClose: u.Zy,
                                            onSelect: t,
                                            children: (0, r.jsx)(c.sNh, {
                                                id: 'remove-account',
                                                label: E.intl.string(E.t.lSLMaW),
                                                action: () => {
                                                    (function () {
                                                        d.Z.logout(null, s.id).finally(() => {
                                                            j.Zd(s.id);
                                                        });
                                                        let e = {};
                                                        null != i ? (e.section = N.jXE.MANAGE_ACCOUNTS_MODAL) : (e.page = N.Usc.LOGIN), g.default.track(N.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, { location: e }), n(2, s.id);
                                                    })(),
                                                        null != t && t();
                                                },
                                                color: 'danger'
                                            })
                                        });
                                    });
                                },
                                size: c.zxk.Sizes.ICON,
                                look: c.zxk.Looks.BLANK,
                                color: c.zxk.Colors.WHITE,
                                'aria-label': E.intl.string(E.t.PdRCRk),
                                children: (0, r.jsx)(c.xhG, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: k.overflowMenuIcon
                                })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
function A(e) {
    let { actionText: t, onAction: s } = e,
        { isLoading: n, multiAccountUsers: l } = (0, v.L)();
    return (0, r.jsx)('div', {
        className: k.list,
        children: n
            ? (0, r.jsx)(c.$jN, {})
            : l.map((e, n) =>
                  (0, r.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, r.jsx)(
                                  T,
                                  {
                                      user: e,
                                      actionText: t,
                                      onAction: s
                                  },
                                  e.id
                              ),
                              l.length - 1 !== n &&
                                  (0, r.jsx)('div', {
                                      role: 'separator',
                                      className: k.separator
                                  })
                          ]
                      },
                      e.id
                  )
              )
    });
}
