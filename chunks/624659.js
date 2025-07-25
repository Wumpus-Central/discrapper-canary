(n.d(t, { Z: () => N }), n(388685));
var l = n(255367),
    a = n(73800),
    r = n(120356),
    i = n.n(r),
    o = n(392711),
    s = n.n(o),
    u = n(755721),
    d = n(481060),
    c = n(493773),
    b = n(110924),
    f = n(600164),
    O = n(313201),
    h = n(237617),
    E = n(572539),
    _ = n(648159),
    v = n(63063),
    m = n(957115),
    p = n(531578),
    g = n(388032),
    S = n(297849),
    x = n(135771);
function y() {
    return (0, l.jsx)(d.Text, {
        className: S.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: g.intl.format(g.t.ybi2tL, { helpdeskURL: v.Z.getSubmitRequestURL() })
    });
}
function N(e) {
    var t, n;
    let { header: r, body: o, problems: v, transitionState: N, feedbackProblems: T = {}, otherKey: C, hasCloseButton: j, onSubmit: I, onClose: k, canDismissForever: D = !0, showHelpdeskLink: R = !0 } = e,
        L = (0, b.Z)(v),
        [P, B] = a.useState(!1),
        [A, U] = a.useState(null),
        [F, w] = a.useState(s().shuffle(v)),
        [M, Z] = a.useState(''),
        [$, H] = a.useState(!1),
        z = (0, O.Dt)(),
        G = (0, h.Z)(P),
        K = (0, h.Z)(A),
        Y = (0, h.Z)(I),
        Q = (0, h.Z)(M),
        V = (0, h.Z)($),
        W = null != A ? T[A] : null,
        X = null != W;
    return (
        a.useEffect(() => {
            s().isEqual(L, v) || w((0, m.Bi)(v, C));
        }, [v, L, C]),
        (0, c.ZP)(() => () => {
            Y.current({
                problem: K.current,
                dontShowAgain: G.current,
                feedback: Q.current,
                closeClicked: V.current
            });
        }),
        (0, l.jsxs)(d.Y0X, {
            transitionState: N,
            'aria-labelledby': z,
            parentComponent: 'SimpleFeedbackModal',
            children: [
                (0, l.jsx)(_.Z, {}),
                (0, l.jsxs)(d.xBx, {
                    separator: !1,
                    className: i()(S.headerContainer, x.headerContainer),
                    children: [
                        (0, l.jsx)(d.X6q, {
                            id: z,
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            className: S.header,
                            children: r
                        }),
                        (0, l.jsx)(d.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            className: i()(S.ratingBody, x.headerBody),
                            children: null != (t = null == W ? void 0 : W.subheader) ? t : o
                        }),
                        j
                            ? (0, l.jsx)(d.olH, {
                                  className: S.modalCloseButton,
                                  onClick: function () {
                                      (H(!0), k());
                                  }
                              })
                            : null
                    ]
                }),
                (0, l.jsxs)(d.hzk, {
                    className: x.modalContent,
                    children: [
                        X
                            ? null
                            : (0, l.jsx)(d.xJW, {
                                  className: S.problemInfo,
                                  children: (0, l.jsx)(E.Z, {
                                      options: F,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          (U(t), Object.keys(T).includes(t) || k());
                                      }
                                  })
                              }),
                        X
                            ? (0, l.jsxs)(d.xJW, {
                                  className: S.problemInfo,
                                  children: [
                                      (0, l.jsx)(d.Kx8, {
                                          value: M,
                                          maxLength: p.iF,
                                          onChange: Z,
                                          className: x.textArea,
                                          placeholder: null != (n = W.hint) ? n : g.intl.string(g.t.h95hcn)
                                      }),
                                      R ? (0, l.jsx)(y, {}) : null
                                  ]
                              })
                            : null
                    ]
                }),
                D || X
                    ? (0, l.jsx)(d.mzw, {
                          className: i()(S.footer, X ? x.submitFooter : x.modalFooter),
                          direction: f.Z.Direction.HORIZONTAL,
                          children: X
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(u.zx, {
                                            className: x.backButton,
                                            size: u.zx.Sizes.NONE,
                                            look: u.zx.Looks.LINK,
                                            color: u.zx.Colors.PRIMARY,
                                            onClick: () => {
                                                (U(null), Z(''));
                                            },
                                            children: g.intl.string(g.t['13/7kZ'])
                                        }),
                                        (0, l.jsx)(d.zxk, {
                                            variant: 'primary',
                                            size: 'sm',
                                            text: g.intl.string(g.t.geKm7u),
                                            onClick: k
                                        })
                                    ]
                                })
                              : D
                                ? (0, l.jsx)(d.XZJ, {
                                      size: 24,
                                      type: d.XZJ.Types.INVERTED,
                                      value: P,
                                      onChange: () => B(!P),
                                      children: (0, l.jsx)(d.Text, {
                                          variant: 'text-md/normal',
                                          children: g.intl.string(g.t.lkWab2)
                                      })
                                  })
                                : null
                      })
                    : null
            ]
        })
    );
}
