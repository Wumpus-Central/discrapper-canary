n.d(t, { Z: () => g });
var o = n(951288);
n(647438);
var r = n(481060),
    i = n(726542),
    s = n(198993),
    a = n(63063),
    c = n(376340),
    l = n(981631),
    d = n(927923),
    u = n(388032),
    p = n(196365),
    f = n(629582);
function b() {
    return (0, o.jsxs)("div", {
        className: p.getXboxApp,
        children: [
            (0, o.jsxs)("div", {
                className: p.getXboxAppBody,
                children: [
                    (0, o.jsxs)(r.Heading, {
                        className: p.getXboxAppHeading,
                        variant: "text-lg/semibold",
                        children: [
                            (0, o.jsx)("div", {
                                className: p.xboxLogoBox,
                                children: (0, o.jsx)("img", {
                                    src: i.Z.get(l.ABu.XBOX).icon.whiteSVG,
                                    alt: "",
                                }),
                            }),
                            u.intl.string(u.t["12Kx2v"]),
                        ],
                    }),
                    (0, o.jsx)(r.Text, {
                        tag: "p",
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: u.intl.string(u.t.M5yEcb),
                    }),
                    (0, o.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children: (0, o.jsx)(r.Anchor, {
                            href: a.Z.getArticleURL(l.BhN.XBOX_CONNECTION),
                            children: u.intl.string(u.t.hvVgAZ),
                        }),
                    }),
                ],
            }),
            (0, o.jsx)(s.ZP, {
                className: p.getXboxAppQR,
                text: d.X3,
                size: 90,
            }),
        ],
    });
}
function g(e) {
    let { onClose: t } = e;
    return (0, o.jsx)(c.L, {
        img: (0, o.jsx)("img", {
            src: f.Z,
            width: "124",
            height: "160",
            alt: "",
        }),
        title: u.intl.string(u.t["7QsHmh"]),
        body: u.intl.string(u.t.byYNPX),
        content: (0, o.jsx)(b, {}),
        onClose: t,
    });
}
