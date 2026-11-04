n.d(t, { m: () => N, default: () => b });
var i = n(477900),
    a = n(582128),
    o = n(503698),
    s = n.n(o),
    r = n(736819),
    l = n(935462),
    u = n(717421),
    c = n(430690),
    d = n(534514),
    m = n(834730),
    p = n(821609),
    f = n(939249),
    y = n(320448),
    E = n(192308),
    C = n(964486),
    g = n(235986),
    A = n(174459),
    h = n(859703),
    _ = n(77870),
    I = n(590202),
    S = n(652215),
    v = n(105292),
    T = n(299592);
let L = "/assets/1929535a8397f7f0.png";
function b(e) {
    let { questId: t, survey: n, transitionState: o, onClose: s, onSubmit: f } = e,
        y = (0, _.C5)(t),
        [E, h] = a.useState(0),
        [I, b] = (0, u.z)(() => ({ from: { width: "0%" }, config: { duration: 2500 } }));
    function N(e) {
        (f(),
            h(1),
            null != y &&
                A.default.track(S.HAw.QUEST_SURVEY_SUBMITTED, { ...w(y, n), choice: e.text, choice_id: e.key }));
    }
    async function q(e) {
        1 === e && (await b({ width: "100%" }), s());
    }
    return (
        (0, C.Ay)(() => {
            null != y && A.default.track(S.HAw.QUEST_SURVEY_DISPLAYED, w(y, n));
        }),
        null == y && s(),
        (0, i.jsx)(l.EO, {
            "data-migration-pending": !0,
            transitionState: o,
            size: l.rI.DYNAMIC,
            className: T.modalRoot,
            parentComponent: "QuestSurveyModal",
            children: (0, i.jsxs)(c.t, {
                activeSlide: E,
                width: 467,
                onSlideReady: q,
                children: [
                    (0, i.jsxs)(c.q, {
                        id: 0,
                        children: [
                            (0, i.jsxs)(l.rQ, {
                                "data-migration-pending": !0,
                                direction: g.A.Direction.VERTICAL,
                                separator: !1,
                                className: T.Hc,
                                children: [
                                    (0, i.jsx)(l.s_, { "data-migration-pending": !0, className: T.PV, onClick: s }),
                                    (0, i.jsx)("img", { src: L, alt: "", className: T.LY }),
                                    (0, i.jsx)(d.D, { variant: "heading-lg/semibold", children: n.title }),
                                    (0, i.jsx)(m.E, {
                                        variant: "body-md/normal",
                                        color: "text-muted",
                                        children: n.subtitle,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(l.$m, {
                                "data-migration-pending": !0,
                                scrollbarGutter: !1,
                                className: T.jE,
                                children: n.choices.map((e) => (0, i.jsx)(x, { choice: e, onClick: N }, e.key)),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(c.q, {
                        id: 1,
                        children: [
                            (0, i.jsxs)(l.$m, {
                                "data-migration-pending": !0,
                                className: T.wD,
                                children: [
                                    (0, i.jsx)("img", { src: L, alt: "", className: T.LY }),
                                    (0, i.jsx)(d.D, {
                                        variant: "heading-lg/semibold",
                                        children: v.intl.string(v.t.KTjjrG),
                                    }),
                                    (0, i.jsx)(m.E, {
                                        variant: "body-md/normal",
                                        color: "text-muted",
                                        children: v.intl.string(v.t.AvbrEM),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(l.jl, {
                                "data-migration-pending": !0,
                                children: (0, i.jsxs)("div", {
                                    className: T.cG,
                                    children: [
                                        (0, i.jsx)(p.$, {
                                            variant: "primary",
                                            text: v.intl.string(v.t.cpT0Cq),
                                            onClick: s,
                                        }),
                                        (0, i.jsx)(r.animated.div, { className: T.ce, style: I }),
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
function x(e) {
    let { className: t, choice: n, onClick: a } = e;
    return (0, i.jsxs)(f.D, {
        className: s()(T.z5, t),
        onClick: () => a(n),
        children: [(0, i.jsx)(m.E, { variant: "body-sm/semibold", children: n.text }), (0, i.jsx)(y._, {})],
    });
}
function N(e) {
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
                null != n && A.default.track(S.HAw.QUEST_SURVEY_DISMISSED, { ...w(n, e.survey), submitted: t });
            },
        },
    );
}
function w(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, I.NI)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text),
    };
}
