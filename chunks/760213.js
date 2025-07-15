(n.d(t, {
    W: () => E,
    Z: () => S
}),
    n(457542));
var r,
    s = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(481060),
    u = n(893776),
    d = n(239091),
    h = n(598077),
    p = n(314897),
    m = n(246946),
    f = n(594174),
    x = n(626135),
    g = n(51144),
    j = n(480387),
    v = n(726745),
    C = n(251423),
    b = n(981631),
    y = n(388032),
    O = n(576052),
    E = (((r = {})[(r.LOGIN_REQUIRED = 0)] = 'LOGIN_REQUIRED'), (r[(r.SWITCHED = 1)] = 'SWITCHED'), (r[(r.REMOVED = 2)] = 'REMOVED'), r);
function N(e) {
    let { actionText: t, user: n, onAction: r } = e,
        {
            currentUser: i,
            hidePrivateData: l,
            isAuthenticated: C
        } = (0, o.cj)([f.default, m.Z, p.default], () => ({
            currentUser: f.default.getCurrentUser(),
            hidePrivateData: m.Z.hidePersonalInformation,
            isAuthenticated: p.default.isAuthenticated()
        })),
        E = new h.Z(n),
        N = C && (null == i ? void 0 : i.id) === E.id,
        S = n.tokenStatus === v.q.INVALID,
        P = l || E.isPomelo() ? null : '#'.concat(E.discriminator),
        T = null;
    return (
        N
            ? (T = (0, s.jsx)(c.Text, {
                  variant: 'text-sm/semibold',
                  className: O.hintText,
                  color: 'text-feedback-positive',
                  children: y.intl.string(y.t.seV8ys)
              }))
            : S &&
              (T = (0, s.jsx)(c.Text, {
                  variant: 'text-sm/semibold',
                  className: O.hintText,
                  color: 'text-danger',
                  children: y.intl.string(y.t.tYX2pq)
              })),
        (0, s.jsx)('div', {
            className: O.accountCard,
            children: (0, s.jsxs)('div', {
                className: O.userDetails,
                children: [
                    (0, s.jsx)(c.qEK, {
                        src: E.getAvatarURL(void 0, 40),
                        size: c.EFr.SIZE_40,
                        'aria-label': n.username
                    }),
                    (0, s.jsxs)('div', {
                        className: a()(O.usernameSection, { [O.hasActionMaxWidth]: !N }),
                        children: [
                            (0, s.jsxs)('div', {
                                className: O.username,
                                children: [
                                    (0, s.jsx)(c.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        className: O.textOverflow,
                                        children: g.ZP.getUserTag(E, {
                                            mode: 'username',
                                            identifiable: l ? 'never' : 'always'
                                        })
                                    }),
                                    (0, s.jsx)(c.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-sm/normal',
                                        children: P
                                    })
                                ]
                            }),
                            T
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: O.userActions,
                        children: [
                            !N &&
                                (0, s.jsx)(c.zxk, {
                                    variant: 'secondary',
                                    text: S ? y.intl.string(y.t['DSN+h4']) : t,
                                    onClick: function () {
                                        if (S) return void r(0, n.id);
                                        (x.default.track(b.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: b.jXE.MANAGE_ACCOUNTS_MODAL } }), j.yD(n.id), r(1, n.id));
                                    }
                                }),
                            (0, s.jsx)(c.hU, {
                                icon: c.xhG,
                                onClick: function (e) {
                                    (0, d.vq)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, s.jsx)(c.v2r, {
                                            'aria-label': y.intl.string(y.t['41qiDQ']),
                                            navId: 'manage-multi-account',
                                            onClose: d.Zy,
                                            onSelect: t,
                                            children: (0, s.jsx)(c.sNh, {
                                                id: 'remove-account',
                                                label: y.intl.string(y.t.lSLMaW),
                                                action: () => {
                                                    u.Z.logout('multi_accounts_list', null, n.id).finally(() => {
                                                        j.Zd(n.id);
                                                    });
                                                    let e = {};
                                                    (null != i ? (e.section = b.jXE.MANAGE_ACCOUNTS_MODAL) : (e.page = b.Usc.LOGIN), x.default.track(b.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, { location: e }), r(2, n.id), null != t && t());
                                                },
                                                color: 'danger'
                                            })
                                        });
                                    });
                                },
                                'aria-label': y.intl.string(y.t.PdRCRk),
                                variant: 'icon-only'
                            })
                        ]
                    })
                ]
            })
        })
    );
}
function S(e) {
    let { actionText: t, onAction: n } = e,
        { isLoading: r, multiAccountUsers: l } = (0, C.L)();
    return (0, s.jsx)('div', {
        className: O.list,
        children: r
            ? (0, s.jsx)(c.$jN, {})
            : l.map((e, r) =>
                  (0, s.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, s.jsx)(
                                  N,
                                  {
                                      user: e,
                                      actionText: t,
                                      onAction: n
                                  },
                                  e.id
                              ),
                              l.length - 1 !== r &&
                                  (0, s.jsx)('div', {
                                      role: 'separator',
                                      className: O.separator
                                  })
                          ]
                      },
                      e.id
                  )
              )
    });
}
