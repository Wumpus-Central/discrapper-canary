n.d(t, {
    Ll: () => c,
    XO: () => l,
    oq: () => s,
    tE: () => o,
    wh: () => a
});
var r = n(97519),
    i = n(731965),
    a = (function (e) {
        return ((e.CLIENT_THEMES = 'CLIENT_THEMES'), (e.APP_ICON = 'APP_ICON'), (e.CUSTOM_THEME = 'CUSTOM_THEME'), e);
    })({}),
    o = (function (e) {
        return ((e.CLIENT_THEMES_EDITOR = 'CLIENT_THEMES_EDITOR'), (e.SETTING = 'SETTING'), e);
    })({});
let s = (0, r.U)(() => ({
    activePanel: null,
    metadata: null
}));
function l(e, t) {
    (0, i.j)(() => {
        s.setState({
            activePanel: e,
            metadata: null != t ? t : null
        });
    });
}
function c() {
    (0, i.j)(() => {
        s.setState({
            activePanel: null,
            metadata: null
        });
    });
}
