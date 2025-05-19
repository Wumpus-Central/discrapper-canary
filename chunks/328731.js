r.d(t, { Z: () => j });
var n = r(255367),
    l = r(73800),
    i = r(120356),
    o = r.n(i),
    a = r(481060),
    c = r(318374),
    s = r(5192),
    u = r(192918),
    d = r(256139),
    p = r(91907),
    f = r(866040),
    b = r(388032),
    O = r(576913);
function m(e) {
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
function j(e) {
    let { entry: t, channel: r, className: i } = e,
        j = l.useRef(null),
        g = l.useRef(null),
        { displayParticipants: h, participant1: v, participant2: P, numOtherParticipants: x, orderedParticipants: S } = (0, u.Z)(t),
        w = [v, P];
    return (0, n.jsxs)('div', {
        className: o()(O.container, i),
        children: [
            h.length > 0
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(f.Z, {
                              targetElementRef: j,
                              participants: S,
                              channel: r,
                              children: (e) =>
                                  (0, n.jsx)(
                                      a.P3F,
                                      y(
                                          m(
                                              {
                                                  innerRef: j,
                                                  className: O.clickable
                                              },
                                              e
                                          ),
                                          {
                                              children: (0, n.jsx)(c.Z, {
                                                  maxUsers: 3,
                                                  users: h,
                                                  size: a.EFr.SIZE_20,
                                                  hideOverflowCount: !0,
                                                  disableUsernameTooltip: !0
                                              })
                                          }
                                      )
                                  )
                          }),
                          (0, n.jsx)(a.LZC, {
                              size: 6,
                              horizontal: !0
                          })
                      ]
                  })
                : null,
            (0, n.jsx)(a.X6q, {
                variant: 'text-sm/semibold',
                color: 'text-secondary',
                className: o()(O.truncatedText, O.usersHeader),
                scaleFontToUserSetting: !0,
                children: b.intl.format(b.t.rH95Gh, {
                    user0: s.ZP.getName(r.guild_id, r.id, w[0]),
                    user1: s.ZP.getName(r.guild_id, r.id, w[1]),
                    countOthers: x,
                    name0Hook: (e, t) =>
                        (0, n.jsx)(
                            p.Z,
                            {
                                text: e,
                                user: w[0],
                                channel: r
                            },
                            t
                        ),
                    name1Hook: (e, t) =>
                        (0, n.jsx)(
                            p.Z,
                            {
                                text: e,
                                user: w[1],
                                channel: r
                            },
                            t
                        ),
                    countOthersHook: (e, t) =>
                        (0, n.jsx)(
                            f.Z,
                            {
                                targetElementRef: g,
                                participants: S,
                                channel: r,
                                children: (t) =>
                                    (0, n.jsx)(
                                        d.Z,
                                        y(m({}, t), {
                                            tag: 'span',
                                            children: (0, n.jsx)(a.Text, {
                                                ref: g,
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
