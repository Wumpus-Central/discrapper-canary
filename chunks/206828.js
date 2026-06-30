"use strict";
n.d(t, { RD: () => g }), n(321073);
var i = n(64700),
    r = n(52133),
    s = n(958538),
    a = n(975807),
    o = n(95561),
    l = n(289919),
    u = n(123917),
    c = n(281020),
    d = n(975460),
    _ = n(704824);
let h = Symbol();
var f = n(942370),
    p = n(652215);
let E = "AUTHORIZE_REQUEST",
    m = [f._M.RPC, f._M.WEB];
function g(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: n = !1 } = t,
        g = (0, d.g)(e),
        I = (function (e, t) {
            var n, d, _, g;
            let I,
                T,
                S,
                y,
                C =
                    ((n = i.useMemo(() => (null != e ? [e] : []), [e])),
                    (d = t?.allowedFlows ?? m),
                    (I = (0, s.A)(() => d, d, r.v)),
                    (_ = A),
                    (g = i.useCallback(
                        () =>
                            n.map((e) => ({
                                application: e,
                                isSubscribedToAuthorizeRequest: l.A.isSubscribed(e.id, E),
                            })),
                        [n],
                    )),
                    (T = i.useRef(h)),
                    (S = i.useRef(g)),
                    (y = i.useSyncExternalStore(
                        i.useCallback(
                            (e) =>
                                _(() => {
                                    (T.current = h), e();
                                }),
                            [_],
                        ),
                        i.useCallback(
                            () => (
                                S.current !== g && ((S.current = g), (T.current = h)),
                                T.current === h && (T.current = g()),
                                T.current
                            ),
                            [g],
                        ),
                    )),
                    i.useMemo(
                        () =>
                            y.map((e) => {
                                let t = [];
                                if (
                                    (I.includes(f._M.RPC) &&
                                        e.isSubscribedToAuthorizeRequest &&
                                        t.push({
                                            type: f._M.RPC,
                                            initiate(t) {
                                                l.A.dispatchToSubscriptions(
                                                    E,
                                                    (t) => t.socket.application.id === e.application.id,
                                                    {},
                                                ),
                                                    t.onConfirm?.(),
                                                    o.Ay.trackWithMetadata(
                                                        p.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED,
                                                        {
                                                            location_stack: t.analyticsLocations,
                                                            application_id: e.application.id,
                                                            flow_type: f._M.RPC,
                                                        },
                                                    ),
                                                    (0, c.g)(e.application.id, {
                                                        onSuccess: t.onSuccess,
                                                        onError: t.onError,
                                                    });
                                            },
                                        }),
                                    I.includes(f._M.WEB) && null != e.application.connectionEntrypointUrl)
                                ) {
                                    let n = e.application.connectionEntrypointUrl;
                                    t.push({
                                        type: f._M.WEB,
                                        initiate(t) {
                                            (0, u.h)({
                                                href: n,
                                                onConfirm: () => {
                                                    (0, a.A)(n),
                                                        t?.onConfirm?.(),
                                                        (0, c.g)(e.application.id, {
                                                            onSuccess: t.onSuccess,
                                                            onError: t.onError,
                                                        });
                                                },
                                            }),
                                                o.Ay.trackWithMetadata(p.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                                    location_stack: t.analyticsLocations,
                                                    application_id: e.application.id,
                                                    flow_type: f._M.WEB,
                                                });
                                        },
                                    });
                                }
                                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
                            }),
                        [y, I],
                    ));
            return C.length > 0 ? C[0] : null;
        })(g, t),
        T = I?.preferredFlow,
        S = null != T,
        { token: y, fetched: C } = (0, _.U)(g?.parentId ?? g?.id, { disableFetch: t.disableFetch });
    return {
        fetched: C,
        hasAlreadyLinked: C && null != y,
        canStartAuthorization: S,
        startAuthorization: i.useCallback((e) => (null == T ? null : (T.initiate(e), T.type)), [T]),
        connectionApp: g,
        chosenFlow: T?.type ?? null,
        token: y,
        debug: n
            ? {
                  isSubscribedToAuthorizeRequest: I?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: y,
                  hasConnectionEntrypointUrl: g?.connectionEntrypointUrl != null,
                  validFlows: I?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function A(e) {
    return l.A.listenIsSubscribed(e);
}
