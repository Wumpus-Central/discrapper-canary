n.d(t, { Z: () => R }), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(772848),
    s = n(640358),
    a = n(442837),
    o = n(544891),
    c = n(481060),
    d = n(497321),
    u = n(841470),
    m = n(142497),
    h = n(706454),
    g = n(650774),
    x = n(430824),
    p = n(246946),
    _ = n(626135),
    C = n(146596),
    f = n(559368),
    v = n(999382),
    N = n(981631),
    j = n(190378),
    I = n(388032),
    E = n(175957);
let b = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = null;
        return (
            null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (r = I.intl.string(I.t.xO2msb)) : (r = I.intl.formatToPlainString(I.t.nskeMz, { percentage: (0, s.o)(Math.abs(t), n) })),
            {
                localizedNumber: null != e ? ''.concat((0, s.o)(e, n)).concat(i ? '%' : '') : I.intl.string(I.t.jHpxws),
                subtext: r,
                isTrendingUp: t > 0,
                isTrendingDown: t < 0
            }
        );
    },
    T = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t || e === N.evJ.NOT_ENOUGH_GUILD_MEMBERS
            ? (0, i.jsx)(c.kzN, {
                  icon: c.d3s,
                  className: E.notEnoughMembersError,
                  backgroundColor: c.mTc.BACKGROUND_ACCENT,
                  children: I.intl.string(I.t['FsgE/P'])
              })
            : null == e
              ? null
              : (0, i.jsx)(c.kzN, {
                    backgroundColor: c.mTc.BACKGROUND_ACCENT,
                    children: I.intl.string(I.t.Iju63d)
                });
    },
    S = () => {
        let [e, t] = r.useState(!1),
            n = (0, a.e7)([v.Z], () => v.Z.getGuildId());
        return (0, i.jsx)(c.zxk, {
            className: E.developerPortalCta,
            onClick: () => {
                t(!0),
                    (function (e) {
                        _.default.track(N.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, { guild_id: e });
                        let t = null == e ? N.E07.DEVELOPER_PORTAL : N.E07.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
                            n = (0, l.Z)();
                        return o.tn
                            .post({
                                url: N.ANM.HANDOFF,
                                body: { key: n },
                                oldFormErrors: !0,
                                rejectWithError: !0
                            })
                            .then(
                                (e) => {
                                    let i = e.body.handoff_token;
                                    window.open(N.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(n, i, t));
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
            children: I.intl.string(I.t.Uskgx8)
        });
    },
    R = () => {
        let e = (0, a.e7)([v.Z], () => v.Z.getGuildId()),
            t = (0, a.e7)([g.Z], () => g.Z.getMemberCount(e)),
            n = (0, a.e7)([x.Z], () => x.Z.getGuild(e)),
            l = (0, a.e7)([h.default], () => h.default.locale),
            { analytics: s, errorCode: o } = (0, a.cj)([f.Z], () => ({
                analytics: null != e ? f.Z.getOverviewAnalytics(e) : null,
                errorCode: f.Z.getError()
            })),
            _ = (0, a.e7)([p.Z], () => p.Z.getSettings().enabled),
            R = null == t || null == n || (null != t && t < 500 && null != n && !n.hasFeature(N.oNc.PARTNERED) && !n.hasFeature(N.oNc.VERIFIED));
        r.useEffect(() => {
            null == e || R || ((0, C.Vk)(e), (0, C.SR)(e), (0, C.xl)(e));
        }, [e, R]),
            r.useEffect(() => {
                (0, m.Kw)(j.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU);
            }, []);
        let Z =
            null != s
                ? (0, i.jsx)('div', {
                      className: E.__invalid_guildAnalyticsOverviewWrapper,
                      children: (0, i.jsxs)('div', {
                          className: E.overviewData,
                          children: [
                              (0, i.jsx)(u.Z, {
                                  title: I.intl.string(I.t.i0Nora),
                                  tooltipText: I.intl.string(I.t.KiRbLC),
                                  ...b(s.visitors, s.visitorsChange, l)
                              }),
                              (0, i.jsx)(u.Z, {
                                  title: I.intl.string(I.t.DDAHdX),
                                  tooltipText: I.intl.string(I.t.HxWUkZ),
                                  ...b(s.communicators, s.communicatorsChange, l)
                              }),
                              (0, i.jsx)(u.Z, {
                                  title: I.intl.string(I.t.hYeOqK),
                                  ...b(s.newMembers, s.newMembersChange, l)
                              }),
                              (0, i.jsx)(u.Z, {
                                  title: I.intl.string(I.t.jj7OPz),
                                  tooltipText: I.intl.string(I.t.MQCsl5),
                                  ...b(s.pctRetained, s.pctRetainedChange, l, !0)
                              })
                          ]
                      })
                  })
                : null;
        return (0, i.jsxs)(c.hjN, {
            tag: c.RB0.H1,
            title: I.intl.string(I.t['0wWfUF']),
            children: [
                (0, i.jsx)(c.R94, {
                    type: c.geA.DESCRIPTION,
                    children: I.intl.format(I.t.NIZ60d, {})
                }),
                T(o, R),
                (0, i.jsxs)('div', {
                    className: E.developerPortalCtaWrapper,
                    children: [
                        (0, i.jsx)('div', { className: E.placeholderImage }),
                        (0, i.jsx)(c.Text, {
                            className: E.developerPortalCtaText,
                            variant: 'text-sm/normal',
                            children: I.intl.string(I.t.A5vsws)
                        }),
                        (0, i.jsx)(S, {})
                    ]
                }),
                _
                    ? (0, i.jsx)('div', {
                          className: E.streamerMode,
                          children: (0, i.jsx)(d.Z, {})
                      })
                    : Z
            ]
        });
    };
