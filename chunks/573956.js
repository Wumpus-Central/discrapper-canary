n.d(t, { G: () => x });
var r = n(627968),
    l = n(64700),
    i = n(417597),
    a = n(554146),
    s = n(827734),
    o = n(397927),
    c = n(442433),
    u = n(826673),
    d = n(591552),
    f = n(202776),
    p = n(454058),
    h = n(976860),
    b = n(222823),
    g = n(661191),
    m = n(32603),
    A = n(652793),
    y = n(652215),
    O = n(746080),
    j = n(790782),
    v = n(985018);
function x(e) {
    let { guild: t, selected: x } = e,
        E = (0, f.A)(t),
        _ = (0, u.JZ)(a.M.CHANNEL_BROWSER_NEW_BADGE_NUX),
        C = (0, i.yK)([p.A], () =>
            Array.from(p.A.getNewChannelIds(t.id)).filter((e) => p.A.shouldIndicateNewChannel(t.id, e)),
        ),
        S = (0, i.bG)([b.Ay], () => b.Ay.hasUnread(t.id, j.P.GUILD_ONBOARDING_QUESTION)),
        I = C.length > m.rR,
        N = (0, i.bG)([d.A, b.Ay], () => {
            let e = d.A.lastFetchedAt(t.id),
                n = b.Ay.lastMessageId(t.id, j.P.GUILD_ONBOARDING_QUESTION);
            if (null == n) return !1;
            let r = g.default.extractTimestamp(n);
            return null != e && e > r;
        }),
        T = l.useCallback(() => {
            (0, h.pX)(y.BVt.CHANNEL(t.id, E ? O.VV.CUSTOMIZE_COMMUNITY : O.VV.CHANNEL_BROWSER));
        }, [t.id, E]),
        P = l.useCallback(
            (e) => {
                (0, c.L3)(e, async () => {
                    let { default: e } = await n.e("30412").then(n.bind(n, 807431));
                    return (n) => {
                        var l, i;
                        return (0, r.jsx)(
                            e,
                            ((l = (function (e) {
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
                            })({}, n)),
                            (i = i = { guild: t }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(i)).forEach(function (e) {
                                      Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                                  }),
                            l),
                        );
                    };
                });
            },
            [t],
        ),
        w = null;
    return (
        (_ && !S && !I) ||
            x ||
            N ||
            (w = (0, r.jsx)(o.LpS, {
                color: s.A.colors.BADGE_BACKGROUND_BRAND.css,
                text: v.intl.string(v.t.y2b7CA),
            })),
        (0, r.jsx)(A.G, {
            id: "channels-".concat(t.id),
            renderIcon: (e) =>
                (0, r.jsx)(o.kiI, {
                    size: "md",
                    color: "currentColor",
                    className: e,
                }),
            text: E ? v.intl.string(v.t.h9mGOP) : v.intl.string(v.t.et6wav),
            selected: x,
            onClick: T,
            onContextMenu: P,
            trailing: w,
        })
    );
}
