n.d(t, { default: () => x });
var l = n(255367),
    o = n(73800),
    s = n(399606),
    a = n(481060),
    r = n(194359),
    i = n(726521),
    c = n(681678),
    d = n(594174),
    u = n(51144),
    h = n(991981),
    k = n(134612),
    m = n(388032),
    p = n(995605);
function x(e) {
    let { userId: t, channelId: n, transitionState: x, onBlock: C, onBlockAndReport: M, onClose: g, onCancel: z } = e,
        f = (0, h.q)(n),
        j = o.useCallback(() => {
            r.Z.blockUser(t, { location: k.zr }).then(() => {
                c.Z.showBlockSuccessToast(t, n);
            });
        }, [t, n]),
        D = o.useCallback(() => {
            (j(), C(), g());
        }, [j, C, g]),
        U = o.useCallback(() => {
            (j(), (0, i.wk)(f), M(), g());
        }, [f, j, M, g]),
        b = (0, s.e7)([d.default], () => d.default.getUser(t)),
        T = u.ZP.useName(b);
    return (0, l.jsx)(a.Y0X, {
        transitionState: x,
        parentComponent: 'BlockAndReportModal',
        children: (0, l.jsx)(a.Ttm, {
            style: { overflow: 'hidden auto' },
            children: (0, l.jsxs)(a.hzk, {
                className: p.modalContent,
                children: [
                    (0, l.jsx)(a.X6q, {
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: m.intl.format(m.t.x5pOn5, { name: T })
                    }),
                    (0, l.jsx)(a.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: p.modalDescription,
                        children: m.intl.string(m.t.aedksr)
                    }),
                    (0, l.jsx)(a.zxk, {
                        onClick: D,
                        color: a.Ttl.BRAND,
                        size: a.PhG.MEDIUM,
                        children: m.intl.string(m.t.MzsUsr)
                    }),
                    (0, l.jsx)(a.zxk, {
                        onClick: U,
                        color: a.Ttl.PRIMARY,
                        size: a.PhG.MEDIUM,
                        children: m.intl.string(m.t['3pzuj4'])
                    }),
                    (0, l.jsx)(a.zxk, {
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
