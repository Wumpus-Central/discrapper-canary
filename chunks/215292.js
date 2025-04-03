n.d(t, {
    F: () => L,
    Z: () => _
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    a = n(442837),
    l = n(481060),
    r = n(493683),
    d = n(881052),
    c = n(600164),
    o = n(313201),
    C = n(565138),
    m = n(984933),
    p = n(430824),
    N = n(388032),
    u = n(78389);
function L(e) {
    let { createdGuildId: t, hasFooter: n = !0, onClose: L, onChannelPromptCompleted: _, isSlideReady: g } = e,
        [x, T] = s.useState(''),
        [E, h] = s.useState(null),
        [I, G] = s.useState(!1),
        W = (0, o.Dt)(),
        D = (0, a.e7)([p.Z], () => p.Z.getGuild(t), [t]),
        y = s.useRef(null);
    s.useEffect(() => {
        var e;
        g && (null == (e = y.current) || e.focus());
    }, [g]);
    let U = s.useCallback(
            async (e) => {
                if ((e.preventDefault(), null == D)) return;
                G(!0), h(null);
                let t = m.ZP.getDefaultChannel(D.id);
                try {
                    let e = N.NW.formatToPlainString(N.t.V4lepK, { topic: x });
                    await r.Z.createTextChannel(D.id, x, null == t ? void 0 : t.parent_id, e), _();
                } catch (e) {
                    h(new d.yZ(e));
                }
                G(!1);
            },
            [D, x, _]
        ),
        z = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.zxk, {
                    color: l.zxk.Colors.BRAND,
                    onClick: U,
                    disabled: 0 === x.length,
                    submitting: I,
                    children: N.NW.string(N.t.i4jeWV)
                }),
                (0, i.jsx)(l.zxk, {
                    className: u.skipButton,
                    look: l.zxk.Looks.BLANK,
                    size: l.zxk.Sizes.MIN,
                    onClick: _,
                    children: N.NW.string(N.t['5WxrcX'])
                })
            ]
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(l.xBx, {
                    className: u.header,
                    direction: c.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        null != D && (0, i.jsx)(C.Z, { guild: D }),
                        (0, i.jsx)(l.Text, {
                            className: u.guildName,
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: null == D ? void 0 : D.name
                        }),
                        (0, i.jsx)(l.X6q, {
                            className: u.title,
                            variant: 'heading-sm/semibold',
                            children: N.NW.string(N.t['8VRa7e'])
                        }),
                        (0, i.jsx)(l.Text, {
                            className: u.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: N.NW.string(N.t['+855Pj'])
                        }),
                        null != L &&
                            (0, i.jsx)(l.olH, {
                                className: u.closeButton,
                                onClick: L
                            })
                    ]
                }),
                (0, i.jsxs)(l.hzk, {
                    className: u.channelPrompt,
                    children: [
                        (0, i.jsx)('form', {
                            onSubmit: U,
                            children: (0, i.jsx)(l.xJW, {
                                title: N.NW.string(N.t.bY20tb),
                                tag: 'label',
                                htmlFor: W,
                                error: null == E ? void 0 : E.getFieldMessage('name'),
                                children: (0, i.jsx)(l.oil, {
                                    type: 'text',
                                    value: x,
                                    id: W,
                                    onChange: T,
                                    placeholder: N.NW.string(N.t.xGOYAw),
                                    inputRef: y
                                })
                            })
                        }),
                        null != E &&
                            0 === Object.keys(E.fields).length &&
                            (0, i.jsx)(l.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-danger',
                                children: E.message
                            })
                    ]
                }),
                n && (0, i.jsx)(l.mzw, { children: z })
            ]
        }),
        footer: z
    };
}
function _(e) {
    let { content: t } = L(e);
    return t;
}
