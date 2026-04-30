"use strict";
n.d(t, { Tv: () => d, sD: () => c });
var i = n(17928),
    r = n(636537),
    s = n(785401),
    a = n(228366),
    o = n(710195),
    l = n(375441),
    u = n(652215);
async function c(e) {
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
    if (!(null != e && o.A.hasLoaded(e)) && !(o.A.isFetching(l.sz) || o.A.hasLoaded(l.sz))) {
        a.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_START", unitId: l.sz });
        try {
            let e = await r.Bo.get({ url: u.Rsh.APEX_EXPERIMENTS, query: { surface: s.Um.APP }, rejectWithError: !1 });
            if (e?.body != null) {
                let { installation: t, ...n } = e.body;
                i.Ay.Emitter.batched(() => {
                    t && a.h.dispatch({ type: "INSTALLATION_ID", installation: t }),
                        a.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_SUCCESS", unitId: l.sz, experiments: n });
                });
            } else a.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: l.sz });
        } catch (e) {
            a.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: l.sz });
        }
    }
}
