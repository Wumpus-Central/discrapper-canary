(e.d(n, {
    F: () => g,
    Z: () => x
}),
    e(388685));
var i = e(255367),
    l = e(73800),
    a = e(442837),
    s = e(755721),
    r = e(481060),
    d = e(493683),
    c = e(881052),
    o = e(600164),
    m = e(313201),
    C = e(565138),
    p = e(984933),
    u = e(430824),
    _ = e(388032),
    L = e(78389);
function g(t) {
    let { createdGuildId: n, hasFooter: e = !0, onClose: g, onChannelPromptCompleted: x, isSlideReady: T } = t,
        [E, h] = l.useState(''),
        [I, G] = l.useState(null),
        [y, D] = l.useState(!1),
        z = (0, m.Dt)(),
        U = (0, a.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        j = l.useRef(null);
    l.useEffect(() => {
        var t;
        T && (null == (t = j.current) || t.focus());
    }, [T]);
    let N = l.useCallback(
            async (t) => {
                if ((t.preventDefault(), null == U)) return;
                (D(!0), G(null));
                let n = p.ZP.getDefaultChannel(U.id);
                try {
                    let t = _.intl.formatToPlainString(_.t.V4lepK, { topic: E });
                    (await d.Z.createTextChannel(U.id, E, null == n ? void 0 : n.parent_id, t), x());
                } catch (t) {
                    G(new c.yZ(t));
                }
                D(!1);
            },
            [U, E, x]
        ),
        f = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.zxk, {
                    variant: 'primary',
                    text: _.intl.string(_.t.i4jeWV),
                    onClick: N,
                    disabled: 0 === E.length,
                    loading: y
                }),
                (0, i.jsx)(s.zx, {
                    className: L.skipButton,
                    look: s.zx.Looks.BLANK,
                    size: s.zx.Sizes.MIN,
                    onClick: x,
                    children: _.intl.string(_.t['5WxrcX'])
                })
            ]
        });
    return {
        content: (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(r.xBx, {
                    className: L.header,
                    direction: o.Z.Direction.VERTICAL,
                    separator: !1,
                    children: [
                        null != U && (0, i.jsx)(C.Z, { guild: U }),
                        (0, i.jsx)(r.Text, {
                            className: L.guildName,
                            color: 'header-primary',
                            variant: 'text-sm/semibold',
                            children: null == U ? void 0 : U.name
                        }),
                        (0, i.jsx)(r.X6q, {
                            className: L.title,
                            variant: 'heading-sm/semibold',
                            children: _.intl.string(_.t['8VRa7e'])
                        }),
                        (0, i.jsx)(r.Text, {
                            className: L.subtitle,
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            children: _.intl.string(_.t['+855Pj'])
                        }),
                        null != g &&
                            (0, i.jsx)(r.olH, {
                                className: L.closeButton,
                                onClick: g
                            })
                    ]
                }),
                (0, i.jsxs)(r.hzk, {
                    className: L.channelPrompt,
                    children: [
                        (0, i.jsx)('form', {
                            onSubmit: N,
                            children: (0, i.jsx)(r.xJW, {
                                title: _.intl.string(_.t.bY20tb),
                                tag: 'label',
                                htmlFor: z,
                                error: null == I ? void 0 : I.getFieldMessage('name'),
                                children: (0, i.jsx)(r.oil, {
                                    type: 'text',
                                    value: E,
                                    id: z,
                                    onChange: h,
                                    placeholder: _.intl.string(_.t.xGOYAw),
                                    inputRef: j
                                })
                            })
                        }),
                        null != I &&
                            0 === Object.keys(I.fields).length &&
                            (0, i.jsx)(r.Text, {
                                variant: 'text-xs/normal',
                                color: 'text-danger',
                                children: I.message
                            })
                    ]
                }),
                e && (0, i.jsx)(r.mzw, { children: f })
            ]
        }),
        footer: f
    };
}
function x(t) {
    let { content: n } = g(t);
    return n;
}
