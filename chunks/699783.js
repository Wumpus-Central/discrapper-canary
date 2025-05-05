l.d(t, { default: () => p });
var n = l(255367),
    o = l(73800),
    i = l(399606),
    s = l(481060),
    a = l(194359),
    r = l(726521),
    c = l(681678),
    d = l(594174),
    h = l(51144),
    k = l(991981),
    u = l(134612),
    m = l(388032),
    x = l(995605);
function p(e) {
    let { userId: t, channelId: l, transitionState: p, onBlock: C, onBlockAndReport: z, onClose: j, onCancel: D } = e,
        M = (0, k.q)(l),
        f = o.useCallback(() => {
            a.Z.blockUser(t, { location: u.zr }).then(() => {
                c.Z.showBlockSuccessToast(t, l);
            });
        }, [t, l]),
        b = o.useCallback(() => {
            f(), C(), j();
        }, [f, C, j]),
        g = o.useCallback(() => {
            f(), (0, r.wk)(M), z(), j();
        }, [M, f, z, j]),
        T = (0, i.e7)([d.default], () => d.default.getUser(t)),
        U = h.ZP.useName(T);
    return (0, n.jsx)(s.Y0X, {
        transitionState: p,
        children: (0, n.jsx)(s.Ttm, {
            style: { overflow: 'hidden auto' },
            children: (0, n.jsxs)(s.hzk, {
                className: x.modalContent,
                children: [
                    (0, n.jsx)(s.X6q, {
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: m.intl.format(m.t.x5pOn5, { name: U })
                    }),
                    (0, n.jsx)(s.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: x.modalDescription,
                        children: m.intl.string(m.t.aedksr)
                    }),
                    (0, n.jsx)(s.zxk, {
                        onClick: b,
                        color: s.Ttl.BRAND,
                        size: s.PhG.MEDIUM,
                        children: m.intl.string(m.t.MzsUsr)
                    }),
                    (0, n.jsx)(s.zxk, {
                        onClick: g,
                        color: s.Ttl.PRIMARY,
                        size: s.PhG.MEDIUM,
                        children: m.intl.string(m.t['3pzuj4'])
                    }),
                    (0, n.jsx)(s.zxk, {
                        onClick: D,
                        color: s.Ttl.PRIMARY,
                        look: s.iLD.OUTLINED,
                        size: s.PhG.MEDIUM,
                        children: m.intl.string(m.t.okuCoa)
                    })
                ]
            })
        })
    });
}
