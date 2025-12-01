n.d(t, {
    Jh: () => d,
    pU: () => l,
});
var r = n(544891),
    i = n(570140),
    a = n(788080),
    o = n(314897),
    s = n(981631);
async function l(e) {
    let { method: t, classificationId: n } = e;
    return (0, a.yF)()
        ? await u({
              classificationId: n,
              method: t,
          })
        : await c(t);
}
async function c(e) {
    return (
        await r.tn.post({
            url: s.ANM.VERIFY_AGE,
            body: { method: e },
            rejectWithError: !0,
        })
    ).body;
}
async function u(e) {
    let { classificationId: t, method: n } = e,
        i = o.default.getSuspendedUserToken();
    return (
        await r.tn.post({
            url: s.ANM.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
            body: {
                token: i,
                from_classification_id: t,
                method: n,
            },
            rejectWithError: !0,
        })
    ).body;
}
async function d() {
    let e;
    return (
        i.Z.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_START" }),
        (e = (0, a.yF)() ? p() : f()),
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
function f() {
    return r.tn.get({
        url: s.ANM.AGE_VERIFICATION_METHODS,
        rejectWithError: !0,
    });
}
function p() {
    let e = o.default.getSuspendedUserToken();
    return r.tn.post({
        url: s.ANM.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS,
        rejectWithError: !0,
        body: { token: e },
    });
}
