n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(28664),
    a = n(481060),
    s = n(430824),
    o = n(496675),
    c = n(556012),
    d = n(273504),
    u = n(981631),
    g = n(590433),
    m = n(388032),
    p = n(464992);
function f(e) {
    var t;
    let { action: n, triggerType: f, guildId: h, toggled: b, onToggleAction: x } = e,
        j = (e) => () => x(e),
        _ = (0, c.c)(n.type, n, f),
        v = null == (t = n.metadata) ? void 0 : t.durationSeconds,
        O = null != v ? (0, g.getFriendlyDurationString)(v) : null,
        C = (0, i.e7)([o.Z, s.Z], () => o.Z.can(u.Plq.MODERATE_MEMBERS, s.Z.getGuild(h)), [h]);
    if (null == _) return null;
    let { headerText: y, descriptionText: N, icon: E } = _;
    return (0, r.jsxs)("div", {
        className: p.actionContainer,
        children: [
            (0, r.jsx)("div", {
                className: p.actionIconContainer,
                children: (0, r.jsx)(E, {
                    size: "md",
                    color: "currentColor",
                    className: p.actionIcon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: p.actionTextContainer,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-sm/semibold",
                        children: y,
                    }),
                    (0, r.jsx)(a.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        children: N,
                    }),
                    b &&
                        (0, r.jsxs)(a.Text, {
                            color: "interactive-normal",
                            variant: "text-xs/medium",
                            children: [
                                null === O
                                    ? null
                                    : f === d.fX.MENTION_SPAM
                                      ? m.intl.format(m.t.i3lsKD, { friendlyDurationString: O })
                                      : m.intl.format(m.t.mvHxze, { friendlyDurationString: O }),
                                C &&
                                    (0, r.jsx)(a.P3F, {
                                        onClick: j(!0),
                                        className: p.editChannel,
                                        tag: "span",
                                        role: "link",
                                        children: m.intl.string(m.t["0B95RJ"]),
                                    }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(l.u, {
                text: m.intl.format(m.t.wx6Vb9, {}),
                "aria-label": m.intl.formatToMarkdownString(m.t.wx6Vb9, {}),
                shouldShow: !C,
                children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(a.P3F, {
                        onClick: C ? j(!1) : void 0,
                        children: (0, r.jsx)(a.FZ5, {
                            checked: b,
                            disabled: !C,
                        }),
                    }),
                }),
            }),
        ],
    });
}
