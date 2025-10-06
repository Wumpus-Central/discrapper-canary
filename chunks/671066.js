n.d(t, { Z: () => p });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(755721),
    s = n(481060),
    a = n(933557),
    o = n(592125),
    c = n(699516),
    d = n(594174),
    u = n(556012),
    m = n(388032),
    g = n(75765);
function p(e) {
    var t;
    let { action: n, triggerType: p, toggled: f, onToggleAction: h } = e,
        x = (e) => () => h(e),
        b = (0, u.c)(n.type, n, p),
        j = null == (t = n.metadata) ? void 0 : t.channelId,
        _ = (0, i.e7)([d.default, c.Z, o.Z], () => {
            let e = o.Z.getChannel(j);
            return null == e ? null : (0, a.F6)(e, d.default, c.Z);
        }, [j]);
    if (null == b) return null;
    let { headerText: v, descriptionText: C, icon: O } = b;
    return (0, r.jsxs)("div", {
        className: g.actionContainer,
        children: [
            (0, r.jsx)("div", {
                className: g.actionIconContainer,
                children: (0, r.jsx)(O, {
                    size: "md",
                    color: "currentColor",
                    className: g.actionIcon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: g.actionTextContainer,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-sm/semibold",
                        children: v,
                    }),
                    (0, r.jsx)(s.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        children: C,
                    }),
                    f &&
                        (0, r.jsxs)(s.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: [
                                null != _ && m.intl.format(m.t["8Sr/am"], { channelName: _ }),
                                (0, r.jsx)(s.P3F, {
                                    onClick: x(!0),
                                    className: g.editChannel,
                                    tag: "span",
                                    role: "link",
                                    children: m.intl.string(m.t["3gUsJS"]),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(l.VL, {
                    checked: f,
                    onChange: x(!1),
                    className: g.__invalid_actionCheckbox,
                }),
            }),
        ],
    });
}
