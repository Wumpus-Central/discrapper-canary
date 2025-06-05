n.d(t, { default: () => x });
var o = n(255367),
    l = n(73800),
    i = n(399606),
    s = n(481060),
    a = n(194359),
    r = n(726521),
    c = n(681678),
    d = n(594174),
    h = n(51144),
    k = n(991981),
    u = n(134612),
    m = n(388032),
    p = n(995605);
function x(e) {
    let { userId: t, channelId: n, transitionState: x, onBlock: C, onBlockAndReport: z, onClose: M, onCancel: j } = e,
        D = (0, k.q)(n),
        f = l.useCallback(() => {
            a.Z.blockUser(t, { location: u.zr }).then(() => {
                c.Z.showBlockSuccessToast(t, n);
            });
        }, [t, n]),
        b = l.useCallback(() => {
            f(), C(), M();
        }, [f, C, M]),
        g = l.useCallback(() => {
            f(), (0, r.wk)(D), z(), M();
        }, [D, f, z, M]),
        T = (0, i.e7)([d.default], () => d.default.getUser(t)),
        U = h.ZP.useName(T);
    return (0, o.jsx)(s.Y0X, {
        transitionState: x,
        parentComponent: 'BlockAndReportModal',
        children: (0, o.jsx)(s.Ttm, {
            style: { overflow: 'hidden auto' },
            children: (0, o.jsxs)(s.hzk, {
                className: p.modalContent,
                children: [
                    (0, o.jsx)(s.X6q, {
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: m.intl.format(m.t.x5pOn5, { name: U })
                    }),
                    (0, o.jsx)(s.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: p.modalDescription,
                        children: m.intl.string(m.t.aedksr)
                    }),
                    (0, o.jsx)(s.zxk, {
                        onClick: b,
                        color: s.Ttl.BRAND,
                        size: s.PhG.MEDIUM,
                        children: m.intl.string(m.t.MzsUsr)
                    }),
                    (0, o.jsx)(s.zxk, {
                        onClick: g,
                        color: s.Ttl.PRIMARY,
                        size: s.PhG.MEDIUM,
                        children: m.intl.string(m.t['3pzuj4'])
                    }),
                    (0, o.jsx)(s.zxk, {
                        onClick: j,
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
