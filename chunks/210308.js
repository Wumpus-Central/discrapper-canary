n.d(t, { Z: () => E });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(704215),
    l = n(755721),
    o = n(481060),
    c = n(243778),
    d = n(7093),
    u = n(819640),
    m = n(585483),
    p = n(553896),
    g = n(101966),
    h = n(804413),
    f = n(787528),
    b = n(474936),
    x = n(981631),
    _ = n(921944),
    j = n(388032),
    C = n(669018);
function E(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = (0, h.Z)(),
        l = (0, g.Z)({ location: 'TenureLevelUpCoachmark' }),
        m = (0, d.Z)((e) => e.isOpen),
        p = (0, s.e7)([u.Z], () => u.Z.getLayers().includes(x.S9g.USER_SETTINGS));
    return !l || null == r || m || p
        ? null
        : (0, i.jsx)(c.Nq, {
              contentType: a.z.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 1209600000 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, i.jsx)(o.yRy, {
                      shouldShow: t === a.z.NITRO_TENURE_BADGE_LEVEL_UP,
                      position: 'top',
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(O, {
                              recentlyLeveledTenureBadge: r,
                              markAsDismissed: s,
                              closePopout: t
                          });
                      },
                      targetElementRef: n,
                      children: () => null
                  });
              }
          });
}
function O(e) {
    var t;
    let { recentlyLeveledTenureBadge: n, markAsDismissed: s, closePopout: a } = e,
        c = b.Qh.indexOf(n),
        u = (0, f.J)(b.Qh[c > 0 ? c - 1 : c], { ambient: !0 }),
        g = (0, r.useCallback)(() => {
            (s(_.L.TAKE_ACTION), a(), d.Z.setState({ shouldRenderTenureLevelUp: !0 }), m.S.dispatch(x.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [s, a]),
        h = (0, r.useCallback)(() => {
            (s(_.L.USER_DISMISS), a());
        }, [s, a]),
        E = b.vK[n];
    return (0, i.jsxs)('div', {
        className: C.contents,
        children: [
            (0, i.jsx)(o.M0o, {
                className: C.closeButton,
                tooltip: j.intl.string(j.t.cpT0Cg),
                color: o.YX$.TERTIARY,
                size: o.tT7.SIZE_24,
                icon: (0, i.jsx)(o.Dio, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                onClick: h
            }),
            null != u &&
                (0, i.jsx)('img', {
                    src: u,
                    alt: j.intl.string(E.nameUnformatted),
                    className: C.badgeImage
                }),
            (0, i.jsx)(o.X6q, {
                variant: 'heading-md/extrabold',
                children: j.intl.string(j.t.VoDxsb)
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                className: C.subtitle,
                children: j.intl.formatToPlainString(j.t.ewkaVV, { timeMilestone: null == (t = (0, p.q)(E.id, E.tenureReqNumMonths)) ? void 0 : t.toLocaleLowerCase() })
            }),
            (0, i.jsx)(l.zx, {
                className: C.checkItOutButton,
                color: l.Tt.WHITE,
                size: l.Ph.SMALL,
                onClick: g,
                children: j.intl.string(j.t.RzWDqa)
            }),
            (0, i.jsx)('div', { className: C.pointer })
        ]
    });
}
