n.d(t, {
    kj: () => o,
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
        r.Z.dispatch({ type: 'RESET_PREVIEW_CLIENT_THEME' });
    };
