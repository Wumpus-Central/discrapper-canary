r.d(n, {
    Y$: function () {
        return a;
    },
    a8: function () {
        return l;
    },
    jS: function () {
        return o;
    },
    tZ: function () {
        return s;
    }
});
var i = r(570140);
function a() {
    i.Z.dispatch({ type: 'DEVELOPER_ACTIVITY_SHELF_TOGGLE_USE_ACTIVITY_URL_OVERRIDE' });
}
function o(e) {
    i.Z.dispatch({
        type: 'DEVELOPER_ACTIVITY_SHELF_SET_ACTIVITY_URL_OVERRIDE',
        activityUrlOverride: e
    });
}
function s(e) {
    i.Z.dispatch({
        type: 'DEVELOPER_ACTIVITY_SHELF_MARK_ACTIVITY_USED',
        applicationId: e,
        timestamp: new Date().getTime()
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'DEVELOPER_ACTIVITY_SHELF_UPDATE_FILTER',
        filter: e
    });
}
