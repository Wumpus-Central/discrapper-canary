n.d(t, { Z: () => T }), n(47120), n(301563);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(602715),
    s = n(442837),
    c = n(481060),
    d = n(43267),
    u = n(933557),
    m = n(258732),
    x = n(592125),
    h = n(699516),
    p = n(594174),
    b = n(55589),
    f = n(630388),
    _ = n(98357),
    g = n(432877),
    v = n(246992),
    j = n(750540),
    y = n(616257);
function C() {
    var e;
    let t = (0, s.Wu)([b.Z], () => b.Z.getSortedChannels()[1]),
        [n, l] = a.useState(t.length > 0 ? t[0].channelId : void 0),
        { selectedChannel: i, options: _ } = (0, s.cj)([x.Z, p.default, h.Z], () => ({
            selectedChannel: x.Z.getChannel(n),
            options: t.map((e) => {
                let t = x.Z.getChannel(e.channelId);
                return {
                    value: e.channelId,
                    label: null != t ? (0, u.F6)(t, p.default, h.Z) : e.channelId
                };
            })
        })),
        g = a.useCallback(() => {
            var e;
            if (null == i || !i.isPrivate()) return;
            let t = (0, f.x9)(null != (e = i.recipientFlags) ? e : 0, o.V.DISMISSED_IN_GAME_MESSAGE_NUX);
            m.Z.updatePrivateChannelRecipientFlags(i.id, t);
        }, [i]),
        y = null != i && !!i.isPrivate() && (0, f.yE)(null != (e = i.recipientFlags) ? e : 0, o.V.DISMISSED_IN_GAME_MESSAGE_NUX);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(c.Text, {
                variant: 'text-md/semibold',
                children: 'In-Game NUX Message for DMs'
            }),
            (0, r.jsxs)('div', {
                className: j.inGameNuxContainer,
                children: [
                    (0, r.jsx)(c.VcW, {
                        wrapperClassName: j.search,
                        options: _,
                        placeholder: 'Select DM',
                        value: n,
                        onChange: l,
                        renderOptionPrefix: (e) => {
                            if (null == e) return null;
                            let t = x.Z.getChannel(e.value);
                            return null == t
                                ? null
                                : (0, r.jsx)(c.qEK, {
                                      src: (0, d.x)(t),
                                      'aria-hidden': !0,
                                      size: c.EFr.SIZE_16
                                  });
                        },
                        popoutLayerContext: v.O$
                    }),
                    (0, r.jsx)(c.zxk, {
                        size: c.zxk.Sizes.SMALL,
                        onClick: g,
                        disabled: null == n,
                        children: y ? 'Clear NUX Flag' : 'Set NUX Flag'
                    })
                ]
            })
        ]
    });
}
function T() {
    let e = g.ZP.allByCategory(g.zU.MESSAGING).map((e) => {
        let [t, n, { label: a }] = e;
        return (0, r.jsx)(
            c.j7V,
            {
                value: n,
                onChange: (e) => (0, _.Z)(t, e),
                hideBorder: !0,
                className: j.switch,
                children: a
            },
            t
        );
    });
    return (0, r.jsxs)('div', {
        className: i()(y.panel, j.panel),
        children: [e, (0, r.jsx)('div', { className: j.divider }), (0, r.jsx)(C, {})]
    });
}
