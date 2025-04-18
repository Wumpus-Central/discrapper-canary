t.d(n, { Z: () => D });
var i = t(200651);
t(192379);
var l = t(120356),
    r = t.n(l),
    a = t(442837),
    d = t(481060),
    o = t(239091),
    s = t(129861),
    c = t(939863),
    u = t(670188),
    _ = t(314897),
    g = t(158776),
    p = t(885110),
    m = t(594174),
    I = t(315416),
    f = t(765305),
    v = t(388032),
    N = t(960689);
function h(e) {
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
function E(e, n) {
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
function C(e) {
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
function b() {
    return (0, i.jsx)(C, {
        children: (0, i.jsx)(d.X6q, {
            color: 'header-primary',
            variant: 'heading-xl/semibold',
            className: N.title,
            children: v.NW.string(v.t.hW0mBQ)
        })
    });
}
function x() {
    return (0, i.jsx)(C, {
        children: (0, i.jsx)(d.X6q, {
            color: 'header-secondary',
            variant: 'heading-md/semibold',
            className: N.errorTitle,
            children: v.NW.string(v.t.obChXl)
        })
    });
}
function T(e) {
    let { count: n } = e;
    return (0, i.jsxs)('div', {
        className: N.listRow,
        children: [
            (0, i.jsx)('div', {
                className: r()(N.listRowCircle, N.listAvatar),
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
                children: v.NW.format(v.t.BdQTfX, { userRemainCount: n })
            })
        ]
    });
}
function y(e) {
    let { eventUser: n, guildId: t, onContextMenu: l } = e,
        o = (0, a.e7)([m.default], () => m.default.getUser(n.user_id)),
        c = (0, a.e7)([p.Z, g.Z, _.default], () => (n.user_id === _.default.getId() ? p.Z.getStatus() : g.Z.getStatus(n.user_id, t)), [n.user_id, t]);
    return null == o
        ? null
        : (0, i.jsx)(u.Z, {
              userId: n.user_id,
              guildId: t,
              position: 'left',
              spacing: 16,
              children: (e, a) => {
                  var u;
                  let { isShown: _ } = a;
                  return (0, i.jsxs)(
                      d.P3F,
                      E(
                          h(
                              {
                                  className: r()(N.listRow, N.interactiveRow, { [N.selected]: _ }),
                                  onContextMenu: (e) => l(e, o)
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
                                      nick: null == (u = n.member) ? void 0 : u.nick
                                  })
                              ]
                          }
                      )
                  );
              }
          });
}
function L(e) {
    let { eventUsers: n, guildId: t, usersNotShownCount: l = 0, onContextMenu: r } = e;
    return (0, i.jsxs)(d.zJl, {
        className: N.listScroller,
        children: [
            n.map((e) =>
                (0, i.jsx)(
                    y,
                    {
                        guildId: t,
                        eventUser: e,
                        onContextMenu: r
                    },
                    e.user_id
                )
            ),
            l > 0 && (0, i.jsx)(T, { count: l })
        ]
    });
}
function j(e) {
    let { children: n, style: t } = e;
    return (0, i.jsx)('div', {
        className: N.container,
        style: null != t ? t : {},
        children: n
    });
}
function S(e) {
    let { children: n, height: t } = e;
    return (0, i.jsx)(j, {
        style: { height: t },
        children: n
    });
}
function D(e) {
    let { guildEvent: n, recurrenceId: l, eventUsers: r, loading: a, error: s, containerHeight: c } = e,
        u = (0, I.Z)(n.guild_id, n.id, l);
    if (a && 0 === r.length)
        return (0, i.jsx)(S, {
            height: c,
            children: (0, i.jsx)(d.$jN, {
                type: d.$jN.Type.SPINNING_CIRCLE,
                className: N.spinner
            })
        });
    if (null != s && 0 === r.length)
        return (0, i.jsx)(S, {
            height: c,
            children: (0, i.jsx)(x, {})
        });
    let _ = 0;
    return (
        r.length >= f.rC && u > f.rC && (_ = Math.max(u - r.length, 0)),
        0 === r.length
            ? (0, i.jsx)(S, {
                  height: c,
                  children: (0, i.jsx)(b, {})
              })
            : (0, i.jsx)(j, {
                  children: (0, i.jsx)(L, {
                      eventUsers: r,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, o.jW)(e, async () => {
                              let { default: e } = await Promise.all([t.e('79695'), t.e('69220'), t.e('70686')]).then(t.bind(t, 881351));
                              return (t) => (0, i.jsx)(e, E(h({}, t), { user: n }));
                          });
                      },
                      usersNotShownCount: _
                  })
              })
    );
}
