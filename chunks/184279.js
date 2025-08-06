n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(43267),
    a = n(933557),
    s = n(297700),
    l = n(534091),
    c = n(967128),
    u = n(388032),
    d = n(559267),
    f = n(191986);
let _ = () =>
    (0, r.jsx)('svg', {
        width: '46',
        height: '34',
        viewBox: '0 0 46 34',
        className: d.chatBubbleLip,
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, r.jsx)('path', { d: 'M0 33.4637C16.1697 28.954 21.1764 9.59155 19.2146 0L45.681 0.000148089C45.681 0.000148089 44.681 9.14498 40.1914 18.3023C34.4077 30.0996 6.2893 33.1232 0 33.4637Z' })
    });
function p(e) {
    var t;
    let { channel: n } = e,
        p = null != (t = (0, a.ZP)(n)) ? t : '';
    return (0, r.jsxs)('div', {
        id: (0, l.p)(n.id, n.id),
        className: d.headerContainer,
        children: [
            (0, r.jsx)('img', {
                src: f,
                className: d.wumpusImage,
                alt: ''
            }),
            (0, r.jsxs)('div', {
                className: d.chatBubbleContainer,
                children: [
                    (0, r.jsx)(_, {}),
                    (0, r.jsxs)('div', {
                        className: d.chatBubble,
                        children: [
                            (0, r.jsx)(i.qEK, {
                                'aria-label': p,
                                size: i.EFr.SIZE_80,
                                src: (0, o.x)(n, 80, !1)
                            }),
                            (0, r.jsxs)(c.Ot, {
                                className: d.emptyMessageHeader,
                                children: [
                                    p,
                                    (0, r.jsx)(s.Z, {
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
                            (0, r.jsx)(c.jz, { children: u.intl.string(u.t.Rzvnio) })
                        ]
                    })
                ]
            })
        ]
    });
}
