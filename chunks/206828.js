"use strict";
n.d(t, { RD: () => m }), n(321073);
var i = n(64700),
    r = n(52133),
    a = n(958538),
    s = n(17928),
    l = n(975807),
    o = n(95561),
    d = n(289919),
    c = n(123917),
    u = n(878118),
    _ = n(281020),
    E = n(975460),
    A = n(704824);
let h = Symbol();
var I = n(942370),
    f = n(652215);
let p = "AUTHORIZE_REQUEST",
    T = [I._M.RPC, I._M.WEB];
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: n = !1 } = t,
        m = (0, E.g)(e),
        S = (0, s.bG)([u.A], () => u.A.getGloballyDisabledAuthorizationFlows()),
        N = i.useMemo(
            () => ({
                ...t,
                allowedFlows:
                    null != t.allowedFlows ? t.allowedFlows.filter((e) => !S.has(e)) : T.filter((e) => !S.has(e)),
            }),
            [t, S],
        ),
        C = (function (e, t) {
            var n, s, u, E;
            let A,
                m,
                S,
                N,
                C =
                    ((n = i.useMemo(() => (null != e ? [e] : []), [e])),
                    (s = t?.allowedFlows ?? T),
                    (A = (0, a.A)(() => s, s, r.v)),
                    (u = g),
                    (E = i.useCallback(
                        () =>
                            n.map((e) => ({
                                application: e,
                                isSubscribedToAuthorizeRequest: d.A.isSubscribed(e.id, p),
                            })),
                        [n],
                    )),
                    (m = i.useRef(h)),
                    (S = i.useRef(E)),
                    (N = i.useSyncExternalStore(
                        i.useCallback(
                            (e) =>
                                u(() => {
                                    (m.current = h), e();
                                }),
                            [u],
                        ),
                        i.useCallback(
                            () => (
                                S.current !== E && ((S.current = E), (m.current = h)),
                                m.current === h && (m.current = E()),
                                m.current
                            ),
                            [E],
                        ),
                    )),
                    i.useMemo(
                        () =>
                            N.map((e) => {
                                let t = [];
                                if (
                                    (A.includes(I._M.RPC) &&
                                        e.isSubscribedToAuthorizeRequest &&
                                        t.push({
                                            type: I._M.RPC,
                                            initiate(t) {
                                                d.A.dispatchToSubscriptions(
                                                    p,
                                                    (t) => t.socket.application.id === e.application.id,
                                                    {},
                                                ),
                                                    t.onConfirm?.(),
                                                    o.Ay.trackWithMetadata(
                                                        f.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED,
                                                        {
                                                            location_stack: t.analyticsLocations,
                                                            application_id: e.application.id,
                                                            flow_type: I._M.RPC,
                                                        },
                                                    ),
                                                    (0, _.gk)(e.application.id, {
                                                        onSuccess: t.onSuccess,
                                                        onError: t.onError,
                                                    });
                                            },
                                        }),
                                    A.includes(I._M.WEB) && null != e.application.connectionEntrypointUrl)
                                ) {
                                    let n = e.application.connectionEntrypointUrl;
                                    t.push({
                                        type: I._M.WEB,
                                        initiate(t) {
                                            (0, c.h)({
                                                href: n,
                                                onConfirm: () => {
                                                    (0, l.A)(n),
                                                        t?.onConfirm?.(),
                                                        (0, _.gk)(e.application.id, {
                                                            onSuccess: t.onSuccess,
                                                            onError: t.onError,
                                                        });
                                                },
                                            }),
                                                o.Ay.trackWithMetadata(f.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                                    location_stack: t.analyticsLocations,
                                                    application_id: e.application.id,
                                                    flow_type: I._M.WEB,
                                                });
                                        },
                                    });
                                }
                                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
                            }),
                        [N, A],
                    ));
            return C.length > 0 ? C[0] : null;
        })(m, N),
        R = C?.preferredFlow,
        O = null != R,
        { token: L, fetched: y } = (0, A.U)(m?.parentId ?? m?.id, { disableFetch: N.disableFetch });
    return {
        fetched: y,
        hasAlreadyLinked: y && null != L,
        canStartAuthorization: O,
        startAuthorization: i.useCallback((e) => (null == R ? null : (R.initiate(e), R.type)), [R]),
        connectionApp: m,
        chosenFlow: R?.type ?? null,
        token: L,
        debug: n
            ? {
                  isSubscribedToAuthorizeRequest: C?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: L,
                  hasConnectionEntrypointUrl: m?.connectionEntrypointUrl != null,
                  validFlows: C?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function g(e) {
    return d.A.listenIsSubscribed(e);
}
