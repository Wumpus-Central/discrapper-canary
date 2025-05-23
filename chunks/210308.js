n.d(t, { Z: () => S });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(243778),
    c = n(7093),
    d = n(667105),
    u = n(663389),
    m = n(585483),
    g = n(553896),
    p = n(765018),
    h = n(101966),
    f = n(804413),
    b = n(787528),
    _ = n(474936),
    x = n(981631),
    E = n(921944),
    C = n(46140),
    j = n(388032),
    O = n(669018);
function S(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = (0, f.Z)(),
        c = (0, h.Z)({ location: 'TenureLevelUpCoachmark' }),
        m = (0, s.e7)([u.Z], () => u.Z.isOpen()),
        g = (0, d.Ws)({ location: C.dr.CONFLICT_CHECKS });
    return c && null != r && !m && g
        ? (0, i.jsx)(o.Xf, {
              contentType: l.z.NITRO_TENURE_BADGE_LEVEL_UP,
              latestVersion: (0, p.q)(r),
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: s } = e;
                  return (
                      t === l.z.NITRO_TENURE_BADGE_LEVEL_UP &&
                      (0, i.jsx)(a.yRy, {
                          shouldShow: !0,
                          position: 'top',
                          onRequestClose: () => s(E.L.INDIRECT_ACTION),
                          renderPopout: (e) => {
                              let { closePopout: t } = e;
                              return (0, i.jsx)(v, {
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
function v(e) {
    var t;
    let { recentlyLeveledTenureBadge: n, markAsDismissed: s, closePopout: l } = e,
        o = (0, b.J)(n, { ambient: !0 });
    (0, r.useEffect)(() => {
        c.Z.setState({ shouldRenderTenureLevelUp: !0 });
    }, []);
    let d = (0, r.useCallback)(() => {
            s(E.L.TAKE_ACTION), l(), m.S.dispatch(x.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [s, l]),
        u = (0, r.useCallback)(() => {
            s(E.L.USER_DISMISS), l(), c.Z.setState({ shouldRenderTenureLevelUp: !1 });
        }, [s, l]),
        p = _.vK[n];
    return (0, i.jsxs)('div', {
        className: O.contents,
        children: [
            (0, i.jsx)(a.M0o, {
                className: O.closeButton,
                tooltip: j.intl.string(j.t.cpT0Cg),
                color: a.YX$.TERTIARY,
                size: a.tT7.SIZE_24,
                icon: (0, i.jsx)(a.Dio, {
                    size: 'xs',
                    color: 'currentColor'
                }),
                onClick: u
            }),
            null != o &&
                (0, i.jsx)('img', {
                    src: o,
                    alt: j.intl.string(p.nameUnformatted),
                    className: O.badgeImage
                }),
            (0, i.jsx)(a.X6q, {
                variant: 'heading-md/extrabold',
                children: j.intl.string(j.t.VoDxsb)
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-sm/medium',
                className: O.subtitle,
                children: j.intl.formatToPlainString(j.t.ewkaVV, { timeMilestone: null == (t = (0, g.q)(p.id, p.tenureReqNumMonths)) ? void 0 : t.toLocaleLowerCase() })
            }),
            (0, i.jsx)(a.zxk, {
                className: O.checkItOutButton,
                color: a.Ttl.WHITE,
                size: a.PhG.SMALL,
                onClick: d,
                children: j.intl.string(j.t.RzWDqa)
            }),
            (0, i.jsx)('div', { className: O.pointer })
        ]
    });
}
