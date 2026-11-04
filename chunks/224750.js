var i = n(620632),
    r = n(257474),
    a = n(652215),
    s = n(792996);
n.d(
    t,
    { yW: () => r.mo },
    {
        Yx: async function (e, t) {
            let n = a.Rsh.APPLICATION_DISCLOSURES(e);
            await i.Bo.post({ url: n, body: { disclosures: t }, rejectWithError: (0, i.fT)() });
        },
        vG: async function (e) {
            let t = a.Rsh.APPLICATION_DISCLOSURES(e),
                n = await i.Bo.get({ url: t, retries: 3, rejectWithError: (0, i.fT)() }),
                r = n.body.disclosures;
            return { disclosures: r, ackedDisclosures: n.body.acked_disclosures, allAcked: n.body.all_acked };
        },
        wI: function (e) {
            switch (e) {
                case r.mo.IP_LOCATION:
                    return s.intl.string(s.t["6wPmjo"]);
                case r.mo.DISPLAYS_ADVERTISEMENTS:
                    return s.intl.string(s.t["/uOMKZ"]);
                default:
                    return null;
            }
        },
    },
);
