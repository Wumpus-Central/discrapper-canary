n.d(t, { Z: () => I }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(704215),
    l = n(481060),
    u = n(540059),
    c = n(243778),
    d = n(328908),
    f = n(13132),
    _ = n(576645),
    p = n(317951),
    h = n(443603),
    m = n(981631),
    g = n(957825),
    E = n(388032),
    v = n(553796);
function y(e, t) {
    let { disabled: n, channelId: a } = e,
        y = (0, u.Q3)('ChannelMessageConfettiButton'),
        I = (0, d.LN)(a),
        { entitlement: T } = (0, _.t6)(p.D1),
        b = r.useCallback(() => {
            (0, d.Rg)(a);
        }, [a]),
        S = (null == T ? void 0 : T.type) === m.qc2.DEVELOPER_GIFT ? [o.z.CONFETTI_POTION_UPSELL] : [],
        [A, N] = (0, c.US)(S);
    return n
        ? null
        : (0, i.jsx)(l.yRy, {
              renderPopout: () =>
                  (0, i.jsx)(f.Z, {
                      channelId: a,
                      dismissContent: N
                  }),
              align: 'center',
              position: 'top',
              shouldShow: A === o.z.CONFETTI_POTION_UPSELL,
              children: () =>
                  (0, i.jsx)('div', {
                      className: s()(g.CT, v.buttonContainer),
                      ref: t,
                      children: (0, i.jsx)(h.Z, {
                          innerClassName: s()(v.button, v.messageConfettiButton),
                          childClassName: s()(v.messageConfettiIcon, { [v.active]: I }),
                          onClick: b,
                          isActive: I,
                          'aria-label': E.intl.string(E.t.yvN8bG),
                          'aria-haspopup': 'false',
                          children: (0, i.jsx)(l.l22, {
                              size: y ? 'refresh_sm' : void 0,
                              color: 'currentColor'
                          })
                      })
                  })
          });
}
let I = r.memo(r.forwardRef(y));
