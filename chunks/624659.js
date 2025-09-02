n.d(t, { Z: () => I }), n(388685);
var l = n(951288),
    a = n(647438),
    i = n(120356),
    r = n.n(i),
    o = n(392711),
    u = n.n(o),
    d = n(755721),
    s = n(481060),
    b = n(493773),
    c = n(110924),
    E = n(600164),
    O = n(313201),
    f = n(237617),
    v = n(572539),
    _ = n(648159),
    h = n(63063),
    g = n(957115),
    S = n(531578),
    N = n(388032),
    m = n(817320),
    p = n(519249);
function C() {
    return (0, l.jsx)(s.Text, {
        className: m.helpdeskLink,
        variant: "text-xs/normal",
        color: "text-muted",
        children: N.intl.format(N.t.ybi2tL, { helpdeskURL: h.Z.getSubmitRequestURL() }),
    });
}
function I(e) {
    var t, n;
    let {
            header: i,
            body: o,
            problems: h,
            transitionState: I,
            feedbackProblems: L = {},
            otherKey: D,
            hasCloseButton: T,
            onSubmit: x,
            onClose: y,
            canDismissForever: M = !0,
            showHelpdeskLink: R = !0,
        } = e,
        k = (0, c.Z)(h),
        [j, A] = a.useState(!1),
        [P, B] = a.useState(null),
        [$, U] = a.useState(u().shuffle(h)),
        [F, Z] = a.useState(""),
        [w, H] = a.useState(!1),
        G = (0, O.Dt)(),
        J = (0, f.Z)(j),
        z = (0, f.Z)(P),
        K = (0, f.Z)(x),
        Y = (0, f.Z)(F),
        Q = (0, f.Z)(w),
        V = null != P ? L[P] : null,
        X = null != V;
    return (
        a.useEffect(() => {
            u().isEqual(k, h) || U((0, g.Bi)(h, D));
        }, [h, k, D]),
        (0, b.ZP)(() => () => {
            K.current({
                problem: z.current,
                dontShowAgain: J.current,
                feedback: Y.current,
                closeClicked: Q.current,
            });
        }),
        (0, l.jsxs)(s.Y0X, {
            transitionState: I,
            "aria-labelledby": G,
            parentComponent: "SimpleFeedbackModal",
            children: [
                (0, l.jsx)(_.Z, {}),
                (0, l.jsxs)(s.xBx, {
                    separator: !1,
                    className: r()(m.headerContainer, p.headerContainer),
                    children: [
                        (0, l.jsx)(s.X6q, {
                            id: G,
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            className: m.header,
                            children: i,
                        }),
                        (0, l.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            className: r()(m.ratingBody, p.headerBody),
                            children: null != (t = null == V ? void 0 : V.subheader) ? t : o,
                        }),
                        T
                            ? (0, l.jsx)(s.olH, {
                                  className: m.modalCloseButton,
                                  onClick: function () {
                                      H(!0), y();
                                  },
                              })
                            : null,
                    ],
                }),
                (0, l.jsxs)(s.hzk, {
                    className: p.modalContent,
                    children: [
                        X
                            ? null
                            : (0, l.jsx)(s.xJW, {
                                  className: m.problemInfo,
                                  children: (0, l.jsx)(v.Z, {
                                      options: $,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          B(t), Object.keys(L).includes(t) || y();
                                      },
                                  }),
                              }),
                        X
                            ? (0, l.jsxs)(s.xJW, {
                                  className: m.problemInfo,
                                  children: [
                                      (0, l.jsx)(s.Kx8, {
                                          value: F,
                                          maxLength: S.iF,
                                          onChange: Z,
                                          placeholder: null != (n = V.hint) ? n : N.intl.string(N.t.h95hcn),
                                      }),
                                      R ? (0, l.jsx)(C, {}) : null,
                                  ],
                              })
                            : null,
                    ],
                }),
                M || X
                    ? (0, l.jsx)(s.mzw, {
                          className: r()(m.footer, X ? p.submitFooter : p.modalFooter),
                          direction: E.Z.Direction.HORIZONTAL,
                          children: X
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(d.zx, {
                                            className: p.backButton,
                                            size: d.zx.Sizes.NONE,
                                            look: d.zx.Looks.LINK,
                                            color: d.zx.Colors.PRIMARY,
                                            onClick: () => {
                                                B(null), Z("");
                                            },
                                            children: N.intl.string(N.t["13/7kZ"]),
                                        }),
                                        (0, l.jsx)(s.zxk, {
                                            variant: "primary",
                                            size: "sm",
                                            text: N.intl.string(N.t.geKm7u),
                                            onClick: y,
                                        }),
                                    ],
                                })
                              : M
                                ? (0, l.jsx)(d.$q, {
                                      size: 24,
                                      type: d.M0.INVERTED,
                                      value: j,
                                      onChange: () => A(!j),
                                      children: (0, l.jsx)(s.Text, {
                                          variant: "text-md/normal",
                                          children: N.intl.string(N.t.lkWab2),
                                      }),
                                  })
                                : null,
                      })
                    : null,
            ],
        })
    );
}
