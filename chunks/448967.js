n.d(t, { m: () => w, default: () => x });
var i = n(477900),
    a = n(582128),
    o = n(503698),
    s = n.n(o),
    r = n(941143),
    l = n(935462),
    u = n(717421),
    c = n(430690),
    d = n(297264),
    m = n(834730),
    p = n(821609),
    f = n(939249),
    y = n(320448),
    E = n(192308),
    C = n(964486),
    A = n(235986),
    g = n(174459),
    h = n(859703),
    _ = n(77870),
    I = n(590202),
    T = n(652215),
    v = n(105292),
    S = n(299592);
let L = "/assets/1929535a8397f7f0.png";
function x(e) {
    let { questId: t, survey: n, transitionState: o, onClose: s, onSubmit: f } = e,
        y = (0, _.C5)(t),
        [E, h] = a.useState(0),
        [I, x] = (0, u.z)(() => ({ from: { width: "0%" }, config: { duration: 2500 } }));
    function w(e) {
        (f(),
            h(1),
            null != y &&
                g.default.track(T.HAw.QUEST_SURVEY_SUBMITTED, { ...b(y, n), choice: e.text, choice_id: e.key }));
    }
    async function P(e) {
        1 === e && (await x({ width: "100%" }), s());
    }
    return (
        (0, C.Ay)(() => {
            null != y && g.default.track(T.HAw.QUEST_SURVEY_DISPLAYED, b(y, n));
        }),
        null == y && s(),
        (0, i.jsx)(l.EO, {
            "data-migration-pending": !0,
            transitionState: o,
            size: l.rI.DYNAMIC,
            className: S.modalRoot,
            parentComponent: "QuestSurveyModal",
            children: (0, i.jsxs)(c.t, {
                activeSlide: E,
                width: 467,
                onSlideReady: P,
                children: [
                    (0, i.jsxs)(c.q, {
                        id: 0,
                        children: [
                            (0, i.jsxs)(l.rQ, {
                                "data-migration-pending": !0,
                                direction: A.A.Direction.VERTICAL,
                                separator: !1,
                                className: S.Hc,
                                children: [
                                    (0, i.jsx)(l.s_, { "data-migration-pending": !0, className: S.PV, onClick: s }),
                                    (0, i.jsx)("img", { src: L, alt: "", className: S.LY }),
                                    (0, i.jsx)(d.D, { variant: "heading-lg/semibold", children: n.title }),
                                    (0, i.jsx)(m.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: n.subtitle,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(l.$m, {
                                "data-migration-pending": !0,
                                scrollbarGutter: !1,
                                className: S.jE,
                                children: n.choices.map((e) => (0, i.jsx)(N, { choice: e, onClick: w }, e.key)),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(c.q, {
                        id: 1,
                        children: [
                            (0, i.jsxs)(l.$m, {
                                "data-migration-pending": !0,
                                className: S.wD,
                                children: [
                                    (0, i.jsx)("img", { src: L, alt: "", className: S.LY }),
                                    (0, i.jsx)(d.D, {
                                        variant: "heading-lg/semibold",
                                        children: v.intl.string(v.t.KTjjrG),
                                    }),
                                    (0, i.jsx)(m.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: v.intl.string(v.t.AvbrEM),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(l.jl, {
                                "data-migration-pending": !0,
                                children: (0, i.jsxs)("div", {
                                    className: S.cG,
                                    children: [
                                        (0, i.jsx)(p.$, {
                                            variant: "primary",
                                            text: v.intl.string(v.t.cpT0Cq),
                                            onClick: s,
                                        }),
                                        (0, i.jsx)(r.animated.div, { className: S.ce, style: I }),
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
function N(e) {
    let { className: t, choice: n, onClick: a } = e;
    return (0, i.jsxs)(f.D, {
        className: s()(S.z5, t),
        onClick: () => a(n),
        children: [(0, i.jsx)(m.E, { variant: "text-sm/semibold", children: n.text }), (0, i.jsx)(y._, {})],
    });
}
function w(e) {
    let t = !1;
    (0, E.openModalLazy)(
        async () => {
            let { default: a } = await Promise.resolve().then(n.bind(n, 448967));
            return (n) =>
                (0, i.jsx)(a, {
                    ...n,
                    ...e,
                    onSubmit: () => {
                        t = !0;
                    },
                });
        },
        {
            onCloseCallback: () => {
                let n = h.A.getQuest(e.questId);
                null != n && g.default.track(T.HAw.QUEST_SURVEY_DISMISSED, { ...b(n, e.survey), submitted: t });
            },
        },
    );
}
function b(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, I.NI)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text),
    };
}
