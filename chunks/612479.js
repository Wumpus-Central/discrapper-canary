t.d(a, { A: () => R });
var l = t(627968),
    n = t(64700),
    i = t(503698),
    r = t.n(i),
    d = t(735438),
    s = t.n(d),
    u = t(66455),
    E = t(397927),
    O = t(964486),
    b = t(475743),
    v = t(235986),
    c = t(915089),
    o = t(124480),
    N = t(954571),
    f = t(975571),
    U = t(930932),
    h = t(321563),
    g = t(670455),
    S = t(652215),
    A = t(985018),
    _ = t(768919);
function R(e) {
    let {
            modalType: a,
            header: t,
            body: i,
            problemTitle: d,
            problems: R,
            transitionState: L,
            ratingOptions: m,
            ratingEmojiKind: D,
            ratingTextLabels: I,
            freeformNeededProblems: j = [],
            otherKey: T,
            hideDontShowAgainCheckbox: C,
            startRating: V = null,
            hideHelpDeskLink: x = !1,
            onSubmit: p,
            onClose: F,
            impression: M,
            freeformDescription: G,
        } = e,
        P = (0, b.A)(R),
        [H, k] = n.useState(!1),
        [B, X] = n.useState(V),
        [y, Y] = n.useState(null),
        [K, q] = n.useState(s().shuffle(R)),
        [w, Q] = n.useState(""),
        z = (0, c.GV)(),
        Z = (0, u.A)(B),
        W = (0, u.A)(H),
        J = (0, u.A)(y),
        $ = (0, u.A)(p),
        ee = (0, u.A)(w),
        ea = null;
    return (
        null == B
            ? (ea = "RATING")
            : B !== g.P0.GOOD && null == y
              ? (ea = "PROBLEM")
              : null != y && j.includes(y.value) && (ea = "FREEFORM"),
        n.useEffect(() => {
            s().isEqual(P, R) || q((0, U.ed)(R, T));
        }, [R, P, T]),
        (0, O.Ay)(
            () => (
                N.default.track(S.HAw.OPEN_MODAL, { type: a, source: "Feedback Modal" }),
                () => {
                    $.current({
                        rating: Z.current,
                        problem: J.current,
                        dontShowAgain: W.current,
                        feedback: ee.current,
                    });
                }
            ),
        ),
        (0, l.jsxs)(E.EOs, {
            "data-migration-pending": !0,
            impression: M,
            transitionState: L,
            className: _.CR,
            "aria-labelledby": z,
            parentComponent: "FeedbackModal",
            children: [
                (0, l.jsxs)(E.rQ0, {
                    "data-migration-pending": !0,
                    separator: !1,
                    className: _.N1,
                    children: [
                        (0, l.jsx)(E.Heading, { id: z, variant: "heading-xl/extrabold", color: "none", children: t }),
                        (0, l.jsx)(E.Text, { variant: "text-md/normal", color: "none", className: _.sB, children: i }),
                    ],
                }),
                ("RATING" === ea || ("PROBLEM" === ea && null == I)) &&
                    (0, l.jsx)("div", {
                        className: r()(_.OS, _.Ko),
                        children: (0, l.jsx)(h.A, {
                            ratingOptions: m,
                            emojiKind: D,
                            textLabels: I,
                            selectedRating: B,
                            onChangeRating: function (e) {
                                X(e), e === g.P0.GOOD && F();
                            },
                        }),
                    }),
                "PROBLEM" === ea &&
                    (0, l.jsx)(E.$mQ, {
                        "data-migration-pending": !0,
                        children: (0, l.jsx)(E.D0$, {
                            label: d,
                            children: (0, l.jsx)(o.A, {
                                options: K,
                                onClick: function (e) {
                                    Y(e), j.includes(e.value) || F();
                                },
                                hideCaret: (e) => {
                                    let { value: a } = e;
                                    return !j.includes(a);
                                },
                            }),
                        }),
                    }),
                "FREEFORM" === ea &&
                    (0, l.jsx)(E.$mQ, {
                        "data-migration-pending": !0,
                        className: _.__invalid_content,
                        children: (0, l.jsx)(E.fs1, {
                            label: G?.(y) ?? A.intl.string(A.t.h95hcn),
                            helperText: x
                                ? void 0
                                : A.intl.format(A.t.ybi2tD, { helpdeskURL: f.A.getSubmitRequestURL() }),
                            value: w,
                            maxLength: g.u0,
                            onChange: Q,
                        }),
                    }),
                "RATING" === ea &&
                    !C &&
                    (0, l.jsx)(E.jlY, {
                        "data-migration-pending": !0,
                        className: _.qr,
                        direction: v.A.Direction.HORIZONTAL,
                        children: (0, l.jsx)(E.Checkbox, {
                            checked: H,
                            onChange: () => k(!H),
                            label: A.intl.string(A.t["5E9SB9"]),
                            labelType: "secondary",
                        }),
                    }),
                ("FREEFORM" === ea || ("PROBLEM" === ea && null != I)) &&
                    (0, l.jsx)(E.jlY, {
                        "data-migration-pending": !0,
                        className: _.qr,
                        direction: v.A.Direction.HORIZONTAL,
                        children: (0, l.jsxs)(E.ButtonGroup, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, l.jsx)(E.Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: A.intl.string(A.t["13/7kX"]),
                                    onClick: () => {
                                        "FREEFORM" === ea ? (Y(null), Q("")) : X(null);
                                    },
                                }),
                                (0, l.jsx)(E.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: A.intl.string(A.t.geKm7t),
                                    onClick: F,
                                }),
                            ],
                        }),
                    }),
            ],
        })
    );
}
