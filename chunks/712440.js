r.d(e, { A: () => s });
var l = r(636537),
    a = r(451988),
    i = r(228366),
    c = r(733110),
    h = r(652215);
let p = new a.OC(E, {
    predicate: (t) => c.default.getFetchStateForApplication(t) !== c.FetchState.FETCHING,
    onQueued: (t) =>
        i.h.dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST", request: { type: "partial", applicationIds: t } }),
    onCancelled: (t) => i.h.dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST_CANCELLED", applicationIds: t }),
});
async function E(t) {
    await l.Bo.get({
        url: h.Rsh.OAUTH2_TOKENS,
        oldFormErrors: !0,
        rejectWithError: !0,
        query: { application_ids: t },
    }).then(
        (e) =>
            i.h.dispatch({
                type: "USER_AUTHORIZED_APPS_UPDATE",
                isFullFetch: null == t,
                tokens: (function (t, e) {
                    let r = Object.fromEntries(e?.map((t) => [t, null]) ?? []);
                    for (let e of t) r[e.application.id] = e;
                    return r;
                })(e.body, t),
            }),
        () =>
            i.h.dispatch({
                type: "USER_AUTHORIZED_APPS_REQUEST_FAILED",
                request: null == t ? { type: "full" } : { type: "partial", applicationIds: t },
            }),
    );
}
let s = {
    fetch(t) {
        if (c.default.getFetchState() !== c.FetchState.FETCHING)
            if (null != t)
                p.queue(t).catch((t) => {
                    if (!(t instanceof a.bY)) throw t;
                });
            else p.reset(), i.h.dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST", request: { type: "full" } }), E();
    },
    delete(t) {
        l.Bo.del({ url: h.Rsh.OAUTH2_TOKEN(t), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
            this.fetch();
        });
    },
};
