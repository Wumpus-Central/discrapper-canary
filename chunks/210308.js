n.d(t, { Z: () => S });
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
    h = n(101966),
    f = n(804413),
    b = n(787528),
    _ = n(474936),
    x = n(981631),
    E = n(921944),
    C = n(46140),
    O = n(388032),
    j = n(669018);
function S(e) {
    let { groupName: t, targetElementRef: n } = e,
        r = (0, f.Z)(),
        d = (0, h.Z)({ location: 'TenureLevelUpCoachmark' }),
        g = (0, l.e7)([m.Z], () => m.Z.isOpen()),
        p = (0, u.Ws)({ location: C.dr.CONFLICT_CHECKS });
    return d && null != r && !g && p
        ? (0, i.jsx)(c.Nq, {
              contentType: a.z.NITRO_TENURE_BADGE_LEVEL_UP,
              timeRecurringConfig: { cooldownDurationMs: 1209600000 },
              groupName: t,
              children: (e) => {
                  let { visibleContent: t, markAsDismissed: l } = e,
                      c = (0, s.once)(l);
                  return (0, i.jsx)(o.yRy, {
                      shouldShow: t === a.z.NITRO_TENURE_BADGE_LEVEL_UP,
                      position: 'top',
                      onRequestClose: () => c(E.L.INDIRECT_ACTION),
                      renderPopout: (e) => {
                          let { closePopout: t } = e;
                          return (0, i.jsx)(v, {
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
function v(e) {
    var t;
    let { recentlyLeveledTenureBadge: n, markAsDismissed: s, closePopout: l } = e,
        a = (0, b.J)(n, { ambient: !0 });
    (0, r.useEffect)(() => {
        d.Z.setState({ shouldRenderTenureLevelUp: !0 });
    }, []);
    let c = (0, r.useCallback)(() => {
            s(E.L.TAKE_ACTION), l(), g.S.dispatch(x.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, {});
        }, [s, l]),
        u = (0, r.useCallback)(() => {
            s(E.L.USER_DISMISS), l(), d.Z.setState({ shouldRenderTenureLevelUp: !1 });
        }, [s, l]),
        m = _.vK[n];
    return (0, i.jsxs)('div', {
        className: j.contents,
        children: [
            (0, i.jsx)(o.M0o, {
                className: j.closeButton,
                tooltip: O.intl.string(O.t.cpT0Cg),
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
                    alt: O.intl.string(m.nameUnformatted),
                    className: j.badgeImage
                }),
            (0, i.jsx)(o.X6q, {
                variant: 'heading-md/extrabold',
                children: O.intl.string(O.t.VoDxsb)
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                className: j.subtitle,
                children: O.intl.formatToPlainString(O.t.ewkaVV, { timeMilestone: null == (t = (0, p.q)(m.id, m.tenureReqNumMonths)) ? void 0 : t.toLocaleLowerCase() })
            }),
            (0, i.jsx)(o.zxk, {
                className: j.checkItOutButton,
                color: o.Ttl.WHITE,
                size: o.PhG.SMALL,
                onClick: c,
                children: O.intl.string(O.t.RzWDqa)
            }),
            (0, i.jsx)('div', { className: j.pointer })
        ]
    });
}
