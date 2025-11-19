n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
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
    f = n(464992);
function h(e) {
    var t;
    let { action: n, triggerType: h, guildId: b, toggled: x, onToggleAction: j } = e,
        _ = (e) => () => j(e),
        v = (0, d.c)(n.type, n, h),
        O = null == (t = n.metadata) ? void 0 : t.durationSeconds,
        C = null != O ? (0, m.getFriendlyDurationString)(O) : null,
        y = (0, i.e7)([c.Z, o.Z], () => c.Z.can(g.Plq.MODERATE_MEMBERS, o.Z.getGuild(b)), [b]);
    if (null == v) return null;
    let { headerText: N, descriptionText: E, icon: I } = v;
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
                        children: N,
                    }),
                    (0, r.jsx)(s.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        children: E,
                    }),
                    x &&
                        (0, r.jsxs)(s.Text, {
                            color: "interactive-normal",
                            variant: "text-xs/medium",
                            children: [
                                null === C
                                    ? null
                                    : h === u.fX.MENTION_SPAM
                                      ? p.intl.format(p.t.i3lsKD, { friendlyDurationString: C })
                                      : p.intl.format(p.t.mvHxze, { friendlyDurationString: C }),
                                y &&
                                    (0, r.jsx)(s.P3F, {
                                        onClick: _(!0),
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
                        onChange: _(!1),
                        disabled: !y,
                        className: f.__invalid_actionCheckbox,
                    }),
                }),
            }),
        ],
    });
}
