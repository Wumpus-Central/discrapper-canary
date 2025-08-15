n.d(t, { Z: () => T });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(704215),
    l = n(920155),
    o = n(744399),
    c = n(454028),
    d = n(966902),
    u = n(237872),
    m = n(562618),
    p = n(243778),
    g = n(7093),
    h = n(819640),
    f = n(585483),
    b = n(553896),
    x = n(101966),
    _ = n(804413),
    j = n(787528),
    E = n(474936),
    C = n(981631),
    O = n(921944),
    v = n(388032),
    S = n(30083);
function T(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = (0, _.Z)(),
        l = (0, x.Z)({ location: "TenureLevelUpPopover" }),
        o = (0, g.Z)((e) => e.isOpen),
        c = (0, s.e7)([h.Z], () => h.Z.getLayers().includes(C.S9g.USER_SETTINGS));
    return !l || null == r || o || c
        ? null
        : (0, i.jsx)(p.Nq, {
              contentType: a.z.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 1209600000 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, i.jsx)(N, {
                      recentlyLeveledTenureBadge: r,
                      markAsDismissed: s,
                      targetElementRef: n,
                      shouldShow: t === a.z.NITRO_TENURE_BADGE_LEVEL_UP,
                  });
              },
          });
}
function N(e) {
    var t;
    let { recentlyLeveledTenureBadge: n, markAsDismissed: s, targetElementRef: a, shouldShow: p } = e,
        h = E.Qh.indexOf(n),
        x = (0, j.J)(E.Qh[h > 0 ? h - 1 : h], { ambient: !0 }),
        _ = (0, r.useCallback)(() => {
            s(O.L.TAKE_ACTION),
                g.Z.setState({ shouldRenderTenureLevelUp: !0 }),
                f.S.dispatch(C.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [s]),
        T = (0, r.useCallback)(() => {
            s(O.L.USER_DISMISS);
        }, [s]),
        N = E.vK[n],
        I = v.intl.formatToPlainString(v.t.ewkaVV, {
            timeMilestone: null == (t = (0, b.q)(N.id, N.tenureReqNumMonths)) ? void 0 : t.toLocaleLowerCase(),
        }),
        y = {
            position: "bottom",
            align: "center",
        },
        A = [
            {
                text: v.intl.string(v.t.RzWDqa),
                variant: "primary",
                onClick: _,
            },
        ];
    return (0, i.jsx)(l.m, {
        targetElementRef: a,
        shouldShow: p,
        caretConfig: y,
        children: (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(u.u, {
                    onClick: T,
                    colorMix: !1,
                }),
                null != x
                    ? (0, i.jsx)(c.V, {
                          asset: (0, i.jsx)("img", {
                              src: x,
                              alt: v.intl.string(N.nameUnformatted),
                              className: S.badgeImage,
                          }),
                          size: "md",
                      })
                    : null,
                (0, i.jsx)(m.Y, {
                    title: v.intl.string(v.t.VoDxsb),
                    body: I,
                    hasBottomMargin: !0,
                }),
                (0, i.jsx)(o.k, { actions: A }),
                (0, i.jsx)(d.$, { caretConfig: y }),
            ],
        }),
    });
}
