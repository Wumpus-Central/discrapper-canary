n.d(t, { Z: () => j });
var i = n(951288),
    r = n(647438),
    s = n(442837),
    a = n(704215),
    l = n(264418),
    o = n(243778),
    c = n(7093),
    d = n(819640),
    u = n(585483),
    m = n(553896),
    p = n(101966),
    g = n(804413),
    h = n(787528),
    f = n(474936),
    b = n(981631),
    x = n(921944),
    _ = n(388032);
function j(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = (0, g.Z)(),
        l = (0, p.Z)({ location: "TenureLevelUpPopover" }),
        u = (0, c.Z)((e) => e.isOpen),
        m = (0, s.e7)([d.Z], () => d.Z.getLayers().includes(b.S9g.USER_SETTINGS));
    return !l || null == r || u || m
        ? null
        : (0, i.jsx)(o.Nq, {
              contentType: a.z.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 1209600000 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, i.jsx)(E, {
                      recentlyLeveledTenureBadge: r,
                      markAsDismissed: s,
                      targetElementRef: n,
                      shouldShow: t === a.z.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function E(e) {
    var t;
    let { recentlyLeveledTenureBadge: n, markAsDismissed: s, targetElementRef: a, shouldShow: o } = e,
        d = f.Qh.indexOf(n),
        p = (0, h.J)(f.Qh[d > 0 ? d - 1 : d], { ambient: !0 }),
        g = (0, r.useCallback)(() => {
            s(x.L.TAKE_ACTION),
                c.Z.setState({ shouldRenderTenureLevelUp: !0 }),
                u.S.dispatch(b.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [s]),
        j = (0, r.useCallback)(() => {
            s(x.L.USER_DISMISS);
        }, [s]),
        E = f.vK[n],
        C = _.intl.formatToPlainString(_.t.ewkaVV, {
            timeMilestone: null == (t = (0, m.q)(E.id, E.tenureReqNumMonths)) ? void 0 : t.toLocaleLowerCase(),
        }),
        O = [
            {
                text: _.intl.string(_.t.RzWDqa),
                variant: "primary",
                onClick: g,
            },
        ];
    return (0, i.jsx)(l.J, {
        targetElementRef: a,
        onRequestClose: j,
        shouldShow: o,
        caretConfig: {
            position: "bottom",
            align: "center",
        },
        graphic:
            null != p
                ? {
                      type: "image",
                      src: p,
                      aspectRatio: "6/4",
                  }
                : void 0,
        size: "lg",
        title: _.intl.string(_.t.VoDxsb),
        body: C,
        actions: O,
    });
}
