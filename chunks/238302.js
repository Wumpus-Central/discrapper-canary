n.d(t, {
    Kq: () => s,
    Mo: () => o,
    kj: () => l,
    xs: () => a,
    zO: () => r
});
var i = n(570140);
let r = (e) => {
        i.Z.dispatch({
            type: 'UPDATE_BACKGROUND_GRADIENT_PRESET',
            presetId: e
        });
    },
    a = () => {
        i.Z.dispatch({
            type: 'UPDATE_BACKGROUND_GRADIENT_PRESET',
            presetId: null
        });
    },
    s = () => {
        i.Z.dispatch({ type: 'CLIENT_THEMES_EDITOR_OPEN' });
    },
    o = () => {
        i.Z.dispatch({ type: 'CLIENT_THEMES_EDITOR_CLOSE' });
    },
    l = () => {
        i.Z.dispatch({ type: 'RESET_PREVIEW_CLIENT_THEME' });
    };
