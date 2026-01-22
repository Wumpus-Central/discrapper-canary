n.d(t, {
    A: () => u,
});
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(397927),
    s = n(29160),
    o = n(985018),
    c = n(384687);
let u = function (e) {
    let { className: t, hasVideo: n, text: r, hasConnectedChannel: u, textVariant: d = "text-md/medium" } = e,
        f = n ? o.intl.string(o.t.IlHdW8) : o.intl.string(o.t.WsOisp);
    return (0, l.jsx)(s.A, {
        className: i()(t, c.H),
        hoverText: u
            ? (0, l.jsx)(a.Text, {
                  variant: d,
                  color: "currentColor",
                  children: f,
              })
            : null,
        children: (0, l.jsx)(a.Text, {
            variant: d,
            color: "currentColor",
            children: r,
        }),
    });
};
