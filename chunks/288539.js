n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    a = n(607399),
    s = n(311907),
    o = n(442433),
    l = n(793574),
    c = n(688810),
    u = n(9588),
    d = n(332173),
    f = n(342296),
    p = n(734057),
    _ = n(696451),
    h = n(994500),
    m = n(287809),
    g = n(562153),
    E = n(427262);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let { userId: t, className: a, children: s } = e,
        l = i.useCallback(() => {
            (0, u.K)({ kind: "user" });
        }, []),
        c = i.useCallback(
            (e) => {
                null != t &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await n.e("60829").then(n.bind(n, 446828));
                        return (n) => (0, r.jsx)(e, A(y({}, n), { userId: t }));
                    });
            },
            [t],
        );
    return (0, r.jsx)(d.A, {
        className: a,
        onClick: l,
        onContextMenu: c,
        children: s,
    });
}
function S(e) {
    let {
            className: t,
            userId: u,
            channelId: b,
            parsedUserId: O,
            content: S,
            inlinePreview: I = !1,
            viewingChannelId: T,
        } = e,
        C = i.useRef(null),
        { analyticsLocations: N } = (0, c.Ay)(l.A.USER_MENTION),
        R = (0, s.bG)([m.default], () => m.default.getUser(u)),
        w = (0, s.bG)([p.A], () => p.A.getChannel(b)),
        P = null != w ? w.getGuildId() : null,
        D =
            I || null == R || null == P || null == b
                ? void 0
                : (e) => {
                      null != w &&
                          (0, o.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("29534"),
                                  n.e("33818"),
                                  n.e("55296"),
                                  n.e("84841"),
                                  n.e("86246"),
                              ]).then(n.bind(n, 107632));
                              return (t) =>
                                  (0, r.jsx)(
                                      e,
                                      A(y({}, t), {
                                          viewingChannelId: T,
                                          user: R,
                                          channel: w,
                                          guildId: P,
                                      }),
                                  );
                          });
                  },
        x = E.Ay.useName(R),
        L = (0, s.bG)([p.A, _.Ay, h.A], () => g.Ay.getNickname(P, b, R));
    if (null == R)
        return (0, r.jsx)(v, {
            userId: O,
            className: t,
            children: S,
        });
    let j = (e) =>
        (0, r.jsx)(
            d.A,
            A(
                y(
                    {
                        ref: C,
                        className: t,
                        onContextMenu: D,
                    },
                    e,
                ),
                { children: "@".concat(null != L ? L : x) },
            ),
        );
    return I
        ? (0, r.jsx)(c.f5, {
              value: N,
              children: j(),
          })
        : (0, r.jsx)(c.f5, {
              value: N,
              children: (0, r.jsx)(f.A, {
                  targetElementRef: C,
                  user: R,
                  guildId: null != P ? P : void 0,
                  channelId: b,
                  position: a.Fr ? "top" : "right",
                  clickTrap: !0,
                  children: (e) => j(e),
              }),
          });
}
