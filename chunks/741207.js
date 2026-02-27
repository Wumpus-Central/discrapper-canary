"use strict";
n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(990078),
    r = n(397927),
    a = n(71393),
    o = n(576705),
    d = n(239705),
    c = n(411335),
    u = n(652215),
    m = n(200700),
    g = n(985018),
    x = n(86181);
function h(e) {
    let { action: t, triggerType: n, guildId: h, toggled: _, onToggleAction: p } = e,
        A = (e) => () => p(e),
        f = (0, d.x)(t.type, t, n),
        j = t.metadata?.durationSeconds,
        N = null != j ? (0, m.getFriendlyDurationString)(j) : null,
        E = (0, s.bG)([o.A, a.A], () => o.A.can(u.xBc.MODERATE_MEMBERS, a.A.getGuild(h)), [h]);
    if (null == f) return null;
    let { headerText: b, descriptionText: T, icon: C } = f;
    return (0, i.jsxs)("div", {
        className: x.Ik,
        children: [
            (0, i.jsx)("div", {
                className: x.TV,
                children: (0, i.jsx)(C, { size: "md", color: "currentColor", className: x.gE }),
            }),
            (0, i.jsxs)("div", {
                className: x.xj,
                children: [
                    (0, i.jsx)(r.Heading, { variant: "heading-sm/semibold", children: b }),
                    (0, i.jsx)(r.Text, { color: "interactive-text-default", variant: "text-xs/medium", children: T }),
                    _ &&
                        (0, i.jsxs)(r.Text, {
                            color: "interactive-text-default",
                            variant: "text-xs/medium",
                            children: [
                                null === N
                                    ? null
                                    : n === c.uh.MENTION_SPAM
                                      ? g.intl.format(g.t.i3lsKD, { friendlyDurationString: N })
                                      : g.intl.format(g.t.mvHxze, { friendlyDurationString: N }),
                                E &&
                                    (0, i.jsx)(r.DUT, {
                                        onClick: A(!0),
                                        className: x._2,
                                        tag: "span",
                                        role: "link",
                                        children: g.intl.string(g.t["0B95RJ"]),
                                    }),
                            ],
                        }),
                ],
            }),
            (0, i.jsx)(l.m, {
                text: g.intl.format(g.t.wx6Vb9, {}),
                "aria-label": g.intl.formatToMarkdownString(g.t.wx6Vb9, {}),
                shouldShow: !E,
                children: (0, i.jsx)("div", {
                    children: (0, i.jsx)(r.DUT, {
                        onClick: E ? A(!1) : void 0,
                        children: (0, i.jsx)(r.P7L, { checked: _, disabled: !E }),
                    }),
                }),
            }),
        ],
    });
}
