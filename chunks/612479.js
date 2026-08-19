t.d(n, { A: () => F });
var a = t(477900),
    i = t(582128),
    l = t(503698),
    s = t.n(l),
    r = t(435558),
    c = t.n(r),
    d = t(66455),
    o = t(935462),
    u = t(297264),
    h = t(834730),
    m = t(452027),
    g = t(260598),
    p = t(150934),
    x = t(825484),
    R = t(821609),
    A = t(964486),
    O = t(475743),
    j = t(235986),
    E = t(915089),
    b = t(124480),
    N = t(174459),
    k = t(975571),
    v = t(930932),
    f = t(321563),
    C = t(670455),
    L = t(652215),
    M = t(375708),
    S = t(694413);
function F(e) {
    let {
            modalType: n,
            header: t,
            body: l,
            problemTitle: r,
            problems: F,
            transitionState: y,
            ratingOptions: D,
            ratingEmojiKind: P,
            ratingTextLabels: T,
            freeformNeededProblems: _ = [],
            otherKey: B,
            hideDontShowAgainCheckbox: G,
            startRating: I = null,
            hideHelpDeskLink: q = !1,
            onSubmit: w,
            onClose: $,
            impression: z,
            freeformDescription: H,
        } = e,
        K = (0, O.Ay)(F),
        [U, Z] = i.useState(!1),
        [Q, V] = i.useState(I),
        [X, J] = i.useState(null),
        [W, Y] = i.useState(c().shuffle(F)),
        [ee, en] = i.useState(""),
        et = (0, E.GV)(),
        ea = (0, d.A)(Q),
        ei = (0, d.A)(U),
        el = (0, d.A)(X),
        es = (0, d.A)(w),
        er = (0, d.A)(ee),
        ec = null;
    return (
        null == Q
            ? (ec = "RATING")
            : Q !== C.P0.GOOD && null == X
              ? (ec = "PROBLEM")
              : null != X && _.includes(X.value) && (ec = "FREEFORM"),
        i.useEffect(() => {
            c().isEqual(K, F) || Y((0, v.ed)(F, B));
        }, [F, K, B]),
        (0, A.Ay)(
            () => (
                N.default.track(L.HAw.OPEN_MODAL, { type: n, source: "Feedback Modal" }),
                () => {
                    es.current({
                        rating: ea.current,
                        problem: el.current,
                        dontShowAgain: ei.current,
                        feedback: er.current,
                    });
                }
            ),
        ),
        (0, a.jsxs)(o.EO, {
            "data-migration-pending": !0,
            impression: z,
            transitionState: y,
            className: S.CR,
            "aria-labelledby": et,
            parentComponent: "FeedbackModal",
            children: [
                (0, a.jsxs)(o.rQ, {
                    "data-migration-pending": !0,
                    separator: !1,
                    className: S.N1,
                    children: [
                        (0, a.jsx)(u.D, { id: et, variant: "heading-xl/extrabold", color: "none", children: t }),
                        (0, a.jsx)(h.E, { variant: "text-md/normal", color: "none", className: S.sB, children: l }),
                    ],
                }),
                ("RATING" === ec || ("PROBLEM" === ec && null == T)) &&
                    (0, a.jsx)("div", {
                        className: s()(S.OS, S.Ko),
                        children: (0, a.jsx)(f.A, {
                            ratingOptions: D,
                            emojiKind: P,
                            textLabels: T,
                            selectedRating: Q,
                            onChangeRating: function (e) {
                                V(e), e === C.P0.GOOD && $();
                            },
                        }),
                    }),
                "PROBLEM" === ec &&
                    (0, a.jsx)(o.$m, {
                        "data-migration-pending": !0,
                        className: s()({ [S._3]: null == T }),
                        children: (0, a.jsx)(m.D, {
                            label: r,
                            children: (0, a.jsx)(b.A, {
                                options: W,
                                onClick: function (e) {
                                    J(e), _.includes(e.value) || $();
                                },
                                hideCaret: (e) => {
                                    let { value: n } = e;
                                    return !_.includes(n);
                                },
                            }),
                        }),
                    }),
                "FREEFORM" === ec &&
                    (0, a.jsx)(o.$m, {
                        "data-migration-pending": !0,
                        className: S.__invalid_content,
                        children: (0, a.jsx)(g.f, {
                            label: H?.(X) ?? M.intl.string(M.t.h95hcn),
                            helperText: q
                                ? void 0
                                : M.intl.format(M.t.ybi2tD, { helpdeskURL: k.A.getSubmitRequestURL() }),
                            value: ee,
                            maxLength: C.u0,
                            onChange: en,
                        }),
                    }),
                "RATING" === ec &&
                    !G &&
                    (0, a.jsx)(o.jl, {
                        "data-migration-pending": !0,
                        className: S.qr,
                        direction: j.A.Direction.HORIZONTAL,
                        children: (0, a.jsx)(p.S, {
                            checked: U,
                            onChange: () => Z(!U),
                            label: M.intl.string(M.t["5E9SB9"]),
                            labelType: "secondary",
                        }),
                    }),
                ("FREEFORM" === ec || ("PROBLEM" === ec && null != T)) &&
                    (0, a.jsx)(o.jl, {
                        "data-migration-pending": !0,
                        className: S.qr,
                        direction: j.A.Direction.HORIZONTAL,
                        children: (0, a.jsxs)(x.e, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, a.jsx)(R.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: M.intl.string(M.t["13/7kX"]),
                                    onClick: () => {
                                        "FREEFORM" === ec ? (J(null), en("")) : V(null);
                                    },
                                }),
                                (0, a.jsx)(R.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: M.intl.string(M.t.geKm7t),
                                    onClick: $,
                                }),
                            ],
                        }),
                    }),
            ],
        })
    );
}
