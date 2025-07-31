t.d(n, { Z: () => O });
var i = t(255367),
    l = t(73800),
    r = t(120356),
    a = t.n(r),
    d = t(442837),
    o = t(481060),
    s = t(239091),
    c = t(129861),
    u = t(939863),
    _ = t(670188),
    g = t(314897),
    p = t(158776),
    m = t(885110),
    f = t(594174),
    I = t(315416),
    v = t(765305),
    h = t(388032),
    C = t(960689);
function E(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                ((i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i));
            }));
    }
    return e;
}
function b(e, n) {
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
function x(e) {
    let { children: n } = e;
    return (0, i.jsxs)('div', {
        className: C.emptyContainer,
        children: [
            (0, i.jsx)(u.Z, {
                children: (0, i.jsx)('div', {
                    className: C.circle,
                    children: (0, i.jsx)(o.BFJ, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 40,
                        width: 40,
                        className: C.icon
                    })
                })
            }),
            n
        ]
    });
}
function T() {
    return (0, i.jsx)(x, {
        children: (0, i.jsx)(o.X6q, {
            color: 'header-primary',
            variant: 'heading-xl/semibold',
            className: C.title,
            children: h.intl.string(h.t.hW0mBQ)
        })
    });
}
function y() {
    return (0, i.jsx)(x, {
        children: (0, i.jsx)(o.X6q, {
            color: 'header-secondary',
            variant: 'heading-md/semibold',
            className: C.errorTitle,
            children: h.intl.string(h.t.obChXl)
        })
    });
}
function L(e) {
    let { count: n } = e;
    return (0, i.jsxs)('div', {
        className: C.listRow,
        children: [
            (0, i.jsx)('div', {
                className: a()(C.listRowCircle, C.listAvatar),
                children: (0, i.jsx)(o.BFJ, {
                    size: 'custom',
                    color: 'currentColor',
                    height: 14,
                    width: 14,
                    className: C.icon
                })
            }),
            (0, i.jsx)(o.Text, {
                color: 'text-default',
                variant: 'text-md/normal',
                children: h.intl.format(h.t.BdQTfX, { userRemainCount: n })
            })
        ]
    });
}
function j(e) {
    let { eventUser: n, guildId: t, onContextMenu: r } = e,
        s = l.useRef(null),
        u = (0, d.e7)([f.default], () => f.default.getUser(n.user_id)),
        I = (0, d.e7)([m.Z, p.Z, g.default], () => (n.user_id === g.default.getId() ? m.Z.getStatus() : p.Z.getStatus(n.user_id, t)), [n.user_id, t]);
    return null == u
        ? null
        : (0, i.jsx)(_.Z, {
              targetElementRef: s,
              userId: n.user_id,
              guildId: t,
              position: 'left',
              spacing: 16,
              children: (e, l) => {
                  var d;
                  let { isShown: _ } = l;
                  return (0, i.jsxs)(
                      o.P3F,
                      b(
                          E(
                              {
                                  innerRef: s,
                                  className: a()(C.listRow, C.interactiveRow, { [C.selected]: _ }),
                                  onContextMenu: (e) => r(e, u)
                              },
                              e
                          ),
                          {
                              children: [
                                  (0, i.jsx)(o.qEK, {
                                      src: u.getAvatarURL(t, 24),
                                      'aria-label': u.username,
                                      size: o.EFr.SIZE_24,
                                      className: C.listAvatar,
                                      status: I
                                  }),
                                  (0, i.jsx)(c.Z, {
                                      user: u,
                                      className: C.listName,
                                      discriminatorClass: C.listDiscriminator,
                                      nick: null == (d = n.member) ? void 0 : d.nick
                                  })
                              ]
                          }
                      )
                  );
              }
          });
}
function N(e) {
    let { eventUsers: n, guildId: t, usersNotShownCount: l = 0, onContextMenu: r } = e;
    return (0, i.jsxs)(o.zJl, {
        className: C.listScroller,
        children: [
            n.map((e) =>
                (0, i.jsx)(
                    j,
                    {
                        guildId: t,
                        eventUser: e,
                        onContextMenu: r
                    },
                    e.user_id
                )
            ),
            l > 0 && (0, i.jsx)(L, { count: l })
        ]
    });
}
function S(e) {
    let { children: n, style: t } = e;
    return (0, i.jsx)('div', {
        className: C.container,
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
    let { guildEvent: n, recurrenceId: l, eventUsers: r, loading: a, error: d, containerHeight: c } = e,
        u = (0, I.Z)(n.guild_id, n.id, l);
    if (a && 0 === r.length)
        return (0, i.jsx)(D, {
            height: c,
            children: (0, i.jsx)(o.$jN, {
                type: o.$jN.Type.SPINNING_CIRCLE,
                className: C.spinner
            })
        });
    if (null != d && 0 === r.length)
        return (0, i.jsx)(D, {
            height: c,
            children: (0, i.jsx)(y, {})
        });
    let _ = 0;
    return (
        r.length >= v.rC && u > v.rC && (_ = Math.max(u - r.length, 0)),
        0 === r.length
            ? (0, i.jsx)(D, {
                  height: c,
                  children: (0, i.jsx)(T, {})
              })
            : (0, i.jsx)(S, {
                  children: (0, i.jsx)(N, {
                      eventUsers: r,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, s.jW)(e, async () => {
                              let { default: e } = await Promise.all([t.e('70274'), t.e('79695'), t.e('69220'), t.e('70686')]).then(t.bind(t, 881351));
                              return (t) => (0, i.jsx)(e, b(E({}, t), { user: n }));
                          });
                      },
                      usersNotShownCount: _
                  })
              })
    );
}
