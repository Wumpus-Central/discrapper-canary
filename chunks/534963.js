"use strict";
n.d(t, { A: () => r });
var i = n(562465),
    s = n(73153),
    l = n(652215);
let r = {
    fetchRegions(e) {
        i.Bo.get({ url: l.Rsh.REGIONS(e), retries: 1, oldFormErrors: !0, rejectWithError: !0 }).then(
            (t) => s.h.dispatch({ type: "LOAD_REGIONS", regions: t.body, guildId: e }),
            () => s.h.dispatch({ type: "LOAD_REGIONS", regions: [], guildId: e }),
        );
    },
    changeCallRegion(e, t) {
        i.Bo.patch({ url: l.Rsh.CALL(e), body: { region: t }, oldFormErrors: !0, rejectWithError: !0 });
    },
};
