n.d(t, { Z: () => r });
var i = n(570140);
let r = {
    addKeybind(e) {
        i.Z.dispatch({
            type: 'KEYBINDS_ADD_KEYBIND',
            keybind: e
        });
    },
    setKeybind(e) {
        i.Z.dispatch({
            type: 'KEYBINDS_SET_KEYBIND',
            keybind: e
        });
    },
    deleteKeybind(e) {
        i.Z.dispatch({
            type: 'KEYBINDS_DELETE_KEYBIND',
            id: e
        });
    },
    enableAll(e) {
        i.Z.dispatch({
            type: 'KEYBINDS_ENABLE_ALL_KEYBINDS',
            enable: e
        });
    }
};
