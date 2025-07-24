n.d(t, { J: () => b });
var r = n(73800),
    i = n(399606),
    l = n(430198),
    a = n(754688),
    o = n(314897),
    s = n(592125),
    c = n(271383),
    u = n(430824),
    d = n(914010),
    p = n(594174),
    m = n(158222),
    f = n(312146),
    g = n(487554),
    _ = n(874748),
    h = n(981631);
function b(e, t) {
    let n = (0, f.p$)(),
        b = (0, _.LR)(e),
        E = (0, i.e7)(
            [c.ZP, o.default],
            () => {
                let e = o.default.getId();
                return c.ZP.isMember(null == b ? void 0 : b.guildId, e);
            },
            [b]
        ),
        C = (0, i.e7)([l.Z], () => null != b && (null == b ? void 0 : b.channelId) != null && l.Z.isChannelGated(b.guildId, b.channelId), [b]),
        x = t.hasFlag(h.iLy.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: v,
            guild: O,
            parentChannel: y,
            user: j,
            selectedGuildId: I,
            canAccess: S
        } = (0, i.cj)(
            [g.Z, u.Z, s.Z, p.default, d.Z],
            () => {
                var e;
                let t = null == (e = g.Z.getMediaPostEmbed(null == b ? void 0 : b.threadId)) ? void 0 : e.media,
                    n = u.Z.getGuild(null == b ? void 0 : b.guildId),
                    r = s.Z.getChannel(null == b ? void 0 : b.channelId),
                    i = p.default.getUser(null == t ? void 0 : t.author_id),
                    l = d.Z.getGuildId(),
                    o = null != r && (0, a.YO)(r);
                return {
                    rawMediaPostEmbedData: t,
                    guild: n,
                    parentChannel: r,
                    user: i,
                    selectedGuildId: l,
                    canAccess: o
                };
            },
            [b]
        ),
        T = r.useMemo(() => {
            var e, t;
            let n = (0, _.ku)({
                mediaPostEmbedData: v,
                guild: O,
                parentChannel: y,
                user: j,
                selectedGuildId: I,
                canAccess: S
            });
            return null == n
                ? null
                : ((e = (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {},
                              r = Object.keys(n);
                          ('function' == typeof Object.getOwnPropertySymbols &&
                              (r = r.concat(
                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                  })
                              )),
                              r.forEach(function (t) {
                                  var r;
                                  ((r = n[t]),
                                      t in e
                                          ? Object.defineProperty(e, t, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            })
                                          : (e[t] = r));
                              }));
                      }
                      return e;
                  })({}, n)),
                  (t = t = { user: j }),
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
        }, [v, O, y, j, I, S]);
    return (
        r.useEffect(() => {
            if ((null == b ? void 0 : b.threadId) != null) {
                let e = g.Z.getEmbedFetchState(b.threadId);
                !0 !== n || e !== g.M.NOT_FETCHED || (E && !1 === C) || (!E && x) || (0, m.xP)(null == b ? void 0 : b.threadId);
            }
        }, [b, n, E, C, x]),
        T
    );
}
