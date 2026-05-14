"use strict";
n.d(t, { m: () => b, default: () => O });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(873174),
    l = n(717421),
    u = n(935462),
    c = n(430690),
    d = n(534514),
    _ = n(834730),
    f = n(821609),
    h = n(939249),
    p = n(320448),
    E = n(192308),
    m = n(964486),
    g = n(235986),
    A = n(174459),
    I = n(859703),
    T = n(31587),
    S = n(590202),
    N = n(652215),
    y = n(375708),
    C = n(399407);
let v = "/assets/1929535a8397f7f0.png";
function O(e) {
    let { questId: t, survey: n, transitionState: s, onClose: a, onSubmit: h } = e,
        p = (0, T.C5)(t),
        [E, I] = r.useState(0),
        [S, O] = (0, l.z)(() => ({ from: { width: "0%" }, config: { duration: 2500 } })),
        b = (e) => {
            h(),
                I(1),
                null != p &&
                    A.default.track(N.HAw.QUEST_SURVEY_SUBMITTED, { ...D(p, n), choice: e.text, choice_id: e.key });
        },
        L = async (e) => {
            1 === e && (await O({ width: "100%" }), a());
        };
    return (
        (0, m.Ay)(() => {
            null != p && A.default.track(N.HAw.QUEST_SURVEY_DISPLAYED, D(p, n));
        }),
        null == p && a(),
        (0, i.jsx)(u.EO, {
            "data-migration-pending": !0,
            transitionState: s,
            size: u.rI.DYNAMIC,
            className: C.modalRoot,
            parentComponent: "QuestSurveyModal",
            children: (0, i.jsxs)(c.t, {
                activeSlide: E,
                width: 467,
                onSlideReady: L,
                children: [
                    (0, i.jsxs)(c.q, {
                        id: 0,
                        children: [
                            (0, i.jsxs)(u.rQ, {
                                "data-migration-pending": !0,
                                direction: g.A.Direction.VERTICAL,
                                separator: !1,
                                className: C.Hc,
                                children: [
                                    (0, i.jsx)(u.s_, { "data-migration-pending": !0, className: C.PV, onClick: a }),
                                    (0, i.jsx)("img", { src: v, alt: "", className: C.LY }),
                                    (0, i.jsx)(d.D, { variant: "heading-lg/semibold", children: n.title }),
                                    (0, i.jsx)(_.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: n.subtitle,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(u.$m, {
                                "data-migration-pending": !0,
                                className: C.jE,
                                children: n.choices.map((e) => (0, i.jsx)(R, { choice: e, onClick: b }, e.key)),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(c.q, {
                        id: 1,
                        children: [
                            (0, i.jsxs)(u.$m, {
                                "data-migration-pending": !0,
                                className: C.wD,
                                children: [
                                    (0, i.jsx)("img", { src: v, alt: "", className: C.LY }),
                                    (0, i.jsx)(d.D, {
                                        variant: "heading-lg/semibold",
                                        children: y.intl.string(y.t.KTjjrG),
                                    }),
                                    (0, i.jsx)(_.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: y.intl.string(y.t.AvbrEM),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(u.jl, {
                                "data-migration-pending": !0,
                                children: (0, i.jsxs)("div", {
                                    className: C.cG,
                                    children: [
                                        (0, i.jsx)(f.$, {
                                            variant: "primary",
                                            text: y.intl.string(y.t.cpT0Cq),
                                            onClick: a,
                                        }),
                                        (0, i.jsx)(o.animated.div, { className: C.ce, style: S }),
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
function R(e) {
    let { className: t, choice: n, onClick: r } = e;
    return (0, i.jsxs)(h.D, {
        className: a()(C.z5, t),
        onClick: () => r(n),
        children: [(0, i.jsx)(_.E, { variant: "text-sm/semibold", children: n.text }), (0, i.jsx)(p._, {})],
    });
}
function b(e) {
    let t = !1;
    (0, E.openModalLazy)(
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
                null != n && A.default.track(N.HAw.QUEST_SURVEY_DISMISSED, { ...D(n, e.survey), submitted: t });
            },
        },
    );
}
function D(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, S.NI)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text),
    };
}
