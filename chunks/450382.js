t.d(i, { A: () => N });
var l = t(627968),
    s = t(64700),
    a = t(991660),
    n = t(311907),
    r = t(534514),
    d = t(834730),
    o = t(331322),
    c = t(404778),
    u = t(123292),
    h = t(847374),
    m = t(827734),
    _ = t(900797),
    x = t(565645),
    g = t(59520),
    A = t(997590),
    p = t(954571),
    v = t(475720),
    E = t(652215),
    j = t(985018),
    I = t(963120);
function f(e) {
    let { categoryIds: i } = e,
        t = (0, n.yK)([A.A], () => i.map((e) => A.A.getCategoryName(e)));
    return (0, l.jsxs)("div", {
        className: I.Ff,
        children: [
            (0, l.jsx)(r.D, {
                className: I.Uo,
                variant: "heading-sm/medium",
                color: "text-default",
                children: j.intl.string(j.t.ffgJrs),
            }),
            (0, l.jsx)(d.E, {
                className: I._O,
                variant: "text-sm/normal",
                color: "text-muted",
                children: (0, l.jsx)("span", { children: t.join(", ") }),
            }),
        ],
    });
}
function C(e) {
    let { discoveryGuild: i, invite: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            i?.reasons_to_join != null &&
                i.reasons_to_join.length > 0 &&
                (0, l.jsx)(o.B, {
                    direction: "vertical",
                    gap: 8,
                    className: I.$s,
                    children: i.reasons_to_join.map((e, i) =>
                        (0, l.jsxs)(
                            o.B,
                            {
                                direction: "horizontal",
                                gap: 8,
                                children: [
                                    (0, l.jsx)(x.A, {
                                        className: I.E2,
                                        size: "reaction",
                                        emojiId: e.emoji_id,
                                        emojiName: e.emoji_name,
                                    }),
                                    (0, l.jsx)(d.E, {
                                        tag: "span",
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: e.reason,
                                    }),
                                ],
                            },
                            i,
                        ),
                    ),
                }),
            i?.about != null &&
                "" !== i.about &&
                (0, l.jsxs)("div", {
                    className: I.lu,
                    id: "invite-about-section",
                    children: [
                        (0, l.jsx)(d.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: j.intl.string(j.t.xcsPye),
                        }),
                        (0, l.jsx)(d.E, { variant: "text-md/normal", color: "text-default", children: i.about }),
                    ],
                }),
            null != i &&
                (0, l.jsxs)("div", {
                    className: I.xw,
                    children: [
                        null != i.social_links &&
                            i.social_links.length > 0 &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(c.c, {}),
                                    (0, l.jsxs)("div", {
                                        className: I.Ff,
                                        children: [
                                            (0, l.jsx)(r.D, {
                                                className: I.Uo,
                                                variant: "heading-sm/medium",
                                                color: "text-default",
                                                children: j.intl.string(j.t.jGVzY5),
                                            }),
                                            (0, l.jsx)(d.E, {
                                                className: I.qv,
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: i.social_links.map((e) =>
                                                    (0, l.jsx)(v.A, { url: e, invite: t }, e),
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        null != i.category_ids &&
                            i.category_ids.length > 0 &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(c.c, {}), (0, l.jsx)(f, { categoryIds: i.category_ids })],
                            }),
                    ],
                }),
        ],
    });
}
function N(e) {
    let { invite: i, guild: t, discoveryGuild: n, scrollableSectionClassName: r, expanded: c, setExpanded: x } = e,
        A = null != x,
        v = (n?.about != null && "" !== n.about) || (n?.reasons_to_join != null && n.reasons_to_join.length > 0),
        f = s.useCallback((e, i) => {
            p.default.track(E.HAw.INVITE_ACCEPT_DETAILS_VIEWED, { guild_id: i, invite_code: e, action: "scrolled" });
        }, []),
        N = (0, g.I)(f, 3e3, [i.code, t.id], { trailing: !1 }),
        y = s.useCallback(() => {
            N(i.code, t.id);
        }, [i.code, t.id, N]);
    return v
        ? (0, l.jsx)(a.A, {
              className: r,
              gradientClassName: I.wH,
              onScroll: y,
              children: (0, l.jsxs)("div", {
                  className: I.Bn,
                  children: [
                      null != t.description &&
                          "" !== t.description &&
                          (0, l.jsx)(d.E, {
                              variant: "text-md/normal",
                              color: "text-default",
                              children: t.description,
                          }),
                      !c &&
                          A &&
                          (0, l.jsxs)(o.B, {
                              direction: "horizontal",
                              gap: 4,
                              className: I.qh,
                              children: [
                                  (0, l.jsx)(u.Q, {
                                      text: j.intl.string(j.t["k+2jmZ"]),
                                      onClick: () => x?.(!0),
                                      "aria-expanded": c,
                                      "aria-controls": "invite-about-section",
                                      size: "sm",
                                      variant: "secondary",
                                      textVariant: "text-xs/medium",
                                  }),
                                  (0, l.jsx)(h.a, { size: "xs", color: m.A.colors.ICON_DEFAULT }),
                              ],
                          }),
                      (0, l.jsx)("div", {
                          className: I.y,
                          "data-expanded": c || !A,
                          "aria-hidden": A && !c,
                          children: (0, l.jsxs)("div", {
                              className: I.Cz,
                              children: [
                                  (0, l.jsx)(C, { discoveryGuild: n, invite: i }),
                                  c &&
                                      A &&
                                      (0, l.jsxs)(o.B, {
                                          direction: "horizontal",
                                          gap: 4,
                                          className: I.qh,
                                          children: [
                                              (0, l.jsx)(u.Q, {
                                                  text: j.intl.string(j.t["3G783D"]),
                                                  onClick: () => x?.(!1),
                                                  "aria-expanded": c,
                                                  "aria-controls": "invite-about-section",
                                                  size: "sm",
                                                  variant: "secondary",
                                                  textVariant: "text-xs/medium",
                                              }),
                                              (0, l.jsx)(_.t, { size: "xs", color: m.A.colors.ICON_DEFAULT }),
                                          ],
                                      }),
                              ],
                          }),
                      }),
                  ],
              }),
          })
        : (0, l.jsx)("div", {
              className: r,
              children: (0, l.jsx)("div", {
                  className: I.Bn,
                  children:
                      null != t.description &&
                      "" !== t.description &&
                      (0, l.jsx)(d.E, { variant: "text-md/normal", color: "text-default", children: t.description }),
              }),
          });
}
