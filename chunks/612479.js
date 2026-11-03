t.d(n, { A: () => y });
var i = t(477900),
    a = t(582128),
    l = t(503698),
    s = t.n(l),
    r = t(435558),
    c = t.n(r),
    d = t(66455),
    o = t(935462),
    u = t(534514),
    h = t(834730),
    m = t(452027),
    g = t(103557),
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
    M = t(105292),
    S = t(694413);
function y(e) {
    let {
            modalType: n,
            header: t,
            body: l,
            problemTitle: r,
            problems: y,
            transitionState: F,
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
        K = (0, O.Ay)(y),
        [U, Z] = a.useState(!1),
        [Q, V] = a.useState(I),
        [X, J] = a.useState(null),
        [W, Y] = a.useState(c().shuffle(y)),
        [ee, en] = a.useState(""),
        et = (0, E.GV)(),
        ei = (0, d.A)(Q),
        ea = (0, d.A)(U),
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
        a.useEffect(() => {
            c().isEqual(K, y) || Y((0, v.ed)(y, B));
        }, [y, K, B]),
        (0, A.Ay)(
            () => (
                N.default.track(L.HAw.OPEN_MODAL, { type: n, source: "Feedback Modal" }),
                () => {
                    es.current({
                        rating: ei.current,
                        problem: el.current,
                        dontShowAgain: ea.current,
                        feedback: er.current,
                    });
                }
            ),
        ),
        (0, i.jsxs)(o.EO, {
            "data-migration-pending": !0,
            impression: z,
            transitionState: F,
            className: S.CR,
            "aria-labelledby": et,
            parentComponent: "FeedbackModal",
            children: [
                (0, i.jsxs)(o.rQ, {
                    "data-migration-pending": !0,
                    separator: !1,
                    className: S.N1,
                    children: [
                        (0, i.jsx)(u.D, { id: et, variant: "heading-xl/semibold", color: "none", children: t }),
                        (0, i.jsx)(h.E, { variant: "body-md/normal", color: "none", className: S.sB, children: l }),
                    ],
                }),
                ("RATING" === ec || ("PROBLEM" === ec && null == T)) &&
                    (0, i.jsx)("div", {
                        className: s()(S.OS, S.Ko),
                        children: (0, i.jsx)(f.A, {
                            ratingOptions: D,
                            emojiKind: P,
                            textLabels: T,
                            selectedRating: Q,
                            onChangeRating: function (e) {
                                (V(e), e === C.P0.GOOD && $());
                            },
                        }),
                    }),
                "PROBLEM" === ec &&
                    (0, i.jsx)(o.$m, {
                        "data-migration-pending": !0,
                        className: s()({ [S._3]: null == T }),
                        children: (0, i.jsx)(m.D, {
                            label: r,
                            children: (0, i.jsx)(b.A, {
                                options: W,
                                onClick: function (e) {
                                    (J(e), _.includes(e.value) || $());
                                },
                                hideCaret: (e) => {
                                    let { value: n } = e;
                                    return !_.includes(n);
                                },
                            }),
                        }),
                    }),
                "FREEFORM" === ec &&
                    (0, i.jsx)(o.$m, {
                        "data-migration-pending": !0,
                        className: S.__invalid_content,
                        children: (0, i.jsx)(g.f, {
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
                    (0, i.jsx)(o.jl, {
                        "data-migration-pending": !0,
                        className: S.qr,
                        direction: j.A.Direction.HORIZONTAL,
                        children: (0, i.jsx)(p.S, {
                            checked: U,
                            onChange: () => Z(!U),
                            label: M.intl.string(M.t["5E9SB9"]),
                            labelType: "secondary",
                        }),
                    }),
                ("FREEFORM" === ec || ("PROBLEM" === ec && null != T)) &&
                    (0, i.jsx)(o.jl, {
                        "data-migration-pending": !0,
                        className: S.qr,
                        direction: j.A.Direction.HORIZONTAL,
                        children: (0, i.jsxs)(x.e, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, i.jsx)(R.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: M.intl.string(M.t["13/7kX"]),
                                    onClick: () => {
                                        "FREEFORM" === ec ? (J(null), en("")) : V(null);
                                    },
                                }),
                                (0, i.jsx)(R.$, {
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
