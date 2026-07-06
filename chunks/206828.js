"use strict";
n.d(t, { RD: () => I }), n(321073);
var i = n(64700),
    r = n(52133),
    s = n(958538),
    a = n(17928),
    o = n(975807),
    l = n(95561),
    u = n(289919),
    d = n(123917),
    c = n(878118),
    _ = n(281020),
    h = n(975460),
    f = n(704824);
let E = Symbol();
var p = n(942370),
    m = n(652215);
let g = "AUTHORIZE_REQUEST",
    A = [p._M.RPC, p._M.WEB];
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: n = !1 } = t,
        I = (0, h.g)(e),
        S = (0, a.bG)([c.A], () => c.A.getGloballyDisabledAuthorizationFlows()),
        N = i.useMemo(
            () => ({
                ...t,
                allowedFlows:
                    null != t.allowedFlows ? t.allowedFlows.filter((e) => !S.has(e)) : A.filter((e) => !S.has(e)),
            }),
            [t, S],
        ),
        C = (function (e, t) {
            var n, a, c, h;
            let f,
                I,
                S,
                N,
                C =
                    ((n = i.useMemo(() => (null != e ? [e] : []), [e])),
                    (a = t?.allowedFlows ?? A),
                    (f = (0, s.A)(() => a, a, r.v)),
                    (c = T),
                    (h = i.useCallback(
                        () =>
                            n.map((e) => ({
                                application: e,
                                isSubscribedToAuthorizeRequest: u.A.isSubscribed(e.id, g),
                            })),
                        [n],
                    )),
                    (I = i.useRef(E)),
                    (S = i.useRef(h)),
                    (N = i.useSyncExternalStore(
                        i.useCallback(
                            (e) =>
                                c(() => {
                                    (I.current = E), e();
                                }),
                            [c],
                        ),
                        i.useCallback(
                            () => (
                                S.current !== h && ((S.current = h), (I.current = E)),
                                I.current === E && (I.current = h()),
                                I.current
                            ),
                            [h],
                        ),
                    )),
                    i.useMemo(
                        () =>
                            N.map((e) => {
                                let t = [];
                                if (
                                    (f.includes(p._M.RPC) &&
                                        e.isSubscribedToAuthorizeRequest &&
                                        t.push({
                                            type: p._M.RPC,
                                            initiate(t) {
                                                u.A.dispatchToSubscriptions(
                                                    g,
                                                    (t) => t.socket.application.id === e.application.id,
                                                    {},
                                                ),
                                                    t.onConfirm?.(),
                                                    l.Ay.trackWithMetadata(
                                                        m.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED,
                                                        {
                                                            location_stack: t.analyticsLocations,
                                                            application_id: e.application.id,
                                                            flow_type: p._M.RPC,
                                                        },
                                                    ),
                                                    (0, _.gk)(e.application.id, {
                                                        onSuccess: t.onSuccess,
                                                        onError: t.onError,
                                                    });
                                            },
                                        }),
                                    f.includes(p._M.WEB) && null != e.application.connectionEntrypointUrl)
                                ) {
                                    let n = e.application.connectionEntrypointUrl;
                                    t.push({
                                        type: p._M.WEB,
                                        initiate(t) {
                                            (0, d.h)({
                                                href: n,
                                                onConfirm: () => {
                                                    (0, o.A)(n),
                                                        t?.onConfirm?.(),
                                                        (0, _.gk)(e.application.id, {
                                                            onSuccess: t.onSuccess,
                                                            onError: t.onError,
                                                        });
                                                },
                                            }),
                                                l.Ay.trackWithMetadata(m.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                                    location_stack: t.analyticsLocations,
                                                    application_id: e.application.id,
                                                    flow_type: p._M.WEB,
                                                });
                                        },
                                    });
                                }
                                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
                            }),
                        [N, f],
                    ));
            return C.length > 0 ? C[0] : null;
        })(I, N),
        y = C?.preferredFlow,
        v = null != y,
        { token: R, fetched: O } = (0, f.U)(I?.parentId ?? I?.id, { disableFetch: N.disableFetch });
    return {
        fetched: O,
        hasAlreadyLinked: O && null != R,
        canStartAuthorization: v,
        startAuthorization: i.useCallback((e) => (null == y ? null : (y.initiate(e), y.type)), [y]),
        connectionApp: I,
        chosenFlow: y?.type ?? null,
        token: R,
        debug: n
            ? {
                  isSubscribedToAuthorizeRequest: C?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: R,
                  hasConnectionEntrypointUrl: I?.connectionEntrypointUrl != null,
                  validFlows: C?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function T(e) {
    return u.A.listenIsSubscribed(e);
}
