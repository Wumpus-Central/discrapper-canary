n.d(t, { Z: () => m });
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    a = n(565138),
    o = n(246364),
    s = n(602606),
    c = n(705563),
    u = n(594174),
    d = n(967128),
    p = n(388032),
    h = n(496363);
function f(e) {
    var t;
    let { joinRequest: n, guild: s } = e,
        c = (0, r.e7)([u.default], () => u.default.getUser(n.userId));
    return (0, i.jsxs)("div", {
        className: h.summaryContainer,
        children: [
            (0, i.jsxs)("div", {
                className: h.summaryHeader,
                children: [
                    null != s &&
                        (0, i.jsxs)("div", {
                            className: h.summaryHeaderClanInfo,
                            children: [
                                (0, i.jsx)(a.Z, {
                                    guild: s,
                                    active: !0,
                                    size: a.Z.Sizes.SMOL,
                                    className: h.guildIcon,
                                }),
                                (0, i.jsx)(l.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "header-primary",
                                    children: s.name,
                                }),
                            ],
                        }),
                    null != c &&
                        (0, i.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            children: p.intl.format(p.t.jDV3i6, { username: c.globalName }),
                        }),
                ],
            }),
            null == (t = n.formResponses)
                ? void 0
                : t
                      .filter((e) => e.field_type !== o.QJ.TERMS)
                      .map((e) => {
                          let t =
                              e.field_type === o.QJ.MULTIPLE_CHOICE && null != e.response
                                  ? e.choices[e.response]
                                  : e.response;
                          return (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)("hr", { className: h.summarySeparator }),
                                  (0, i.jsxs)("div", {
                                      className: h.formResponseContainer,
                                      children: [
                                          (0, i.jsx)(l.Text, {
                                              variant: "text-xs/semibold",
                                              color: "text-muted",
                                              children: e.label,
                                          }),
                                          (0, i.jsx)(l.Text, {
                                              variant: "text-md/medium",
                                              color: "text-strong",
                                              children: t,
                                          }),
                                      ],
                                  }),
                              ],
                          });
                      }),
        ],
    });
}
function m(e) {
    let { channel: t } = e,
        { loading: n, joinRequest: r, joinRequestGuild: a } = (0, s.Z)(t.id);
    return (0, i.jsx)(d.ZP, {
        channelId: t.id,
        className: h.container,
        children:
            null != r && null != r.formResponses
                ? (0, i.jsxs)("div", {
                      className: h.formContainer,
                      children: [
                          (0, i.jsx)("div", {
                              children: (0, i.jsx)(f, {
                                  guild: a,
                                  joinRequest: r,
                              }),
                          }),
                          (0, i.jsx)(c.Z, {
                              channelId: t.id,
                              showProfile: !0,
                          }),
                      ],
                  })
                : n
                  ? (0, i.jsx)(l.$jN, {})
                  : null,
    });
}
