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
    f = n(724006);
function h(e) {
    var t;
    let { joinRequest: n, guild: s } = e,
        c = (0, r.e7)([u.default], () => u.default.getUser(n.userId));
    return (0, i.jsxs)("div", {
        className: f.summaryContainer,
        children: [
            (0, i.jsxs)("div", {
                className: f.summaryHeader,
                children: [
                    null != s &&
                        (0, i.jsxs)("div", {
                            className: f.summaryHeaderClanInfo,
                            children: [
                                (0, i.jsx)(a.Z, {
                                    guild: s,
                                    active: !0,
                                    size: a.Z.Sizes.SMOL,
                                    className: f.guildIcon,
                                }),
                                (0, i.jsx)(l.Heading, {
                                    variant: "heading-sm/semibold",
                                    color: "text-strong",
                                    children: s.name,
                                }),
                            ],
                        }),
                    null != c &&
                        (0, i.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            color: "text-strong",
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
                                  (0, i.jsx)("hr", { className: f.summarySeparator }),
                                  (0, i.jsxs)("div", {
                                      className: f.formResponseContainer,
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
        className: f.container,
        children:
            null != r && null != r.formResponses
                ? (0, i.jsxs)("div", {
                      className: f.formContainer,
                      children: [
                          (0, i.jsx)("div", {
                              children: (0, i.jsx)(h, {
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
