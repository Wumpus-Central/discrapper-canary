a.d(t, { Z: () => L }), a(388685);
var n = a(951288),
    l = a(647438),
    i = a(120356),
    r = a.n(i),
    s = a(392711),
    d = a.n(s),
    u = a(872175),
    b = a(481060),
    c = a(493773),
    o = a(110924),
    E = a(600164),
    O = a(313201),
    v = a(572539),
    f = a(626135),
    N = a(63063),
    h = a(957115),
    S = a(764920),
    g = a(531578),
    _ = a(981631),
    m = a(388032),
    p = a(817320);
function L(e) {
    var t;
    let {
            modalType: a,
            header: i,
            body: s,
            problemTitle: L,
            problems: R,
            transitionState: I,
            ratingOptions: D,
            ratingEmojiKind: T,
            ratingTextLabels: j,
            freeformNeededProblems: x = [],
            otherKey: M,
            hideDontShowAgainCheckbox: C,
            startRating: A = null,
            hideHelpDeskLink: P = !1,
            onSubmit: y,
            onClose: F,
            impression: $,
            freeformDescription: U,
        } = e,
        k = (0, o.Z)(R),
        [Z, B] = l.useState(!1),
        [G, H] = l.useState(A),
        [J, w] = l.useState(null),
        [z, Y] = l.useState(d().shuffle(R)),
        [K, X] = l.useState(""),
        Q = (0, O.Dt)(),
        V = (0, u.Z)(G),
        q = (0, u.Z)(Z),
        W = (0, u.Z)(J),
        ee = (0, u.Z)(y),
        et = (0, u.Z)(K),
        ea = null;
    return (
        null == G
            ? (ea = "RATING")
            : G !== g.aZ.GOOD && null == J
              ? (ea = "PROBLEM")
              : null != J && x.includes(J.value) && (ea = "FREEFORM"),
        l.useEffect(() => {
            d().isEqual(k, R) || Y((0, h.Bi)(R, M));
        }, [R, k, M]),
        (0, c.ZP)(
            () => (
                f.default.track(_.rMx.OPEN_MODAL, {
                    type: a,
                    source: "Feedback Modal",
                }),
                () => {
                    ee.current({
                        rating: V.current,
                        problem: W.current,
                        dontShowAgain: q.current,
                        feedback: et.current,
                    });
                }
            ),
        ),
        (0, n.jsxs)(b.Y0X, {
            impression: $,
            transitionState: I,
            className: p.modalRoot,
            "aria-labelledby": Q,
            parentComponent: "FeedbackModal",
            children: [
                (0, n.jsxs)(b.xBx, {
                    separator: !1,
                    className: p.headerContainer,
                    children: [
                        (0, n.jsx)(b.X6q, {
                            id: Q,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: i,
                        }),
                        (0, n.jsx)(b.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: p.ratingBody,
                            children: s,
                        }),
                    ],
                }),
                ("RATING" === ea || ("PROBLEM" === ea && null == j)) &&
                    (0, n.jsx)("div", {
                        className: r()(p.problemInfo, p.ratingSelectorContainer),
                        children: (0, n.jsx)(S.Z, {
                            ratingOptions: D,
                            emojiKind: T,
                            textLabels: j,
                            selectedRating: G,
                            onChangeRating: function (e) {
                                H(e), e === g.aZ.GOOD && F();
                            },
                        }),
                    }),
                "PROBLEM" === ea &&
                    (0, n.jsx)(b.hzk, {
                        className: p.__invalid_content,
                        children: (0, n.jsx)(b.xJW, {
                            title: L,
                            className: r()(p.problemInfo, p.presetList, { [p.marginBottom16]: C }),
                            children: (0, n.jsx)(v.Z, {
                                options: z,
                                onClick: function (e) {
                                    w(e), x.includes(e.value) || F();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !x.includes(t);
                                },
                            }),
                        }),
                    }),
                "FREEFORM" === ea &&
                    (0, n.jsx)(b.hzk, {
                        className: p.__invalid_content,
                        children: (0, n.jsx)(b.Kx8, {
                            label: null != (t = null == U ? void 0 : U(J)) ? t : m.intl.string(m.t.h95hcn),
                            helperText: P
                                ? void 0
                                : m.intl.format(m.t.ybi2tL, { helpdeskURL: N.Z.getSubmitRequestURL() }),
                            value: K,
                            maxLength: g.iF,
                            onChange: X,
                        }),
                    }),
                "RATING" === ea &&
                    !C &&
                    (0, n.jsx)(b.mzw, {
                        className: p.footer,
                        direction: E.Z.Direction.HORIZONTAL,
                        children: (0, n.jsx)(b.XZJ, {
                            checked: Z,
                            onChange: () => B(!Z),
                            label: m.intl.string(m.t["5E9SBw"]),
                            labelType: "secondary",
                        }),
                    }),
                ("FREEFORM" === ea || ("PROBLEM" === ea && null != j)) &&
                    (0, n.jsx)(b.mzw, {
                        className: p.footer,
                        direction: E.Z.Direction.HORIZONTAL,
                        children: (0, n.jsxs)(b.hE2, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, n.jsx)(b.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: m.intl.string(m.t["13/7kZ"]),
                                    onClick: () => {
                                        "FREEFORM" === ea ? (w(null), X("")) : H(null);
                                    },
                                }),
                                (0, n.jsx)(b.zxk, {
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
