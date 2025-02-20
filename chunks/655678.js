n.d(t, { Z: () => O }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(704215),
    c = n(481060),
    u = n(540059),
    d = n(243778),
    f = n(328908),
    p = n(992970),
    _ = n(13132),
    h = n(111810),
    m = n(819640),
    g = n(443603),
    E = n(957825),
    v = n(388032),
    b = n(342203);
function y(e, t) {
    let { disabled: n, channel: o } = e,
        y = (0, u.Q3)('ChannelMessageConfettiButton'),
        O = (0, f.LN)(o.id),
        S = (0, h.V1)('ConfettiButton'),
        I = (0, s.e7)([m.Z], () => m.Z.hasLayers()),
        T = i.useCallback(() => {
            (0, f.Rg)(o.id, p.MG.MessageComposerButtons);
        }, [o.id]),
        N = o.isThread(),
        A = i.useMemo(() => !N && !I, [N, I]) && S ? [l.z.CONFETTI_POTION_UPSELL] : [],
        [C, R] = (0, d.US)(A);
    return n
        ? null
        : (0, r.jsx)(c.yRy, {
              renderPopout: () =>
                  (0, r.jsx)(_.Z, {
                      channelId: o.id,
                      dismissContent: R
                  }),
              align: 'center',
              position: 'top',
              shouldShow: C === l.z.CONFETTI_POTION_UPSELL,
              children: () =>
                  (0, r.jsx)('div', {
                      className: a()(E.CT, b.buttonContainer),
                      ref: t,
                      children: (0, r.jsx)(g.Z, {
                          innerClassName: a()(b.button, b.messageConfettiButton),
                          childClassName: a()(b.messageConfettiIcon, { [b.active]: O }),
                          onClick: T,
                          isActive: O,
                          'aria-label': v.NW.string(v.t.yvN8bG),
                          'aria-haspopup': 'false',
                          children: (0, r.jsx)(c.l22, {
                              size: y ? 'refresh_sm' : void 0,
                              color: 'currentColor'
                          })
                      })
                  })
          });
}
let O = i.memo(i.forwardRef(y));
