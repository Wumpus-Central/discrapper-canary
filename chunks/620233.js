n.d(t, { Tv: () => c, sD: () => u });
var r = n(17928),
    a = n(636537),
    i = n(785401),
    o = n(228366),
    l = n(710195),
    s = n(375441),
    d = n(652215);
async function u(e) {
    try {
        let t = (
            await a.Bo.get({ url: d.Rsh.APEX_EXPERIMENTS_METADATA, query: { surface: e }, rejectWithError: !0 })
        ).body.experiments.map((e) => ({
            id: e.id,
            name: e.name,
            title: e.title,
            revision: e.revision,
            unitType: e.unit_type,
            variants: e.variants.map((e) => ({ id: e.id, label: e.label, type: e.type })),
        }));
        o.h.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS", experiments: t });
    } catch (e) {
        o.h.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE" }), console.log(e);
    }
}
async function c(e) {
    if (!(null != e && l.A.hasLoaded(e)) && !(l.A.isFetching(s.sz) || l.A.hasLoaded(s.sz))) {
        o.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_START", unitId: s.sz });
        try {
            let e = await a.Bo.get({ url: d.Rsh.APEX_EXPERIMENTS, query: { surface: i.Um.APP }, rejectWithError: !1 });
            if (e?.body != null) {
                let { installation: t, ...n } = e.body;
                r.Ay.Emitter.batched(() => {
                    t && o.h.dispatch({ type: "INSTALLATION_ID", installation: t }),
                        o.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_SUCCESS", unitId: s.sz, experiments: n });
                });
            } else o.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: s.sz });
        } catch (e) {
            o.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: s.sz });
        }
    }
}
