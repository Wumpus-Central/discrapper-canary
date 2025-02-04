n.d(t, { Z: () => S }), n(47120);
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
    h = n(576645),
    m = n(317951),
    g = n(819640),
    E = n(443603),
    v = n(981631),
    y = n(957825),
    I = n(388032),
    b = n(553796);
function T(e, t) {
    let { disabled: n, channel: a } = e,
        T = (0, c.Q3)('ChannelMessageConfettiButton'),
        S = (0, f.LN)(a.id),
        { entitlement: A } = (0, h.t6)(m.D1),
        N = (0, o.e7)([g.Z], () => g.Z.hasLayers()),
        C = r.useCallback(() => {
            (0, f.Rg)(a.id, _.MG.MessageComposerButtons);
        }, [a.id]),
        R = a.isThread(),
        O = r.useMemo(() => !R && !N, [R, N]) && (null == A ? void 0 : A.type) === v.qc2.DEVELOPER_GIFT ? [l.z.CONFETTI_POTION_UPSELL] : [],
        [D, x] = (0, d.US)(O);
    return n
        ? null
        : (0, i.jsx)(u.yRy, {
              renderPopout: () =>
                  (0, i.jsx)(p.Z, {
                      channelId: a.id,
                      dismissContent: x
                  }),
              align: 'center',
              position: 'top',
              shouldShow: D === l.z.CONFETTI_POTION_UPSELL,
              children: () =>
                  (0, i.jsx)('div', {
                      className: s()(y.CT, b.buttonContainer),
                      ref: t,
                      children: (0, i.jsx)(E.Z, {
                          innerClassName: s()(b.button, b.messageConfettiButton),
                          childClassName: s()(b.messageConfettiIcon, { [b.active]: S }),
                          onClick: C,
                          isActive: S,
                          'aria-label': I.intl.string(I.t.yvN8bG),
                          'aria-haspopup': 'false',
                          children: (0, i.jsx)(u.l22, {
                              size: T ? 'refresh_sm' : void 0,
                              color: 'currentColor'
                          })
                      })
                  })
          });
}
let S = r.memo(r.forwardRef(T));
