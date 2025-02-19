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
    g = t(314897),
    p = t(158776),
    m = t(885110),
    v = t(594174),
    I = t(315416),
    f = t(765305),
    h = t(388032),
    N = t(464012);
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
        className: N.emptyContainer,
        children: [
            (0, i.jsx)(c.Z, {
                children: (0, i.jsx)('div', {
                    className: N.circle,
                    children: (0, i.jsx)(d.BFJ, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 40,
                        width: 40,
                        className: N.icon
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
            className: N.title,
            children: h.NW.string(h.t.hW0mBQ)
        })
    });
}
function T() {
    return (0, i.jsx)(b, {
        children: (0, i.jsx)(d.X6q, {
            color: 'header-secondary',
            variant: 'heading-md/semibold',
            className: N.errorTitle,
            children: h.NW.string(h.t.obChXl)
        })
    });
}
function y(e) {
    let { count: n } = e;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: N.listRow,
            children: [
                (0, i.jsx)('div', {
                    className: l()(N.listRowCircle, N.listAvatar),
                    children: (0, i.jsx)(d.BFJ, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 14,
                        width: 14,
                        className: N.icon
                    })
                }),
                (0, i.jsx)(d.Text, {
                    color: 'text-normal',
                    variant: 'text-md/normal',
                    children: h.NW.format(h.t.BdQTfX, { userRemainCount: n })
                })
            ]
        })
    });
}
function L(e) {
    let { eventUser: n, guildId: t, onContextMenu: r } = e,
        o = (0, a.e7)([v.default], () => v.default.getUser(n.user_id)),
        c = (0, a.e7)([m.Z, p.Z, g.default], () => (n.user_id === g.default.getId() ? m.Z.getStatus() : p.Z.getStatus(n.user_id, t)), [n.user_id, t]);
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
                                  className: l()(N.listRow, N.interactiveRow, { [N.selected]: _ }),
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
                                      className: N.listAvatar,
                                      status: c
                                  }),
                                  (0, i.jsx)(s.Z, {
                                      user: o,
                                      className: N.listName,
                                      discriminatorClass: N.listDiscriminator,
                                      nick: null === (u = n.member) || void 0 === u ? void 0 : u.nick
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
        className: N.listScroller,
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
        className: N.container,
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
        u = (0, I.Z)(n.guild_id, n.id, r);
    if (a && 0 === l.length)
        return (0, i.jsx)(D, {
            height: c,
            children: (0, i.jsx)(d.$jN, {
                type: d.$jN.Type.SPINNING_CIRCLE,
                className: N.spinner
            })
        });
    if (null != s && 0 === l.length)
        return (0, i.jsx)(D, {
            height: c,
            children: (0, i.jsx)(T, {})
        });
    let _ = 0;
    return (
        l.length >= f.rC && u > f.rC && (_ = Math.max(u - l.length, 0)),
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
                              let { default: e } = await Promise.all([t.e('79695'), t.e('69220'), t.e('31327')]).then(t.bind(t, 881351));
                              return (t) => (0, i.jsx)(e, C(E({}, t), { user: n }));
                          });
                      },
                      usersNotShownCount: _
                  })
              })
    );
}
