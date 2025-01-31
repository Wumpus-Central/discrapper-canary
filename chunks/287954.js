n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(510659),
    s = n(511341),
    o = n(215105),
    l = n(429974),
    u = n(228168);
function c(e, t) {
    return e === u.P.REACT
        ? {
              position: 'left',
              align: 'top',
              animationPosition: 'right',
              spacing: 8
          }
        : {
              position: 'bottom',
              align: t === u.y0.FULL_SIZE ? 'center' : 'left',
              animationPosition: 'top',
              spacing: 6
          };
}
function d(e) {
    let { user: t, guildId: n, channelId: d, profileType: f, onClose: _, children: p, ...h } = e,
        { interactionType: m, interactionSource: g, resetInteraction: E, interactionSourceId: v } = (0, a.Xo)(),
        y = f === u.y0.FULL_SIZE ? (0, l.z)(t.id, n) : void 0,
        I = g === h.sourceType && m === u.P.REACT,
        b = g === h.sourceType && m === u.P.REPLY,
        T = (I || b) && v === h.sourceId;
    return (0, i.jsx)(r.yRy, {
        renderPopout: (e) => {
            let { setPopoutRef: r } = e,
                a = I ? s.Z : o.Z;
            return (0, i.jsx)(a, {
                user: t,
                guildId: n,
                channelId: d,
                profileType: f,
                onClose: _,
                modalKey: y,
                setPopoutRef: r,
                ...h
            });
        },
        onRequestClose: () => {
            E(), null == _ || _();
        },
        shouldShow: T,
        ...c(m, f),
        children: p
    });
}
