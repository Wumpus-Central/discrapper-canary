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
    p = n(921944),
    m = n(93841),
    f = n(388032);
function _(e) {
    let { powerup: t, targetRef: n, isCardVisible: _ } = e,
        x = (0, l.e7)([u.Z], () => u.Z.hasLayers()),
        g =
            t.skuId === i.A$
                ? {
                      title: f.intl.string(m.default.YWo6VF),
                      body: f.intl.string(m.default.gXVvKS),
                      dismissibleContentType: s.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER
                  }
                : null,
        v = [];
    null != g && !x && _ && v.push(g.dismissibleContentType);
    let [b, j] = (0, c.US)(v),
        E = o.useCallback(() => {
            j(p.L.INDIRECT_ACTION);
        }, [j]);
    return ((0, d.Z)({
        targetRef: n,
        onShouldClose: E,
        enabled: null != b
    }),
    null == g || null == b)
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
              title: g.title,
              body: g.body,
              onRequestClose: () => {
                  j(p.L.USER_DISMISS);
              }
          });
}
