n.d(t, { Z: () => f });
var i = n(951288);
n(647438);
var r = n(481060),
    l = n(43267),
    a = n(933557),
    o = n(297700),
    s = n(534091),
    c = n(967128),
    u = n(388032),
    d = n(405005),
    p = n(191986);
let h = () =>
    (0, i.jsx)("svg", {
        width: "46",
        height: "34",
        viewBox: "0 0 46 34",
        className: d.chatBubbleLip,
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, i.jsx)("path", {
            d: "M0 33.4637C16.1697 28.954 21.1764 9.59155 19.2146 0L45.681 0.000148089C45.681 0.000148089 44.681 9.14498 40.1914 18.3023C34.4077 30.0996 6.2893 33.1232 0 33.4637Z",
        }),
    });
function f(e) {
    var t;
    let { channel: n } = e,
        f = null != (t = (0, a.ZP)(n)) ? t : "";
    return (0, i.jsxs)("div", {
        id: (0, s.p)(n.id, n.id),
        className: d.headerContainer,
        children: [
            (0, i.jsx)("img", {
                src: p,
                className: d.wumpusImage,
                alt: "",
            }),
            (0, i.jsxs)("div", {
                className: d.chatBubbleContainer,
                children: [
                    (0, i.jsx)(h, {}),
                    (0, i.jsxs)("div", {
                        className: d.chatBubble,
                        children: [
                            (0, i.jsx)(r.qEK, {
                                "aria-label": f,
                                size: r.EFr.SIZE_80,
                                src: (0, l.x)(n, 80, !1),
                            }),
                            (0, i.jsxs)(c.Ot, {
                                className: d.emptyMessageHeader,
                                children: [
                                    f,
                                    (0, i.jsx)(o.Z, {
                                        className: d.flowerStar,
                                        size: 24,
                                        children: (0, i.jsx)(r.kmB, {
                                            size: "md",
                                            color: "currentColor",
                                            className: d.verified,
                                        }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.jz, { children: u.intl.string(u.t.Rzvnig) }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
