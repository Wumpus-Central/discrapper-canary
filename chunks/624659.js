(n.d(t, { Z: () => x }), n(388685));
var l = n(255367),
    a = n(73800),
    i = n(120356),
    r = n.n(i),
    o = n(392711),
    u = n.n(o),
    d = n(755721),
    s = n(481060),
    c = n(493773),
    b = n(110924),
    E = n(600164),
    O = n(313201),
    f = n(237617),
    v = n(572539),
    _ = n(648159),
    h = n(63063),
    g = n(957115),
    S = n(531578),
    m = n(388032),
    N = n(297849),
    p = n(135771);
function C() {
    return (0, l.jsx)(s.Text, {
        className: N.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: m.intl.format(m.t.ybi2tL, { helpdeskURL: h.Z.getSubmitRequestURL() })
    });
}
function x(e) {
    var t, n;
    let { header: i, body: o, problems: h, transitionState: x, feedbackProblems: T = {}, otherKey: y, hasCloseButton: L, onSubmit: D, onClose: I, canDismissForever: M = !0, showHelpdeskLink: R = !0 } = e,
        k = (0, b.Z)(h),
        [j, A] = a.useState(!1),
        [P, B] = a.useState(null),
        [U, $] = a.useState(u().shuffle(h)),
        [F, Z] = a.useState(''),
        [w, H] = a.useState(!1),
        J = (0, O.Dt)(),
        G = (0, f.Z)(j),
        z = (0, f.Z)(P),
        K = (0, f.Z)(D),
        Y = (0, f.Z)(F),
        X = (0, f.Z)(w),
        Q = null != P ? T[P] : null,
        V = null != Q;
    return (
        a.useEffect(() => {
            u().isEqual(k, h) || $((0, g.Bi)(h, y));
        }, [h, k, y]),
        (0, c.ZP)(() => () => {
            K.current({
                problem: z.current,
                dontShowAgain: G.current,
                feedback: Y.current,
                closeClicked: X.current
            });
        }),
        (0, l.jsxs)(s.Y0X, {
            transitionState: x,
            'aria-labelledby': J,
            parentComponent: 'SimpleFeedbackModal',
            children: [
                (0, l.jsx)(_.Z, {}),
                (0, l.jsxs)(s.xBx, {
                    separator: !1,
                    className: r()(N.headerContainer, p.headerContainer),
                    children: [
                        (0, l.jsx)(s.X6q, {
                            id: J,
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            className: N.header,
                            children: i
                        }),
                        (0, l.jsx)(s.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            className: r()(N.ratingBody, p.headerBody),
                            children: null != (t = null == Q ? void 0 : Q.subheader) ? t : o
                        }),
                        L
                            ? (0, l.jsx)(s.olH, {
                                  className: N.modalCloseButton,
                                  onClick: function () {
                                      (H(!0), I());
                                  }
                              })
                            : null
                    ]
                }),
                (0, l.jsxs)(s.hzk, {
                    className: p.modalContent,
                    children: [
                        V
                            ? null
                            : (0, l.jsx)(s.xJW, {
                                  className: N.problemInfo,
                                  children: (0, l.jsx)(v.Z, {
                                      options: U,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          (B(t), Object.keys(T).includes(t) || I());
                                      }
                                  })
                              }),
                        V
                            ? (0, l.jsxs)(s.xJW, {
                                  className: N.problemInfo,
                                  children: [
                                      (0, l.jsx)(s.Kx8, {
                                          value: F,
                                          maxLength: S.iF,
                                          onChange: Z,
                                          className: p.textArea,
                                          placeholder: null != (n = Q.hint) ? n : m.intl.string(m.t.h95hcn)
                                      }),
                                      R ? (0, l.jsx)(C, {}) : null
                                  ]
                              })
                            : null
                    ]
                }),
                M || V
                    ? (0, l.jsx)(s.mzw, {
                          className: r()(N.footer, V ? p.submitFooter : p.modalFooter),
                          direction: E.Z.Direction.HORIZONTAL,
                          children: V
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(d.zx, {
                                            className: p.backButton,
                                            size: d.zx.Sizes.NONE,
                                            look: d.zx.Looks.LINK,
                                            color: d.zx.Colors.PRIMARY,
                                            onClick: () => {
                                                (B(null), Z(''));
                                            },
                                            children: m.intl.string(m.t['13/7kZ'])
                                        }),
                                        (0, l.jsx)(s.zxk, {
                                            variant: 'primary',
                                            size: 'sm',
                                            text: m.intl.string(m.t.geKm7u),
                                            onClick: I
                                        })
                                    ]
                                })
                              : M
                                ? (0, l.jsx)(s.XZJ, {
                                      size: 24,
                                      type: s.XZJ.Types.INVERTED,
                                      value: j,
                                      onChange: () => A(!j),
                                      children: (0, l.jsx)(s.Text, {
                                          variant: 'text-md/normal',
                                          children: m.intl.string(m.t.lkWab2)
                                      })
                                  })
                                : null
                      })
                    : null
            ]
        })
    );
}
