n.d(t, { Z: () => w });
var l = n(54381),
    r = n(473749),
    i = n(120356),
    s = n.n(i),
    c = n(442837),
    o = n(481060),
    a = n(239091),
    u = n(129861),
    d = n(939863),
    _ = n(670188),
    h = n(314897),
    f = n(158776),
    x = n(885110),
    m = n(594174),
    g = n(376108),
    v = n(765305),
    j = n(388032),
    p = n(200608);
function b(e) {
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
        className: p.emptyContainer,
        children: [
            (0, l.jsx)(d.Z, {
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
            t,
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
            color: "text-default",
            variant: "heading-md/semibold",
            className: p.errorTitle,
            children: j.intl.string(j.t.obChXk),
        }),
    });
}
function C(e) {
    let { count: t } = e;
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
                children: j.intl.format(j.t.BdQTfR, { userRemainCount: t }),
            }),
        ],
    });
}
function S(e) {
    let { eventUser: t, guildId: n, onContextMenu: i } = e,
        a = r.useRef(null),
        d = (0, c.e7)([m.default], () => m.default.getUser(t.user_id)),
        g = (0, c.e7)(
            [x.Z, f.Z, h.default],
            () => (t.user_id === h.default.getId() ? x.Z.getStatus() : f.Z.getStatus(t.user_id, n)),
            [t.user_id, n],
        );
    return null == d
        ? null
        : (0, l.jsx)(_.Z, {
              targetElementRef: a,
              userId: t.user_id,
              guildId: n,
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
                                  onContextMenu: (e) => i(e, d),
                              },
                              e,
                          ),
                          {
                              children: [
                                  (0, l.jsx)(o.qEK, {
                                      src: d.getAvatarURL(n, 24),
                                      "aria-label": d.username,
                                      size: o.EFr.SIZE_24,
                                      className: p.listAvatar,
                                      status: g,
                                  }),
                                  (0, l.jsx)(u.Z, {
                                      user: d,
                                      className: p.listName,
                                      discriminatorClass: p.listDiscriminator,
                                      nick: null == (c = t.member) ? void 0 : c.nick,
                                  }),
                              ],
                          },
                      ),
                  );
              },
          });
}
function P(e) {
    let { eventUsers: t, guildId: n, usersNotShownCount: r = 0, onContextMenu: i } = e;
    return (0, l.jsxs)(o.zJl, {
        className: p.listScroller,
        children: [
            t.map((e) =>
                (0, l.jsx)(
                    S,
                    {
                        guildId: n,
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
    let { children: t, style: n } = e;
    return (0, l.jsx)("div", {
        className: p.container,
        style: null != n ? n : {},
        children: t,
    });
}
function E(e) {
    let { children: t, height: n } = e;
    return (0, l.jsx)(k, {
        style: { height: n },
        children: t,
    });
}
function w(e) {
    let { guildEvent: t, recurrenceId: r, eventUsers: i, loading: s, error: c, containerHeight: u } = e,
        d = (0, g.Z)(t.guild_id, t.id, r);
    if (s && 0 === i.length)
        return (0, l.jsx)(E, {
            height: u,
            children: (0, l.jsx)(o.$jN, {
                type: o.$jN.Type.SPINNING_CIRCLE,
                className: p.spinner,
            }),
        });
    if (null != c && 0 === i.length)
        return (0, l.jsx)(E, {
            height: u,
            children: (0, l.jsx)(y, {}),
        });
    let _ = 0;
    return (
        i.length >= v.rC && d > v.rC && (_ = Math.max(d - i.length, 0)),
        0 === i.length
            ? (0, l.jsx)(E, {
                  height: u,
                  children: (0, l.jsx)(Z, {}),
              })
            : (0, l.jsx)(k, {
                  children: (0, l.jsx)(P, {
                      eventUsers: i,
                      guildId: t.guild_id,
                      onContextMenu: function (e, t) {
                          (0, a.jW)(e, async () => {
                              let { default: e } = await Promise.all([n.e("79695"), n.e("69220"), n.e("77635")]).then(
                                  n.bind(n, 881351),
                              );
                              return (n) => (0, l.jsx)(e, N(b({}, n), { user: t }));
                          });
                      },
                      usersNotShownCount: _,
                  }),
              })
    );
}
