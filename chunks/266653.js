(s.d(t, { default: () => x }), s(388685));
var n = s(255367),
    r = s(73800),
    i = s(990547),
    o = s(442837),
    a = s(481060),
    l = s(213609),
    c = s(594174),
    d = s(726745),
    h = s(475062),
    u = s(760213),
    p = s(71509),
    m = s(981631),
    f = s(388032),
    g = s(248910);
let _ = {
    0: a.CgR.SMALL,
    1: a.CgR.DYNAMIC
};
function x(e) {
    let { transitionState: t, onClose: s } = e,
        [x, b] = r.useState(0),
        { currentUser: C, multiAccountUsers: j } = (0, o.cj)([c.default, d.Z], () => ({
            currentUser: c.default.getCurrentUser(),
            multiAccountUsers: d.Z.getUsers()
        })),
        [w, y] = r.useState(!1),
        [v, P] = r.useState(m.lds),
        [R, A] = r.useState(null);
    (r.useEffect(() => {
        if (w)
            (A(
                (0, n.jsx)(a.Wn, {
                    messageType: a.QYI.ERROR,
                    className: g.infoMessage,
                    children: f.intl.format(f.t.HAuRSE, { maxNumAccounts: p.$H })
                })
            ),
                P(m.lds));
        else if (null != v) {
            let e = c.default.getUser(v);
            (null != e &&
                A(
                    (0, n.jsx)(a.Wn, {
                        messageType: a.QYI.POSITIVE,
                        className: g.infoMessage,
                        children: f.intl.format(f.t['09qidX'], { username: e.username })
                    })
                ),
                y(!1));
        }
    }, [v, w]),
        r.useEffect(() => {
            j.length < p.$H && y(!1);
        }, [j]),
        (0, l.Z)({
            type: i.ImpressionTypes.MODAL,
            name: 0 === x ? i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : i.ImpressionNames.USER_LOGIN
        }));
    let T = null;
    return (
        0 === x
            ? (T = (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(a.xBx, {
                          separator: !1,
                          children: (0, n.jsxs)('div', {
                              className: g.header,
                              children: [
                                  (0, n.jsx)(a.X6q, {
                                      variant: 'heading-xl/semibold',
                                      color: 'header-primary',
                                      children: f.intl.string(f.t.WbFpq6)
                                  }),
                                  (0, n.jsx)(a.Text, {
                                      className: g.subheaderText,
                                      color: 'header-secondary',
                                      variant: 'text-md/normal',
                                      children: f.intl.string(f.t['+1Uk3d'])
                                  })
                              ]
                          })
                      }),
                      (0, n.jsxs)(a.hzk, {
                          children: [
                              R,
                              (0, n.jsx)(u.Z, {
                                  actionText: f.intl.string(f.t.Wf421N),
                                  onAction: (e, t) => {
                                      switch (e) {
                                          case u.W.LOGIN_REQUIRED:
                                              b(1);
                                              break;
                                          case u.W.SWITCHED:
                                              s();
                                              break;
                                          case u.W.REMOVED:
                                              (t === (null == C ? void 0 : C.id) && s(), P(t));
                                      }
                                  }
                              }),
                              (0, n.jsx)('div', {
                                  className: g.actions,
                                  children: (0, n.jsx)(a.Avr, {
                                      size: 'sm',
                                      variant: 'secondary',
                                      textVariant: 'text-sm/semibold',
                                      text: f.intl.string(f.t['9g2mqa']),
                                      onClick: () => {
                                          if (j.length >= p.$H) return void y(!0);
                                          b(1);
                                      }
                                  })
                              })
                          ]
                      })
                  ]
              }))
            : 1 === x &&
              (T = (0, n.jsx)(h.Z, {
                  onClose: () => {
                      b(0);
                  }
              })),
        (0, n.jsx)(a.Y0X, {
            className: g.modal,
            transitionState: t,
            size: _[x],
            'aria-label': f.intl.string(f.t.WbFpq6),
            parentComponent: 'SwitchAccountsModal',
            children: (0, n.jsx)(a.qBt, {
                step: x,
                steps: [0, 1],
                children: T
            })
        })
    );
}
