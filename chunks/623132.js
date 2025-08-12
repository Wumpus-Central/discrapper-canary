n.d(t, { Z: () => O });
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(810568),
    o = n(168524),
    a = n(5192),
    c = n(971082),
    s = n(817053),
    d = n(879877),
    u = n(853072),
    f = n(388032),
    p = n(436860),
    m = n(467514),
    g = n(418718);
function b(e) {
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
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    var { applicationId: t, userId: n, gameName: a } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["applicationId", "userId", "gameName"]);
    let s = (0, o.Z)({
        location: "UserProfileWidgetGameDetailsCard",
        applicationId: t,
        source: i.m1.UserProfile,
        sourceUserId: n,
        trackEntryPointImpression: !0,
    });
    return null == s
        ? (0, r.jsx)(l.X6q, j(b({}, c), { children: a }))
        : (0, r.jsx)(
              l.X6q,
              j(b({}, c), {
                  children: (0, r.jsx)(l.P3F, {
                      onClick: s,
                      className: g.clickableText,
                      children: a,
                  }),
              }),
          );
}
function x(e) {
    let { text: t, user: n, guildId: i, channelId: o } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(l.PEf, {
                size: "xxs",
                color: l.TVs.colors.ICON_TERTIARY,
                className: g.icon,
            }),
            (0, r.jsx)(l.nn4, { children: f.intl.format(f.t.TM0XDQ, { name: a.ZP.getName(i, o, n) }) }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "text-tertiary",
                children: t,
            }),
        ],
    });
}
function h(e) {
    let { applicationId: t, guildId: n, channelId: l, className: i } = e,
        o = (0, u.Z)(t);
    return o.length > 0
        ? (0, r.jsx)(c.Z, {
              label: f.intl.formatToPlainString(f.t.ujhJdH, { numFriends: o.length }),
              className: i,
              users: o,
              guildId: n,
              channelId: l,
          })
        : null;
}
function O(e) {
    let { user: t, guildId: n, channelId: i, game: o, loading: a = !1, disableInteraction: c = !1 } = e,
        { gameName: u = f.intl.string(f.t.GIWFlJ), imageSrc: O, applicationId: v, comment: _, tags: I } = o,
        P = {
            variant: "text-md/normal",
            color: "text-default",
        };
    return a
        ? (0, r.jsxs)("div", {
              className: g.card,
              children: [
                  (0, r.jsx)("div", { className: m.loadingCover }),
                  (0, r.jsx)("div", {
                      className: g.details,
                      children: (0, r.jsxs)("div", {
                          className: p.placeholderText,
                          children: [
                              (0, r.jsx)("div", { className: p.placeholderBar }),
                              (0, r.jsx)("div", { className: p.placeholderBar }),
                          ],
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: g.card,
              children: [
                  (0, r.jsx)(s.Z, {
                      imageSrc: O,
                      gameName: u,
                      applicationId: v,
                      userId: t.id,
                      disableInteraction: c,
                  }),
                  (0, r.jsxs)("div", {
                      className: g.details,
                      children: [
                          c
                              ? (0, r.jsx)(l.X6q, j(b({}, P), { children: u }))
                              : (0, r.jsx)(
                                    y,
                                    b(
                                        {
                                            applicationId: v,
                                            userId: t.id,
                                            gameName: u,
                                        },
                                        P,
                                    ),
                                ),
                          null != _ &&
                              (0, r.jsx)(x, {
                                  text: _,
                                  user: t,
                                  guildId: n,
                                  channelId: i,
                              }),
                          (0, r.jsx)(d.Z, { tags: I }),
                          !c &&
                              (0, r.jsx)(h, {
                                  className: g.socialProof,
                                  applicationId: v,
                                  guildId: n,
                                  channelId: i,
                              }),
                      ],
                  }),
              ],
          });
}
