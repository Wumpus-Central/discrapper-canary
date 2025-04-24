n.d(t, { Z: () => d });
var l = n(200651);
n(192379);
var r = n(120356),
    i = n.n(r),
    a = n(481060),
    o = n(570928),
    s = n(540059),
    u = n(388032),
    c = n(593210);
let d = function (e) {
    let { className: t, hasVideo: n, text: r, hasConnectedChannel: d, textVariant: f = 'text-md/medium' } = e,
        h = (0, s.Q3)('RTCConnectionStatusText'),
        g = n ? u.intl.string(u.t.IlHdW1) : u.intl.string(u.t.WsOisr);
    return (0, l.jsx)(o.Z, {
        className: i()(t, c.hoverableStatus),
        hoverText: d
            ? h
                ? (0, l.jsx)(a.Text, {
                      variant: f,
                      color: 'currentColor',
                      children: g
                  })
                : g
            : null,
        children: h
            ? (0, l.jsx)(a.Text, {
                  variant: f,
                  color: 'currentColor',
                  children: r
              })
            : r
    });
};
