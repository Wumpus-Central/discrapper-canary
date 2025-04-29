e.d(n, {
    F: () => _,
    Z: () => g
}),
    e(388685);
var i = e(255367),
    l = e(73800),
    s = e(442837),
    a = e(481060),
    r = e(493683),
    d = e(881052),
    c = e(600164),
    o = e(313201),
    C = e(565138),
    m = e(984933),
    p = e(430824),
    u = e(388032),
    L = e(78389);
function _(t) {
    let { createdGuildId: n, hasFooter: e = !0, onClose: _, onChannelPromptCompleted: g, isSlideReady: x } = t,
        [T, E] = l.useState(''),
        [h, I] = l.useState(null),
        [G, D] = l.useState(!1),
        y = (0, o.Dt)(),
        U = (0, s.e7)([p.Z], () => p.Z.getGuild(n), [n]),
        z = l.useRef(null);
    l.useEffect(() => {
        var t;
        x && (null == (t = z.current) || t.focus());
    }, [x]);
    let N = l.useCallback(
            async (t) => {
                if ((t.preventDefault(), null == U)) return;
                D(!0), I(null);
                let n = m.ZP.getDefaultChannel(U.id);
                try {
                    let t = u.intl.formatToPlainString(u.t.V4lepK, { topic: T });
                    await r.Z.createTextChannel(U.id, T, null == n ? void 0 : n.parent_id, t), g();
                } catch (t) {
                    I(new d.yZ(t));
                }
                D(!1);
            },
            [U, T, g]
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
                    className: L.skipButton,
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
                    className: L.header,
                    direction: c.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        null != U && (0, i.jsx)(C.Z, { guild: U }),
                        (0, i.jsx)(a.Text, {
                            className: L.guildName,
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: null == U ? void 0 : U.name
                        }),
                        (0, i.jsx)(a.X6q, {
                            className: L.title,
                            variant: 'heading-sm/semibold',
                            children: u.intl.string(u.t['8VRa7e'])
                        }),
                        (0, i.jsx)(a.Text, {
                            className: L.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: u.intl.string(u.t['+855Pj'])
                        }),
                        null != _ &&
                            (0, i.jsx)(a.olH, {
                                className: L.closeButton,
                                onClick: _
                            })
                    ]
                }),
                (0, i.jsxs)(a.hzk, {
                    className: L.channelPrompt,
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
                                    inputRef: z
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
    let { content: n } = _(t);
    return n;
}
