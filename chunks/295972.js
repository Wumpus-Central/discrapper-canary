n.d(t, {
    DJ: () => d,
    uf: () => l,
});
var r = n(562465),
    i = n(73153),
    a = n(393033),
    s = n(961350),
    o = n(652215);
async function l(e) {
    let { method: t, classificationId: n } = e;
    return (0, a.qn)()
        ? await u({
              classificationId: n,
              method: t,
          })
        : await c(t);
}
async function c(e) {
    return (
        await r.Bo.post({
            url: o.Rsh.VERIFY_AGE,
            body: { method: e },
            rejectWithError: !0,
        })
    ).body;
}
async function u(e) {
    let { classificationId: t, method: n } = e,
        i = s.default.getSuspendedUserToken();
    return (
        await r.Bo.post({
            url: o.Rsh.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION,
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
        i.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_START" }),
        (e = (0, a.qn)() ? p() : f()),
        await (null == e
            ? void 0
            : e
                  .then((e) => {
                      i.h.dispatch({
                          type: "AGE_VERIFICATION_METHODS_LOAD_SUCCESS",
                          methods: e.body.methods,
                      });
                  })
                  .catch(() => {
                      i.h.dispatch({ type: "AGE_VERIFICATION_METHODS_LOAD_FAILURE" });
                  }))
    );
}
function f() {
    return r.Bo.get({
        url: o.Rsh.AGE_VERIFICATION_METHODS,
        rejectWithError: !0,
    });
}
function p() {
    let e = s.default.getSuspendedUserToken();
    return r.Bo.post({
        url: o.Rsh.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS,
        rejectWithError: !0,
        body: { token: e },
    });
}
