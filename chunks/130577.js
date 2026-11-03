e.d(n, { default: () => m });
var i = e(477900),
    l = e(582128),
    s = e(17928),
    a = e(189213),
    d = e(834730),
    o = e(320095),
    r = e(636922),
    c = e(95701),
    u = e(734057),
    h = e(105292);
function m(t) {
    let { action: n, onClose: e, transitionState: m } = t,
        { message: p, thread: b, notice: k, guildId: v } = n,
        x = (0, s.bG)(
            [u.A],
            () => (null != p ? u.A.getChannel(p.channel_id) : void 0) ?? (null != b ? (0, c.UE)(b, v) : void 0),
            [p, b, v],
        ),
        A = l.useMemo(() => (null != p ? (0, o.rh)(p) : void 0), [p]);
    return (0, i.jsx)(a.a, {
        onClose: e,
        transitionState: m,
        title: h.intl.string(null != b ? h.t["8czF24"] : h.t.StrErG),
        subtitle: b?.name,
        actions: [{ text: h.intl.string(h.t.BddRzS), onClick: e }],
        children:
            null != A && null != x
                ? (0, i.jsx)(r.A, {
                      message: A,
                      channel: x,
                      hideAccessories: !0,
                      disableInteraction: !0,
                      hideAutomodDismiss: !0,
                  })
                : (0, i.jsx)(d.E, { variant: "body-md/normal", color: "text-default", children: k }),
    });
}
