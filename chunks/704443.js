a.r(t), a.d(t, { default: () => P });
var r = a(477900),
    s = a(582128),
    c = a(17928),
    i = a(834730),
    l = a(289873),
    n = a(689175),
    u = a(562708),
    d = a(228366),
    h = a(499785),
    f = a(158390),
    o = a(927813);
let E = o.A.Millis.SECOND,
    _ = o.A.Millis.MINUTE,
    S = {};
class A extends c.Ay.Store {
    static displayName = "GuildSpaceStore";
    getSpace(e) {
        return S[e]?.space;
    }
    getFetchStatus(e) {
        return S[e]?.fetchStatus ?? "idle";
    }
    isInBackoff(e) {
        return S[e]?.backoff?.pending === !0;
    }
}
let I = new A(d.h, {
    GUILD_SPACE_FETCH_START: function (e) {
        let t,
            { guildId: a, requestId: r } = e,
            s = (null == (t = S[a]) && ((t = { fetchStatus: "idle" }), (S[a] = t)), t);
        (s.fetchStatus = "loading"), (s.activeFetchRequestId = r);
    },
    GUILD_SPACE_FETCH_SUCCESS: function (e) {
        let { guildId: t, requestId: a, space: r } = e,
            s = S[t];
        if (s?.activeFetchRequestId !== a) return !1;
        delete s.activeFetchRequestId, (s.space = r), (s.fetchStatus = "success"), s.backoff?.succeed();
    },
    GUILD_SPACE_FETCH_FAILURE: function (e) {
        let { guildId: t, requestId: a, retryable: r } = e,
            s = S[t];
        if (s?.activeFetchRequestId !== a) return !1;
        delete s.activeFetchRequestId,
            (s.fetchStatus = "error"),
            r &&
                (null == s.backoff && (s.backoff = new f.A(E, _, !0)),
                s.backoff.pending ||
                    s.backoff.fail(() => d.h.dispatch({ type: "GUILD_SPACE_FETCH_BACKOFF_EXPIRED", guildId: t })));
    },
    GUILD_SPACE_FETCH_BACKOFF_EXPIRED: function (e) {
        let { guildId: t } = e,
            a = S[t];
        if (a?.fetchStatus !== "error") return !1;
        a.backoff?.cancel(), (a.fetchStatus = "idle");
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t, unavailable: a },
        } = e;
        if (a) return !1;
        S[t]?.backoff?.cancel(), delete S[t];
    },
    LOGOUT: function () {
        Object.values(S).forEach((e) => e?.backoff?.cancel()), (S = {});
    },
});
var C = a(562465);
function g(e) {
    return !(e instanceof C.oh) || e.status < 400 || e.status >= 500 || 429 === e.status;
}
var p = a(652215);
let y = 0;
async function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        a = I.getFetchStatus(e),
        r = t && "error" === a && !I.isInBackoff(e);
    if ("idle" !== a && !r) return;
    let s = y++;
    d.h.dispatch({ type: "GUILD_SPACE_FETCH_START", guildId: e, requestId: s });
    try {
        let { body: t } = await h.A.get({
            url: p.Rsh.GUILD_SPACE(e),
            trackedActionData: { event: u.NetworkActionNames.GUILD_SPACE_FETCH },
            rejectWithError: !0,
        });
        d.h.dispatch({ type: "GUILD_SPACE_FETCH_SUCCESS", guildId: e, requestId: s, space: t });
    } catch (t) {
        d.h.dispatch({ type: "GUILD_SPACE_FETCH_FAILURE", guildId: e, requestId: s, retryable: g(t) });
    }
}
var R = a(363957);
let T = 0;
async function F(e, t) {
    let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    a && d.h.dispatch({ type: "GUILD_SPACE_HYDRATE_RESET_ERRORS", guildId: e, widgetIds: t });
    let r = R.A.getWidgetIdsToHydrate(e, t);
    if (0 === r.length) return;
    let s = T++;
    d.h.dispatch({ type: "GUILD_SPACE_HYDRATE_START", guildId: e, requestId: s, widgetIds: r });
    try {
        let { body: t } = await C.Bo.get({
            url: p.Rsh.GUILD_SPACE_WIDGETS_HYDRATE(e),
            query: { widget_ids: r },
            rejectWithError: !0,
        });
        d.h.dispatch({ type: "GUILD_SPACE_HYDRATE_SUCCESS", guildId: e, requestId: s, widgets: t.widgets });
    } catch (t) {
        d.h.dispatch({ type: "GUILD_SPACE_HYDRATE_FAILURE", guildId: e, requestId: s, retryable: g(t) });
    }
}
var v = a(529609),
    G = a(297264),
    U = a(548118),
    L = a(71393),
    x = a(486020),
    b = a(555063);
function m(e) {
    let { guildId: t, header: a } = e,
        i = (0, c.bG)([L.A], () => L.A.getGuild(t), [t]),
        l = a.custom_banner_hash ?? i?.banner,
        n = s.useMemo(() => (null == i ? null : x.Ay.getGuildBannerURL({ id: i.id, banner: l })), [i, l]);
    return null == i
        ? null
        : (0, r.jsxs)("div", {
              className: b.wx,
              children: [
                  null != n ? (0, r.jsx)("img", { className: b.vK, src: n, alt: "" }) : null,
                  (0, r.jsxs)("div", {
                      className: b.D_,
                      children: [
                          (0, r.jsx)(U.Ay, {
                              className: b.Kk,
                              guild: i,
                              size: U.Ay.Sizes.XLARGE,
                              active: !0,
                              "aria-hidden": !0,
                          }),
                          (0, r.jsx)(G.D, { variant: "heading-xxl/bold", color: "text-strong", children: i.name }),
                      ],
                  }),
              ],
          });
}
var k = a(375708),
    N = a(278093);
function P(e) {
    let { guildId: t } = e,
        a = s.useRef(null),
        [u, d, h] = (0, c.yK)([I], () => [I.getSpace(t), I.getFetchStatus(t), I.isInBackoff(t)], [t]);
    s.useEffect(() => {
        let e = a.current !== t;
        (a.current = t), D(t, e);
    }, [d, t]);
    let f = s.useMemo(
            () =>
                (u?.widgets ?? [])
                    .filter((e) => {
                        let { requires_hydration: t } = e;
                        return t;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
            [u],
        ),
        o = (0, c.yK)([R.A], () => R.A.getWidgetIdsToHydrate(t, f), [t, f]),
        E = s.useRef(null);
    return (s.useEffect(() => {
        if (E.current !== t && null != u) {
            (E.current = t), F(t, f, !0);
            return;
        }
        F(t, o);
    }, [t, u, f, o]),
    null == u)
        ? (0, r.jsx)("div", {
              className: N.MY,
              children: (0, r.jsx)("div", {
                  className: N.F,
                  children:
                      "error" !== d || h
                          ? (0, r.jsx)(l.y, { type: l.y.Type.SPINNING_CIRCLE, "aria-label": k.intl.string(k.t.ZTNur7) })
                          : (0, r.jsx)(i.E, {
                                variant: "text-md/normal",
                                color: "text-muted",
                                role: "alert",
                                children: k.intl.string(k.t.F8FvUy),
                            }),
              }),
          })
        : (0, r.jsx)("div", {
              className: N.MY,
              children: (0, r.jsx)(n.Gt, {
                  className: N.XG,
                  children: (0, r.jsxs)("div", {
                      className: N.Qs,
                      children: [
                          (0, r.jsx)(m, { guildId: t, header: u.header }),
                          (0, r.jsx)(v.A, { guildId: t, widgets: u.widgets }),
                      ],
                  }),
              }),
          });
}
