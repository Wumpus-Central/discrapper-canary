o.d(e, { A: () => a });
var t = o(132500),
    n = o(636537),
    s = o(652215);
let a = {
    generateNonce: function () {
        return (0, t.A)();
    },
    createHandoffToken: async function (r) {
        let {
            body: { handoff_token: e },
        } = await n.Bo.post({
            url: s.Rsh.HANDOFF,
            body: { key: r },
            oldFormErrors: !0,
            retries: 1,
            rejectWithError: !1,
        });
        if (null != e) return e;
        throw Error("Missing handoff token!");
    },
};
