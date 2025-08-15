t.d(n, { Z: () => U });
var i = t(951288),
    l = t(647438),
    r = t(120356),
    d = t.n(r),
    a = t(442837),
    o = t(481060),
    s = t(239091),
    c = t(129861),
    u = t(939863),
    _ = t(670188),
    g = t(314897),
    p = t(158776),
    m = t(885110),
    f = t(594174),
    I = t(376108),
    v = t(765305),
    h = t(388032),
    E = t(200608);
function b(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function C(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, i);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function T(e) {
    let { children: n } = e;
    return (0, i.jsxs)("div", {
        className: E.emptyContainer,
        children: [
            (0, i.jsx)(u.Z, {
                children: (0, i.jsx)("div", {
                    className: E.circle,
                    children: (0, i.jsx)(o.BFJ, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: E.icon,
                    }),
                }),
            }),
            n,
        ],
    });
}
function y() {
    return (0, i.jsx)(T, {
        children: (0, i.jsx)(o.X6q, {
            color: "header-primary",
            variant: "heading-xl/semibold",
            className: E.title,
            children: h.intl.string(h.t.hW0mBQ),
        }),
    });
}
function x() {
    return (0, i.jsx)(T, {
        children: (0, i.jsx)(o.X6q, {
            color: "header-secondary",
            variant: "heading-md/semibold",
            className: E.errorTitle,
            children: h.intl.string(h.t.obChXl),
        }),
    });
}
function L(e) {
    let { count: n } = e;
    return (0, i.jsxs)("div", {
        className: E.listRow,
        children: [
            (0, i.jsx)("div", {
                className: d()(E.listRowCircle, E.listAvatar),
                children: (0, i.jsx)(o.BFJ, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: E.icon,
                }),
            }),
            (0, i.jsx)(o.Text, {
                color: "text-default",
                variant: "text-md/normal",
                children: h.intl.format(h.t.BdQTfX, { userRemainCount: n }),
            }),
        ],
    });
}
function S(e) {
    let { eventUser: n, guildId: t, onContextMenu: r } = e,
        s = l.useRef(null),
        u = (0, a.e7)([f.default], () => f.default.getUser(n.user_id)),
        I = (0, a.e7)(
            [m.Z, p.Z, g.default],
            () => (n.user_id === g.default.getId() ? m.Z.getStatus() : p.Z.getStatus(n.user_id, t)),
            [n.user_id, t],
        );
    return null == u
        ? null
        : (0, i.jsx)(_.Z, {
              targetElementRef: s,
              userId: n.user_id,
              guildId: t,
              position: "left",
              spacing: 16,
              children: (e, l) => {
                  var a;
                  let { isShown: _ } = l;
                  return (0, i.jsxs)(
                      o.P3F,
                      C(
                          b(
                              {
                                  innerRef: s,
                                  className: d()(E.listRow, E.interactiveRow, { [E.selected]: _ }),
                                  onContextMenu: (e) => r(e, u),
                              },
                              e,
                          ),
                          {
                              children: [
                                  (0, i.jsx)(o.qEK, {
                                      src: u.getAvatarURL(t, 24),
                                      "aria-label": u.username,
                                      size: o.EFr.SIZE_24,
                                      className: E.listAvatar,
                                      status: I,
                                  }),
                                  (0, i.jsx)(c.Z, {
                                      user: u,
                                      className: E.listName,
                                      discriminatorClass: E.listDiscriminator,
                                      nick: null == (a = n.member) ? void 0 : a.nick,
                                  }),
                              ],
                          },
                      ),
                  );
              },
          });
}
function D(e) {
    let { eventUsers: n, guildId: t, usersNotShownCount: l = 0, onContextMenu: r } = e;
    return (0, i.jsxs)(o.zJl, {
        className: E.listScroller,
        children: [
            n.map((e) =>
                (0, i.jsx)(
                    S,
                    {
                        guildId: t,
                        eventUser: e,
                        onContextMenu: r,
                    },
                    e.user_id,
                ),
            ),
            l > 0 && (0, i.jsx)(L, { count: l }),
        ],
    });
}
function j(e) {
    let { children: n, style: t } = e;
    return (0, i.jsx)("div", {
        className: E.container,
        style: null != t ? t : {},
        children: n,
    });
}
function O(e) {
    let { children: n, height: t } = e;
    return (0, i.jsx)(j, {
        style: { height: t },
        children: n,
    });
}
function U(e) {
    let { guildEvent: n, recurrenceId: l, eventUsers: r, loading: d, error: a, containerHeight: c } = e,
        u = (0, I.Z)(n.guild_id, n.id, l);
    if (d && 0 === r.length)
        return (0, i.jsx)(O, {
            height: c,
            children: (0, i.jsx)(o.$jN, {
                type: o.$jN.Type.SPINNING_CIRCLE,
                className: E.spinner,
            }),
        });
    if (null != a && 0 === r.length)
        return (0, i.jsx)(O, {
            height: c,
            children: (0, i.jsx)(x, {}),
        });
    let _ = 0;
    return (
        r.length >= v.rC && u > v.rC && (_ = Math.max(u - r.length, 0)),
        0 === r.length
            ? (0, i.jsx)(O, {
                  height: c,
                  children: (0, i.jsx)(y, {}),
              })
            : (0, i.jsx)(j, {
                  children: (0, i.jsx)(D, {
                      eventUsers: r,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, s.jW)(e, async () => {
                              let { default: e } = await Promise.all([
                                  t.e("70274"),
                                  t.e("79695"),
                                  t.e("69220"),
                                  t.e("92522"),
                              ]).then(t.bind(t, 881351));
                              return (t) => (0, i.jsx)(e, C(b({}, t), { user: n }));
                          });
                      },
                      usersNotShownCount: _,
                  }),
              })
    );
}
