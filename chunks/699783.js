n.d(e, { default: () => C });
var a = n(255367),
    o = n(73800),
    i = n(399606),
    s = n(755721),
    l = n(481060),
    r = n(194359),
    d = n(726521),
    c = n(681678),
    k = n(594174),
    u = n(51144),
    h = n(991981),
    m = n(134612),
    p = n(388032),
    x = n(995605);
function C(t) {
    let { userId: e, channelId: n, transitionState: C, onBlock: j, onBlockAndReport: f, onClose: z, onCancel: b } = t,
        g = (0, h.q)(n),
        v = o.useCallback(() => {
            r.Z.blockUser(e, { location: m.zr }).then(() => {
                c.Z.showBlockSuccessToast(e, n);
            });
        }, [e, n]),
        w = o.useCallback(() => {
            (v(), j(), z());
        }, [v, j, z]),
        y = o.useCallback(() => {
            (v(), (0, d.wk)(g), f(), z());
        }, [g, v, f, z]),
        D = (0, i.e7)([k.default], () => k.default.getUser(e)),
        M = u.ZP.useName(D);
    return (0, a.jsx)(l.Y0X, {
        transitionState: C,
        parentComponent: 'BlockAndReportModal',
        children: (0, a.jsx)(l.Ttm, {
            style: { overflow: 'hidden auto' },
            children: (0, a.jsxs)(l.hzk, {
                className: x.modalContent,
                children: [
                    (0, a.jsx)(l.X6q, {
                        variant: 'heading-lg/bold',
                        color: 'header-primary',
                        children: p.intl.format(p.t.x5pOn5, { name: M })
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: x.modalDescription,
                        children: p.intl.string(p.t.aedksr)
                    }),
                    (0, a.jsx)(l.zxk, {
                        variant: 'primary',
                        text: p.intl.string(p.t.MzsUsr),
                        onClick: w
                    }),
                    (0, a.jsx)(l.zxk, {
                        variant: 'secondary',
                        text: p.intl.string(p.t['3pzuj4']),
                        onClick: y
                    }),
                    (0, a.jsx)(s.zx, {
                        onClick: b,
                        color: s.Tt.PRIMARY,
                        look: s.iL.OUTLINED,
                        size: s.Ph.MEDIUM,
                        children: p.intl.string(p.t.okuCoa)
                    })
                ]
            })
        })
    });
}
