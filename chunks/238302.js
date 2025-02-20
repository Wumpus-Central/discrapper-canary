n.d(t, {
    Kq: () => a,
    Mo: () => s,
    kj: () => l,
    xs: () => o,
    zO: () => i
});
var r = n(570140);
let i = (e) => {
        r.Z.dispatch({
            type: 'UPDATE_BACKGROUND_GRADIENT_PRESET',
            presetId: e
        });
    },
    o = () => {
        r.Z.dispatch({
            type: 'UPDATE_BACKGROUND_GRADIENT_PRESET',
            presetId: null
        });
    },
    a = () => {
        r.Z.dispatch({ type: 'CLIENT_THEMES_EDITOR_OPEN' });
    },
    s = () => {
        r.Z.dispatch({ type: 'CLIENT_THEMES_EDITOR_CLOSE' });
    },
    l = () => {
        r.Z.dispatch({ type: 'RESET_PREVIEW_CLIENT_THEME' });
    };
