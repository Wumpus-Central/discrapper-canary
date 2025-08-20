n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var l = n(120356),
    s = n.n(l),
    i = n(481060),
    a = n(570928),
    o = n(388032),
    c = n(980941);
let u = function (e) {
    let { className: t, hasVideo: n, text: l, hasConnectedChannel: u, textVariant: d = "text-md/medium" } = e,
        h = n ? o.intl.string(o.t.IlHdW1) : o.intl.string(o.t.WsOisr);
    return (0, r.jsx)(a.Z, {
        className: s()(t, c.hoverableStatus),
        hoverText: u
            ? (0, r.jsx)(i.Text, {
                  variant: d,
                  color: "currentColor",
                  children: h,
              })
            : null,
        children: (0, r.jsx)(i.Text, {
            variant: d,
            color: "currentColor",
            children: l,
        }),
    });
};
