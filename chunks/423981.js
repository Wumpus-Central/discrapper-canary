n.d(t, { A: () => L });
var i = n(627968),
    l = n(64700),
    s = n(835245),
    r = n(118751),
    a = n(311907),
    o = n(562465),
    d = n(683071),
    c = n(821609),
    u = n(534514),
    m = n(834730),
    g = n(974544),
    h = n(421838),
    x = n(773669),
    _ = n(498642),
    p = n(71393),
    A = n(351906),
    E = n(954571),
    f = n(555337),
    j = n(855537),
    N = n(907445),
    I = n(11725),
    C = n(652215),
    b = n(897513),
    v = n(985018),
    S = n(229344);
let T = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            l = null;
        return (
            null == t || Number.isNaN(t)
                ? (null == t || Number.isNaN(t)) && null != e && (l = v.intl.string(v.t.xO2msf))
                : (l = v.intl.formatToPlainString(v.t.nskeMw, { percentage: (0, r.s)(Math.abs(t), n) })),
            {
                localizedNumber: null != e ? `${(0, r.s)(e, n)}${i ? "%" : ""}` : v.intl.string(v.t.jHpxwo),
                subtext: l,
                isTrendingUp: t > 0,
                isTrendingDown: t < 0,
            }
        );
    },
    y = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t || e === C.t02.NOT_ENOUGH_GUILD_MEMBERS
            ? (0, i.jsx)("div", {
                  className: S.NA,
                  children: (0, i.jsx)(d.w, { type: "info", children: v.intl.string(v.t["FsgE/B"]) }),
              })
            : null == e
              ? null
              : (0, i.jsx)(d.w, { type: "critical", children: v.intl.string(v.t.Iju63e) });
    },
    R = () => {
        let [e, t] = l.useState(!1),
            n = (0, a.bG)([f.A], () => f.A.getGuildId());
        return (0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: S.XU,
            children: (0, i.jsx)(c.$, {
                variant: "primary",
                text: v.intl.string(v.t.Uskgxx),
                onClick: () => {
                    let e, i;
                    t(!0),
                        (E.default.track(C.HAw.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, { guild_id: n }),
                        (e = null == n ? C.dSh.DEVELOPER_PORTAL : C.dSh.DEVELOPER_PORTAL_GUILD_ANALYTICS(n)),
                        (i = (0, s.A)()),
                        o.Bo.post({
                            url: C.Rsh.HANDOFF,
                            body: { key: i },
                            oldFormErrors: !0,
                            rejectWithError: !0,
                        }).then(
                            (t) => {
                                let n = t.body.handoff_token;
                                window.open(C.X7G.DEVELOPER_PORTAL_LOGIN_HANDOFF(i, n, e));
                            },
                            () => {
                                window.open(e);
                            },
                        )).then(() => {
                            t(!1);
                        });
                },
                loading: e,
            }),
        });
    },
    L = () => {
        let e = (0, a.bG)([f.A], () => f.A.getGuildId()),
            t = (0, a.bG)([_.A], () => _.A.getMemberCount(e)),
            n = (0, a.bG)([p.A], () => p.A.getGuild(e)),
            s = (0, a.bG)([x.default], () => x.default.locale),
            { analytics: r, errorCode: o } = (0, a.cf)([N.A], () => ({
                analytics: null != e ? N.A.getOverviewAnalytics(e) : null,
                errorCode: N.A.getError(),
            })),
            d = (0, a.bG)([A.A], () => A.A.getSettings().enabled),
            c =
                null == t ||
                null == n ||
                (null != t &&
                    t < 500 &&
                    null != n &&
                    !n.features.has(C.GuildFeatures.PARTNERED) &&
                    !n.features.has(C.GuildFeatures.VERIFIED));
        l.useEffect(() => {
            null == e || c || ((0, j.p9)(e), (0, j.fe)(e), (0, j._z)(e));
        }, [e, c]),
            l.useEffect(() => {
                (0, h.sF)(b._.GUILD_ANALYTICS_GUILD_SETTINGS_MENU);
            }, []);
        let E =
            null != r
                ? (0, i.jsx)("div", {
                      className: S.__invalid_guildAnalyticsOverviewWrapper,
                      children: (0, i.jsxs)("div", {
                          className: S.SJ,
                          children: [
                              (0, i.jsx)(I.A, {
                                  title: v.intl.string(v.t.i0NorT),
                                  tooltipText: v.intl.string(v.t.KiRbLJ),
                                  ...T(r.visitors, r.visitorsChange, s),
                              }),
                              (0, i.jsx)(I.A, {
                                  title: v.intl.string(v.t.DDAHdQ),
                                  tooltipText: v.intl.string(v.t.HxWUkU),
                                  ...T(r.communicators, r.communicatorsChange, s),
                              }),
                              (0, i.jsx)(I.A, {
                                  title: v.intl.string(v.t.hYeOqC),
                                  ...T(r.newMembers, r.newMembersChange, s),
                              }),
                              (0, i.jsx)(I.A, {
                                  title: v.intl.string(v.t.jj7OPw),
                                  tooltipText: v.intl.string(v.t.MQCslz),
                                  ...T(r.pctRetained, r.pctRetainedChange, s, !0),
                              }),
                          ],
                      }),
                  })
                : null;
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(u.D, { variant: "heading-lg/semibold", children: v.intl.string(v.t["0wWfUG"]) }),
                (0, i.jsx)(m.E, { variant: "text-sm/normal", children: v.intl.format(v.t.NIZ60a, {}) }),
                y(o, c),
                (0, i.jsxs)("div", {
                    className: S.Pg,
                    children: [
                        (0, i.jsx)("div", { className: S.jM }),
                        (0, i.jsx)(m.E, {
                            className: S.WO,
                            variant: "text-sm/normal",
                            children: v.intl.string(v.t.A5vswv),
                        }),
                        (0, i.jsx)(R, {}),
                    ],
                }),
                d ? (0, i.jsx)("div", { className: S.Rc, children: (0, i.jsx)(g.A, {}) }) : E,
            ],
        });
    };
