n.d(t, { Z: () => L }), n(388685);
var a = n(54381),
    l = n(473749),
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
    h = n(63063),
    N = n(957115),
    g = n(764920),
    S = n(531578),
    _ = n(981631),
    m = n(388032),
    p = n(155715);
function L(e) {
    var t;
    let {
            modalType: n,
            header: i,
            body: s,
            problemTitle: L,
            problems: R,
            transitionState: D,
            ratingOptions: I,
            ratingEmojiKind: T,
            ratingTextLabels: j,
            freeformNeededProblems: C = [],
            otherKey: M,
            hideDontShowAgainCheckbox: x,
            startRating: A = null,
            hideHelpDeskLink: P = !1,
            onSubmit: F,
            onClose: $,
            impression: y,
            freeformDescription: U,
        } = e,
        k = (0, o.Z)(R),
        [B, Z] = l.useState(!1),
        [G, H] = l.useState(A),
        [w, J] = l.useState(null),
        [Y, z] = l.useState(d().shuffle(R)),
        [K, Q] = l.useState(""),
        X = (0, E.Dt)(),
        V = (0, u.Z)(G),
        q = (0, u.Z)(B),
        W = (0, u.Z)(w),
        ee = (0, u.Z)(F),
        et = (0, u.Z)(K),
        en = null;
    return (
        null == G
            ? (en = "RATING")
            : G !== S.aZ.GOOD && null == w
              ? (en = "PROBLEM")
              : null != w && C.includes(w.value) && (en = "FREEFORM"),
        l.useEffect(() => {
            d().isEqual(k, R) || z((0, N.Bi)(R, M));
        }, [R, k, M]),
        (0, c.ZP)(
            () => (
                f.default.track(_.rMx.OPEN_MODAL, {
                    type: n,
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
        (0, a.jsxs)(b.Y0X, {
            impression: y,
            transitionState: D,
            className: p.modalRoot,
            "aria-labelledby": X,
            parentComponent: "FeedbackModal",
            children: [
                (0, a.jsxs)(b.xBx, {
                    separator: !1,
                    className: p.headerContainer,
                    children: [
                        (0, a.jsx)(b.Heading, {
                            id: X,
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
                        children: (0, a.jsx)(g.Z, {
                            ratingOptions: I,
                            emojiKind: T,
                            textLabels: j,
                            selectedRating: G,
                            onChangeRating: function (e) {
                                H(e), e === S.aZ.GOOD && $();
                            },
                        }),
                    }),
                "PROBLEM" === en &&
                    (0, a.jsx)(b.hzk, {
                        children: (0, a.jsx)(b.gNt, {
                            label: L,
                            children: (0, a.jsx)(v.Z, {
                                options: Y,
                                onClick: function (e) {
                                    J(e), C.includes(e.value) || $();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !C.includes(t);
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
                                : m.intl.format(m.t.ybi2tD, { helpdeskURL: h.Z.getSubmitRequestURL() }),
                            value: K,
                            maxLength: S.iF,
                            onChange: Q,
                        }),
                    }),
                "RATING" === en &&
                    !x &&
                    (0, a.jsx)(b.mzw, {
                        className: p.footer,
                        direction: O.Z.Direction.HORIZONTAL,
                        children: (0, a.jsx)(b.Checkbox, {
                            checked: B,
                            onChange: () => Z(!B),
                            label: m.intl.string(m.t["5E9SB9"]),
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
                                    text: m.intl.string(m.t["13/7kX"]),
                                    onClick: () => {
                                        "FREEFORM" === en ? (J(null), Q("")) : H(null);
                                    },
                                }),
                                (0, a.jsx)(b.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: m.intl.string(m.t.geKm7t),
                                    onClick: $,
                                }),
                            ],
                        }),
                    }),
            ],
        })
    );
}
