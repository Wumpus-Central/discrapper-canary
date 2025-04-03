o.d(t, { default: () => p });
var s = o(200651),
    l = o(192379),
    n = o(399606),
    a = o(481060),
    i = o(194359),
    r = o(726521),
    c = o(681678),
    d = o(594174),
    h = o(51144),
    k = o(991981),
    u = o(134612),
    m = o(388032),
    x = o(995605);
function p(e) {
    let { userId: t, channelId: o, transitionState: p, onBlock: C, onBlockAndReport: z, onClose: N, onCancel: j } = e,
        D = (0, k.q)(o),
        M = l.useCallback(() => {
            i.Z.blockUser(t, { location: u.zr }).then(() => {
                c.Z.showBlockSuccessToast(t, o);
            });
        }, [t, o]),
        f = l.useCallback(() => {
            M(), C(), N();
        }, [M, C, N]),
        b = l.useCallback(() => {
            M(), (0, r.wk)(D), z(), N();
        }, [D, M, z, N]),
        g = (0, n.e7)([d.default], () => d.default.getUser(t)),
        T = h.ZP.useName(g);
    return (0, s.jsx)(a.Y0X, {
        transitionState: p,
        children: (0, s.jsx)(a.Ttm, {
            style: { overflow: 'hidden auto' },
            children: (0, s.jsxs)(a.hzk, {
                className: x.modalContent,
                children: [
                    (0, s.jsx)(a.X6q, {
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: m.NW.format(m.t.x5pOn5, { name: T })
                    }),
                    (0, s.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: x.modalDescription,
                        children: m.NW.string(m.t.aedksr)
                    }),
                    (0, s.jsx)(a.zxk, {
                        onClick: f,
                        color: a.Ttl.BRAND,
                        size: a.PhG.MEDIUM,
                        children: m.NW.string(m.t.MzsUsr)
                    }),
                    (0, s.jsx)(a.zxk, {
                        onClick: b,
                        color: a.Ttl.PRIMARY,
                        size: a.PhG.MEDIUM,
                        children: m.NW.string(m.t['3pzuj4'])
                    }),
                    (0, s.jsx)(a.zxk, {
                        onClick: j,
                        color: a.Ttl.PRIMARY,
                        look: a.iLD.OUTLINED,
                        size: a.PhG.MEDIUM,
                        children: m.NW.string(m.t.okuCoa)
                    })
                ]
            })
        })
    });
}
