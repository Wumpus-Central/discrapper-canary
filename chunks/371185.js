s.d(a, { default: () => C });
var e = s(627968),
    i = s(64700),
    l = s(189213),
    n = s(702841),
    o = s(717398),
    r = s(928658),
    c = s(381689),
    u = s(287809),
    k = s(427262),
    d = s(192311),
    p = s(327337),
    b = s(375708);
function C(t) {
    let { userId: a, channelId: s, transitionState: C, onBlock: h, onBlockAndReport: f, onClose: g, onCancel: m } = t,
        x = (0, d.W)(s),
        v = i.useCallback(() => {
            o.A.blockUser(a, { location: p.Rx }).then(() => {
                c.A.showBlockSuccessToast(a, s);
            });
        }, [a, s]),
        j = i.useCallback(() => {
            v(), h(), g();
        }, [v, h, g]),
        w = i.useCallback(() => {
            v(), (0, r.jJ)(x), f(), g();
        }, [x, v, f, g]),
        y = i.useCallback(() => (m?.(), g?.(), Promise.resolve()), [m, g]),
        z = (0, n.bG)([u.default], () => u.default.getUser(a)),
        A = k.Ay.useName(z);
    return (0, e.jsx)(l.Modal, {
        transitionState: C,
        onClose: y,
        title: b.intl.formatToPlainString(b.t.x5pOn9, { name: A }),
        subtitle: b.intl.string(b.t.aedkso),
        actions: [
            { text: b.intl.string(b.t["3pzujz"]), onClick: w, variant: "secondary" },
            { text: b.intl.string(b.t.MzsUsp), onClick: j, variant: "primary" },
        ],
    });
}
