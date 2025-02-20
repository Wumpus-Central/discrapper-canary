o.d(t, { default: () => C });
var s = o(200651),
    a = o(192379),
    l = o(399606),
    n = o(481060),
    i = o(194359),
    r = o(726521),
    d = o(681678),
    c = o(594174),
    h = o(51144),
    u = o(991981),
    k = o(134612),
    m = o(981631),
    p = o(388032),
    x = o(42349);
function C(e) {
    let { userId: t, channelId: o, transitionState: C, onBlock: z, onBlockAndReport: D, onClose: N, onCancel: j } = e,
        M = (0, u.q)(o),
        f = a.useCallback(() => {
            i.Z.addRelationship({
                userId: t,
                context: { location: k.zr },
                type: m.OGo.BLOCKED
            }),
                d.Z.showBlockSuccessToast(t, o);
        }, [t, o]),
        g = a.useCallback(() => {
            f(), z(), N();
        }, [f, z, N]),
        I = a.useCallback(() => {
            f(), (0, r.wk)(M), D(), N();
        }, [M, f, D, N]),
        T = (0, l.e7)([c.default], () => c.default.getUser(t)),
        b = h.ZP.useName(T);
    return (0, s.jsx)(n.Y0X, {
        transitionState: C,
        children: (0, s.jsx)(n.Ttm, {
            style: { overflow: 'hidden auto' },
            children: (0, s.jsxs)(n.hzk, {
                className: x.modalContent,
                children: [
                    (0, s.jsx)(n.X6q, {
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: p.NW.format(p.t.x5pOn5, { name: b })
                    }),
                    (0, s.jsx)(n.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: x.modalDescription,
                        children: p.NW.string(p.t.aedksr)
                    }),
                    (0, s.jsx)(n.zxk, {
                        onClick: g,
                        color: n.Ttl.BRAND,
                        size: n.PhG.MEDIUM,
                        children: p.NW.string(p.t.MzsUsr)
                    }),
                    (0, s.jsx)(n.zxk, {
                        onClick: I,
                        color: n.Ttl.PRIMARY,
                        size: n.PhG.MEDIUM,
                        children: p.NW.string(p.t['3pzuj4'])
                    }),
                    (0, s.jsx)(n.zxk, {
                        onClick: j,
                        color: n.Ttl.PRIMARY,
                        look: n.iLD.OUTLINED,
                        size: n.PhG.MEDIUM,
                        children: p.NW.string(p.t.okuCoa)
                    })
                ]
            })
        })
    });
}
