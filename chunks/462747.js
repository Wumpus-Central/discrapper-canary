n.d(t, { Z: () => D });
var i = n(951288),
    l = n(647438),
    r = n(120356),
    a = n.n(r),
    d = n(442837),
    s = n(481060),
    o = n(239091),
    c = n(129861),
    u = n(939863),
    _ = n(670188),
    g = n(314897),
    p = n(158776),
    m = n(885110),
    I = n(594174),
    E = n(376108),
    f = n(765305),
    h = n(388032),
    v = n(200608);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
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
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    let { children: t } = e;
    return (0, i.jsxs)("div", {
        className: v.emptyContainer,
        children: [
            (0, i.jsx)(u.Z, {
                children: (0, i.jsx)("div", {
                    className: v.circle,
                    children: (0, i.jsx)(s.BFJ, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: v.icon,
                    }),
                }),
            }),
            t,
        ],
    });
}
function x() {
    return (0, i.jsx)(C, {
        children: (0, i.jsx)(s.X6q, {
            color: "header-primary",
            variant: "heading-xl/semibold",
            className: v.title,
            children: h.intl.string(h.t.hW0mBQ),
        }),
    });
}
function L() {
    return (0, i.jsx)(C, {
        children: (0, i.jsx)(s.X6q, {
            color: "header-secondary",
            variant: "heading-md/semibold",
            className: v.errorTitle,
            children: h.intl.string(h.t.obChXl),
        }),
    });
}
function j(e) {
    let { count: t } = e;
    return (0, i.jsxs)("div", {
        className: v.listRow,
        children: [
            (0, i.jsx)("div", {
                className: a()(v.listRowCircle, v.listAvatar),
                children: (0, i.jsx)(s.BFJ, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: v.icon,
                }),
            }),
            (0, i.jsx)(s.Text, {
                color: "text-default",
                variant: "text-md/normal",
                children: h.intl.format(h.t.BdQTfX, { userRemainCount: t }),
            }),
        ],
    });
}
function b(e) {
    let { eventUser: t, guildId: n, onContextMenu: r } = e,
        o = l.useRef(null),
        u = (0, d.e7)([I.default], () => I.default.getUser(t.user_id)),
        E = (0, d.e7)(
            [m.Z, p.Z, g.default],
            () => (t.user_id === g.default.getId() ? m.Z.getStatus() : p.Z.getStatus(t.user_id, n)),
            [t.user_id, n],
        );
    return null == u
        ? null
        : (0, i.jsx)(_.Z, {
              targetElementRef: o,
              userId: t.user_id,
              guildId: n,
              position: "left",
              spacing: 16,
              children: (e, l) => {
                  var d;
                  let { isShown: _ } = l;
                  return (0, i.jsxs)(
                      s.P3F,
                      y(
                          T(
                              {
                                  innerRef: o,
                                  className: a()(v.listRow, v.interactiveRow, { [v.selected]: _ }),
                                  onContextMenu: (e) => r(e, u),
                              },
                              e,
                          ),
                          {
                              children: [
                                  (0, i.jsx)(s.qEK, {
                                      src: u.getAvatarURL(n, 24),
                                      "aria-label": u.username,
                                      size: s.EFr.SIZE_24,
                                      className: v.listAvatar,
                                      status: E,
                                  }),
                                  (0, i.jsx)(c.Z, {
                                      user: u,
                                      className: v.listName,
                                      discriminatorClass: v.listDiscriminator,
                                      nick: null == (d = t.member) ? void 0 : d.nick,
                                  }),
                              ],
                          },
                      ),
                  );
              },
          });
}
function O(e) {
    let { eventUsers: t, guildId: n, usersNotShownCount: l = 0, onContextMenu: r } = e;
    return (0, i.jsxs)(s.zJl, {
        className: v.listScroller,
        children: [
            t.map((e) =>
                (0, i.jsx)(
                    b,
                    {
                        guildId: n,
                        eventUser: e,
                        onContextMenu: r,
                    },
                    e.user_id,
                ),
            ),
            l > 0 && (0, i.jsx)(j, { count: l }),
        ],
    });
}
function S(e) {
    let { children: t, style: n } = e;
    return (0, i.jsx)("div", {
        className: v.container,
        style: null != n ? n : {},
        children: t,
    });
}
function U(e) {
    let { children: t, height: n } = e;
    return (0, i.jsx)(S, {
        style: { height: n },
        children: t,
    });
}
function D(e) {
    let { guildEvent: t, recurrenceId: l, eventUsers: r, loading: a, error: d, containerHeight: c } = e,
        u = (0, E.Z)(t.guild_id, t.id, l);
    if (a && 0 === r.length)
        return (0, i.jsx)(U, {
            height: c,
            children: (0, i.jsx)(s.$jN, {
                type: s.$jN.Type.SPINNING_CIRCLE,
                className: v.spinner,
            }),
        });
    if (null != d && 0 === r.length)
        return (0, i.jsx)(U, {
            height: c,
            children: (0, i.jsx)(L, {}),
        });
    let _ = 0;
    return (
        r.length >= f.rC && u > f.rC && (_ = Math.max(u - r.length, 0)),
        0 === r.length
            ? (0, i.jsx)(U, {
                  height: c,
                  children: (0, i.jsx)(x, {}),
              })
            : (0, i.jsx)(S, {
                  children: (0, i.jsx)(O, {
                      eventUsers: r,
                      guildId: t.guild_id,
                      onContextMenu: function (e, t) {
                          (0, o.jW)(e, async () => {
                              let { default: e } = await Promise.all([n.e("79695"), n.e("69220")]).then(
                                  n.bind(n, 881351),
                              );
                              return (n) => (0, i.jsx)(e, y(T({}, n), { user: t }));
                          });
                      },
                      usersNotShownCount: _,
                  }),
              })
    );
}
