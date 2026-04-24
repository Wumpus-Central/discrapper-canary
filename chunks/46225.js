a.d(t, { RD: () => b, U9: () => g }), a(321073);
var n = a(64700),
    r = a(868714),
    l = a(975807),
    i = a(289919),
    s = a(954571),
    o = a(76843),
    c = a(975460),
    d = a(704824);
let u = Symbol();
var h = a(942370),
    p = a(652215);
let m = "AUTHORIZE_REQUEST",
    f = [h._.RPC, h._.WEB];
function b(e) {
    var t, a;
    let r,
        l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: i = !1 } = l,
        s = (0, c.g)(e),
        o =
            ((t = s),
            (a = l),
            (r = g(
                n.useMemo(() => (null != t ? [t] : []), [t]),
                a,
            )).length > 0
                ? r[0]
                : null),
        u = o?.preferredFlow,
        h = null != u,
        { token: p, fetched: m } = (0, d.U)(s?.parentId ?? s?.id, { disableFetch: l.disableFetch });
    return {
        fetched: m,
        hasAlreadyLinked: m && null != p,
        canStartAuthorization: h,
        startAuthorization: n.useCallback((e) => (null == u ? null : (u.initiate(e), u.type)), [u]),
        connectionApp: s,
        chosenFlow: u?.type ?? null,
        token: p,
        debug: i
            ? {
                  isSubscribedToAuthorizeRequest: o?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: p,
                  hasConnectionEntrypointUrl: s?.connectionEntrypointUrl != null,
                  validFlows: o?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function _(e) {
    return i.A.listenIsSubscribed(e);
}
function g(e, t) {
    var a;
    let c,
        d,
        b = (0, r.A)(t?.allowedFlows ?? f),
        g =
            ((a = n.useCallback(
                () => e.map((e) => ({ application: e, isSubscribedToAuthorizeRequest: i.A.isSubscribed(e.id, m) })),
                [e],
            )),
            (c = n.useRef(u)),
            (d = n.useRef(a)),
            n.useSyncExternalStore(
                n.useCallback(
                    (e) =>
                        _(() => {
                            (c.current = u), e();
                        }),
                    [_],
                ),
                n.useCallback(
                    () => (
                        d.current !== a && ((d.current = a), (c.current = u)),
                        c.current === u && (c.current = a()),
                        c.current
                    ),
                    [a],
                ),
            ));
    return n.useMemo(
        () =>
            g.map((e) => {
                let t = [];
                if (
                    (b.includes(h._.RPC) &&
                        e.isSubscribedToAuthorizeRequest &&
                        t.push({
                            type: h._.RPC,
                            initiate(t) {
                                i.A.dispatchToSubscriptions(m, (t) => t.socket.application.id === e.application.id, {}),
                                    t.onConfirm?.(),
                                    s.default.track(p.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                        location_stack: t.analyticsLocations,
                                        application_id: e.application.id,
                                        flow_type: h._.RPC,
                                    });
                            },
                        }),
                    b.includes(h._.WEB) && null != e.application.connectionEntrypointUrl)
                ) {
                    let a = e.application.connectionEntrypointUrl;
                    t.push({
                        type: h._.WEB,
                        initiate(t) {
                            (0, o.h)({
                                href: a,
                                onConfirm: () => {
                                    (0, l.A)(a), t?.onConfirm?.();
                                },
                            }),
                                s.default.track(p.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                    location_stack: t.analyticsLocations,
                                    application_id: e.application.id,
                                    flow_type: h._.WEB,
                                });
                        },
                    });
                }
                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
            }),
        [g, b],
    );
}
