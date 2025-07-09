(n.d(t, {
    W: () => E,
    Z: () => T
}),
    n(457542));
var r,
    s = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(755721),
    u = n(481060),
    d = n(893776),
    h = n(239091),
    p = n(598077),
    m = n(314897),
    f = n(246946),
    x = n(594174),
    g = n(626135),
    j = n(51144),
    v = n(480387),
    C = n(726745),
    N = n(251423),
    O = n(981631),
    b = n(388032),
    y = n(576052),
    E = (((r = {})[(r.LOGIN_REQUIRED = 0)] = 'LOGIN_REQUIRED'), (r[(r.SWITCHED = 1)] = 'SWITCHED'), (r[(r.REMOVED = 2)] = 'REMOVED'), r);
function S(e) {
    let { actionText: t, user: n, onAction: r } = e,
        {
            currentUser: i,
            hidePrivateData: l,
            isAuthenticated: N
        } = (0, o.cj)([x.default, f.Z, m.default], () => ({
            currentUser: x.default.getCurrentUser(),
            hidePrivateData: f.Z.hidePersonalInformation,
            isAuthenticated: m.default.isAuthenticated()
        })),
        E = new p.Z(n),
        S = N && (null == i ? void 0 : i.id) === E.id,
        T = n.tokenStatus === C.q.INVALID,
        P = l || E.isPomelo() ? null : '#'.concat(E.discriminator),
        w = null;
    return (
        S
            ? (w = (0, s.jsx)(u.Text, {
                  variant: 'text-sm/semibold',
                  className: y.hintText,
                  color: 'text-feedback-positive',
                  children: b.intl.string(b.t.seV8ys)
              }))
            : T &&
              (w = (0, s.jsx)(u.Text, {
                  variant: 'text-sm/semibold',
                  className: y.hintText,
                  color: 'text-danger',
                  children: b.intl.string(b.t.tYX2pq)
              })),
        (0, s.jsx)('div', {
            className: y.accountCard,
            children: (0, s.jsxs)('div', {
                className: y.userDetails,
                children: [
                    (0, s.jsx)(u.qEK, {
                        src: E.getAvatarURL(void 0, 40),
                        size: u.EFr.SIZE_40,
                        'aria-label': n.username
                    }),
                    (0, s.jsxs)('div', {
                        className: a()(y.usernameSection, { [y.hasActionMaxWidth]: !S }),
                        children: [
                            (0, s.jsxs)('div', {
                                className: y.username,
                                children: [
                                    (0, s.jsx)(u.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        className: y.textOverflow,
                                        children: j.ZP.getUserTag(E, {
                                            mode: 'username',
                                            identifiable: l ? 'never' : 'always'
                                        })
                                    }),
                                    (0, s.jsx)(u.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-sm/normal',
                                        children: P
                                    })
                                ]
                            }),
                            w
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        className: y.userActions,
                        children: [
                            !S &&
                                (0, s.jsx)(u.zxk, {
                                    variant: 'secondary',
                                    text: T ? b.intl.string(b.t['DSN+h4']) : t,
                                    onClick: function () {
                                        if (T) return void r(0, n.id);
                                        (g.default.track(O.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: O.jXE.MANAGE_ACCOUNTS_MODAL } }), v.yD(n.id), r(1, n.id));
                                    }
                                }),
                            (0, s.jsx)(c.zx, {
                                className: y.userActionMenu,
                                onClick: function (e) {
                                    (0, h.vq)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, s.jsx)(u.v2r, {
                                            'aria-label': b.intl.string(b.t['41qiDQ']),
                                            navId: 'manage-multi-account',
                                            onClose: h.Zy,
                                            onSelect: t,
                                            children: (0, s.jsx)(u.sNh, {
                                                id: 'remove-account',
                                                label: b.intl.string(b.t.lSLMaW),
                                                action: () => {
                                                    d.Z.logout('multi_accounts_list', null, n.id).finally(() => {
                                                        v.Zd(n.id);
                                                    });
                                                    let e = {};
                                                    (null != i ? (e.section = O.jXE.MANAGE_ACCOUNTS_MODAL) : (e.page = O.Usc.LOGIN), g.default.track(O.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, { location: e }), r(2, n.id), null != t && t());
                                                },
                                                color: 'danger'
                                            })
                                        });
                                    });
                                },
                                size: c.zx.Sizes.ICON,
                                look: c.zx.Looks.BLANK,
                                color: c.zx.Colors.WHITE,
                                'aria-label': b.intl.string(b.t.PdRCRk),
                                children: (0, s.jsx)(u.xhG, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: y.overflowMenuIcon
                                })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
function T(e) {
    let { actionText: t, onAction: n } = e,
        { isLoading: r, multiAccountUsers: l } = (0, N.L)();
    return (0, s.jsx)('div', {
        className: y.list,
        children: r
            ? (0, s.jsx)(u.$jN, {})
            : l.map((e, r) =>
                  (0, s.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, s.jsx)(
                                  S,
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
                                      className: y.separator
                                  })
                          ]
                      },
                      e.id
                  )
              )
    });
}
