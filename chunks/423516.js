n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    s = n(481060),
    a = n(570928),
    o = n(388032),
    c = n(593210);
let u = function (e) {
    let { className: t, hasVideo: n, text: l, hasConnectedChannel: u, textVariant: d = 'text-md/medium' } = e,
        h = n ? o.intl.string(o.t.IlHdW1) : o.intl.string(o.t.WsOisr);
    return (0, r.jsx)(a.Z, {
        className: i()(t, c.hoverableStatus),
        hoverText: u
            ? (0, r.jsx)(s.Text, {
                  variant: d,
                  color: 'currentColor',
                  children: h
              })
            : null,
        children: (0, r.jsx)(s.Text, {
            variant: d,
            color: 'currentColor',
            children: l
        })
    });
};
