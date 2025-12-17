n.d(t, { Z: () => v }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(494497),
    o = n(442837),
    a = n(704215),
    s = n(952265),
    c = n(907862),
    u = n(243778),
    d = n(819640),
    f = n(476044),
    p = n(921944),
    m = n(556970),
    g = n(388032);
function v(e) {
    let { powerup: t, targetRef: n, isCardVisible: v } = e,
        x = (0, o.e7)([d.Z], () => d.Z.hasLayers()),
        b = (0, s.useHasAnyModalOpen)(),
        h =
            t.skuId === l.A$
                ? {
                      title: g.intl.string(m.default.YWo6VL),
                      body: g.intl.string(m.default.gXVvKc),
                      dismissibleContentType: a.z.VANITY_URL_POWERUP_EDUCATIONAL_POPOVER,
                  }
                : null,
        j = [];
    null == h || x || !v || b || j.push(h.dismissibleContentType);
    let [_, C] = (0, u.US)(j),
        Z = i.useCallback(() => {
            C(p.L.INDIRECT_ACTION);
        }, [C]);
    return ((0, f.Z)({
        targetRef: n,
        onShouldClose: Z,
        enabled: null != _,
    }),
    null == h || null == _)
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
                  C(p.L.USER_DISMISS);
              },
          });
}
