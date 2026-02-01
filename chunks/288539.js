n.d(t, {
    A: () => I,
});
var r = n(627968),
    i = n(64700),
    a = n(607399),
    o = n(311907),
    s = n(442433),
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

function y(e, t, n) {
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
                y(e, t, n[t]);
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

function v(e, t) {
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

function A(e) {
    let { userId: t, className: a, children: o } = e,
        l = i.useCallback(() => {
            (0, u.K)({
                kind: "user",
            });
        }, []),
        c = i.useCallback(
            (e) => {
                null != t &&
                    (0, s.L3)(e, async () => {
                        let { default: e } = await n.e("60829").then(n.bind(n, 446828));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                v(b({}, n), {
                                    userId: t,
                                }),
                            );
                    });
            },
            [t],
        );
    return (0, r.jsx)(d.A, {
        className: a,
        onClick: l,
        onContextMenu: c,
        children: o,
    });
}

function I(e) {
    let {
            className: t,
            userId: u,
            channelId: y,
            parsedUserId: O,
            content: I,
            inlinePreview: S = !1,
            viewingChannelId: T,
        } = e,
        C = i.useRef(null),
        { analyticsLocations: N } = (0, c.Ay)(l.A.USER_MENTION),
        w = (0, o.bG)([m.default], () => m.default.getUser(u)),
        R = (0, o.bG)([p.A], () => p.A.getChannel(y)),
        P = null != R ? R.getGuildId() : null,
        D =
            S || null == w || null == P || null == y
                ? void 0
                : (e) => {
                      null != R &&
                          (0, s.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e("54809"),
                                  n.e("97262"),
                                  n.e("3795"),
                                  n.e("29534"),
                                  n.e("97283"),
                                  n.e("55296"),
                                  n.e("84841"),
                                  n.e("51444"),
                              ]).then(n.bind(n, 107632));
                              return (t) =>
                                  (0, r.jsx)(
                                      e,
                                      v(b({}, t), {
                                          viewingChannelId: T,
                                          user: w,
                                          channel: R,
                                          guildId: P,
                                      }),
                                  );
                          });
                  },
        L = E.Ay.useName(w),
        x = (0, o.bG)([p.A, _.Ay, h.A], () => g.Ay.getNickname(P, y, w));
    if (null == w)
        return (0, r.jsx)(A, {
            userId: O,
            className: t,
            children: I,
        });
    let M = (e) =>
        (0, r.jsx)(
            d.A,
            v(
                b(
                    {
                        ref: C,
                        className: t,
                        onContextMenu: D,
                    },
                    e,
                ),
                {
                    children: "@".concat(null != x ? x : L),
                },
            ),
        );
    return S
        ? (0, r.jsx)(c.f5, {
              value: N,
              children: M(),
          })
        : (0, r.jsx)(c.f5, {
              value: N,
              children: (0, r.jsx)(f.A, {
                  targetElementRef: C,
                  user: w,
                  guildId: null != P ? P : void 0,
                  channelId: y,
                  position: a.Fr ? "top" : "right",
                  clickTrap: !0,
                  children: (e) => M(e),
              }),
          });
}
