n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(36563),
    l = n(481060),
    c = n(5192),
    u = n(192918),
    d = n(256139),
    f = n(91907),
    p = n(866040),
    _ = n(388032),
    m = n(817120);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { entry: t, channel: n, className: a } = e,
        h = i.useRef(null),
        E = i.useRef(null),
        {
            displayParticipants: y,
            participant1: O,
            participant2: v,
            numOtherParticipants: S,
            orderedParticipants: I,
        } = (0, u.Z)(t),
        T = [O, v];
    return (0, r.jsxs)("div", {
        className: o()(m.container, a),
        children: [
            y.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(p.Z, {
                              targetElementRef: h,
                              participants: I,
                              channel: n,
                              children: (e) =>
                                  (0, r.jsx)(
                                      l.P3F,
                                      b(
                                          g(
                                              {
                                                  innerRef: h,
                                                  className: m.clickable,
                                              },
                                              e,
                                          ),
                                          {
                                              children: (0, r.jsx)(s.Z, {
                                                  maxUsers: 3,
                                                  users: y,
                                                  size: l.EFr.SIZE_20,
                                                  hideOverflowCount: !0,
                                                  disableUsernameTooltip: !0,
                                              }),
                                          },
                                      ),
                                  ),
                          }),
                          (0, r.jsx)(l.LZC, {
                              size: 6,
                              horizontal: !0,
                          }),
                      ],
                  })
                : null,
            (0, r.jsx)(l.Heading, {
                variant: "text-sm/semibold",
                color: "text-secondary",
                className: o()(m.truncatedText, m.usersHeader),
                scaleFontToUserSetting: !0,
                children: _.intl.format(_.t.rH95Gu, {
                    user0: c.ZP.getName(n.guild_id, n.id, T[0]),
                    user1: c.ZP.getName(n.guild_id, n.id, T[1]),
                    countOthers: S,
                    name0Hook: (e, t) =>
                        (0, r.jsx)(
                            f.Z,
                            {
                                text: e,
                                user: T[0],
                                channel: n,
                            },
                            t,
                        ),
                    name1Hook: (e, t) =>
                        (0, r.jsx)(
                            f.Z,
                            {
                                text: e,
                                user: T[1],
                                channel: n,
                            },
                            t,
                        ),
                    countOthersHook: (e, t) =>
                        (0, r.jsx)(
                            p.Z,
                            {
                                targetElementRef: E,
                                participants: I,
                                channel: n,
                                children: (t) =>
                                    (0, r.jsx)(
                                        d.Z,
                                        b(g({}, t), {
                                            tag: "span",
                                            children: (0, r.jsx)(l.Text, {
                                                ref: E,
                                                variant: "text-sm/semibold",
                                                color: "text-primary",
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
