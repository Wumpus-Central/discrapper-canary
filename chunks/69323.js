n.d(t, { Z: () => x }), n(539854), n(388685);
var r = n(255367),
    o = n(73800),
    i = n(494497),
    l = n(442837),
    a = n(704215),
    s = n(952265),
    c = n(907862),
    u = n(243778),
    d = n(819640),
    p = n(476044),
    m = n(921944),
    f = n(93841),
    _ = n(388032);
function x(e) {
    let { powerup: t, targetRef: n, isCardVisible: x } = e,
        g = (0, l.e7)([d.Z], () => d.Z.hasLayers()),
        v = (0, s.f9)(),
        b =
            t.skuId === i.A$
                ? {
                      title: _.intl.string(f.default.YWo6VF),
                      body: _.intl.string(f.default.gXVvKS),
                      dismissibleContentType: a.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
                  }
                : null,
        h = [];
    null == b || g || !x || v || h.push(b.dismissibleContentType);
    let [j, C] = (0, u.US)(h),
        E = o.useCallback(() => {
            C(m.L.INDIRECT_ACTION);
        }, [C]);
    return ((0, p.Z)({
        targetRef: n,
        onShouldClose: E,
        enabled: null != j,
    }),
    null == b || null == j)
        ? null
        : (0, r.jsx)(c.J2, {
              targetElementRef: n,
              shouldShow: !0,
              position: "right",
              align: "top",
              size: "sm",
              caretConfig: {
                  position: "left",
                  align: "start",
              },
              title: b.title,
              body: b.body,
              onRequestClose: () => {
                  C(m.L.USER_DISMISS);
              },
          });
}
