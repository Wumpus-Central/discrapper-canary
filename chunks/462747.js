t.d(n, {
    Z: function () {
        return y;
    }
});
var i = t(200651);
t(192379);
var a = t(120356),
    l = t.n(a),
    r = t(442837),
    d = t(481060),
    o = t(239091),
    c = t(129861),
    s = t(939863),
    u = t(184301),
    _ = t(347475),
    g = t(314897),
    p = t(158776),
    m = t(885110),
    I = t(594174),
    v = t(315416),
    h = t(765305),
    f = t(388032),
    E = t(938760);
function C(e) {
    let { children: n } = e;
    return (0, i.jsxs)('div', {
        className: E.emptyContainer,
        children: [
            (0, i.jsx)(s.Z, {
                children: (0, i.jsx)('div', {
                    className: E.circle,
                    children: (0, i.jsx)(d.GroupIcon, {
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
function T() {
    return (0, i.jsx)(C, {
        children: (0, i.jsx)(d.Heading, {
            color: 'header-primary',
            variant: 'heading-xl/semibold',
            className: E.title,
            children: f.intl.string(f.t.hW0mBQ)
        })
    });
}
function b() {
    return (0, i.jsx)(C, {
        children: (0, i.jsx)(d.Heading, {
            color: 'header-secondary',
            variant: 'heading-md/semibold',
            className: E.errorTitle,
            children: f.intl.string(f.t.obChXl)
        })
    });
}
function L(e) {
    let { count: n } = e;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: E.listRow,
            children: [
                (0, i.jsx)('div', {
                    className: l()(E.listRowCircle, E.listAvatar),
                    children: (0, i.jsx)(d.GroupIcon, {
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
function x(e) {
    let { eventUser: n, guildId: t, onContextMenu: a } = e,
        o = (0, r.e7)([I.default], () => I.default.getUser(n.user_id)),
        s = (0, r.e7)([m.Z, p.Z, g.default], () => (n.user_id === g.default.getId() ? m.Z.getStatus() : p.Z.getStatus(n.user_id, t)), [n.user_id, t]);
    return null == o
        ? null
        : (0, i.jsx)(d.Popout, {
              preload: () => (0, u.Z)(o.id, o.getAvatarURL(t, 80), { guildId: t }),
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
                  return (0, i.jsxs)(d.Clickable, {
                      className: l()(E.listRow, E.interactiveRow, { [E.selected]: _ }),
                      onContextMenu: (e) => a(e, o),
                      ...e,
                      children: [
                          (0, i.jsx)(d.Avatar, {
                              src: o.getAvatarURL(t, 24),
                              'aria-label': o.username,
                              size: d.AvatarSizes.SIZE_24,
                              className: E.listAvatar,
                              status: s
                          }),
                          (0, i.jsx)(c.Z, {
                              user: o,
                              className: E.listName,
                              discriminatorClass: E.listDiscriminator,
                              nick: null === (u = n.member) || void 0 === u ? void 0 : u.nick
                          })
                      ]
                  });
              }
          });
}
function S(e) {
    let { eventUsers: n, guildId: t, usersNotShownCount: a = 0, onContextMenu: l } = e;
    return (0, i.jsxs)(d.ScrollerThin, {
        className: E.listScroller,
        children: [
            n.map((e) =>
                (0, i.jsx)(
                    x,
                    {
                        guildId: t,
                        eventUser: e,
                        onContextMenu: l
                    },
                    e.user_id
                )
            ),
            a > 0 && (0, i.jsx)(L, { count: a })
        ]
    });
}
function D(e) {
    let { children: n, style: t } = e;
    return (0, i.jsx)('div', {
        className: E.container,
        style: null != t ? t : {},
        children: n
    });
}
function U(e) {
    let { children: n, height: t } = e;
    return (0, i.jsx)(D, {
        style: { height: t },
        children: n
    });
}
function y(e) {
    let { guildEvent: n, recurrenceId: a, eventUsers: l, loading: r, error: c, containerHeight: s } = e,
        u = (0, v.Z)(n.guild_id, n.id, a);
    if (r && 0 === l.length)
        return (0, i.jsx)(U, {
            height: s,
            children: (0, i.jsx)(d.Spinner, {
                type: d.Spinner.Type.SPINNING_CIRCLE,
                className: E.spinner
            })
        });
    if (null != c && 0 === l.length)
        return (0, i.jsx)(U, {
            height: s,
            children: (0, i.jsx)(b, {})
        });
    let _ = 0;
    return (
        l.length >= h.rC && u > h.rC && (_ = Math.max(u - l.length, 0)),
        0 === l.length
            ? (0, i.jsx)(U, {
                  height: s,
                  children: (0, i.jsx)(T, {})
              })
            : (0, i.jsx)(D, {
                  children: (0, i.jsx)(S, {
                      eventUsers: l,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, o.jW)(e, async () => {
                              let { default: e } = await Promise.all([t.e('79695'), t.e('69220'), t.e('351')]).then(t.bind(t, 881351));
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
