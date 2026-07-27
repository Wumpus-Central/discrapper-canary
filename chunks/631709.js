c.r(e), c.d(e, { default: () => D });
var a = c(627968),
    s = c(64700),
    i = c(17928),
    n = c(297264),
    r = c(834730),
    l = c(562708),
    u = c(562465),
    f = c(228366),
    o = c(499785),
    d = c(158390),
    h = c(927813);
let E = h.A.Millis.SECOND,
    S = h.A.Millis.MINUTE,
    _ = {};
class C extends i.Ay.Store {
    static displayName = "GuildSpaceStore";
    getSpace(t) {
        return _[t]?.space;
    }
    getFetchStatus(t) {
        return _[t]?.fetchStatus ?? "idle";
    }
    isInBackoff(t) {
        return _[t]?.backoff?.pending === !0;
    }
}
let p = new C(f.h, {
    GUILD_SPACE_FETCH_START: function (t) {
        let e,
            { guildId: c, requestId: a } = t,
            s = (null == (e = _[c]) && ((e = { fetchStatus: "idle" }), (_[c] = e)), e);
        (s.fetchStatus = "loading"), (s.activeFetchRequestId = a);
    },
    GUILD_SPACE_FETCH_SUCCESS: function (t) {
        let { guildId: e, requestId: c, space: a } = t,
            s = _[e];
        if (s?.activeFetchRequestId !== c) return !1;
        delete s.activeFetchRequestId, (s.space = a), (s.fetchStatus = "success"), s.backoff?.succeed();
    },
    GUILD_SPACE_FETCH_FAILURE: function (t) {
        let { guildId: e, requestId: c, retryable: a } = t,
            s = _[e];
        if (s?.activeFetchRequestId !== c) return !1;
        delete s.activeFetchRequestId,
            (s.fetchStatus = "error"),
            a &&
                (null == s.backoff && (s.backoff = new d.A(E, S, !0)),
                s.backoff.pending ||
                    s.backoff.fail(() => f.h.dispatch({ type: "GUILD_SPACE_FETCH_BACKOFF_EXPIRED", guildId: e })));
    },
    GUILD_SPACE_FETCH_BACKOFF_EXPIRED: function (t) {
        let { guildId: e } = t,
            c = _[e];
        if (c?.fetchStatus !== "error") return !1;
        c.backoff?.cancel(), (c.fetchStatus = "idle");
    },
    GUILD_DELETE: function (t) {
        let {
            guild: { id: e, unavailable: c },
        } = t;
        if (c) return !1;
        _[e]?.backoff?.cancel(), delete _[e];
    },
    LOGOUT: function () {
        Object.values(_).forEach((t) => t?.backoff?.cancel()), (_ = {});
    },
});
var I = c(652215);
let A = 0;
async function F(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        c = p.getFetchStatus(t),
        a = e && "error" === c && !p.isInBackoff(t);
    if ("idle" !== c && !a) return;
    let s = A++;
    f.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: t, requestId: s });
    try {
        let { body: e } = await o.A.get({
            url: I.Rsh.GUILD_SPACE(t),
            trackedActionData: { event: l.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        f.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: t, requestId: s, space: e });
    } catch (e) {
        f.h.dispatch({
            type: "GUILD_SPACE_FETCH_FAILURE",
            guildId: t,
            requestId: s,
            retryable: !(e instanceof u.oh) || e.status < 400 || e.status >= 500 || 429 === e.status,
        });
    }
}
var g = c(375708),
    k = c(278093);
function D(t) {
    let { guildId: e } = t,
        c = s.useRef(null),
        [l, u] = (0, i.yK)([p], () => [p.getSpace(e), p.getFetchStatus(e)], [e]);
    return (
        s.useEffect(() => {
            let t = c.current !== e;
            (c.current = e), F(e, t);
        }, [u, e]),
        (0, a.jsxs)("div", {
            className: k.M,
            children: [
                (0, a.jsx)(n.D, {
                    variant: "heading-xl/bold",
                    color: "text-strong",
                    children: g.intl.string(g.t["04IVMq"]),
                }),
                null != l
                    ? (0, a.jsx)("ul", {
                          children: l.widgets.map((t) =>
                              (0, a.jsxs)(
                                  r.E,
                                  {
                                      tag: "li",
                                      variant: "text-sm/normal",
                                      color: "text-strong",
                                      children: [t.id, ": ", t.type],
                                  },
                                  t.id,
                              ),
                          ),
                      })
                    : null,
            ],
        })
    );
}
