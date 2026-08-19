s.d(t, { A: () => w });
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
    f = s(190107),
    y = s(818348),
    b = s(375708),
    k = s(733908);
function T(e) {
    let { quest: t } = e,
        s = (0, h.Ay)(),
        n = (0, m.M)(s) ? y.NJ.DARK : y.NJ.LIGHT,
        l = (0, v.tW)(t, v.fY.LOGO_TYPE, n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C._M, {
                id: "SplitQuestModal_hero",
                children: (e) =>
                    (0, i.jsx)(p.A, {
                        quest: t,
                        imageSize: { width: f.i$ * f.K, height: f.ls * f.K },
                        containerClassName: k.jF,
                        isInteracting: !0,
                        assetRef: e,
                    }),
            }),
            (0, i.jsx)("div", {
                className: k.Lt,
                children: (0, i.jsx)(C._M, {
                    id: "SplitQuestModal_logotype",
                    children: (e) =>
                        (0, i.jsx)("img", {
                            ref: e,
                            className: k.a$,
                            alt: b.intl.formatToPlainString(b.t.rtm15P, { name: t.config.messages.gameTitle }),
                            src: l.url,
                        }),
                }),
            }),
        ],
    });
}
function M(e) {
    let { quest: t, title: s, subtitle: n } = e,
        l = (0, h.Ay)(),
        a = (0, m.M)(l) ? y.NJ.DARK : y.NJ.LIGHT;
    return (0, i.jsxs)("div", {
        className: k.Th,
        children: [
            (0, i.jsx)(C._M, {
                id: "SplitQuestModal_gameTile",
                children: (e) =>
                    (0, i.jsx)("img", {
                        ref: e,
                        className: k.rw,
                        alt: b.intl.formatToPlainString(b.t.rtm15P, { name: t.config.messages.gameTitle }),
                        src: (0, v.tW)(t, v.fY.GAME_TILE, a).url,
                    }),
            }),
            (0, i.jsxs)("div", {
                className: k.Ly,
                children: [
                    (0, i.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        className: k.fx,
                        children: s,
                    }),
                    (0, i.jsx)(r.E, { variant: "text-sm/medium", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { quest: t, questContent: s, sourceQuestContent: n, location: l, preCtaClick: a } = e,
        r = (0, g.wW)(),
        c = (0, g.go)(),
        o = (0, j.Jf)({ quest: t, questContent: s, getImpressionId: r, preCtaClick: a, sourceQuestContent: n }),
        m = (0, N.A)(t, { impressionId: c, sourceQuestContent: n }, a) ?? o;
    return (0, i.jsxs)("div", {
        className: k.kL,
        children: [
            (0, i.jsxs)(C.y5, {
                source: l,
                adCreativeId: t.id,
                adCreativeType: d.p.QUEST,
                isPreview: t.preview,
                children: [
                    (0, i.jsx)(T, { quest: t }),
                    (0, i.jsx)(M, { quest: t, title: m.title, subtitle: m.subtitle }),
                ],
            }),
            (0, i.jsx)("div", {
                className: k.z1,
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
var E = s(408278),
    _ = s(173936),
    L = s(815021),
    q = s(590202),
    A = s(814793),
    Q = s(201805),
    I = s(88561);
function W(e) {
    let { quest: t, questContent: s, sourceQuestContent: l, onClose: a } = e,
        r = (0, A.E0)(t.config),
        c = (0, g.go)(),
        o = (0, Q.Lk)({
            isShareable: r,
            questId: t.id,
            trackingCtx: n.useMemo(
                () => ({ content: s, ctaContent: q.Cy.COPY_QUEST_URL, impressionId: c, sourceQuestContent: l }),
                [s, l, c],
            ),
        });
    return (0, i.jsxs)("div", {
        className: I.n,
        children: [
            r &&
                (0, i.jsx)(E.K, {
                    size: "sm",
                    variant: "overlay-secondary",
                    icon: _.LinkIcon,
                    "aria-label": b.intl.string(b.t.WqhZss),
                    onClick: o,
                }),
            (0, i.jsx)(L.J, { size: "sm", variant: "overlay-secondary", onClick: a }),
        ],
    });
}
var z = s(436511);
function D(e) {
    let { onClose: t, transitionState: s, title: n, description: a } = e;
    return (0, i.jsx)(l.Modal, {
        size: "md",
        title: n,
        actions: [{ variant: "primary", text: b.intl.string(b.t.cpT0Cq), onClick: t }],
        onClose: t,
        transitionState: s,
        children: (0, i.jsx)(r.E, { variant: "text-md/medium", color: "text-subtle", children: a }),
    });
}
function w(e) {
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
        ? (0, i.jsx)(D, {
              onClose: d,
              transitionState: r,
              title: j ?? b.intl.string(b.t["9cfXek"]),
              description: v ?? b.intl.string(b.t.nYQyEg),
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
                      className: z.yl,
                      "aria-label": l,
                      parentComponent: "QuestSplitModalBase",
                      children: [
                          (0, i.jsx)(W, { quest: t, questContent: s, sourceQuestContent: n, onClose: d }),
                          x ? (0, i.jsx)(c.y, { className: z.u1, type: c.y.Type.WANDERING_CUBES }) : null,
                          (0, i.jsx)("div", {
                              ref: e,
                              className: z.BM,
                              style: { visibility: x ? "hidden" : "visible" },
                              children: (0, i.jsxs)("div", {
                                  className: z.jE,
                                  children: [
                                      (0, i.jsx)("div", { className: z._H, children: u }),
                                      (0, i.jsx)("div", {
                                          className: z.xK,
                                          children: (0, i.jsx)(S, {
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
