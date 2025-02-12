n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(704215),
    u = n(481060),
    c = n(540059),
    d = n(243778),
    f = n(328908),
    _ = n(992970),
    p = n(13132),
    h = n(111810),
    m = n(819640),
    g = n(443603),
    E = n(957825),
    v = n(388032),
    y = n(513632);
function I(e, t) {
    let { disabled: n, channel: a } = e,
        I = (0, c.Q3)('ChannelMessageConfettiButton'),
        T = (0, f.LN)(a.id),
        b = (0, h.V1)('ConfettiButton'),
        S = (0, o.e7)([m.Z], () => m.Z.hasLayers()),
        A = r.useCallback(() => {
            (0, f.Rg)(a.id, _.MG.MessageComposerButtons);
        }, [a.id]),
        N = a.isThread(),
        C = r.useMemo(() => !N && !S, [N, S]) && b ? [l.z.CONFETTI_POTION_UPSELL] : [],
        [R, O] = (0, d.US)(C);
    return n
        ? null
        : (0, i.jsx)(u.yRy, {
              renderPopout: () =>
                  (0, i.jsx)(p.Z, {
                      channelId: a.id,
                      dismissContent: O
                  }),
              align: 'center',
              position: 'top',
              shouldShow: R === l.z.CONFETTI_POTION_UPSELL,
              children: () =>
                  (0, i.jsx)('div', {
                      className: s()(E.CT, y.buttonContainer),
                      ref: t,
                      children: (0, i.jsx)(g.Z, {
                          innerClassName: s()(y.button, y.messageConfettiButton),
                          childClassName: s()(y.messageConfettiIcon, { [y.active]: T }),
                          onClick: A,
                          isActive: T,
                          'aria-label': v.intl.string(v.t.yvN8bG),
                          'aria-haspopup': 'false',
                          children: (0, i.jsx)(u.l22, {
                              size: I ? 'refresh_sm' : void 0,
                              color: 'currentColor'
                          })
                      })
                  })
          });
}
let T = r.memo(r.forwardRef(I));
