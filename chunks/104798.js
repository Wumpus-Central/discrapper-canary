var n = e(115560),
    t = e(620632),
    s = e(652215);
e.d(
    o,
    {},
    {
        A: {
            generateNonce: function () {
                return (0, n.A)();
            },
            createHandoffToken: async function (r) {
                let {
                    body: { handoff_token: o },
                } = await t.Bo.post({
                    url: s.Rsh.HANDOFF,
                    body: { key: r },
                    oldFormErrors: !0,
                    retries: 1,
                    rejectWithError: !1,
                });
                if (null != o) return o;
                throw Error("Missing handoff token!");
            },
        },
    },
);
