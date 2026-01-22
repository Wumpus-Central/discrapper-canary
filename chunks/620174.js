i.d(t, {
    V: () => o,
});
var l = i(562465),
    a = i(652215);
async function o(e) {
    return (
        await l.Bo.post({
            url: a.Rsh.AGE_ASSURANCE_TEST,
            body: {
                method: e,
            },
            rejectWithError: !1,
        })
    ).body;
}
