n.d(t, { Z: () => b });
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
    f = n(388032),
    m = n(239244);
function b(e) {
    var t;
    let { action: n, triggerType: b, guildId: p, toggled: h, onToggleAction: x } = e,
        j = (e) => () => x(e),
        v = (0, c.c)(n.type, n, b),
        O = null == (t = n.metadata) ? void 0 : t.durationSeconds,
        C = null != O ? (0, g.getFriendlyDurationString)(O) : null,
        y = (0, i.e7)([o.Z, s.Z], () => o.Z.can(u.Plq.MODERATE_MEMBERS, s.Z.getGuild(p)), [p]);
    if (null == v) return null;
    let { headerText: N, descriptionText: E, icon: I } = v;
    return (0, r.jsxs)("div", {
        className: m.actionContainer,
        children: [
            (0, r.jsx)("div", {
                className: m.actionIconContainer,
                children: (0, r.jsx)(I, {
                    size: "md",
                    color: "currentColor",
                    className: m.actionIcon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: m.actionTextContainer,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-sm/semibold",
                        children: N,
                    }),
                    (0, r.jsx)(a.Text, {
                        color: "interactive-text-default",
                        variant: "text-xs/medium",
                        children: E,
                    }),
                    h &&
                        (0, r.jsxs)(a.Text, {
                            color: "interactive-text-default",
                            variant: "text-xs/medium",
                            children: [
                                null === C
                                    ? null
                                    : b === d.fX.MENTION_SPAM
                                      ? f.intl.format(f.t.i3lsKD, { friendlyDurationString: C })
                                      : f.intl.format(f.t.mvHxze, { friendlyDurationString: C }),
                                y &&
                                    (0, r.jsx)(a.P3F, {
                                        onClick: j(!0),
                                        className: m.editChannel,
                                        tag: "span",
                                        role: "link",
                                        children: f.intl.string(f.t["0B95RJ"]),
                                    }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(l.u, {
                text: f.intl.format(f.t.wx6Vb9, {}),
                "aria-label": f.intl.formatToMarkdownString(f.t.wx6Vb9, {}),
                shouldShow: !y,
                children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(a.P3F, {
                        onClick: y ? j(!1) : void 0,
                        children: (0, r.jsx)(a.FZ5, {
                            checked: h,
                            disabled: !y,
                        }),
                    }),
                }),
            }),
        ],
    });
}
