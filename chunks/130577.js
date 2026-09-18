e.d(n, { default: () => m });
var i = e(477900),
    l = e(582128),
    s = e(189213),
    a = e(17928),
    d = e(834730),
    o = e(320095),
    r = e(636922),
    c = e(95701),
    u = e(734057),
    h = e(375708);
function m(t) {
    let { action: n, onClose: e, transitionState: m } = t,
        { message: p, thread: x, notice: b, guildId: k } = n,
        v = (0, a.bG)(
            [u.A],
            () => (null != p ? u.A.getChannel(p.channel_id) : void 0) ?? (null != x ? (0, c.UE)(x, k) : void 0),
            [p, x, k],
        ),
        A = l.useMemo(() => (null != p ? (0, o.rh)(p) : void 0), [p]);
    return (0, i.jsx)(s.Modal, {
        onClose: e,
        transitionState: m,
        title: h.intl.string(null != x ? h.t["8czF24"] : h.t.StrErG),
        subtitle: x?.name,
        actions: [{ text: h.intl.string(h.t.BddRzS), onClick: e }],
        children:
            null != A && null != v
                ? (0, i.jsx)(r.A, {
                      message: A,
                      channel: v,
                      hideAccessories: !0,
                      disableInteraction: !0,
                      hideAutomodDismiss: !0,
                  })
                : (0, i.jsx)(d.E, { variant: "text-md/normal", color: "text-default", children: b }),
    });
}
