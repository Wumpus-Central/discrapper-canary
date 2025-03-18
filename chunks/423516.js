n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var l = n(120356),
    o = n.n(l),
    i = n(481060),
    a = n(570928),
    s = n(540059),
    c = n(388032),
    u = n(850224);
let d = function (e) {
    let { className: t, hasVideo: n, text: l, hasConnectedChannel: d, textVariant: h = 'text-md/medium' } = e,
        f = (0, s.Q3)('RTCConnectionStatusText'),
        p = n ? c.NW.string(c.t.IlHdW1) : c.NW.string(c.t.WsOisr);
    return (0, r.jsx)(a.Z, {
        className: o()(t, u.hoverableStatus),
        hoverText: d
            ? f
                ? (0, r.jsx)(i.Text, {
                      variant: h,
                      color: 'currentColor',
                      children: p
                  })
                : p
            : null,
        children: f
            ? (0, r.jsx)(i.Text, {
                  variant: h,
                  color: 'currentColor',
                  children: l
              })
            : l
    });
};
