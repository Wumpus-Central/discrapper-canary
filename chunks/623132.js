n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(810568),
    o = n(168524),
    a = n(594174),
    c = n(5192),
    s = n(971082),
    d = n(817053),
    u = n(879877),
    f = n(533815),
    p = n(853072),
    m = n(388032),
    g = n(949237),
    b = n(896270),
    j = n(358340);
function y(e) {
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
function x(e, t) {
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
function O(e) {
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
        ? (0, r.jsx)(l.X6q, x(y({}, c), { children: a }))
        : (0, r.jsx)(
              l.X6q,
              x(y({}, c), {
                  children: (0, r.jsx)(l.P3F, {
                      onClick: s,
                      className: j.clickableText,
                      children: a,
                  }),
              }),
          );
}
function h(e) {
    let { text: t, user: n, guildId: i, channelId: o } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(l.PEf, {
                size: "xxs",
                color: l.TVs.colors.ICON_TERTIARY,
                className: j.icon,
            }),
            (0, r.jsx)(l.nn4, { children: m.intl.format(m.t.TM0XDQ, { name: c.ZP.getName(i, o, n) }) }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/normal",
                color: "text-tertiary",
                children: t,
            }),
        ],
    });
}
function v(e) {
    let { applicationId: t, guildId: n, channelId: l, className: i } = e,
        o = (0, p.Z)(t);
    return o.length > 0
        ? (0, r.jsx)(s.Z, {
              label: m.intl.formatToPlainString(m.t.ujhJdH, { numFriends: o.length }),
              className: i,
              users: o,
              guildId: n,
              channelId: l,
          })
        : null;
}
function _(e) {
    let { user: t, guildId: n, channelId: i, game: o, widgetType: c, loading: s = !1, disableInteraction: p = !1 } = e,
        { gameName: _ = m.intl.string(m.t.GIWFlJ), imageSrc: I, applicationId: P, comment: E, tags: T } = o,
        Z = {
            variant: "text-md/normal",
            color: "text-default",
        },
        N = a.default.getCurrentUser(),
        S = (null == N ? void 0 : N.id) === t.id;
    return s
        ? (0, r.jsxs)("div", {
              className: j.card,
              children: [
                  (0, r.jsx)("div", { className: b.loadingCover }),
                  (0, r.jsx)("div", {
                      className: j.details,
                      children: (0, r.jsxs)("div", {
                          className: g.placeholderText,
                          children: [
                              (0, r.jsx)("div", { className: g.placeholderBar }),
                              (0, r.jsx)("div", { className: g.placeholderBar }),
                          ],
                      }),
                  }),
              ],
          })
        : (0, r.jsxs)("div", {
              className: j.card,
              children: [
                  (0, r.jsx)(d.Z, {
                      imageSrc: I,
                      gameName: _,
                      applicationId: P,
                      userId: t.id,
                      disableInteraction: p,
                  }),
                  (0, r.jsxs)("div", {
                      className: j.details,
                      children: [
                          p
                              ? (0, r.jsx)(l.X6q, x(y({}, Z), { children: _ }))
                              : (0, r.jsx)(
                                    O,
                                    y(
                                        {
                                            applicationId: P,
                                            userId: t.id,
                                            gameName: _,
                                        },
                                        Z,
                                    ),
                                ),
                          null != E &&
                              (0, r.jsx)(h, {
                                  text: E,
                                  user: t,
                                  guildId: n,
                                  channelId: i,
                              }),
                          (0, r.jsx)(u.Z, { tags: T }),
                          !p &&
                              (0, r.jsx)(v, {
                                  className: j.socialProof,
                                  applicationId: P,
                                  guildId: n,
                                  channelId: i,
                              }),
                      ],
                  }),
                  !p &&
                      S &&
                      (0, r.jsx)(f.Z, {
                          game: o,
                          widgetType: c,
                          userId: t.id,
                          className: j.removeGameButton,
                      }),
              ],
          });
}
