t.d(n, { Z: () => O });
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    a = t(442837),
    d = t(481060),
    o = t(239091),
    s = t(129861),
    c = t(939863),
    u = t(184301),
    _ = t(347475),
    p = t(314897),
    g = t(158776),
    m = t(885110),
    I = t(594174),
    f = t(315416),
    v = t(765305),
    N = t(388032),
    h = t(960689);
function E(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
function b(e) {
    let { children: n } = e;
    return (0, i.jsxs)('div', {
        className: h.emptyContainer,
        children: [
            (0, i.jsx)(c.Z, {
                children: (0, i.jsx)('div', {
                    className: h.circle,
                    children: (0, i.jsx)(d.BFJ, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 40,
                        width: 40,
                        className: h.icon
                    })
                })
            }),
            n
        ]
    });
}
function x() {
    return (0, i.jsx)(b, {
        children: (0, i.jsx)(d.X6q, {
            color: 'header-primary',
            variant: 'heading-xl/semibold',
            className: h.title,
            children: N.NW.string(N.t.hW0mBQ)
        })
    });
}
function T() {
    return (0, i.jsx)(b, {
        children: (0, i.jsx)(d.X6q, {
            color: 'header-secondary',
            variant: 'heading-md/semibold',
            className: h.errorTitle,
            children: N.NW.string(N.t.obChXl)
        })
    });
}
function y(e) {
    let { count: n } = e;
    return (0, i.jsxs)('div', {
        className: h.listRow,
        children: [
            (0, i.jsx)('div', {
                className: l()(h.listRowCircle, h.listAvatar),
                children: (0, i.jsx)(d.BFJ, {
                    size: 'custom',
                    color: 'currentColor',
                    height: 14,
                    width: 14,
                    className: h.icon
                })
            }),
            (0, i.jsx)(d.Text, {
                color: 'text-normal',
                variant: 'text-md/normal',
                children: N.NW.format(N.t.BdQTfX, { userRemainCount: n })
            })
        ]
    });
}
function L(e) {
    let { eventUser: n, guildId: t, onContextMenu: r } = e,
        o = (0, a.e7)([I.default], () => I.default.getUser(n.user_id)),
        c = (0, a.e7)([m.Z, g.Z, p.default], () => (n.user_id === p.default.getId() ? m.Z.getStatus() : g.Z.getStatus(n.user_id, t)), [n.user_id, t]);
    return null == o
        ? null
        : (0, i.jsx)(d.yRy, {
              preload: () => (0, u.Z)(o.id, o.getAvatarURL(t, 80), { guildId: t }),
              renderPopout: (e) =>
                  (0, i.jsx)(
                      _.Z,
                      C(E({}, e), {
                          userId: n.user_id,
                          guildId: t
                      })
                  ),
              position: 'left',
              spacing: 16,
              children: (e, a) => {
                  var u;
                  let { isShown: _ } = a;
                  return (0, i.jsxs)(
                      d.P3F,
                      C(
                          E(
                              {
                                  className: l()(h.listRow, h.interactiveRow, { [h.selected]: _ }),
                                  onContextMenu: (e) => r(e, o)
                              },
                              e
                          ),
                          {
                              children: [
                                  (0, i.jsx)(d.qEK, {
                                      src: o.getAvatarURL(t, 24),
                                      'aria-label': o.username,
                                      size: d.EFr.SIZE_24,
                                      className: h.listAvatar,
                                      status: c
                                  }),
                                  (0, i.jsx)(s.Z, {
                                      user: o,
                                      className: h.listName,
                                      discriminatorClass: h.listDiscriminator,
                                      nick: null == (u = n.member) ? void 0 : u.nick
                                  })
                              ]
                          }
                      )
                  );
              }
          });
}
function j(e) {
    let { eventUsers: n, guildId: t, usersNotShownCount: r = 0, onContextMenu: l } = e;
    return (0, i.jsxs)(d.zJl, {
        className: h.listScroller,
        children: [
            n.map((e) =>
                (0, i.jsx)(
                    L,
                    {
                        guildId: t,
                        eventUser: e,
                        onContextMenu: l
                    },
                    e.user_id
                )
            ),
            r > 0 && (0, i.jsx)(y, { count: r })
        ]
    });
}
function S(e) {
    let { children: n, style: t } = e;
    return (0, i.jsx)('div', {
        className: h.container,
        style: null != t ? t : {},
        children: n
    });
}
function D(e) {
    let { children: n, height: t } = e;
    return (0, i.jsx)(S, {
        style: { height: t },
        children: n
    });
}
function O(e) {
    let { guildEvent: n, recurrenceId: r, eventUsers: l, loading: a, error: s, containerHeight: c } = e,
        u = (0, f.Z)(n.guild_id, n.id, r);
    if (a && 0 === l.length)
        return (0, i.jsx)(D, {
            height: c,
            children: (0, i.jsx)(d.$jN, {
                type: d.$jN.Type.SPINNING_CIRCLE,
                className: h.spinner
            })
        });
    if (null != s && 0 === l.length)
        return (0, i.jsx)(D, {
            height: c,
            children: (0, i.jsx)(T, {})
        });
    let _ = 0;
    return (
        l.length >= v.rC && u > v.rC && (_ = Math.max(u - l.length, 0)),
        0 === l.length
            ? (0, i.jsx)(D, {
                  height: c,
                  children: (0, i.jsx)(x, {})
              })
            : (0, i.jsx)(S, {
                  children: (0, i.jsx)(j, {
                      eventUsers: l,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, o.jW)(e, async () => {
                              let { default: e } = await Promise.all([t.e('79695'), t.e('69220'), t.e('70686')]).then(t.bind(t, 881351));
                              return (t) => (0, i.jsx)(e, C(E({}, t), { user: n }));
                          });
                      },
                      usersNotShownCount: _
                  })
              })
    );
}
