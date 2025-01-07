s.r(t),
    s.d(t, {
        default: function () {
            return A;
        }
    }),
    s(47120);
var n,
    o,
    r = s(200651),
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
    _ = s(388032),
    C = s(279647);
((o = n || (n = {}))[(o.MANAGE_ACCOUNTS = 0)] = 'MANAGE_ACCOUNTS'), (o[(o.LOGIN = 1)] = 'LOGIN');
let b = {
    0: d.ModalSize.SMALL,
    1: d.ModalSize.DYNAMIC
};
function A(e) {
    let { transitionState: t, onClose: s } = e,
        [n, o] = i.useState(0),
        { currentUser: A, multiAccountUsers: N } = (0, l.cj)([h.default, f.Z], () => ({
            currentUser: h.default.getCurrentUser(),
            multiAccountUsers: f.Z.getUsers()
        })),
        [T, R] = i.useState(!1),
        [I, v] = i.useState(x.lds),
        [S, E] = i.useState(null);
    i.useEffect(() => {
        if (T)
            E(
                (0, r.jsx)(d.HelpMessage, {
                    messageType: d.HelpMessageTypes.ERROR,
                    className: C.infoMessage,
                    children: _.intl.format(_.t.HAuRSE, { maxNumAccounts: g.$H })
                })
            ),
                v(x.lds);
        else if (null != I) {
            let e = h.default.getUser(I);
            null != e &&
                E(
                    (0, r.jsx)(d.HelpMessage, {
                        messageType: d.HelpMessageTypes.POSITIVE,
                        className: C.infoMessage,
                        children: _.intl.format(_.t['09qidX'], { username: e.username })
                    })
                ),
                R(!1);
        }
    }, [I, T]),
        i.useEffect(() => {
            N.length < g.$H && R(!1);
        }, [N]),
        (0, u.Z)({
            type: a.ImpressionTypes.MODAL,
            name: 0 === n ? a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : a.ImpressionNames.USER_LOGIN
        });
    let M = null;
    return (
        0 === n
            ? (M = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(d.ModalHeader, {
                          separator: !1,
                          children: (0, r.jsxs)('div', {
                              className: C.header,
                              children: [
                                  (0, r.jsx)(d.Heading, {
                                      variant: 'heading-xl/semibold',
                                      color: 'header-primary',
                                      children: _.intl.string(_.t.WbFpq6)
                                  }),
                                  (0, r.jsx)(d.Text, {
                                      className: C.subheaderText,
                                      color: 'header-secondary',
                                      variant: 'text-md/normal',
                                      children: _.intl.string(_.t['+1Uk3d'])
                                  })
                              ]
                          })
                      }),
                      (0, r.jsxs)(d.ModalContent, {
                          children: [
                              S,
                              (0, r.jsx)(m.Z, {
                                  actionText: _.intl.string(_.t.Wf421N),
                                  onAction: (e, t) => {
                                      switch (e) {
                                          case m.W.LOGIN_REQUIRED:
                                              o(1);
                                              break;
                                          case m.W.SWITCHED:
                                              s();
                                              break;
                                          case m.W.REMOVED:
                                              t === (null == A ? void 0 : A.id) && s(), v(t);
                                      }
                                  }
                              }),
                              (0, r.jsx)('div', {
                                  className: C.actions,
                                  children: (0, r.jsx)(d.Button, {
                                      look: d.Button.Looks.LINK,
                                      color: d.Button.Colors.PRIMARY,
                                      onClick: () => {
                                          if (N.length >= g.$H) {
                                              R(!0);
                                              return;
                                          }
                                          o(1);
                                      },
                                      size: d.Button.Sizes.MEDIUM,
                                      children: (0, r.jsx)(d.Text, {
                                          variant: 'text-sm/semibold',
                                          children: _.intl.string(_.t['9g2mqa'])
                                      })
                                  })
                              })
                          ]
                      })
                  ]
              }))
            : 1 === n &&
              (M = (0, r.jsx)(p.Z, {
                  onClose: () => {
                      c.Z.dispatch({ type: 'CLEAR_AUTHENTICATION_ERRORS' }), o(0);
                  }
              })),
        (0, r.jsx)(d.ModalRoot, {
            className: C.modal,
            transitionState: t,
            size: b[n],
            'aria-label': _.intl.string(_.t.WbFpq6),
            children: (0, r.jsx)(d.Sequencer, {
                step: n,
                steps: [0, 1],
                children: M
            })
        })
    );
}
