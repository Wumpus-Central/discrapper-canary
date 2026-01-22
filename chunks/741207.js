n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(990078),
    s = n(397927),
    a = n(71393),
    c = n(576705),
    o = n(239705),
    d = n(411335),
    u = n(652215),
    f = n(200700),
    g = n(985018),
    b = n(86181);

function m(e) {
    var t;
    let { action: n, triggerType: m, guildId: p, toggled: x, onToggleAction: h } = e,
        j = (e) => () => h(e),
        O = (0, o.x)(n.type, n, m),
        y = null == (t = n.metadata) ? void 0 : t.durationSeconds,
        v = null != y ? (0, f.getFriendlyDurationString)(y) : null,
        A = (0, i.bG)([c.A, a.A], () => c.A.can(u.xBc.MODERATE_MEMBERS, a.A.getGuild(p)), [p]);
    if (null == O) return null;
    let { headerText: E, descriptionText: N, icon: _ } = O;
    return (0, r.jsxs)("div", {
        className: b.Ik,
        children: [
            (0, r.jsx)("div", {
                className: b.TV,
                children: (0, r.jsx)(_, {
                    size: "md",
                    color: "currentColor",
                    className: b.gE,
                }),
            }),
            (0, r.jsxs)("div", {
                className: b.xj,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-sm/semibold",
                        children: E,
                    }),
                    (0, r.jsx)(s.Text, {
                        color: "interactive-text-default",
                        variant: "text-xs/medium",
                        children: N,
                    }),
                    x &&
                        (0, r.jsxs)(s.Text, {
                            color: "interactive-text-default",
                            variant: "text-xs/medium",
                            children: [
                                null === v
                                    ? null
                                    : m === d.uh.MENTION_SPAM
                                      ? g.intl.format(g.t.i3lsKD, {
                                            friendlyDurationString: v,
                                        })
                                      : g.intl.format(g.t.mvHxze, {
                                            friendlyDurationString: v,
                                        }),
                                A &&
                                    (0, r.jsx)(s.DUT, {
                                        onClick: j(!0),
                                        className: b._2,
                                        tag: "span",
                                        role: "link",
                                        children: g.intl.string(g.t["0B95RJ"]),
                                    }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(l.m, {
                text: g.intl.format(g.t.wx6Vb9, {}),
                "aria-label": g.intl.formatToMarkdownString(g.t.wx6Vb9, {}),
                shouldShow: !A,
                children: (0, r.jsx)("div", {
                    children: (0, r.jsx)(s.DUT, {
                        onClick: A ? j(!1) : void 0,
                        children: (0, r.jsx)(s.P7L, {
                            checked: x,
                            disabled: !A,
                        }),
                    }),
                }),
            }),
        ],
    });
}
