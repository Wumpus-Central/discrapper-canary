var n = s(620632);
s.d(
    t,
    {},
    {
        s: async function (e, t) {
            let { token: s } = await (async function (e) {
                let { ticket: t, mfaType: s, data: l } = e,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                try {
                    return (
                        await n.Bo.post({
                            url: "/mfa/finish",
                            body: { ticket: t, mfa_type: s, data: l },
                            retries: i,
                            rejectWithError: !1,
                        })
                    ).body;
                } catch (e) {
                    if (e.body?.message) throw Error(e.body.message);
                    throw e;
                }
            })(e);
            return new Promise((e, n) => {
                t({ "X-Discord-MFA-Authorization": s }, (t) =>
                    t.body?.code === 60008 || t.body?.code === 60003 ? (n(Error(t.body.message)), !0) : (e(), !1),
                );
            });
        },
    },
);
