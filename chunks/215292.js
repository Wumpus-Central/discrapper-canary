e.d(n, {
    F: function () {
        return _;
    },
    Z: function () {
        return L;
    }
}),
    e(47120);
var i = e(200651),
    l = e(192379),
    a = e(442837),
    s = e(481060),
    r = e(493683),
    d = e(881052),
    o = e(600164),
    c = e(313201),
    u = e(565138),
    C = e(984933),
    m = e(430824),
    p = e(388032),
    g = e(217540);
function _(t) {
    let { createdGuildId: n, hasFooter: e = !0, onClose: _, onChannelPromptCompleted: L, isSlideReady: T } = t,
        [x, E] = l.useState(''),
        [I, h] = l.useState(null),
        [G, D] = l.useState(!1),
        f = (0, c.Dt)(),
        y = (0, a.e7)([m.Z], () => m.Z.getGuild(n), [n]),
        M = l.useRef(null);
    l.useEffect(() => {
        var t;
        T && (null === (t = M.current) || void 0 === t || t.focus());
    }, [T]);
    let U = l.useCallback(
            async (t) => {
                if ((t.preventDefault(), null == y)) return;
                D(!0), h(null);
                let n = C.ZP.getDefaultChannel(y.id);
                try {
                    let t = p.intl.formatToPlainString(p.t.V4lepK, { topic: x });
                    await r.Z.createTextChannel(y.id, x, null == n ? void 0 : n.parent_id, t), L();
                } catch (t) {
                    h(new d.yZ(t));
                }
                D(!1);
            },
            [y, x, L]
        ),
        N = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.Button, {
                    color: s.Button.Colors.BRAND,
                    onClick: U,
                    disabled: 0 === x.length,
                    submitting: G,
                    children: p.intl.string(p.t.i4jeWV)
                }),
                (0, i.jsx)(s.Button, {
                    className: g.skipButton,
                    look: s.Button.Looks.BLANK,
                    size: s.Button.Sizes.MIN,
                    onClick: L,
                    children: p.intl.string(p.t['5WxrcX'])
                })
            ]
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(s.ModalHeader, {
                    className: g.header,
                    direction: o.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        null != y && (0, i.jsx)(u.Z, { guild: y }),
                        (0, i.jsx)(s.Text, {
                            className: g.guildName,
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: null == y ? void 0 : y.name
                        }),
                        (0, i.jsx)(s.Heading, {
                            className: g.title,
                            variant: 'heading-sm/semibold',
                            children: p.intl.string(p.t['8VRa7e'])
                        }),
                        (0, i.jsx)(s.Text, {
                            className: g.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: p.intl.string(p.t['+855Pj'])
                        }),
                        null != _ &&
                            (0, i.jsx)(s.ModalCloseButton, {
                                className: g.closeButton,
                                onClick: _
                            })
                    ]
                }),
                (0, i.jsxs)(s.ModalContent, {
                    className: g.channelPrompt,
                    children: [
                        (0, i.jsx)('form', {
                            onSubmit: U,
                            children: (0, i.jsx)(s.FormItem, {
                                title: p.intl.string(p.t.bY20tb),
                                tag: 'label',
                                htmlFor: f,
                                error: null == I ? void 0 : I.getFieldMessage('name'),
                                children: (0, i.jsx)(s.TextInput, {
                                    type: 'text',
                                    value: x,
                                    id: f,
                                    onChange: E,
                                    placeholder: p.intl.string(p.t.xGOYAw),
                                    inputRef: M
                                })
                            })
                        }),
                        null != I &&
                            0 === Object.keys(I.fields).length &&
                            (0, i.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-danger',
                                children: I.message
                            })
                    ]
                }),
                e && (0, i.jsx)(s.ModalFooter, { children: N })
            ]
        }),
        footer: N
    };
}
function L(t) {
    let { content: n } = _(t);
    return n;
}
