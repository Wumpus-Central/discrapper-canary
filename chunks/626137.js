n.d(t, { Z: () => T }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(772848),
    a = n(640358),
    s = n(442837),
    o = n(544891),
    c = n(481060),
    d = n(497321),
    u = n(142497),
    g = n(706454),
    m = n(650774),
    p = n(430824),
    f = n(246946),
    h = n(626135),
    b = n(999382),
    x = n(798528),
    j = n(743676),
    _ = n(795145),
    v = n(981631),
    O = n(190378),
    C = n(388032),
    y = n(503562);
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
let E = function (e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            i = null;
        return (
            null == t || Number.isNaN(t)
                ? (null == t || Number.isNaN(t)) && null != e && (i = C.intl.string(C.t.xO2msf))
                : (i = C.intl.formatToPlainString(C.t.nskeMw, { percentage: (0, a.o)(Math.abs(t), n) })),
            {
                localizedNumber: null != e ? "".concat((0, a.o)(e, n)).concat(r ? "%" : "") : C.intl.string(C.t.jHpxwo),
                subtext: i,
                isTrendingUp: t > 0,
                isTrendingDown: t < 0,
            }
        );
    },
    I = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t || e === v.evJ.NOT_ENOUGH_GUILD_MEMBERS
            ? (0, r.jsx)("div", {
                  className: y.notEnoughMembersError,
                  children: (0, r.jsx)(c.M14, {
                      type: "info",
                      children: C.intl.string(C.t["FsgE/B"]),
                  }),
              })
            : null == e
              ? null
              : (0, r.jsx)(c.M14, {
                    type: "critical",
                    children: C.intl.string(C.t.Iju63e),
                });
    },
    S = () => {
        let [e, t] = i.useState(!1),
            n = (0, s.e7)([b.Z], () => b.Z.getGuildId());
        return (0, r.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: y.developerPortalCta,
            children: (0, r.jsx)(c.Button, {
                variant: "primary",
                text: C.intl.string(C.t.Uskgxx),
                onClick: () => {
                    t(!0),
                        (function (e) {
                            h.default.track(v.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, { guild_id: e });
                            let t = null == e ? v.E07.DEVELOPER_PORTAL : v.E07.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
                                n = (0, l.Z)();
                            return o.tn
                                .post({
                                    url: v.ANM.HANDOFF,
                                    body: { key: n },
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                })
                                .then(
                                    (e) => {
                                        let r = e.body.handoff_token;
                                        window.open(v.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(n, r, t));
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
        let e = (0, s.e7)([b.Z], () => b.Z.getGuildId()),
            t = (0, s.e7)([m.Z], () => m.Z.getMemberCount(e)),
            n = (0, s.e7)([p.Z], () => p.Z.getGuild(e)),
            l = (0, s.e7)([g.default], () => g.default.locale),
            { analytics: a, errorCode: o } = (0, s.cj)([j.Z], () => ({
                analytics: null != e ? j.Z.getOverviewAnalytics(e) : null,
                errorCode: j.Z.getError(),
            })),
            h = (0, s.e7)([f.Z], () => f.Z.getSettings().enabled),
            T =
                null == t ||
                null == n ||
                (null != t &&
                    t < 500 &&
                    null != n &&
                    !n.features.has(v.GuildFeatures.PARTNERED) &&
                    !n.features.has(v.GuildFeatures.VERIFIED));
        i.useEffect(() => {
            null == e || T || ((0, x.Vk)(e), (0, x.SR)(e), (0, x.xl)(e));
        }, [e, T]),
            i.useEffect(() => {
                (0, u.Kw)(O.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU);
            }, []);
        let P =
            null != a
                ? (0, r.jsx)("div", {
                      className: y.__invalid_guildAnalyticsOverviewWrapper,
                      children: (0, r.jsxs)("div", {
                          className: y.overviewData,
                          children: [
                              (0, r.jsx)(
                                  _.Z,
                                  N(
                                      {
                                          title: C.intl.string(C.t.i0NorT),
                                          tooltipText: C.intl.string(C.t.KiRbLJ),
                                      },
                                      E(a.visitors, a.visitorsChange, l),
                                  ),
                              ),
                              (0, r.jsx)(
                                  _.Z,
                                  N(
                                      {
                                          title: C.intl.string(C.t.DDAHdQ),
                                          tooltipText: C.intl.string(C.t.HxWUkU),
                                      },
                                      E(a.communicators, a.communicatorsChange, l),
                                  ),
                              ),
                              (0, r.jsx)(
                                  _.Z,
                                  N({ title: C.intl.string(C.t.hYeOqC) }, E(a.newMembers, a.newMembersChange, l)),
                              ),
                              (0, r.jsx)(
                                  _.Z,
                                  N(
                                      {
                                          title: C.intl.string(C.t.jj7OPw),
                                          tooltipText: C.intl.string(C.t.MQCslz),
                                      },
                                      E(a.pctRetained, a.pctRetainedChange, l, !0),
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
                    children: C.intl.string(C.t["0wWfUG"]),
                }),
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: C.intl.format(C.t.NIZ60a, {}),
                }),
                I(o, T),
                (0, r.jsxs)("div", {
                    className: y.developerPortalCtaWrapper,
                    children: [
                        (0, r.jsx)("div", { className: y.placeholderImage }),
                        (0, r.jsx)(c.Text, {
                            className: y.developerPortalCtaText,
                            variant: "text-sm/normal",
                            children: C.intl.string(C.t.A5vswv),
                        }),
                        (0, r.jsx)(S, {}),
                    ],
                }),
                h
                    ? (0, r.jsx)("div", {
                          className: y.streamerMode,
                          children: (0, r.jsx)(d.Z, {}),
                      })
                    : P,
            ],
        });
    };
