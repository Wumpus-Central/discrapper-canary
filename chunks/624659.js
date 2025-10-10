n.d(t, { Z: () => I }), n(388685);
var l = n(951288),
    a = n(647438),
    i = n(120356),
    r = n.n(i),
    o = n(392711),
    u = n.n(o),
    d = n(872175),
    s = n(755721),
    b = n(481060),
    c = n(493773),
    E = n(110924),
    O = n(600164),
    f = n(313201),
    v = n(572539),
    _ = n(648159),
    h = n(63063),
    g = n(957115),
    S = n(531578),
    N = n(388032),
    m = n(817320),
    p = n(519249);
function C() {
    return (0, l.jsx)(b.Text, {
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
            otherKey: y,
            hasCloseButton: D,
            onSubmit: T,
            onClose: x,
            canDismissForever: M = !0,
            showHelpdeskLink: k = !0,
        } = e,
        R = (0, E.Z)(h),
        [j, A] = a.useState(!1),
        [P, B] = a.useState(null),
        [U, $] = a.useState(u().shuffle(h)),
        [F, Z] = a.useState(""),
        [w, H] = a.useState(!1),
        G = (0, f.Dt)(),
        J = (0, d.Z)(j),
        Y = (0, d.Z)(P),
        z = (0, d.Z)(T),
        K = (0, d.Z)(F),
        Q = (0, d.Z)(w),
        X = null != P ? L[P] : null,
        V = null != X;
    return (
        a.useEffect(() => {
            u().isEqual(R, h) || $((0, g.Bi)(h, y));
        }, [h, R, y]),
        (0, c.ZP)(() => () => {
            z.current({
                problem: Y.current,
                dontShowAgain: J.current,
                feedback: K.current,
                closeClicked: Q.current,
            });
        }),
        (0, l.jsxs)(b.Y0X, {
            transitionState: I,
            "aria-labelledby": G,
            parentComponent: "SimpleFeedbackModal",
            children: [
                (0, l.jsx)(_.Z, {}),
                (0, l.jsxs)(b.xBx, {
                    separator: !1,
                    className: r()(m.headerContainer, p.headerContainer),
                    children: [
                        (0, l.jsx)(b.X6q, {
                            id: G,
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            className: m.header,
                            children: i,
                        }),
                        (0, l.jsx)(b.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            className: r()(m.ratingBody, p.headerBody),
                            children: null != (t = null == X ? void 0 : X.subheader) ? t : o,
                        }),
                        D
                            ? (0, l.jsx)(b.olH, {
                                  className: m.modalCloseButton,
                                  onClick: function () {
                                      H(!0), x();
                                  },
                              })
                            : null,
                    ],
                }),
                (0, l.jsxs)(b.hzk, {
                    className: p.modalContent,
                    children: [
                        V
                            ? null
                            : (0, l.jsx)("div", {
                                  className: m.problemInfo,
                                  children: (0, l.jsx)(v.Z, {
                                      options: U,
                                      onClick: function (e) {
                                          let { value: t } = e;
                                          B(t), Object.keys(L).includes(t) || x();
                                      },
                                  }),
                              }),
                        V
                            ? (0, l.jsxs)("div", {
                                  className: m.problemInfo,
                                  children: [
                                      (0, l.jsx)(b.Kx8, {
                                          value: F,
                                          maxLength: S.iF,
                                          onChange: Z,
                                          placeholder: null != (n = X.hint) ? n : N.intl.string(N.t.h95hcn),
                                      }),
                                      k ? (0, l.jsx)(C, {}) : null,
                                  ],
                              })
                            : null,
                    ],
                }),
                M || V
                    ? (0, l.jsx)(b.mzw, {
                          className: r()(m.footer, V ? p.submitFooter : p.modalFooter),
                          direction: O.Z.Direction.HORIZONTAL,
                          children: V
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        (0, l.jsx)(s.zx, {
                                            className: p.backButton,
                                            size: s.zx.Sizes.NONE,
                                            look: s.zx.Looks.LINK,
                                            color: s.zx.Colors.PRIMARY,
                                            onClick: () => {
                                                B(null), Z("");
                                            },
                                            children: N.intl.string(N.t["13/7kZ"]),
                                        }),
                                        (0, l.jsx)(b.zxk, {
                                            variant: "primary",
                                            size: "sm",
                                            text: N.intl.string(N.t.geKm7u),
                                            onClick: x,
                                        }),
                                    ],
                                })
                              : M
                                ? (0, l.jsx)(b.XZJ, {
                                      checked: j,
                                      onChange: () => A(!j),
                                      label: N.intl.string(N.t.lkWab2),
                                      labelType: "secondary",
                                  })
                                : null,
                      })
                    : null,
            ],
        })
    );
}
