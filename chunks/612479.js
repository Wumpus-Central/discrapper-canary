t.d(a, { A: () => T });
var l = t(627968),
    n = t(64700),
    i = t(503698),
    r = t.n(i),
    d = t(735438),
    s = t.n(d),
    u = t(66455),
    E = t(935462),
    O = t(534514),
    b = t(834730),
    v = t(452027),
    c = t(260598),
    o = t(150934),
    f = t(825484),
    N = t(821609),
    U = t(964486),
    g = t(475743),
    h = t(235986),
    S = t(915089),
    A = t(124480),
    _ = t(954571),
    m = t(975571),
    R = t(930932),
    L = t(321563),
    j = t(670455),
    D = t(652215),
    I = t(985018),
    C = t(519560);
function T(e) {
    let {
            modalType: a,
            header: t,
            body: i,
            problemTitle: d,
            problems: T,
            transitionState: V,
            ratingOptions: p,
            ratingEmojiKind: x,
            ratingTextLabels: F,
            freeformNeededProblems: M = [],
            otherKey: P,
            hideDontShowAgainCheckbox: G,
            startRating: H = null,
            hideHelpDeskLink: k = !1,
            onSubmit: B,
            onClose: y,
            impression: X,
            freeformDescription: K,
        } = e,
        Y = (0, g.A)(T),
        [q, w] = n.useState(!1),
        [z, Q] = n.useState(H),
        [Z, W] = n.useState(null),
        [J, $] = n.useState(s().shuffle(T)),
        [ee, ea] = n.useState(""),
        et = (0, S.GV)(),
        el = (0, u.A)(z),
        en = (0, u.A)(q),
        ei = (0, u.A)(Z),
        er = (0, u.A)(B),
        ed = (0, u.A)(ee),
        es = null;
    return (
        null == z
            ? (es = "RATING")
            : z !== j.P0.GOOD && null == Z
              ? (es = "PROBLEM")
              : null != Z && M.includes(Z.value) && (es = "FREEFORM"),
        n.useEffect(() => {
            s().isEqual(Y, T) || $((0, R.ed)(T, P));
        }, [T, Y, P]),
        (0, U.Ay)(
            () => (
                _.default.track(D.HAw.OPEN_MODAL, { type: a, source: "Feedback Modal" }),
                () => {
                    er.current({
                        rating: el.current,
                        problem: ei.current,
                        dontShowAgain: en.current,
                        feedback: ed.current,
                    });
                }
            ),
        ),
        (0, l.jsxs)(E.EO, {
            "data-migration-pending": !0,
            impression: X,
            transitionState: V,
            className: C.CR,
            "aria-labelledby": et,
            parentComponent: "FeedbackModal",
            children: [
                (0, l.jsxs)(E.rQ, {
                    "data-migration-pending": !0,
                    separator: !1,
                    className: C.N1,
                    children: [
                        (0, l.jsx)(O.D, { id: et, variant: "heading-xl/extrabold", color: "none", children: t }),
                        (0, l.jsx)(b.E, { variant: "text-md/normal", color: "none", className: C.sB, children: i }),
                    ],
                }),
                ("RATING" === es || ("PROBLEM" === es && null == F)) &&
                    (0, l.jsx)("div", {
                        className: r()(C.OS, C.Ko),
                        children: (0, l.jsx)(L.A, {
                            ratingOptions: p,
                            emojiKind: x,
                            textLabels: F,
                            selectedRating: z,
                            onChangeRating: function (e) {
                                Q(e), e === j.P0.GOOD && y();
                            },
                        }),
                    }),
                "PROBLEM" === es &&
                    (0, l.jsx)(E.$m, {
                        "data-migration-pending": !0,
                        children: (0, l.jsx)(v.D, {
                            label: d,
                            children: (0, l.jsx)(A.A, {
                                options: J,
                                onClick: function (e) {
                                    W(e), M.includes(e.value) || y();
                                },
                                hideCaret: (e) => {
                                    let { value: a } = e;
                                    return !M.includes(a);
                                },
                            }),
                        }),
                    }),
                "FREEFORM" === es &&
                    (0, l.jsx)(E.$m, {
                        "data-migration-pending": !0,
                        className: C.__invalid_content,
                        children: (0, l.jsx)(c.f, {
                            label: K?.(Z) ?? I.intl.string(I.t.h95hcn),
                            helperText: k
                                ? void 0
                                : I.intl.format(I.t.ybi2tD, { helpdeskURL: m.A.getSubmitRequestURL() }),
                            value: ee,
                            maxLength: j.u0,
                            onChange: ea,
                        }),
                    }),
                "RATING" === es &&
                    !G &&
                    (0, l.jsx)(E.jl, {
                        "data-migration-pending": !0,
                        className: C.qr,
                        direction: h.A.Direction.HORIZONTAL,
                        children: (0, l.jsx)(o.S, {
                            checked: q,
                            onChange: () => w(!q),
                            label: I.intl.string(I.t["5E9SB9"]),
                            labelType: "secondary",
                        }),
                    }),
                ("FREEFORM" === es || ("PROBLEM" === es && null != F)) &&
                    (0, l.jsx)(E.jl, {
                        "data-migration-pending": !0,
                        className: C.qr,
                        direction: h.A.Direction.HORIZONTAL,
                        children: (0, l.jsxs)(f.e, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, l.jsx)(N.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: I.intl.string(I.t["13/7kX"]),
                                    onClick: () => {
                                        "FREEFORM" === es ? (W(null), ea("")) : Q(null);
                                    },
                                }),
                                (0, l.jsx)(N.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: I.intl.string(I.t.geKm7t),
                                    onClick: y,
                                }),
                            ],
                        }),
                    }),
            ],
        })
    );
}
