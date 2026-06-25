"use strict";
n.d(t, { RD: () => m, U9: () => A }), n(321073);
var i = n(64700),
    r = n(868714),
    s = n(975807),
    a = n(95561),
    o = n(289919),
    l = n(123917),
    u = n(281020),
    c = n(975460),
    d = n(704824);
let _ = Symbol();
var h = n(942370),
    f = n(652215);
let p = "AUTHORIZE_REQUEST",
    E = [h._M.RPC, h._M.WEB];
function m(e) {
    var t, n;
    let r,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: a = !1 } = s,
        o = (0, c.g)(e),
        l =
            ((t = o),
            (n = s),
            (r = A(
                i.useMemo(() => (null != t ? [t] : []), [t]),
                n,
            )).length > 0
                ? r[0]
                : null),
        u = l?.preferredFlow,
        _ = null != u,
        { token: h, fetched: f } = (0, d.U)(o?.parentId ?? o?.id, { disableFetch: s.disableFetch });
    return {
        fetched: f,
        hasAlreadyLinked: f && null != h,
        canStartAuthorization: _,
        startAuthorization: i.useCallback((e) => (null == u ? null : (u.initiate(e), u.type)), [u]),
        connectionApp: o,
        chosenFlow: u?.type ?? null,
        token: h,
        debug: a
            ? {
                  isSubscribedToAuthorizeRequest: l?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: h,
                  hasConnectionEntrypointUrl: o?.connectionEntrypointUrl != null,
                  validFlows: l?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function g(e) {
    return o.A.listenIsSubscribed(e);
}
function A(e, t) {
    var n;
    let c,
        d,
        m = (0, r.A)(t?.allowedFlows ?? E),
        A =
            ((n = i.useCallback(
                () => e.map((e) => ({ application: e, isSubscribedToAuthorizeRequest: o.A.isSubscribed(e.id, p) })),
                [e],
            )),
            (c = i.useRef(_)),
            (d = i.useRef(n)),
            i.useSyncExternalStore(
                i.useCallback(
                    (e) =>
                        g(() => {
                            (c.current = _), e();
                        }),
                    [g],
                ),
                i.useCallback(
                    () => (
                        d.current !== n && ((d.current = n), (c.current = _)),
                        c.current === _ && (c.current = n()),
                        c.current
                    ),
                    [n],
                ),
            ));
    return i.useMemo(
        () =>
            A.map((e) => {
                let t = [];
                if (
                    (m.includes(h._M.RPC) &&
                        e.isSubscribedToAuthorizeRequest &&
                        t.push({
                            type: h._M.RPC,
                            initiate(t) {
                                o.A.dispatchToSubscriptions(p, (t) => t.socket.application.id === e.application.id, {}),
                                    t.onConfirm?.(),
                                    a.Ay.trackWithMetadata(f.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                        location_stack: t.analyticsLocations,
                                        application_id: e.application.id,
                                        flow_type: h._M.RPC,
                                    }),
                                    (0, u.g)(e.application.id, { onSuccess: t.onSuccess, onError: t.onError });
                            },
                        }),
                    m.includes(h._M.WEB) && null != e.application.connectionEntrypointUrl)
                ) {
                    let n = e.application.connectionEntrypointUrl;
                    t.push({
                        type: h._M.WEB,
                        initiate(t) {
                            (0, l.h)({
                                href: n,
                                onConfirm: () => {
                                    (0, s.A)(n),
                                        t?.onConfirm?.(),
                                        (0, u.g)(e.application.id, { onSuccess: t.onSuccess, onError: t.onError });
                                },
                            }),
                                a.Ay.trackWithMetadata(f.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                    location_stack: t.analyticsLocations,
                                    application_id: e.application.id,
                                    flow_type: h._M.WEB,
                                });
                        },
                    });
                }
                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
            }),
        [A, m],
    );
}
