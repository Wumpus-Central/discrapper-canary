n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(43267),
    o = n(933557),
    a = n(297700),
    s = n(534091),
    c = n(967128),
    u = n(388032),
    d = n(559267),
    p = n(191986);
let h = () =>
    (0, r.jsx)('svg', {
        width: '46',
        height: '34',
        viewBox: '0 0 46 34',
        className: d.chatBubbleLip,
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, r.jsx)('path', { d: 'M0 33.4637C16.1697 28.954 21.1764 9.59155 19.2146 0L45.681 0.000148089C45.681 0.000148089 44.681 9.14498 40.1914 18.3023C34.4077 30.0996 6.2893 33.1232 0 33.4637Z' })
    });
function f(e) {
    var t;
    let { channel: n } = e,
        f = null != (t = (0, o.ZP)(n)) ? t : '';
    return (0, r.jsxs)('div', {
        id: (0, s.p)(n.id, n.id),
        className: d.headerContainer,
        children: [
            (0, r.jsx)('img', {
                src: p,
                className: d.wumpusImage,
                alt: ''
            }),
            (0, r.jsxs)('div', {
                className: d.chatBubbleContainer,
                children: [
                    (0, r.jsx)(h, {}),
                    (0, r.jsxs)('div', {
                        className: d.chatBubble,
                        children: [
                            (0, r.jsx)(i.qEK, {
                                'aria-label': f,
                                size: i.EFr.SIZE_80,
                                src: (0, l.x)(n, 80, !1)
                            }),
                            (0, r.jsxs)(c.Ot, {
                                className: d.emptyMessageHeader,
                                children: [
                                    f,
                                    (0, r.jsx)(a.Z, {
                                        className: d.flowerStar,
                                        size: 24,
                                        children: (0, r.jsx)(i.kmB, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: d.verified
                                        })
                                    })
                                ]
                            }),
                            (0, r.jsx)(c.jz, { children: u.NW.string(u.t.Rzvnio) })
                        ]
                    })
                ]
            })
        ]
    });
}
