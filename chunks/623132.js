n.d(t, { Z: () => _ });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(810568),
    o = n(168524),
    a = n(594174),
    c = n(5192),
    s = n(971082),
    d = n(817053),
    u = n(879877),
    f = n(533815),
    p = n(853072),
    m = n(388032),
    g = n(958461),
    b = n(932366),
    j = n(776385);
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
function O(e, t) {
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
function h(e) {
    var { applicationId: t, userId: n, gameName: a } = e,
        c = (function (e, t) {
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
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["applicationId", "userId", "gameName"]);
    let s = (0, o.Z)({
        location: "UserProfileWidgetGameDetailsCard",
        applicationId: t,
        source: l.m1.UserProfile,
        sourceUserId: n,
        trackEntryPointImpression: !0,
    });
    return null == s
        ? (0, r.jsx)(i.X6q, O(y({}, c), { children: a }))
        : (0, r.jsx)(
              i.X6q,
              O(y({}, c), {
                  children: (0, r.jsx)(i.P3F, {
                      onClick: s,
                      className: j.clickableText,
                      children: a,
                  }),
              }),
          );
}
function x(e) {
    let { text: t, user: n, guildId: l, channelId: o } = e;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(i.PEf, {
                size: "xxs",
                color: i.TVs.colors.ICON_TERTIARY,
                className: j.icon,
            }),
            (0, r.jsx)(i.nn4, { children: m.intl.format(m.t.TM0XDQ, { name: c.ZP.getName(l, o, n) }) }),
            (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                color: "text-tertiary",
                children: t,
            }),
        ],
    });
}
function v(e) {
    let { applicationId: t, guildId: n, channelId: i, className: l } = e,
        o = (0, p.Z)(t);
    return o.length > 0
        ? (0, r.jsx)(s.Z, {
              label: m.intl.formatToPlainString(m.t.ujhJdH, { numFriends: o.length }),
              className: l,
              users: o,
              guildId: n,
              channelId: i,
          })
        : null;
}
function _(e) {
    let { user: t, guildId: n, channelId: l, game: o, widgetType: c, loading: s = !1, disableInteraction: p = !1 } = e,
        { gameName: _ = m.intl.string(m.t.GIWFlJ), imageSrc: I, applicationId: P, comment: E, tags: T } = o,
        Z = {
            variant: "heading-sm/semibold",
            color: "text-default",
        },
        N = a.default.getCurrentUser(),
        w = (null == N ? void 0 : N.id) === t.id;
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
                      hideTooltip: !0,
                  }),
                  (0, r.jsxs)("div", {
                      className: j.details,
                      children: [
                          p
                              ? (0, r.jsx)(i.X6q, O(y({}, Z), { children: _ }))
                              : (0, r.jsx)(
                                    h,
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
                              (0, r.jsx)(x, {
                                  text: E,
                                  user: t,
                                  guildId: n,
                                  channelId: l,
                              }),
                          (0, r.jsx)(u.Z, {
                              tags: T,
                              isCurrentUser: w,
                              widgetType: c,
                              applicationId: P,
                          }),
                          !p &&
                              (0, r.jsx)(v, {
                                  className: j.socialProof,
                                  applicationId: P,
                                  guildId: n,
                                  channelId: l,
                              }),
                      ],
                  }),
                  !p &&
                      w &&
                      (0, r.jsx)(f.Z, {
                          game: o,
                          widgetType: c,
                          className: j.removeGameButton,
                      }),
              ],
          });
}
