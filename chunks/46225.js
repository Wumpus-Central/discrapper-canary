n.d(t, { RD: () => b, U9: () => C }), n(321073);
var l = n(64700),
    r = n(868714),
    i = n(975807),
    u = n(289919),
    a = n(174459),
    o = n(76843),
    c = n(975460),
    s = n(704824);
let p = Symbol();
var d = n(942370),
    f = n(652215);
let h = "AUTHORIZE_REQUEST",
    _ = [d._M.RPC, d._M.WEB];
function b(e) {
    var t, n;
    let r,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: u = !1 } = i,
        a = (0, c.g)(e),
        o =
            ((t = a),
            (n = i),
            (r = C(
                l.useMemo(() => (null != t ? [t] : []), [t]),
                n,
            )).length > 0
                ? r[0]
                : null),
        p = o?.preferredFlow,
        d = null != p,
        { token: f, fetched: h } = (0, s.U)(a?.parentId ?? a?.id, { disableFetch: i.disableFetch });
    return {
        fetched: h,
        hasAlreadyLinked: h && null != f,
        canStartAuthorization: d,
        startAuthorization: l.useCallback((e) => (null == p ? null : (p.initiate(e), p.type)), [p]),
        connectionApp: a,
        chosenFlow: p?.type ?? null,
        token: f,
        debug: u
            ? {
                  isSubscribedToAuthorizeRequest: o?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: f,
                  hasConnectionEntrypointUrl: a?.connectionEntrypointUrl != null,
                  validFlows: o?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function A(e) {
    return u.A.listenIsSubscribed(e);
}
function C(e, t) {
    var n;
    let c,
        s,
        b = (0, r.A)(t?.allowedFlows ?? _),
        C =
            ((n = l.useCallback(
                () => e.map((e) => ({ application: e, isSubscribedToAuthorizeRequest: u.A.isSubscribed(e.id, h) })),
                [e],
            )),
            (c = l.useRef(p)),
            (s = l.useRef(n)),
            l.useSyncExternalStore(
                l.useCallback(
                    (e) =>
                        A(() => {
                            (c.current = p), e();
                        }),
                    [A],
                ),
                l.useCallback(
                    () => (
                        s.current !== n && ((s.current = n), (c.current = p)),
                        c.current === p && (c.current = n()),
                        c.current
                    ),
                    [n],
                ),
            ));
    return l.useMemo(
        () =>
            C.map((e) => {
                let t = [];
                if (
                    (b.includes(d._M.RPC) &&
                        e.isSubscribedToAuthorizeRequest &&
                        t.push({
                            type: d._M.RPC,
                            initiate(t) {
                                u.A.dispatchToSubscriptions(h, (t) => t.socket.application.id === e.application.id, {}),
                                    t.onConfirm?.(),
                                    a.default.track(f.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                        location_stack: t.analyticsLocations,
                                        application_id: e.application.id,
                                        flow_type: d._M.RPC,
                                    });
                            },
                        }),
                    b.includes(d._M.WEB) && null != e.application.connectionEntrypointUrl)
                ) {
                    let n = e.application.connectionEntrypointUrl;
                    t.push({
                        type: d._M.WEB,
                        initiate(t) {
                            (0, o.h)({
                                href: n,
                                onConfirm: () => {
                                    (0, i.A)(n), t?.onConfirm?.();
                                },
                            }),
                                a.default.track(f.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                    location_stack: t.analyticsLocations,
                                    application_id: e.application.id,
                                    flow_type: d._M.WEB,
                                });
                        },
                    });
                }
                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
            }),
        [C, b],
    );
}
