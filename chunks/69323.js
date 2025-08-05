(n.d(t, { Z: () => x }), n(539854), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(494497),
    l = n(442837),
    s = n(704215),
    a = n(952265),
    c = n(907862),
    u = n(243778),
    d = n(819640),
    p = n(476044),
    f = n(921944),
    m = n(93841),
    g = n(388032);
function x(e) {
    let { powerup: t, targetRef: n, isCardVisible: x } = e,
        _ = (0, l.e7)([d.Z], () => d.Z.hasLayers()),
        v = (0, a.f9)(),
        b =
            t.skuId === i.A$
                ? {
                      title: g.intl.string(m.default.YWo6VF),
                      body: g.intl.string(m.default.gXVvKS),
                      dismissibleContentType: s.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
                  }
                : null,
        j = [];
    null == b || _ || !x || v || j.push(b.dismissibleContentType);
    let [h, E] = (0, u.US)(j),
        C = o.useCallback(() => {
            E(f.L.INDIRECT_ACTION);
        }, [E]);
    return ((0, p.Z)({
        targetRef: n,
        onShouldClose: C,
        enabled: null != h
    }),
    null == b || null == h)
        ? null
        : (0, r.jsx)(c.J2, {
              targetElementRef: n,
              shouldShow: !0,
              position: 'right',
              align: 'top',
              size: 'sm',
              caretConfig: {
                  position: 'left',
                  align: 'start'
              },
              title: b.title,
              body: b.body,
              onRequestClose: () => {
                  E(f.L.USER_DISMISS);
              }
          });
}
