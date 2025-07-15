n.d(t, { default: () => _ });
var r = n(255367),
    i = n(73800),
    l = n(215569),
    o = n(146187),
    s = n(257465),
    a = n(755721),
    c = n(481060),
    u = n(852860),
    d = n(313201),
    m = n(944163),
    f = n(266395),
    h = n(187565),
    p = n(200305),
    x = n(592286),
    g = n(388032),
    b = n(916199);
let v = () =>
        (0, r.jsx)(u.Z, {
            submitting: !1,
            message: g.intl.string(g.t['8g514e']),
            onReset: () => {
                (0, f.PE)(!1);
            },
            onResetText: g.intl.string(g.t['ETE/oK']),
            onSave: () => {
                ((0, f.PE)(!1), (0, c.Mr3)(x.Pn));
            },
            onSaveText: g.intl.string(g.t['Xt+UaW']),
            onSaveButtonColor: a.Tt.RED
        }),
    _ = (e) => {
        let { transitionState: t, guildId: n, onClose: a, onComplete: u, inviteKey: x, isPreview: g = !1 } = e,
            _ = (0, f.rb)((e) => e.shouldShowWarning),
            { verificationForm: j, hasFetched: C } = (0, h.ng)(n, g, x),
            O = (0, d.Dt)();
        return (i.useEffect(() => {
            C && j === m.t && a();
        }, [C, a, j]),
        j === m.t)
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)(s.IX, {
                          transitionState: t,
                          'aria-labelledby': O,
                          size: 'xl',
                          onClose: a,
                          children: [
                              (0, r.jsx)('div', {
                                  className: b.closeButton,
                                  children: (0, r.jsx)(o.P, { onClick: () => a(!1) })
                              }),
                              (0, r.jsx)('div', {
                                  className: b.container,
                                  children: (0, r.jsx)(p.Z, {
                                      verificationForm: j,
                                      headerId: O,
                                      guildId: n,
                                      onClose: a,
                                      onComplete: u,
                                      isPreview: g
                                  })
                              })
                          ]
                      }),
                      (0, r.jsx)(l.W, {
                          children:
                              !0 === _ &&
                              (0, r.jsx)(c.oXn, {
                                  className: b.notice,
                                  children: (0, r.jsx)(v, {})
                              })
                      })
                  ]
              });
    };
