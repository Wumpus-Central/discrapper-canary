n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(990078),
    r = n(534514),
    a = n(834730),
    o = n(939249),
    d = n(658675),
    c = n(71393),
    u = n(576705),
    m = n(239705),
    g = n(411335),
    h = n(652215),
    x = n(200700),
    _ = n(985018),
    p = n(411374);
function A(e) {
    let { action: t, triggerType: n, guildId: A, toggled: E, onToggleAction: f } = e,
        j = (e) => () => f(e),
        N = (0, m.x)(t.type, t, n),
        I = t.metadata?.durationSeconds,
        C = null != I ? (0, x.getFriendlyDurationString)(I) : null,
        b = (0, l.bG)([u.A, c.A], () => u.A.can(h.xBc.MODERATE_MEMBERS, c.A.getGuild(A)), [A]);
    if (null == N) return null;
    let { headerText: v, descriptionText: S, icon: T } = N;
    return (0, i.jsxs)("div", {
        className: p.Ik,
        children: [
            (0, i.jsx)("div", {
                className: p.TV,
                children: (0, i.jsx)(T, { size: "md", color: "currentColor", className: p.gE }),
            }),
            (0, i.jsxs)("div", {
                className: p.xj,
                children: [
                    (0, i.jsx)(r.D, { variant: "heading-sm/semibold", children: v }),
                    (0, i.jsx)(a.E, { color: "interactive-text-default", variant: "text-xs/medium", children: S }),
                    E &&
                        (0, i.jsxs)(a.E, {
                            color: "interactive-text-default",
                            variant: "text-xs/medium",
                            children: [
                                null === C
                                    ? null
                                    : n === g.uh.MENTION_SPAM
                                      ? _.intl.format(_.t.i3lsKD, { friendlyDurationString: C })
                                      : _.intl.format(_.t.mvHxze, { friendlyDurationString: C }),
                                b &&
                                    (0, i.jsx)(o.D, {
                                        onClick: j(!0),
                                        className: p._2,
                                        tag: "span",
                                        role: "link",
                                        children: _.intl.string(_.t["0B95RJ"]),
                                    }),
                            ],
                        }),
                ],
            }),
            (0, i.jsx)(s.m, {
                text: _.intl.format(_.t.wx6Vb9, {}),
                "aria-label": _.intl.formatToMarkdownString(_.t.wx6Vb9, {}),
                shouldShow: !b,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(o.D, {
                        onClick: b ? j(!1) : void 0,
                        children: (0, i.jsx)(d.P, { checked: E, disabled: !b }),
                    }),
                }),
            }),
        ],
    });
}
