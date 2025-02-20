n.d(t, { Z: () => O }), n(47120), n(301563);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(602715),
    s = n(442837),
    c = n(481060),
    d = n(43267),
    u = n(933557),
    h = n(258732),
    m = n(592125),
    x = n(699516),
    p = n(594174),
    f = n(55589),
    b = n(630388),
    _ = n(98357),
    g = n(432877),
    v = n(246992),
    j = n(397227),
    C = n(841699);
function y() {
    var e;
    let t = (0, s.Wu)([f.Z], () => f.Z.getSortedChannels()[1]),
        [n, i] = a.useState(t.length > 0 ? t[0].channelId : void 0),
        { selectedChannel: l, options: _ } = (0, s.cj)([m.Z, p.default, x.Z], () => ({
            selectedChannel: m.Z.getChannel(n),
            options: t.map((e) => {
                let t = m.Z.getChannel(e.channelId);
                return {
                    value: e.channelId,
                    label: null != t ? (0, u.F6)(t, p.default, x.Z) : e.channelId
                };
            })
        })),
        g = a.useCallback(() => {
            var e;
            if (null == l || !l.isPrivate()) return;
            let t = (0, b.x9)(null !== (e = l.recipientFlags) && void 0 !== e ? e : 0, o.V.DISMISSED_IN_GAME_MESSAGE_NUX);
            h.Z.updatePrivateChannelRecipientFlags(l.id, t);
        }, [l]),
        C = null != l && !!l.isPrivate() && (0, b.yE)(null !== (e = l.recipientFlags) && void 0 !== e ? e : 0, o.V.DISMISSED_IN_GAME_MESSAGE_NUX);
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
                        onChange: i,
                        renderOptionPrefix: (e) => {
                            if (null == e) return null;
                            let t = m.Z.getChannel(e.value);
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
                        children: C ? 'Clear NUX Flag' : 'Set NUX Flag'
                    })
                ]
            })
        ]
    });
}
function O() {
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
        className: l()(C.panel, j.panel),
        children: [e, (0, r.jsx)('div', { className: j.divider }), (0, r.jsx)(y, {})]
    });
}
