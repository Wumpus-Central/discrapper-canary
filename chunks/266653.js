(s.d(t, { default: () => b }), s(388685));
var n = s(255367),
    r = s(73800),
    o = s(990547),
    i = s(442837),
    a = s(755721),
    l = s(481060),
    c = s(213609),
    d = s(594174),
    u = s(726745),
    h = s(475062),
    p = s(760213),
    m = s(71509),
    f = s(981631),
    g = s(388032),
    _ = s(248910);
let x = {
    0: l.CgR.SMALL,
    1: l.CgR.DYNAMIC
};
function b(e) {
    let { transitionState: t, onClose: s } = e,
        [b, C] = r.useState(0),
        { currentUser: j, multiAccountUsers: w } = (0, i.cj)([d.default, u.Z], () => ({
            currentUser: d.default.getCurrentUser(),
            multiAccountUsers: u.Z.getUsers()
        })),
        [y, P] = r.useState(!1),
        [v, R] = r.useState(f.lds),
        [A, N] = r.useState(null);
    (r.useEffect(() => {
        if (y)
            (N(
                (0, n.jsx)(l.Wn, {
                    messageType: l.QYI.ERROR,
                    className: _.infoMessage,
                    children: g.intl.format(g.t.HAuRSE, { maxNumAccounts: m.$H })
                })
            ),
                R(f.lds));
        else if (null != v) {
            let e = d.default.getUser(v);
            (null != e &&
                N(
                    (0, n.jsx)(l.Wn, {
                        messageType: l.QYI.POSITIVE,
                        className: _.infoMessage,
                        children: g.intl.format(g.t['09qidX'], { username: e.username })
                    })
                ),
                P(!1));
        }
    }, [v, y]),
        r.useEffect(() => {
            w.length < m.$H && P(!1);
        }, [w]),
        (0, c.Z)({
            type: o.ImpressionTypes.MODAL,
            name: 0 === b ? o.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : o.ImpressionNames.USER_LOGIN
        }));
    let S = null;
    return (
        0 === b
            ? (S = (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(l.xBx, {
                          separator: !1,
                          children: (0, n.jsxs)('div', {
                              className: _.header,
                              children: [
                                  (0, n.jsx)(l.X6q, {
                                      variant: 'heading-xl/semibold',
                                      color: 'header-primary',
                                      children: g.intl.string(g.t.WbFpq6)
                                  }),
                                  (0, n.jsx)(l.Text, {
                                      className: _.subheaderText,
                                      color: 'header-secondary',
                                      variant: 'text-md/normal',
                                      children: g.intl.string(g.t['+1Uk3d'])
                                  })
                              ]
                          })
                      }),
                      (0, n.jsxs)(l.hzk, {
                          children: [
                              A,
                              (0, n.jsx)(p.Z, {
                                  actionText: g.intl.string(g.t.Wf421N),
                                  onAction: (e, t) => {
                                      switch (e) {
                                          case p.W.LOGIN_REQUIRED:
                                              C(1);
                                              break;
                                          case p.W.SWITCHED:
                                              s();
                                              break;
                                          case p.W.REMOVED:
                                              (t === (null == j ? void 0 : j.id) && s(), R(t));
                                      }
                                  }
                              }),
                              (0, n.jsx)('div', {
                                  className: _.actions,
                                  children: (0, n.jsx)(a.zx, {
                                      look: a.zx.Looks.LINK,
                                      color: a.zx.Colors.PRIMARY,
                                      onClick: () => {
                                          if (w.length >= m.$H) return void P(!0);
                                          C(1);
                                      },
                                      size: a.zx.Sizes.MEDIUM,
                                      children: (0, n.jsx)(l.Text, {
                                          variant: 'text-sm/semibold',
                                          children: g.intl.string(g.t['9g2mqa'])
                                      })
                                  })
                              })
                          ]
                      })
                  ]
              }))
            : 1 === b &&
              (S = (0, n.jsx)(h.Z, {
                  onClose: () => {
                      C(0);
                  }
              })),
        (0, n.jsx)(l.Y0X, {
            className: _.modal,
            transitionState: t,
            size: x[b],
            'aria-label': g.intl.string(g.t.WbFpq6),
            parentComponent: 'SwitchAccountsModal',
            children: (0, n.jsx)(l.qBt, {
                step: b,
                steps: [0, 1],
                children: S
            })
        })
    );
}
