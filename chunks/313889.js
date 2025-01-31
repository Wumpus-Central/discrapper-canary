n.d(t, {
    d: () => i,
    t: () => a
});
var i = (function (e) {
    return (e[(e.SET_COMPLETED = 1)] = 'SET_COMPLETED'), (e[(e.UNSET_COMPLETED = 2)] = 'UNSET_COMPLETED'), (e[(e.DELETE_USER_MESSAGE = 3)] = 'DELETE_USER_MESSAGE'), (e[(e.SUBMIT_FEEDBACK = 4)] = 'SUBMIT_FEEDBACK'), e;
})({});
function r(e) {
    if (null == e) return null;
    try {
        return JSON.parse(e);
    } catch (e) {
        return null;
    }
}
function a(e) {
    if (null == e) return null;
    let t = r(e);
    return null == t || null == t.actions
        ? null
        : (Object.keys(t.actions).forEach((e) => {
              t.actions[e].actionType = e;
          }),
          t);
}
