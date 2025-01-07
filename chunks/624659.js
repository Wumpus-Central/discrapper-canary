n.d(t, {
    Z: function () {
        return T;
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
    u = n(110924),
    d = n(600164),
    b = n(313201),
    m = n(237617),
    f = n(572539),
    h = n(648159),
    x = n(63063),
    C = n(957115),
    E = n(531578),
    p = n(388032),
    N = n(720816),
    j = n(574087);
function I() {
    return (0, o.jsx)(c.Text, {
        className: N.helpdeskLink,
        variant: 'text-xs/normal',
        color: 'text-muted',
        children: p.intl.format(p.t.ybi2tL, { helpdeskURL: x.Z.getSubmitRequestURL() })
    });
}
function T(e) {
    var t, n;
    let { header: a, body: i, problems: x, transitionState: T, feedbackProblems: v = {}, otherKey: g, hasCloseButton: _, onSubmit: S, onClose: k, canDismissForever: R = !0, showHelpdeskLink: B = !0 } = e,
        O = (0, u.Z)(x),
        [A, y] = l.useState(!1),
        [L, Z] = l.useState(null),
        [M, D] = l.useState(s().shuffle(x)),
        [F, U] = l.useState(''),
        [V, P] = l.useState(!1),
        G = (0, b.Dt)(),
        H = (0, m.Z)(A),
        z = (0, m.Z)(L),
        K = (0, m.Z)(S),
        X = (0, m.Z)(F),
        w = (0, m.Z)(V),
        q = null != L ? v[L] : null,
        W = null != q;
    return (
        l.useEffect(() => {
            !s().isEqual(O, x) && D((0, C.B)(x, g));
        }, [x, O, g]),
        l.useEffect(
            () => () => {
                K.current({
                    problem: z.current,
                    dontShowAgain: H.current,
                    feedback: X.current,
                    closeClicked: w.current
                });
            },
            []
        ),
        (0, o.jsxs)(c.ModalRoot, {
            transitionState: T,
            'aria-labelledby': G,
            children: [
                (0, o.jsx)(h.Z, {}),
                (0, o.jsxs)(c.ModalHeader, {
                    separator: !1,
                    className: r()(N.headerContainer, j.headerContainer),
                    children: [
                        (0, o.jsx)(c.Heading, {
                            id: G,
                            variant: 'heading-xl/bold',
                            color: 'header-primary',
                            className: N.header,
                            children: a
                        }),
                        (0, o.jsx)(c.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            className: r()(N.ratingBody, j.headerBody),
                            children: null !== (t = null == q ? void 0 : q.subheader) && void 0 !== t ? t : i
                        }),
                        _
                            ? (0, o.jsx)(c.ModalCloseButton, {
                                  className: N.modalCloseButton,
                                  onClick: function () {
                                      P(!0), k();
                                  }
                              })
                            : null
                    ]
                }),
                (0, o.jsxs)(c.ModalContent, {
                    className: j.modalContent,
                    children: [
                        W
                            ? null
                            : (0, o.jsx)(c.FormItem, {
                                  className: N.problemInfo,
                                  children: (0, o.jsx)(f.Z, {
                                      options: M,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          Z(t), !Object.keys(v).includes(t) && k();
                                      }
                                  })
                              }),
                        W
                            ? (0, o.jsxs)(c.FormItem, {
                                  className: N.problemInfo,
                                  children: [
                                      (0, o.jsx)(c.TextArea, {
                                          value: F,
                                          maxLength: E.iF,
                                          onChange: U,
                                          className: j.textArea,
                                          placeholder: null !== (n = q.hint) && void 0 !== n ? n : p.intl.string(p.t.h95hcn)
                                      }),
                                      B ? (0, o.jsx)(I, {}) : null
                                  ]
                              })
                            : null
                    ]
                }),
                R || W
                    ? (0, o.jsx)(c.ModalFooter, {
                          className: r()(N.footer, W ? j.submitFooter : j.modalFooter),
                          direction: d.Z.Direction.HORIZONTAL,
                          children: W
                              ? (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(c.Button, {
                                            className: j.backButton,
                                            size: c.Button.Sizes.NONE,
                                            look: c.Button.Looks.LINK,
                                            color: c.Button.Colors.PRIMARY,
                                            onClick: () => {
                                                Z(null), U('');
                                            },
                                            children: p.intl.string(p.t['13/7kZ'])
                                        }),
                                        (0, o.jsx)(c.Button, {
                                            size: c.Button.Sizes.SMALL,
                                            onClick: k,
                                            children: p.intl.string(p.t.geKm7u)
                                        })
                                    ]
                                })
                              : R
                                ? (0, o.jsx)(c.Checkbox, {
                                      size: 24,
                                      type: c.Checkbox.Types.INVERTED,
                                      value: A,
                                      onChange: () => y(!A),
                                      children: (0, o.jsx)(c.Text, {
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
