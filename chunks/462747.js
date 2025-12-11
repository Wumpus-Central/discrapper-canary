n.d(t, { Z: () => w });
var l = n(54381),
    r = n(473749),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    c = n(481060),
    o = n(239091),
    d = n(129861),
    u = n(939863),
    f = n(670188),
    b = n(314897),
    h = n(158776),
    x = n(885110),
    m = n(594174),
    g = n(315416),
    v = n(765305),
    j = n(388032),
    _ = n(184494);
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e) {
    let { children: t } = e;
    return (0, l.jsxs)("div", {
        className: _.emptyContainer,
        children: [
            (0, l.jsx)(u.Z, {
                children: (0, l.jsx)("div", {
                    className: _.circle,
                    children: (0, l.jsx)(c.BFJ, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: _.icon,
                    }),
                }),
            }),
            t,
        ],
    });
}
function Z() {
    return (0, l.jsx)(I, {
        children: (0, l.jsx)(c.Heading, {
            color: "text-strong",
            variant: "heading-xl/semibold",
            className: _.title,
            children: j.intl.string(j.t.hW0mBR),
        }),
    });
}
function S() {
    return (0, l.jsx)(I, {
        children: (0, l.jsx)(c.Heading, {
            color: "text-default",
            variant: "heading-md/semibold",
            className: _.errorTitle,
            children: j.intl.string(j.t.obChXk),
        }),
    });
}
function y(e) {
    let { count: t } = e;
    return (0, l.jsxs)("div", {
        className: _.listRow,
        children: [
            (0, l.jsx)("div", {
                className: a()(_.listRowCircle, _.listAvatar),
                children: (0, l.jsx)(c.BFJ, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: _.icon,
                }),
            }),
            (0, l.jsx)(c.Text, {
                color: "text-default",
                variant: "text-md/normal",
                children: j.intl.format(j.t.BdQTfR, { userRemainCount: t }),
            }),
        ],
    });
}
function E(e) {
    let { eventUser: t, guildId: n, onContextMenu: i } = e,
        o = r.useRef(null),
        u = (0, s.e7)([m.default], () => m.default.getUser(t.user_id)),
        g = (0, s.e7)(
            [x.Z, h.Z, b.default],
            () => (t.user_id === b.default.getId() ? x.Z.getStatus() : h.Z.getStatus(t.user_id, n)),
            [t.user_id, n],
        );
    return null == u
        ? null
        : (0, l.jsx)(f.Z, {
              targetElementRef: o,
              userId: t.user_id,
              guildId: n,
              position: "left",
              spacing: 16,
              children: (e, r) => {
                  var s;
                  let { isShown: f } = r;
                  return (0, l.jsxs)(
                      c.P3F,
                      N(
                          p(
                              {
                                  innerRef: o,
                                  className: a()(_.listRow, _.interactiveRow, { [_.selected]: f }),
                                  onContextMenu: (e) => i(e, u),
                              },
                              e,
                          ),
                          {
                              children: [
                                  (0, l.jsx)(c.qEK, {
                                      src: u.getAvatarURL(n, 24),
                                      "aria-label": u.username,
                                      size: c.EFr.SIZE_24,
                                      className: _.listAvatar,
                                      status: g,
                                  }),
                                  (0, l.jsx)(d.Z, {
                                      user: u,
                                      className: _.listName,
                                      discriminatorClass: _.listDiscriminator,
                                      nick: null == (s = t.member) ? void 0 : s.nick,
                                  }),
                              ],
                          },
                      ),
                  );
              },
          });
}
function C(e) {
    let { eventUsers: t, guildId: n, usersNotShownCount: r = 0, onContextMenu: i } = e;
    return (0, l.jsxs)(c.zJl, {
        className: _.listScroller,
        children: [
            t.map((e) =>
                (0, l.jsx)(
                    E,
                    {
                        guildId: n,
                        eventUser: e,
                        onContextMenu: i,
                    },
                    e.user_id,
                ),
            ),
            r > 0 && (0, l.jsx)(y, { count: r }),
        ],
    });
}
function P(e) {
    let { children: t, style: n } = e;
    return (0, l.jsx)("div", {
        className: _.container,
        style: null != n ? n : {},
        children: t,
    });
}
function T(e) {
    let { children: t, height: n } = e;
    return (0, l.jsx)(P, {
        style: { height: n },
        children: t,
    });
}
function w(e) {
    let { guildEvent: t, recurrenceId: r, eventUsers: i, loading: a, error: s, containerHeight: d } = e,
        u = (0, g.Z)(t.guild_id, t.id, r);
    if (a && 0 === i.length)
        return (0, l.jsx)(T, {
            height: d,
            children: (0, l.jsx)(c.$jN, {
                type: c.$jN.Type.SPINNING_CIRCLE,
                className: _.spinner,
            }),
        });
    if (null != s && 0 === i.length)
        return (0, l.jsx)(T, {
            height: d,
            children: (0, l.jsx)(S, {}),
        });
    let f = 0;
    return (
        i.length >= v.rC && u > v.rC && (f = Math.max(u - i.length, 0)),
        0 === i.length
            ? (0, l.jsx)(T, {
                  height: d,
                  children: (0, l.jsx)(Z, {}),
              })
            : (0, l.jsx)(P, {
                  children: (0, l.jsx)(C, {
                      eventUsers: i,
                      guildId: t.guild_id,
                      onContextMenu: function (e, t) {
                          (0, o.jW)(e, async () => {
                              let { default: e } = await Promise.all([n.e("79695"), n.e("69220"), n.e("26465")]).then(
                                  n.bind(n, 881351),
                              );
                              return (n) => (0, l.jsx)(e, N(p({}, n), { user: t }));
                          });
                      },
                      usersNotShownCount: f,
                  }),
              })
    );
}
