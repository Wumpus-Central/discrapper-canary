n.d(t, { Z: () => j });
var a = n(54381),
    r = n(473749),
    i = n(442837),
    l = n(704215),
    s = n(264418),
    o = n(607070),
    c = n(243778),
    d = n(7093),
    u = n(819640),
    m = n(585483),
    p = n(553896),
    h = n(804413),
    f = n(787528),
    x = n(474936),
    b = n(981631),
    g = n(921944),
    v = n(388032);
function j(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = (0, h.Z)(),
        s = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        m = (0, d.Z)((e) => e.isOpen),
        p = (0, i.e7)([u.Z], () => u.Z.getLayers().includes(b.S9g.USER_SETTINGS));
    return s || null == r || m || p
        ? null
        : (0, a.jsx)(c.Nq, {
              contentType: l.z.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 1209600000 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: i } = e;
                  return (0, a.jsx)(y, {
                      recentlyLeveledTenureBadge: r,
                      markAsDismissed: i,
                      targetElementRef: n,
                      shouldShow: t === l.z.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function y(e) {
    var t;
    let { recentlyLeveledTenureBadge: n, markAsDismissed: i, targetElementRef: l, shouldShow: o } = e,
        c = x.Qh.indexOf(n),
        u = (0, f.J)(x.Qh[c > 0 ? c - 1 : c], { ambient: !0 }),
        h = (0, r.useCallback)(() => {
            i(g.L.TAKE_ACTION),
                d.Z.setState({ shouldRenderTenureLevelUp: !0 }),
                m.S.dispatch(b.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [i]),
        j = (0, r.useCallback)(() => {
            i(g.L.USER_DISMISS);
        }, [i]),
        y = x.vK[n],
        C = v.intl.formatToPlainString(v.t.ewkaVR, {
            timeMilestone: null == (t = (0, p.q)(y.id, y.tenureReqNumMonths)) ? void 0 : t.toLocaleLowerCase(),
        }),
        _ = [
            {
                text: v.intl.string(v.t.RzWDqY),
                variant: "primary",
                onClick: h,
            },
        ];
    return (0, a.jsx)(s.J, {
        targetElementRef: l,
        onRequestClose: j,
        shouldShow: o,
        caretConfig: { align: "center" },
        graphic:
            null != u
                ? {
                      type: "image",
                      src: u,
                      aspectRatio: "6/4",
                  }
                : void 0,
        size: "lg",
        title: v.intl.string(v.t.VoDxsV),
        body: C,
        actions: _,
    });
}
