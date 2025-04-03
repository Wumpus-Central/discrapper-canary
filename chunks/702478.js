n.d(t, { Z: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(772848),
    a = n(640358),
    l = n(442837),
    o = n(544891),
    c = n(481060),
    d = n(497321),
    u = n(841470),
    m = n(142497),
    g = n(706454),
    p = n(650774),
    h = n(430824),
    f = n(246946),
    b = n(626135),
    x = n(146596),
    j = n(559368),
    N = n(999382),
    _ = n(981631),
    v = n(190378),
    C = n(388032),
    O = n(24304);
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
            null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (i = C.NW.string(C.t.xO2msb)) : (i = C.NW.formatToPlainString(C.t.nskeMz, { percentage: (0, a.o)(Math.abs(t), n) })),
            {
                localizedNumber: null != e ? ''.concat((0, a.o)(e, n)).concat(r ? '%' : '') : C.NW.string(C.t.jHpxws),
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
                  className: O.notEnoughMembersError,
                  backgroundColor: c.mTc.BACKGROUND_ACCENT,
                  children: C.NW.string(C.t['FsgE/P'])
              })
            : null == e
              ? null
              : (0, r.jsx)(c.kzN, {
                    backgroundColor: c.mTc.BACKGROUND_ACCENT,
                    children: C.NW.string(C.t.Iju63d)
                });
    },
    S = () => {
        let [e, t] = i.useState(!1),
            n = (0, l.e7)([N.Z], () => N.Z.getGuildId());
        return (0, r.jsx)(c.zxk, {
            className: O.developerPortalCta,
            onClick: () => {
                t(!0),
                    (function (e) {
                        b.default.track(_.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, { guild_id: e });
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
            children: C.NW.string(C.t.Uskgx8)
        });
    },
    T = () => {
        let e = (0, l.e7)([N.Z], () => N.Z.getGuildId()),
            t = (0, l.e7)([p.Z], () => p.Z.getMemberCount(e)),
            n = (0, l.e7)([h.Z], () => h.Z.getGuild(e)),
            s = (0, l.e7)([g.default], () => g.default.locale),
            { analytics: a, errorCode: o } = (0, l.cj)([j.Z], () => ({
                analytics: null != e ? j.Z.getOverviewAnalytics(e) : null,
                errorCode: j.Z.getError()
            })),
            b = (0, l.e7)([f.Z], () => f.Z.getSettings().enabled),
            T = null == t || null == n || (null != t && t < 500 && null != n && !n.hasFeature(_.oNc.PARTNERED) && !n.hasFeature(_.oNc.VERIFIED));
        i.useEffect(() => {
            null == e || T || ((0, x.Vk)(e), (0, x.SR)(e), (0, x.xl)(e));
        }, [e, T]),
            i.useEffect(() => {
                (0, m.Kw)(v.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU);
            }, []);
        let P =
            null != a
                ? (0, r.jsx)('div', {
                      className: O.__invalid_guildAnalyticsOverviewWrapper,
                      children: (0, r.jsxs)('div', {
                          className: O.overviewData,
                          children: [
                              (0, r.jsx)(
                                  u.Z,
                                  y(
                                      {
                                          title: C.NW.string(C.t.i0Nora),
                                          tooltipText: C.NW.string(C.t.KiRbLC)
                                      },
                                      I(a.visitors, a.visitorsChange, s)
                                  )
                              ),
                              (0, r.jsx)(
                                  u.Z,
                                  y(
                                      {
                                          title: C.NW.string(C.t.DDAHdX),
                                          tooltipText: C.NW.string(C.t.HxWUkZ)
                                      },
                                      I(a.communicators, a.communicatorsChange, s)
                                  )
                              ),
                              (0, r.jsx)(u.Z, y({ title: C.NW.string(C.t.hYeOqK) }, I(a.newMembers, a.newMembersChange, s))),
                              (0, r.jsx)(
                                  u.Z,
                                  y(
                                      {
                                          title: C.NW.string(C.t.jj7OPz),
                                          tooltipText: C.NW.string(C.t.MQCsl5)
                                      },
                                      I(a.pctRetained, a.pctRetainedChange, s, !0)
                                  )
                              )
                          ]
                      })
                  })
                : null;
        return (0, r.jsxs)(c.hjN, {
            tag: c.RB0.H1,
            title: C.NW.string(C.t['0wWfUF']),
            children: [
                (0, r.jsx)(c.R94, {
                    type: c.geA.DESCRIPTION,
                    children: C.NW.format(C.t.NIZ60d, {})
                }),
                E(o, T),
                (0, r.jsxs)('div', {
                    className: O.developerPortalCtaWrapper,
                    children: [
                        (0, r.jsx)('div', { className: O.placeholderImage }),
                        (0, r.jsx)(c.Text, {
                            className: O.developerPortalCtaText,
                            variant: 'text-sm/normal',
                            children: C.NW.string(C.t.A5vsws)
                        }),
                        (0, r.jsx)(S, {})
                    ]
                }),
                b
                    ? (0, r.jsx)('div', {
                          className: O.streamerMode,
                          children: (0, r.jsx)(d.Z, {})
                      })
                    : P
            ]
        });
    };
