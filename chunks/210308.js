n.d(t, { Z: () => O });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(243778),
    c = n(7093),
    d = n(667105),
    u = n(663389),
    g = n(585483),
    m = n(765018),
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
        c = (0, p.Z)({ location: 'TenureLevelUpCoachmark' }),
        g = (0, s.e7)([u.Z], () => u.Z.isOpen()),
        f = (0, d.Ws)({ location: E.dr.CONFLICT_CHECKS });
    return c && null != r && !g && f
        ? (0, i.jsx)(o.Xf, {
              contentType: l.z.NITRO_TENURE_BADGE_LEVEL_UP,
              latestVersion: (0, m.q)(r),
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (
                      t === l.z.NITRO_TENURE_BADGE_LEVEL_UP &&
                      (0, i.jsx)(a.yRy, {
                          shouldShow: !0,
                          position: 'top',
                          onRequestClose: () => s(x.L.INDIRECT_ACTION),
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
                      })
                  );
              }
          })
        : null;
}
function S(e) {
    let { recentlyLeveledTenureBadge: t, markAsDismissed: n, closePopout: s } = e,
        l = (0, f.J)(t, { ambient: !0 });
    (0, r.useEffect)(() => {
        c.Z.setState({ shouldRenderTenureLevelUp: !0 });
    }, []);
    let o = (0, r.useCallback)(() => {
            n(x.L.TAKE_ACTION), s(), g.S.dispatch(_.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [n, s]),
        d = (0, r.useCallback)(() => {
            n(x.L.USER_DISMISS), s(), c.Z.setState({ shouldRenderTenureLevelUp: !1 });
        }, [n, s]),
        u = b.vK[t];
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
                onClick: d
            }),
            null != l &&
                (0, i.jsx)('img', {
                    src: l,
                    alt: C.intl.string(u.nameUnformatted),
                    className: j.badgeImage
                }),
            (0, i.jsx)(a.X6q, {
                variant: 'heading-md/extrabold',
                children: C.intl.string(C.t.VoDxsb)
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/medium',
                className: j.subtitle,
                children: C.intl.string(C.t.ZGKm3t)
            }),
            (0, i.jsx)(a.zxk, {
                className: j.checkItOutButton,
                color: a.Ttl.WHITE,
                size: a.PhG.SMALL,
                onClick: o,
                children: C.intl.string(C.t.RzWDqa)
            }),
            (0, i.jsx)('div', { className: j.pointer })
        ]
    });
}
