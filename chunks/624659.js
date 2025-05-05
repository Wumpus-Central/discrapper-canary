n.d(t, { Z: () => N }), n(388685);
var a = n(255367),
    l = n(73800),
    o = n(120356),
    r = n.n(o),
    i = n(392711),
    s = n.n(i),
    c = n(481060),
    u = n(493773),
    d = n(110924),
    _ = n(600164),
    m = n(313201),
    h = n(237617),
    f = n(572539),
    b = n(648159),
    x = n(63063),
    g = n(957115),
    v = n(531578),
    p = n(388032),
    k = n(297849),
    E = n(135771);
function C() {
    return (0, a.jsx)(c.Text, {
        className: k.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: p.intl.format(p.t.ybi2tL, { helpdeskURL: x.Z.getSubmitRequestURL() })
    });
}
function N(e) {
    var t, n;
    let { header: o, body: i, problems: x, transitionState: N, feedbackProblems: S = {}, otherKey: O, hasCloseButton: y, onSubmit: j, onClose: T, canDismissForever: A = !0, showHelpdeskLink: Z = !0 } = e,
        I = (0, d.Z)(x),
        [B, L] = l.useState(!1),
        [M, R] = l.useState(null),
        [F, D] = l.useState(s().shuffle(x)),
        [w, z] = l.useState(''),
        [H, P] = l.useState(!1),
        Y = (0, m.Dt)(),
        U = (0, h.Z)(B),
        W = (0, h.Z)(M),
        K = (0, h.Z)(j),
        X = (0, h.Z)(w),
        G = (0, h.Z)(H),
        J = null != M ? S[M] : null,
        V = null != J;
    return (
        l.useEffect(() => {
            s().isEqual(I, x) || D((0, g.B)(x, O));
        }, [x, I, O]),
        (0, u.ZP)(() => () => {
            K.current({
                problem: W.current,
                dontShowAgain: U.current,
                feedback: X.current,
                closeClicked: G.current
            });
        }),
        (0, a.jsxs)(c.Y0X, {
            transitionState: N,
            'aria-labelledby': Y,
            children: [
                (0, a.jsx)(b.Z, {}),
                (0, a.jsxs)(c.xBx, {
                    separator: !1,
                    className: r()(k.headerContainer, E.headerContainer),
                    children: [
                        (0, a.jsx)(c.X6q, {
                            id: Y,
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            className: k.header,
                            children: o
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            className: r()(k.ratingBody, E.headerBody),
                            children: null != (t = null == J ? void 0 : J.subheader) ? t : i
                        }),
                        y
                            ? (0, a.jsx)(c.olH, {
                                  className: k.modalCloseButton,
                                  onClick: function () {
                                      P(!0), T();
                                  }
                              })
                            : null
                    ]
                }),
                (0, a.jsxs)(c.hzk, {
                    className: E.modalContent,
                    children: [
                        V
                            ? null
                            : (0, a.jsx)(c.xJW, {
                                  className: k.problemInfo,
                                  children: (0, a.jsx)(f.Z, {
                                      options: F,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          R(t), Object.keys(S).includes(t) || T();
                                      }
                                  })
                              }),
                        V
                            ? (0, a.jsxs)(c.xJW, {
                                  className: k.problemInfo,
                                  children: [
                                      (0, a.jsx)(c.Kx8, {
                                          value: w,
                                          maxLength: v.iF,
                                          onChange: z,
                                          className: E.textArea,
                                          placeholder: null != (n = J.hint) ? n : p.intl.string(p.t.h95hcn)
                                      }),
                                      Z ? (0, a.jsx)(C, {}) : null
                                  ]
                              })
                            : null
                    ]
                }),
                A || V
                    ? (0, a.jsx)(c.mzw, {
                          className: r()(k.footer, V ? E.submitFooter : E.modalFooter),
                          direction: _.Z.Direction.HORIZONTAL,
                          children: V
                              ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(c.zxk, {
                                            className: E.backButton,
                                            size: c.zxk.Sizes.NONE,
                                            look: c.zxk.Looks.LINK,
                                            color: c.zxk.Colors.PRIMARY,
                                            onClick: () => {
                                                R(null), z('');
                                            },
                                            children: p.intl.string(p.t['13/7kZ'])
                                        }),
                                        (0, a.jsx)(c.zxk, {
                                            size: c.zxk.Sizes.SMALL,
                                            onClick: T,
                                            children: p.intl.string(p.t.geKm7u)
                                        })
                                    ]
                                })
                              : A
                                ? (0, a.jsx)(c.XZJ, {
                                      size: 24,
                                      type: c.XZJ.Types.INVERTED,
                                      value: B,
                                      onChange: () => L(!B),
                                      children: (0, a.jsx)(c.Text, {
                                          variant: 'text-md/normal',
                                          children: p.intl.string(p.t.lkWab2)
                                      })
                                  })
                                : null
                      })
                    : null
            ]
        })
    );
}
