r.d(n, {
    V: function () {
        return a;
    }
});
var i = r(47120);
let a = {
    Modules: {
        modal: {
            HORIZONTAL_PADDING: {
                resolve(e) {
                    let { enabledExperiments: n } = e;
                    if (0 === n.length) return 12;
                    for (let e of n) if ('visual-refresh' === e) return 24;
                    return 12;
                }
            },
            VERTICAL_PADDING: { resolve: () => 16 }
        },
        chat: { RESIZE_HANDLE_WIDTH: { resolve: () => 8 } }
    }
};
