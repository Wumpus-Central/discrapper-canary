s.d(e, { default: () => te });
var n = s(627968),
    i = s(64700),
    l = s(507107),
    a = s(31587),
    r = s(189213),
    o = s(834730),
    c = s(935462),
    d = s(289873),
    u = s(73473),
    h = s(821609),
    C = s(366010),
    m = s(534514),
    x = s(736653),
    g = s(629455),
    E = s(551875),
    N = s(971649),
    A = s(241124),
    _ = s(918338),
    j = s(491145),
    v = s(190107),
    M = s(818348),
    f = s(375708),
    I = s(583363);
function T(t) {
    let { quest: e } = t,
        s = (0, x.Ay)(),
        i = (0, C.M)(s) ? M.NJ.DARK : M.NJ.LIGHT,
        l = (0, E.tW)(e, E.fY.LOGO_TYPE, i);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(A.Sn, {
                id: "SplitQuestModal_hero",
                children: (t) =>
                    (0, n.jsx)(_.A, {
                        quest: e,
                        imageSize: { width: v.i$ * v.K, height: v.ls * v.K },
                        containerClassName: I.jF,
                        isInteracting: !0,
                        assetRef: t,
                    }),
            }),
            (0, n.jsx)("div", {
                className: I.Lt,
                children: (0, n.jsx)(A.Sn, {
                    id: "SplitQuestModal_logotype",
                    children: (t) =>
                        (0, n.jsx)("img", {
                            ref: t,
                            className: I.a$,
                            alt: f.intl.formatToPlainString(f.t.rtm15P, { name: e.config.messages.gameTitle }),
                            src: l.url,
                        }),
                }),
            }),
        ],
    });
}
function p(t) {
    let { quest: e, title: s, subtitle: i } = t,
        l = (0, x.Ay)(),
        a = (0, C.M)(l) ? M.NJ.DARK : M.NJ.LIGHT;
    return (0, n.jsxs)("div", {
        className: I.Th,
        children: [
            (0, n.jsx)(A.Sn, {
                id: "SplitQuestModal_gameTile",
                children: (t) =>
                    (0, n.jsx)("img", {
                        ref: t,
                        className: I.rw,
                        alt: f.intl.formatToPlainString(f.t.rtm15P, { name: e.config.messages.gameTitle }),
                        src: (0, E.tW)(e, E.fY.GAME_TILE, a).url,
                    }),
            }),
            (0, n.jsxs)("div", {
                className: I.Ly,
                children: [
                    (0, n.jsx)(m.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: I.fx,
                        children: s,
                    }),
                    (0, n.jsx)(o.E, { variant: "text-sm/medium", color: "text-subtle", children: i }),
                ],
            }),
        ],
    });
}
function q(t) {
    let { quest: e, questContent: s, sourceQuestContent: i, location: l, preCtaClick: a } = t,
        r = (0, N.go)(),
        o = (0, g.Jf)({ quest: e, questContent: s, impressionId: r, preCtaClick: a, sourceQuestContent: i }),
        c = (0, j.A)(e, { impressionId: r, sourceQuestContent: i }, a) ?? o;
    return (0, n.jsxs)("div", {
        className: I.kL,
        children: [
            (0, n.jsxs)(A.jY, {
                source: l,
                questId: e.id,
                isPreview: e.preview,
                children: [
                    (0, n.jsx)(T, { quest: e }),
                    (0, n.jsx)(p, { quest: e, title: c.title, subtitle: c.subtitle }),
                ],
            }),
            (0, n.jsx)("div", {
                className: I.z1,
                children: (0, n.jsx)(h.$, {
                    fullWidth: !0,
                    variant: c.ctaVariant,
                    size: "md",
                    text: c.ctaText,
                    onClick: c.onClickCta,
                }),
            }),
        ],
    });
}
var y = s(408278),
    L = s(173936),
    b = s(815021),
    k = s(590202),
    S = s(814793),
    O = s(371912),
    G = s(399466);
function D(t) {
    let { quest: e, questContent: s, sourceQuestContent: l, onClose: a } = t,
        r = (0, S.E0)(e.config),
        o = (0, N.go)(),
        c = (0, O.Lk)({
            isShareable: r,
            questId: e.id,
            trackingCtx: i.useMemo(
                () => ({ content: s, ctaContent: k.Cy.COPY_QUEST_URL, impressionId: o, sourceQuestContent: l }),
                [s, l, o],
            ),
        });
    return (0, n.jsxs)("div", {
        className: G.n,
        children: [
            r &&
                (0, n.jsx)(y.K, {
                    size: "sm",
                    variant: "overlay-secondary",
                    icon: L.q,
                    "aria-label": f.intl.string(f.t.WqhZss),
                    onClick: c,
                }),
            (0, n.jsx)(b.J, { size: "sm", variant: "overlay-secondary", onClick: a }),
        ],
    });
}
var H = s(199558);
function U(t) {
    let { onClose: e, transitionState: s, title: i, description: l } = t;
    return (0, n.jsx)(r.Modal, {
        size: "md",
        title: i,
        actions: [{ variant: "primary", text: f.intl.string(f.t.cpT0Cq), onClick: e }],
        onClose: e,
        transitionState: s,
        children: (0, n.jsx)(o.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
    });
}
function W(t) {
    let {
        quest: e,
        questContent: s,
        sourceQuestContent: i,
        ariaLabel: l,
        transitionState: a,
        onClose: r,
        leftContent: o,
        preCtaClick: h,
        isContentLoading: C,
        contentHasError: m,
        errorTitle: x,
        errorDescription: g,
        location: E,
    } = t;
    return m
        ? (0, n.jsx)(U, {
              onClose: r,
              transitionState: a,
              title: x ?? f.intl.string(f.t["9cfXek"]),
              description: g ?? f.intl.string(f.t.nYQyEg),
          })
        : (0, n.jsx)(u.R, {
              questOrQuests: e,
              questContent: s,
              sourceQuestContent: i,
              children: (t) =>
                  (0, n.jsxs)(c.EO, {
                      "data-migration-pending": !0,
                      transitionState: a,
                      size: c.rI.DYNAMIC,
                      className: H.yl,
                      "aria-label": l,
                      parentComponent: "QuestSplitModalBase",
                      children: [
                          (0, n.jsx)(D, { quest: e, questContent: s, sourceQuestContent: i, onClose: r }),
                          C ? (0, n.jsx)(d.y, { className: H.u1, type: d.y.Type.WANDERING_CUBES }) : null,
                          (0, n.jsx)("div", {
                              ref: t,
                              className: H.BM,
                              style: { visibility: C ? "hidden" : "visible" },
                              children: (0, n.jsxs)("div", {
                                  className: H.jE,
                                  children: [
                                      (0, n.jsx)("div", { className: H._H, children: o }),
                                      (0, n.jsx)("div", {
                                          className: H.xK,
                                          children: (0, n.jsx)(q, {
                                              quest: e,
                                              questContent: s,
                                              sourceQuestContent: i,
                                              location: E,
                                              preCtaClick: h,
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
          });
}
var w = s(412703),
    Q = s(928264),
    z = s(141628),
    B = s(975807),
    P = s(793574),
    R = s(123917),
    V = s(18437),
    Z = s(901406),
    J = s(691885),
    Y = s(256096);
function K(t) {
    let { heading: e, subtitle: s, methodSelect: i, ctaButton: l, children: a } = t;
    return (0, n.jsxs)("div", {
        className: Y.kL,
        children: [
            (0, n.jsx)(m.D, { variant: "heading-xl/semibold", color: "text-strong", className: Y.DD, children: e }),
            (0, n.jsx)(o.E, { variant: "text-sm/medium", color: "text-subtle", className: Y.VA, children: s }),
            null != i &&
                i.length > 0 &&
                i.map(
                    (t) =>
                        !1 !== t.visible &&
                        (0, n.jsx)(
                            "div",
                            {
                                className: Y.oL,
                                children: (0, n.jsx)(J.l, {
                                    label: t.label,
                                    hideLabel: !0,
                                    placeholder: t.placeholder,
                                    selectionMode: "single",
                                    fullWidth: !0,
                                    value: t.value ?? void 0,
                                    onSelectionChange: (e) => {
                                        t.onSelectionChange(e);
                                    },
                                    options: t.options,
                                    disabled: t.disabled,
                                }),
                            },
                            t.label,
                        ),
                ),
            a,
            null != l &&
                (0, n.jsx)("div", {
                    className: Y.WJ,
                    children: (0, n.jsx)(h.$, {
                        fullWidth: !0,
                        variant: "primary",
                        size: "md",
                        text: l.text,
                        loading: l.loading,
                        icon: l.icon,
                        onClick: () => {
                            l.onClick();
                        },
                    }),
                }),
        ],
    });
}
var F = s(284846),
    $ = s(976019),
    X = s(233952);
function tt(t) {
    let { quest: e, sourceQuestContent: s } = t,
        { hasAlreadyLinked: a, canStartAuthorization: r, startAuthorization: o, fetched: c } = (0, F.U)(e),
        d = (0, N.go)(),
        u = (0, V.Ut)(),
        h = i.useCallback(() => {
            (0, Z.pu)(e, {
                content: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                ctaContent: k.Cy.OPEN_GAME_LINK,
                impressionId: d,
                sourceQuestContent: s,
            });
        }, [e, d, s]),
        [C, m] = i.useState(null),
        x = c && !a && r,
        g = x ? C : v.qh.IN_GAME,
        E = c && (null != g || a),
        A = f.intl.string(!0 === a ? f.t["2+opCy"] : f.t.dp0CUb),
        _ =
            !0 === a
                ? f.intl.format(f.t.X8hBDz, { gameTitle: e.config.messages.gameTitle, onClickGameTitle: h })
                : f.intl.string(f.t.Z1T4zl),
        j = {
            label: f.intl.string(f.t.okJIPY),
            placeholder: f.intl.string(f.t.okJIPY),
            options: [
                { id: v.qh.IN_GAME, value: v.qh.IN_GAME, label: f.intl.string(f.t["4PWzD7"]), leading: z.A },
                { id: v.qh.WEB, value: v.qh.WEB, label: f.intl.string(f.t.CM8LUl), leading: Q.I },
            ],
            value: C,
            onSelectionChange: (t) => {
                t !== v.qh.IN_GAME && t !== v.qh.WEB
                    ? m(null)
                    : (m(t),
                      u({
                          questId: e.id,
                          questContent: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                          questContentCTA:
                              t === v.qh.IN_GAME ? k.Cy.SELECT_IN_GAME_AUTH_METHOD : k.Cy.SELECT_WEB_AUTH_METHOD,
                          sourceQuestContent: s,
                      }));
            },
        };
    return (0, n.jsx)(K, {
        heading: A,
        subtitle: _,
        methodSelect: x ? [j] : void 0,
        ctaButton: (() => {
            if (!c || !0 === a || null == g) return;
            if (g === v.qh.WEB)
                return {
                    text: f.intl.string(f.t.T0zC77),
                    onClick: () => {
                        u({
                            questId: e.id,
                            questContent: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                            questContentCTA: k.Cy.START_WEB_AUTHORIZATION,
                            sourceQuestContent: s,
                        }),
                            o({ analyticsLocations: [P.A.QUEST_IN_GAME_MODAL_CONNECT] });
                    },
                };
            let t = e.config.taskConfigV2.tasks[w.n.ACHIEVEMENT_IN_GAME];
            if (null == t) return;
            let n = t.accountLinkInstructions;
            return {
                text: f.intl.string(f.t.KgYvrZ),
                onClick: () =>
                    (0, R.h)({
                        href: n,
                        onConfirm: () => {
                            u({
                                questId: e.id,
                                questContent: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
                                questContentCTA: k.Cy.OPEN_ACCOUNT_LINK_INSTRUCTIONS,
                                sourceQuestContent: s,
                            }),
                                (0, B.A)(n);
                        },
                    }),
            };
        })(),
        children:
            !0 === E &&
            (0, n.jsx)("div", {
                className: X.X,
                children: (0, n.jsx)($.A, {
                    quest: e,
                    hasAlreadyLinked: a,
                    onClickGameTitle: h,
                    selectedAuthMethod: g,
                }),
            }),
    });
}
let te = function (t) {
    let { initialQuest: e, sourceQuestContent: s, transitionState: i, onClose: r } = t,
        o = (0, a.C5)(e.id) ?? e;
    return (0, n.jsx)(W, {
        quest: o,
        questContent: l.uF.ACHIEVEMENT_IN_GAME_MODAL,
        sourceQuestContent: s,
        ariaLabel: f.intl.string(f.t.dp0CUb),
        transitionState: i,
        onClose: r,
        isContentLoading: !1,
        contentHasError: !1,
        leftContent: (0, n.jsx)(tt, { quest: o, sourceQuestContent: s }),
        location: v.rE.INGAME_CONNECTION_MODAL,
    });
};
