l.d(e, { A: () => o });
var a = l(636537),
    r = l(451988),
    i = l(228366),
    c = l(733110),
    n = l(652215);
let u = new r.OC(h, {
    predicate: (t) => c.default.getFetchStateForApplication(t) !== c.FetchState.FETCHING,
    onQueued: (t) =>
        i.h.dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST", request: { type: "partial", applicationIds: t } }),
    onCancelled: (t) => i.h.dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST_CANCELLED", applicationIds: t }),
});
async function h(t) {
    await a.Bo.get({
        url: n.Rsh.OAUTH2_TOKENS,
        oldFormErrors: !0,
        rejectWithError: !0,
        query: { application_ids: t },
    }).then(
        (e) =>
            i.h.dispatch({
                type: "USER_AUTHORIZED_APPS_UPDATE",
                isFullFetch: null == t,
                tokens: (function (t, e) {
                    let l = Object.fromEntries(e?.map((t) => [t, null]) ?? []);
                    for (let e of t) l[e.application.id] = e;
                    return l;
                })(e.body, t),
            }),
        () =>
            i.h.dispatch({
                type: "USER_AUTHORIZED_APPS_REQUEST_FAILED",
                request: null == t ? { type: "full" } : { type: "partial", applicationIds: t },
            }),
    );
}
let o = {
    fetch(t) {
        if (c.default.getFetchState() !== c.FetchState.FETCHING)
            if (null != t)
                u.queue(t).catch((t) => {
                    if (!(t instanceof r.bY)) throw t;
                });
            else u.reset(), i.h.dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST", request: { type: "full" } }), h();
    },
    delete(t) {
        a.Bo.del({ url: n.Rsh.OAUTH2_TOKEN(t), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
            this.fetch();
        });
    },
};
