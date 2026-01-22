n.d(t, {
    Tv: () => p,
    sD: () => f,
});
var r = n(311907),
    i = n(562465),
    a = n(949355),
    s = n(73153),
    o = n(217222),
    l = n(375441),
    c = n(652215);
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = d(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
async function f(e) {
    try {
        let t = (
            await i.Bo.get({
                url: c.Rsh.APEX_EXPERIMENTS_METADATA,
                query: { surface: e },
                rejectWithError: !0,
            })
        ).body.experiments.map((e) => ({
            id: e.id,
            name: e.name,
            title: e.title,
            revision: e.revision,
            unitType: e.unit_type,
            variants: e.variants.map((e) => ({
                id: e.id,
                label: e.label,
                type: e.type,
            })),
        }));
        s.h.dispatch({
            type: "APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS",
            experiments: t,
        });
    } catch (e) {
        s.h.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE" }), console.log(e);
    }
}
async function p(e) {
    if (!(null != e && o.A.hasLoaded(e)) && !(o.A.isFetching(l.sz) || o.A.hasLoaded(l.sz))) {
        s.h.dispatch({
            type: "APEX_EXPERIMENTS_FETCH_START",
            unitId: l.sz,
        });
        try {
            let e = await i.Bo.get({
                url: c.Rsh.APEX_EXPERIMENTS,
                query: { surface: a.Um.APP },
                rejectWithError: !1,
            });
            if ((null == e ? void 0 : e.body) != null) {
                let t = e.body,
                    { installation: n } = t,
                    i = u(t, ["installation"]);
                r.Ay.Emitter.batched(() => {
                    n &&
                        s.h.dispatch({
                            type: "INSTALLATION_ID",
                            installation: n,
                        }),
                        s.h.dispatch({
                            type: "APEX_EXPERIMENTS_FETCH_SUCCESS",
                            unitId: l.sz,
                            experiments: i,
                        });
                });
            } else
                s.h.dispatch({
                    type: "APEX_EXPERIMENTS_FETCH_FAILURE",
                    unitId: l.sz,
                });
        } catch (e) {
            s.h.dispatch({
                type: "APEX_EXPERIMENTS_FETCH_FAILURE",
                unitId: l.sz,
            });
        }
    }
}
