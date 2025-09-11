n.d(t, { Z: () => v }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(494497),
    s = n(442837),
    l = n(704215),
    a = n(952265),
    c = n(907862),
    u = n(243778),
    d = n(819640),
    p = n(476044),
    m = n(921944),
    g = n(989308),
    f = n(388032);
function v(e) {
    let { powerup: t, targetRef: n, isCardVisible: v } = e,
        _ = (0, s.e7)([d.Z], () => d.Z.hasLayers()),
        x = (0, a.f9)(),
        h =
            t.skuId === o.A$
                ? {
                      title: f.intl.string(g.default.YWo6VF),
                      body: f.intl.string(g.default.gXVvKS),
                      dismissibleContentType: l.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
                  }
                : null,
        b = [];
    null == h || _ || !v || x || b.push(h.dismissibleContentType);
    let [C, j] = (0, u.US)(b),
        T = i.useCallback(() => {
            j(m.L.INDIRECT_ACTION);
        }, [j]);
    return ((0, p.Z)({
        targetRef: n,
        onShouldClose: T,
        enabled: null != C,
    }),
    null == h || null == C)
        ? null
        : (0, r.jsx)(c.J2, {
              targetElementRef: n,
              shouldShow: !0,
              position: "right",
              align: "top",
              size: "sm",
              caretConfig: { align: "start" },
              title: h.title,
              body: h.body,
              onRequestClose: () => {
                  j(m.L.USER_DISMISS);
              },
          });
}
