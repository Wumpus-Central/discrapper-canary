l.d(t, { CA: () => u, NI: () => o, cR: () => c });
var n = l(110259),
    i = l(933681),
    s = l(228366),
    a = l(499785),
    r = l(431144),
    d = l(652215);
async function c() {
    try {
        let e = await a.A.get({
            url: d.Rsh.EMAIL_SETTINGS,
            trackedActionData: {
                event: n.NetworkActionNames.EMAIL_SETTINGS_FETCH,
                properties: (e) => {
                    let t = e?.body?.initialized;
                    return (0, i.e0)({ initialized: t });
                },
            },
            rejectWithError: !0,
        });
        return s.h.dispatch({ type: "EMAIL_SETTINGS_FETCH_SUCCESS", settings: e.body }), e.body;
    } catch {
        s.h.dispatch({ type: "EMAIL_SETTINGS_FETCH_FAILURE" });
    }
}
async function u(e, t) {
    s.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE", updates: { [e]: t } });
    try {
        let l = await a.A.patch({
            url: d.Rsh.EMAIL_SETTINGS,
            body: { settings: { categories: { [e]: t } } },
            trackedActionData: {
                event: n.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: { category: e, value: t },
            },
            rejectWithError: !0,
        });
        s.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: l.body });
    } catch (e) {
        s.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE" });
    }
}
async function o() {
    let e = r.Zk.reduce((e, t) => ({ ...e, [t]: !1 }), {});
    s.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE", updates: e });
    try {
        let t = await a.A.patch({
            url: d.Rsh.EMAIL_SETTINGS,
            body: { settings: { categories: e } },
            trackedActionData: {
                event: n.NetworkActionNames.EMAIL_SETTINGS_UPDATE,
                properties: { category: "marketing", value: !1 },
            },
            rejectWithError: !0,
        });
        s.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_SUCCESS", settings: t.body });
    } catch (e) {
        s.h.dispatch({ type: "EMAIL_SETTINGS_UPDATE_FAILURE" });
    }
}
