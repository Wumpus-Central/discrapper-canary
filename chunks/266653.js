s.d(t, { default: () => x }), s(47120);
var n = s(200651),
    r = s(192379),
    o = s(990547),
    i = s(442837),
    a = s(481060),
    l = s(213609),
    c = s(594174),
    u = s(726745),
    d = s(475062),
    h = s(760213),
    p = s(71509),
    f = s(981631),
    m = s(388032),
    g = s(765471);
let _ = {
    0: a.CgR.SMALL,
    1: a.CgR.DYNAMIC
};
function x(e) {
    let { transitionState: t, onClose: s } = e,
        [x, C] = r.useState(0),
        { currentUser: y, multiAccountUsers: b } = (0, i.cj)([c.default, u.Z], () => ({
            currentUser: c.default.getCurrentUser(),
            multiAccountUsers: u.Z.getUsers()
        })),
        [w, v] = r.useState(!1),
        [k, N] = r.useState(f.lds),
        [R, j] = r.useState(null);
    r.useEffect(() => {
        if (w)
            j(
                (0, n.jsx)(a.Wn, {
                    messageType: a.QYI.ERROR,
                    className: g.infoMessage,
                    children: m.intl.format(m.t.HAuRSE, { maxNumAccounts: p.$H })
                })
            ),
                N(f.lds);
        else if (null != k) {
            let e = c.default.getUser(k);
            null != e &&
                j(
                    (0, n.jsx)(a.Wn, {
                        messageType: a.QYI.POSITIVE,
                        className: g.infoMessage,
                        children: m.intl.format(m.t['09qidX'], { username: e.username })
                    })
                ),
                v(!1);
        }
    }, [k, w]),
        r.useEffect(() => {
            b.length < p.$H && v(!1);
        }, [b]),
        (0, l.Z)({
            type: o.ImpressionTypes.MODAL,
            name: 0 === x ? o.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : o.ImpressionNames.USER_LOGIN
        });
    let A = null;
    return (
        0 === x
            ? (A = (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsx)(a.xBx, {
                          separator: !1,
                          children: (0, n.jsxs)('div', {
                              className: g.header,
                              children: [
                                  (0, n.jsx)(a.X6q, {
                                      variant: 'heading-xl/semibold',
                                      color: 'header-primary',
                                      children: m.intl.string(m.t.WbFpq6)
                                  }),
                                  (0, n.jsx)(a.Text, {
                                      className: g.subheaderText,
                                      color: 'header-secondary',
                                      variant: 'text-md/normal',
                                      children: m.intl.string(m.t['+1Uk3d'])
                                  })
                              ]
                          })
                      }),
                      (0, n.jsxs)(a.hzk, {
                          children: [
                              R,
                              (0, n.jsx)(h.Z, {
                                  actionText: m.intl.string(m.t.Wf421N),
                                  onAction: (e, t) => {
                                      switch (e) {
                                          case h.W.LOGIN_REQUIRED:
                                              C(1);
                                              break;
                                          case h.W.SWITCHED:
                                              s();
                                              break;
                                          case h.W.REMOVED:
                                              t === (null == y ? void 0 : y.id) && s(), N(t);
                                      }
                                  }
                              }),
                              (0, n.jsx)('div', {
                                  className: g.actions,
                                  children: (0, n.jsx)(a.zxk, {
                                      look: a.zxk.Looks.LINK,
                                      color: a.zxk.Colors.PRIMARY,
                                      onClick: () => {
                                          if (b.length >= p.$H) {
                                              v(!0);
                                              return;
                                          }
                                          C(1);
                                      },
                                      size: a.zxk.Sizes.MEDIUM,
                                      children: (0, n.jsx)(a.Text, {
                                          variant: 'text-sm/semibold',
                                          children: m.intl.string(m.t['9g2mqa'])
                                      })
                                  })
                              })
                          ]
                      })
                  ]
              }))
            : 1 === x &&
              (A = (0, n.jsx)(d.Z, {
                  onClose: () => {
                      C(0);
                  }
              })),
        (0, n.jsx)(a.Y0X, {
            className: g.modal,
            transitionState: t,
            size: _[x],
            'aria-label': m.intl.string(m.t.WbFpq6),
            children: (0, n.jsx)(a.qBt, {
                step: x,
                steps: [0, 1],
                children: A
            })
        })
    );
}
