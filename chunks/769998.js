n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(430824),
    a = n(496675),
    o = n(556012),
    c = n(273504),
    d = n(981631),
    u = n(590433),
    m = n(388032),
    h = n(112862);
function g(e) {
    var t, n, g;
    let { action: x, triggerType: p, guildId: _, toggled: C, onToggleAction: f } = e,
        v = (e) => () => f(e),
        N = (0, o.c)(x.type, x, p),
        j = null === (t = x.metadata) || void 0 === t ? void 0 : t.durationSeconds,
        I = null != j ? (0, u.L9)(j) : null,
        E = (0, r.e7)([a.Z, s.Z], () => a.Z.can(d.Plq.MODERATE_MEMBERS, s.Z.getGuild(_)), [_]);
    if (null == N) return null;
    let { headerText: b, descriptionText: T, icon: S } = N;
    return (0, i.jsxs)('div', {
        className: h.actionContainer,
        children: [
            (0, i.jsx)('div', {
                className: h.actionIconContainer,
                children: (0, i.jsx)(S, {
                    size: 'md',
                    color: 'currentColor',
                    className: h.actionIcon
                })
            }),
            (0, i.jsxs)('div', {
                className: h.actionTextContainer,
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: 'heading-sm/semibold',
                        children: b
                    }),
                    (0, i.jsx)(l.Text, {
                        color: 'interactive-normal',
                        variant: 'text-xs/medium',
                        children: T
                    }),
                    C &&
                        (0, i.jsxs)(l.Text, {
                            color: 'interactive-normal',
                            variant: 'text-xs/medium',
                            children: [
                                ((n = p), null === (g = I) ? null : n === c.fX.MENTION_SPAM ? m.intl.format(m.t.i3lsKC, { friendlyDurationString: g }) : m.intl.format(m.t.mvHxzc, { friendlyDurationString: g })),
                                E &&
                                    (0, i.jsx)(l.P3F, {
                                        onClick: v(!0),
                                        className: h.editChannel,
                                        tag: 'span',
                                        role: 'link',
                                        children: m.intl.string(m.t['0B95RE'])
                                    })
                            ]
                        })
                ]
            }),
            (0, i.jsx)(l.ua7, {
                text: m.intl.format(m.t.wx6Vb2, {}),
                'aria-label': m.intl.formatToMarkdownString(m.t.wx6Vb2, {}),
                shouldShow: !E,
                children: (e) =>
                    (0, i.jsx)('div', {
                        ...e,
                        children: (0, i.jsx)(l.XZJ, {
                            type: l.XZJ.Types.INVERTED,
                            value: C,
                            onChange: v(!1),
                            disabled: !E,
                            className: h.__invalid_actionCheckbox
                        })
                    })
            })
        ]
    });
}
