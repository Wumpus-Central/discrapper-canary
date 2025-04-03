n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(933557),
    l = n(592125),
    o = n(699516),
    c = n(594174),
    d = n(556012),
    u = n(388032),
    m = n(467397);
function g(e) {
    var t;
    let { action: n, triggerType: g, toggled: p, onToggleAction: h } = e,
        f = (e) => () => h(e),
        b = (0, d.c)(n.type, n, g),
        x = null == (t = n.metadata) ? void 0 : t.channelId,
        j = (0, i.e7)(
            [c.default, o.Z, l.Z],
            () => {
                let e = l.Z.getChannel(x);
                return null == e ? null : (0, a.F6)(e, c.default, o.Z);
            },
            [x]
        );
    if (null == b) return null;
    let { headerText: N, descriptionText: _, icon: v } = b;
    return (0, r.jsxs)('div', {
        className: m.actionContainer,
        children: [
            (0, r.jsx)('div', {
                className: m.actionIconContainer,
                children: (0, r.jsx)(v, {
                    size: 'md',
                    color: 'currentColor',
                    className: m.actionIcon
                })
            }),
            (0, r.jsxs)('div', {
                className: m.actionTextContainer,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-sm/semibold',
                        children: N
                    }),
                    (0, r.jsx)(s.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: _
                    }),
                    p &&
                        (0, r.jsxs)(s.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: [
                                null != j && u.NW.format(u.t['8Sr/am'], { channelName: j }),
                                (0, r.jsx)(s.P3F, {
                                    onClick: f(!0),
                                    className: m.editChannel,
                                    tag: 'span',
                                    role: 'link',
                                    children: u.NW.string(u.t['3gUsJS'])
                                })
                            ]
                        })
                ]
            }),
            (0, r.jsx)('div', {
                children: (0, r.jsx)(s.XZJ, {
                    type: s.XZJ.Types.INVERTED,
                    value: p,
                    onChange: f(!1),
                    className: m.__invalid_actionCheckbox
                })
            })
        ]
    });
}
