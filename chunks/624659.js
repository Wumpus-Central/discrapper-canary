(n.d(t, { Z: () => T }), n(388685));
var l = n(255367),
    a = n(73800),
    r = n(120356),
    i = n.n(r),
    o = n(392711),
    s = n.n(o),
    u = n(755721),
    c = n(481060),
    d = n(493773),
    b = n(110924),
    _ = n(600164),
    f = n(313201),
    O = n(237617),
    h = n(572539),
    E = n(648159),
    v = n(63063),
    g = n(957115),
    m = n(531578),
    p = n(388032),
    S = n(297849),
    N = n(135771);
function y() {
    return (0, l.jsx)(c.Text, {
        className: S.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: p.intl.format(p.t.ybi2tL, { helpdeskURL: v.Z.getSubmitRequestURL() })
    });
}
function T(e) {
    var t, n;
    let { header: r, body: o, problems: v, transitionState: T, feedbackProblems: x = {}, otherKey: C, hasCloseButton: I, onSubmit: k, onClose: j, canDismissForever: A = !0, showHelpdeskLink: R = !0 } = e,
        D = (0, b.Z)(v),
        [L, P] = a.useState(!1),
        [B, F] = a.useState(null),
        [M, U] = a.useState(s().shuffle(v)),
        [w, H] = a.useState(''),
        [Z, $] = a.useState(!1),
        Y = (0, f.Dt)(),
        G = (0, O.Z)(L),
        z = (0, O.Z)(B),
        K = (0, O.Z)(k),
        V = (0, O.Z)(w),
        W = (0, O.Z)(Z),
        Q = null != B ? x[B] : null,
        X = null != Q;
    return (
        a.useEffect(() => {
            s().isEqual(D, v) || U((0, g.Bi)(v, C));
        }, [v, D, C]),
        (0, d.ZP)(() => () => {
            K.current({
                problem: z.current,
                dontShowAgain: G.current,
                feedback: V.current,
                closeClicked: W.current
            });
        }),
        (0, l.jsxs)(c.Y0X, {
            transitionState: T,
            'aria-labelledby': Y,
            parentComponent: 'SimpleFeedbackModal',
            children: [
                (0, l.jsx)(E.Z, {}),
                (0, l.jsxs)(c.xBx, {
                    separator: !1,
                    className: i()(S.headerContainer, N.headerContainer),
                    children: [
                        (0, l.jsx)(c.X6q, {
                            id: Y,
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            className: S.header,
                            children: r
                        }),
                        (0, l.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            className: i()(S.ratingBody, N.headerBody),
                            children: null != (t = null == Q ? void 0 : Q.subheader) ? t : o
                        }),
                        I
                            ? (0, l.jsx)(c.olH, {
                                  className: S.modalCloseButton,
                                  onClick: function () {
                                      ($(!0), j());
                                  }
                              })
                            : null
                    ]
                }),
                (0, l.jsxs)(c.hzk, {
                    className: N.modalContent,
                    children: [
                        X
                            ? null
                            : (0, l.jsx)(c.xJW, {
                                  className: S.problemInfo,
                                  children: (0, l.jsx)(h.Z, {
                                      options: M,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          (F(t), Object.keys(x).includes(t) || j());
                                      }
                                  })
                              }),
                        X
                            ? (0, l.jsxs)(c.xJW, {
                                  className: S.problemInfo,
                                  children: [
                                      (0, l.jsx)(c.Kx8, {
                                          value: w,
                                          maxLength: m.iF,
                                          onChange: H,
                                          className: N.textArea,
                                          placeholder: null != (n = Q.hint) ? n : p.intl.string(p.t.h95hcn)
                                      }),
                                      R ? (0, l.jsx)(y, {}) : null
                                  ]
                              })
                            : null
                    ]
                }),
                A || X
                    ? (0, l.jsx)(c.mzw, {
                          className: i()(S.footer, X ? N.submitFooter : N.modalFooter),
                          direction: _.Z.Direction.HORIZONTAL,
                          children: X
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(u.zx, {
                                            className: N.backButton,
                                            size: u.zx.Sizes.NONE,
                                            look: u.zx.Looks.LINK,
                                            color: u.zx.Colors.PRIMARY,
                                            onClick: () => {
                                                (F(null), H(''));
                                            },
                                            children: p.intl.string(p.t['13/7kZ'])
                                        }),
                                        (0, l.jsx)(c.zxk, {
                                            variant: 'primary',
                                            size: 'sm',
                                            text: p.intl.string(p.t.geKm7u),
                                            onClick: j
                                        })
                                    ]
                                })
                              : A
                                ? (0, l.jsx)(c.XZJ, {
                                      size: 24,
                                      type: c.XZJ.Types.INVERTED,
                                      value: L,
                                      onChange: () => P(!L),
                                      children: (0, l.jsx)(c.Text, {
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
