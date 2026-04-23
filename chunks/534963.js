"use strict";
n.d(t, { A: () => a });
var l = n(636537),
    i = n(228366),
    s = n(652215);
let a = {
    fetchRegions(e) {
        l.Bo.get({ url: s.Rsh.REGIONS(e), retries: 1, oldFormErrors: !0, rejectWithError: !0 }).then(
            (t) => i.h.dispatch({ type: "LOAD_REGIONS", regions: t.body, guildId: e }),
            () => i.h.dispatch({ type: "LOAD_REGIONS", regions: [], guildId: e }),
        );
    },
    changeCallRegion(e, t) {
        l.Bo.patch({ url: s.Rsh.CALL(e), body: { region: t }, oldFormErrors: !0, rejectWithError: !0 });
    },
};
