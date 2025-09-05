i.d(t, { Q: () => o });
var a = i(544891),
    n = i(981631);
async function o(e) {
    return (
        await a.tn.post({
            url: n.ANM.AGE_ASSURANCE_TEST,
            body: { method: e },
            rejectWithError: !1,
        })
    ).body;
}
