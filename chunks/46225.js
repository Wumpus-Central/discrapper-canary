n.d(t, { RD: () => A, U9: () => R }), n(321073);
var i = n(64700),
    r = n(868714),
    l = n(975807),
    u = n(289919),
    o = n(174459),
    c = n(76843),
    a = n(975460),
    s = n(704824);
let p = Symbol();
var d = n(942370),
    _ = n(652215);
let b = "AUTHORIZE_REQUEST",
    h = [d._M.RPC, d._M.WEB];
function A(e) {
    var t, n;
    let r,
        l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: u = !1 } = l,
        o = (0, a.g)(e),
        c =
            ((t = o),
            (n = l),
            (r = R(
                i.useMemo(() => (null != t ? [t] : []), [t]),
                n,
            )).length > 0
                ? r[0]
                : null),
        p = c?.preferredFlow,
        d = null != p,
        { token: _, fetched: b } = (0, s.U)(o?.parentId ?? o?.id, { disableFetch: l.disableFetch });
    return {
        fetched: b,
        hasAlreadyLinked: b && null != _,
        canStartAuthorization: d,
        startAuthorization: i.useCallback((e) => (null == p ? null : (p.initiate(e), p.type)), [p]),
        connectionApp: o,
        chosenFlow: p?.type ?? null,
        token: _,
        debug: u
            ? {
                  isSubscribedToAuthorizeRequest: c?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: _,
                  hasConnectionEntrypointUrl: o?.connectionEntrypointUrl != null,
                  validFlows: c?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function f(e) {
    return u.A.listenIsSubscribed(e);
}
function R(e, t) {
    var n;
    let a,
        s,
        A = (0, r.A)(t?.allowedFlows ?? h),
        R =
            ((n = i.useCallback(
                () => e.map((e) => ({ application: e, isSubscribedToAuthorizeRequest: u.A.isSubscribed(e.id, b) })),
                [e],
            )),
            (a = i.useRef(p)),
            (s = i.useRef(n)),
            i.useSyncExternalStore(
                i.useCallback(
                    (e) =>
                        f(() => {
                            (a.current = p), e();
                        }),
                    [f],
                ),
                i.useCallback(
                    () => (
                        s.current !== n && ((s.current = n), (a.current = p)),
                        a.current === p && (a.current = n()),
                        a.current
                    ),
                    [n],
                ),
            ));
    return i.useMemo(
        () =>
            R.map((e) => {
                let t = [];
                if (
                    (A.includes(d._M.RPC) &&
                        e.isSubscribedToAuthorizeRequest &&
                        t.push({
                            type: d._M.RPC,
                            initiate(t) {
                                u.A.dispatchToSubscriptions(b, (t) => t.socket.application.id === e.application.id, {}),
                                    t.onConfirm?.(),
                                    o.default.track(_.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                        location_stack: t.analyticsLocations,
                                        application_id: e.application.id,
                                        flow_type: d._M.RPC,
                                    });
                            },
                        }),
                    A.includes(d._M.WEB) && null != e.application.connectionEntrypointUrl)
                ) {
                    let n = e.application.connectionEntrypointUrl;
                    t.push({
                        type: d._M.WEB,
                        initiate(t) {
                            (0, c.h)({
                                href: n,
                                onConfirm: () => {
                                    (0, l.A)(n), t?.onConfirm?.();
                                },
                            }),
                                o.default.track(_.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                    location_stack: t.analyticsLocations,
                                    application_id: e.application.id,
                                    flow_type: d._M.WEB,
                                });
                        },
                    });
                }
                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
            }),
        [R, A],
    );
}
