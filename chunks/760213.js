(n.d(t, {
    W: () => O,
    Z: () => y
}),
    n(457542));
var r,
    i = n(255367),
    l = n(73800),
    s = n(120356),
    a = n.n(s),
    o = n(442837),
    c = n(481060),
    u = n(893776),
    d = n(239091),
    h = n(598077),
    p = n(314897),
    g = n(246946),
    m = n(594174),
    f = n(626135),
    _ = n(51144),
    x = n(480387),
    b = n(726745),
    E = n(251423),
    v = n(981631),
    I = n(388032),
    j = n(576052),
    O = (((r = {})[(r.LOGIN_REQUIRED = 0)] = 'LOGIN_REQUIRED'), (r[(r.SWITCHED = 1)] = 'SWITCHED'), (r[(r.REMOVED = 2)] = 'REMOVED'), r);
function S(e) {
    let { actionText: t, user: n, onAction: r } = e,
        {
            currentUser: l,
            hidePrivateData: s,
            isAuthenticated: E
        } = (0, o.cj)([m.default, g.Z, p.default], () => ({
            currentUser: m.default.getCurrentUser(),
            hidePrivateData: g.Z.hidePersonalInformation,
            isAuthenticated: p.default.isAuthenticated()
        })),
        O = new h.Z(n),
        S = E && (null == l ? void 0 : l.id) === O.id,
        y = n.tokenStatus === b.q.INVALID,
        N = s || O.hasUniqueUsername() ? null : '#'.concat(O.discriminator),
        C = null;
    return (
        S
            ? (C = (0, i.jsx)(c.Text, {
                  variant: 'text-sm/semibold',
                  className: j.hintText,
                  color: 'text-feedback-positive',
                  children: I.intl.string(I.t.seV8ys)
              }))
            : y &&
              (C = (0, i.jsx)(c.Text, {
                  variant: 'text-sm/semibold',
                  className: j.hintText,
                  color: 'text-danger',
                  children: I.intl.string(I.t.tYX2pq)
              })),
        (0, i.jsx)('div', {
            className: j.accountCard,
            children: (0, i.jsxs)('div', {
                className: j.userDetails,
                children: [
                    (0, i.jsx)(c.qEK, {
                        src: O.getAvatarURL(void 0, 40),
                        size: c.EFr.SIZE_40,
                        'aria-label': n.username
                    }),
                    (0, i.jsxs)('div', {
                        className: a()(j.usernameSection, { [j.hasActionMaxWidth]: !S }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: j.username,
                                children: [
                                    (0, i.jsx)(c.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        className: j.textOverflow,
                                        children: _.ZP.getUserTag(O, {
                                            mode: 'username',
                                            identifiable: s ? 'never' : 'always'
                                        })
                                    }),
                                    (0, i.jsx)(c.Text, {
                                        color: 'header-secondary',
                                        variant: 'text-sm/normal',
                                        children: N
                                    })
                                ]
                            }),
                            C
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: j.userActions,
                        children: [
                            !S &&
                                (0, i.jsx)(c.zxk, {
                                    variant: 'secondary',
                                    text: y ? I.intl.string(I.t['DSN+h4']) : t,
                                    onClick: function () {
                                        if (y) return void r(0, n.id);
                                        (f.default.track(v.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: v.jXE.MANAGE_ACCOUNTS_MODAL } }), x.yD(n.id), r(1, n.id));
                                    }
                                }),
                            (0, i.jsx)(c.hU, {
                                icon: c.xhG,
                                onClick: function (e) {
                                    (0, d.vq)(e, (e) => {
                                        let { onSelect: t } = e;
                                        return (0, i.jsx)(c.v2r, {
                                            'aria-label': I.intl.string(I.t['41qiDQ']),
                                            navId: 'manage-multi-account',
                                            onClose: d.Zy,
                                            onSelect: t,
                                            children: (0, i.jsx)(c.sNh, {
                                                id: 'remove-account',
                                                label: I.intl.string(I.t.lSLMaW),
                                                action: () => {
                                                    u.Z.logout('multi_accounts_list', null, n.id).finally(() => {
                                                        x.Zd(n.id);
                                                    });
                                                    let e = {};
                                                    (null != l ? (e.section = v.jXE.MANAGE_ACCOUNTS_MODAL) : (e.page = v.Usc.LOGIN), f.default.track(v.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, { location: e }), r(2, n.id), null != t && t());
                                                },
                                                color: 'danger'
                                            })
                                        });
                                    });
                                },
                                'aria-label': I.intl.string(I.t.PdRCRk),
                                variant: 'icon-only'
                            })
                        ]
                    })
                ]
            })
        })
    );
}
function y(e) {
    let { actionText: t, onAction: n } = e,
        { isLoading: r, multiAccountUsers: s } = (0, E.L)();
    return (0, i.jsx)('div', {
        className: j.list,
        children: r
            ? (0, i.jsx)(c.$jN, { className: j.spinner })
            : s.map((e, r) =>
                  (0, i.jsxs)(
                      l.Fragment,
                      {
                          children: [
                              (0, i.jsx)(
                                  S,
                                  {
                                      user: e,
                                      actionText: t,
                                      onAction: n
                                  },
                                  e.id
                              ),
                              s.length - 1 !== r &&
                                  (0, i.jsx)('div', {
                                      role: 'separator',
                                      className: j.separator
                                  })
                          ]
                      },
                      e.id
                  )
              )
    });
}
