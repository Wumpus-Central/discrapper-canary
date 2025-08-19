r.d(t, { Z: () => E });
var n = r(951288);
r(647438);
var l = r(481060),
    i = r(810568),
    a = r(168524),
    o = r(594174),
    c = r(5192),
    s = r(971082),
    u = r(817053),
    d = r(879877),
    f = r(533815),
    g = r(853072),
    p = r(388032),
    b = r(958461),
    O = r(932366),
    m = r(776385);
function j(e) {
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
function y(e, t) {
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
function v(e) {
    var { applicationId: t, userId: r, gameName: o } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            }
            return l;
        })(e, ["applicationId", "userId", "gameName"]);
    let s = (0, a.Z)({
        location: "UserProfileWidgetGameDetailsCard",
        applicationId: t,
        source: i.m1.UserProfile,
        sourceUserId: r,
        trackEntryPointImpression: !0,
    });
    return null == s
        ? (0, n.jsx)(l.X6q, y(j({}, c), { children: o }))
        : (0, n.jsx)(
              l.X6q,
              y(j({}, c), {
                  children: (0, n.jsx)(l.P3F, {
                      onClick: s,
                      className: m.clickableText,
                      children: o,
                  }),
              }),
          );
}
function x(e) {
    let { text: t, user: r, guildId: i, channelId: a } = e;
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(l.PEf, {
                size: "xxs",
                color: l.TVs.colors.ICON_TERTIARY,
                className: m.icon,
            }),
            (0, n.jsx)(l.nn4, { children: p.intl.format(p.t.TM0XDQ, { name: c.ZP.getName(i, a, r) }) }),
            (0, n.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "text-tertiary",
                children: t,
            }),
        ],
    });
}
function h(e) {
    let { applicationId: t, guildId: r, channelId: l, className: i } = e,
        a = (0, g.Z)(t);
    return a.length > 0
        ? (0, n.jsx)(s.Z, {
              label: p.intl.formatToPlainString(p.t.ujhJdH, { numFriends: a.length }),
              className: i,
              users: a,
              guildId: r,
              channelId: l,
          })
        : null;
}
function E(e) {
    let { user: t, guildId: r, channelId: i, game: a, widgetType: c, loading: s = !1, disableInteraction: g = !1 } = e,
        { gameName: E = p.intl.string(p.t.GIWFlJ), imageSrc: P, applicationId: w, comment: _, tags: S } = a,
        I = {
            variant: "heading-sm/semibold",
            color: "text-default",
        },
        T = o.default.getCurrentUser(),
        N = (null == T ? void 0 : T.id) === t.id;
    return s
        ? (0, n.jsxs)("div", {
              className: m.card,
              children: [
                  (0, n.jsx)("div", { className: O.loadingCover }),
                  (0, n.jsx)("div", {
                      className: m.details,
                      children: (0, n.jsxs)("div", {
                          className: b.placeholderText,
                          children: [
                              (0, n.jsx)("div", { className: b.placeholderBar }),
                              (0, n.jsx)("div", { className: b.placeholderBar }),
                          ],
                      }),
                  }),
              ],
          })
        : (0, n.jsxs)("div", {
              className: m.card,
              children: [
                  (0, n.jsx)(u.Z, {
                      imageSrc: P,
                      gameName: E,
                      applicationId: w,
                      userId: t.id,
                      disableInteraction: g,
                      hideTooltip: !0,
                  }),
                  (0, n.jsxs)("div", {
                      className: m.details,
                      children: [
                          g
                              ? (0, n.jsx)(l.X6q, y(j({}, I), { children: E }))
                              : (0, n.jsx)(
                                    v,
                                    j(
                                        {
                                            applicationId: w,
                                            userId: t.id,
                                            gameName: E,
                                        },
                                        I,
                                    ),
                                ),
                          null != _ &&
                              (0, n.jsx)(x, {
                                  text: _,
                                  user: t,
                                  guildId: r,
                                  channelId: i,
                              }),
                          (0, n.jsx)(d.Z, {
                              tags: S,
                              isCurrentUser: N,
                              widgetType: c,
                              applicationId: w,
                          }),
                          !g &&
                              (0, n.jsx)(h, {
                                  className: m.socialProof,
                                  applicationId: w,
                                  guildId: r,
                                  channelId: i,
                              }),
                      ],
                  }),
                  !g &&
                      N &&
                      (0, n.jsx)(f.Z, {
                          game: a,
                          widgetType: c,
                          className: m.removeGameButton,
                      }),
              ],
          });
}
