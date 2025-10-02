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
    g = n(464992);
function p(e) {
    var t;
    let { action: n, triggerType: p, toggled: f, onToggleAction: h } = e,
        b = (e) => () => h(e),
        x = (0, u.c)(n.type, n, p),
        j = null == (t = n.metadata) ? void 0 : t.channelId,
        v = (0, i.e7)([d.default, c.Z, o.Z], () => {
            let e = o.Z.getChannel(j);
            return null == e ? null : (0, a.F6)(e, d.default, c.Z);
        }, [j]);
    if (null == x) return null;
    let { headerText: _, descriptionText: O, icon: y } = x;
    return (0, r.jsxs)("div", {
        className: g.actionContainer,
        children: [
            (0, r.jsx)("div", {
                className: g.actionIconContainer,
                children: (0, r.jsx)(y, {
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
                        children: _,
                    }),
                    (0, r.jsx)(s.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        children: O,
                    }),
                    f &&
                        (0, r.jsxs)(s.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: [
                                null != v && m.intl.format(m.t["8Sr/am"], { channelName: v }),
                                (0, r.jsx)(s.P3F, {
                                    onClick: b(!0),
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
                    onChange: b(!1),
                    className: g.__invalid_actionCheckbox,
                }),
            }),
        ],
    });
}
