n.d(t, { Z: () => v }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    o = n(494497),
    l = n(442837),
    a = n(704215),
    s = n(952265),
    u = n(907862),
    c = n(243778),
    d = n(819640),
    p = n(476044),
    f = n(921944),
    m = n(130231),
    g = n(388032);
function v(e) {
    let { powerup: t, targetRef: n, isCardVisible: v } = e,
        x = (0, l.e7)([d.Z], () => d.Z.hasLayers()),
        _ = (0, s.useHasAnyModalOpen)(),
        b =
            t.skuId === o.A$
                ? {
                      title: g.intl.string(m.default.YWo6VL),
                      body: g.intl.string(m.default.gXVvKc),
                      dismissibleContentType: a.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
                  }
                : null,
        h = [];
    null == b || x || !v || _ || h.push(b.dismissibleContentType);
    let [j, C] = (0, c.US)(h),
        w = i.useCallback(() => {
            C(f.L.INDIRECT_ACTION);
        }, [C]);
    return ((0, p.Z)({
        targetRef: n,
        onShouldClose: w,
        enabled: null != j,
    }),
    null == b || null == j)
        ? null
        : (0, r.jsx)(u.J2, {
              targetElementRef: n,
              shouldShow: !0,
              position: "right",
              align: "top",
              size: "sm",
              caretConfig: { align: "start" },
              title: b.title,
              body: b.body,
              onRequestClose: () => {
                  C(f.L.USER_DISMISS);
              },
          });
}
