n.d(t, { A: () => I }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(835245),
    s = n(118751),
    a = n(311907),
    c = n(562465),
    o = n(397927),
    d = n(974544),
    u = n(421838),
    f = n(773669),
    g = n(498642),
    b = n(71393),
    m = n(351906),
    p = n(954571),
    x = n(555337),
    h = n(855537),
    j = n(907445),
    O = n(11725),
    y = n(652215),
    v = n(897513),
    A = n(985018),
    E = n(381929);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let _ = function (e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = null;
        return (
            null == t || Number.isNaN(t)
                ? (null == t || Number.isNaN(t)) && null != e && (i = A.intl.string(A.t.xO2msf))
                : (i = A.intl.formatToPlainString(A.t.nskeMw, { percentage: (0, s.s)(Math.abs(t), n) })),
            {
                localizedNumber: null != e ? "".concat((0, s.s)(e, n)).concat(r ? "%" : "") : A.intl.string(A.t.jHpxwo),
                subtext: i,
                isTrendingUp: t > 0,
                isTrendingDown: t < 0,
            }
        );
    },
    S = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t || e === y.t02.NOT_ENOUGH_GUILD_MEMBERS
            ? (0, r.jsx)("div", {
                  className: E.NA,
                  children: (0, r.jsx)(o.wx6, {
                      type: "info",
                      children: A.intl.string(A.t["FsgE/B"]),
                  }),
              })
            : null == e
              ? null
              : (0, r.jsx)(o.wx6, {
                    type: "critical",
                    children: A.intl.string(A.t.Iju63e),
                });
    },
    T = () => {
        let [e, t] = i.useState(!1),
            n = (0, a.bG)([x.A], () => x.A.getGuildId());
        return (0, r.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: E.XU,
            children: (0, r.jsx)(o.Button, {
                variant: "primary",
                text: A.intl.string(A.t.Uskgxx),
                onClick: () => {
                    let e, r;
                    t(!0),
                        (p.default.track(y.HAw.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, { guild_id: n }),
                        (e = null == n ? y.dSh.DEVELOPER_PORTAL : y.dSh.DEVELOPER_PORTAL_GUILD_ANALYTICS(n)),
                        (r = (0, l.A)()),
                        c.Bo.post({
                            url: y.Rsh.HANDOFF,
                            body: { key: r },
                            oldFormErrors: !0,
                            rejectWithError: !0,
                        }).then(
                            (t) => {
                                let n = t.body.handoff_token;
                                window.open(y.X7G.DEVELOPER_PORTAL_LOGIN_HANDOFF(r, n, e));
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
    I = () => {
        let e = (0, a.bG)([x.A], () => x.A.getGuildId()),
            t = (0, a.bG)([g.A], () => g.A.getMemberCount(e)),
            n = (0, a.bG)([b.A], () => b.A.getGuild(e)),
            l = (0, a.bG)([f.default], () => f.default.locale),
            { analytics: s, errorCode: c } = (0, a.cf)([j.A], () => ({
                analytics: null != e ? j.A.getOverviewAnalytics(e) : null,
                errorCode: j.A.getError(),
            })),
            p = (0, a.bG)([m.A], () => m.A.getSettings().enabled),
            I =
                null == t ||
                null == n ||
                (null != t &&
                    t < 500 &&
                    null != n &&
                    !n.features.has(y.GuildFeatures.PARTNERED) &&
                    !n.features.has(y.GuildFeatures.VERIFIED));
        i.useEffect(() => {
            null == e || I || ((0, h.p9)(e), (0, h.fe)(e), (0, h._z)(e));
        }, [e, I]),
            i.useEffect(() => {
                (0, u.sF)(v._.GUILD_ANALYTICS_GUILD_SETTINGS_MENU);
            }, []);
        let C =
            null != s
                ? (0, r.jsx)("div", {
                      className: E.__invalid_guildAnalyticsOverviewWrapper,
                      children: (0, r.jsxs)("div", {
                          className: E.SJ,
                          children: [
                              (0, r.jsx)(
                                  O.A,
                                  N(
                                      {
                                          title: A.intl.string(A.t.i0NorT),
                                          tooltipText: A.intl.string(A.t.KiRbLJ),
                                      },
                                      _(s.visitors, s.visitorsChange, l),
                                  ),
                              ),
                              (0, r.jsx)(
                                  O.A,
                                  N(
                                      {
                                          title: A.intl.string(A.t.DDAHdQ),
                                          tooltipText: A.intl.string(A.t.HxWUkU),
                                      },
                                      _(s.communicators, s.communicatorsChange, l),
                                  ),
                              ),
                              (0, r.jsx)(
                                  O.A,
                                  N({ title: A.intl.string(A.t.hYeOqC) }, _(s.newMembers, s.newMembersChange, l)),
                              ),
                              (0, r.jsx)(
                                  O.A,
                                  N(
                                      {
                                          title: A.intl.string(A.t.jj7OPw),
                                          tooltipText: A.intl.string(A.t.MQCslz),
                                      },
                                      _(s.pctRetained, s.pctRetainedChange, l, !0),
                                  ),
                              ),
                          ],
                      }),
                  })
                : null;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    children: A.intl.string(A.t["0wWfUG"]),
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    children: A.intl.format(A.t.NIZ60a, {}),
                }),
                S(c, I),
                (0, r.jsxs)("div", {
                    className: E.Pg,
                    children: [
                        (0, r.jsx)("div", { className: E.jM }),
                        (0, r.jsx)(o.Text, {
                            className: E.WO,
                            variant: "text-sm/normal",
                            children: A.intl.string(A.t.A5vswv),
                        }),
                        (0, r.jsx)(T, {}),
                    ],
                }),
                p
                    ? (0, r.jsx)("div", {
                          className: E.Rc,
                          children: (0, r.jsx)(d.A, {}),
                      })
                    : C,
            ],
        });
    };
