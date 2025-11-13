t.d(n, { Z: () => w });
var l = t(951288),
    r = t(647438),
    i = t(120356),
    s = t.n(i),
    c = t(442837),
    o = t(481060),
    a = t(239091),
    d = t(129861),
    u = t(939863),
    _ = t(456077),
    h = t(314897),
    m = t(158776),
    f = t(885110),
    x = t(594174),
    g = t(376108),
    v = t(765305),
    j = t(388032),
    p = t(200608);
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
function N(e, n) {
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
function I(e) {
    let { children: n } = e;
    return (0, l.jsxs)("div", {
        className: p.emptyContainer,
        children: [
            (0, l.jsx)(u.Z, {
                children: (0, l.jsx)("div", {
                    className: p.circle,
                    children: (0, l.jsx)(o.BFJ, {
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
function Z() {
    return (0, l.jsx)(I, {
        children: (0, l.jsx)(o.Heading, {
            color: "header-primary",
            variant: "heading-xl/semibold",
            className: p.title,
            children: j.intl.string(j.t.hW0mBR),
        }),
    });
}
function y() {
    return (0, l.jsx)(I, {
        children: (0, l.jsx)(o.Heading, {
            color: "header-secondary",
            variant: "heading-md/semibold",
            className: p.errorTitle,
            children: j.intl.string(j.t.obChXk),
        }),
    });
}
function C(e) {
    let { count: n } = e;
    return (0, l.jsxs)("div", {
        className: p.listRow,
        children: [
            (0, l.jsx)("div", {
                className: s()(p.listRowCircle, p.listAvatar),
                children: (0, l.jsx)(o.BFJ, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: p.icon,
                }),
            }),
            (0, l.jsx)(o.Text, {
                color: "text-default",
                variant: "text-md/normal",
                children: j.intl.format(j.t.BdQTfR, { userRemainCount: n }),
            }),
        ],
    });
}
function S(e) {
    let { eventUser: n, guildId: t, onContextMenu: i } = e,
        a = r.useRef(null),
        u = (0, c.e7)([x.default], () => x.default.getUser(n.user_id)),
        g = (0, c.e7)(
            [f.Z, m.Z, h.default],
            () => (n.user_id === h.default.getId() ? f.Z.getStatus() : m.Z.getStatus(n.user_id, t)),
            [n.user_id, t],
        );
    return null == u
        ? null
        : (0, l.jsx)(_.Z, {
              targetElementRef: a,
              userId: n.user_id,
              guildId: t,
              position: "left",
              spacing: 16,
              children: (e, r) => {
                  var c;
                  let { isShown: _ } = r;
                  return (0, l.jsxs)(
                      o.P3F,
                      N(
                          b(
                              {
                                  innerRef: a,
                                  className: s()(p.listRow, p.interactiveRow, { [p.selected]: _ }),
                                  onContextMenu: (e) => i(e, u),
                              },
                              e,
                          ),
                          {
                              children: [
                                  (0, l.jsx)(o.qEK, {
                                      src: u.getAvatarURL(t, 24),
                                      "aria-label": u.username,
                                      size: o.EFr.SIZE_24,
                                      className: p.listAvatar,
                                      status: g,
                                  }),
                                  (0, l.jsx)(d.Z, {
                                      user: u,
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
function P(e) {
    let { eventUsers: n, guildId: t, usersNotShownCount: r = 0, onContextMenu: i } = e;
    return (0, l.jsxs)(o.zJl, {
        className: p.listScroller,
        children: [
            n.map((e) =>
                (0, l.jsx)(
                    S,
                    {
                        guildId: t,
                        eventUser: e,
                        onContextMenu: i,
                    },
                    e.user_id,
                ),
            ),
            r > 0 && (0, l.jsx)(C, { count: r }),
        ],
    });
}
function k(e) {
    let { children: n, style: t } = e;
    return (0, l.jsx)("div", {
        className: p.container,
        style: null != t ? t : {},
        children: n,
    });
}
function E(e) {
    let { children: n, height: t } = e;
    return (0, l.jsx)(k, {
        style: { height: t },
        children: n,
    });
}
function w(e) {
    let { guildEvent: n, recurrenceId: r, eventUsers: i, loading: s, error: c, containerHeight: d } = e,
        u = (0, g.Z)(n.guild_id, n.id, r);
    if (s && 0 === i.length)
        return (0, l.jsx)(E, {
            height: d,
            children: (0, l.jsx)(o.$jN, {
                type: o.$jN.Type.SPINNING_CIRCLE,
                className: p.spinner,
            }),
        });
    if (null != c && 0 === i.length)
        return (0, l.jsx)(E, {
            height: d,
            children: (0, l.jsx)(y, {}),
        });
    let _ = 0;
    return (
        i.length >= v.rC && u > v.rC && (_ = Math.max(u - i.length, 0)),
        0 === i.length
            ? (0, l.jsx)(E, {
                  height: d,
                  children: (0, l.jsx)(Z, {}),
              })
            : (0, l.jsx)(k, {
                  children: (0, l.jsx)(P, {
                      eventUsers: i,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, a.jW)(e, async () => {
                              let { default: e } = await Promise.all([t.e("79695"), t.e("69220")]).then(
                                  t.bind(t, 881351),
                              );
                              return (t) => (0, l.jsx)(e, N(b({}, t), { user: n }));
                          });
                      },
                      usersNotShownCount: _,
                  }),
              })
    );
}
