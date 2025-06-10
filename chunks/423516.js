n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    o = n(481060),
    a = n(570928),
    s = n(540059),
    c = n(388032),
    u = n(593210);
let d = function (e) {
    let { className: t, hasVideo: n, text: l, hasConnectedChannel: d, textVariant: f = 'text-md/medium' } = e,
        h = (0, s.Q3)('RTCConnectionStatusText'),
        p = n ? c.intl.string(c.t.IlHdW1) : c.intl.string(c.t.WsOisr);
    return (0, r.jsx)(a.Z, {
        className: i()(t, u.hoverableStatus),
        hoverText: d
            ? h
                ? (0, r.jsx)(o.Text, {
                      variant: f,
                      color: 'currentColor',
                      children: p
                  })
                : p
            : null,
        children: h
            ? (0, r.jsx)(o.Text, {
                  variant: f,
                  color: 'currentColor',
                  children: l
              })
            : l
    });
};
