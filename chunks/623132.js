r.d(t, { Z: () => h });
var n = r(951288);
r(647438);
var i = r(481060),
    l = r(810568),
    a = r(168524),
    o = r(594174),
    c = r(5192),
    s = r(971082),
    u = r(817053),
    d = r(248554),
    f = r(879877),
    b = r(533815),
    g = r(853072),
    p = r(388032),
    O = r(776385);
function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function y(e) {
    var { applicationId: t, userId: r, gameName: o } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (r = l[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["applicationId", "userId", "gameName"]);
    let s = (0, a.Z)({
        location: "UserProfileWidgetGameDetailsCard",
        applicationId: t,
        source: l.m1.UserProfile,
        sourceUserId: r,
        trackEntryPointImpression: !0,
    });
    return null == s
        ? (0, n.jsx)(i.X6q, j(m({}, c), { children: o }))
        : (0, n.jsx)(
              i.X6q,
              j(m({}, c), {
                  children: (0, n.jsx)(i.P3F, {
                      onClick: s,
                      className: O.clickableText,
                      children: o,
                  }),
              }),
          );
}
function v(e) {
    let { text: t, user: r, guildId: l, channelId: a } = e;
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(i.PEf, {
                size: "xxs",
                color: i.TVs.colors.ICON_TERTIARY,
                className: O.icon,
            }),
            (0, n.jsx)(i.nn4, { children: p.intl.format(p.t.TM0XDQ, { name: c.ZP.getName(l, a, r) }) }),
            (0, n.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "text-tertiary",
                children: t,
            }),
        ],
    });
}
function x(e) {
    let { applicationId: t, guildId: r, channelId: i, className: l } = e,
        a = (0, g.Z)(t);
    return a.length > 0
        ? (0, n.jsx)(s.Z, {
              label: p.intl.formatToPlainString(p.t.ujhJdH, { numFriends: a.length }),
              className: l,
              users: a,
              guildId: r,
              channelId: i,
          })
        : null;
}
function h(e) {
    let { user: t, guildId: r, channelId: l, game: a, widgetType: c, loading: s = !1, disableInteraction: g = !1 } = e,
        { gameName: h = p.intl.string(p.t.GIWFlJ), imageSrc: P, applicationId: w, comment: S, tags: E } = a,
        I = {
            variant: "heading-sm/medium",
            color: "text-default",
        },
        _ = o.default.getCurrentUser(),
        T = (null == _ ? void 0 : _.id) === t.id;
    return s
        ? (0, n.jsx)(d.i, {})
        : (0, n.jsxs)("div", {
              className: O.card,
              children: [
                  (0, n.jsx)(u.Z, {
                      imageSrc: P,
                      gameName: h,
                      applicationId: w,
                      userId: t.id,
                      disableInteraction: g,
                      hideTooltip: !0,
                  }),
                  (0, n.jsxs)("div", {
                      className: O.details,
                      children: [
                          g
                              ? (0, n.jsx)(i.X6q, j(m({}, I), { children: h }))
                              : (0, n.jsx)(
                                    y,
                                    m(
                                        {
                                            applicationId: w,
                                            userId: t.id,
                                            gameName: h,
                                        },
                                        I,
                                    ),
                                ),
                          null != S &&
                              (0, n.jsx)(v, {
                                  text: S,
                                  user: t,
                                  guildId: r,
                                  channelId: l,
                              }),
                          (0, n.jsx)(f.Z, {
                              tags: E,
                              isCurrentUser: T,
                              widgetType: c,
                              applicationId: w,
                              disableInteraction: g,
                          }),
                          !g &&
                              (0, n.jsx)(x, {
                                  className: O.socialProof,
                                  applicationId: w,
                                  guildId: r,
                                  channelId: l,
                              }),
                      ],
                  }),
                  !g &&
                      T &&
                      (0, n.jsx)(b.Z, {
                          game: a,
                          widgetType: c,
                          className: O.removeGameButton,
                      }),
              ],
          });
}
