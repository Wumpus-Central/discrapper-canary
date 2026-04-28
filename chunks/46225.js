"use strict";
n.d(t, { RD: () => h, U9: () => b }), n(321073);
var r = n(64700),
    a = n(868714),
    i = n(975807),
    l = n(289919),
    s = n(954571),
    o = n(76843),
    c = n(975460),
    d = n(704824);
let u = Symbol();
var _ = n(942370),
    p = n(652215);
let f = "AUTHORIZE_REQUEST",
    m = [_._.RPC, _._.WEB];
function h(e) {
    var t, n;
    let a,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: l = !1 } = i,
        s = (0, c.g)(e),
        o =
            ((t = s),
            (n = i),
            (a = b(
                r.useMemo(() => (null != t ? [t] : []), [t]),
                n,
            )).length > 0
                ? a[0]
                : null),
        u = o?.preferredFlow,
        _ = null != u,
        { token: p, fetched: f } = (0, d.U)(s?.parentId ?? s?.id, { disableFetch: i.disableFetch });
    return {
        fetched: f,
        hasAlreadyLinked: f && null != p,
        canStartAuthorization: _,
        startAuthorization: r.useCallback((e) => (null == u ? null : (u.initiate(e), u.type)), [u]),
        connectionApp: s,
        chosenFlow: u?.type ?? null,
        token: p,
        debug: l
            ? {
                  isSubscribedToAuthorizeRequest: o?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: p,
                  hasConnectionEntrypointUrl: s?.connectionEntrypointUrl != null,
                  validFlows: o?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function g(e) {
    return l.A.listenIsSubscribed(e);
}
function b(e, t) {
    var n;
    let c,
        d,
        h = (0, a.A)(t?.allowedFlows ?? m),
        b =
            ((n = r.useCallback(
                () => e.map((e) => ({ application: e, isSubscribedToAuthorizeRequest: l.A.isSubscribed(e.id, f) })),
                [e],
            )),
            (c = r.useRef(u)),
            (d = r.useRef(n)),
            r.useSyncExternalStore(
                r.useCallback(
                    (e) =>
                        g(() => {
                            (c.current = u), e();
                        }),
                    [g],
                ),
                r.useCallback(
                    () => (
                        d.current !== n && ((d.current = n), (c.current = u)),
                        c.current === u && (c.current = n()),
                        c.current
                    ),
                    [n],
                ),
            ));
    return r.useMemo(
        () =>
            b.map((e) => {
                let t = [];
                if (
                    (h.includes(_._.RPC) &&
                        e.isSubscribedToAuthorizeRequest &&
                        t.push({
                            type: _._.RPC,
                            initiate(t) {
                                l.A.dispatchToSubscriptions(f, (t) => t.socket.application.id === e.application.id, {}),
                                    t.onConfirm?.(),
                                    s.default.track(p.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                        location_stack: t.analyticsLocations,
                                        application_id: e.application.id,
                                        flow_type: _._.RPC,
                                    });
                            },
                        }),
                    h.includes(_._.WEB) && null != e.application.connectionEntrypointUrl)
                ) {
                    let n = e.application.connectionEntrypointUrl;
                    t.push({
                        type: _._.WEB,
                        initiate(t) {
                            (0, o.h)({
                                href: n,
                                onConfirm: () => {
                                    (0, i.A)(n), t?.onConfirm?.();
                                },
                            }),
                                s.default.track(p.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                    location_stack: t.analyticsLocations,
                                    application_id: e.application.id,
                                    flow_type: _._.WEB,
                                });
                        },
                    });
                }
                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
            }),
        [b, h],
    );
}
