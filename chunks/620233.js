"use strict";
n.d(t, { Tv: () => u, sD: () => c });
var i = n(17928),
    r = n(636537),
    a = n(785401),
    s = n(228366),
    l = n(710195),
    o = n(375441),
    d = n(652215);
async function c(e) {
    try {
        let t = (
            await r.Bo.get({ url: d.Rsh.APEX_EXPERIMENTS_METADATA, query: { surface: e }, rejectWithError: !0 })
        ).body.experiments.map((e) => ({
            id: e.id,
            name: e.name,
            title: e.title,
            revision: e.revision,
            unitType: e.unit_type,
            variants: e.variants.map((e) => ({ id: e.id, label: e.label, type: e.type })),
        }));
        s.h.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_SUCCESS", experiments: t });
    } catch (e) {
        s.h.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE" }), console.log(e);
    }
}
async function u(e) {
    if (!(null != e && l.A.hasLoaded(e)) && !(l.A.isFetching(o.sz) || l.A.hasLoaded(o.sz))) {
        s.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_START", unitId: o.sz });
        try {
            let e = await r.Bo.get({ url: d.Rsh.APEX_EXPERIMENTS, query: { surface: a.Um.APP }, rejectWithError: !1 });
            if (e?.body != null) {
                let { installation: t, ...n } = e.body;
                i.Ay.Emitter.batched(() => {
                    t && s.h.dispatch({ type: "INSTALLATION_ID", installation: t }),
                        s.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_SUCCESS", unitId: o.sz, experiments: n });
                });
            } else s.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: o.sz });
        } catch (e) {
            s.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: o.sz });
        }
    }
}
