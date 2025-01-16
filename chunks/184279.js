n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(43267),
    a = n(933557),
    s = n(297700),
    o = n(534091),
    c = n(967128),
    d = n(388032),
    u = n(786563),
    h = n(191986);
let p = () =>
    (0, i.jsx)('svg', {
        width: '46',
        height: '34',
        viewBox: '0 0 46 34',
        className: u.chatBubbleLip,
        xmlns: 'http://www.w3.org/2000/svg',
        children: (0, i.jsx)('path', { d: 'M0 33.4637C16.1697 28.954 21.1764 9.59155 19.2146 0L45.681 0.000148089C45.681 0.000148089 44.681 9.14498 40.1914 18.3023C34.4077 30.0996 6.2893 33.1232 0 33.4637Z' })
    });
function m(e) {
    var t;
    let { channel: n } = e,
        m = null !== (t = (0, a.ZP)(n)) && void 0 !== t ? t : '';
    return (0, i.jsxs)('div', {
        id: (0, o.p)(n.id, n.id),
        className: u.headerContainer,
        children: [
            (0, i.jsx)('img', {
                src: h,
                className: u.wumpusImage,
                alt: ''
            }),
            (0, i.jsxs)('div', {
                className: u.chatBubbleContainer,
                children: [
                    (0, i.jsx)(p, {}),
                    (0, i.jsxs)('div', {
                        className: u.chatBubble,
                        children: [
                            (0, i.jsx)(l.Avatar, {
                                'aria-label': m,
                                size: l.AvatarSizes.SIZE_80,
                                src: (0, r.x)(n, 80, !1)
                            }),
                            (0, i.jsxs)(c.Ot, {
                                className: u.emptyMessageHeader,
                                children: [
                                    m,
                                    (0, i.jsx)(s.Z, {
                                        className: u.flowerStar,
                                        size: 24,
                                        children: (0, i.jsx)(l.CheckmarkSmallIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: u.verified
                                        })
                                    })
                                ]
                            }),
                            (0, i.jsx)(c.jz, { children: d.intl.string(d.t.Rzvnio) })
                        ]
                    })
                ]
            })
        ]
    });
}
