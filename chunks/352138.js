n.d(t, {
    J: () => s,
    K: () => o,
});
var r = n(544891),
    i = n(570140),
    a = n(981631);
async function o(e) {
    return (
        await r.tn.post({
            url: a.ANM.VERIFY_AGE,
            body: { method: e },
            rejectWithError: !0,
        })
    ).body;
}
function s() {
    return (
        i.Z.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_START" }),
        r.tn
            .get({
                url: a.ANM.AGE_VERIFICATION_METHODS,
                rejectWithError: !0,
            })
            .then((e) => {
                i.Z.dispatch({
                    type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS",
                    methods: e.body.methods,
                });
            })
            .catch(() => {
                i.Z.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE" });
            })
    );
}
