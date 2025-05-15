n.d(t, {
    Kq: () => o,
    Mo: () => s,
    kj: () => l,
    xs: () => a,
    zO: () => i
});
var r = n(570140);
let i = (e) => {
        r.Z.dispatch({
            type: 'UPDATE_BACKGROUND_GRADIENT_PRESET',
            presetId: e
        });
    },
    a = () => {
        r.Z.dispatch({
            type: 'UPDATE_BACKGROUND_GRADIENT_PRESET',
            presetId: null
        });
    },
    o = () => {
        r.Z.dispatch({ type: 'CLIENT_THEMES_EDITOR_OPEN' });
    },
    s = () => {
        r.Z.dispatch({ type: 'CLIENT_THEMES_EDITOR_CLOSE' });
    },
    l = () => {
        r.Z.dispatch({ type: 'RESET_PREVIEW_CLIENT_THEME' });
    };
