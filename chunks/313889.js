var i;
function a(e) {
    if (null == e) return null;
    try {
        return JSON.parse(e);
    } catch (e) {
        return null;
    }
}
function o(e) {
    if (null == e) return null;
    let n = a(e);
    return null == n || null == n.actions
        ? null
        : (Object.keys(n.actions).forEach((e) => {
              n.actions[e].actionType = e;
          }),
          n);
}
r.d(n, {
    d: function () {
        return i;
    },
    t: function () {
        return o;
    }
}),
    !(function (e) {
        (e[(e.SET_COMPLETED = 1)] = 'SET_COMPLETED'), (e[(e.UNSET_COMPLETED = 2)] = 'UNSET_COMPLETED'), (e[(e.DELETE_USER_MESSAGE = 3)] = 'DELETE_USER_MESSAGE'), (e[(e.SUBMIT_FEEDBACK = 4)] = 'SUBMIT_FEEDBACK');
    })(i || (i = {}));
