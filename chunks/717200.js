s.d(t, { A: () => R });
var i = s(627968),
    l = s(64700),
    a = s(189213),
    n = s(834730),
    r = s(935462),
    c = s(289873),
    o = s(73473),
    d = s(821609),
    m = s(366010),
    u = s(534514),
    x = s(736653),
    h = s(3738),
    j = s(551875),
    g = s(971649),
    v = s(241124),
    p = s(918338),
    f = s(491145),
    C = s(190107),
    N = s(818348),
    y = s(375708),
    b = s(583363);
function k(e) {
    let { quest: t } = e,
        s = (0, x.Ay)(),
        l = (0, m.M)(s) ? N.NJ.DARK : N.NJ.LIGHT,
        a = (0, j.tW)(t, j.fY.LOGO_TYPE, l);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.Sn, {
                id: "SplitQuestModal_hero",
                children: (e) =>
                    (0, i.jsx)(p.A, {
                        quest: t,
                        imageSize: { width: C.i$ * C.K, height: C.ls * C.K },
                        containerClassName: b.jF,
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, i.jsx)("div", {
                className: b.Lt,
                children: (0, i.jsx)(v.Sn, {
                    id: "SplitQuestModal_logotype",
                    children: (e) =>
                        (0, i.jsx)("img", {
                            ref: e,
                            className: b.a$,
                            alt: y.intl.formatToPlainString(y.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: a.url,
                        }),
                }),
            }),
        ],
    });
}
function M(e) {
    let { quest: t, title: s, subtitle: l } = e,
        a = (0, x.Ay)(),
        r = (0, m.M)(a) ? N.NJ.DARK : N.NJ.LIGHT;
    return (0, i.jsxs)("div", {
        className: b.Th,
        children: [
            (0, i.jsx)(v.Sn, {
                id: "SplitQuestModal_gameTile",
                children: (e) =>
                    (0, i.jsx)("img", {
                        ref: e,
                        className: b.rw,
                        alt: y.intl.formatToPlainString(y.t.rtm15P, { name: t.config.messages.gameTitle }),
                        src: (0, j.tW)(t, j.fY.GAME_TILE, r).url,
                    }),
            }),
            (0, i.jsxs)("div", {
                className: b.Ly,
                children: [
                    (0, i.jsx)(u.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: b.fx,
                        children: s,
                    }),
                    (0, i.jsx)(n.E, { variant: "text-sm/medium", color: "text-subtle", children: l }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { quest: t, questContent: s, sourceQuestContent: l, location: a, preCtaClick: n } = e,
        r = (0, g.go)(),
        c = (0, h.Jf)({ quest: t, questContent: s, impressionId: r, preCtaClick: n, sourceQuestContent: l }),
        o = (0, f.A)(t, { impressionId: r, sourceQuestContent: l }, n) ?? c;
    return (0, i.jsxs)("div", {
        className: b.kL,
        children: [
            (0, i.jsxs)(v.jY, {
                source: a,
                questId: t.id,
                isPreview: t.preview,
                children: [
                    (0, i.jsx)(k, { quest: t }),
                    (0, i.jsx)(M, { quest: t, title: o.title, subtitle: o.subtitle }),
                ],
            }),
            (0, i.jsx)("div", {
                className: b.z1,
                children: (0, i.jsx)(d.$, {
                    fullWidth: !0,
                    variant: o.ctaVariant,
                    size: "md",
                    text: o.ctaText,
                    onClick: o.onClickCta,
                }),
            }),
        ],
    });
}
var T = s(408278),
    A = s(173936),
    E = s(815021),
    q = s(590202),
    w = s(814793),
    I = s(371912),
    L = s(399466);
function _(e) {
    let { quest: t, questContent: s, sourceQuestContent: a, onClose: n } = e,
        r = (0, w.E0)(t.config),
        c = (0, g.go)(),
        o = (0, I.Lk)({
            isShareable: r,
            questId: t.id,
            trackingCtx: l.useMemo(
                () => ({ content: s, ctaContent: q.Cy.COPY_QUEST_URL, impressionId: c, sourceQuestContent: a }),
                [s, a, c],
            ),
        });
    return (0, i.jsxs)("div", {
        className: L.n,
        children: [
            r &&
                (0, i.jsx)(T.K, {
                    size: "sm",
                    variant: "overlay-secondary",
                    icon: A.q,
                    "aria-label": y.intl.string(y.t.WqhZss),
                    onClick: o,
                }),
            (0, i.jsx)(E.J, { size: "sm", variant: "overlay-secondary", onClick: n }),
        ],
    });
}
var Q = s(199558);
function D(e) {
    let { onClose: t, transitionState: s, title: l, description: r } = e;
    return (0, i.jsx)(a.Modal, {
        size: "md",
        title: l,
        actions: [{ variant: "primary", text: y.intl.string(y.t.cpT0Cq), onClick: t }],
        onClose: t,
        transitionState: s,
        children: (0, i.jsx)(n.E, { variant: "text-md/medium", color: "text-subtle", children: r }),
    });
}
function R(e) {
    let {
        quest: t,
        questContent: s,
        sourceQuestContent: l,
        ariaLabel: a,
        transitionState: n,
        onClose: d,
        leftContent: m,
        preCtaClick: u,
        isContentLoading: x,
        contentHasError: h,
        errorTitle: j,
        errorDescription: g,
        location: v,
    } = e;
    return h
        ? (0, i.jsx)(D, {
              onClose: d,
              transitionState: n,
              title: j ?? y.intl.string(y.t["9cfXek"]),
              description: g ?? y.intl.string(y.t.nYQyEg),
          })
        : (0, i.jsx)(o.R, {
              questOrQuests: t,
              questContent: s,
              sourceQuestContent: l,
              children: (e) =>
                  (0, i.jsxs)(r.EO, {
                      "data-migration-pending": !0,
                      transitionState: n,
                      size: r.rI.DYNAMIC,
                      className: Q.yl,
                      "aria-label": a,
                      parentComponent: "QuestSplitModalBase",
                      children: [
                          (0, i.jsx)(_, { quest: t, questContent: s, sourceQuestContent: l, onClose: d }),
                          x ? (0, i.jsx)(c.y, { className: Q.u1, type: c.y.Type.WANDERING_CUBES }) : null,
                          (0, i.jsx)("div", {
                              ref: e,
                              className: Q.BM,
                              style: { visibility: x ? "hidden" : "visible" },
                              children: (0, i.jsxs)("div", {
                                  className: Q.jE,
                                  children: [
                                      (0, i.jsx)("div", { className: Q._H, children: m }),
                                      (0, i.jsx)("div", {
                                          className: Q.xK,
                                          children: (0, i.jsx)(S, {
                                              quest: t,
                                              questContent: s,
                                              sourceQuestContent: l,
                                              location: v,
                                              preCtaClick: u,
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
          });
}
