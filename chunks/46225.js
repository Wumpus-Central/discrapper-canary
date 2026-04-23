"use strict";
n.d(t, { _M: () => m, RD: () => g, U9: () => A }), n(321073);
var i,
    r = n(64700),
    s = n(868714),
    a = n(975807),
    o = n(289919),
    l = n(954571),
    d = n(76843),
    _ = n(975460),
    u = n(704824);
let c = Symbol();
var E = n(652215);
let h = "AUTHORIZE_REQUEST";
var m = (((i = {}).RPC = "rpc"), (i.WEB = "web"), i);
let f = ["rpc", "web"];
function g(e) {
    var t, n;
    let i,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: a = !1 } = s,
        o = (0, _.g)(e),
        l =
            ((t = o),
            (n = s),
            (i = A(
                r.useMemo(() => (null != t ? [t] : []), [t]),
                n,
            )).length > 0
                ? i[0]
                : null),
        d = l?.preferredFlow,
        c = null != d,
        { token: E, fetched: h } = (0, u.U)(o?.parentId ?? o?.id, { disableFetch: s.disableFetch });
    return {
        fetched: h,
        hasAlreadyLinked: h && null != E,
        canStartAuthorization: c,
        startAuthorization: r.useCallback((e) => (null == d ? null : (d.initiate(e), d.type)), [d]),
        connectionApp: o,
        chosenFlow: d?.type ?? null,
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
function p(e) {
    return o.A.listenIsSubscribed(e);
}
function A(e, t) {
    var n;
    let i,
        _,
        u = (0, s.A)(t?.allowedFlows ?? f),
        m =
            ((n = r.useCallback(
                () => e.map((e) => ({ application: e, isSubscribedToAuthorizeRequest: o.A.isSubscribed(e.id, h) })),
                [e],
            )),
            (i = r.useRef(c)),
            (_ = r.useRef(n)),
            r.useSyncExternalStore(
                r.useCallback(
                    (e) =>
                        p(() => {
                            (i.current = c), e();
                        }),
                    [p],
                ),
                r.useCallback(
                    () => (
                        _.current !== n && ((_.current = n), (i.current = c)),
                        i.current === c && (i.current = n()),
                        i.current
                    ),
                    [n],
                ),
            ));
    return r.useMemo(
        () =>
            m.map((e) => {
                let t = [];
                if (
                    (u.includes("rpc") &&
                        e.isSubscribedToAuthorizeRequest &&
                        t.push({
                            type: "rpc",
                            initiate(t) {
                                o.A.dispatchToSubscriptions(h, (t) => t.socket.application.id === e.application.id, {}),
                                    t.onConfirm?.(),
                                    l.default.track(E.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                        location_stack: t.analyticsLocations,
                                        application_id: e.application.id,
                                        flow_type: "rpc",
                                    });
                            },
                        }),
                    u.includes("web") && null != e.application.connectionEntrypointUrl)
                ) {
                    let n = e.application.connectionEntrypointUrl;
                    t.push({
                        type: "web",
                        initiate(t) {
                            (0, d.h)({
                                href: n,
                                onConfirm: () => {
                                    (0, a.A)(n), t?.onConfirm?.();
                                },
                            }),
                                l.default.track(E.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                    location_stack: t.analyticsLocations,
                                    application_id: e.application.id,
                                    flow_type: "web",
                                });
                        },
                    });
                }
                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
            }),
        [m, u],
    );
}
