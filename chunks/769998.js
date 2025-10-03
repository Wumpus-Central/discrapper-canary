n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(28664),
    s = n(755721),
    a = n(481060),
    o = n(430824),
    c = n(496675),
    d = n(556012),
    u = n(273504),
    m = n(981631),
    g = n(590433),
    p = n(388032),
    f = n(464992);
function h(e) {
    var t;
    let { action: n, triggerType: h, guildId: x, toggled: b, onToggleAction: j } = e,
        _ = (e) => () => j(e),
        v = (0, d.c)(n.type, n, h),
        C = null == (t = n.metadata) ? void 0 : t.durationSeconds,
        O = null != C ? (0, g.L9)(C) : null,
        y = (0, i.e7)([c.Z, o.Z], () => c.Z.can(m.Plq.MODERATE_MEMBERS, o.Z.getGuild(x)), [x]);
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
                    (0, r.jsx)(a.X6q, {
                        variant: "heading-sm/semibold",
                        children: N,
                    }),
                    (0, r.jsx)(a.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        children: E,
                    }),
                    b &&
                        (0, r.jsxs)(a.Text, {
                            color: "interactive-normal",
                            variant: "text-xs/medium",
                            children: [
                                null === O
                                    ? null
                                    : h === u.fX.MENTION_SPAM
                                      ? p.intl.format(p.t.i3lsKC, { friendlyDurationString: O })
                                      : p.intl.format(p.t.mvHxzc, { friendlyDurationString: O }),
                                y &&
                                    (0, r.jsx)(a.P3F, {
                                        onClick: _(!0),
                                        className: f.editChannel,
                                        tag: "span",
                                        role: "link",
                                        children: p.intl.string(p.t["0B95RE"]),
                                    }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(l.u, {
                text: p.intl.format(p.t.wx6Vb2, {}),
                "aria-label": p.intl.formatToMarkdownString(p.t.wx6Vb2, {}),
                shouldShow: !y,
                children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.$q, {
                        type: s.M0.INVERTED,
                        value: b,
                        onChange: _(!1),
                        disabled: !y,
                        className: f.__invalid_actionCheckbox,
                    }),
                }),
            }),
        ],
    });
}
