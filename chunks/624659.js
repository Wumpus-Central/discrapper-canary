(n.d(t, { Z: () => y }), n(388685));
var l = n(255367),
    a = n(73800),
    i = n(120356),
    r = n.n(i),
    o = n(392711),
    s = n.n(o),
    u = n(755721),
    d = n(481060),
    c = n(493773),
    b = n(110924),
    h = n(600164),
    _ = n(313201),
    f = n(237617),
    O = n(572539),
    E = n(648159),
    v = n(63063),
    g = n(957115),
    m = n(531578),
    p = n(388032),
    S = n(297849),
    N = n(135771);
function T() {
    return (0, l.jsx)(d.Text, {
        className: S.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: p.intl.format(p.t.ybi2tL, { helpdeskURL: v.Z.getSubmitRequestURL() })
    });
}
function y(e) {
    var t, n;
    let { header: i, body: o, problems: v, transitionState: y, feedbackProblems: C = {}, otherKey: x, hasCloseButton: I, onSubmit: k, onClose: j, canDismissForever: R = !0, showHelpdeskLink: A = !0 } = e,
        D = (0, b.Z)(v),
        [L, P] = a.useState(!1),
        [B, U] = a.useState(null),
        [F, M] = a.useState(s().shuffle(v)),
        [w, H] = a.useState(''),
        [Z, $] = a.useState(!1),
        G = (0, _.Dt)(),
        Y = (0, f.Z)(L),
        z = (0, f.Z)(B),
        K = (0, f.Z)(k),
        W = (0, f.Z)(w),
        V = (0, f.Z)(Z),
        Q = null != B ? C[B] : null,
        X = null != Q;
    return (
        a.useEffect(() => {
            s().isEqual(D, v) || M((0, g.Bi)(v, x));
        }, [v, D, x]),
        (0, c.ZP)(() => () => {
            K.current({
                problem: z.current,
                dontShowAgain: Y.current,
                feedback: W.current,
                closeClicked: V.current
            });
        }),
        (0, l.jsxs)(d.Y0X, {
            transitionState: y,
            'aria-labelledby': G,
            parentComponent: 'SimpleFeedbackModal',
            children: [
                (0, l.jsx)(E.Z, {}),
                (0, l.jsxs)(d.xBx, {
                    separator: !1,
                    className: r()(S.headerContainer, N.headerContainer),
                    children: [
                        (0, l.jsx)(d.X6q, {
                            id: G,
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            className: S.header,
                            children: i
                        }),
                        (0, l.jsx)(d.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            className: r()(S.ratingBody, N.headerBody),
                            children: null != (t = null == Q ? void 0 : Q.subheader) ? t : o
                        }),
                        I
                            ? (0, l.jsx)(d.olH, {
                                  className: S.modalCloseButton,
                                  onClick: function () {
                                      ($(!0), j());
                                  }
                              })
                            : null
                    ]
                }),
                (0, l.jsxs)(d.hzk, {
                    className: N.modalContent,
                    children: [
                        X
                            ? null
                            : (0, l.jsx)(d.xJW, {
                                  className: S.problemInfo,
                                  children: (0, l.jsx)(O.Z, {
                                      options: F,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          (U(t), Object.keys(C).includes(t) || j());
                                      }
                                  })
                              }),
                        X
                            ? (0, l.jsxs)(d.xJW, {
                                  className: S.problemInfo,
                                  children: [
                                      (0, l.jsx)(d.Kx8, {
                                          value: w,
                                          maxLength: m.iF,
                                          onChange: H,
                                          className: N.textArea,
                                          placeholder: null != (n = Q.hint) ? n : p.intl.string(p.t.h95hcn)
                                      }),
                                      A ? (0, l.jsx)(T, {}) : null
                                  ]
                              })
                            : null
                    ]
                }),
                R || X
                    ? (0, l.jsx)(d.mzw, {
                          className: r()(S.footer, X ? N.submitFooter : N.modalFooter),
                          direction: h.Z.Direction.HORIZONTAL,
                          children: X
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(u.zx, {
                                            className: N.backButton,
                                            size: u.zx.Sizes.NONE,
                                            look: u.zx.Looks.LINK,
                                            color: u.zx.Colors.PRIMARY,
                                            onClick: () => {
                                                (U(null), H(''));
                                            },
                                            children: p.intl.string(p.t['13/7kZ'])
                                        }),
                                        (0, l.jsx)(d.zxk, {
                                            variant: 'primary',
                                            size: 'sm',
                                            text: p.intl.string(p.t.geKm7u),
                                            onClick: j
                                        })
                                    ]
                                })
                              : R
                                ? (0, l.jsx)(d.XZJ, {
                                      size: 24,
                                      type: d.XZJ.Types.INVERTED,
                                      value: L,
                                      onChange: () => P(!L),
                                      children: (0, l.jsx)(d.Text, {
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
