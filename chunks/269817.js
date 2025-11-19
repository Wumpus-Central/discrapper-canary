e.d(n, { default: () => c });
var a = e(54381);
e(473749);
var i = e(755721),
    s = e(481060),
    o = e(782568),
    r = e(313201),
    l = e(388032),
    d = e(202245);
function c(t) {
    let { url: n, onClose: c, transitionState: x } = t,
        m = (0, r.Dt)();
    return (0, a.jsxs)(s.Y0X, {
        transitionState: x,
        "aria-labelledby": m,
        parentComponent: "LinkNotDiscordModal",
        children: [
            (0, a.jsx)("img", {
                className: d.art,
                src: e(902623),
                alt: "",
            }),
            (0, a.jsx)(s.hzk, {
                children: (0, a.jsxs)("div", {
                    className: d.modalContent,
                    children: [
                        (0, a.jsx)(s.Heading, {
                            id: m,
                            variant: "heading-lg/semibold",
                            className: d.title,
                            children: l.intl.string(l.t["biy1X/"]),
                        }),
                        (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            className: d.body,
                            children: l.intl.format(l.t.J86cyX, { url: n }),
                        }),
                    ],
                }),
            }),
            (0, a.jsxs)(s.mzw, {
                children: [
                    (0, a.jsx)(s.Button, {
                        variant: "primary",
                        text: l.intl.string(l.t["xl8R+2"]),
                        type: "button",
                        onClick: c,
                    }),
                    (0, a.jsx)(i.zx, {
                        type: "button",
                        size: i.zx.Sizes.MEDIUM,
                        color: i.zx.Colors.TRANSPARENT,
                        look: i.zx.Looks.LINK,
                        onClick: () => {
                            (0, o.Z)(n, !0);
                        },
                        children: l.intl.string(l.t.gQrLtr),
                    }),
                ],
            }),
        ],
    });
}
