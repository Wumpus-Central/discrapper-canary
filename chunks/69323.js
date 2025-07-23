(n.d(t, { Z: () => _ }), n(539854), n(388685));
var r = n(255367),
    o = n(73800),
    i = n(494497),
    l = n(442837),
    s = n(704215),
    a = n(907862),
    c = n(243778),
    u = n(819640),
    d = n(476044),
    m = n(921944),
    p = n(93841),
    f = n(388032);
function _(e) {
    let { powerup: t, targetRef: n, isCardVisible: _ } = e,
        x = (0, l.e7)([u.Z], () => u.Z.hasLayers()),
        v =
            t.skuId === i.A$
                ? {
                      title: f.intl.string(p.default.YWo6VF),
                      body: f.intl.string(p.default.gXVvKS),
                      dismissibleContentType: s.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
                  }
                : null,
        g = [];
    null != v && !x && _ && g.push(v.dismissibleContentType);
    let [b, j] = (0, c.US)(g),
        E = o.useCallback(() => {
            j(m.L.INDIRECT_ACTION);
        }, [j]);
    return ((0, d.Z)({
        targetRef: n,
        onShouldClose: E,
        enabled: null != b
    }),
    null == v || null == b)
        ? null
        : (0, r.jsx)(a.J2, {
              targetElementRef: n,
              shouldShow: !0,
              position: 'right',
              align: 'top',
              size: 'sm',
              caretConfig: {
                  position: 'left',
                  align: 'start'
              },
              title: v.title,
              body: v.body,
              onRequestClose: () => {
                  j(m.L.USER_DISMISS);
              }
          });
}
