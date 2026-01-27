n.d(t, {
    A: () => x,
});
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(342952),
    o = n(397927),
    c = n(562153),
    u = n(576757),
    d = n(291594),
    m = n(22869),
    f = n(959),
    p = n(985018),
    h = n(199830);

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function x(e) {
    let { entry: t, channel: n, className: a } = e,
        x = l.useRef(null),
        y = l.useRef(null),
        {
            displayParticipants: v,
            participant1: j,
            participant2: C,
            numOtherParticipants: _,
            orderedParticipants: A,
        } = (0, u.A)(t),
        O = [j, C];
    return (0, r.jsxs)("div", {
        className: i()(h.kL, a),
        children: [
            v.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(f.A, {
                              targetElementRef: x,
                              participants: A,
                              channel: n,
                              children: (e) =>
                                  (0, r.jsx)(
                                      o.DUT,
                                      g(
                                          b(
                                              {
                                                  innerRef: x,
                                                  className: h.vk,
                                              },
                                              e,
                                          ),
                                          {
                                              children: (0, r.jsx)(s.A, {
                                                  maxUsers: 3,
                                                  users: v,
                                                  size: o._3J.SIZE_20,
                                                  hideOverflowCount: !0,
                                                  disableUsernameTooltip: !0,
                                              }),
                                          },
                                      ),
                                  ),
                          }),
                          (0, r.jsx)(o.hKd, {
                              size: 6,
                              horizontal: !0,
                          }),
                      ],
                  })
                : null,
            (0, r.jsx)(o.Heading, {
                variant: "text-sm/semibold",
                color: "text-subtle",
                className: i()(h.IY, h.Io),
                scaleFontToUserSetting: !0,
                children: p.intl.format(p.t.rH95Gu, {
                    user0: c.Ay.getName(n.guild_id, n.id, O[0]),
                    user1: c.Ay.getName(n.guild_id, n.id, O[1]),
                    countOthers: _,
                    name0Hook: (e, t) =>
                        (0, r.jsx)(
                            m.A,
                            {
                                text: e,
                                user: O[0],
                                channel: n,
                            },
                            t,
                        ),
                    name1Hook: (e, t) =>
                        (0, r.jsx)(
                            m.A,
                            {
                                text: e,
                                user: O[1],
                                channel: n,
                            },
                            t,
                        ),
                    countOthersHook: (e, t) =>
                        (0, r.jsx)(
                            f.A,
                            {
                                targetElementRef: y,
                                participants: A,
                                channel: n,
                                children: (t) =>
                                    (0, r.jsx)(
                                        d.A,
                                        g(b({}, t), {
                                            tag: "span",
                                            children: (0, r.jsx)(o.Text, {
                                                ref: y,
                                                variant: "text-sm/semibold",
                                                color: "text-strong",
                                                lineClamp: 1,
                                                scaleFontToUserSetting: !0,
                                                children: e,
                                            }),
                                        }),
                                    ),
                            },
                            t,
                        ),
                }),
            }),
        ],
    });
}
