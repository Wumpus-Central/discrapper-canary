n.d(t, { Z: () => E }), n(388685);
var r = n(255367),
    o = n(73800),
    l = n(120356),
    a = n.n(l),
    i = n(392711),
    s = n.n(i),
    c = n(481060),
    u = n(493773),
    d = n(110924),
    _ = n(600164),
    f = n(313201),
    m = n(237617),
    b = n(572539),
    h = n(648159),
    p = n(63063),
    g = n(957115),
    O = n(531578),
    x = n(388032),
    v = n(397861),
    y = n(675138);
function k() {
    return (0, r.jsx)(c.Text, {
        className: v.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: x.intl.format(x.t.ybi2tL, { helpdeskURL: p.Z.getSubmitRequestURL() })
    });
}
function E(e) {
    var t, n;
    let { header: l, body: i, problems: p, transitionState: E, feedbackProblems: S = {}, otherKey: j, hasCloseButton: C, onSubmit: N, onClose: T, canDismissForever: A = !0, showHelpdeskLink: I = !0 } = e,
        P = (0, d.Z)(p),
        [Z, w] = o.useState(!1),
        [B, D] = o.useState(null),
        [M, R] = o.useState(s().shuffle(p)),
        [L, F] = o.useState(''),
        [z, H] = o.useState(!1),
        U = (0, f.Dt)(),
        Y = (0, m.Z)(Z),
        K = (0, m.Z)(B),
        W = (0, m.Z)(N),
        G = (0, m.Z)(L),
        X = (0, m.Z)(z),
        J = null != B ? S[B] : null,
        V = null != J;
    return (
        o.useEffect(() => {
            s().isEqual(P, p) || R((0, g.B)(p, j));
        }, [p, P, j]),
        (0, u.ZP)(() => () => {
            W.current({
                problem: K.current,
                dontShowAgain: Y.current,
                feedback: G.current,
                closeClicked: X.current
            });
        }),
        (0, r.jsxs)(c.Y0X, {
            transitionState: E,
            'aria-labelledby': U,
            children: [
                (0, r.jsx)(h.Z, {}),
                (0, r.jsxs)(c.xBx, {
                    separator: !1,
                    className: a()(v.headerContainer, y.headerContainer),
                    children: [
                        (0, r.jsx)(c.X6q, {
                            id: U,
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            className: v.header,
                            children: l
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            className: a()(v.ratingBody, y.headerBody),
                            children: null != (t = null == J ? void 0 : J.subheader) ? t : i
                        }),
                        C
                            ? (0, r.jsx)(c.olH, {
                                  className: v.modalCloseButton,
                                  onClick: function () {
                                      H(!0), T();
                                  }
                              })
                            : null
                    ]
                }),
                (0, r.jsxs)(c.hzk, {
                    className: y.modalContent,
                    children: [
                        V
                            ? null
                            : (0, r.jsx)(c.xJW, {
                                  className: v.problemInfo,
                                  children: (0, r.jsx)(b.Z, {
                                      options: M,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          D(t), Object.keys(S).includes(t) || T();
                                      }
                                  })
                              }),
                        V
                            ? (0, r.jsxs)(c.xJW, {
                                  className: v.problemInfo,
                                  children: [
                                      (0, r.jsx)(c.Kx8, {
                                          value: L,
                                          maxLength: O.iF,
                                          onChange: F,
                                          className: y.textArea,
                                          placeholder: null != (n = J.hint) ? n : x.intl.string(x.t.h95hcn)
                                      }),
                                      I ? (0, r.jsx)(k, {}) : null
                                  ]
                              })
                            : null
                    ]
                }),
                A || V
                    ? (0, r.jsx)(c.mzw, {
                          className: a()(v.footer, V ? y.submitFooter : y.modalFooter),
                          direction: _.Z.Direction.HORIZONTAL,
                          children: V
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(c.zxk, {
                                            className: y.backButton,
                                            size: c.zxk.Sizes.NONE,
                                            look: c.zxk.Looks.LINK,
                                            color: c.zxk.Colors.PRIMARY,
                                            onClick: () => {
                                                D(null), F('');
                                            },
                                            children: x.intl.string(x.t['13/7kZ'])
                                        }),
                                        (0, r.jsx)(c.zxk, {
                                            size: c.zxk.Sizes.SMALL,
                                            onClick: T,
                                            children: x.intl.string(x.t.geKm7u)
                                        })
                                    ]
                                })
                              : A
                                ? (0, r.jsx)(c.XZJ, {
                                      size: 24,
                                      type: c.XZJ.Types.INVERTED,
                                      value: Z,
                                      onChange: () => w(!Z),
                                      children: (0, r.jsx)(c.Text, {
                                          variant: 'text-md/normal',
                                          children: x.intl.string(x.t.lkWab2)
                                      })
                                  })
                                : null
                      })
                    : null
            ]
        })
    );
}
