r.d(t, {
    W: () => y,
    Z: () => S
}),
    r(773603);
var n,
    s = r(200651),
    i = r(192379),
    a = r(120356),
    l = r.n(a),
    o = r(442837),
    c = r(481060),
    u = r(893776),
    d = r(239091),
    h = r(598077),
    p = r(314897),
    m = r(246946),
    f = r(594174),
    x = r(626135),
    g = r(51144),
    N = r(480387),
    j = r(726745),
    v = r(251423),
    C = r(981631),
    O = r(388032),
    b = r(576052),
    y = (((n = {})[(n.LOGIN_REQUIRED = 0)] = 'LOGIN_REQUIRED'), (n[(n.SWITCHED = 1)] = 'SWITCHED'), (n[(n.REMOVED = 2)] = 'REMOVED'), n);
function E(e) {
    let { actionText: t, user: r, onAction: n } = e,
        {
            currentUser: i,
            hidePrivateData: a,
            isAuthenticated: v
        } = (0, o.cj)([f.default, m.Z, p.default], () => ({
            currentUser: f.default.getCurrentUser(),
            hidePrivateData: m.Z.hidePersonalInformation,
            isAuthenticated: p.default.isAuthenticated()
        })),
        y = new h.Z(r),
        E = v && (null == i ? void 0 : i.id) === y.id,
        S = r.tokenStatus === j.q.INVALID,
        P = a || y.isPomelo() ? null : '#'.concat(y.discriminator),
        T = null;
    return (
        E
            ? (T = (0, s.jsx)(c.Text, {
                  variant: 'text-sm/semibold',
                  className: b.hintText,
                  color: 'text-positive',
                  children: O.NW.string(O.t.seV8ys)
              }))
            : S &&
              (T = (0, s.jsx)(c.Text, {
                  variant: 'text-sm/semibold',
                  className: b.hintText,
                  color: 'text-danger',
                  children: O.NW.string(O.t.tYX2pq)
              })),
        (0, s.jsx)('div', {
            className: b.accountCard,
            children: (0, s.jsxs)('div', {
                className: b.userDetails,
                children: [
                    (0, s.jsx)(c.qEK, {
                        src: y.getAvatarURL(void 0, 40),
                        size: c.EFr.SIZE_40,
                        'aria-label': r.username
                    }),
                    (0, s.jsxs)('div', {
                        className: l()(b.usernameSection, { [b.hasActionMaxWidth]: !E }),
                        children: [
                            (0, s.jsxs)('div', {
                                className: b.username,
                                children: [
                                    (0, s.jsx)(c.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        className: b.textOverflow,
                                        children: g.ZP.getUserTag(y, {
                                            mode: 'username',
                                            identifiable: a ? 'never' : 'always'
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
                        className: b.userActions,
                        children: [
                            !E &&
                                (0, s.jsx)(c.zxk, {
                                    onClick: function () {
                                        if (S) return void n(0, r.id);
                                        x.default.track(C.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: C.jXE.MANAGE_ACCOUNTS_MODAL } }), N.yD(r.id), n(1, r.id);
                                    },
                                    color: c.zxk.Colors.PRIMARY,
                                    children: S ? O.NW.string(O.t['DSN+h4']) : t
                                }),
                            (0, s.jsx)(c.zxk, {
                                className: b.userActionMenu,
                                onClick: function (e) {
                                    (0, d.vq)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, s.jsx)(c.v2r, {
                                            'aria-label': O.NW.string(O.t['41qiDQ']),
                                            navId: 'manage-multi-account',
                                            onClose: d.Zy,
                                            onSelect: t,
                                            children: (0, s.jsx)(c.sNh, {
                                                id: 'remove-account',
                                                label: O.NW.string(O.t.lSLMaW),
                                                action: () => {
                                                    u.Z.logout(null, r.id).finally(() => {
                                                        N.Zd(r.id);
                                                    });
                                                    let e = {};
                                                    null != i ? (e.section = C.jXE.MANAGE_ACCOUNTS_MODAL) : (e.page = C.Usc.LOGIN), x.default.track(C.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, { location: e }), n(2, r.id), null != t && t();
                                                },
                                                color: 'danger'
                                            })
                                        });
                                    });
                                },
                                size: c.zxk.Sizes.ICON,
                                look: c.zxk.Looks.BLANK,
                                color: c.zxk.Colors.WHITE,
                                'aria-label': O.NW.string(O.t.PdRCRk),
                                children: (0, s.jsx)(c.xhG, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: b.overflowMenuIcon
                                })
                            })
                        ]
                    })
                ]
            })
        })
    );
}
function S(e) {
    let { actionText: t, onAction: r } = e,
        { isLoading: n, multiAccountUsers: a } = (0, v.L)();
    return (0, s.jsx)('div', {
        className: b.list,
        children: n
            ? (0, s.jsx)(c.$jN, {})
            : a.map((e, n) =>
                  (0, s.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, s.jsx)(
                                  E,
                                  {
                                      user: e,
                                      actionText: t,
                                      onAction: r
                                  },
                                  e.id
                              ),
                              a.length - 1 !== n &&
                                  (0, s.jsx)('div', {
                                      role: 'separator',
                                      className: b.separator
                                  })
                          ]
                      },
                      e.id
                  )
              )
    });
}
