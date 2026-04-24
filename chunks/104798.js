"use strict";
n.d(t, { A: () => r });
var a = n(132500),
    i = n(636537),
    l = n(652215);
let r = {
    generateNonce: function () {
        return (0, a.A)();
    },
    createHandoffToken: async function (e) {
        let {
            body: { handoff_token: t },
        } = await i.Bo.post({
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
