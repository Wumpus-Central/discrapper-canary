(a.d(t, { Z: () => E }), a(388685), a(35282));
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(602715),
    o = a(442837),
    c = a(481060),
    d = a(493683),
    u = a(43267),
    m = a(933557),
    p = a(258732),
    x = a(592125),
    h = a(699516),
    b = a(594174),
    f = a(55589),
    v = a(630388),
    g = a(98357),
    j = a(432877),
    _ = a(246992),
    y = a(894257),
    C = a(750540),
    O = a(616257);
function T() {
    var e;
    let t = (0, o.Wu)([f.Z], () => f.Z.getSortedChannels()[1]),
        [a, l] = r.useState(t.length > 0 ? t[0].channelId : void 0),
        { selectedChannel: i, options: d } = (0, o.cj)([x.Z, b.default, h.Z], () => ({
            selectedChannel: x.Z.getChannel(a),
            options: t.map((e) => {
                let t = x.Z.getChannel(e.channelId);
                return {
                    value: e.channelId,
                    label: null != t ? (0, m.F6)(t, b.default, h.Z) : e.channelId
                };
            })
        })),
        g = r.useCallback(() => {
            var e;
            if (null == i || !i.isPrivate()) return;
            let t = (0, v.x9)(null != (e = i.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
            p.Z.updatePrivateChannelRecipientFlags(i.id, t);
        }, [i]),
        j = null != i && !!i.isPrivate() && (0, v.yE)(null != (e = i.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(c.Text, {
                variant: 'text-md/semibold',
                children: 'In-Game NUX Message for DMs'
            }),
            (0, n.jsxs)('div', {
                className: C.inGameNuxContainer,
                children: [
                    (0, n.jsx)(c.VcW, {
                        wrapperClassName: C.search,
                        options: d,
                        placeholder: 'Select DM',
                        value: a,
                        onChange: l,
                        renderOptionPrefix: (e) => {
                            if (null == e) return null;
                            let t = x.Z.getChannel(e.value);
                            return null == t
                                ? null
                                : (0, n.jsx)(c.qEK, {
                                      src: (0, u.x)(t),
                                      'aria-hidden': !0,
                                      size: c.EFr.SIZE_16
                                  });
                        },
                        popoutLayerContext: _.O$
                    }),
                    (0, n.jsx)(c.zxk, {
                        variant: 'primary',
                        size: 'sm',
                        text: j ? 'Clear NUX Flag' : 'Set NUX Flag',
                        onClick: g,
                        disabled: null == a
                    })
                ]
            })
        ]
    });
}
function N() {
    let e = r.useCallback(() => {
        d.Z.openPrivateChannel({ recipientIds: [y.I] });
    }, []);
    return (0, n.jsx)(c.zxk, {
        variant: 'primary',
        size: 'sm',
        text: 'Open System DM',
        onClick: e
    });
}
function E() {
    let e = j.ZP.allByCategory(j.zU.MESSAGING).map((e) => {
        let [t, a, { label: r }] = e;
        return (0, n.jsx)(
            c.j7V,
            {
                value: a,
                onChange: (e) => (0, g.Z)(t, e),
                hideBorder: !0,
                className: C.switch,
                children: r
            },
            t
        );
    });
    return (0, n.jsxs)('div', {
        className: i()(O.panel, C.panel),
        children: [e, (0, n.jsx)('div', { className: C.divider }), (0, n.jsx)(T, {}), (0, n.jsx)('div', { className: C.divider }), (0, n.jsx)(N, {})]
    });
}
