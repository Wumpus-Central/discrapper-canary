n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(933557),
    a = n(592125),
    o = n(699516),
    c = n(594174),
    d = n(556012),
    u = n(388032),
    m = n(602303);
function h(e) {
    var t;
    let { action: n, triggerType: h, toggled: g, onToggleAction: x } = e,
        p = (e) => () => x(e),
        _ = (0, d.c)(n.type, n, h),
        C = null === (t = n.metadata) || void 0 === t ? void 0 : t.channelId,
        f = (0, r.e7)(
            [c.default, o.Z, a.Z],
            () => {
                let e = a.Z.getChannel(C);
                return null == e ? null : (0, s.F6)(e, c.default, o.Z);
            },
            [C]
        );
    if (null == _) return null;
    let { headerText: v, descriptionText: N, icon: j } = _;
    return (0, i.jsxs)('div', {
        className: m.actionContainer,
        children: [
            (0, i.jsx)('div', {
                className: m.actionIconContainer,
                children: (0, i.jsx)(j, {
                    size: 'md',
                    color: 'currentColor',
                    className: m.actionIcon
                })
            }),
            (0, i.jsxs)('div', {
                className: m.actionTextContainer,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: 'heading-sm/semibold',
                        children: v
                    }),
                    (0, i.jsx)(l.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: N
                    }),
                    g &&
                        (0, i.jsxs)(l.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: [
                                null != f && u.intl.format(u.t['8Sr/am'], { channelName: f }),
                                (0, i.jsx)(l.P3F, {
                                    onClick: p(!0),
                                    className: m.editChannel,
                                    tag: 'span',
                                    role: 'link',
                                    children: u.intl.string(u.t['3gUsJS'])
                                })
                            ]
                        })
                ]
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(l.XZJ, {
                    type: l.XZJ.Types.INVERTED,
                    value: g,
                    onChange: p(!1),
                    className: m.__invalid_actionCheckbox
                })
            })
        ]
    });
}
