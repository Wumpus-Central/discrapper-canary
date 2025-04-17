n.d(t, { Z: () => C }), n(388685);
var a = n(200651),
    o = n(192379),
    r = n(120356),
    l = n.n(r),
    s = n(392711),
    i = n.n(s),
    c = n(481060),
    u = n(493773),
    d = n(110924),
    _ = n(600164),
    m = n(313201),
    h = n(237617),
    f = n(572539),
    N = n(648159),
    b = n(63063),
    x = n(957115),
    g = n(531578),
    v = n(388032),
    p = n(297849),
    k = n(135771);
function E() {
    return (0, a.jsx)(c.Text, {
        className: p.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: v.NW.format(v.t.ybi2tL, { helpdeskURL: b.Z.getSubmitRequestURL() })
    });
}
function C(e) {
    var t, n;
    let { header: r, body: s, problems: b, transitionState: C, feedbackProblems: S = {}, otherKey: O, hasCloseButton: y, onSubmit: W, onClose: j, canDismissForever: T = !0, showHelpdeskLink: A = !0 } = e,
        Z = (0, d.Z)(b),
        [I, B] = o.useState(!1),
        [L, M] = o.useState(null),
        [R, F] = o.useState(i().shuffle(b)),
        [D, w] = o.useState(''),
        [z, H] = o.useState(!1),
        P = (0, m.Dt)(),
        Y = (0, h.Z)(I),
        U = (0, h.Z)(L),
        K = (0, h.Z)(W),
        X = (0, h.Z)(D),
        G = (0, h.Z)(z),
        J = null != L ? S[L] : null,
        V = null != J;
    return (
        o.useEffect(() => {
            i().isEqual(Z, b) || F((0, x.B)(b, O));
        }, [b, Z, O]),
        (0, u.ZP)(() => () => {
            K.current({
                problem: U.current,
                dontShowAgain: Y.current,
                feedback: X.current,
                closeClicked: G.current
            });
        }),
        (0, a.jsxs)(c.Y0X, {
            transitionState: C,
            'aria-labelledby': P,
            children: [
                (0, a.jsx)(N.Z, {}),
                (0, a.jsxs)(c.xBx, {
                    separator: !1,
                    className: l()(p.headerContainer, k.headerContainer),
                    children: [
                        (0, a.jsx)(c.X6q, {
                            id: P,
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            className: p.header,
                            children: r
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            className: l()(p.ratingBody, k.headerBody),
                            children: null != (t = null == J ? void 0 : J.subheader) ? t : s
                        }),
                        y
                            ? (0, a.jsx)(c.olH, {
                                  className: p.modalCloseButton,
                                  onClick: function () {
                                      H(!0), j();
                                  }
                              })
                            : null
                    ]
                }),
                (0, a.jsxs)(c.hzk, {
                    className: k.modalContent,
                    children: [
                        V
                            ? null
                            : (0, a.jsx)(c.xJW, {
                                  className: p.problemInfo,
                                  children: (0, a.jsx)(f.Z, {
                                      options: R,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          M(t), Object.keys(S).includes(t) || j();
                                      }
                                  })
                              }),
                        V
                            ? (0, a.jsxs)(c.xJW, {
                                  className: p.problemInfo,
                                  children: [
                                      (0, a.jsx)(c.Kx8, {
                                          value: D,
                                          maxLength: g.iF,
                                          onChange: w,
                                          className: k.textArea,
                                          placeholder: null != (n = J.hint) ? n : v.NW.string(v.t.h95hcn)
                                      }),
                                      A ? (0, a.jsx)(E, {}) : null
                                  ]
                              })
                            : null
                    ]
                }),
                T || V
                    ? (0, a.jsx)(c.mzw, {
                          className: l()(p.footer, V ? k.submitFooter : k.modalFooter),
                          direction: _.Z.Direction.HORIZONTAL,
                          children: V
                              ? (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(c.zxk, {
                                            className: k.backButton,
                                            size: c.zxk.Sizes.NONE,
                                            look: c.zxk.Looks.LINK,
                                            color: c.zxk.Colors.PRIMARY,
                                            onClick: () => {
                                                M(null), w('');
                                            },
                                            children: v.NW.string(v.t['13/7kZ'])
                                        }),
                                        (0, a.jsx)(c.zxk, {
                                            size: c.zxk.Sizes.SMALL,
                                            onClick: j,
                                            children: v.NW.string(v.t.geKm7u)
                                        })
                                    ]
                                })
                              : T
                                ? (0, a.jsx)(c.XZJ, {
                                      size: 24,
                                      type: c.XZJ.Types.INVERTED,
                                      value: I,
                                      onChange: () => B(!I),
                                      children: (0, a.jsx)(c.Text, {
                                          variant: 'text-md/normal',
                                          children: v.NW.string(v.t.lkWab2)
                                      })
                                  })
                                : null
                      })
                    : null
            ]
        })
    );
}
