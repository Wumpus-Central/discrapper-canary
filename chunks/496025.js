n.d(t, { Z: () => T }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(602715),
    s = n(442837),
    c = n(481060),
    d = n(43267),
    u = n(933557),
    h = n(258732),
    m = n(592125),
    x = n(699516),
    _ = n(594174),
    p = n(55589),
    f = n(630388),
    b = n(98357),
    g = n(432877),
    v = n(246992),
    j = n(821843),
    C = n(941469);
function N() {
    var e;
    let t = (0, s.Wu)([p.Z], () => p.Z.getSortedChannels()[1]),
        [n, l] = r.useState(t.length > 0 ? t[0].channelId : void 0),
        { selectedChannel: i, options: b } = (0, s.cj)([m.Z, _.default, x.Z], () => ({
            selectedChannel: m.Z.getChannel(n),
            options: t.map((e) => {
                let t = m.Z.getChannel(e.channelId);
                return {
                    value: e.channelId,
                    label: null != t ? (0, u.F6)(t, _.default, x.Z) : e.channelId
                };
            })
        })),
        g = r.useCallback(() => {
            var e;
            if (null == i || !i.isPrivate()) return;
            let t = (0, f.x9)(null !== (e = i.recipientFlags) && void 0 !== e ? e : 0, o.V.DISMISSED_IN_GAME_MESSAGE_NUX);
            h.Z.updatePrivateChannelRecipientFlags(i.id, t);
        }, [i]),
        C = null != i && !!i.isPrivate() && (0, f.yE)(null !== (e = i.recipientFlags) && void 0 !== e ? e : 0, o.V.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(c.Text, {
                variant: 'text-md/semibold',
                children: 'In-Game NUX Message for DMs'
            }),
            (0, a.jsxs)('div', {
                className: j.inGameNuxContainer,
                children: [
                    (0, a.jsx)(c.VcW, {
                        wrapperClassName: j.search,
                        options: b,
                        placeholder: 'Select DM',
                        value: n,
                        onChange: l,
                        renderOptionPrefix: (e) => {
                            if (null == e) return null;
                            let t = m.Z.getChannel(e.value);
                            return null == t
                                ? null
                                : (0, a.jsx)(c.qEK, {
                                      src: (0, d.x)(t),
                                      'aria-hidden': !0,
                                      size: c.EFr.SIZE_16
                                  });
                        },
                        popoutLayerContext: v.O$
                    }),
                    (0, a.jsx)(c.zxk, {
                        size: c.zxk.Sizes.SMALL,
                        onClick: g,
                        disabled: null == n,
                        children: C ? 'Clear NUX Flag' : 'Set NUX Flag'
                    })
                ]
            })
        ]
    });
}
function T() {
    let e = g.ZP.allByCategory(g.zU.MESSAGING).map((e) => {
        let [t, n, { label: r }] = e;
        return (0, a.jsx)(
            c.j7V,
            {
                value: n,
                onChange: (e) => (0, b.Z)(t, e),
                hideBorder: !0,
                className: j.switch,
                children: r
            },
            t
        );
    });
    return (0, a.jsxs)('div', {
        className: i()(C.panel, j.panel),
        children: [e, (0, a.jsx)('div', { className: j.divider }), (0, a.jsx)(N, {})]
    });
}
