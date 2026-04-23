"use strict";
n.d(t, { m: () => D, default: () => y });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(419354),
    l = n(717421),
    d = n(935462),
    _ = n(430690),
    u = n(534514),
    c = n(834730),
    E = n(821609),
    h = n(939249),
    m = n(320448),
    f = n(192308),
    g = n(964486),
    p = n(235986),
    A = n(954571),
    I = n(859703),
    T = n(890687),
    S = n(590202),
    N = n(652215),
    C = n(985018),
    R = n(399407);
let O = "/assets/1929535a8397f7f0.png";
function y(e) {
    let { questId: t, survey: n, transitionState: s, onClose: a, onSubmit: h } = e,
        m = (0, T.C5)(t),
        [f, I] = r.useState(0),
        [S, y] = (0, l.z)(() => ({ from: { width: "0%" }, config: { duration: 2500 } })),
        D = (e) => {
            h(),
                I(1),
                null != m &&
                    A.default.track(N.HAw.QUEST_SURVEY_SUBMITTED, { ...L(m, n), choice: e.text, choice_id: e.key });
        },
        b = async (e) => {
            1 === e && (await y({ width: "100%" }), a());
        };
    return (
        (0, g.Ay)(() => {
            null != m && A.default.track(N.HAw.QUEST_SURVEY_DISPLAYED, L(m, n));
        }),
        null == m && a(),
        (0, i.jsx)(d.EO, {
            "data-migration-pending": !0,
            transitionState: s,
            size: d.rI.DYNAMIC,
            className: R.modalRoot,
            parentComponent: "QuestSurveyModal",
            children: (0, i.jsxs)(_.t, {
                activeSlide: f,
                width: 467,
                onSlideReady: b,
                children: [
                    (0, i.jsxs)(_.q, {
                        id: 0,
                        children: [
                            (0, i.jsxs)(d.rQ, {
                                "data-migration-pending": !0,
                                direction: p.A.Direction.VERTICAL,
                                separator: !1,
                                className: R.Hc,
                                children: [
                                    (0, i.jsx)(d.s_, { "data-migration-pending": !0, className: R.PV, onClick: a }),
                                    (0, i.jsx)("img", { src: O, alt: "", className: R.LY }),
                                    (0, i.jsx)(u.D, { variant: "heading-lg/semibold", children: n.title }),
                                    (0, i.jsx)(c.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: n.subtitle,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(d.$m, {
                                "data-migration-pending": !0,
                                className: R.jE,
                                children: n.choices.map((e) => (0, i.jsx)(v, { choice: e, onClick: D }, e.key)),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(_.q, {
                        id: 1,
                        children: [
                            (0, i.jsxs)(d.$m, {
                                "data-migration-pending": !0,
                                className: R.wD,
                                children: [
                                    (0, i.jsx)("img", { src: O, alt: "", className: R.LY }),
                                    (0, i.jsx)(u.D, {
                                        variant: "heading-lg/semibold",
                                        children: C.intl.string(C.t.KTjjrG),
                                    }),
                                    (0, i.jsx)(c.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: C.intl.string(C.t.AvbrEM),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(d.jl, {
                                "data-migration-pending": !0,
                                children: (0, i.jsxs)("div", {
                                    className: R.cG,
                                    children: [
                                        (0, i.jsx)(E.$, {
                                            variant: "primary",
                                            text: C.intl.string(C.t.cpT0Cq),
                                            onClick: a,
                                        }),
                                        (0, i.jsx)(o.animated.div, { className: R.ce, style: S }),
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
function v(e) {
    let { className: t, choice: n, onClick: r } = e;
    return (0, i.jsxs)(h.D, {
        className: a()(R.z5, t),
        onClick: () => r(n),
        children: [(0, i.jsx)(c.E, { variant: "text-sm/semibold", children: n.text }), (0, i.jsx)(m._, {})],
    });
}
function D(e) {
    let t = !1;
    (0, f.openModalLazy)(
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
                let n = I.A.getQuest(e.questId);
                null != n && A.default.track(N.HAw.QUEST_SURVEY_DISMISSED, { ...L(n, e.survey), submitted: t });
            },
        },
    );
}
function L(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, S.NI)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text),
    };
}
