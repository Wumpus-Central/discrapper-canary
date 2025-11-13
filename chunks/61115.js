n.d(t, {
    C: () => C,
    default: () => S,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(509442),
    l = n(481060),
    c = n(493773),
    u = n(600164),
    d = n(626135),
    f = n(617136),
    _ = n(113434),
    p = n(569984),
    h = n(981631),
    m = n(388032),
    g = n(741463),
    E = n(677486);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = 2500,
    T = 467;
function S(e) {
    let { questId: t, survey: n, transitionState: a, onClose: o, onSubmit: f } = e,
        p = (0, _.B4)(t),
        [b, O] = i.useState(0),
        [S, C] = (0, l.q_F)(() => ({
            from: { width: "0%" },
            config: { duration: I },
        })),
        R = (e) => {
            f(),
                O(1),
                null != p &&
                    d.default.track(
                        h.rMx.QUEST_SURVEY_SUBMITTED,
                        v(y({}, N(p, n)), {
                            choice: e.text,
                            choice_id: e.key,
                        }),
                    );
        },
        P = async (e) => {
            1 === e && (await C({ width: "100%" }), o());
        };
    return (
        (0, c.ZP)(() => {
            null != p && d.default.track(h.rMx.QUEST_SURVEY_DISPLAYED, N(p, n));
        }),
        null == p && o(),
        (0, r.jsx)(l.Y0X, {
            "data-migration-pending": !0,
            transitionState: a,
            size: l.CgR.DYNAMIC,
            className: g.modalRoot,
            parentComponent: "QuestSurveyModal",
            children: (0, r.jsxs)(l.MyZ, {
                activeSlide: b,
                width: T,
                onSlideReady: P,
                children: [
                    (0, r.jsxs)(l.Mi4, {
                        id: 0,
                        children: [
                            (0, r.jsxs)(l.xBx, {
                                "data-migration-pending": !0,
                                direction: u.Z.Direction.VERTICAL,
                                separator: !1,
                                className: g.modalHeader,
                                children: [
                                    (0, r.jsx)(l.olH, {
                                        "data-migration-pending": !0,
                                        className: g.closeBtn,
                                        onClick: o,
                                    }),
                                    (0, r.jsx)("img", {
                                        src: E,
                                        alt: "",
                                        className: g.asset,
                                    }),
                                    (0, r.jsx)(l.Heading, {
                                        variant: "heading-lg/semibold",
                                        children: n.title,
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: n.subtitle,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.hzk, {
                                "data-migration-pending": !0,
                                className: g.modalContent,
                                children: n.choices.map((e) =>
                                    (0, r.jsx)(
                                        A,
                                        {
                                            choice: e,
                                            onClick: R,
                                        },
                                        e.key,
                                    ),
                                ),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(l.Mi4, {
                        id: 1,
                        children: [
                            (0, r.jsxs)(l.hzk, {
                                "data-migration-pending": !0,
                                className: g.completedModalContent,
                                children: [
                                    (0, r.jsx)("img", {
                                        src: E,
                                        alt: "",
                                        className: g.asset,
                                    }),
                                    (0, r.jsx)(l.Heading, {
                                        variant: "heading-lg/semibold",
                                        children: m.intl.string(m.t.KTjjrG),
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: m.intl.string(m.t.AvbrEM),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.mzw, {
                                "data-migration-pending": !0,
                                children: (0, r.jsxs)("div", {
                                    className: g.closeButtonContainer,
                                    children: [
                                        (0, r.jsx)(l.Button, {
                                            variant: "primary",
                                            text: m.intl.string(m.t.cpT0Cq),
                                            onClick: o,
                                        }),
                                        (0, r.jsx)(s.animated.div, {
                                            className: g.progressOverlay,
                                            style: S,
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function A(e) {
    let { className: t, choice: n, onClick: i } = e;
    return (0, r.jsxs)(l.P3F, {
        className: o()(g.choiceContainer, t),
        onClick: () => i(n),
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                children: n.text,
            }),
            (0, r.jsx)(l.Fbu, {}),
        ],
    });
}
function C(e) {
    let t = !1;
    (0, l.ZDy)(
        async () => {
            let { default: i } = await Promise.resolve().then(n.bind(n, 61115));
            return (n) =>
                (0, r.jsx)(
                    i,
                    v(y({}, n, e), {
                        onSubmit: () => {
                            t = !0;
                        },
                    }),
                );
        },
        {
            onCloseCallback: () => {
                let n = p.Z.getQuest(e.questId);
                null != n && d.default.track(h.rMx.QUEST_SURVEY_DISMISSED, v(y({}, N(n, e.survey)), { submitted: t }));
            },
        },
    );
}
function N(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, f.uk)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text),
    };
}
