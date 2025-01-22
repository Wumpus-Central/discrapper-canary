r.d(n, {
    $Z: function () {
        return l;
    },
    Ao: function () {
        return u;
    },
    Cp: function () {
        return s;
    },
    Cz: function () {
        return d;
    },
    bA: function () {
        return a;
    },
    d7: function () {
        return c;
    },
    k3: function () {
        return f;
    },
    xv: function () {
        return o;
    }
});
var i = r(570140);
function a(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_OPEN',
        id: e,
        component: n,
        props: r
    });
}
function o(e) {
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_CLOSE',
        id: e
    });
}
function s(e) {
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_HIDE',
        id: e
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_SHOW',
        id: e
    });
}
function u(e, n) {
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_MOVE',
        id: e,
        position: n
    });
}
function c(e, n) {
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_RESIZE',
        width: e,
        pipType: n
    });
}
function d(e, n) {
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_UPDATE_RECT',
        id: e,
        rect: n
    });
}
function f(e) {
    i.Z.dispatch({
        type: 'PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW',
        id: e
    });
}
