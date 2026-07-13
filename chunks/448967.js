"use strict";
n.d(t, { m: () => y, default: () => L });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(580929),
    o = n(717421),
    d = n(935462),
    c = n(430690),
    u = n(534514),
    _ = n(834730),
    E = n(821609),
    A = n(939249),
    h = n(320448),
    I = n(192308),
    f = n(964486),
    p = n(235986),
    T = n(174459),
    m = n(859703),
    g = n(347135),
    S = n(590202),
    N = n(652215),
    C = n(375708),
    O = n(399407);
let R = "/assets/1929535a8397f7f0.png";
function L(e) {
    let { questId: t, survey: n, transitionState: a, onClose: s, onSubmit: A } = e,
        h = (0, g.C5)(t),
        [I, m] = r.useState(0),
        [S, L] = (0, o.z)(() => ({ from: { width: "0%" }, config: { duration: 2500 } })),
        y = (e) => {
            A(),
                m(1),
                null != h &&
                    T.default.track(N.HAw.QUEST_SURVEY_SUBMITTED, { ...v(h, n), choice: e.text, choice_id: e.key });
        };
    async function b(e) {
        1 === e && (await L({ width: "100%" }), s());
    }
    return (
        (0, f.Ay)(() => {
            null != h && T.default.track(N.HAw.QUEST_SURVEY_DISPLAYED, v(h, n));
        }),
        null == h && s(),
        (0, i.jsx)(d.EO, {
            "data-migration-pending": !0,
            transitionState: a,
            size: d.rI.DYNAMIC,
            className: O.modalRoot,
            parentComponent: "QuestSurveyModal",
            children: (0, i.jsxs)(c.t, {
                activeSlide: I,
                width: 467,
                onSlideReady: b,
                children: [
                    (0, i.jsxs)(c.q, {
                        id: 0,
                        children: [
                            (0, i.jsxs)(d.rQ, {
                                "data-migration-pending": !0,
                                direction: p.A.Direction.VERTICAL,
                                separator: !1,
                                className: O.Hc,
                                children: [
                                    (0, i.jsx)(d.s_, { "data-migration-pending": !0, className: O.PV, onClick: s }),
                                    (0, i.jsx)("img", { src: R, alt: "", className: O.LY }),
                                    (0, i.jsx)(u.D, { variant: "heading-lg/semibold", children: n.title }),
                                    (0, i.jsx)(_.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: n.subtitle,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(d.$m, {
                                "data-migration-pending": !0,
                                className: O.jE,
                                children: n.choices.map((e) => (0, i.jsx)(D, { choice: e, onClick: y }, e.key)),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(c.q, {
                        id: 1,
                        children: [
                            (0, i.jsxs)(d.$m, {
                                "data-migration-pending": !0,
                                className: O.wD,
                                children: [
                                    (0, i.jsx)("img", { src: R, alt: "", className: O.LY }),
                                    (0, i.jsx)(u.D, {
                                        variant: "heading-lg/semibold",
                                        children: C.intl.string(C.t.KTjjrG),
                                    }),
                                    (0, i.jsx)(_.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: C.intl.string(C.t.AvbrEM),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(d.jl, {
                                "data-migration-pending": !0,
                                children: (0, i.jsxs)("div", {
                                    className: O.cG,
                                    children: [
                                        (0, i.jsx)(E.$, {
                                            variant: "primary",
                                            text: C.intl.string(C.t.cpT0Cq),
                                            onClick: s,
                                        }),
                                        (0, i.jsx)(l.animated.div, { className: O.ce, style: S }),
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
function D(e) {
    let { className: t, choice: n, onClick: r } = e;
    return (0, i.jsxs)(A.D, {
        className: s()(O.z5, t),
        onClick: () => r(n),
        children: [(0, i.jsx)(_.E, { variant: "text-sm/semibold", children: n.text }), (0, i.jsx)(h._, {})],
    });
}
function y(e) {
    let t = !1;
    (0, I.openModalLazy)(
        async () => {
            let { default: r } = await Promise.resolve().then(n.bind(n, 448967));
            return (n) =>
                (0, i.jsx)(r, {
                    ...n,
                    ...e,
                    onSubmit: () => {
                        t = !0;
                    },
                });
        },
        {
            onCloseCallback: () => {
                let n = m.A.getQuest(e.questId);
                null != n && T.default.track(N.HAw.QUEST_SURVEY_DISMISSED, { ...v(n, e.survey), submitted: t });
            },
        },
    );
}
function v(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, S.NI)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text),
    };
}
