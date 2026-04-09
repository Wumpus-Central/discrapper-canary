"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    l = n(835245),
    r = n(118751),
    a = n(311907),
    o = n(562465),
    d = n(397927),
    c = n(974544),
    u = n(421838),
    m = n(773669),
    g = n(498642),
    x = n(71393),
    h = n(351906),
    _ = n(954571),
    A = n(555337),
    p = n(855537),
    f = n(907445),
    j = n(11725),
    N = n(652215),
    E = n(897513),
    C = n(985018),
    T = n(25424);
let I = function (e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            s = null;
        return (
            null == t || Number.isNaN(t)
                ? (null == t || Number.isNaN(t)) && null != e && (s = C.intl.string(C.t.xO2msf))
                : (s = C.intl.formatToPlainString(C.t.nskeMw, { percentage: (0, r.s)(Math.abs(t), n) })),
            {
                localizedNumber: null != e ? `${(0, r.s)(e, n)}${i ? "%" : ""}` : C.intl.string(C.t.jHpxwo),
                subtext: s,
                isTrendingUp: t > 0,
                isTrendingDown: t < 0,
            }
        );
    },
    b = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t || e === N.t02.NOT_ENOUGH_GUILD_MEMBERS
            ? (0, i.jsx)("div", {
                  className: T.NA,
                  children: (0, i.jsx)(d.wx6, { type: "info", children: C.intl.string(C.t["FsgE/B"]) }),
              })
            : null == e
              ? null
              : (0, i.jsx)(d.wx6, { type: "critical", children: C.intl.string(C.t.Iju63e) });
    },
    v = () => {
        let [e, t] = s.useState(!1),
            n = (0, a.bG)([A.A], () => A.A.getGuildId());
        return (0, i.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: T.XU,
            children: (0, i.jsx)(d.Button, {
                variant: "primary",
                text: C.intl.string(C.t.Uskgxx),
                onClick: () => {
                    let e, i;
                    t(!0),
                        (_.default.track(N.HAw.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, { guild_id: n }),
                        (e = null == n ? N.dSh.DEVELOPER_PORTAL : N.dSh.DEVELOPER_PORTAL_GUILD_ANALYTICS(n)),
                        (i = (0, l.A)()),
                        o.Bo.post({
                            url: N.Rsh.HANDOFF,
                            body: { key: i },
                            oldFormErrors: !0,
                            rejectWithError: !0,
                        }).then(
                            (t) => {
                                let n = t.body.handoff_token;
                                window.open(N.X7G.DEVELOPER_PORTAL_LOGIN_HANDOFF(i, n, e));
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
    S = () => {
        let e = (0, a.bG)([A.A], () => A.A.getGuildId()),
            t = (0, a.bG)([g.A], () => g.A.getMemberCount(e)),
            n = (0, a.bG)([x.A], () => x.A.getGuild(e)),
            l = (0, a.bG)([m.default], () => m.default.locale),
            { analytics: r, errorCode: o } = (0, a.cf)([f.A], () => ({
                analytics: null != e ? f.A.getOverviewAnalytics(e) : null,
                errorCode: f.A.getError(),
            })),
            _ = (0, a.bG)([h.A], () => h.A.getSettings().enabled),
            S =
                null == t ||
                null == n ||
                (null != t &&
                    t < 500 &&
                    null != n &&
                    !n.features.has(N.GuildFeatures.PARTNERED) &&
                    !n.features.has(N.GuildFeatures.VERIFIED));
        s.useEffect(() => {
            null == e || S || ((0, p.p9)(e), (0, p.fe)(e), (0, p._z)(e));
        }, [e, S]),
            s.useEffect(() => {
                (0, u.sF)(E._.GUILD_ANALYTICS_GUILD_SETTINGS_MENU);
            }, []);
        let y =
            null != r
                ? (0, i.jsx)("div", {
                      className: T.__invalid_guildAnalyticsOverviewWrapper,
                      children: (0, i.jsxs)("div", {
                          className: T.SJ,
                          children: [
                              (0, i.jsx)(j.A, {
                                  title: C.intl.string(C.t.i0NorT),
                                  tooltipText: C.intl.string(C.t.KiRbLJ),
                                  ...I(r.visitors, r.visitorsChange, l),
                              }),
                              (0, i.jsx)(j.A, {
                                  title: C.intl.string(C.t.DDAHdQ),
                                  tooltipText: C.intl.string(C.t.HxWUkU),
                                  ...I(r.communicators, r.communicatorsChange, l),
                              }),
                              (0, i.jsx)(j.A, {
                                  title: C.intl.string(C.t.hYeOqC),
                                  ...I(r.newMembers, r.newMembersChange, l),
                              }),
                              (0, i.jsx)(j.A, {
                                  title: C.intl.string(C.t.jj7OPw),
                                  tooltipText: C.intl.string(C.t.MQCslz),
                                  ...I(r.pctRetained, r.pctRetainedChange, l, !0),
                              }),
                          ],
                      }),
                  })
                : null;
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(d.Heading, { variant: "heading-lg/semibold", children: C.intl.string(C.t["0wWfUG"]) }),
                (0, i.jsx)(d.Text, { variant: "text-sm/normal", children: C.intl.format(C.t.NIZ60a, {}) }),
                b(o, S),
                (0, i.jsxs)("div", {
                    className: T.Pg,
                    children: [
                        (0, i.jsx)("div", { className: T.jM }),
                        (0, i.jsx)(d.Text, {
                            className: T.WO,
                            variant: "text-sm/normal",
                            children: C.intl.string(C.t.A5vswv),
                        }),
                        (0, i.jsx)(v, {}),
                    ],
                }),
                _ ? (0, i.jsx)("div", { className: T.Rc, children: (0, i.jsx)(c.A, {}) }) : y,
            ],
        });
    };
