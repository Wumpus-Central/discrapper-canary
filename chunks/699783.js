l.d(e, { default: () => C });
var n = l(200651),
    o = l(192379),
    i = l(399606),
    s = l(481060),
    a = l(194359),
    r = l(726521),
    d = l(681678),
    c = l(594174),
    h = l(51144),
    u = l(991981),
    k = l(134612),
    m = l(981631),
    p = l(388032),
    x = l(263856);
function C(t) {
    let { userId: e, channelId: l, transitionState: C, onBlock: z, onBlockAndReport: D, onClose: j, onCancel: M } = t,
        f = (0, u.q)(l),
        g = o.useCallback(() => {
            a.Z.addRelationship({
                userId: e,
                context: { location: k.zr },
                type: m.OGo.BLOCKED
            }),
                d.Z.showBlockSuccessToast(e, l);
        }, [e, l]),
        I = o.useCallback(() => {
            g(), z(), j();
        }, [g, z, j]),
        T = o.useCallback(() => {
            g(), (0, r.wk)(f), D(), j();
        }, [f, g, D, j]),
        b = (0, i.e7)([c.default], () => c.default.getUser(e)),
        P = h.ZP.useName(b);
    return (0, n.jsx)(s.Y0X, {
        transitionState: C,
        children: (0, n.jsx)(s.Ttm, {
            style: { overflow: 'hidden auto' },
            children: (0, n.jsxs)(s.hzk, {
                className: x.modalContent,
                children: [
                    (0, n.jsx)(s.X6q, {
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: p.intl.format(p.t.x5pOn5, { name: P })
                    }),
                    (0, n.jsx)(s.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: x.modalDescription,
                        children: p.intl.string(p.t.aedksr)
                    }),
                    (0, n.jsx)(s.zxk, {
                        onClick: I,
                        color: s.Ttl.BRAND,
                        size: s.PhG.MEDIUM,
                        children: p.intl.string(p.t.MzsUsr)
                    }),
                    (0, n.jsx)(s.zxk, {
                        onClick: T,
                        color: s.Ttl.PRIMARY,
                        size: s.PhG.MEDIUM,
                        children: p.intl.string(p.t['3pzuj4'])
                    }),
                    (0, n.jsx)(s.zxk, {
                        onClick: M,
                        color: s.Ttl.PRIMARY,
                        look: s.iLD.OUTLINED,
                        size: s.PhG.MEDIUM,
                        children: p.intl.string(p.t.okuCoa)
                    })
                ]
            })
        })
    });
}
