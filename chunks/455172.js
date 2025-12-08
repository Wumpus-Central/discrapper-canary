n.d(t, { Z: () => P }), n(361932), n(187205);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(317381),
    u = n(884338),
    d = n(470883),
    f = n(933557),
    h = n(777861),
    p = n(752048),
    g = n(439944),
    m = n(199902),
    b = n(699516),
    _ = n(9156),
    y = n(594174),
    O = n(938475),
    v = n(388032),
    j = n(132789),
    x = n(78480);
function C(e) {
    let { icon: t, users: n } = e;
    return 0 === n.length
        ? null
        : (0, r.jsxs)("div", {
              className: j.row,
              children: [
                  (0, r.jsx)(t, {
                      className: j.activityIcon,
                      color: "currentColor",
                  }),
                  (0, r.jsx)(u.ZP, {
                      users: n,
                      max: 6,
                  }),
              ],
          });
}
function E(e) {
    let { muteConfig: t, className: n } = e;
    return (null == t ? void 0 : t.end_time) == null
        ? (0, r.jsx)(s.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              className: n,
              children: v.intl.string(v.t.fpKdS1),
          })
        : (0, r.jsx)(h.Z, {
              muteConfig: t,
              className: n,
          });
}
function S(e) {
    let { channel: t } = e,
        n = t.id,
        {
            activityUsers: l,
            streamUsers: u,
            voiceUsers: f,
        } = (function (e) {
            let t = e.id,
                n = (0, a.Wu)([b.Z], () => b.Z.getBlockedOrIgnoredIDs()),
                r = (0, a.e7)([p.Z], () => p.Z.getUserAffinitiesMap(), []),
                l = (0, a.Wu)(
                    [c.ZP, y.default],
                    () =>
                        c.ZP.getEmbeddedActivitiesForChannel(t)
                            .flatMap((e) => Array.from(e.userIds))
                            .map((e) => y.default.getUser(e)),
                    [t],
                ),
                o = i.useMemo(() => (0, d.dq)(l, n), [l, n]),
                s = i.useMemo(() => (0, g.C)(o, r, "DirectMessageTooltip - activityUsers"), [o, r]),
                u = (0, a.Wu)([m.Z, y.default], () => {
                    let e = m.Z.getAllApplicationStreamsForChannel(t)
                        .map((e) => e.ownerId)
                        .map((e) => y.default.getUser(e));
                    return (0, d.dq)(e, n);
                }, [t, n]),
                f = i.useMemo(() => (0, d.dq)(u, n), [u, n]),
                h = i.useMemo(() => (0, g.C)(f, r, "DirectMessageTooltip - activityUsers"), [f, r]),
                _ = i.useMemo(() => h.filter((e) => !s.some((t) => t.id === e.id)), [h, s]),
                v = (0, a.Wu)([O.ZP], () => {
                    let t = O.ZP.getVoiceStatesForChannel(e).map((e) => {
                        let { user: t } = e;
                        return t;
                    });
                    return (0, d.dq)(t, n);
                }, [e, n]),
                j = i.useMemo(() => (0, d.dq)(v, n), [v, n]),
                x = i.useMemo(() => (0, g.C)(j, r, "DirectMessageTooltip - voiceUsers"), [j, r]);
            return {
                voiceUsers: i.useMemo(
                    () => x.filter((e) => !s.some((t) => t.id === e.id) && !h.some((t) => t.id === e.id)),
                    [x, s, h],
                ),
                streamUsers: _,
                activityUsers: s,
            };
        })(t),
        h = (0, r.jsx)(C, {
            icon: s.gj8,
            users: f,
        }),
        v = (0, r.jsx)(C, {
            icon: s.hGI,
            users: u,
        }),
        x = (0, r.jsx)(C, {
            icon: s.nG3,
            users: l,
        }),
        { isMuted: S, muteConfig: I } = (0, a.cj)(
            [_.ZP],
            () => ({
                isMuted: _.ZP.isChannelMuted(null, n),
                muteConfig: _.ZP.getChannelMuteConfig(null, n),
            }),
            [n],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            h,
            v,
            x,
            S
                ? (0, r.jsx)(E, {
                      muteConfig: I,
                      className: o()(j.muteText, { [j.muteTextWithActivity]: null != h || null != v }),
                  })
                : null,
        ],
    });
}
function I(e) {
    let { channel: t } = e,
        n = (0, f.ZP)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: o()(j.row, j.rowGuildName),
                children: (0, r.jsx)("span", {
                    className: o()(j.guildNameText, j.guildNameTextLimitedSize),
                    children: n,
                }),
            }),
            (0, r.jsx)(S, { channel: t }),
        ],
    });
}
function P(e) {
    let { channel: t, "aria-label": n, children: i } = e;
    return (0, r.jsx)(s.aML, {
        "data-migration-pending": !0,
        hideOnClick: !0,
        spacing: 12,
        position: "right",
        text: (0, r.jsx)(I, { channel: t }),
        "aria-label": n,
        tooltipClassName: x.listItemTooltip,
        tooltipContentClassName: x.listItemTooltipContent,
        children: (e) => {
            var t,
                n,
                { onFocus: l, onBlur: o } = e,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.keys(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < l.length; r++)
                            (n = l[r]),
                                !(t.indexOf(n) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                    (i[n] = e[n]);
                    }
                    return i;
                })(e, ["onFocus", "onBlur"]);
            return (0, r.jsx)(
                "div",
                ((t = (function (e) {
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
                })(
                    {
                        onFocus: l,
                        onBlur: o,
                    },
                    a,
                )),
                (n = n = { children: i }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            );
        },
    });
}
