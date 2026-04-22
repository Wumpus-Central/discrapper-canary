n.d(t, { A: () => l });
var i = n(835245),
    r = n(562465),
    a = n(652215);
let l = {
    generateNonce: function () {
        return (0, i.A)();
    },
    createHandoffToken: async function (e) {
        let {
            body: { handoff_token: t },
        } = await r.Bo.post({
            url: a.Rsh.HANDOFF,
            body: { key: e },
            oldFormErrors: !0,
            retries: 1,
            rejectWithError: !1,
        });
        if (null != t) return t;
        throw Error("Missing handoff token!");
    },
};
