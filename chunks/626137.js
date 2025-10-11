n.d(t, { Z: () => T }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(772848),
    a = n(640358),
    s = n(442837),
    o = n(544891),
    c = n(481060),
    d = n(497321),
    u = n(841470),
    g = n(142497),
    m = n(706454),
    p = n(650774),
    f = n(430824),
    h = n(246946),
    b = n(626135),
    x = n(999382),
    j = n(798528),
    v = n(743676),
    _ = n(981631),
    C = n(190378),
    O = n(388032),
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
                ? (null == t || Number.isNaN(t)) && null != e && (i = O.intl.string(O.t.xO2msb))
                : (i = O.intl.formatToPlainString(O.t.nskeMz, { percentage: (0, a.o)(Math.abs(t), n) })),
            {
                localizedNumber: null != e ? "".concat((0, a.o)(e, n)).concat(r ? "%" : "") : O.intl.string(O.t.jHpxws),
                subtext: i,
                isTrendingUp: t > 0,
                isTrendingDown: t < 0,
            }
        );
    },
    I = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t || e === _.evJ.NOT_ENOUGH_GUILD_MEMBERS
            ? (0, r.jsx)(c.kzN, {
                  icon: c.d3s,
                  className: y.notEnoughMembersError,
                  backgroundColor: c.mTc.BACKGROUND_ACCENT,
                  children: O.intl.string(O.t["FsgE/P"]),
              })
            : null == e
              ? null
              : (0, r.jsx)(c.kzN, {
                    backgroundColor: c.mTc.BACKGROUND_ACCENT,
                    children: O.intl.string(O.t.Iju63d),
                });
    },
    S = () => {
        let [e, t] = i.useState(!1),
            n = (0, s.e7)([x.Z], () => x.Z.getGuildId());
        return (0, r.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: y.developerPortalCta,
            children: (0, r.jsx)(c.Button, {
                variant: "primary",
                text: O.intl.string(O.t.Uskgx8),
                onClick: () => {
                    t(!0),
                        (function (e) {
                            b.default.track(_.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, { guild_id: e });
                            let t = null == e ? _.E07.DEVELOPER_PORTAL : _.E07.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
                                n = (0, l.Z)();
                            return o.tn
                                .post({
                                    url: _.ANM.HANDOFF,
                                    body: { key: n },
                                    oldFormErrors: !0,
                                    rejectWithError: !0,
                                })
                                .then(
                                    (e) => {
                                        let r = e.body.handoff_token;
                                        window.open(_.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(n, r, t));
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
        let e = (0, s.e7)([x.Z], () => x.Z.getGuildId()),
            t = (0, s.e7)([p.Z], () => p.Z.getMemberCount(e)),
            n = (0, s.e7)([f.Z], () => f.Z.getGuild(e)),
            l = (0, s.e7)([m.default], () => m.default.locale),
            { analytics: a, errorCode: o } = (0, s.cj)([v.Z], () => ({
                analytics: null != e ? v.Z.getOverviewAnalytics(e) : null,
                errorCode: v.Z.getError(),
            })),
            b = (0, s.e7)([h.Z], () => h.Z.getSettings().enabled),
            T =
                null == t ||
                null == n ||
                (null != t &&
                    t < 500 &&
                    null != n &&
                    !n.features.has(_.oNc.PARTNERED) &&
                    !n.features.has(_.oNc.VERIFIED));
        i.useEffect(() => {
            null == e || T || ((0, j.Vk)(e), (0, j.SR)(e), (0, j.xl)(e));
        }, [e, T]),
            i.useEffect(() => {
                (0, g.Kw)(C.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU);
            }, []);
        let P =
            null != a
                ? (0, r.jsx)("div", {
                      className: y.__invalid_guildAnalyticsOverviewWrapper,
                      children: (0, r.jsxs)("div", {
                          className: y.overviewData,
                          children: [
                              (0, r.jsx)(
                                  u.Z,
                                  N(
                                      {
                                          title: O.intl.string(O.t.i0Nora),
                                          tooltipText: O.intl.string(O.t.KiRbLC),
                                      },
                                      E(a.visitors, a.visitorsChange, l),
                                  ),
                              ),
                              (0, r.jsx)(
                                  u.Z,
                                  N(
                                      {
                                          title: O.intl.string(O.t.DDAHdX),
                                          tooltipText: O.intl.string(O.t.HxWUkZ),
                                      },
                                      E(a.communicators, a.communicatorsChange, l),
                                  ),
                              ),
                              (0, r.jsx)(
                                  u.Z,
                                  N({ title: O.intl.string(O.t.hYeOqK) }, E(a.newMembers, a.newMembersChange, l)),
                              ),
                              (0, r.jsx)(
                                  u.Z,
                                  N(
                                      {
                                          title: O.intl.string(O.t.jj7OPz),
                                          tooltipText: O.intl.string(O.t.MQCsl5),
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
                    children: O.intl.string(O.t["0wWfUF"]),
                }),
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/normal",
                    children: O.intl.format(O.t.NIZ60d, {}),
                }),
                I(o, T),
                (0, r.jsxs)("div", {
                    className: y.developerPortalCtaWrapper,
                    children: [
                        (0, r.jsx)("div", { className: y.placeholderImage }),
                        (0, r.jsx)(c.Text, {
                            className: y.developerPortalCtaText,
                            variant: "text-sm/normal",
                            children: O.intl.string(O.t.A5vsws),
                        }),
                        (0, r.jsx)(S, {}),
                    ],
                }),
                b
                    ? (0, r.jsx)("div", {
                          className: y.streamerMode,
                          children: (0, r.jsx)(d.Z, {}),
                      })
                    : P,
            ],
        });
    };
