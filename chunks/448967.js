n.d(t, { m: () => N, default: () => w });
var i = n(477900),
    o = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(159265),
    r = n(935462),
    u = n(717421),
    c = n(430690),
    d = n(297264),
    m = n(834730),
    f = n(821609),
    p = n(939249),
    C = n(320448),
    E = n(192308),
    y = n(964486),
    g = n(235986),
    _ = n(174459),
    A = n(859703),
    I = n(309593),
    h = n(590202),
    S = n(652215),
    x = n(375708),
    T = n(662727);
let v = "/assets/1929535a8397f7f0.png";
function w(e) {
    let { questId: t, survey: n, transitionState: a, onClose: s, onSubmit: p } = e,
        C = (0, I.C5)(t),
        [E, A] = o.useState(0),
        [h, w] = (0, u.z)(() => ({ from: { width: "0%" }, config: { duration: 2500 } }));
    function N(e) {
        p(),
            A(1),
            null != C &&
                _.default.track(S.HAw.QUEST_SURVEY_SUBMITTED, { ...b(C, n), choice: e.text, choice_id: e.key });
    }
    async function q(e) {
        1 === e && (await w({ width: "100%" }), s());
    }
    return (
        (0, y.Ay)(() => {
            null != C && _.default.track(S.HAw.QUEST_SURVEY_DISPLAYED, b(C, n));
        }),
        null == C && s(),
        (0, i.jsx)(r.EO, {
            "data-migration-pending": !0,
            transitionState: a,
            size: r.rI.DYNAMIC,
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
                            (0, i.jsxs)(r.rQ, {
                                "data-migration-pending": !0,
                                direction: g.A.Direction.VERTICAL,
                                separator: !1,
                                className: T.Hc,
                                children: [
                                    (0, i.jsx)(r.s_, { "data-migration-pending": !0, className: T.PV, onClick: s }),
                                    (0, i.jsx)("img", { src: v, alt: "", className: T.LY }),
                                    (0, i.jsx)(d.D, { variant: "heading-lg/semibold", children: n.title }),
                                    (0, i.jsx)(m.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: n.subtitle,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(r.$m, {
                                "data-migration-pending": !0,
                                scrollbarGutter: !1,
                                className: T.jE,
                                children: n.choices.map((e) => (0, i.jsx)(L, { choice: e, onClick: N }, e.key)),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(c.q, {
                        id: 1,
                        children: [
                            (0, i.jsxs)(r.$m, {
                                "data-migration-pending": !0,
                                className: T.wD,
                                children: [
                                    (0, i.jsx)("img", { src: v, alt: "", className: T.LY }),
                                    (0, i.jsx)(d.D, {
                                        variant: "heading-lg/semibold",
                                        children: x.intl.string(x.t.KTjjrG),
                                    }),
                                    (0, i.jsx)(m.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: x.intl.string(x.t.AvbrEM),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(r.jl, {
                                "data-migration-pending": !0,
                                children: (0, i.jsxs)("div", {
                                    className: T.cG,
                                    children: [
                                        (0, i.jsx)(f.$, {
                                            variant: "primary",
                                            text: x.intl.string(x.t.cpT0Cq),
                                            onClick: s,
                                        }),
                                        (0, i.jsx)(l.animated.div, { className: T.ce, style: h }),
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
function L(e) {
    let { className: t, choice: n, onClick: o } = e;
    return (0, i.jsxs)(p.D, {
        className: s()(T.z5, t),
        onClick: () => o(n),
        children: [(0, i.jsx)(m.E, { variant: "text-sm/semibold", children: n.text }), (0, i.jsx)(C._, {})],
    });
}
function N(e) {
    let t = !1;
    (0, E.openModalLazy)(
        async () => {
            let { default: o } = await Promise.resolve().then(n.bind(n, 448967));
            return (n) =>
                (0, i.jsx)(o, {
                    ...n,
                    ...e,
                    onSubmit: () => {
                        t = !0;
                    },
                });
        },
        {
            onCloseCallback: () => {
                let n = A.A.getQuest(e.questId);
                null != n && _.default.track(S.HAw.QUEST_SURVEY_DISMISSED, { ...b(n, e.survey), submitted: t });
            },
        },
    );
}
function b(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, h.NI)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text),
    };
}
