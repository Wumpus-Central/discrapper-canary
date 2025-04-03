s.d(t, { default: () => x }), s(47120);
var r = s(200651),
    n = s(192379),
    o = s(990547),
    i = s(442837),
    a = s(481060),
    l = s(213609),
    c = s(594174),
    d = s(726745),
    u = s(475062),
    h = s(760213),
    p = s(71509),
    f = s(981631),
    m = s(388032),
    g = s(248910);
let _ = {
    0: a.CgR.SMALL,
    1: a.CgR.DYNAMIC
};
function x(e) {
    let { transitionState: t, onClose: s } = e,
        [x, b] = n.useState(0),
        { currentUser: N, multiAccountUsers: C } = (0, i.cj)([c.default, d.Z], () => ({
            currentUser: c.default.getCurrentUser(),
            multiAccountUsers: d.Z.getUsers()
        })),
        [j, w] = n.useState(!1),
        [k, R] = n.useState(f.lds),
        [P, y] = n.useState(null);
    n.useEffect(() => {
        if (j)
            y(
                (0, r.jsx)(a.Wn, {
                    messageType: a.QYI.ERROR,
                    className: g.infoMessage,
                    children: m.NW.format(m.t.HAuRSE, { maxNumAccounts: p.$H })
                })
            ),
                R(f.lds);
        else if (null != k) {
            let e = c.default.getUser(k);
            null != e &&
                y(
                    (0, r.jsx)(a.Wn, {
                        messageType: a.QYI.POSITIVE,
                        className: g.infoMessage,
                        children: m.NW.format(m.t['09qidX'], { username: e.username })
                    })
                ),
                w(!1);
        }
    }, [k, j]),
        n.useEffect(() => {
            C.length < p.$H && w(!1);
        }, [C]),
        (0, l.Z)({
            type: o.ImpressionTypes.MODAL,
            name: 0 === x ? o.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : o.ImpressionNames.USER_LOGIN
        });
    let A = null;
    return (
        0 === x
            ? (A = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(a.xBx, {
                          separator: !1,
                          children: (0, r.jsxs)('div', {
                              className: g.header,
                              children: [
                                  (0, r.jsx)(a.X6q, {
                                      variant: 'heading-xl/semibold',
                                      color: 'header-primary',
                                      children: m.NW.string(m.t.WbFpq6)
                                  }),
                                  (0, r.jsx)(a.Text, {
                                      className: g.subheaderText,
                                      color: 'header-secondary',
                                      variant: 'text-md/normal',
                                      children: m.NW.string(m.t['+1Uk3d'])
                                  })
                              ]
                          })
                      }),
                      (0, r.jsxs)(a.hzk, {
                          children: [
                              P,
                              (0, r.jsx)(h.Z, {
                                  actionText: m.NW.string(m.t.Wf421N),
                                  onAction: (e, t) => {
                                      switch (e) {
                                          case h.W.LOGIN_REQUIRED:
                                              b(1);
                                              break;
                                          case h.W.SWITCHED:
                                              s();
                                              break;
                                          case h.W.REMOVED:
                                              t === (null == N ? void 0 : N.id) && s(), R(t);
                                      }
                                  }
                              }),
                              (0, r.jsx)('div', {
                                  className: g.actions,
                                  children: (0, r.jsx)(a.zxk, {
                                      look: a.zxk.Looks.LINK,
                                      color: a.zxk.Colors.PRIMARY,
                                      onClick: () => {
                                          if (C.length >= p.$H) return void w(!0);
                                          b(1);
                                      },
                                      size: a.zxk.Sizes.MEDIUM,
                                      children: (0, r.jsx)(a.Text, {
                                          variant: 'text-sm/semibold',
                                          children: m.NW.string(m.t['9g2mqa'])
                                      })
                                  })
                              })
                          ]
                      })
                  ]
              }))
            : 1 === x &&
              (A = (0, r.jsx)(u.Z, {
                  onClose: () => {
                      b(0);
                  }
              })),
        (0, r.jsx)(a.Y0X, {
            className: g.modal,
            transitionState: t,
            size: _[x],
            'aria-label': m.NW.string(m.t.WbFpq6),
            children: (0, r.jsx)(a.qBt, {
                step: x,
                steps: [0, 1],
                children: A
            })
        })
    );
}
