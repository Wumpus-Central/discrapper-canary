n.d(t, { Z: () => v });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(704215),
    l = n(755721),
    o = n(481060),
    c = n(243778),
    d = n(7093),
    u = n(667105),
    m = n(819640),
    p = n(585483),
    g = n(553896),
    h = n(101966),
    f = n(804413),
    b = n(787528),
    x = n(474936),
    _ = n(981631),
    j = n(921944),
    C = n(46140),
    O = n(388032),
    E = n(669018);
function v(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = (0, f.Z)(),
        l = (0, h.Z)({ location: 'TenureLevelUpCoachmark' }),
        p = (0, d.Z)((e) => e.isOpen),
        g = (0, s.e7)([m.Z], () => m.Z.getLayers().includes(_.S9g.USER_SETTINGS)),
        b = (0, u.Ws)({ location: C.dr.CONFLICT_CHECKS });
    return !l || null == r || p || g || !b
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
                          return (0, i.jsx)(S, {
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
function S(e) {
    var t;
    let { recentlyLeveledTenureBadge: n, markAsDismissed: s, closePopout: a } = e,
        c = x.Qh.indexOf(n),
        u = (0, b.J)(x.Qh[c > 0 ? c - 1 : c], { ambient: !0 }),
        m = (0, r.useCallback)(() => {
            (s(j.L.TAKE_ACTION), a(), d.Z.setState({ shouldRenderTenureLevelUp: !0 }), p.S.dispatch(_.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {}));
        }, [s, a]),
        h = (0, r.useCallback)(() => {
            (s(j.L.USER_DISMISS), a());
        }, [s, a]),
        f = x.vK[n];
    return (0, i.jsxs)('div', {
        className: E.contents,
        children: [
            (0, i.jsx)(o.M0o, {
                className: E.closeButton,
                tooltip: O.intl.string(O.t.cpT0Cg),
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
                    alt: O.intl.string(f.nameUnformatted),
                    className: E.badgeImage
                }),
            (0, i.jsx)(o.X6q, {
                variant: 'heading-md/extrabold',
                children: O.intl.string(O.t.VoDxsb)
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                className: E.subtitle,
                children: O.intl.formatToPlainString(O.t.ewkaVV, { timeMilestone: null == (t = (0, g.q)(f.id, f.tenureReqNumMonths)) ? void 0 : t.toLocaleLowerCase() })
            }),
            (0, i.jsx)(l.zx, {
                className: E.checkItOutButton,
                color: l.Tt.WHITE,
                size: l.Ph.SMALL,
                onClick: m,
                children: O.intl.string(O.t.RzWDqa)
            }),
            (0, i.jsx)('div', { className: E.pointer })
        ]
    });
}
