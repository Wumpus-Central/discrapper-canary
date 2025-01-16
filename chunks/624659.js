n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var o = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    i = n(392711),
    s = n.n(i),
    c = n(481060),
    u = n(493773),
    d = n(110924),
    b = n(600164),
    m = n(313201),
    f = n(237617),
    h = n(572539),
    x = n(648159),
    C = n(63063),
    E = n(957115),
    p = n(531578),
    N = n(388032),
    j = n(720816),
    I = n(574087);
function T() {
    return (0, o.jsx)(c.Text, {
        className: j.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: N.intl.format(N.t.ybi2tL, { helpdeskURL: C.Z.getSubmitRequestURL() })
    });
}
function v(e) {
    var t, n;
    let { header: a, body: i, problems: C, transitionState: v, feedbackProblems: g = {}, otherKey: _, hasCloseButton: S, onSubmit: k, onClose: R, canDismissForever: B = !0, showHelpdeskLink: O = !0 } = e,
        A = (0, d.Z)(C),
        [y, L] = l.useState(!1),
        [Z, M] = l.useState(null),
        [D, F] = l.useState(s().shuffle(C)),
        [U, V] = l.useState(''),
        [P, G] = l.useState(!1),
        H = (0, m.Dt)(),
        z = (0, f.Z)(y),
        K = (0, f.Z)(Z),
        X = (0, f.Z)(k),
        w = (0, f.Z)(U),
        q = (0, f.Z)(P),
        W = null != Z ? g[Z] : null,
        Y = null != W;
    return (
        l.useEffect(() => {
            !s().isEqual(A, C) && F((0, E.B)(C, _));
        }, [C, A, _]),
        (0, u.Z)(() => () => {
            X.current({
                problem: K.current,
                dontShowAgain: z.current,
                feedback: w.current,
                closeClicked: q.current
            });
        }),
        (0, o.jsxs)(c.ModalRoot, {
            transitionState: v,
            'aria-labelledby': H,
            children: [
                (0, o.jsx)(x.Z, {}),
                (0, o.jsxs)(c.ModalHeader, {
                    separator: !1,
                    className: r()(j.headerContainer, I.headerContainer),
                    children: [
                        (0, o.jsx)(c.Heading, {
                            id: H,
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            className: j.header,
                            children: a
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            className: r()(j.ratingBody, I.headerBody),
                            children: null !== (t = null == W ? void 0 : W.subheader) && void 0 !== t ? t : i
                        }),
                        S
                            ? (0, o.jsx)(c.ModalCloseButton, {
                                  className: j.modalCloseButton,
                                  onClick: function () {
                                      G(!0), R();
                                  }
                              })
                            : null
                    ]
                }),
                (0, o.jsxs)(c.ModalContent, {
                    className: I.modalContent,
                    children: [
                        Y
                            ? null
                            : (0, o.jsx)(c.FormItem, {
                                  className: j.problemInfo,
                                  children: (0, o.jsx)(h.Z, {
                                      options: D,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          M(t), !Object.keys(g).includes(t) && R();
                                      }
                                  })
                              }),
                        Y
                            ? (0, o.jsxs)(c.FormItem, {
                                  className: j.problemInfo,
                                  children: [
                                      (0, o.jsx)(c.TextArea, {
                                          value: U,
                                          maxLength: p.iF,
                                          onChange: V,
                                          className: I.textArea,
                                          placeholder: null !== (n = W.hint) && void 0 !== n ? n : N.intl.string(N.t.h95hcn)
                                      }),
                                      O ? (0, o.jsx)(T, {}) : null
                                  ]
                              })
                            : null
                    ]
                }),
                B || Y
                    ? (0, o.jsx)(c.ModalFooter, {
                          className: r()(j.footer, Y ? I.submitFooter : I.modalFooter),
                          direction: b.Z.Direction.HORIZONTAL,
                          children: Y
                              ? (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(c.Button, {
                                            className: I.backButton,
                                            size: c.Button.Sizes.NONE,
                                            look: c.Button.Looks.LINK,
                                            color: c.Button.Colors.PRIMARY,
                                            onClick: () => {
                                                M(null), V('');
                                            },
                                            children: N.intl.string(N.t['13/7kZ'])
                                        }),
                                        (0, o.jsx)(c.Button, {
                                            size: c.Button.Sizes.SMALL,
                                            onClick: R,
                                            children: N.intl.string(N.t.geKm7u)
                                        })
                                    ]
                                })
                              : B
                                ? (0, o.jsx)(c.Checkbox, {
                                      size: 24,
                                      type: c.Checkbox.Types.INVERTED,
                                      value: y,
                                      onChange: () => L(!y),
                                      children: (0, o.jsx)(c.Text, {
                                          variant: 'text-md/normal',
                                          children: N.intl.string(N.t.lkWab2)
                                      })
                                  })
                                : null
                      })
                    : null
            ]
        })
    );
}
