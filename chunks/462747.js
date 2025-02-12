t.d(n, { Z: () => D });
var i = t(200651);
t(192379);
var l = t(120356),
    a = t.n(l),
    r = t(442837),
    d = t(481060),
    s = t(239091),
    o = t(129861),
    c = t(939863),
    u = t(184301),
    _ = t(347475),
    m = t(314897),
    g = t(158776),
    p = t(885110),
    v = t(594174),
    h = t(315416),
    I = t(765305),
    f = t(388032),
    E = t(910398);
function x(e) {
    let { children: n } = e;
    return (0, i.jsxs)('div', {
        className: E.emptyContainer,
        children: [
            (0, i.jsx)(c.Z, {
                children: (0, i.jsx)('div', {
                    className: E.circle,
                    children: (0, i.jsx)(d.BFJ, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 40,
                        width: 40,
                        className: E.icon
                    })
                })
            }),
            n
        ]
    });
}
function C() {
    return (0, i.jsx)(x, {
        children: (0, i.jsx)(d.X6q, {
            color: 'header-primary',
            variant: 'heading-xl/semibold',
            className: E.title,
            children: f.intl.string(f.t.hW0mBQ)
        })
    });
}
function N() {
    return (0, i.jsx)(x, {
        children: (0, i.jsx)(d.X6q, {
            color: 'header-secondary',
            variant: 'heading-md/semibold',
            className: E.errorTitle,
            children: f.intl.string(f.t.obChXl)
        })
    });
}
function T(e) {
    let { count: n } = e;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: E.listRow,
            children: [
                (0, i.jsx)('div', {
                    className: a()(E.listRowCircle, E.listAvatar),
                    children: (0, i.jsx)(d.BFJ, {
                        size: 'custom',
                        color: 'currentColor',
                        height: 14,
                        width: 14,
                        className: E.icon
                    })
                }),
                (0, i.jsx)(d.Text, {
                    color: 'text-normal',
                    variant: 'text-md/normal',
                    children: f.intl.format(f.t.BdQTfX, { userRemainCount: n })
                })
            ]
        })
    });
}
function L(e) {
    let { eventUser: n, guildId: t, onContextMenu: l } = e,
        s = (0, r.e7)([v.default], () => v.default.getUser(n.user_id)),
        c = (0, r.e7)([p.Z, g.Z, m.default], () => (n.user_id === m.default.getId() ? p.Z.getStatus() : g.Z.getStatus(n.user_id, t)), [n.user_id, t]);
    return null == s
        ? null
        : (0, i.jsx)(d.yRy, {
              preload: () => (0, u.Z)(s.id, s.getAvatarURL(t, 80), { guildId: t }),
              renderPopout: (e) =>
                  (0, i.jsx)(_.Z, {
                      ...e,
                      userId: n.user_id,
                      guildId: t
                  }),
              position: 'left',
              spacing: 16,
              children: (e, r) => {
                  var u;
                  let { isShown: _ } = r;
                  return (0, i.jsxs)(d.P3F, {
                      className: a()(E.listRow, E.interactiveRow, { [E.selected]: _ }),
                      onContextMenu: (e) => l(e, s),
                      ...e,
                      children: [
                          (0, i.jsx)(d.qEK, {
                              src: s.getAvatarURL(t, 24),
                              'aria-label': s.username,
                              size: d.EFr.SIZE_24,
                              className: E.listAvatar,
                              status: c
                          }),
                          (0, i.jsx)(o.Z, {
                              user: s,
                              className: E.listName,
                              discriminatorClass: E.listDiscriminator,
                              nick: null === (u = n.member) || void 0 === u ? void 0 : u.nick
                          })
                      ]
                  });
              }
          });
}
function b(e) {
    let { eventUsers: n, guildId: t, usersNotShownCount: l = 0, onContextMenu: a } = e;
    return (0, i.jsxs)(d.zJl, {
        className: E.listScroller,
        children: [
            n.map((e) =>
                (0, i.jsx)(
                    L,
                    {
                        guildId: t,
                        eventUser: e,
                        onContextMenu: a
                    },
                    e.user_id
                )
            ),
            l > 0 && (0, i.jsx)(T, { count: l })
        ]
    });
}
function S(e) {
    let { children: n, style: t } = e;
    return (0, i.jsx)('div', {
        className: E.container,
        style: null != t ? t : {},
        children: n
    });
}
function j(e) {
    let { children: n, height: t } = e;
    return (0, i.jsx)(S, {
        style: { height: t },
        children: n
    });
}
function D(e) {
    let { guildEvent: n, recurrenceId: l, eventUsers: a, loading: r, error: o, containerHeight: c } = e,
        u = (0, h.Z)(n.guild_id, n.id, l);
    if (r && 0 === a.length)
        return (0, i.jsx)(j, {
            height: c,
            children: (0, i.jsx)(d.$jN, {
                type: d.$jN.Type.SPINNING_CIRCLE,
                className: E.spinner
            })
        });
    if (null != o && 0 === a.length)
        return (0, i.jsx)(j, {
            height: c,
            children: (0, i.jsx)(N, {})
        });
    let _ = 0;
    return (
        a.length >= I.rC && u > I.rC && (_ = Math.max(u - a.length, 0)),
        0 === a.length
            ? (0, i.jsx)(j, {
                  height: c,
                  children: (0, i.jsx)(C, {})
              })
            : (0, i.jsx)(S, {
                  children: (0, i.jsx)(b, {
                      eventUsers: a,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, s.jW)(e, async () => {
                              let { default: e } = await Promise.all([t.e('79695'), t.e('69220'), t.e('34272')]).then(t.bind(t, 881351));
                              return (t) =>
                                  (0, i.jsx)(e, {
                                      ...t,
                                      user: n
                                  });
                          });
                      },
                      usersNotShownCount: _
                  })
              })
    );
}
