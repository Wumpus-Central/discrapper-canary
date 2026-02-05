"use strict";
n.d(t, { A: () => r });
var i = n(835245),
    s = n(562465),
    l = n(652215);
let r = {
    generateNonce: function () {
        return (0, i.A)();
    },
    createHandoffToken: async function (e) {
        let {
            body: { handoff_token: t },
        } = await s.Bo.post({
            url: l.Rsh.HANDOFF,
            body: { key: e },
            oldFormErrors: !0,
            retries: 1,
            rejectWithError: !1,
        });
        if (null != t) return t;
        throw Error("Missing handoff token!");
    },
};
