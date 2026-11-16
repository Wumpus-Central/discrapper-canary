var i = n(855986),
    r = n(620632),
    a = n(637450),
    s = n(73153),
    l = n(340344),
    o = n(375441),
    d = n(652215);
n.d(
    t,
    {},
    {
        fetchInstallationExperiments: async function (e) {
            if (!(null != e && l.A.hasLoaded(e)) && !(l.A.isFetching(o.sz) || l.A.hasLoaded(o.sz))) {
                s.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_START", unitId: o.sz });
                try {
                    let e = await r.Bo.get({
                        url: d.Rsh.APEX_EXPERIMENTS,
                        query: { surface: a.Um.APP },
                        rejectWithError: !1,
                    });
                    if (e?.body != null) {
                        let { installation: t, ...n } = e.body;
                        i.Ay.Emitter.batched(() => {
                            (t && s.h.dispatch({ type: "INSTALLATION_ID", installation: t }),
                                s.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_SUCCESS", unitId: o.sz, experiments: n }));
                        });
                    } else s.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: o.sz });
                } catch (e) {
                    s.h.dispatch({ type: "APEX_EXPERIMENTS_FETCH_FAILURE", unitId: o.sz });
                }
            }
        },
        s: async function (e) {
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
                (s.h.dispatch({ type: "APEX_EXPERIMENTS_METADATA_FETCH_FAILURE" }), console.log(e));
            }
        },
    },
);
