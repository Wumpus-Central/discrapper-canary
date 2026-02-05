n.d(t, { CA: () => d, NI: () => u, cR: () => c });
var i = n(110259),
    s = n(933681),
    r = n(73153),
    a = n(499785),
    l = n(431144),
    o = n(652215);
async function c() {
    try {
        let e = await a.A.get({
            url: o.Rsh.EMAIL_SETTINGS,
            trackedActionData: {
                event: i.NetworkActionNames.EMAIL_SETTINGS_FETCH,
                properties: (e) => {
                    let t = e?.body?.initialized;
                    return (0, s.e0)({ initialized: t });
                },
            },
            rejectWithError: !0,
        });
        return r.h.dispatch({ type: "EMAIL_SETTINGS_FETCH_SUCCESS", settings: e.body }), e.body;
    } catch {
        r.h.dispatch({ type: "EMAIL_SETTINGS_FETCH_FAILURE" });
    }
}
async function d(e, t) {
    r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE", updates: { [e]: t } });
    try {
        let n = await a.A.patch({
            url: o.Rsh.EMAIL_SETTINGS,
            body: { settings: { categories: { [e]: t } } },
            trackedActionData: {
                event: i.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: { category: e, value: t },
            },
            rejectWithError: !0,
        });
        r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: n.body });
    } catch (e) {
        r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE" });
    }
}
async function u() {
    let e = l.Zk.reduce((e, t) => ({ ...e, [t]: !1 }), {});
    r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE", updates: e });
    try {
        let t = await a.A.patch({
            url: o.Rsh.EMAIL_SETTINGS,
            body: { settings: { categories: e } },
            trackedActionData: {
                event: i.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: { category: "marketing", value: !1 },
            },
            rejectWithError: !0,
        });
        r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: t.body });
    } catch (e) {
        r.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE" });
    }
}
