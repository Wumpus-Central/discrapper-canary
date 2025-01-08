n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(430824),
    s = n(496675),
    o = n(556012),
    c = n(273504),
    d = n(981631),
    u = n(590433),
    m = n(388032),
    h = n(421273);
function g(e) {
    var t;
    let { action: n, triggerType: g, guildId: x, toggled: p, onToggleAction: f } = e,
        C = (e) => () => f(e),
        v = (0, o.c)(n.type, n, g),
        _ = null === (t = n.metadata) || void 0 === t ? void 0 : t.durationSeconds,
        N = null != _ ? (0, u.L9)(_) : null,
        I = (0, r.e7)([s.Z, a.Z], () => s.Z.can(d.Plq.MODERATE_MEMBERS, a.Z.getGuild(x)), [x]);
    if (null == v) return null;
    let { headerText: T, descriptionText: j, icon: b } = v;
    return (0, i.jsxs)('div', {
        className: h.actionContainer,
        children: [
            (0, i.jsx)('div', {
                className: h.actionIconContainer,
                children: (0, i.jsx)(b, {
                    size: 'md',
                    color: 'currentColor',
                    className: h.actionIcon
                })
            }),
            (0, i.jsxs)('div', {
                className: h.actionTextContainer,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: 'heading-sm/semibold',
                        children: T
                    }),
                    (0, i.jsx)(l.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: j
                    }),
                    p &&
                        (0, i.jsxs)(l.Text, {
                            color: 'interactive-normal',
                            variant: 'text-xs/medium',
                            children: [
                                (function (e, t) {
                                    if (null === t) return null;
                                    if (e === c.fX.MENTION_SPAM) return m.intl.format(m.t.i3lsKC, { friendlyDurationString: t });
                                    return m.intl.format(m.t.mvHxzc, { friendlyDurationString: t });
                                })(g, N),
                                I &&
                                    (0, i.jsx)(l.Clickable, {
                                        onClick: C(!0),
                                        className: h.editChannel,
                                        tag: 'span',
                                        role: 'link',
                                        children: m.intl.string(m.t['0B95RE'])
                                    })
                            ]
                        })
                ]
            }),
            (0, i.jsx)(l.Tooltip, {
                text: m.intl.format(m.t.wx6Vb2, {}),
                'aria-label': m.intl.formatToMarkdownString(m.t.wx6Vb2, {}),
                shouldShow: !I,
                children: (e) =>
                    (0, i.jsx)('div', {
                        ...e,
                        children: (0, i.jsx)(l.Checkbox, {
                            type: l.Checkbox.Types.INVERTED,
                            value: p,
                            onChange: C(!1),
                            disabled: !I,
                            className: h.__invalid_actionCheckbox
                        })
                    })
            })
        ]
    });
}
