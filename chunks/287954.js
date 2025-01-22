r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(510659),
    s = r(511341),
    l = r(215105),
    u = r(429974),
    c = r(228168);
function d(e, n) {
    return e === c.P.REACT
        ? {
              position: 'left',
              align: 'top',
              animationPosition: 'right',
              spacing: 8
          }
        : {
              position: 'bottom',
              align: n === c.y0.FULL_SIZE ? 'center' : 'left',
              animationPosition: 'top',
              spacing: 6
          };
}
function f(e) {
    let { user: n, guildId: r, channelId: f, profileType: p, onClose: h, children: _, ...m } = e,
        { interactionType: g, interactionSource: E, resetInteraction: v, interactionSourceId: y } = (0, o.Xo)(),
        b = p === c.y0.FULL_SIZE ? (0, u.z)(n.id, r) : void 0,
        I = E === m.sourceType && g === c.P.REACT,
        T = E === m.sourceType && g === c.P.REPLY,
        S = (I || T) && y === m.sourceId;
    return (0, i.jsx)(a.Popout, {
        renderPopout: (e) => {
            let { setPopoutRef: a } = e,
                o = I ? s.Z : l.Z;
            return (0, i.jsx)(o, {
                user: n,
                guildId: r,
                channelId: f,
                profileType: p,
                onClose: h,
                modalKey: b,
                setPopoutRef: a,
                ...m
            });
        },
        onRequestClose: () => {
            v(), null == h || h();
        },
        shouldShow: S,
        ...d(g, p),
        children: _
    });
}
