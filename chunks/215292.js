e.d(n, {
    F: function () {
        return g;
    },
    Z: function () {
        return _;
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
    L = e(217540);
function g(t) {
    let { createdGuildId: n, hasFooter: e = !0, onClose: g, onChannelPromptCompleted: _, isSlideReady: T } = t,
        [E, I] = l.useState(''),
        [x, h] = l.useState(null),
        [G, f] = l.useState(!1),
        D = (0, c.Dt)(),
        M = (0, a.e7)([m.Z], () => m.Z.getGuild(n), [n]),
        U = l.useRef(null);
    l.useEffect(() => {
        var t;
        T && (null === (t = U.current) || void 0 === t || t.focus());
    }, [T]);
    let y = l.useCallback(
            async (t) => {
                if ((t.preventDefault(), null == M)) return;
                f(!0), h(null);
                let n = C.ZP.getDefaultChannel(M.id);
                try {
                    let t = p.intl.formatToPlainString(p.t.V4lepK, { topic: E });
                    await r.Z.createTextChannel(M.id, E, null == n ? void 0 : n.parent_id, t), _();
                } catch (t) {
                    h(new d.yZ(t));
                }
                f(!1);
            },
            [M, E, _]
        ),
        N = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.Button, {
                    color: s.Button.Colors.BRAND,
                    onClick: y,
                    disabled: 0 === E.length,
                    submitting: G,
                    children: p.intl.string(p.t.i4jeWV)
                }),
                (0, i.jsx)(s.Button, {
                    className: L.skipButton,
                    look: s.Button.Looks.BLANK,
                    size: s.Button.Sizes.MIN,
                    onClick: _,
                    children: p.intl.string(p.t['5WxrcX'])
                })
            ]
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(s.ModalHeader, {
                    className: L.header,
                    direction: o.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        null != M && (0, i.jsx)(u.Z, { guild: M }),
                        (0, i.jsx)(s.Text, {
                            className: L.guildName,
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: null == M ? void 0 : M.name
                        }),
                        (0, i.jsx)(s.Heading, {
                            className: L.title,
                            variant: 'heading-sm/semibold',
                            children: p.intl.string(p.t['8VRa7e'])
                        }),
                        (0, i.jsx)(s.Text, {
                            className: L.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: p.intl.string(p.t['+855Pj'])
                        }),
                        null != g &&
                            (0, i.jsx)(s.ModalCloseButton, {
                                className: L.closeButton,
                                onClick: g
                            })
                    ]
                }),
                (0, i.jsxs)(s.ModalContent, {
                    className: L.channelPrompt,
                    children: [
                        (0, i.jsx)('form', {
                            onSubmit: y,
                            children: (0, i.jsx)(s.FormItem, {
                                title: p.intl.string(p.t.bY20tb),
                                tag: 'label',
                                htmlFor: D,
                                error: null == x ? void 0 : x.getFieldMessage('name'),
                                children: (0, i.jsx)(s.TextInput, {
                                    type: 'text',
                                    value: E,
                                    id: D,
                                    onChange: I,
                                    placeholder: p.intl.string(p.t.xGOYAw),
                                    inputRef: U
                                })
                            })
                        }),
                        null != x &&
                            0 === Object.keys(x.fields).length &&
                            (0, i.jsx)(s.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-danger',
                                children: x.message
                            })
                    ]
                }),
                e && (0, i.jsx)(s.ModalFooter, { children: N })
            ]
        }),
        footer: N
    };
}
function _(t) {
    let { content: n } = g(t);
    return n;
}
