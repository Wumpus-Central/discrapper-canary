s.d(t, { default: () => x }), s(47120);
var n = s(200651),
    r = s(192379),
    i = s(990547),
    o = s(442837),
    a = s(481060),
    l = s(213609),
    d = s(594174),
    c = s(726745),
    h = s(475062),
    u = s(760213),
    m = s(71509),
    f = s(981631),
    p = s(388032),
    _ = s(279647);
let g = {
    0: a.CgR.SMALL,
    1: a.CgR.DYNAMIC
};
function x(e) {
    let { transitionState: t, onClose: s } = e,
        [x, C] = r.useState(0),
        { currentUser: b, multiAccountUsers: k } = (0, o.cj)([d.default, c.Z], () => ({
            currentUser: d.default.getCurrentUser(),
            multiAccountUsers: c.Z.getUsers()
        })),
        [R, N] = r.useState(!1),
        [w, A] = r.useState(f.lds),
        [v, T] = r.useState(null);
    r.useEffect(() => {
        if (R)
            T(
                (0, n.jsx)(a.Wn, {
                    messageType: a.QYI.ERROR,
                    className: _.infoMessage,
                    children: p.intl.format(p.t.HAuRSE, { maxNumAccounts: m.$H })
                })
            ),
                A(f.lds);
        else if (null != w) {
            let e = d.default.getUser(w);
            null != e &&
                T(
                    (0, n.jsx)(a.Wn, {
                        messageType: a.QYI.POSITIVE,
                        className: _.infoMessage,
                        children: p.intl.format(p.t['09qidX'], { username: e.username })
                    })
                ),
                N(!1);
        }
    }, [w, R]),
        r.useEffect(() => {
            k.length < m.$H && N(!1);
        }, [k]),
        (0, l.Z)({
            type: i.ImpressionTypes.MODAL,
            name: 0 === x ? i.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : i.ImpressionNames.USER_LOGIN
        });
    let j = null;
    return (
        0 === x
            ? (j = (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(a.xBx, {
                          separator: !1,
                          children: (0, n.jsxs)('div', {
                              className: _.header,
                              children: [
                                  (0, n.jsx)(a.X6q, {
                                      variant: 'heading-xl/semibold',
                                      color: 'header-primary',
                                      children: p.intl.string(p.t.WbFpq6)
                                  }),
                                  (0, n.jsx)(a.Text, {
                                      className: _.subheaderText,
                                      color: 'header-secondary',
                                      variant: 'text-md/normal',
                                      children: p.intl.string(p.t['+1Uk3d'])
                                  })
                              ]
                          })
                      }),
                      (0, n.jsxs)(a.hzk, {
                          children: [
                              v,
                              (0, n.jsx)(u.Z, {
                                  actionText: p.intl.string(p.t.Wf421N),
                                  onAction: (e, t) => {
                                      switch (e) {
                                          case u.W.LOGIN_REQUIRED:
                                              C(1);
                                              break;
                                          case u.W.SWITCHED:
                                              s();
                                              break;
                                          case u.W.REMOVED:
                                              t === (null == b ? void 0 : b.id) && s(), A(t);
                                      }
                                  }
                              }),
                              (0, n.jsx)('div', {
                                  className: _.actions,
                                  children: (0, n.jsx)(a.zxk, {
                                      look: a.zxk.Looks.LINK,
                                      color: a.zxk.Colors.PRIMARY,
                                      onClick: () => {
                                          if (k.length >= m.$H) {
                                              N(!0);
                                              return;
                                          }
                                          C(1);
                                      },
                                      size: a.zxk.Sizes.MEDIUM,
                                      children: (0, n.jsx)(a.Text, {
                                          variant: 'text-sm/semibold',
                                          children: p.intl.string(p.t['9g2mqa'])
                                      })
                                  })
                              })
                          ]
                      })
                  ]
              }))
            : 1 === x &&
              (j = (0, n.jsx)(h.Z, {
                  onClose: () => {
                      C(0);
                  }
              })),
        (0, n.jsx)(a.Y0X, {
            className: _.modal,
            transitionState: t,
            size: g[x],
            'aria-label': p.intl.string(p.t.WbFpq6),
            children: (0, n.jsx)(a.qBt, {
                step: x,
                steps: [0, 1],
                children: j
            })
        })
    );
}
