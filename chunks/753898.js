n.d(t, { Z: () => h });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(607070),
    s = n(43267),
    o = n(933557),
    c = n(266076),
    d = n(518950),
    u = n(967128);
function h(e) {
    var t;
    let { channel: n, children: h, user: p } = e,
        m = (0, l.e7)([r.Z], () => r.Z.useReducedMotion),
        f = null !== (t = (0, o.ZP)(n)) && void 0 !== t ? t : '',
        {
            avatarDecorationSrc: g,
            eventHandlers: _,
            isAnimating: C
        } = (0, d.Z)({
            user: p,
            size: a.EFr.SIZE_80,
            animateOnHover: !0
        });
    return (0, i.jsxs)(u.ZP, {
        channelId: n.id,
        ..._,
        children: [
            (() => {
                let e = !m && C;
                return n.isMultiUserDM()
                    ? (0, i.jsx)(c.Z, {
                          channel: n,
                          size: a.EFr.SIZE_80,
                          experimentLocation: 'empty_messages',
                          animated: e,
                          'aria-label': f
                      })
                    : (0, i.jsx)(a.qEK, {
                          'aria-label': f,
                          size: a.EFr.SIZE_80,
                          src: (0, s.x)(n, 80, e),
                          avatarDecoration: g
                      });
            })(),
            (0, i.jsx)(u.Ot, { children: f }),
            (0, i.jsx)(u.jz, { children: h })
        ]
    });
}
