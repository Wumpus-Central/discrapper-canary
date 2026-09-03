s.d(t, { A: () => D });
var i = s(477900),
    n = s(582128),
    l = s(189213),
    a = s(935462),
    r = s(834730),
    c = s(289873),
    o = s(73473),
    d = s(323889),
    u = s(821609),
    m = s(366010),
    x = s(297264),
    h = s(736653),
    j = s(3738),
    v = s(291749),
    g = s(971649),
    C = s(557637),
    p = s(918338),
    N = s(491145),
    f = s(818348),
    y = s(375708),
    b = s(733908);
function k(e) {
    let { quest: t } = e,
        s = (0, h.Ay)(),
        n = (0, m.M)(s) ? f.NJ.DARK : f.NJ.LIGHT,
        l = (0, v.tW)(t, v.fY.LOGO_TYPE, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C._M, {
                id: "SplitQuestModal_hero",
                children: (e) =>
                    (0, i.jsx)(p.A, {
                        quest: t,
                        imageSize: (0, p.k)(),
                        variant: "modalPanel",
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, i.jsx)("div", {
                className: b.Lt,
                children: (0, i.jsx)(C._M, {
                    id: "SplitQuestModal_logotype",
                    children: (e) =>
                        (0, i.jsx)("img", {
                            ref: e,
                            className: b.a$,
                            alt: y.intl.formatToPlainString(y.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: l.url,
                        }),
                }),
            }),
        ],
    });
}
function T(e) {
    let { quest: t, title: s, subtitle: n } = e,
        l = (0, h.Ay)(),
        a = (0, m.M)(l) ? f.NJ.DARK : f.NJ.LIGHT;
    return (0, i.jsxs)("div", {
        className: b.Th,
        children: [
            (0, i.jsx)(C._M, {
                id: "SplitQuestModal_gameTile",
                children: (e) =>
                    (0, i.jsx)("img", {
                        ref: e,
                        className: b.rw,
                        alt: y.intl.formatToPlainString(y.t.rtm15P, { name: t.config.messages.gameTitle }),
                        src: (0, v.tW)(t, v.fY.GAME_TILE, a).url,
                    }),
            }),
            (0, i.jsxs)("div", {
                className: b.Ly,
                children: [
                    (0, i.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: b.fx,
                        children: s,
                    }),
                    (0, i.jsx)(r.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function M(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, location: l, preCtaClick: a } = e,
        r = (0, g.wW)(),
        c = (0, g.go)(),
        o = (0, j.Jf)({ quest: t, questContent: s, getImpressionId: r, preCtaClick: a, sourceQuestContent: n }),
        m = (0, N.A)(t, { impressionId: c, sourceQuestContent: n }, a) ?? o;
    return (0, i.jsxs)("div", {
        className: b.kL,
        children: [
            (0, i.jsxs)(C.y5, {
                source: l,
                adCreativeId: t.id,
                adCreativeType: d.p.QUEST,
                isPreview: t.preview,
                children: [
                    (0, i.jsx)(k, { quest: t }),
                    (0, i.jsx)(T, { quest: t, title: m.title, subtitle: m.subtitle }),
                ],
            }),
            (0, i.jsx)("div", {
                className: b.z1,
                children: (0, i.jsx)(u.$, {
                    fullWidth: !0,
                    variant: m.ctaVariant,
                    size: "md",
                    text: m.ctaText,
                    onClick: m.onClickCta,
                }),
            }),
        ],
    });
}
var S = s(408278),
    E = s(173936),
    _ = s(815021),
    L = s(590202),
    q = s(814793),
    A = s(130490),
    Q = s(88561);
function I(e) {
    let { quest: t, questContent: s, sourceQuestContent: l, onClose: a } = e,
        r = (0, q.E0)(t.config),
        c = (0, g.go)(),
        o = (0, A.Lk)({
            isShareable: r,
            questId: t.id,
            trackingCtx: n.useMemo(
                () => ({ content: s, ctaContent: L.Cy.COPY_QUEST_URL, impressionId: c, sourceQuestContent: l }),
                [s, l, c],
            ),
        });
    return (0, i.jsxs)("div", {
        className: Q.n,
        children: [
            r &&
                (0, i.jsx)(S.K, {
                    size: "sm",
                    variant: "overlay-secondary",
                    icon: E.LinkIcon,
                    "aria-label": y.intl.string(y.t.WqhZss),
                    onClick: o,
                }),
            (0, i.jsx)(_.J, { size: "sm", variant: "overlay-secondary", onClick: a }),
        ],
    });
}
var W = s(436511);
function z(e) {
    let { onClose: t, transitionState: s, title: n, description: a } = e;
    return (0, i.jsx)(l.Modal, {
        size: "md",
        title: n,
        actions: [{ variant: "primary", text: y.intl.string(y.t.cpT0Cq), onClick: t }],
        onClose: t,
        transitionState: s,
        children: (0, i.jsx)(r.E, { variant: "text-md/medium", color: "text-subtle", children: a }),
    });
}
function D(e) {
    let {
        quest: t,
        questContent: s,
        sourceQuestContent: n,
        ariaLabel: l,
        transitionState: r,
        onClose: d,
        leftContent: u,
        preCtaClick: m,
        isContentLoading: x,
        contentHasError: h,
        errorTitle: j,
        errorDescription: v,
        location: g,
    } = e;
    return h
        ? (0, i.jsx)(z, {
              onClose: d,
              transitionState: r,
              title: j ?? y.intl.string(y.t["9cfXek"]),
              description: v ?? y.intl.string(y.t.nYQyEg),
          })
        : (0, i.jsx)(o.R, {
              questOrQuests: t,
              questContent: s,
              sourceQuestContent: n,
              children: (e) =>
                  (0, i.jsxs)(a.EO, {
                      "data-migration-pending": !0,
                      transitionState: r,
                      size: a.rI.DYNAMIC,
                      className: W.yl,
                      "aria-label": l,
                      parentComponent: "QuestSplitModalBase",
                      children: [
                          (0, i.jsx)(I, { quest: t, questContent: s, sourceQuestContent: n, onClose: d }),
                          x ? (0, i.jsx)(c.y, { className: W.u1, type: c.y.Type.WANDERING_CUBES }) : null,
                          (0, i.jsx)("div", {
                              ref: e,
                              className: W.BM,
                              style: { visibility: x ? "hidden" : "visible" },
                              children: (0, i.jsxs)("div", {
                                  className: W.jE,
                                  children: [
                                      (0, i.jsx)("div", { className: W._H, children: u }),
                                      (0, i.jsx)("div", {
                                          className: W.xK,
                                          children: (0, i.jsx)(M, {
                                              quest: t,
                                              questContent: s,
                                              sourceQuestContent: n,
                                              location: g,
                                              preCtaClick: m,
                                          }),
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  }),
          });
}
