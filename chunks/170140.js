n.d(t, { J: () => v });
var r = n(473749),
    i = n(399606),
    a = n(430198),
    o = n(754688),
    s = n(314897),
    l = n(592125),
    c = n(271383),
    u = n(430824),
    d = n(914010),
    f = n(594174),
    p = n(158222),
    _ = n(312146),
    m = n(487554),
    h = n(874748),
    g = n(981631);
function E(e, t, n) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    let n = (0, _.p$)(),
        E = (0, h.LR)(e),
        y = (0, i.e7)([c.ZP, s.default], () => {
            let e = s.default.getId();
            return c.ZP.isMember(null == E ? void 0 : E.guildId, e);
        }, [E]),
        v = (0, i.e7)(
            [a.Z],
            () => null != E && (null == E ? void 0 : E.channelId) != null && a.Z.isChannelGated(E.guildId, E.channelId),
            [E],
        ),
        S = t.hasFlag(g.iLy.IS_CROSSPOST),
        {
            rawMediaPostEmbedData: I,
            guild: T,
            parentChannel: C,
            user: A,
            selectedGuildId: N,
            canAccess: P,
        } = (0, i.cj)([m.Z, u.Z, l.Z, f.default, d.Z], () => {
            var e;
            let t = null == (e = m.Z.getMediaPostEmbed(null == E ? void 0 : E.threadId)) ? void 0 : e.media,
                n = u.Z.getGuild(null == E ? void 0 : E.guildId),
                r = l.Z.getChannel(null == E ? void 0 : E.channelId),
                i = f.default.getUser(null == t ? void 0 : t.author_id),
                a = d.Z.getGuildId(),
                s = null != r && (0, o.YO)(r);
            return {
                rawMediaPostEmbedData: t,
                guild: n,
                parentChannel: r,
                user: i,
                selectedGuildId: a,
                canAccess: s,
            };
        }, [E]),
        R = r.useMemo(() => {
            let e = (0, h.ku)({
                mediaPostEmbedData: I,
                guild: T,
                parentChannel: C,
                user: A,
                selectedGuildId: N,
                canAccess: P,
            });
            return null == e ? null : O(b({}, e), { user: A });
        }, [I, T, C, A, N, P]);
    return (
        r.useEffect(() => {
            if ((null == E ? void 0 : E.threadId) != null) {
                let e = m.Z.getEmbedFetchState(E.threadId);
                !0 !== n ||
                    e !== m.M.NOT_FETCHED ||
                    (y && !1 === v) ||
                    (!y && S) ||
                    (0, p.xP)(null == E ? void 0 : E.threadId);
            }
        }, [E, n, y, v, S]),
        R
    );
}
