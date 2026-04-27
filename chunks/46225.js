"use strict";
r.d(t, { RD: () => h, U9: () => b }), r(321073);
var n = r(64700),
    i = r(868714),
    a = r(975807),
    s = r(289919),
    l = r(954571),
    o = r(76843),
    c = r(975460),
    d = r(704824);
let u = Symbol();
var _ = r(942370),
    p = r(652215);
let f = "AUTHORIZE_REQUEST",
    m = [_._.RPC, _._.WEB];
function h(e) {
    var t, r;
    let i,
        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { debug: s = !1 } = a,
        l = (0, c.g)(e),
        o =
            ((t = l),
            (r = a),
            (i = b(
                n.useMemo(() => (null != t ? [t] : []), [t]),
                r,
            )).length > 0
                ? i[0]
                : null),
        u = o?.preferredFlow,
        _ = null != u,
        { token: p, fetched: f } = (0, d.U)(l?.parentId ?? l?.id, { disableFetch: a.disableFetch });
    return {
        fetched: f,
        hasAlreadyLinked: f && null != p,
        canStartAuthorization: _,
        startAuthorization: n.useCallback((e) => (null == u ? null : (u.initiate(e), u.type)), [u]),
        connectionApp: l,
        chosenFlow: u?.type ?? null,
        token: p,
        debug: s
            ? {
                  isSubscribedToAuthorizeRequest: o?.context?.isSubscribedToAuthorizeRequest ?? !1,
                  oauth2Token: p,
                  hasConnectionEntrypointUrl: l?.connectionEntrypointUrl != null,
                  validFlows: o?.availableFlows?.map((e) => e.type) ?? [],
              }
            : void 0,
    };
}
function g(e) {
    return s.A.listenIsSubscribed(e);
}
function b(e, t) {
    var r;
    let c,
        d,
        h = (0, i.A)(t?.allowedFlows ?? m),
        b =
            ((r = n.useCallback(
                () => e.map((e) => ({ application: e, isSubscribedToAuthorizeRequest: s.A.isSubscribed(e.id, f) })),
                [e],
            )),
            (c = n.useRef(u)),
            (d = n.useRef(r)),
            n.useSyncExternalStore(
                n.useCallback(
                    (e) =>
                        g(() => {
                            (c.current = u), e();
                        }),
                    [g],
                ),
                n.useCallback(
                    () => (
                        d.current !== r && ((d.current = r), (c.current = u)),
                        c.current === u && (c.current = r()),
                        c.current
                    ),
                    [r],
                ),
            ));
    return n.useMemo(
        () =>
            b.map((e) => {
                let t = [];
                if (
                    (h.includes(_._.RPC) &&
                        e.isSubscribedToAuthorizeRequest &&
                        t.push({
                            type: _._.RPC,
                            initiate(t) {
                                s.A.dispatchToSubscriptions(f, (t) => t.socket.application.id === e.application.id, {}),
                                    t.onConfirm?.(),
                                    l.default.track(p.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
                                        location_stack: t.analyticsLocations,
                                        application_id: e.application.id,
                                        flow_type: _._.RPC,
                                    });
                            },
                        }),
                    h.includes(_._.WEB) && null != e.application.connectionEntrypointUrl)
                ) {
                    let r = e.application.connectionEntrypointUrl;
                    t.push({
                        type: _._.WEB,
                        initiate(t) {
                            (0, o.h)({
                                href: r,
                                onConfirm: () => {
                                    (0, a.A)(r), t?.onConfirm?.();
                                },
                            }),
                                l.default.track(p.HAw.ON_PLATFORM_ACCOUNT_LINK_FLOW_STARTED, {
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
