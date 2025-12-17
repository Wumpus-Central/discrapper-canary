n.d(t, { Z: () => T }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(772848),
    a = n(640358),
    s = n(442837),
    o = n(544891),
    c = n(481060),
    d = n(497321),
    u = n(142497),
    g = n(706454),
    f = n(650774),
    m = n(430824),
    b = n(246946),
    p = n(626135),
    h = n(999382),
    x = n(798528),
    j = n(743676),
    v = n(795145),
    O = n(981631),
    C = n(190378),
    y = n(388032),
    N = n(700374);
function E(e) {
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
let I = function (e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = null;
        return (
            null == t || Number.isNaN(t)
                ? (null == t || Number.isNaN(t)) && null != e && (i = y.intl.string(y.t.xO2msf))
                : (i = y.intl.formatToPlainString(y.t.nskeMw, { percentage: (0, a.o)(Math.abs(t), n) })),
            {
                localizedNumber: null != e ? "".concat((0, a.o)(e, n)).concat(r ? "%" : "") : y.intl.string(y.t.jHpxwo),
                subtext: i,
                isTrendingUp: t > 0,
                isTrendingDown: t < 0,
            }
        );
    },
    S = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t || e === O.evJ.NOT_ENOUGH_GUILD_MEMBERS
            ? (0, r.jsx)("div", {
                  className: N.notEnoughMembersError,
                  children: (0, r.jsx)(c.M14, {
                      type: "info",
                      children: y.intl.string(y.t["FsgE/B"]),
                  }),
              })
            : null == e
              ? null
              : (0, r.jsx)(c.M14, {
                    type: "critical",
                    children: y.intl.string(y.t.Iju63e),
                });
    },
    _ = () => {
        let [e, t] = i.useState(!1),
            n = (0, s.e7)([h.Z], () => h.Z.getGuildId());
        return (0, r.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: N.developerPortalCta,
            children: (0, r.jsx)(c.Button, {
                variant: "primary",
                text: y.intl.string(y.t.Uskgxx),
                onClick: () => {
                    t(!0),
                        (function (e) {
                            p.default.track(O.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, { guild_id: e });
                            let t = null == e ? O.E07.DEVELOPER_PORTAL : O.E07.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
                                n = (0, l.Z)();
                            return o.tn
                                .post({
                                    url: O.ANM.HANDOFF,
                                    body: { key: n },
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                })
                                .then(
                                    (e) => {
                                        let r = e.body.handoff_token;
                                        window.open(O.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(n, r, t));
                                    },
                                    () => {
                                        window.open(t);
                                    },
                                );
                        })(n).then(() => {
                            t(!1);
                        });
                },
                loading: e,
            }),
        });
    },
    T = () => {
        let e = (0, s.e7)([h.Z], () => h.Z.getGuildId()),
            t = (0, s.e7)([f.Z], () => f.Z.getMemberCount(e)),
            n = (0, s.e7)([m.Z], () => m.Z.getGuild(e)),
            l = (0, s.e7)([g.default], () => g.default.locale),
            { analytics: a, errorCode: o } = (0, s.cj)([j.Z], () => ({
                analytics: null != e ? j.Z.getOverviewAnalytics(e) : null,
                errorCode: j.Z.getError(),
            })),
            p = (0, s.e7)([b.Z], () => b.Z.getSettings().enabled),
            T =
                null == t ||
                null == n ||
                (null != t &&
                    t < 500 &&
                    null != n &&
                    !n.features.has(O.GuildFeatures.PARTNERED) &&
                    !n.features.has(O.GuildFeatures.VERIFIED));
        i.useEffect(() => {
            null == e || T || ((0, x.Vk)(e), (0, x.SR)(e), (0, x.xl)(e));
        }, [e, T]),
            i.useEffect(() => {
                (0, u.Kw)(C.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU);
            }, []);
        let P =
            null != a
                ? (0, r.jsx)("div", {
                      className: N.__invalid_guildAnalyticsOverviewWrapper,
                      children: (0, r.jsxs)("div", {
                          className: N.overviewData,
                          children: [
                              (0, r.jsx)(
                                  v.Z,
                                  E(
                                      {
                                          title: y.intl.string(y.t.i0NorT),
                                          tooltipText: y.intl.string(y.t.KiRbLJ),
                                      },
                                      I(a.visitors, a.visitorsChange, l),
                                  ),
                              ),
                              (0, r.jsx)(
                                  v.Z,
                                  E(
                                      {
                                          title: y.intl.string(y.t.DDAHdQ),
                                          tooltipText: y.intl.string(y.t.HxWUkU),
                                      },
                                      I(a.communicators, a.communicatorsChange, l),
                                  ),
                              ),
                              (0, r.jsx)(
                                  v.Z,
                                  E({ title: y.intl.string(y.t.hYeOqC) }, I(a.newMembers, a.newMembersChange, l)),
                              ),
                              (0, r.jsx)(
                                  v.Z,
                                  E(
                                      {
                                          title: y.intl.string(y.t.jj7OPw),
                                          tooltipText: y.intl.string(y.t.MQCslz),
                                      },
                                      I(a.pctRetained, a.pctRetainedChange, l, !0),
                                  ),
                              ),
                          ],
                      }),
                  })
                : null;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    children: y.intl.string(y.t["0wWfUG"]),
                }),
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: y.intl.format(y.t.NIZ60a, {}),
                }),
                S(o, T),
                (0, r.jsxs)("div", {
                    className: N.developerPortalCtaWrapper,
                    children: [
                        (0, r.jsx)("div", { className: N.placeholderImage }),
                        (0, r.jsx)(c.Text, {
                            className: N.developerPortalCtaText,
                            variant: "text-sm/normal",
                            children: y.intl.string(y.t.A5vswv),
                        }),
                        (0, r.jsx)(_, {}),
                    ],
                }),
                p
                    ? (0, r.jsx)("div", {
                          className: N.streamerMode,
                          children: (0, r.jsx)(d.Z, {}),
                      })
                    : P,
            ],
        });
    };
