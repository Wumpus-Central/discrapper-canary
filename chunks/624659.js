n.d(t, { Z: () => T }), n(47120);
var l = n(200651),
    a = n(192379),
    o = n(120356),
    r = n.n(o),
    i = n(392711),
    s = n.n(i),
    c = n(481060),
    d = n(493773),
    u = n(110924),
    m = n(600164),
    x = n(313201),
    _ = n(237617),
    h = n(572539),
    f = n(648159),
    E = n(63063),
    C = n(957115),
    N = n(531578),
    p = n(388032),
    b = n(357099),
    j = n(323229);
function v() {
    return (0, l.jsx)(c.Text, {
        className: b.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: p.intl.format(p.t.ybi2tL, { helpdeskURL: E.Z.getSubmitRequestURL() })
    });
}
function T(e) {
    var t, n;
    let { header: o, body: i, problems: E, transitionState: T, feedbackProblems: I = {}, otherKey: k, hasCloseButton: g, onSubmit: S, onClose: R, canDismissForever: O = !0, showHelpdeskLink: Z = !0 } = e,
        A = (0, u.Z)(E),
        [y, B] = a.useState(!1),
        [L, D] = a.useState(null),
        [U, F] = a.useState(s().shuffle(E)),
        [V, z] = a.useState(''),
        [M, P] = a.useState(!1),
        G = (0, x.Dt)(),
        H = (0, _.Z)(y),
        X = (0, _.Z)(L),
        K = (0, _.Z)(S),
        w = (0, _.Z)(V),
        W = (0, _.Z)(M),
        q = null != L ? I[L] : null,
        J = null != q;
    return (
        a.useEffect(() => {
            s().isEqual(A, E) || F((0, C.B)(E, k));
        }, [E, A, k]),
        (0, d.ZP)(() => () => {
            K.current({
                problem: X.current,
                dontShowAgain: H.current,
                feedback: w.current,
                closeClicked: W.current
            });
        }),
        (0, l.jsxs)(c.Y0X, {
            transitionState: T,
            'aria-labelledby': G,
            children: [
                (0, l.jsx)(f.Z, {}),
                (0, l.jsxs)(c.xBx, {
                    separator: !1,
                    className: r()(b.headerContainer, j.headerContainer),
                    children: [
                        (0, l.jsx)(c.X6q, {
                            id: G,
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            className: b.header,
                            children: o
                        }),
                        (0, l.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            className: r()(b.ratingBody, j.headerBody),
                            children: null !== (t = null == q ? void 0 : q.subheader) && void 0 !== t ? t : i
                        }),
                        g
                            ? (0, l.jsx)(c.olH, {
                                  className: b.modalCloseButton,
                                  onClick: function () {
                                      P(!0), R();
                                  }
                              })
                            : null
                    ]
                }),
                (0, l.jsxs)(c.hzk, {
                    className: j.modalContent,
                    children: [
                        J
                            ? null
                            : (0, l.jsx)(c.xJW, {
                                  className: b.problemInfo,
                                  children: (0, l.jsx)(h.Z, {
                                      options: U,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          D(t), Object.keys(I).includes(t) || R();
                                      }
                                  })
                              }),
                        J
                            ? (0, l.jsxs)(c.xJW, {
                                  className: b.problemInfo,
                                  children: [
                                      (0, l.jsx)(c.Kx8, {
                                          value: V,
                                          maxLength: N.iF,
                                          onChange: z,
                                          className: j.textArea,
                                          placeholder: null !== (n = q.hint) && void 0 !== n ? n : p.intl.string(p.t.h95hcn)
                                      }),
                                      Z ? (0, l.jsx)(v, {}) : null
                                  ]
                              })
                            : null
                    ]
                }),
                O || J
                    ? (0, l.jsx)(c.mzw, {
                          className: r()(b.footer, J ? j.submitFooter : j.modalFooter),
                          direction: m.Z.Direction.HORIZONTAL,
                          children: J
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(c.zxk, {
                                            className: j.backButton,
                                            size: c.zxk.Sizes.NONE,
                                            look: c.zxk.Looks.LINK,
                                            color: c.zxk.Colors.PRIMARY,
                                            onClick: () => {
                                                D(null), z('');
                                            },
                                            children: p.intl.string(p.t['13/7kZ'])
                                        }),
                                        (0, l.jsx)(c.zxk, {
                                            size: c.zxk.Sizes.SMALL,
                                            onClick: R,
                                            children: p.intl.string(p.t.geKm7u)
                                        })
                                    ]
                                })
                              : O
                                ? (0, l.jsx)(c.XZJ, {
                                      size: 24,
                                      type: c.XZJ.Types.INVERTED,
                                      value: y,
                                      onChange: () => B(!y),
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
