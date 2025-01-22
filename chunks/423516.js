var l = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    i = n(481060),
    o = n(570928),
    a = n(540059),
    c = n(977059),
    u = n(388032),
    d = n(586802);
t.Z = function (e) {
    let { className: t, hasVideo: n, text: s, hasConnectedChannel: h, textVariant: x = 'text-md/medium' } = e,
        g = (0, a.Q3)('RTCConnectionStatusText'),
        { enabled: N } = (0, c.S)({ location: 'RTCConnectionStatusText' }),
        C = n ? u.intl.string(u.t.IlHdW1) : u.intl.string(u.t.WsOisr);
    return (0, l.jsx)(o.Z, {
        className: r()(t, N ? d.hoverableStatus : d.status),
        hoverText:
            N && h
                ? g
                    ? (0, l.jsx)(i.Text, {
                          variant: x,
                          color: 'currentColor',
                          children: C
                      })
                    : C
                : null,
        children: g
            ? (0, l.jsx)(i.Text, {
                  variant: x,
                  color: 'currentColor',
                  children: s
              })
            : s
    });
};
