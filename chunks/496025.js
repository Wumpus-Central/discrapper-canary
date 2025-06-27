n.d(t, { Z: () => T }), n(388685), n(35282);
var a = n(255367),
    r = n(73800),
    l = n(120356),
    i = n.n(l),
    s = n(602715),
    o = n(442837),
    c = n(481060),
    d = n(493683),
    u = n(43267),
    m = n(933557),
    p = n(258732),
    h = n(592125),
    x = n(699516),
    b = n(594174),
    f = n(55589),
    v = n(630388),
    _ = n(98357),
    g = n(432877),
    j = n(246992),
    y = n(894257),
    C = n(750540),
    N = n(616257);
function O() {
    var e;
    let t = (0, o.Wu)([f.Z], () => f.Z.getSortedChannels()[1]),
        [n, l] = r.useState(t.length > 0 ? t[0].channelId : void 0),
        { selectedChannel: i, options: d } = (0, o.cj)([h.Z, b.default, x.Z], () => ({
            selectedChannel: h.Z.getChannel(n),
            options: t.map((e) => {
                let t = h.Z.getChannel(e.channelId);
                return {
                    value: e.channelId,
                    label: null != t ? (0, m.F6)(t, b.default, x.Z) : e.channelId
                };
            })
        })),
        _ = r.useCallback(() => {
            var e;
            if (null == i || !i.isPrivate()) return;
            let t = (0, v.x9)(null != (e = i.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
            p.Z.updatePrivateChannelRecipientFlags(i.id, t);
        }, [i]),
        g = null != i && !!i.isPrivate() && (0, v.yE)(null != (e = i.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.Text, {
                variant: 'text-md/semibold',
                children: 'In-Game NUX Message for DMs'
            }),
            (0, a.jsxs)('div', {
                className: C.inGameNuxContainer,
                children: [
                    (0, a.jsx)(c.VcW, {
                        wrapperClassName: C.search,
                        options: d,
                        placeholder: 'Select DM',
                        value: n,
                        onChange: l,
                        renderOptionPrefix: (e) => {
                            if (null == e) return null;
                            let t = h.Z.getChannel(e.value);
                            return null == t
                                ? null
                                : (0, a.jsx)(c.qEK, {
                                      src: (0, u.x)(t),
                                      'aria-hidden': !0,
                                      size: c.EFr.SIZE_16
                                  });
                        },
                        popoutLayerContext: j.O$
                    }),
                    (0, a.jsx)(c.zxk, {
                        size: c.zxk.Sizes.SMALL,
                        onClick: _,
                        disabled: null == n,
                        children: g ? 'Clear NUX Flag' : 'Set NUX Flag'
                    })
                ]
            })
        ]
    });
}
function E() {
    let e = r.useCallback(() => {
        d.Z.openPrivateChannel({ recipientIds: [y.I] });
    }, []);
    return (0, a.jsx)(c.zxk, {
        size: c.zxk.Sizes.SMALL,
        onClick: e,
        children: 'Open System DM'
    });
}
function T() {
    let e = g.ZP.allByCategory(g.zU.MESSAGING).map((e) => {
        let [t, n, { label: r }] = e;
        return (0, a.jsx)(
            c.j7V,
            {
                value: n,
                onChange: (e) => (0, _.Z)(t, e),
                hideBorder: !0,
                className: C.switch,
                children: r
            },
            t
        );
    });
    return (0, a.jsxs)('div', {
        className: i()(N.panel, C.panel),
        children: [e, (0, a.jsx)('div', { className: C.divider }), (0, a.jsx)(O, {}), (0, a.jsx)('div', { className: C.divider }), (0, a.jsx)(E, {})]
    });
}
