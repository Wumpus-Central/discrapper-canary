r.d(t, { Z: () => m });
var n = r(200651),
    l = r(120356),
    i = r.n(l),
    o = r(481060),
    a = r(318374),
    c = r(5192),
    s = r(192918),
    u = r(256139),
    p = r(91907),
    d = r(866040),
    f = r(388032),
    b = r(103395);
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function m(e) {
    let { entry: t, channel: r, className: l } = e,
        { displayParticipants: m, participant1: j, participant2: g, numOtherParticipants: h, orderedParticipants: v } = (0, s.Z)(t),
        P = [j, g];
    return (0, n.jsxs)('div', {
        className: i()(b.container, l),
        children: [
            m.length > 0
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(d.Z, {
                              participants: v,
                              channel: r,
                              children: (e) =>
                                  (0, n.jsx)(
                                      o.P3F,
                                      y(O({ className: b.clickable }, e), {
                                          children: (0, n.jsx)(a.Z, {
                                              maxUsers: 3,
                                              users: m,
                                              size: o.EFr.SIZE_20,
                                              avatarClassName: b.stackedAvatar,
                                              hideOverflowCount: !0,
                                              disableUsernameTooltip: !0
                                          })
                                      })
                                  )
                          }),
                          (0, n.jsx)(o.LZC, {
                              size: 6,
                              horizontal: !0
                          })
                      ]
                  })
                : null,
            (0, n.jsx)(o.X6q, {
                variant: 'text-sm/semibold',
                color: 'text-secondary',
                className: i()(b.truncatedText, b.usersHeader),
                scaleFontToUserSetting: !0,
                children: f.NW.format(f.t.rH95Gh, {
                    user0: c.ZP.getName(r.guild_id, r.id, P[0]),
                    user1: c.ZP.getName(r.guild_id, r.id, P[1]),
                    countOthers: h,
                    name0Hook: (e, t) =>
                        (0, n.jsx)(
                            p.Z,
                            {
                                text: e,
                                user: P[0],
                                channel: r
                            },
                            t
                        ),
                    name1Hook: (e, t) =>
                        (0, n.jsx)(
                            p.Z,
                            {
                                text: e,
                                user: P[1],
                                channel: r
                            },
                            t
                        ),
                    countOthersHook: (e, t) =>
                        (0, n.jsx)(
                            d.Z,
                            {
                                participants: v,
                                channel: r,
                                children: (t) =>
                                    (0, n.jsx)(
                                        u.Z,
                                        y(O({}, t), {
                                            tag: 'span',
                                            children: (0, n.jsx)(o.Text, {
                                                variant: 'text-sm/semibold',
                                                color: 'text-primary',
                                                lineClamp: 1,
                                                scaleFontToUserSetting: !0,
                                                children: e
                                            })
                                        })
                                    )
                            },
                            t
                        )
                })
            })
        ]
    });
}
