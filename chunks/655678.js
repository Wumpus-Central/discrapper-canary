n.d(t, { Z: () => b }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(704215),
    l = n(481060),
    u = n(540059),
    c = n(243778),
    d = n(328908),
    f = n(992970),
    _ = n(13132),
    p = n(576645),
    h = n(317951),
    m = n(443603),
    g = n(981631),
    E = n(957825),
    v = n(388032),
    y = n(553796);
function I(e, t) {
    let { disabled: n, channelId: a } = e,
        I = (0, u.Q3)('ChannelMessageConfettiButton'),
        b = (0, d.LN)(a),
        { entitlement: T } = (0, p.t6)(h.D1),
        S = r.useCallback(() => {
            (0, d.Rg)(a, f.MG.MessageComposerButtons);
        }, [a]),
        A = (null == T ? void 0 : T.type) === g.qc2.DEVELOPER_GIFT ? [o.z.CONFETTI_POTION_UPSELL] : [],
        [N, C] = (0, c.US)(A);
    return n
        ? null
        : (0, i.jsx)(l.yRy, {
              renderPopout: () =>
                  (0, i.jsx)(_.Z, {
                      channelId: a,
                      dismissContent: C
                  }),
              align: 'center',
              position: 'top',
              shouldShow: N === o.z.CONFETTI_POTION_UPSELL,
              children: () =>
                  (0, i.jsx)('div', {
                      className: s()(E.CT, y.buttonContainer),
                      ref: t,
                      children: (0, i.jsx)(m.Z, {
                          innerClassName: s()(y.button, y.messageConfettiButton),
                          childClassName: s()(y.messageConfettiIcon, { [y.active]: b }),
                          onClick: S,
                          isActive: b,
                          'aria-label': v.intl.string(v.t.yvN8bG),
                          'aria-haspopup': 'false',
                          children: (0, i.jsx)(l.l22, {
                              size: I ? 'refresh_sm' : void 0,
                              color: 'currentColor'
                          })
                      })
                  })
          });
}
let b = r.memo(r.forwardRef(I));
