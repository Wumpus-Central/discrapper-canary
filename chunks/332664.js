n.d(t, { Z: () => L }), n(388685);
var a = n(951288),
    l = n(647438),
    i = n(120356),
    r = n.n(i),
    s = n(392711),
    d = n.n(s),
    u = n(755721),
    b = n(481060),
    c = n(493773),
    o = n(110924),
    E = n(600164),
    O = n(313201),
    v = n(237617),
    f = n(572539),
    N = n(626135),
    h = n(63063),
    S = n(957115),
    g = n(764920),
    m = n(531578),
    _ = n(981631),
    p = n(388032),
    R = n(817320);
function L(e) {
    var t;
    let {
            modalType: n,
            header: i,
            body: s,
            problemTitle: L,
            problems: I,
            transitionState: D,
            ratingOptions: T,
            ratingEmojiKind: x,
            ratingTextLabels: j,
            freeformNeededProblems: M = [],
            otherKey: C,
            hideDontShowAgainCheckbox: A,
            startRating: P = null,
            hideHelpDeskLink: $ = !1,
            onSubmit: F,
            onClose: y,
            impression: U,
            freeformDescription: k,
        } = e,
        Z = (0, o.Z)(I),
        [B, G] = l.useState(!1),
        [w, H] = l.useState(P),
        [J, z] = l.useState(null),
        [K, Y] = l.useState(d().shuffle(I)),
        [Q, V] = l.useState(""),
        X = (0, O.Dt)(),
        q = (0, v.Z)(w),
        W = (0, v.Z)(B),
        ee = (0, v.Z)(J),
        et = (0, v.Z)(F),
        en = (0, v.Z)(Q),
        ea = null;
    return (
        null == w
            ? (ea = "RATING")
            : w !== m.aZ.GOOD && null == J
              ? (ea = "PROBLEM")
              : null != J && M.includes(J.value) && (ea = "FREEFORM"),
        l.useEffect(() => {
            d().isEqual(Z, I) || Y((0, S.Bi)(I, C));
        }, [I, Z, C]),
        (0, c.ZP)(
            () => (
                N.default.track(_.rMx.OPEN_MODAL, {
                    type: n,
                    source: "Feedback Modal",
                }),
                () => {
                    et.current({
                        rating: q.current,
                        problem: ee.current,
                        dontShowAgain: W.current,
                        feedback: en.current,
                    });
                }
            ),
        ),
        (0, a.jsxs)(b.Y0X, {
            impression: U,
            transitionState: D,
            className: R.modalRoot,
            "aria-labelledby": X,
            parentComponent: "FeedbackModal",
            children: [
                (0, a.jsxs)(b.xBx, {
                    separator: !1,
                    className: R.headerContainer,
                    children: [
                        (0, a.jsx)(b.X6q, {
                            id: X,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: i,
                        }),
                        (0, a.jsx)(b.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: R.ratingBody,
                            children: s,
                        }),
                    ],
                }),
                ("RATING" === ea || ("PROBLEM" === ea && null == j)) &&
                    (0, a.jsx)("div", {
                        className: r()(R.problemInfo, R.ratingSelectorContainer),
                        children: (0, a.jsx)(g.Z, {
                            ratingOptions: T,
                            emojiKind: x,
                            textLabels: j,
                            selectedRating: w,
                            onChangeRating: function (e) {
                                H(e), e === m.aZ.GOOD && y();
                            },
                        }),
                    }),
                "PROBLEM" === ea &&
                    (0, a.jsx)(b.hzk, {
                        className: R.__invalid_content,
                        children: (0, a.jsx)(b.xJW, {
                            title: L,
                            className: r()(R.problemInfo, R.presetList, { [R.marginBottom16]: A }),
                            children: (0, a.jsx)(f.Z, {
                                options: K,
                                onClick: function (e) {
                                    z(e), M.includes(e.value) || y();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !M.includes(t);
                                },
                            }),
                        }),
                    }),
                "FREEFORM" === ea &&
                    (0, a.jsx)(b.hzk, {
                        className: R.__invalid_content,
                        children: (0, a.jsx)(b.Kx8, {
                            label: null != (t = null == k ? void 0 : k(J)) ? t : p.intl.string(p.t.h95hcn),
                            helperText: $
                                ? void 0
                                : p.intl.format(p.t.ybi2tL, { helpdeskURL: h.Z.getSubmitRequestURL() }),
                            value: Q,
                            maxLength: m.iF,
                            onChange: V,
                        }),
                    }),
                "RATING" === ea &&
                    !A &&
                    (0, a.jsx)(b.mzw, {
                        className: R.footer,
                        direction: E.Z.Direction.HORIZONTAL,
                        children: (0, a.jsx)(u.$q, {
                            type: u.M0.INVERTED,
                            size: 18,
                            value: B,
                            onChange: () => G(!B),
                            children: (0, a.jsx)(b.Text, {
                                variant: "text-sm/normal",
                                children: p.intl.string(p.t["5E9SBw"]),
                            }),
                        }),
                    }),
                ("FREEFORM" === ea || ("PROBLEM" === ea && null != j)) &&
                    (0, a.jsx)(b.mzw, {
                        className: R.footer,
                        direction: E.Z.Direction.HORIZONTAL,
                        children: (0, a.jsxs)(b.hE2, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, a.jsx)(b.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: p.intl.string(p.t["13/7kZ"]),
                                    onClick: () => {
                                        "FREEFORM" === ea ? (z(null), V("")) : H(null);
                                    },
                                }),
                                (0, a.jsx)(b.zxk, {
                                    variant: "primary",
                                    size: "sm",
                                    text: p.intl.string(p.t.geKm7u),
                                    onClick: y,
                                }),
                            ],
                        }),
                    }),
            ],
        })
    );
}
