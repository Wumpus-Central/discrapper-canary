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
    x = n(787528),
    f = n(474936),
    g = n(981631),
    b = n(921944),
    v = n(388032);
function j(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = (0, h.Z)(),
        s = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        m = (0, d.Z)((e) => e.isOpen),
        p = (0, i.e7)([u.Z], () => u.Z.getLayers().includes(g.S9g.USER_SETTINGS));
    return s || null == r || m || p
        ? null
        : (0, a.jsx)(c.Nq, {
              contentType: l.z.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 1209600000 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: i } = e;
                  return (0, a.jsx)(_, {
                      recentlyLeveledTenureBadge: r,
                      markAsDismissed: i,
                      targetElementRef: n,
                      shouldShow: t === l.z.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function _(e) {
    var t;
    let { recentlyLeveledTenureBadge: n, markAsDismissed: i, targetElementRef: l, shouldShow: o } = e,
        c = f.Qh.indexOf(n),
        u = (0, x.J)(f.Qh[c > 0 ? c - 1 : c], { ambient: !0 }),
        h = (0, r.useCallback)(() => {
            i(b.L.TAKE_ACTION),
                d.Z.setState({ shouldRenderTenureLevelUp: !0 }),
                m.S.dispatch(g.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [i]),
        j = (0, r.useCallback)(() => {
            i(b.L.USER_DISMISS);
        }, [i]),
        _ = f.vK[n],
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
