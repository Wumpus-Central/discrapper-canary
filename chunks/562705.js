n.d(t, { Z: () => j });
var a = n(951288),
    i = n(647438),
    r = n(442837),
    l = n(704215),
    s = n(264418),
    o = n(607070),
    c = n(243778),
    d = n(7093),
    u = n(819640),
    m = n(585483),
    p = n(553896),
    h = n(804413),
    x = n(787528),
    g = n(474936),
    f = n(981631),
    b = n(921944),
    v = n(388032);
function j(e) {
    let { groupName: t, targetElementRef: n } = e,
        i = (0, h.Z)(),
        s = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
        m = (0, d.Z)((e) => e.isOpen),
        p = (0, r.e7)([u.Z], () => u.Z.getLayers().includes(f.S9g.USER_SETTINGS));
    return s || null == i || m || p
        ? null
        : (0, a.jsx)(c.Nq, {
              contentType: l.z.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 1209600000 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: r } = e;
                  return (0, a.jsx)(_, {
                      recentlyLeveledTenureBadge: i,
                      markAsDismissed: r,
                      targetElementRef: n,
                      shouldShow: t === l.z.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function _(e) {
    var t;
    let { recentlyLeveledTenureBadge: n, markAsDismissed: r, targetElementRef: l, shouldShow: o } = e,
        c = g.Qh.indexOf(n),
        u = (0, x.J)(g.Qh[c > 0 ? c - 1 : c], { ambient: !0 }),
        h = (0, i.useCallback)(() => {
            r(b.L.TAKE_ACTION),
                d.Z.setState({ shouldRenderTenureLevelUp: !0 }),
                m.S.dispatch(f.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [r]),
        j = (0, i.useCallback)(() => {
            r(b.L.USER_DISMISS);
        }, [r]),
        _ = g.vK[n],
        y = v.intl.formatToPlainString(v.t.ewkaVR, {
            timeMilestone: null == (t = (0, p.q)(_.id, _.tenureReqNumMonths)) ? void 0 : t.toLocaleLowerCase(),
        }),
        C = [
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
        body: y,
        actions: C,
    });
}
