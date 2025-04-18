n.d(t, { Z: () => T }), n(388685);
var r = n(200651),
    i = n(192379),
    s = n(772848),
    l = n(640358),
    a = n(442837),
    o = n(544891),
    c = n(481060),
    d = n(497321),
    u = n(841470),
    m = n(142497),
    g = n(706454),
    p = n(650774),
    h = n(430824),
    f = n(246946),
    x = n(626135),
    b = n(146596),
    j = n(559368),
    N = n(999382),
    _ = n(981631),
    v = n(190378),
    O = n(388032),
    C = n(271866);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let I = function (e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = null;
        return (
            null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (i = O.NW.string(O.t.xO2msb)) : (i = O.NW.formatToPlainString(O.t.nskeMz, { percentage: (0, l.o)(Math.abs(t), n) })),
            {
                localizedNumber: null != e ? ''.concat((0, l.o)(e, n)).concat(r ? '%' : '') : O.NW.string(O.t.jHpxws),
                subtext: i,
                isTrendingUp: t > 0,
                isTrendingDown: t < 0
            }
        );
    },
    E = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t || e === _.evJ.NOT_ENOUGH_GUILD_MEMBERS
            ? (0, r.jsx)(c.kzN, {
                  icon: c.d3s,
                  className: C.notEnoughMembersError,
                  backgroundColor: c.mTc.BACKGROUND_ACCENT,
                  children: O.NW.string(O.t['FsgE/P'])
              })
            : null == e
              ? null
              : (0, r.jsx)(c.kzN, {
                    backgroundColor: c.mTc.BACKGROUND_ACCENT,
                    children: O.NW.string(O.t.Iju63d)
                });
    },
    S = () => {
        let [e, t] = i.useState(!1),
            n = (0, a.e7)([N.Z], () => N.Z.getGuildId());
        return (0, r.jsx)(c.zxk, {
            className: C.developerPortalCta,
            onClick: () => {
                t(!0),
                    (function (e) {
                        x.default.track(_.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, { guild_id: e });
                        let t = null == e ? _.E07.DEVELOPER_PORTAL : _.E07.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
                            n = (0, s.Z)();
                        return o.tn
                            .post({
                                url: _.ANM.HANDOFF,
                                body: { key: n },
                                oldFormErrors: !0,
                                rejectWithError: !0
                            })
                            .then(
                                (e) => {
                                    let r = e.body.handoff_token;
                                    window.open(_.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(n, r, t));
                                },
                                () => {
                                    window.open(t);
                                }
                            );
                    })(n).then(() => {
                        t(!1);
                    });
            },
            submitting: e,
            children: O.NW.string(O.t.Uskgx8)
        });
    },
    T = () => {
        let e = (0, a.e7)([N.Z], () => N.Z.getGuildId()),
            t = (0, a.e7)([p.Z], () => p.Z.getMemberCount(e)),
            n = (0, a.e7)([h.Z], () => h.Z.getGuild(e)),
            s = (0, a.e7)([g.default], () => g.default.locale),
            { analytics: l, errorCode: o } = (0, a.cj)([j.Z], () => ({
                analytics: null != e ? j.Z.getOverviewAnalytics(e) : null,
                errorCode: j.Z.getError()
            })),
            x = (0, a.e7)([f.Z], () => f.Z.getSettings().enabled),
            T = null == t || null == n || (null != t && t < 500 && null != n && !n.hasFeature(_.oNc.PARTNERED) && !n.hasFeature(_.oNc.VERIFIED));
        i.useEffect(() => {
            null == e || T || ((0, b.Vk)(e), (0, b.SR)(e), (0, b.xl)(e));
        }, [e, T]),
            i.useEffect(() => {
                (0, m.Kw)(v.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU);
            }, []);
        let P =
            null != l
                ? (0, r.jsx)('div', {
                      className: C.__invalid_guildAnalyticsOverviewWrapper,
                      children: (0, r.jsxs)('div', {
                          className: C.overviewData,
                          children: [
                              (0, r.jsx)(
                                  u.Z,
                                  y(
                                      {
                                          title: O.NW.string(O.t.i0Nora),
                                          tooltipText: O.NW.string(O.t.KiRbLC)
                                      },
                                      I(l.visitors, l.visitorsChange, s)
                                  )
                              ),
                              (0, r.jsx)(
                                  u.Z,
                                  y(
                                      {
                                          title: O.NW.string(O.t.DDAHdX),
                                          tooltipText: O.NW.string(O.t.HxWUkZ)
                                      },
                                      I(l.communicators, l.communicatorsChange, s)
                                  )
                              ),
                              (0, r.jsx)(u.Z, y({ title: O.NW.string(O.t.hYeOqK) }, I(l.newMembers, l.newMembersChange, s))),
                              (0, r.jsx)(
                                  u.Z,
                                  y(
                                      {
                                          title: O.NW.string(O.t.jj7OPz),
                                          tooltipText: O.NW.string(O.t.MQCsl5)
                                      },
                                      I(l.pctRetained, l.pctRetainedChange, s, !0)
                                  )
                              )
                          ]
                      })
                  })
                : null;
        return (0, r.jsxs)(c.hjN, {
            tag: c.RB0.H1,
            title: O.NW.string(O.t['0wWfUF']),
            children: [
                (0, r.jsx)(c.R94, {
                    type: c.geA.DESCRIPTION,
                    children: O.NW.format(O.t.NIZ60d, {})
                }),
                E(o, T),
                (0, r.jsxs)('div', {
                    className: C.developerPortalCtaWrapper,
                    children: [
                        (0, r.jsx)('div', { className: C.placeholderImage }),
                        (0, r.jsx)(c.Text, {
                            className: C.developerPortalCtaText,
                            variant: 'text-sm/normal',
                            children: O.NW.string(O.t.A5vsws)
                        }),
                        (0, r.jsx)(S, {})
                    ]
                }),
                x
                    ? (0, r.jsx)('div', {
                          className: C.streamerMode,
                          children: (0, r.jsx)(d.Z, {})
                      })
                    : P
            ]
        });
    };
