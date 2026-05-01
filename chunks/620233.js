n.d(t, { Tv: () => d, sD: () => _ });
var o = n(17928),
    r = n(636537),
    i = n(785401),
    a = n(228366),
    l = n(710195),
    s = n(375441),
    u = n(652215);
async function _(e) {
    try {
        let t = (
            await r.Bo.get({ url: u.Rsh.APEX_EXPERIMENTS_METADATA, query: { surface: e }, rejectWithError: !0 })
        ).body.experiments.map((e) => ({
            id: e.id,
            name: e.name,
            title: e.title,
            revision: e.revision,
            unitType: e.unit_type,
            variants: e.variants.map((e) => ({ id: e.id, label: e.label, type: e.type })),
        }));
        a.h.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS", experiments: t });
    } catch (e) {
        a.h.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE" }), console.log(e);
    }
}
async function d(e) {
    if (!(null != e && l.A.hasLoaded(e)) && !(l.A.isFetching(s.sz) || l.A.hasLoaded(s.sz))) {
        a.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_START", unitId: s.sz });
        try {
            let e = await r.Bo.get({ url: u.Rsh.APEX_EXPERIMENTS, query: { surface: i.Um.APP }, rejectWithError: !1 });
            if (e?.body != null) {
                let { installation: t, ...n } = e.body;
                o.Ay.Emitter.batched(() => {
                    t && a.h.dispatch({ type: "INSTALLATION_ID", installation: t }),
                        a.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_SUCCESS", unitId: s.sz, experiments: n });
                });
            } else a.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: s.sz });
        } catch (e) {
            a.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: s.sz });
        }
    }
}
