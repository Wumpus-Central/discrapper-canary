n.d(t, {
    A: () => m,
}),
    n(896048);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    d = n(735438),
    s = n.n(d),
    u = n(66455),
    O = n(397927),
    b = n(964486),
    E = n(475743),
    c = n(235986),
    o = n(915089),
    v = n(124480),
    f = n(954571),
    g = n(975571),
    N = n(930932),
    h = n(321563),
    S = n(670455),
    U = n(652215),
    p = n(985018),
    j = n(768919);

function m(e) {
    var t;
    let {
            modalType: n,
            header: i,
            body: d,
            problemTitle: m,
            problems: A,
            transitionState: R,
            ratingOptions: _,
            ratingEmojiKind: D,
            ratingTextLabels: L,
            freeformNeededProblems: I = [],
            otherKey: T,
            hideDontShowAgainCheckbox: C,
            startRating: V = null,
            hideHelpDeskLink: x = !1,
            onSubmit: y,
            onClose: P,
            impression: F,
            freeformDescription: M,
        } = e,
        G = (0, E.A)(A),
        [k, H] = l.useState(!1),
        [B, w] = l.useState(V),
        [X, K] = l.useState(null),
        [Y, q] = l.useState(s().shuffle(A)),
        [Q, z] = l.useState(""),
        Z = (0, o.GV)(),
        W = (0, u.A)(B),
        J = (0, u.A)(k),
        $ = (0, u.A)(X),
        ee = (0, u.A)(y),
        et = (0, u.A)(Q),
        en = null;
    return (
        null == B
            ? (en = "RATING")
            : B !== S.P0.GOOD && null == X
              ? (en = "PROBLEM")
              : null != X && I.includes(X.value) && (en = "FREEFORM"),
        l.useEffect(() => {
            s().isEqual(G, A) || q((0, N.ed)(A, T));
        }, [A, G, T]),
        (0, b.Ay)(
            () => (
                f.default.track(U.HAw.OPEN_MODAL, {
                    type: n,
                    source: "Feedback Modal",
                }),
                () => {
                    ee.current({
                        rating: W.current,
                        problem: $.current,
                        dontShowAgain: J.current,
                        feedback: et.current,
                    });
                }
            ),
        ),
        (0, a.jsxs)(O.EOs, {
            "data-migration-pending": !0,
            impression: F,
            transitionState: R,
            className: j.CR,
            "aria-labelledby": Z,
            parentComponent: "FeedbackModal",
            children: [
                (0, a.jsxs)(O.rQ0, {
                    "data-migration-pending": !0,
                    separator: !1,
                    className: j.N1,
                    children: [
                        (0, a.jsx)(O.Heading, {
                            id: Z,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: i,
                        }),
                        (0, a.jsx)(O.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: j.sB,
                            children: d,
                        }),
                    ],
                }),
                ("RATING" === en || ("PROBLEM" === en && null == L)) &&
                    (0, a.jsx)("div", {
                        className: r()(j.OS, j.Ko),
                        children: (0, a.jsx)(h.A, {
                            ratingOptions: _,
                            emojiKind: D,
                            textLabels: L,
                            selectedRating: B,
                            onChangeRating: function (e) {
                                w(e), e === S.P0.GOOD && P();
                            },
                        }),
                    }),
                "PROBLEM" === en &&
                    (0, a.jsx)(O.$mQ, {
                        "data-migration-pending": !0,
                        children: (0, a.jsx)(O.D0$, {
                            label: m,
                            children: (0, a.jsx)(v.A, {
                                options: Y,
                                onClick: function (e) {
                                    K(e), I.includes(e.value) || P();
                                },
                                hideCaret: (e) => {
                                    let { value: t } = e;
                                    return !I.includes(t);
                                },
                            }),
                        }),
                    }),
                "FREEFORM" === en &&
                    (0, a.jsx)(O.$mQ, {
                        "data-migration-pending": !0,
                        className: j.__invalid_content,
                        children: (0, a.jsx)(O.fs1, {
                            label: null != (t = null == M ? void 0 : M(X)) ? t : p.intl.string(p.t.h95hcn),
                            helperText: x
                                ? void 0
                                : p.intl.format(p.t.ybi2tD, {
                                      helpdeskURL: g.A.getSubmitRequestURL(),
                                  }),
                            value: Q,
                            maxLength: S.u0,
                            onChange: z,
                        }),
                    }),
                "RATING" === en &&
                    !C &&
                    (0, a.jsx)(O.jlY, {
                        "data-migration-pending": !0,
                        className: j.qr,
                        direction: c.A.Direction.HORIZONTAL,
                        children: (0, a.jsx)(O.Checkbox, {
                            checked: k,
                            onChange: () => H(!k),
                            label: p.intl.string(p.t["5E9SB9"]),
                            labelType: "secondary",
                        }),
                    }),
                ("FREEFORM" === en || ("PROBLEM" === en && null != L)) &&
                    (0, a.jsx)(O.jlY, {
                        "data-migration-pending": !0,
                        className: j.qr,
                        direction: c.A.Direction.HORIZONTAL,
                        children: (0, a.jsxs)(O.ButtonGroup, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, a.jsx)(O.Button, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: p.intl.string(p.t["13/7kX"]),
                                    onClick: () => {
                                        "FREEFORM" === en ? (K(null), z("")) : w(null);
                                    },
                                }),
                                (0, a.jsx)(O.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: p.intl.string(p.t.geKm7t),
                                    onClick: P,
                                }),
                            ],
                        }),
                    }),
            ],
        })
    );
}
