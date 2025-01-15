n(47120);
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
    f = n(626135),
    C = n(146596),
    v = n(559368),
    I = n(999382),
    N = n(981631),
    _ = n(190378),
    T = n(388032),
    j = n(455342);
let b = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            r = null;
        return (
            null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (r = T.intl.string(T.t.xO2msb)) : (r = T.intl.formatToPlainString(T.t.nskeMz, { percentage: (0, s.o)(Math.abs(t), n) })),
            {
                localizedNumber: null != e ? ''.concat((0, s.o)(e, n)).concat(i ? '%' : '') : T.intl.string(T.t.jHpxws),
                subtext: r,
                isTrendingUp: t > 0,
                isTrendingDown: t < 0
            }
        );
    },
    E = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t || e === N.evJ.NOT_ENOUGH_GUILD_MEMBERS
            ? (0, i.jsx)(c.FormErrorBlock, {
                  icon: c.CircleInformationIcon,
                  className: j.notEnoughMembersError,
                  backgroundColor: c.FormErrorBlockColors.BACKGROUND_ACCENT,
                  children: T.intl.string(T.t['FsgE/P'])
              })
            : null == e
              ? null
              : (0, i.jsx)(c.FormErrorBlock, {
                    backgroundColor: c.FormErrorBlockColors.BACKGROUND_ACCENT,
                    children: T.intl.string(T.t.Iju63d)
                });
    },
    S = () => {
        let [e, t] = r.useState(!1),
            n = (0, a.e7)([I.Z], () => I.Z.getGuildId());
        return (0, i.jsx)(c.Button, {
            className: j.developerPortalCta,
            onClick: () => {
                t(!0),
                    (function (e) {
                        f.default.track(N.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, { guild_id: e });
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
            children: T.intl.string(T.t.Uskgx8)
        });
    };
t.Z = () => {
    let e = (0, a.e7)([I.Z], () => I.Z.getGuildId()),
        t = (0, a.e7)([g.Z], () => g.Z.getMemberCount(e)),
        n = (0, a.e7)([x.Z], () => x.Z.getGuild(e)),
        l = (0, a.e7)([h.default], () => h.default.locale),
        { analytics: s, errorCode: o } = (0, a.cj)([v.Z], () => ({
            analytics: null != e ? v.Z.getOverviewAnalytics(e) : null,
            errorCode: v.Z.getError()
        })),
        f = (0, a.e7)([p.Z], () => p.Z.getSettings().enabled),
        R = null == t || null == n || (null != t && t < 500 && null != n && !n.hasFeature(N.oNc.PARTNERED) && !n.hasFeature(N.oNc.VERIFIED));
    r.useEffect(() => {
        null != e && !R && ((0, C.Vk)(e), (0, C.SR)(e), (0, C.xl)(e));
    }, [e, R]),
        r.useEffect(() => {
            (0, m.Kw)(_.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU);
        }, []);
    let y =
        null != s
            ? (0, i.jsx)('div', {
                  className: j.__invalid_guildAnalyticsOverviewWrapper,
                  children: (0, i.jsxs)('div', {
                      className: j.overviewData,
                      children: [
                          (0, i.jsx)(u.Z, {
                              title: T.intl.string(T.t.i0Nora),
                              tooltipText: T.intl.string(T.t.KiRbLC),
                              ...b(s.visitors, s.visitorsChange, l)
                          }),
                          (0, i.jsx)(u.Z, {
                              title: T.intl.string(T.t.DDAHdX),
                              tooltipText: T.intl.string(T.t.HxWUkZ),
                              ...b(s.communicators, s.communicatorsChange, l)
                          }),
                          (0, i.jsx)(u.Z, {
                              title: T.intl.string(T.t.hYeOqK),
                              ...b(s.newMembers, s.newMembersChange, l)
                          }),
                          (0, i.jsx)(u.Z, {
                              title: T.intl.string(T.t.jj7OPz),
                              tooltipText: T.intl.string(T.t.MQCsl5),
                              ...b(s.pctRetained, s.pctRetainedChange, l, !0)
                          })
                      ]
                  })
              })
            : null;
    return (0, i.jsxs)(c.FormSection, {
        tag: c.FormTitleTags.H1,
        title: T.intl.string(T.t['0wWfUF']),
        children: [
            (0, i.jsx)(c.FormText, {
                type: c.FormTextTypes.DESCRIPTION,
                children: T.intl.format(T.t.NIZ60d, {})
            }),
            E(o, R),
            (0, i.jsxs)('div', {
                className: j.developerPortalCtaWrapper,
                children: [
                    (0, i.jsx)('div', { className: j.placeholderImage }),
                    (0, i.jsx)(c.Text, {
                        className: j.developerPortalCtaText,
                        variant: 'text-sm/normal',
                        children: T.intl.string(T.t.A5vsws)
                    }),
                    (0, i.jsx)(S, {})
                ]
            }),
            f
                ? (0, i.jsx)('div', {
                      className: j.streamerMode,
                      children: (0, i.jsx)(d.Z, {})
                  })
                : y
        ]
    });
};
