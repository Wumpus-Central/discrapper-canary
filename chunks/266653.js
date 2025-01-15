s.r(t),
    s.d(t, {
        default: function () {
            return b;
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
    C = s(388032),
    _ = s(896631);
((o = n || (n = {}))[(o.MANAGE_ACCOUNTS = 0)] = 'MANAGE_ACCOUNTS'), (o[(o.LOGIN = 1)] = 'LOGIN');
let A = {
    0: d.ModalSize.SMALL,
    1: d.ModalSize.DYNAMIC
};
function b(e) {
    let { transitionState: t, onClose: s } = e,
        [n, o] = i.useState(0),
        { currentUser: b, multiAccountUsers: N } = (0, l.cj)([h.default, f.Z], () => ({
            currentUser: h.default.getCurrentUser(),
            multiAccountUsers: f.Z.getUsers()
        })),
        [T, R] = i.useState(!1),
        [v, E] = i.useState(x.lds),
        [I, M] = i.useState(null);
    i.useEffect(() => {
        if (T)
            M(
                (0, r.jsx)(d.HelpMessage, {
                    messageType: d.HelpMessageTypes.ERROR,
                    className: _.infoMessage,
                    children: C.intl.format(C.t.HAuRSE, { maxNumAccounts: g.$H })
                })
            ),
                E(x.lds);
        else if (null != v) {
            let e = h.default.getUser(v);
            null != e &&
                M(
                    (0, r.jsx)(d.HelpMessage, {
                        messageType: d.HelpMessageTypes.POSITIVE,
                        className: _.infoMessage,
                        children: C.intl.format(C.t['09qidX'], { username: e.username })
                    })
                ),
                R(!1);
        }
    }, [v, T]),
        i.useEffect(() => {
            N.length < g.$H && R(!1);
        }, [N]),
        (0, u.Z)({
            type: a.ImpressionTypes.MODAL,
            name: 0 === n ? a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING : a.ImpressionNames.USER_LOGIN
        });
    let w = null;
    return (
        0 === n
            ? (w = (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(d.ModalHeader, {
                          separator: !1,
                          children: (0, r.jsxs)('div', {
                              className: _.header,
                              children: [
                                  (0, r.jsx)(d.Heading, {
                                      variant: 'heading-xl/semibold',
                                      color: 'header-primary',
                                      children: C.intl.string(C.t.WbFpq6)
                                  }),
                                  (0, r.jsx)(d.Text, {
                                      className: _.subheaderText,
                                      color: 'header-secondary',
                                      variant: 'text-md/normal',
                                      children: C.intl.string(C.t['+1Uk3d'])
                                  })
                              ]
                          })
                      }),
                      (0, r.jsxs)(d.ModalContent, {
                          children: [
                              I,
                              (0, r.jsx)(m.Z, {
                                  actionText: C.intl.string(C.t.Wf421N),
                                  onAction: (e, t) => {
                                      switch (e) {
                                          case m.W.LOGIN_REQUIRED:
                                              o(1);
                                              break;
                                          case m.W.SWITCHED:
                                              s();
                                              break;
                                          case m.W.REMOVED:
                                              t === (null == b ? void 0 : b.id) && s(), E(t);
                                      }
                                  }
                              }),
                              (0, r.jsx)('div', {
                                  className: _.actions,
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
                                          children: C.intl.string(C.t['9g2mqa'])
                                      })
                                  })
                              })
                          ]
                      })
                  ]
              }))
            : 1 === n &&
              (w = (0, r.jsx)(p.Z, {
                  onClose: () => {
                      c.Z.dispatch({ type: 'CLEAR_AUTHENTICATION_ERRORS' }), o(0);
                  }
              })),
        (0, r.jsx)(d.ModalRoot, {
            className: _.modal,
            transitionState: t,
            size: A[n],
            'aria-label': C.intl.string(C.t.WbFpq6),
            children: (0, r.jsx)(d.Sequencer, {
                step: n,
                steps: [0, 1],
                children: w
            })
        })
    );
}
