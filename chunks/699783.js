n.d(e, { default: () => C });
var a = n(255367),
    s = n(73800),
    o = n(399606),
    r = n(755721),
    l = n(481060),
    i = n(194359),
    d = n(726521),
    c = n(681678),
    u = n(594174),
    k = n(51144),
    h = n(991981),
    m = n(134612),
    p = n(388032),
    x = n(995605);
function C(t) {
    let { userId: e, channelId: n, transitionState: C, onBlock: g, onBlockAndReport: f, onClose: j, onCancel: v } = t,
        z = (0, h.q)(n),
        b = s.useCallback(() => {
            i.Z.blockUser(e, { location: m.zr }).then(() => {
                c.Z.showBlockSuccessToast(e, n);
            });
        }, [e, n]),
        M = s.useCallback(() => {
            (b(), g(), j());
        }, [b, g, j]),
        U = s.useCallback(() => {
            (b(), (0, d.wk)(z), f(), j());
        }, [z, b, f, j]),
        Z = (0, o.e7)([u.default], () => u.default.getUser(e)),
        w = k.ZP.useName(Z);
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
                        children: p.intl.format(p.t.x5pOn5, { name: w })
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
                        onClick: M
                    }),
                    (0, a.jsx)(l.zxk, {
                        variant: 'secondary',
                        text: p.intl.string(p.t['3pzuj4']),
                        onClick: U
                    }),
                    (0, a.jsx)(r.zx, {
                        onClick: v,
                        color: r.Tt.PRIMARY,
                        look: r.iL.OUTLINED,
                        size: r.Ph.MEDIUM,
                        children: p.intl.string(p.t.okuCoa)
                    })
                ]
            })
        })
    });
}
