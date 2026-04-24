"use strict";
n.d(t, { RD: () => m, U9: () => b }), n(321073);
var r = n(64700),
    i = n(868714),
    a = n(975807),
    l = n(289919),
    s = n(954571),
    o = n(76843),
    c = n(975460),
    u = n(704824);
let d = Symbol();
var _ = n(942370),
    p = n(652215);
let f = "AUTHORIZE_REQUEST",
    h = [_._.RPC, _._.WEB];
function m(e) {
    var t, n;
    let i,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: l = !1 } = a,
        s = (0, c.g)(e),
        o =
            ((t = s),
            (n = a),
            (i = b(
                r.useMemo(() => (null != t ? [t] : []), [t]),
                n,
            )).length > 0
                ? i[0]
                : null),
        d = o?.preferredFlow,
        _ = null != d,
        { token: p, fetched: f } = (0, u.U)(s?.parentId ?? s?.id, { disableFetch: a.disableFetch });
    return {
        fetched: f,
        hasAlreadyLinked: f && null != p,
        canStartAuthorization: _,
        startAuthorization: r.useCallback((e) => (null == d ? null : (d.initiate(e), d.type)), [d]),
        connectionApp: s,
        chosenFlow: d?.type ?? null,
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
        u,
        m = (0, i.A)(t?.allowedFlows ?? h),
        b =
            ((n = r.useCallback(
                () => e.map((e) => ({ application: e, isSubscribedToAuthorizeRequest: l.A.isSubscribed(e.id, f) })),
                [e],
            )),
            (c = r.useRef(d)),
            (u = r.useRef(n)),
            r.useSyncExternalStore(
                r.useCallback(
                    (e) =>
                        g(() => {
                            (c.current = d), e();
                        }),
                    [g],
                ),
                r.useCallback(
                    () => (
                        u.current !== n && ((u.current = n), (c.current = d)),
                        c.current === d && (c.current = n()),
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
                    (m.includes(_._.RPC) &&
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
                    m.includes(_._.WEB) && null != e.application.connectionEntrypointUrl)
                ) {
                    let n = e.application.connectionEntrypointUrl;
                    t.push({
                        type: _._.WEB,
                        initiate(t) {
                            (0, o.h)({
                                href: n,
                                onConfirm: () => {
                                    (0, a.A)(n), t?.onConfirm?.();
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
        [b, m],
    );
}
