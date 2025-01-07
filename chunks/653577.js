n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(362721),
    u = n(12498),
    d = n(111028),
    h = n(454585),
    p = n(626135),
    f = n(981631),
    m = n(388032),
    g = n(316249),
    v = n(665162);
function C(e) {
    let { channel: t, connected: n, hovered: r, subtitle: C, onClick: x, enableHangStatus: I, allowChannelTopic: _ } = e,
        Z = (0, o.e7)([u.Z], () => u.Z.getChannelStatus(t)),
        b = null != Z && Z.length > 0,
        S = (0, c.ZP)(t, !0),
        N = (!I || !!_) && S,
        E = null != C && C.length > 0;
    l.useEffect(() => {
        b &&
            p.default.track(f.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
                guild_id: t.guild_id,
                channel_id: t.id
            });
    }, [t.id, b, t.guild_id]);
    let y = (0, s.useRedesignIconContext)().enabled ? 12 : 14;
    if (null == t.guild_id) return null;
    let j = a()(g.statusDiv, n && N ? g.hoverable : null);
    if (b)
        return (0, i.jsx)(s.Clickable, {
            className: j,
            onClick: N ? x : void 0,
            children: (0, i.jsx)(s.Text, {
                variant: 'text-xs/medium',
                className: a()(g.statusText, v.markup),
                children: (0, i.jsx)(d.Z, { children: h.Z.parseVoiceChannelStatus(Z, !0, { channelId: t.id }) })
            })
        });
    if (n && N && (!E || r))
        return (0, i.jsxs)(s.Clickable, {
            className: j,
            onClick: x,
            children: [
                (0, i.jsx)(s.Text, {
                    variant: 'text-xs/medium',
                    className: g.statusText,
                    children: m.intl.string(m.t.Mgpxi4)
                }),
                (0, i.jsx)(s.PencilIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    className: g.pencilIcon,
                    width: y,
                    height: y
                })
            ]
        });
    if (E) return (0, i.jsx)(d.Z, { children: C });
    return null;
}
