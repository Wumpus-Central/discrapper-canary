"use strict";
n.d(t, { RD: () => f, U9: () => p }), n(321073);
var i = n(64700),
    r = n(868714),
    s = n(975807),
    a = n(289919),
    o = n(954571),
    l = n(76843),
    d = n(975460),
    _ = n(704824);
let u = Symbol();
var c = n(942370),
    E = n(652215);
let h = "AUTHORIZE_REQUEST",
    m = [c._.RPC, c._.WEB];
function f(e) {
    var t, n;
    let r,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: a = !1 } = s,
        o = (0, d.g)(e),
        l =
            ((t = o),
            (n = s),
            (r = p(
                i.useMemo(() => (null != t ? [t] : []), [t]),
                n,
            )).length > 0
                ? r[0]
                : null),
        u = l?.preferredFlow,
        c = null != u,
        { token: E, fetched: h } = (0, _.U)(o?.parentId ?? o?.id, { disableFetch: s.disableFetch });
    return {
        fetched: h,
        hasAlreadyLinked: h && null != E,
        canStartAuthorization: c,
        startAuthorization: i.useCallback((e) => (null == u ? null : (u.initiate(e), u.type)), [u]),
        connectionApp: o,
        chosenFlow: u?.type ?? null,
        token: E,
        debug: a
            ? {
                  isSubscribedToAuthorizeRequest: l?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: E,
                  hasConnectionEntrypointUrl: o?.connectionEntrypointUrl != null,
                  validFlows: l?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function g(e) {
    return a.A.listenIsSubscribed(e);
}
function p(e, t) {
    var n;
    let d,
        _,
        f = (0, r.A)(t?.allowedFlows ?? m),
        p =
            ((n = i.useCallback(
                () => e.map((e) => ({ application: e, isSubscribedToAuthorizeRequest: a.A.isSubscribed(e.id, h) })),
                [e],
            )),
            (d = i.useRef(u)),
            (_ = i.useRef(n)),
            i.useSyncExternalStore(
                i.useCallback(
                    (e) =>
                        g(() => {
                            (d.current = u), e();
                        }),
                    [g],
                ),
                i.useCallback(
                    () => (
                        _.current !== n && ((_.current = n), (d.current = u)),
                        d.current === u && (d.current = n()),
                        d.current
                    ),
                    [n],
                ),
            ));
    return i.useMemo(
        () =>
            p.map((e) => {
                let t = [];
                if (
                    (f.includes(c._.RPC) &&
                        e.isSubscribedToAuthorizeRequest &&
                        t.push({
                            type: c._.RPC,
                            initiate(t) {
                                a.A.dispatchToSubscriptions(h, (t) => t.socket.application.id === e.application.id, {}),
                                    t.onConfirm?.(),
                                    o.default.track(E.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                        location_stack: t.analyticsLocations,
                                        application_id: e.application.id,
                                        flow_type: c._.RPC,
                                    });
                            },
                        }),
                    f.includes(c._.WEB) && null != e.application.connectionEntrypointUrl)
                ) {
                    let n = e.application.connectionEntrypointUrl;
                    t.push({
                        type: c._.WEB,
                        initiate(t) {
                            (0, l.h)({
                                href: n,
                                onConfirm: () => {
                                    (0, s.A)(n), t?.onConfirm?.();
                                },
                            }),
                                o.default.track(E.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                    location_stack: t.analyticsLocations,
                                    application_id: e.application.id,
                                    flow_type: c._.WEB,
                                });
                        },
                    });
                }
                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
            }),
        [p, f],
    );
}
