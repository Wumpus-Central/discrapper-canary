n.d(t, { Z: () => i });
var r = n(570140);
let i = {
    addKeybind(e) {
        r.Z.dispatch({
            type: 'KEYBINDS_ADD_KEYBIND',
            keybind: e
        });
    },
    setKeybind(e) {
        r.Z.dispatch({
            type: 'KEYBINDS_SET_KEYBIND',
            keybind: e
        });
    },
    deleteKeybind(e) {
        r.Z.dispatch({
            type: 'KEYBINDS_DELETE_KEYBIND',
            id: e
        });
    },
    enableAll(e) {
        r.Z.dispatch({
            type: 'KEYBINDS_ENABLE_ALL_KEYBINDS',
            enable: e
        });
    }
};
