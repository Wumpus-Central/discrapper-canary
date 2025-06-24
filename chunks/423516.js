n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    o = n(481060),
    a = n(570928),
    s = n(388032),
    u = n(593210);
let c = function (e) {
    let { className: t, hasVideo: n, text: l, hasConnectedChannel: c, textVariant: d = 'text-md/medium' } = e,
        f = n ? s.intl.string(s.t.IlHdW1) : s.intl.string(s.t.WsOisr);
    return (0, r.jsx)(a.Z, {
        className: i()(t, u.hoverableStatus),
        hoverText: c
            ? (0, r.jsx)(o.Text, {
                  variant: d,
                  color: 'currentColor',
                  children: f
              })
            : null,
        children: (0, r.jsx)(o.Text, {
            variant: d,
            color: 'currentColor',
            children: l
        })
    });
};
