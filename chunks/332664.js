n.d(t, { Z: () => L }), n(388685);
var a = n(951288),
    l = n(647438),
    i = n(120356),
    r = n.n(i),
    s = n(392711),
    d = n.n(s),
    u = n(755721),
    c = n(481060),
    b = n(493773),
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
    x = n(817320);
function R() {
    return (0, a.jsx)(c.Text, {
        className: x.helpdeskLink,
        variant: "text-xs/normal",
        color: "text-muted",
        children: p.intl.format(p.t.ybi2tL, { helpdeskURL: h.Z.getSubmitRequestURL() }),
    });
}
function L(e) {
    var t;
    let {
            modalType: n,
            header: i,
            body: s,
            problemTitle: h,
            problems: L,
            transitionState: I,
            ratingOptions: D,
            ratingEmojiKind: T,
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
        Z = (0, o.Z)(L),
        [B, G] = l.useState(!1),
        [J, w] = l.useState(P),
        [H, z] = l.useState(null),
        [K, Y] = l.useState(d().shuffle(L)),
        [Q, V] = l.useState(""),
        X = (0, O.Dt)(),
        q = (0, v.Z)(J),
        W = (0, v.Z)(B),
        ee = (0, v.Z)(H),
        et = (0, v.Z)(F),
        en = (0, v.Z)(Q),
        ea = null;
    return (
        null == J
            ? (ea = "RATING")
            : J !== m.aZ.GOOD && null == H
              ? (ea = "PROBLEM")
              : null != H && M.includes(H.value) && (ea = "FREEFORM"),
        l.useEffect(() => {
            d().isEqual(Z, L) || Y((0, S.Bi)(L, C));
        }, [L, Z, C]),
        (0, b.ZP)(
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
        (0, a.jsxs)(c.Y0X, {
            impression: U,
            transitionState: I,
            className: x.modalRoot,
            "aria-labelledby": X,
            parentComponent: "FeedbackModal",
            children: [
                (0, a.jsxs)(c.xBx, {
                    separator: !1,
                    className: x.headerContainer,
                    children: [
                        (0, a.jsx)(c.X6q, {
                            id: X,
                            variant: "heading-xl/extrabold",
                            color: "none",
                            children: i,
                        }),
                        (0, a.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "none",
                            className: x.ratingBody,
                            children: s,
                        }),
                    ],
                }),
                ("RATING" === ea || ("PROBLEM" === ea && null == j)) &&
                    (0, a.jsx)(c.xJW, {
                        className: r()(x.problemInfo, x.ratingSelectorContainer),
                        children: (0, a.jsx)(g.Z, {
                            ratingOptions: D,
                            emojiKind: T,
                            textLabels: j,
                            selectedRating: J,
                            onChangeRating: function (e) {
                                w(e), e === m.aZ.GOOD && y();
                            },
                        }),
                    }),
                "PROBLEM" === ea &&
                    (0, a.jsx)(c.hzk, {
                        className: x.__invalid_content,
                        children: (0, a.jsx)(c.xJW, {
                            title: h,
                            className: r()(x.problemInfo, x.presetList, { [x.marginBottom16]: A }),
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
                    (0, a.jsx)(c.hzk, {
                        className: x.__invalid_content,
                        children: (0, a.jsxs)(c.xJW, {
                            title: null != (t = null == k ? void 0 : k(H)) ? t : p.intl.string(p.t.h95hcn),
                            className: x.problemInfo,
                            children: [
                                (0, a.jsx)(c.Kx8, {
                                    value: Q,
                                    maxLength: m.iF,
                                    onChange: V,
                                }),
                                !$ && (0, a.jsx)(R, {}),
                            ],
                        }),
                    }),
                "RATING" === ea &&
                    !A &&
                    (0, a.jsx)(c.mzw, {
                        className: x.footer,
                        direction: E.Z.Direction.HORIZONTAL,
                        children: (0, a.jsx)(u.$q, {
                            type: u.M0.INVERTED,
                            size: 18,
                            value: B,
                            onChange: () => G(!B),
                            children: (0, a.jsx)(c.Text, {
                                variant: "text-sm/normal",
                                children: p.intl.string(p.t["5E9SBw"]),
                            }),
                        }),
                    }),
                ("FREEFORM" === ea || ("PROBLEM" === ea && null != j)) &&
                    (0, a.jsx)(c.mzw, {
                        className: x.footer,
                        direction: E.Z.Direction.HORIZONTAL,
                        children: (0, a.jsxs)(c.hE2, {
                            direction: "horizontal-reverse",
                            children: [
                                (0, a.jsx)(c.zxk, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: p.intl.string(p.t["13/7kZ"]),
                                    onClick: () => {
                                        "FREEFORM" === ea ? (z(null), V("")) : w(null);
                                    },
                                }),
                                (0, a.jsx)(c.zxk, {
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
