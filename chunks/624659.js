n.d(t, { Z: () => k }), n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    i = n.n(s),
    c = n(481060),
    u = n(493773),
    d = n(110924),
    x = n(600164),
    N = n(313201),
    h = n(237617),
    m = n(572539),
    f = n(648159),
    b = n(63063),
    E = n(957115),
    C = n(531578),
    _ = n(388032),
    p = n(455438),
    v = n(418300);
function T() {
    return (0, r.jsx)(c.Text, {
        className: p.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: _.NW.format(_.t.ybi2tL, { helpdeskURL: b.Z.getSubmitRequestURL() })
    });
}
function k(e) {
    var t, n;
    let { header: l, body: s, problems: b, transitionState: k, feedbackProblems: I = {}, otherKey: g, hasCloseButton: j, onSubmit: O, onClose: S, canDismissForever: y = !0, showHelpdeskLink: R = !0 } = e,
        Z = (0, d.Z)(b),
        [A, W] = a.useState(!1),
        [B, L] = a.useState(null),
        [D, U] = a.useState(i().shuffle(b)),
        [P, F] = a.useState(''),
        [V, z] = a.useState(!1),
        M = (0, N.Dt)(),
        G = (0, h.Z)(A),
        w = (0, h.Z)(B),
        X = (0, h.Z)(O),
        K = (0, h.Z)(P),
        H = (0, h.Z)(V),
        q = null != B ? I[B] : null,
        J = null != q;
    return (
        a.useEffect(() => {
            i().isEqual(Z, b) || U((0, E.B)(b, g));
        }, [b, Z, g]),
        (0, u.ZP)(() => () => {
            X.current({
                problem: w.current,
                dontShowAgain: G.current,
                feedback: K.current,
                closeClicked: H.current
            });
        }),
        (0, r.jsxs)(c.Y0X, {
            transitionState: k,
            'aria-labelledby': M,
            children: [
                (0, r.jsx)(f.Z, {}),
                (0, r.jsxs)(c.xBx, {
                    separator: !1,
                    className: o()(p.headerContainer, v.headerContainer),
                    children: [
                        (0, r.jsx)(c.X6q, {
                            id: M,
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            className: p.header,
                            children: l
                        }),
                        (0, r.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            className: o()(p.ratingBody, v.headerBody),
                            children: null !== (t = null == q ? void 0 : q.subheader) && void 0 !== t ? t : s
                        }),
                        j
                            ? (0, r.jsx)(c.olH, {
                                  className: p.modalCloseButton,
                                  onClick: function () {
                                      z(!0), S();
                                  }
                              })
                            : null
                    ]
                }),
                (0, r.jsxs)(c.hzk, {
                    className: v.modalContent,
                    children: [
                        J
                            ? null
                            : (0, r.jsx)(c.xJW, {
                                  className: p.problemInfo,
                                  children: (0, r.jsx)(m.Z, {
                                      options: D,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          L(t), Object.keys(I).includes(t) || S();
                                      }
                                  })
                              }),
                        J
                            ? (0, r.jsxs)(c.xJW, {
                                  className: p.problemInfo,
                                  children: [
                                      (0, r.jsx)(c.Kx8, {
                                          value: P,
                                          maxLength: C.iF,
                                          onChange: F,
                                          className: v.textArea,
                                          placeholder: null !== (n = q.hint) && void 0 !== n ? n : _.NW.string(_.t.h95hcn)
                                      }),
                                      R ? (0, r.jsx)(T, {}) : null
                                  ]
                              })
                            : null
                    ]
                }),
                y || J
                    ? (0, r.jsx)(c.mzw, {
                          className: o()(p.footer, J ? v.submitFooter : v.modalFooter),
                          direction: x.Z.Direction.HORIZONTAL,
                          children: J
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(c.zxk, {
                                            className: v.backButton,
                                            size: c.zxk.Sizes.NONE,
                                            look: c.zxk.Looks.LINK,
                                            color: c.zxk.Colors.PRIMARY,
                                            onClick: () => {
                                                L(null), F('');
                                            },
                                            children: _.NW.string(_.t['13/7kZ'])
                                        }),
                                        (0, r.jsx)(c.zxk, {
                                            size: c.zxk.Sizes.SMALL,
                                            onClick: S,
                                            children: _.NW.string(_.t.geKm7u)
                                        })
                                    ]
                                })
                              : y
                                ? (0, r.jsx)(c.XZJ, {
                                      size: 24,
                                      type: c.XZJ.Types.INVERTED,
                                      value: A,
                                      onChange: () => W(!A),
                                      children: (0, r.jsx)(c.Text, {
                                          variant: 'text-md/normal',
                                          children: _.NW.string(_.t.lkWab2)
                                      })
                                  })
                                : null
                      })
                    : null
            ]
        })
    );
}
