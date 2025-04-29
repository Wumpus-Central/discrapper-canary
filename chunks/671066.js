n.d(t, { Z: () => g });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    s = n(933557),
    a = n(592125),
    o = n(699516),
    c = n(594174),
    u = n(556012),
    d = n(388032),
    m = n(467397);
function g(e) {
    var t;
    let { action: n, triggerType: g, toggled: p, onToggleAction: h } = e,
        f = (e) => () => h(e),
        x = (0, u.c)(n.type, n, g),
        b = null == (t = n.metadata) ? void 0 : t.channelId,
        j = (0, i.e7)(
            [c.default, o.Z, a.Z],
            () => {
                let e = a.Z.getChannel(b);
                return null == e ? null : (0, s.F6)(e, c.default, o.Z);
            },
            [b]
        );
    if (null == x) return null;
    let { headerText: _, descriptionText: v, icon: O } = x;
    return (0, r.jsxs)('div', {
        className: m.actionContainer,
        children: [
            (0, r.jsx)('div', {
                className: m.actionIconContainer,
                children: (0, r.jsx)(O, {
                    size: 'md',
                    color: 'currentColor',
                    className: m.actionIcon
                })
            }),
            (0, r.jsxs)('div', {
                className: m.actionTextContainer,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-sm/semibold',
                        children: _
                    }),
                    (0, r.jsx)(l.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: v
                    }),
                    p &&
                        (0, r.jsxs)(l.Text, {
                            color: 'text-muted',
                            variant: 'text-xs/medium',
                            children: [
                                null != j && d.intl.format(d.t['8Sr/am'], { channelName: j }),
                                (0, r.jsx)(l.P3F, {
                                    onClick: f(!0),
                                    className: m.editChannel,
                                    tag: 'span',
                                    role: 'link',
                                    children: d.intl.string(d.t['3gUsJS'])
                                })
                            ]
                        })
                ]
            }),
            (0, r.jsx)('div', {
                children: (0, r.jsx)(l.XZJ, {
                    type: l.XZJ.Types.INVERTED,
                    value: p,
                    onChange: f(!1),
                    className: m.__invalid_actionCheckbox
                })
            })
        ]
    });
}
