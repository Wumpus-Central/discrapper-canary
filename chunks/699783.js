s.d(t, { default: () => p });
var n = s(200651),
    o = s(192379),
    a = s(399606),
    r = s(481060),
    l = s(194359),
    i = s(726521),
    c = s(681678),
    d = s(594174),
    u = s(51144),
    h = s(991981),
    k = s(134612),
    m = s(388032),
    x = s(995605);
function p(e) {
    let { userId: t, channelId: s, transitionState: p, onBlock: C, onBlockAndReport: g, onClose: M, onCancel: N } = e,
        z = (0, h.q)(s),
        f = o.useCallback(() => {
            l.Z.blockUser(t, { location: k.zr }).then(() => {
                c.Z.showBlockSuccessToast(t, s);
            });
        }, [t, s]),
        j = o.useCallback(() => {
            f(), C(), M();
        }, [f, C, M]),
        D = o.useCallback(() => {
            f(), (0, i.wk)(z), g(), M();
        }, [z, f, g, M]),
        U = (0, a.e7)([d.default], () => d.default.getUser(t)),
        b = u.ZP.useName(U);
    return (0, n.jsx)(r.Y0X, {
        transitionState: p,
        children: (0, n.jsx)(r.Ttm, {
            style: { overflow: 'hidden auto' },
            children: (0, n.jsxs)(r.hzk, {
                className: x.modalContent,
                children: [
                    (0, n.jsx)(r.X6q, {
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: m.NW.format(m.t.x5pOn5, { name: b })
                    }),
                    (0, n.jsx)(r.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: x.modalDescription,
                        children: m.NW.string(m.t.aedksr)
                    }),
                    (0, n.jsx)(r.zxk, {
                        onClick: j,
                        color: r.Ttl.BRAND,
                        size: r.PhG.MEDIUM,
                        children: m.NW.string(m.t.MzsUsr)
                    }),
                    (0, n.jsx)(r.zxk, {
                        onClick: D,
                        color: r.Ttl.PRIMARY,
                        size: r.PhG.MEDIUM,
                        children: m.NW.string(m.t['3pzuj4'])
                    }),
                    (0, n.jsx)(r.zxk, {
                        onClick: N,
                        color: r.Ttl.PRIMARY,
                        look: r.iLD.OUTLINED,
                        size: r.PhG.MEDIUM,
                        children: m.NW.string(m.t.okuCoa)
                    })
                ]
            })
        })
    });
}
