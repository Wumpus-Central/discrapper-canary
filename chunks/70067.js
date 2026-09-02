n.d(t, { A: () => x });
var i = n(477900),
    l = n(582128);
n(580321);
var a = n(17928),
    s = n(734057),
    r = n(309010),
    o = n(625494),
    c = n(446243),
    d = n(558076),
    u = n(360729),
    h = n(544299),
    p = n(932453),
    m = n(652215),
    A = n(1195),
    f = n(375708);
function x(e) {
    let { channelId: t, asset: n, position: x, width: g } = e,
        C = (0, a.bG)([s.A], () => s.A.getChannel(t)?.guild_id),
        { interactionsEnabled: y } = (0, u.mf)({ guildId: C, location: "GuildRoom" }, { autoTrackExposure: !1 }),
        j = (0, a.bG)([d.A], () => null != d.A.getPendingNote(t)),
        I = (0, a.bG)([d.A], () => d.A.getNotes(t).length >= 20),
        N = (0, a.bG)([r.Ay], () => r.Ay.getVoiceChannelId() === t),
        v = l.useRef(null),
        E = l.useCallback(() => {
            v.current?.focus();
        }, []),
        b = (0, h.Y1)(t);
    l.useEffect(() => {
        if (b)
            return (
                o._.subscribe(m.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL, E),
                () => {
                    o._.unsubscribe(m.jej.GUILD_ROOM_NOTE_PLACEMENT_CANCEL, E);
                }
            );
    }, [b, E]);
    let _ = l.useCallback(() => {
        (0, c.WT)(t);
    }, [t]);
    return y
        ? (0, i.jsx)(p.A, {
              asset: n,
              label: f.intl.string(I ? A.default.k4cbsb : A.default["lL1Y+d"]),
              position: x,
              width: g,
              disabled: !N || j || I,
              onClick: _,
              innerRef: v,
          })
        : (0, i.jsx)(p.c, { asset: n, label: f.intl.string(A.default["lL1Y+d"]), position: x, width: g });
}
