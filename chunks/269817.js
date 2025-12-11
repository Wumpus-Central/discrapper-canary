i.d(n, { default: () => c });
var e = i(54381);
i(473749);
var a = i(481060),
    r = i(782568),
    l = i(411328),
    o = i(388032),
    s = i(73377);
function c(t) {
    let { url: n, onClose: i, transitionState: c } = t;
    return (0, e.jsx)(a.Ioy, {
        transitionState: c,
        onClose: i,
        graphic: {
            src: s.Z,
            type: "image",
        },
        gradientColor: "blue",
        title: o.intl.string(o.t["biy1X/"]),
        subtitle: o.intl.format(o.t.J86cyX, { url: n }),
        actions: [
            {
                text: o.intl.string(o.t.gQrLtr),
                onClick: () => {
                    (0, r.Z)(n, !0);
                },
                variant: "secondary",
            },
            {
                text: o.intl.string(o.t["xl8R+2"]),
                onClick: i,
            },
        ],
        children: (0, e.jsx)(l.W, { url: n }),
    });
}
