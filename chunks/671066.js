n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(933557),
    s = n(592125),
    o = n(699516),
    c = n(594174),
    d = n(556012),
    u = n(388032),
    g = n(464992);
function m(e) {
    var t;
    let { action: n, triggerType: m, toggled: p, onToggleAction: f } = e,
        h = (e) => () => f(e),
        b = (0, d.c)(n.type, n, m),
        x = null == (t = n.metadata) ? void 0 : t.channelId,
        j = (0, i.e7)([c.default, o.Z, s.Z], () => {
            let e = s.Z.getChannel(x);
            return null == e ? null : (0, a.F6)(e, c.default, o.Z);
        }, [x]);
    if (null == b) return null;
    let { headerText: _, descriptionText: v, icon: O } = b;
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
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-sm/semibold",
                        children: _,
                    }),
                    (0, r.jsx)(l.Text, {
                        color: "interactive-normal",
                        variant: "text-xs/medium",
                        children: v,
                    }),
                    p &&
                        (0, r.jsxs)(l.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: [
                                null != j && u.intl.format(u.t["8Sr/ar"], { channelName: j }),
                                (0, r.jsx)(l.P3F, {
                                    onClick: h(!0),
                                    className: g.editChannel,
                                    tag: "span",
                                    role: "link",
                                    children: u.intl.string(u.t["3gUsJb"]),
                                }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)("div", {
                children: (0, r.jsx)(l.P3F, {
                    onClick: b.isEditable ? h(!1) : void 0,
                    children: (0, r.jsx)(l.FZ5, {
                        checked: p,
                        disabled: !b.isEditable,
                    }),
                }),
            }),
        ],
    });
}
