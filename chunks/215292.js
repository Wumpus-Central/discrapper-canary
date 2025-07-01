(e.d(n, {
    F: () => L,
    Z: () => g
}),
    e(388685));
var i = e(255367),
    l = e(73800),
    s = e(442837),
    a = e(481060),
    r = e(493683),
    d = e(881052),
    c = e(600164),
    o = e(313201),
    m = e(565138),
    C = e(984933),
    p = e(430824),
    u = e(388032),
    _ = e(78389);
function L(t) {
    let { createdGuildId: n, hasFooter: e = !0, onClose: L, onChannelPromptCompleted: g, isSlideReady: x } = t,
        [T, E] = l.useState(''),
        [h, I] = l.useState(null),
        [G, D] = l.useState(!1),
        y = (0, o.Dt)(),
        z = (0, s.e7)([p.Z], () => p.Z.getGuild(n), [n]),
        U = l.useRef(null);
    l.useEffect(() => {
        var t;
        x && (null == (t = U.current) || t.focus());
    }, [x]);
    let N = l.useCallback(
            async (t) => {
                if ((t.preventDefault(), null == z)) return;
                (D(!0), I(null));
                let n = C.ZP.getDefaultChannel(z.id);
                try {
                    let t = u.intl.formatToPlainString(u.t.V4lepK, { topic: T });
                    (await r.Z.createTextChannel(z.id, T, null == n ? void 0 : n.parent_id, t), g());
                } catch (t) {
                    I(new d.yZ(t));
                }
                D(!1);
            },
            [z, T, g]
        ),
        j = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.zxk, {
                    color: a.zxk.Colors.BRAND,
                    onClick: N,
                    disabled: 0 === T.length,
                    submitting: G,
                    children: u.intl.string(u.t.i4jeWV)
                }),
                (0, i.jsx)(a.zxk, {
                    className: _.skipButton,
                    look: a.zxk.Looks.BLANK,
                    size: a.zxk.Sizes.MIN,
                    onClick: g,
                    children: u.intl.string(u.t['5WxrcX'])
                })
            ]
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(a.xBx, {
                    className: _.header,
                    direction: c.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        null != z && (0, i.jsx)(m.Z, { guild: z }),
                        (0, i.jsx)(a.Text, {
                            className: _.guildName,
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: null == z ? void 0 : z.name
                        }),
                        (0, i.jsx)(a.X6q, {
                            className: _.title,
                            variant: 'heading-sm/semibold',
                            children: u.intl.string(u.t['8VRa7e'])
                        }),
                        (0, i.jsx)(a.Text, {
                            className: _.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: u.intl.string(u.t['+855Pj'])
                        }),
                        null != L &&
                            (0, i.jsx)(a.olH, {
                                className: _.closeButton,
                                onClick: L
                            })
                    ]
                }),
                (0, i.jsxs)(a.hzk, {
                    className: _.channelPrompt,
                    children: [
                        (0, i.jsx)('form', {
                            onSubmit: N,
                            children: (0, i.jsx)(a.xJW, {
                                title: u.intl.string(u.t.bY20tb),
                                tag: 'label',
                                htmlFor: y,
                                error: null == h ? void 0 : h.getFieldMessage('name'),
                                children: (0, i.jsx)(a.oil, {
                                    type: 'text',
                                    value: T,
                                    id: y,
                                    onChange: E,
                                    placeholder: u.intl.string(u.t.xGOYAw),
                                    inputRef: U
                                })
                            })
                        }),
                        null != h &&
                            0 === Object.keys(h.fields).length &&
                            (0, i.jsx)(a.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-danger',
                                children: h.message
                            })
                    ]
                }),
                e && (0, i.jsx)(a.mzw, { children: j })
            ]
        }),
        footer: j
    };
}
function g(t) {
    let { content: n } = L(t);
    return n;
}
