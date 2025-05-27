n.d(t, { Z: () => v });
var i = n(255367),
    r = n(73800),
    s = n(392711),
    l = n(442837),
    a = n(704215),
    o = n(481060),
    c = n(243778),
    d = n(7093),
    u = n(667105),
    m = n(663389),
    g = n(585483),
    p = n(553896),
    h = n(765018),
    f = n(101966),
    b = n(804413),
    _ = n(787528),
    x = n(474936),
    E = n(981631),
    C = n(921944),
    O = n(46140),
    j = n(388032),
    S = n(669018);
function v(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = (0, b.Z)(),
        d = (0, f.Z)({ location: 'TenureLevelUpCoachmark' }),
        g = (0, l.e7)([m.Z], () => m.Z.isOpen()),
        p = (0, u.Ws)({ location: O.dr.CONFLICT_CHECKS });
    return d && null != r && !g && p
        ? (0, i.jsx)(c.Xf, {
              contentType: a.z.NITRO_TENURE_BADGE_LEVEL_UP,
              latestVersion: (0, h.q)(r),
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: l } = e,
                      c = (0, s.once)(l);
                  return (0, i.jsx)(o.yRy, {
                      shouldShow: t === a.z.NITRO_TENURE_BADGE_LEVEL_UP,
                      position: 'top',
                      onRequestClose: () => c(C.L.INDIRECT_ACTION),
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(T, {
                              recentlyLeveledTenureBadge: r,
                              markAsDismissed: c,
                              closePopout: t
                          });
                      },
                      targetElementRef: n,
                      children: () => null
                  });
              }
          })
        : null;
}
function T(e) {
    var t;
    let { recentlyLeveledTenureBadge: n, markAsDismissed: s, closePopout: l } = e,
        a = (0, _.J)(n, { ambient: !0 });
    (0, r.useEffect)(() => {
        d.Z.setState({ shouldRenderTenureLevelUp: !0 });
    }, []);
    let c = (0, r.useCallback)(() => {
            s(C.L.TAKE_ACTION), l(), g.S.dispatch(E.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [s, l]),
        u = (0, r.useCallback)(() => {
            s(C.L.USER_DISMISS), l(), d.Z.setState({ shouldRenderTenureLevelUp: !1 });
        }, [s, l]),
        m = x.vK[n];
    return (0, i.jsxs)('div', {
        className: S.contents,
        children: [
            (0, i.jsx)(o.M0o, {
                className: S.closeButton,
                tooltip: j.intl.string(j.t.cpT0Cg),
                color: o.YX$.TERTIARY,
                size: o.tT7.SIZE_24,
                icon: (0, i.jsx)(o.Dio, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                onClick: u
            }),
            null != a &&
                (0, i.jsx)('img', {
                    src: a,
                    alt: j.intl.string(m.nameUnformatted),
                    className: S.badgeImage
                }),
            (0, i.jsx)(o.X6q, {
                variant: 'heading-md/extrabold',
                children: j.intl.string(j.t.VoDxsb)
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                className: S.subtitle,
                children: j.intl.formatToPlainString(j.t.ewkaVV, { timeMilestone: null == (t = (0, p.q)(m.id, m.tenureReqNumMonths)) ? void 0 : t.toLocaleLowerCase() })
            }),
            (0, i.jsx)(o.zxk, {
                className: S.checkItOutButton,
                color: o.Ttl.WHITE,
                size: o.PhG.SMALL,
                onClick: c,
                children: j.intl.string(j.t.RzWDqa)
            }),
            (0, i.jsx)('div', { className: S.pointer })
        ]
    });
}
