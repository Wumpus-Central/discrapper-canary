n.d(t, { Tv: () => d, sD: () => _ });
var o = n(17928),
    r = n(636537),
    a = n(785401),
    i = n(228366),
    l = n(710195),
    u = n(375441),
    s = n(652215);
async function _(e) {
    try {
        let t = (
            await r.Bo.get({ url: s.Rsh.APEX_EXPERIMENTS_METADATA, query: { surface: e }, rejectWithError: !0 })
        ).body.experiments.map((e) => ({
            id: e.id,
            name: e.name,
            title: e.title,
            revision: e.revision,
            unitType: e.unit_type,
            variants: e.variants.map((e) => ({ id: e.id, label: e.label, type: e.type })),
        }));
        i.h.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS", experiments: t });
    } catch (e) {
        i.h.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE" }), console.log(e);
    }
}
async function d(e) {
    if (!(null != e && l.A.hasLoaded(e)) && !(l.A.isFetching(u.sz) || l.A.hasLoaded(u.sz))) {
        i.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_START", unitId: u.sz });
        try {
            let e = await r.Bo.get({ url: s.Rsh.APEX_EXPERIMENTS, query: { surface: a.Um.APP }, rejectWithError: !1 });
            if (e?.body != null) {
                let { installation: t, ...n } = e.body;
                o.Ay.Emitter.batched(() => {
                    t && i.h.dispatch({ type: "INSTALLATION_ID", installation: t }),
                        i.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_SUCCESS", unitId: u.sz, experiments: n });
                });
            } else i.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: u.sz });
        } catch (e) {
            i.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: u.sz });
        }
    }
}
