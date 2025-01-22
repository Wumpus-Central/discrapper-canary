n.d(t, {
    W: function () {
        return s;
    },
    Z: function () {
        return k;
    }
}),
    n(773603);
var s,
    r,
    i = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    c = n(442837),
    u = n(481060),
    d = n(893776),
    h = n(239091),
    p = n(598077),
    m = n(314897),
    x = n(246946),
    f = n(594174),
    g = n(626135),
    C = n(51144),
    j = n(480387),
    v = n(726745),
    N = n(251423),
    S = n(981631),
    E = n(388032),
    T = n(536554);
function A(e) {
    let { actionText: t, user: n, onAction: s } = e,
        {
            currentUser: r,
            hidePrivateData: l,
            isAuthenticated: a
        } = (0, c.cj)([f.default, x.Z, m.default], () => ({
            currentUser: f.default.getCurrentUser(),
            hidePrivateData: x.Z.hidePersonalInformation,
            isAuthenticated: m.default.isAuthenticated()
        })),
        N = new p.Z(n),
        A = a && (null == r ? void 0 : r.id) === N.id,
        k = n.tokenStatus === v.q.INVALID,
        I = l || N.isPomelo() ? null : '#'.concat(N.discriminator),
        M = null;
    return (
        A
            ? (M = (0, i.jsx)(u.Text, {
                  variant: 'text-sm/semibold',
                  className: T.hintText,
                  color: 'text-positive',
                  children: E.intl.string(E.t.seV8ys)
              }))
            : k &&
              (M = (0, i.jsx)(u.Text, {
                  variant: 'text-sm/semibold',
                  className: T.hintText,
                  color: 'text-danger',
                  children: E.intl.string(E.t.tYX2pq)
              })),
        (0, i.jsx)('div', {
            className: T.accountCard,
            children: (0, i.jsxs)('div', {
                className: T.userDetails,
                children: [
                    (0, i.jsx)(u.Avatar, {
                        src: N.getAvatarURL(void 0, 40),
                        size: u.AvatarSizes.SIZE_40,
                        'aria-label': n.username
                    }),
                    (0, i.jsxs)('div', {
                        className: o()(T.usernameSection, { [T.hasActionMaxWidth]: !A }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: T.username,
                                children: [
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        className: T.textOverflow,
                                        children: C.ZP.getUserTag(N, {
                                            mode: 'username',
                                            identifiable: l ? 'never' : 'always'
                                        })
                                    }),
                                    (0, i.jsx)(u.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-sm/normal',
                                        children: I
                                    })
                                ]
                            }),
                            M
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: T.userActions,
                        children: [
                            !A &&
                                (0, i.jsx)(u.Button, {
                                    onClick: function () {
                                        if (k) {
                                            s(0, n.id);
                                            return;
                                        }
                                        g.default.track(S.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: S.jXE.MANAGE_ACCOUNTS_MODAL } }), j.yD(n.id), s(1, n.id);
                                    },
                                    color: u.Button.Colors.PRIMARY,
                                    children: k ? E.intl.string(E.t['DSN+h4']) : t
                                }),
                            (0, i.jsx)(u.Button, {
                                className: T.userActionMenu,
                                onClick: function (e) {
                                    (0, h.vq)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, i.jsx)(u.Menu, {
                                            'aria-label': E.intl.string(E.t['41qiDQ']),
                                            navId: 'manage-multi-account',
                                            onClose: h.Zy,
                                            onSelect: t,
                                            children: (0, i.jsx)(u.MenuItem, {
                                                id: 'remove-account',
                                                label: E.intl.string(E.t.lSLMaW),
                                                action: () => {
                                                    !(function () {
                                                        d.Z.logout(null, n.id).finally(() => {
                                                            j.Zd(n.id);
                                                        });
                                                        let e = {};
                                                        null != r ? (e.section = S.jXE.MANAGE_ACCOUNTS_MODAL) : (e.page = S.Usc.LOGIN), g.default.track(S.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, { location: e }), s(2, n.id);
                                                    })(),
                                                        null != t && t();
                                                },
                                                color: 'danger'
                                            })
                                        });
                                    });
                                },
                                size: u.Button.Sizes.ICON,
                                look: u.Button.Looks.BLANK,
                                color: u.Button.Colors.WHITE,
                                'aria-label': E.intl.string(E.t.PdRCRk),
                                children: (0, i.jsx)(u.MoreHorizontalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: T.overflowMenuIcon
                                })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
function k(e) {
    let { actionText: t, onAction: n } = e,
        { isLoading: s, multiAccountUsers: r } = (0, N.L)();
    return (0, i.jsx)('div', {
        className: T.list,
        children: s
            ? (0, i.jsx)(u.Spinner, {})
            : r.map((e, s) =>
                  (0, i.jsxs)(
                      l.Fragment,
                      {
                          children: [
                              (0, i.jsx)(
                                  A,
                                  {
                                      user: e,
                                      actionText: t,
                                      onAction: n
                                  },
                                  e.id
                              ),
                              r.length - 1 !== s &&
                                  (0, i.jsx)('div', {
                                      role: 'separator',
                                      className: T.separator
                                  })
                          ]
                      },
                      e.id
                  )
              )
    });
}
((r = s || (s = {}))[(r.LOGIN_REQUIRED = 0)] = 'LOGIN_REQUIRED'), (r[(r.SWITCHED = 1)] = 'SWITCHED'), (r[(r.REMOVED = 2)] = 'REMOVED');
