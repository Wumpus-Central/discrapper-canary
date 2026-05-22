"use strict";
n.d(t, { RD: () => E, U9: () => g }), n(321073);
var i = n(64700),
    r = n(868714),
    s = n(975807),
    a = n(289919),
    o = n(174459),
    l = n(123917),
    u = n(975460),
    c = n(704824);
let d = Symbol();
var _ = n(942370),
    f = n(652215);
let h = "AUTHORIZE_REQUEST",
    p = [_._M.RPC, _._M.WEB];
function E(e) {
    var t, n;
    let r,
        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: a = !1 } = s,
        o = (0, u.g)(e),
        l =
            ((t = o),
            (n = s),
            (r = g(
                i.useMemo(() => (null != t ? [t] : []), [t]),
                n,
            )).length > 0
                ? r[0]
                : null),
        d = l?.preferredFlow,
        _ = null != d,
        { token: f, fetched: h } = (0, c.U)(o?.parentId ?? o?.id, { disableFetch: s.disableFetch });
    return {
        fetched: h,
        hasAlreadyLinked: h && null != f,
        canStartAuthorization: _,
        startAuthorization: i.useCallback((e) => (null == d ? null : (d.initiate(e), d.type)), [d]),
        connectionApp: o,
        chosenFlow: d?.type ?? null,
        token: f,
        debug: a
            ? {
                  isSubscribedToAuthorizeRequest: l?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: f,
                  hasConnectionEntrypointUrl: o?.connectionEntrypointUrl != null,
                  validFlows: l?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function m(e) {
    return a.A.listenIsSubscribed(e);
}
function g(e, t) {
    var n;
    let u,
        c,
        E = (0, r.A)(t?.allowedFlows ?? p),
        g =
            ((n = i.useCallback(
                () => e.map((e) => ({ application: e, isSubscribedToAuthorizeRequest: a.A.isSubscribed(e.id, h) })),
                [e],
            )),
            (u = i.useRef(d)),
            (c = i.useRef(n)),
            i.useSyncExternalStore(
                i.useCallback(
                    (e) =>
                        m(() => {
                            (u.current = d), e();
                        }),
                    [m],
                ),
                i.useCallback(
                    () => (
                        c.current !== n && ((c.current = n), (u.current = d)),
                        u.current === d && (u.current = n()),
                        u.current
                    ),
                    [n],
                ),
            ));
    return i.useMemo(
        () =>
            g.map((e) => {
                let t = [];
                if (
                    (E.includes(_._M.RPC) &&
                        e.isSubscribedToAuthorizeRequest &&
                        t.push({
                            type: _._M.RPC,
                            initiate(t) {
                                a.A.dispatchToSubscriptions(h, (t) => t.socket.application.id === e.application.id, {}),
                                    t.onConfirm?.(),
                                    o.default.track(f.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                        location_stack: t.analyticsLocations,
                                        application_id: e.application.id,
                                        flow_type: _._M.RPC,
                                    });
                            },
                        }),
                    E.includes(_._M.WEB) && null != e.application.connectionEntrypointUrl)
                ) {
                    let n = e.application.connectionEntrypointUrl;
                    t.push({
                        type: _._M.WEB,
                        initiate(t) {
                            (0, l.h)({
                                href: n,
                                onConfirm: () => {
                                    (0, s.A)(n), t?.onConfirm?.();
                                },
                            }),
                                o.default.track(f.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                    location_stack: t.analyticsLocations,
                                    application_id: e.application.id,
                                    flow_type: _._M.WEB,
                                });
                        },
                    });
                }
                return { context: e, availableFlows: t, preferredFlow: t.length > 0 ? t[0] : null };
            }),
        [g, E],
    );
}
