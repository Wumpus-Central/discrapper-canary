n.d(e, {
    W: function () {
        return s;
    },
    Z: function () {
        return I;
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
    A = n(958150);
function T(t) {
    let { actionText: e, user: n, onAction: s } = t,
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
        T = a && (null == r ? void 0 : r.id) === N.id,
        I = n.tokenStatus === v.q.INVALID,
        M = l || N.isPomelo() ? null : '#'.concat(N.discriminator),
        k = null;
    return (
        T
            ? (k = (0, i.jsx)(u.Text, {
                  variant: 'text-sm/semibold',
                  className: A.hintText,
                  color: 'text-positive',
                  children: E.intl.string(E.t.seV8ys)
              }))
            : I &&
              (k = (0, i.jsx)(u.Text, {
                  variant: 'text-sm/semibold',
                  className: A.hintText,
                  color: 'text-danger',
                  children: E.intl.string(E.t.tYX2pq)
              })),
        (0, i.jsx)('div', {
            className: A.accountCard,
            children: (0, i.jsxs)('div', {
                className: A.userDetails,
                children: [
                    (0, i.jsx)(u.Avatar, {
                        src: N.getAvatarURL(void 0, 40),
                        size: u.AvatarSizes.SIZE_40,
                        'aria-label': n.username
                    }),
                    (0, i.jsxs)('div', {
                        className: o()(A.usernameSection, { [A.hasActionMaxWidth]: !T }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: A.username,
                                children: [
                                    (0, i.jsx)(u.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        className: A.textOverflow,
                                        children: C.ZP.getUserTag(N, {
                                            mode: 'username',
                                            identifiable: l ? 'never' : 'always'
                                        })
                                    }),
                                    (0, i.jsx)(u.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-sm/normal',
                                        children: M
                                    })
                                ]
                            }),
                            k
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: A.userActions,
                        children: [
                            !T &&
                                (0, i.jsx)(u.Button, {
                                    onClick: function () {
                                        if (I) {
                                            s(0, n.id);
                                            return;
                                        }
                                        g.default.track(S.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: S.jXE.MANAGE_ACCOUNTS_MODAL } }), j.yD(n.id), s(1, n.id);
                                    },
                                    color: u.Button.Colors.PRIMARY,
                                    children: I ? E.intl.string(E.t['DSN+h4']) : e
                                }),
                            (0, i.jsx)(u.Button, {
                                className: A.userActionMenu,
                                onClick: function (t) {
                                    (0, h.vq)(t, (t) => {
                                        let { onSelect: e } = t;
                                        return (0, i.jsx)(u.Menu, {
                                            'aria-label': E.intl.string(E.t['41qiDQ']),
                                            navId: 'manage-multi-account',
                                            onClose: h.Zy,
                                            onSelect: e,
                                            children: (0, i.jsx)(u.MenuItem, {
                                                id: 'remove-account',
                                                label: E.intl.string(E.t.lSLMaW),
                                                action: () => {
                                                    !(function () {
                                                        d.Z.logout(null, n.id).finally(() => {
                                                            j.Zd(n.id);
                                                        });
                                                        let t = {};
                                                        null != r ? (t.section = S.jXE.MANAGE_ACCOUNTS_MODAL) : (t.page = S.Usc.LOGIN), g.default.track(S.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, { location: t }), s(2, n.id);
                                                    })(),
                                                        null != e && e();
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
                                    className: A.overflowMenuIcon
                                })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
function I(t) {
    let { actionText: e, onAction: n } = t,
        { isLoading: s, multiAccountUsers: r } = (0, N.L)();
    return (0, i.jsx)('div', {
        className: A.list,
        children: s
            ? (0, i.jsx)(u.Spinner, {})
            : r.map((t, s) =>
                  (0, i.jsxs)(
                      l.Fragment,
                      {
                          children: [
                              (0, i.jsx)(
                                  T,
                                  {
                                      user: t,
                                      actionText: e,
                                      onAction: n
                                  },
                                  t.id
                              ),
                              r.length - 1 !== s &&
                                  (0, i.jsx)('div', {
                                      role: 'separator',
                                      className: A.separator
                                  })
                          ]
                      },
                      t.id
                  )
              )
    });
}
((r = s || (s = {}))[(r.LOGIN_REQUIRED = 0)] = 'LOGIN_REQUIRED'), (r[(r.SWITCHED = 1)] = 'SWITCHED'), (r[(r.REMOVED = 2)] = 'REMOVED');
