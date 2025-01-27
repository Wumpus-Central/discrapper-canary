s.r(t),
    s.d(t, {
        default: function () {
            return A;
        }
    }),
    s(47120);
var n,
    r,
    o = s(200651),
    i = s(192379),
    a = s(990547),
    l = s(442837),
    d = s(481060),
    c = s(570140),
    u = s(213609),
    h = s(594174),
    f = s(726745),
    p = s(475062),
    m = s(760213),
    g = s(71509),
    x = s(981631),
    C = s(388032),
    _ = s(279647);
((r = n || (n = {}))[(r.MANAGE_ACCOUNTS = 0)] = 'MANAGE_ACCOUNTS'), (r[(r.LOGIN = 1)] = 'LOGIN');
let b = {
    0: d.ModalSize.SMALL,
    1: d.ModalSize.DYNAMIC
};
function A(e) {
    let { transitionState: t, onClose: s } = e,
        [n, r] = i.useState(0),
        { currentUser: A, multiAccountUsers: N } = (0, l.cj)([h.default, f.Z], () => ({
            currentUser: h.default.getCurrentUser(),
            multiAccountUsers: f.Z.getUsers()
        })),
        [R, T] = i.useState(!1),
        [v, w] = i.useState(x.lds),
        [E, I] = i.useState(null);
    i.useEffect(() => {
        if (R)
            I(
                (0, o.jsx)(d.HelpMessage, {
                    messageType: d.HelpMessageTypes.ERROR,
                    className: _.infoMessage,
                    children: C.intl.format(C.t.HAuRSE, { maxNumAccounts: g.$H })
                })
            ),
                w(x.lds);
        else if (null != v) {
            let e = h.default.getUser(v);
            null != e &&
                I(
                    (0, o.jsx)(d.HelpMessage, {
                        messageType: d.HelpMessageTypes.POSITIVE,
                        className: _.infoMessage,
                        children: C.intl.format(C.t['09qidX'], { username: e.username })
                    })
                ),
                T(!1);
        }
    }, [v, R]),
        i.useEffect(() => {
            N.length < g.$H && T(!1);
        }, [N]),
        (0, u.Z)({
            type: a.ImpressionTypes.MODAL,
            name: 0 === n ? a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : a.ImpressionNames.USER_LOGIN
        });
    let j = null;
    return (
        0 === n
            ? (j = (0, o.jsxs)(o.Fragment, {
                  children: [
                      (0, o.jsx)(d.ModalHeader, {
                          separator: !1,
                          children: (0, o.jsxs)('div', {
                              className: _.header,
                              children: [
                                  (0, o.jsx)(d.Heading, {
                                      variant: 'heading-xl/semibold',
                                      color: 'header-primary',
                                      children: C.intl.string(C.t.WbFpq6)
                                  }),
                                  (0, o.jsx)(d.Text, {
                                      className: _.subheaderText,
                                      color: 'header-secondary',
                                      variant: 'text-md/normal',
                                      children: C.intl.string(C.t['+1Uk3d'])
                                  })
                              ]
                          })
                      }),
                      (0, o.jsxs)(d.ModalContent, {
                          children: [
                              E,
                              (0, o.jsx)(m.Z, {
                                  actionText: C.intl.string(C.t.Wf421N),
                                  onAction: (e, t) => {
                                      switch (e) {
                                          case m.W.LOGIN_REQUIRED:
                                              r(1);
                                              break;
                                          case m.W.SWITCHED:
                                              s();
                                              break;
                                          case m.W.REMOVED:
                                              t === (null == A ? void 0 : A.id) && s(), w(t);
                                      }
                                  }
                              }),
                              (0, o.jsx)('div', {
                                  className: _.actions,
                                  children: (0, o.jsx)(d.Button, {
                                      look: d.Button.Looks.LINK,
                                      color: d.Button.Colors.PRIMARY,
                                      onClick: () => {
                                          if (N.length >= g.$H) {
                                              T(!0);
                                              return;
                                          }
                                          r(1);
                                      },
                                      size: d.Button.Sizes.MEDIUM,
                                      children: (0, o.jsx)(d.Text, {
                                          variant: 'text-sm/semibold',
                                          children: C.intl.string(C.t['9g2mqa'])
                                      })
                                  })
                              })
                          ]
                      })
                  ]
              }))
            : 1 === n &&
              (j = (0, o.jsx)(p.Z, {
                  onClose: () => {
                      c.Z.dispatch({ type: 'CLEAR_AUTHENTICATION_ERRORS' }), r(0);
                  }
              })),
        (0, o.jsx)(d.ModalRoot, {
            className: _.modal,
            transitionState: t,
            size: b[n],
            'aria-label': C.intl.string(C.t.WbFpq6),
            children: (0, o.jsx)(d.Sequencer, {
                step: n,
                steps: [0, 1],
                children: j
            })
        })
    );
}
