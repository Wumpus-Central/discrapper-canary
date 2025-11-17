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
    _ = n(866040),
    p = n(388032),
    h = n(817120);
function m(e, t, n) {
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
                m(e, t, n[t]);
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
        m = i.useRef(null),
        E = i.useRef(null),
        {
            displayParticipants: y,
            participant1: O,
            participant2: v,
            numOtherParticipants: I,
            orderedParticipants: T,
        } = (0, u.Z)(t),
        S = [O, v];
    return (0, r.jsxs)("div", {
        className: o()(h.container, a),
        children: [
            y.length > 0
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(_.Z, {
                              targetElementRef: m,
                              participants: T,
                              channel: n,
                              children: (e) =>
                                  (0, r.jsx)(
                                      l.P3F,
                                      b(
                                          g(
                                              {
                                                  innerRef: m,
                                                  className: h.clickable,
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
                className: o()(h.truncatedText, h.usersHeader),
                scaleFontToUserSetting: !0,
                children: p.intl.format(p.t.rH95Gu, {
                    user0: c.ZP.getName(n.guild_id, n.id, S[0]),
                    user1: c.ZP.getName(n.guild_id, n.id, S[1]),
                    countOthers: I,
                    name0Hook: (e, t) =>
                        (0, r.jsx)(
                            f.Z,
                            {
                                text: e,
                                user: S[0],
                                channel: n,
                            },
                            t,
                        ),
                    name1Hook: (e, t) =>
                        (0, r.jsx)(
                            f.Z,
                            {
                                text: e,
                                user: S[1],
                                channel: n,
                            },
                            t,
                        ),
                    countOthersHook: (e, t) =>
                        (0, r.jsx)(
                            _.Z,
                            {
                                targetElementRef: E,
                                participants: T,
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
