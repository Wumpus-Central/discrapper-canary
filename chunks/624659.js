n.d(t, { Z: () => T }), n(388685);
var l = n(255367),
    a = n(73800),
    r = n(120356),
    i = n.n(r),
    o = n(392711),
    s = n.n(o),
    u = n(481060),
    c = n(493773),
    d = n(110924),
    _ = n(600164),
    b = n(313201),
    f = n(237617),
    O = n(572539),
    E = n(648159),
    v = n(63063),
    g = n(957115),
    m = n(531578),
    h = n(388032),
    p = n(297849),
    S = n(135771);
function N() {
    return (0, l.jsx)(u.Text, {
        className: p.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: h.intl.format(h.t.ybi2tL, { helpdeskURL: v.Z.getSubmitRequestURL() })
    });
}
function T(e) {
    var t, n;
    let { header: r, body: o, problems: v, transitionState: T, feedbackProblems: y = {}, otherKey: x, hasCloseButton: I, onSubmit: C, onClose: k, canDismissForever: j = !0, showHelpdeskLink: A = !0 } = e,
        L = (0, d.Z)(v),
        [R, D] = a.useState(!1),
        [P, B] = a.useState(null),
        [F, M] = a.useState(s().shuffle(v)),
        [U, w] = a.useState(''),
        [H, Z] = a.useState(!1),
        $ = (0, b.Dt)(),
        Y = (0, f.Z)(R),
        G = (0, f.Z)(P),
        z = (0, f.Z)(C),
        K = (0, f.Z)(U),
        W = (0, f.Z)(H),
        V = null != P ? y[P] : null,
        X = null != V;
    return (
        a.useEffect(() => {
            s().isEqual(L, v) || M((0, g.Bi)(v, x));
        }, [v, L, x]),
        (0, c.ZP)(() => () => {
            z.current({
                problem: G.current,
                dontShowAgain: Y.current,
                feedback: K.current,
                closeClicked: W.current
            });
        }),
        (0, l.jsxs)(u.Y0X, {
            transitionState: T,
            'aria-labelledby': $,
            children: [
                (0, l.jsx)(E.Z, {}),
                (0, l.jsxs)(u.xBx, {
                    separator: !1,
                    className: i()(p.headerContainer, S.headerContainer),
                    children: [
                        (0, l.jsx)(u.X6q, {
                            id: $,
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            className: p.header,
                            children: r
                        }),
                        (0, l.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            className: i()(p.ratingBody, S.headerBody),
                            children: null != (t = null == V ? void 0 : V.subheader) ? t : o
                        }),
                        I
                            ? (0, l.jsx)(u.olH, {
                                  className: p.modalCloseButton,
                                  onClick: function () {
                                      Z(!0), k();
                                  }
                              })
                            : null
                    ]
                }),
                (0, l.jsxs)(u.hzk, {
                    className: S.modalContent,
                    children: [
                        X
                            ? null
                            : (0, l.jsx)(u.xJW, {
                                  className: p.problemInfo,
                                  children: (0, l.jsx)(O.Z, {
                                      options: F,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          B(t), Object.keys(y).includes(t) || k();
                                      }
                                  })
                              }),
                        X
                            ? (0, l.jsxs)(u.xJW, {
                                  className: p.problemInfo,
                                  children: [
                                      (0, l.jsx)(u.Kx8, {
                                          value: U,
                                          maxLength: m.iF,
                                          onChange: w,
                                          className: S.textArea,
                                          placeholder: null != (n = V.hint) ? n : h.intl.string(h.t.h95hcn)
                                      }),
                                      A ? (0, l.jsx)(N, {}) : null
                                  ]
                              })
                            : null
                    ]
                }),
                j || X
                    ? (0, l.jsx)(u.mzw, {
                          className: i()(p.footer, X ? S.submitFooter : S.modalFooter),
                          direction: _.Z.Direction.HORIZONTAL,
                          children: X
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(u.zxk, {
                                            className: S.backButton,
                                            size: u.zxk.Sizes.NONE,
                                            look: u.zxk.Looks.LINK,
                                            color: u.zxk.Colors.PRIMARY,
                                            onClick: () => {
                                                B(null), w('');
                                            },
                                            children: h.intl.string(h.t['13/7kZ'])
                                        }),
                                        (0, l.jsx)(u.zxk, {
                                            size: u.zxk.Sizes.SMALL,
                                            onClick: k,
                                            children: h.intl.string(h.t.geKm7u)
                                        })
                                    ]
                                })
                              : j
                                ? (0, l.jsx)(u.XZJ, {
                                      size: 24,
                                      type: u.XZJ.Types.INVERTED,
                                      value: R,
                                      onChange: () => D(!R),
                                      children: (0, l.jsx)(u.Text, {
                                          variant: 'text-md/normal',
                                          children: h.intl.string(h.t.lkWab2)
                                      })
                                  })
                                : null
                      })
                    : null
            ]
        })
    );
}
