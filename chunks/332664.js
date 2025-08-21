n.d(t, { Z: () => R }), n(388685);
var a = n(951288),
    l = n(647438),
    i = n(120356),
    r = n.n(i),
    s = n(392711),
    d = n.n(s),
    u = n(481060),
    c = n(493773),
    b = n(110924),
    o = n(600164),
    E = n(313201),
    O = n(237617),
    v = n(572539),
    f = n(626135),
    N = n(63063),
    h = n(957115),
    S = n(764920),
    g = n(531578),
    m = n(981631),
    _ = n(388032),
    p = n(817320);
function x() {
    return (0, a.jsx)(u.Text, {
        className: p.helpdeskLink,
        variant: "text-xs/normal",
        color: "text-muted",
        children: _.intl.format(_.t.ybi2tL, { helpdeskURL: N.Z.getSubmitRequestURL() }),
    });
}
function R(e) {
    var t;
    let {
            modalType: n,
            header: i,
            body: s,
            problemTitle: N,
            problems: R,
            transitionState: L,
            ratingOptions: I,
            ratingEmojiKind: D,
            ratingTextLabels: T,
            freeformNeededProblems: j = [],
            otherKey: M,
            hideDontShowAgainCheckbox: C,
            startRating: A = null,
            hideHelpDeskLink: P = !1,
            onSubmit: y,
            onClose: F,
            impression: $,
            freeformDescription: U,
        } = e,
        k = (0, b.Z)(R),
        [Z, B] = l.useState(!1),
        [G, J] = l.useState(A),
        [w, H] = l.useState(null),
        [z, K] = l.useState(d().shuffle(R)),
        [Y, X] = l.useState(""),
        Q = (0, E.Dt)(),
        V = (0, O.Z)(G),
        W = (0, O.Z)(Z),
        q = (0, O.Z)(w),
        ee = (0, O.Z)(y),
        et = (0, O.Z)(Y),
        en = null;
    return (
        null == G
            ? (en = "RATING")
            : G !== g.aZ.GOOD && null == w
              ? (en = "PROBLEM")
              : null != w && j.includes(w.value) && (en = "FREEFORM"),
        l.useEffect(() => {
            d().isEqual(k, R) || K((0, h.Bi)(R, M));
        }, [R, k, M]),
        (0, c.ZP)(
            () => (
                f.default.track(m.rMx.OPEN_MODAL, {
                    type: n,
                    source: "Feedback Modal",
                }),
                () => {
                    ee.current({
                        rating: V.current,
                        problem: q.current,
                        dontShowAgain: W.current,
                        feedback: et.current,
                    });
                }
            ),
        ),
        (0, a.jsxs)(u.Y0X, {
            impression: $,
            transitionState: L,
            className: p.modalRoot,
            "aria-labelledby": Q,
            parentComponent: "FeedbackModal",
            children: [
                (0, a.jsxs)(u.xBx, {
                    separator: !1,
                    className: p.headerContainer,
                    children: [
                        (0, a.jsx)(u.X6q, {
                            id: Q,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: i,
                        }),
                        (0, a.jsx)(u.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: p.ratingBody,
                            children: s,
                        }),
                    ],
                }),
                ("RATING" === en || ("PROBLEM" === en && null == T)) &&
                    (0, a.jsx)(u.xJW, {
                        className: r()(p.problemInfo, p.ratingSelectorContainer),
                        children: (0, a.jsx)(S.Z, {
                            ratingOptions: I,
                            emojiKind: D,
                            textLabels: T,
                            selectedRating: G,
                            onChangeRating: function (e) {
                                J(e), e === g.aZ.GOOD && F();
                            },
                        }),
                    }),
                "PROBLEM" === en &&
                    (0, a.jsx)(u.hzk, {
                        className: p.__invalid_content,
                        children: (0, a.jsx)(u.xJW, {
                            title: N,
                            className: r()(p.problemInfo, p.presetList, { [p.marginBottom16]: C }),
                            children: (0, a.jsx)(v.Z, {
                                options: z,
                                onClick: function (e) {
                                    H(e), j.includes(e.value) || F();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !j.includes(t);
                                },
                            }),
                        }),
                    }),
                "FREEFORM" === en &&
                    (0, a.jsx)(u.hzk, {
                        className: p.__invalid_content,
                        children: (0, a.jsxs)(u.xJW, {
                            title: null != (t = null == U ? void 0 : U(w)) ? t : _.intl.string(_.t.h95hcn),
                            className: p.problemInfo,
                            children: [
                                (0, a.jsx)(u.Kx8, {
                                    value: Y,
                                    maxLength: g.iF,
                                    onChange: X,
                                }),
                                !P && (0, a.jsx)(x, {}),
                            ],
                        }),
                    }),
                "RATING" === en &&
                    !C &&
                    (0, a.jsx)(u.mzw, {
                        className: p.footer,
                        direction: o.Z.Direction.HORIZONTAL,
                        children: (0, a.jsx)(u.XZJ, {
                            type: u.XZJ.Types.INVERTED,
                            size: 18,
                            value: Z,
                            onChange: () => B(!Z),
                            children: (0, a.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: _.intl.string(_.t["5E9SBw"]),
                            }),
                        }),
                    }),
                ("FREEFORM" === en || ("PROBLEM" === en && null != T)) &&
                    (0, a.jsx)(u.mzw, {
                        className: p.footer,
                        direction: o.Z.Direction.HORIZONTAL,
                        children: (0, a.jsxs)(u.hE2, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, a.jsx)(u.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: _.intl.string(_.t["13/7kZ"]),
                                    onClick: () => {
                                        "FREEFORM" === en ? (H(null), X("")) : J(null);
                                    },
                                }),
                                (0, a.jsx)(u.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: _.intl.string(_.t.geKm7u),
                                    onClick: F,
                                }),
                            ],
                        }),
                    }),
            ],
        })
    );
}
