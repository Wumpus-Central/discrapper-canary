n.d(t, {
    D: () => b,
});
var r = n(64700),
    i = n(417597),
    l = n(717125),
    a = n(376943),
    s = n(961350),
    o = n(734057),
    c = n(696451),
    u = n(71393),
    d = n(967198),
    p = n(287809),
    m = n(36491),
    f = n(219444),
    g = n(752755),
    h = n(461715),
    _ = n(652215);

function b(e, t) {
    let n = (0, f.$k)(),
        b = (0, h.CI)(e),
        A = (0, i.bG)([c.Ay, s.default], () => {
            let e = s.default.getId();
            return c.Ay.isMember(null == b ? void 0 : b.guildId, e);
        }, [b]),
        y = (0, i.bG)(
            [l.A],
            () => null != b && (null == b ? void 0 : b.channelId) != null && l.A.isChannelGated(b.guildId, b.channelId),
            [b],
        ),
        v = t.hasFlag(_.pr7.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: x,
            guild: O,
            parentChannel: E,
            user: j,
            selectedGuildId: C,
            canAccess: I,
        } = (0, i.cf)([g.A, u.A, o.A, p.default, d.A], () => {
            var e;
            let t = null == (e = g.A.getMediaPostEmbed(null == b ? void 0 : b.threadId)) ? void 0 : e.media,
                n = u.A.getGuild(null == b ? void 0 : b.guildId),
                r = o.A.getChannel(null == b ? void 0 : b.channelId),
                i = p.default.getUser(null == t ? void 0 : t.author_id),
                l = d.A.getGuildId(),
                s = null != r && (0, a.nc)(r);
            return {
                rawMediaPostEmbedData: t,
                guild: n,
                parentChannel: r,
                user: i,
                selectedGuildId: l,
                canAccess: s,
            };
        }, [b]),
        S = r.useMemo(() => {
            var e, t;
            let n = (0, h.tU)({
                mediaPostEmbedData: x,
                guild: O,
                parentChannel: E,
                user: j,
                selectedGuildId: C,
                canAccess: I,
            });
            return null == n
                ? null
                : ((e = (function (e) {
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
                  (t = t =
                      {
                          user: j,
                      }),
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
                  e);
        }, [x, O, E, j, C, I]);
    return (
        r.useEffect(() => {
            if ((null == b ? void 0 : b.threadId) != null) {
                let e = g.A.getEmbedFetchState(b.threadId);
                !0 !== n ||
                    e !== g.e.NOT_FETCHED ||
                    (A && !1 === y) ||
                    (!A && v) ||
                    (0, m.O0)(null == b ? void 0 : b.threadId);
            }
        }, [b, n, A, y, v]),
        S
    );
}
