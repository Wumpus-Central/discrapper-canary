n.d(t, { Z: () => O });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(243778),
    c = n(7093),
    d = n(667105),
    u = n(819640),
    m = n(585483),
    g = n(553896),
    p = n(101966),
    h = n(804413),
    f = n(787528),
    b = n(474936),
    _ = n(981631),
    x = n(921944),
    E = n(46140),
    C = n(388032),
    j = n(669018);
function O(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = (0, h.Z)(),
        m = (0, p.Z)({ location: 'TenureLevelUpCoachmark' }),
        g = (0, c.Z)((e) => e.isOpen),
        f = (0, s.e7)([u.Z], () => u.Z.getLayers().includes(_.S9g.USER_SETTINGS)),
        b = (0, d.Ws)({ location: E.dr.CONFLICT_CHECKS });
    return !m || null == r || g || f || !b
        ? null
        : (0, i.jsx)(o.Nq, {
              contentType: l.z.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 1209600000 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (0, i.jsx)(a.yRy, {
                      shouldShow: t === l.z.NITRO_TENURE_BADGE_LEVEL_UP,
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
    let { recentlyLeveledTenureBadge: n, markAsDismissed: s, closePopout: l } = e,
        o = b.Qh.indexOf(n),
        d = (0, f.J)(b.Qh[o > 0 ? o - 1 : o], { ambient: !0 }),
        u = (0, r.useCallback)(() => {
            s(x.L.TAKE_ACTION), l(), c.Z.setState({ shouldRenderTenureLevelUp: !0 }), m.S.dispatch(_.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [s, l]),
        p = (0, r.useCallback)(() => {
            s(x.L.USER_DISMISS), l();
        }, [s, l]),
        h = b.vK[n];
    return (0, i.jsxs)('div', {
        className: j.contents,
        children: [
            (0, i.jsx)(a.M0o, {
                className: j.closeButton,
                tooltip: C.intl.string(C.t.cpT0Cg),
                color: a.YX$.TERTIARY,
                size: a.tT7.SIZE_24,
                icon: (0, i.jsx)(a.Dio, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                onClick: p
            }),
            null != d &&
                (0, i.jsx)('img', {
                    src: d,
                    alt: C.intl.string(h.nameUnformatted),
                    className: j.badgeImage
                }),
            (0, i.jsx)(a.X6q, {
                variant: 'heading-md/extrabold',
                children: C.intl.string(C.t.VoDxsb)
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/medium',
                className: j.subtitle,
                children: C.intl.formatToPlainString(C.t.ewkaVV, { timeMilestone: null == (t = (0, g.q)(h.id, h.tenureReqNumMonths)) ? void 0 : t.toLocaleLowerCase() })
            }),
            (0, i.jsx)(a.zxk, {
                className: j.checkItOutButton,
                color: a.Ttl.WHITE,
                size: a.PhG.SMALL,
                onClick: u,
                children: C.intl.string(C.t.RzWDqa)
            }),
            (0, i.jsx)('div', { className: j.pointer })
        ]
    });
}
