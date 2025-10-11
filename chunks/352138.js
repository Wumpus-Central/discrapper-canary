n.d(t, {
    Jh: () => c,
    K9: () => l,
});
var r = n(544891),
    i = n(570140),
    a = n(788080),
    o = n(314897),
    s = n(981631);
async function l(e) {
    return (
        await r.tn.post({
            url: s.ANM.VERIFY_AGE,
            body: { method: e },
            rejectWithError: !0,
        })
    ).body;
}
async function c() {
    let e;
    return (
        i.Z.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_START" }),
        (e = (0, a.yF)() ? d() : u()),
        await (null == e
            ? void 0
            : e
                  .then((e) => {
                      i.Z.dispatch({
                          type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS",
                          methods: e.body.methods,
                      });
                  })
                  .catch(() => {
                      i.Z.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE" });
                  }))
    );
}
function u() {
    return r.tn.get({
        url: s.ANM.AGE_VERIFICATION_METHODS,
        rejectWithError: !0,
    });
}
function d() {
    let e = o.default.getSuspendedUserToken();
    return r.tn.post({
        url: s.ANM.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS,
        rejectWithError: !0,
        body: { token: e },
    });
}
