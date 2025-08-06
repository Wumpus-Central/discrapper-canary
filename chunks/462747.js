t.d(n, { Z: () => T });
var l = t(255367),
    i = t(73800),
    r = t(120356),
    o = t.n(r),
    c = t(442837),
    s = t(481060),
    a = t(239091),
    u = t(129861),
    d = t(939863),
    f = t(670188),
    g = t(314897),
    h = t(158776),
    _ = t(885110),
    v = t(594174),
    m = t(376108),
    x = t(765305),
    j = t(388032),
    p = t(960689);
function b(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function Z(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, l);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function y(e) {
    let { children: n } = e;
    return (0, l.jsxs)("div", {
        className: p.emptyContainer,
        children: [
            (0, l.jsx)(d.Z, {
                children: (0, l.jsx)("div", {
                    className: p.circle,
                    children: (0, l.jsx)(s.BFJ, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: p.icon,
                    }),
                }),
            }),
            n,
        ],
    });
}
function P() {
    return (0, l.jsx)(y, {
        children: (0, l.jsx)(s.X6q, {
            color: "header-primary",
            variant: "heading-xl/semibold",
            className: p.title,
            children: j.intl.string(j.t.hW0mBQ),
        }),
    });
}
function C() {
    return (0, l.jsx)(y, {
        children: (0, l.jsx)(s.X6q, {
            color: "header-secondary",
            variant: "heading-md/semibold",
            className: p.errorTitle,
            children: j.intl.string(j.t.obChXl),
        }),
    });
}
function N(e) {
    let { count: n } = e;
    return (0, l.jsxs)("div", {
        className: p.listRow,
        children: [
            (0, l.jsx)("div", {
                className: o()(p.listRowCircle, p.listAvatar),
                children: (0, l.jsx)(s.BFJ, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: p.icon,
                }),
            }),
            (0, l.jsx)(s.Text, {
                color: "text-default",
                variant: "text-md/normal",
                children: j.intl.format(j.t.BdQTfX, { userRemainCount: n }),
            }),
        ],
    });
}
function E(e) {
    let { eventUser: n, guildId: t, onContextMenu: r } = e,
        a = i.useRef(null),
        d = (0, c.e7)([v.default], () => v.default.getUser(n.user_id)),
        m = (0, c.e7)(
            [_.Z, h.Z, g.default],
            () => (n.user_id === g.default.getId() ? _.Z.getStatus() : h.Z.getStatus(n.user_id, t)),
            [n.user_id, t],
        );
    return null == d
        ? null
        : (0, l.jsx)(f.Z, {
              targetElementRef: a,
              userId: n.user_id,
              guildId: t,
              position: "left",
              spacing: 16,
              children: (e, i) => {
                  var c;
                  let { isShown: f } = i;
                  return (0, l.jsxs)(
                      s.P3F,
                      Z(
                          b(
                              {
                                  innerRef: a,
                                  className: o()(p.listRow, p.interactiveRow, { [p.selected]: f }),
                                  onContextMenu: (e) => r(e, d),
                              },
                              e,
                          ),
                          {
                              children: [
                                  (0, l.jsx)(s.qEK, {
                                      src: d.getAvatarURL(t, 24),
                                      "aria-label": d.username,
                                      size: s.EFr.SIZE_24,
                                      className: p.listAvatar,
                                      status: m,
                                  }),
                                  (0, l.jsx)(u.Z, {
                                      user: d,
                                      className: p.listName,
                                      discriminatorClass: p.listDiscriminator,
                                      nick: null == (c = n.member) ? void 0 : c.nick,
                                  }),
                              ],
                          },
                      ),
                  );
              },
          });
}
function I(e) {
    let { eventUsers: n, guildId: t, usersNotShownCount: i = 0, onContextMenu: r } = e;
    return (0, l.jsxs)(s.zJl, {
        className: p.listScroller,
        children: [
            n.map((e) =>
                (0, l.jsx)(
                    E,
                    {
                        guildId: t,
                        eventUser: e,
                        onContextMenu: r,
                    },
                    e.user_id,
                ),
            ),
            i > 0 && (0, l.jsx)(N, { count: i }),
        ],
    });
}
function O(e) {
    let { children: n, style: t } = e;
    return (0, l.jsx)("div", {
        className: p.container,
        style: null != t ? t : {},
        children: n,
    });
}
function S(e) {
    let { children: n, height: t } = e;
    return (0, l.jsx)(O, {
        style: { height: t },
        children: n,
    });
}
function T(e) {
    let { guildEvent: n, recurrenceId: i, eventUsers: r, loading: o, error: c, containerHeight: u } = e,
        d = (0, m.Z)(n.guild_id, n.id, i);
    if (o && 0 === r.length)
        return (0, l.jsx)(S, {
            height: u,
            children: (0, l.jsx)(s.$jN, {
                type: s.$jN.Type.SPINNING_CIRCLE,
                className: p.spinner,
            }),
        });
    if (null != c && 0 === r.length)
        return (0, l.jsx)(S, {
            height: u,
            children: (0, l.jsx)(C, {}),
        });
    let f = 0;
    return (
        r.length >= x.rC && d > x.rC && (f = Math.max(d - r.length, 0)),
        0 === r.length
            ? (0, l.jsx)(S, {
                  height: u,
                  children: (0, l.jsx)(P, {}),
              })
            : (0, l.jsx)(O, {
                  children: (0, l.jsx)(I, {
                      eventUsers: r,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, a.jW)(e, async () => {
                              let { default: e } = await Promise.all([t.e("79695"), t.e("69220")]).then(
                                  t.bind(t, 881351),
                              );
                              return (t) => (0, l.jsx)(e, Z(b({}, t), { user: n }));
                          });
                      },
                      usersNotShownCount: f,
                  }),
              })
    );
}
