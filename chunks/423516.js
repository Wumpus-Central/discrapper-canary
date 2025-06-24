n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    o = n(481060),
    a = n(570928),
    s = n(388032),
    c = n(593210);
let u = function (e) {
    let { className: t, hasVideo: n, text: l, hasConnectedChannel: u, textVariant: d = 'text-md/medium' } = e,
        f = n ? s.intl.string(s.t.IlHdW1) : s.intl.string(s.t.WsOisr);
    return (0, r.jsx)(a.Z, {
        className: i()(t, c.hoverableStatus),
        hoverText: u
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
