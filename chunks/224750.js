n.d(t, {
    Yx: () => l,
    vG: () => o,
    wI: () => c,
    yW: () => i.mo,
});
var r = n(562465),
    i = n(257474),
    a = n(652215),
    s = n(985018);
async function o(e) {
    let t = a.Rsh.APPLICATION_DISCLOSURES(e),
        n = await r.Bo.get({
            url: t,
            retries: 3,
            rejectWithError: !1,
        }),
        i = n.body.disclosures;
    return {
        disclosures: i,
        ackedDisclosures: n.body.acked_disclosures,
        allAcked: n.body.all_acked,
    };
}
async function l(e, t) {
    let n = a.Rsh.APPLICATION_DISCLOSURES(e);
    await r.Bo.post({
        url: n,
        body: {
            disclosures: t,
        },
        rejectWithError: !1,
    });
}

function c(e) {
    switch (e) {
        case i.mo.IP_LOCATION:
            return s.intl.string(s.t["6wPmjo"]);
        case i.mo.DISPLAYS_ADVERTISEMENTS:
            return s.intl.string(s.t["/uOMKZ"]);
        default:
            return null;
    }
}
