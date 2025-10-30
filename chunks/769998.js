n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(28664),
    a = n(755721),
    s = n(481060),
    o = n(430824),
    c = n(496675),
    d = n(556012),
    u = n(273504),
    g = n(981631),
    m = n(590433),
    p = n(388032),
    f = n(75765);
function h(e) {
    var t;
    let { action: n, triggerType: h, guildId: b, toggled: x, onToggleAction: j } = e,
        v = (e) => () => j(e),
        _ = (0, d.c)(n.type, n, h),
        C = null == (t = n.metadata) ? void 0 : t.durationSeconds,
        O = null != C ? (0, m.getFriendlyDurationString)(C) : null,
        y = (0, i.e7)([c.Z, o.Z], () => c.Z.can(g.Plq.MODERATE_MEMBERS, o.Z.getGuild(b)), [b]);
    if (null == _) return null;
    let { headerText: E, descriptionText: N, icon: I } = _;
    return (0, r.jsxs)("div", {
        className: f.actionContainer,
        children: [
            (0, r.jsx)("div", {
                className: f.actionIconContainer,
                children: (0, r.jsx)(I, {
                    size: "md",
                    color: "currentColor",
                    className: f.actionIcon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: f.actionTextContainer,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-sm/semibold",
                        children: E,
                    }),
                    (0, r.jsx)(s.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        children: N,
                    }),
                    x &&
                        (0, r.jsxs)(s.Text, {
                            color: "interactive-normal",
                            variant: "text-xs/medium",
                            children: [
                                null === O
                                    ? null
                                    : h === u.fX.MENTION_SPAM
                                      ? p.intl.format(p.t.i3lsKD, { friendlyDurationString: O })
                                      : p.intl.format(p.t.mvHxze, { friendlyDurationString: O }),
                                y &&
                                    (0, r.jsx)(s.P3F, {
                                        onClick: v(!0),
                                        className: f.editChannel,
                                        tag: "span",
                                        role: "link",
                                        children: p.intl.string(p.t["0B95RJ"]),
                                    }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(l.u, {
                text: p.intl.format(p.t.wx6Vb9, {}),
                "aria-label": p.intl.formatToMarkdownString(p.t.wx6Vb9, {}),
                shouldShow: !y,
                children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(a.$q, {
                        type: a.M0.INVERTED,
                        value: x,
                        onChange: v(!1),
                        disabled: !y,
                        className: f.__invalid_actionCheckbox,
                    }),
                }),
            }),
        ],
    });
}
