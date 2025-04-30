n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    o = n(481060),
    a = n(570928),
    s = n(540059),
    u = n(388032),
    c = n(593210);
let d = function (e) {
    let { className: t, hasVideo: n, text: l, hasConnectedChannel: d, textVariant: h = 'text-md/medium' } = e,
        f = (0, s.Q3)('RTCConnectionStatusText'),
        p = n ? u.intl.string(u.t.IlHdW1) : u.intl.string(u.t.WsOisr);
    return (0, r.jsx)(a.Z, {
        className: i()(t, c.hoverableStatus),
        hoverText: d
            ? f
                ? (0, r.jsx)(o.Text, {
                      variant: h,
                      color: 'currentColor',
                      children: p
                  })
                : p
            : null,
        children: f
            ? (0, r.jsx)(o.Text, {
                  variant: h,
                  color: 'currentColor',
                  children: l
              })
            : l
    });
};
