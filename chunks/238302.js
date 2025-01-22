r.d(n, {
    Kq: function () {
        return s;
    },
    Mo: function () {
        return l;
    },
    kj: function () {
        return u;
    },
    xs: function () {
        return o;
    },
    zO: function () {
        return a;
    }
});
var i = r(570140);
let a = (e) => {
        i.Z.dispatch({
            type: 'UPDATE_BACKGROUND_GRADIENT_PRESET',
            presetId: e
        });
    },
    o = () => {
        i.Z.dispatch({
            type: 'UPDATE_BACKGROUND_GRADIENT_PRESET',
            presetId: null
        });
    },
    s = () => {
        i.Z.dispatch({ type: 'CLIENT_THEMES_EDITOR_OPEN' });
    },
    l = () => {
        i.Z.dispatch({ type: 'CLIENT_THEMES_EDITOR_CLOSE' });
    },
    u = () => {
        i.Z.dispatch({ type: 'RESET_PREVIEW_CLIENT_THEME' });
    };
