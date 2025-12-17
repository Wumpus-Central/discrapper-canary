n.d(t, { Z: () => c });
var l = n(54381);
n(473749);
var i = n(120356),
    r = n.n(i),
    a = n(481060),
    o = n(570928),
    s = n(388032),
    u = n(255642);
let c = function (e) {
    let { className: t, hasVideo: n, text: i, hasConnectedChannel: c, textVariant: d = "text-md/medium" } = e,
        f = n ? s.intl.string(s.t.IlHdW8) : s.intl.string(s.t.WsOisp);
    return (0, l.jsx)(o.Z, {
        className: r()(t, u.hoverableStatus),
        hoverText: c
            ? (0, l.jsx)(a.Text, {
                  variant: d,
                  color: "currentColor",
                  children: f,
              })
            : null,
        children: (0, l.jsx)(a.Text, {
            variant: d,
            color: "currentColor",
            children: i,
        }),
    });
};
