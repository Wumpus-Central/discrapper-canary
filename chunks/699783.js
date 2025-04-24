n.d(t, { default: () => p });
var s = n(200651),
    l = n(192379),
    o = n(399606),
    a = n(481060),
    r = n(194359),
    i = n(726521),
    c = n(681678),
    d = n(594174),
    u = n(51144),
    h = n(991981),
    k = n(134612),
    m = n(388032),
    x = n(995605);
function p(e) {
    let { userId: t, channelId: n, transitionState: p, onBlock: C, onBlockAndReport: g, onClose: M, onCancel: z } = e,
        f = (0, h.q)(n),
        j = l.useCallback(() => {
            r.Z.blockUser(t, { location: k.zr }).then(() => {
                c.Z.showBlockSuccessToast(t, n);
            });
        }, [t, n]),
        D = l.useCallback(() => {
            j(), C(), M();
        }, [j, C, M]),
        U = l.useCallback(() => {
            j(), (0, i.wk)(f), g(), M();
        }, [f, j, g, M]),
        b = (0, o.e7)([d.default], () => d.default.getUser(t)),
        T = u.ZP.useName(b);
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
                        children: m.intl.format(m.t.x5pOn5, { name: T })
                    }),
                    (0, s.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: x.modalDescription,
                        children: m.intl.string(m.t.aedksr)
                    }),
                    (0, s.jsx)(a.zxk, {
                        onClick: D,
                        color: a.Ttl.BRAND,
                        size: a.PhG.MEDIUM,
                        children: m.intl.string(m.t.MzsUsr)
                    }),
                    (0, s.jsx)(a.zxk, {
                        onClick: U,
                        color: a.Ttl.PRIMARY,
                        size: a.PhG.MEDIUM,
                        children: m.intl.string(m.t['3pzuj4'])
                    }),
                    (0, s.jsx)(a.zxk, {
                        onClick: z,
                        color: a.Ttl.PRIMARY,
                        look: a.iLD.OUTLINED,
                        size: a.PhG.MEDIUM,
                        children: m.intl.string(m.t.okuCoa)
                    })
                ]
            })
        })
    });
}
