n.d(t, { Z: () => R }), n(388685);
var a = n(951288),
    l = n(647438),
    i = n(120356),
    r = n.n(i),
    s = n(392711),
    d = n.n(s),
    u = n(872175),
    b = n(481060),
    c = n(493773),
    o = n(110924),
    O = n(600164),
    E = n(313201),
    v = n(572539),
    f = n(626135),
    N = n(63063),
    h = n(957115),
    S = n(764920),
    g = n(531578),
    _ = n(981631),
    m = n(388032),
    p = n(817320);
function R(e) {
    var t;
    let {
            modalType: n,
            header: i,
            body: s,
            problemTitle: R,
            problems: L,
            transitionState: D,
            ratingOptions: I,
            ratingEmojiKind: T,
            ratingTextLabels: j,
            freeformNeededProblems: M = [],
            otherKey: C,
            hideDontShowAgainCheckbox: x,
            startRating: A = null,
            hideHelpDeskLink: P = !1,
            onSubmit: y,
            onClose: F,
            impression: $,
            freeformDescription: U,
        } = e,
        k = (0, o.Z)(L),
        [Z, B] = l.useState(!1),
        [G, H] = l.useState(A),
        [w, J] = l.useState(null),
        [Y, K] = l.useState(d().shuffle(L)),
        [z, Q] = l.useState(""),
        V = (0, E.Dt)(),
        X = (0, u.Z)(G),
        q = (0, u.Z)(Z),
        W = (0, u.Z)(w),
        ee = (0, u.Z)(y),
        et = (0, u.Z)(z),
        en = null;
    return (
        null == G
            ? (en = "RATING")
            : G !== g.aZ.GOOD && null == w
              ? (en = "PROBLEM")
              : null != w && M.includes(w.value) && (en = "FREEFORM"),
        l.useEffect(() => {
            d().isEqual(k, L) || K((0, h.Bi)(L, C));
        }, [L, k, C]),
        (0, c.ZP)(
            () => (
                f.default.track(_.rMx.OPEN_MODAL, {
                    type: n,
                    source: "Feedback Modal",
                }),
                () => {
                    ee.current({
                        rating: X.current,
                        problem: W.current,
                        dontShowAgain: q.current,
                        feedback: et.current,
                    });
                }
            ),
        ),
        (0, a.jsxs)(b.Y0X, {
            impression: $,
            transitionState: D,
            className: p.modalRoot,
            "aria-labelledby": V,
            parentComponent: "FeedbackModal",
            children: [
                (0, a.jsxs)(b.xBx, {
                    separator: !1,
                    className: p.headerContainer,
                    children: [
                        (0, a.jsx)(b.Heading, {
                            id: V,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: i,
                        }),
                        (0, a.jsx)(b.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: p.ratingBody,
                            children: s,
                        }),
                    ],
                }),
                ("RATING" === en || ("PROBLEM" === en && null == j)) &&
                    (0, a.jsx)("div", {
                        className: r()(p.problemInfo, p.ratingSelectorContainer),
                        children: (0, a.jsx)(S.Z, {
                            ratingOptions: I,
                            emojiKind: T,
                            textLabels: j,
                            selectedRating: G,
                            onChangeRating: function (e) {
                                H(e), e === g.aZ.GOOD && F();
                            },
                        }),
                    }),
                "PROBLEM" === en &&
                    (0, a.jsx)(b.hzk, {
                        children: (0, a.jsx)(b.gNt, {
                            label: R,
                            children: (0, a.jsx)(v.Z, {
                                options: Y,
                                onClick: function (e) {
                                    J(e), M.includes(e.value) || F();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !M.includes(t);
                                },
                            }),
                        }),
                    }),
                "FREEFORM" === en &&
                    (0, a.jsx)(b.hzk, {
                        className: p.__invalid_content,
                        children: (0, a.jsx)(b.Kx8, {
                            label: null != (t = null == U ? void 0 : U(w)) ? t : m.intl.string(m.t.h95hcn),
                            helperText: P
                                ? void 0
                                : m.intl.format(m.t.ybi2tL, { helpdeskURL: N.Z.getSubmitRequestURL() }),
                            value: z,
                            maxLength: g.iF,
                            onChange: Q,
                        }),
                    }),
                "RATING" === en &&
                    !x &&
                    (0, a.jsx)(b.mzw, {
                        className: p.footer,
                        direction: O.Z.Direction.HORIZONTAL,
                        children: (0, a.jsx)(b.Checkbox, {
                            checked: Z,
                            onChange: () => B(!Z),
                            label: m.intl.string(m.t["5E9SBw"]),
                            labelType: "secondary",
                        }),
                    }),
                ("FREEFORM" === en || ("PROBLEM" === en && null != j)) &&
                    (0, a.jsx)(b.mzw, {
                        className: p.footer,
                        direction: O.Z.Direction.HORIZONTAL,
                        children: (0, a.jsxs)(b.ButtonGroup, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, a.jsx)(b.Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: m.intl.string(m.t["13/7kZ"]),
                                    onClick: () => {
                                        "FREEFORM" === en ? (J(null), Q("")) : H(null);
                                    },
                                }),
                                (0, a.jsx)(b.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: m.intl.string(m.t.geKm7u),
                                    onClick: F,
                                }),
                            ],
                        }),
                    }),
            ],
        })
    );
}
