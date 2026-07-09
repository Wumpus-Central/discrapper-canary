s.d(t, { A: () => W });
var i = s(627968),
    l = s(64700),
    a = s(189213),
    n = s(834730),
    r = s(935462),
    c = s(289873),
    o = s(73473),
    d = s(323889),
    m = s(821609),
    x = s(366010),
    u = s(534514),
    h = s(736653),
    v = s(3738),
    j = s(46948),
    g = s(971649),
    p = s(557637),
    C = s(918338),
    f = s(491145),
    N = s(190107),
    y = s(818348),
    b = s(375708),
    M = s(396355);
function T(e) {
    let { quest: t } = e,
        s = (0, h.Ay)(),
        l = (0, x.M)(s) ? y.NJ.DARK : y.NJ.LIGHT,
        a = (0, j.tW)(t, j.fY.LOGO_TYPE, l);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p._M, {
                id: "SplitQuestModal_hero",
                children: (e) =>
                    (0, i.jsx)(C.A, {
                        quest: t,
                        imageSize: { width: N.i$ * N.K, height: N.ls * N.K },
                        containerClassName: M.jF,
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, i.jsx)("div", {
                className: M.Lt,
                children: (0, i.jsx)(p._M, {
                    id: "SplitQuestModal_logotype",
                    children: (e) =>
                        (0, i.jsx)("img", {
                            ref: e,
                            className: M.a$,
                            alt: b.intl.formatToPlainString(b.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: a.url,
                        }),
                }),
            }),
        ],
    });
}
function k(e) {
    let { quest: t, title: s, subtitle: l } = e,
        a = (0, h.Ay)(),
        r = (0, x.M)(a) ? y.NJ.DARK : y.NJ.LIGHT;
    return (0, i.jsxs)("div", {
        className: M.Th,
        children: [
            (0, i.jsx)(p._M, {
                id: "SplitQuestModal_gameTile",
                children: (e) =>
                    (0, i.jsx)("img", {
                        ref: e,
                        className: M.rw,
                        alt: b.intl.formatToPlainString(b.t.rtm15P, { name: t.config.messages.gameTitle }),
                        src: (0, j.tW)(t, j.fY.GAME_TILE, r).url,
                    }),
            }),
            (0, i.jsxs)("div", {
                className: M.Ly,
                children: [
                    (0, i.jsx)(u.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: M.fx,
                        children: s,
                    }),
                    (0, i.jsx)(n.E, { variant: "text-sm/medium", color: "text-subtle", children: l }),
                ],
            }),
        ],
    });
}
function E(e) {
    let { quest: t, questContent: s, sourceQuestContent: l, location: a, preCtaClick: n } = e,
        r = (0, g.wW)(),
        c = (0, g.go)(),
        o = (0, v.Jf)({ quest: t, questContent: s, getImpressionId: r, preCtaClick: n, sourceQuestContent: l }),
        x = (0, f.A)(t, { impressionId: c, sourceQuestContent: l }, n) ?? o;
    return (0, i.jsxs)("div", {
        className: M.kL,
        children: [
            (0, i.jsxs)(p.y5, {
                source: a,
                adCreativeId: t.id,
                adCreativeType: d.p.QUEST,
                isPreview: t.preview,
                children: [
                    (0, i.jsx)(T, { quest: t }),
                    (0, i.jsx)(k, { quest: t, title: x.title, subtitle: x.subtitle }),
                ],
            }),
            (0, i.jsx)("div", {
                className: M.z1,
                children: (0, i.jsx)(m.$, {
                    fullWidth: !0,
                    variant: x.ctaVariant,
                    size: "md",
                    text: x.ctaText,
                    onClick: x.onClickCta,
                }),
            }),
        ],
    });
}
var A = s(408278),
    _ = s(173936),
    S = s(815021),
    w = s(590202),
    q = s(814793),
    I = s(371912),
    L = s(664618);
function Q(e) {
    let { quest: t, questContent: s, sourceQuestContent: a, onClose: n } = e,
        r = (0, q.E0)(t.config),
        c = (0, g.go)(),
        o = (0, I.Lk)({
            isShareable: r,
            questId: t.id,
            trackingCtx: l.useMemo(
                () => ({ content: s, ctaContent: w.Cy.COPY_QUEST_URL, impressionId: c, sourceQuestContent: a }),
                [s, a, c],
            ),
        });
    return (0, i.jsxs)("div", {
        className: L.n,
        children: [
            r &&
                (0, i.jsx)(A.K, {
                    size: "sm",
                    variant: "overlay-secondary",
                    icon: _.q,
                    "aria-label": b.intl.string(b.t.WqhZss),
                    onClick: o,
                }),
            (0, i.jsx)(S.J, { size: "sm", variant: "overlay-secondary", onClick: n }),
        ],
    });
}
var D = s(601862);
function R(e) {
    let { onClose: t, transitionState: s, title: l, description: r } = e;
    return (0, i.jsx)(a.Modal, {
        size: "md",
        title: l,
        actions: [{ variant: "primary", text: b.intl.string(b.t.cpT0Cq), onClick: t }],
        onClose: t,
        transitionState: s,
        children: (0, i.jsx)(n.E, { variant: "text-md/medium", color: "text-subtle", children: r }),
    });
}
function W(e) {
    let {
        quest: t,
        questContent: s,
        sourceQuestContent: l,
        ariaLabel: a,
        transitionState: n,
        onClose: d,
        leftContent: m,
        preCtaClick: x,
        isContentLoading: u,
        contentHasError: h,
        errorTitle: v,
        errorDescription: j,
        location: g,
    } = e;
    return h
        ? (0, i.jsx)(R, {
              onClose: d,
              transitionState: n,
              title: v ?? b.intl.string(b.t["9cfXek"]),
              description: j ?? b.intl.string(b.t.nYQyEg),
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
                      className: D.yl,
                      "aria-label": a,
                      parentComponent: "QuestSplitModalBase",
                      children: [
                          (0, i.jsx)(Q, { quest: t, questContent: s, sourceQuestContent: l, onClose: d }),
                          u ? (0, i.jsx)(c.y, { className: D.u1, type: c.y.Type.WANDERING_CUBES }) : null,
                          (0, i.jsx)("div", {
                              ref: e,
                              className: D.BM,
                              style: { visibility: u ? "hidden" : "visible" },
                              children: (0, i.jsxs)("div", {
                                  className: D.jE,
                                  children: [
                                      (0, i.jsx)("div", { className: D._H, children: m }),
                                      (0, i.jsx)("div", {
                                          className: D.xK,
                                          children: (0, i.jsx)(E, {
                                              quest: t,
                                              questContent: s,
                                              sourceQuestContent: l,
                                              location: g,
                                              preCtaClick: x,
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
          });
}
