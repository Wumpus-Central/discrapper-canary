n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(755721),
    a = n(481060),
    s = n(933557),
    o = n(592125),
    c = n(699516),
    d = n(594174),
    u = n(556012),
    g = n(388032),
    m = n(464992);
function p(e) {
    var t;
    let { action: n, triggerType: p, toggled: f, onToggleAction: h } = e,
        b = (e) => () => h(e),
        x = (0, u.c)(n.type, n, p),
        j = null == (t = n.metadata) ? void 0 : t.channelId,
        _ = (0, i.e7)([d.default, c.Z, o.Z], () => {
            let e = o.Z.getChannel(j);
            return null == e ? null : (0, s.F6)(e, d.default, c.Z);
        }, [j]);
    if (null == x) return null;
    let { headerText: v, descriptionText: O, icon: C } = x;
    return (0, r.jsxs)("div", {
        className: m.actionContainer,
        children: [
            (0, r.jsx)("div", {
                className: m.actionIconContainer,
                children: (0, r.jsx)(C, {
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
                        children: v,
                    }),
                    (0, r.jsx)(a.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        children: O,
                    }),
                    f &&
                        (0, r.jsxs)(a.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: [
                                null != _ && g.intl.format(g.t["8Sr/ar"], { channelName: _ }),
                                (0, r.jsx)(a.P3F, {
                                    onClick: b(!0),
                                    className: m.editChannel,
                                    tag: "span",
                                    role: "link",
                                    children: g.intl.string(g.t["3gUsJb"]),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(l.$q, {
                    value: !!f,
                    onChange: b(!1),
                    className: m.__invalid_actionCheckbox,
                }),
            }),
        ],
    });
}
