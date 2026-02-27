i.d(t, { A: () => p });
var l = i(627968),
    n = i(64700),
    s = i(991660),
    a = i(311907),
    r = i(397927),
    d = i(565645),
    c = i(59520),
    o = i(997590),
    u = i(954571),
    m = i(475720),
    x = i(652215),
    _ = i(985018),
    h = i(492171);
function g(e) {
    let { categoryIds: t } = e,
        i = (0, a.yK)([o.A], () => t.map((e) => o.A.getCategoryName(e)));
    return (0, l.jsxs)("div", {
        className: h.Ff,
        children: [
            (0, l.jsx)(r.Heading, {
                className: h.Uo,
                variant: "heading-sm/medium",
                color: "text-default",
                children: _.intl.string(_.t.ffgJrs),
            }),
            (0, l.jsx)(r.Text, {
                className: h._O,
                variant: "text-sm/normal",
                color: "text-muted",
                children: (0, l.jsx)("span", { children: i.join(", ") }),
            }),
        ],
    });
}
function A(e) {
    let { discoveryGuild: t, invite: i } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            t?.reasons_to_join != null &&
                t.reasons_to_join.length > 0 &&
                (0, l.jsx)(r.BJc, {
                    direction: "vertical",
                    gap: 8,
                    className: h.$s,
                    children: t.reasons_to_join.map((e, t) =>
                        (0, l.jsxs)(
                            r.BJc,
                            {
                                direction: "horizontal",
                                gap: 8,
                                children: [
                                    (0, l.jsx)(d.A, {
                                        className: h.E2,
                                        size: "reaction",
                                        emojiId: e.emoji_id,
                                        emojiName: e.emoji_name,
                                    }),
                                    (0, l.jsx)(r.Text, {
                                        tag: "span",
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        children: e.reason,
                                    }),
                                ],
                            },
                            t,
                        ),
                    ),
                }),
            t?.about != null &&
                "" !== t.about &&
                (0, l.jsxs)("div", {
                    className: h.lu,
                    id: "invite-about-section",
                    children: [
                        (0, l.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            children: _.intl.string(_.t.xcsPye),
                        }),
                        (0, l.jsx)(r.Text, { variant: "text-md/normal", color: "text-default", children: t.about }),
                    ],
                }),
            null != t &&
                (0, l.jsxs)("div", {
                    className: h.xw,
                    children: [
                        null != t.social_links &&
                            t.social_links.length > 0 &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)(r.cGx, {}),
                                    (0, l.jsxs)("div", {
                                        className: h.Ff,
                                        children: [
                                            (0, l.jsx)(r.Heading, {
                                                className: h.Uo,
                                                variant: "heading-sm/medium",
                                                color: "text-default",
                                                children: _.intl.string(_.t.jGVzY5),
                                            }),
                                            (0, l.jsx)(r.Text, {
                                                className: h.qv,
                                                variant: "text-sm/normal",
                                                color: "text-default",
                                                children: t.social_links.map((e) =>
                                                    (0, l.jsx)(m.A, { url: e, invite: i }, e),
                                                ),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        null != t.category_ids &&
                            t.category_ids.length > 0 &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(r.cGx, {}), (0, l.jsx)(g, { categoryIds: t.category_ids })],
                            }),
                    ],
                }),
        ],
    });
}
function p(e) {
    let { invite: t, guild: i, discoveryGuild: a, scrollableSectionClassName: d, expanded: o, setExpanded: m } = e,
        g = null != m,
        p = (a?.about != null && "" !== a.about) || (a?.reasons_to_join != null && a.reasons_to_join.length > 0),
        E = n.useCallback((e, t) => {
            u.default.track(x.HAw.INVITE_ACCEPT_DETAILS_VIEWED, { guild_id: t, invite_code: e, action: "scrolled" });
        }, []),
        j = (0, c.I)(E, 3e3, [t.code, i.id], { trailing: !1 }),
        I = n.useCallback(() => {
            j(t.code, i.id);
        }, [t.code, i.id, j]);
    return p
        ? (0, l.jsx)(s.A, {
              className: d,
              gradientClassName: h.wH,
              onScroll: I,
              children: (0, l.jsxs)("div", {
                  className: h.Bn,
                  children: [
                      null != i.description &&
                          "" !== i.description &&
                          (0, l.jsx)(r.Text, {
                              variant: "text-md/normal",
                              color: "text-default",
                              children: i.description,
                          }),
                      !o &&
                          g &&
                          (0, l.jsxs)(r.BJc, {
                              direction: "horizontal",
                              gap: 4,
                              className: h.qh,
                              children: [
                                  (0, l.jsx)(r.QWc, {
                                      text: _.intl.string(_.t["k+2jmZ"]),
                                      onClick: () => m?.(!0),
                                      "aria-expanded": o,
                                      "aria-controls": "invite-about-section",
                                      size: "sm",
                                      variant: "secondary",
                                      textVariant: "text-xs/medium",
                                  }),
                                  (0, l.jsx)(r.abt, { size: "xs", color: r.LU0.colors.ICON_DEFAULT }),
                              ],
                          }),
                      (0, l.jsx)("div", {
                          className: h.y,
                          "data-expanded": o || !g,
                          "aria-hidden": g && !o,
                          children: (0, l.jsxs)("div", {
                              className: h.Cz,
                              children: [
                                  (0, l.jsx)(A, { discoveryGuild: a, invite: t }),
                                  o &&
                                      g &&
                                      (0, l.jsxs)(r.BJc, {
                                          direction: "horizontal",
                                          gap: 4,
                                          className: h.qh,
                                          children: [
                                              (0, l.jsx)(r.QWc, {
                                                  text: _.intl.string(_.t["3G783D"]),
                                                  onClick: () => m?.(!1),
                                                  "aria-expanded": o,
                                                  "aria-controls": "invite-about-section",
                                                  size: "sm",
                                                  variant: "secondary",
                                                  textVariant: "text-xs/medium",
                                              }),
                                              (0, l.jsx)(r.tN5, { size: "xs", color: r.LU0.colors.ICON_DEFAULT }),
                                          ],
                                      }),
                              ],
                          }),
                      }),
                  ],
              }),
          })
        : (0, l.jsx)("div", {
              className: d,
              children: (0, l.jsx)("div", {
                  className: h.Bn,
                  children:
                      null != i.description &&
                      "" !== i.description &&
                      (0, l.jsx)(r.Text, { variant: "text-md/normal", color: "text-default", children: i.description }),
              }),
          });
}
