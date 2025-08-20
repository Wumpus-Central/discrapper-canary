n.d(t, { Z: () => O });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(704215),
    s = n(264418),
    l = n(243778),
    c = n(7093),
    u = n(819640),
    d = n(585483),
    f = n(553896),
    _ = n(101966),
    p = n(804413),
    h = n(787528),
    m = n(474936),
    g = n(981631),
    E = n(921944),
    b = n(388032);
let y = 1209600000;
function O(e) {
    let { groupName: t, targetElementRef: n } = e,
        i = (0, p.Z)(),
        s = (0, _.Z)({ location: "TenureLevelUpPopover" }),
        d = (0, c.Z)((e) => e.isOpen),
        f = (0, a.e7)([u.Z], () => u.Z.getLayers().includes(g.S9g.USER_SETTINGS));
    return !s || null == i || d || f
        ? null
        : (0, r.jsx)(l.Nq, {
              contentType: o.z.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: y },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: a } = e;
                  return (0, r.jsx)(v, {
                      recentlyLeveledTenureBadge: i,
                      markAsDismissed: a,
                      targetElementRef: n,
                      shouldShow: t === o.z.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function v(e) {
    var t;
    let { recentlyLeveledTenureBadge: n, markAsDismissed: a, targetElementRef: o, shouldShow: l } = e,
        u = m.Qh.indexOf(n),
        _ = u > 0 ? u - 1 : u,
        p = (0, h.J)(m.Qh[_], { ambient: !0 }),
        y = (0, i.useCallback)(() => {
            a(E.L.TAKE_ACTION),
                c.Z.setState({ shouldRenderTenureLevelUp: !0 }),
                d.S.dispatch(g.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [a]),
        O = (0, i.useCallback)(() => {
            a(E.L.USER_DISMISS);
        }, [a]),
        v = m.vK[n],
        I = b.intl.formatToPlainString(b.t.ewkaVV, {
            timeMilestone: null == (t = (0, f.q)(v.id, v.tenureReqNumMonths)) ? void 0 : t.toLocaleLowerCase(),
        }),
        T = {
            position: "bottom",
            align: "center",
        },
        S = [
            {
                text: b.intl.string(b.t.RzWDqa),
                variant: "primary",
                onClick: y,
            },
        ];
    return (0, r.jsx)(s.J, {
        targetElementRef: o,
        onRequestClose: O,
        shouldShow: l,
        caretConfig: T,
        graphic:
            null != p
                ? {
                      type: "image",
                      src: p,
                      aspectRatio: "6/4",
                  }
                : void 0,
        size: "lg",
        title: b.intl.string(b.t.VoDxsb),
        body: I,
        actions: S,
    });
}
