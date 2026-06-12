n.d(t, { RD: () => h, U9: () => I }), n(321073);
var l = n(64700),
    a = n(868714),
    i = n(975807),
    r = n(289919),
    o = n(174459),
    u = n(123917),
    c = n(975460),
    s = n(704824);
let d = Symbol();
var p = n(942370),
    A = n(652215);
let f = "AUTHORIZE_REQUEST",
    E = [p._M.RPC, p._M.WEB];
function h(e) {
    var t, n;
    let a,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: r = !1 } = i,
        o = (0, c.g)(e),
        u =
            ((t = o),
            (n = i),
            (a = I(
                l.useMemo(() => (null != t ? [t] : []), [t]),
                n,
            )).length > 0
                ? a[0]
                : null),
        d = u?.preferredFlow,
        p = null != d,
        { token: A, fetched: f } = (0, s.U)(o?.parentId ?? o?.id, { disableFetch: i.disableFetch });
    return {
        fetched: f,
        hasAlreadyLinked: f && null != A,
        canStartAuthorization: p,
        startAuthorization: l.useCallback((e) => (null == d ? null : (d.initiate(e), d.type)), [d]),
        connectionApp: o,
        chosenFlow: d?.type ?? null,
        token: A,
        debug: r
            ? {
                  isSubscribedToAuthorizeRequest: u?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: A,
                  hasConnectionEntrypointUrl: o?.connectionEntrypointUrl != null,
                  validFlows: u?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function R(e) {
    return r.A.listenIsSubscribed(e);
}
function I(e, t) {
    var n;
    let c,
        s,
        h = (0, a.A)(t?.allowedFlows ?? E),
        I =
            ((n = l.useCallback(
                () => e.map((e) => ({ application: e, isSubscribedToAuthorizeRequest: r.A.isSubscribed(e.id, f) })),
                [e],
            )),
            (c = l.useRef(d)),
            (s = l.useRef(n)),
            l.useSyncExternalStore(
                l.useCallback(
                    (e) =>
                        R(() => {
                            (c.current = d), e();
                        }),
                    [R],
                ),
                l.useCallback(
                    () => (
                        s.current !== n && ((s.current = n), (c.current = d)),
                        c.current === d && (c.current = n()),
                        c.current
                    ),
                    [n],
                ),
            ));
    return l.useMemo(
        () =>
            I.map((e) => {
                let t = [];
                if (
                    (h.includes(p._M.RPC) &&
                        e.isSubscribedToAuthorizeRequest &&
                        t.push({
                            type: p._M.RPC,
                            initiate(t) {
                                r.A.dispatchToSubscriptions(f, (t) => t.socket.application.id === e.application.id, {}),
                                    t.onConfirm?.(),
                                    o.default.track(A.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                        location_stack: t.analyticsLocations,
                                        application_id: e.application.id,
                                        flow_type: p._M.RPC,
                                    });
                            },
                        }),
                    h.includes(p._M.WEB) && null != e.application.connectionEntrypointUrl)
                ) {
                    let n = e.application.connectionEntrypointUrl;
                    t.push({
                        type: p._M.WEB,
                        initiate(t) {
                            (0, u.h)({
                                href: n,
                                onConfirm: () => {
                                    (0, i.A)(n), t?.onConfirm?.();
                                },
                            }),
                                o.default.track(A.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                    location_stack: t.analyticsLocations,
                                    application_id: e.application.id,
                                    flow_type: p._M.WEB,
                                });
                        },
                    });
                }
                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
            }),
        [I, h],
    );
}
