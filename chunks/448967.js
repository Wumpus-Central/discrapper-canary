n.d(t, { m: () => N, default: () => w });
var i = n(627968),
    a = n(64700),
    o = n(503698),
    s = n.n(o),
    l = n(580929),
    r = n(717421),
    u = n(935462),
    c = n(430690),
    d = n(534514),
    m = n(834730),
    f = n(821609),
    p = n(939249),
    C = n(320448),
    E = n(192308),
    y = n(964486),
    _ = n(235986),
    g = n(174459),
    A = n(859703),
    I = n(347135),
    h = n(590202),
    S = n(652215),
    x = n(375708),
    T = n(399407);
let v = "/assets/1929535a8397f7f0.png";
function w(e) {
    let { questId: t, survey: n, transitionState: o, onClose: s, onSubmit: p } = e,
        C = (0, I.C5)(t),
        [E, A] = a.useState(0),
        [h, w] = (0, r.z)(() => ({ from: { width: "0%" }, config: { duration: 2500 } })),
        N = (e) => {
            p(),
                A(1),
                null != C &&
                    g.default.track(S.HAw.QUEST_SURVEY_SUBMITTED, { ...q(C, n), choice: e.text, choice_id: e.key });
        };
    async function b(e) {
        1 === e && (await w({ width: "100%" }), s());
    }
    return (
        (0, y.Ay)(() => {
            null != C && g.default.track(S.HAw.QUEST_SURVEY_DISPLAYED, q(C, n));
        }),
        null == C && s(),
        (0, i.jsx)(u.EO, {
            "data-migration-pending": !0,
            transitionState: o,
            size: u.rI.DYNAMIC,
            className: T.modalRoot,
            parentComponent: "QuestSurveyModal",
            children: (0, i.jsxs)(c.t, {
                activeSlide: E,
                width: 467,
                onSlideReady: b,
                children: [
                    (0, i.jsxs)(c.q, {
                        id: 0,
                        children: [
                            (0, i.jsxs)(u.rQ, {
                                "data-migration-pending": !0,
                                direction: _.A.Direction.VERTICAL,
                                separator: !1,
                                className: T.Hc,
                                children: [
                                    (0, i.jsx)(u.s_, { "data-migration-pending": !0, className: T.PV, onClick: s }),
                                    (0, i.jsx)("img", { src: v, alt: "", className: T.LY }),
                                    (0, i.jsx)(d.D, { variant: "heading-lg/semibold", children: n.title }),
                                    (0, i.jsx)(m.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: n.subtitle,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(u.$m, {
                                "data-migration-pending": !0,
                                className: T.jE,
                                children: n.choices.map((e) => (0, i.jsx)(L, { choice: e, onClick: N }, e.key)),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(c.q, {
                        id: 1,
                        children: [
                            (0, i.jsxs)(u.$m, {
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
                            (0, i.jsx)(u.jl, {
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
    let { className: t, choice: n, onClick: a } = e;
    return (0, i.jsxs)(p.D, {
        className: s()(T.z5, t),
        onClick: () => a(n),
        children: [(0, i.jsx)(m.E, { variant: "text-sm/semibold", children: n.text }), (0, i.jsx)(C._, {})],
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
                let n = A.A.getQuest(e.questId);
                null != n && g.default.track(S.HAw.QUEST_SURVEY_DISMISSED, { ...q(n, e.survey), submitted: t });
            },
        },
    );
}
function q(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, h.NI)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text),
    };
}
