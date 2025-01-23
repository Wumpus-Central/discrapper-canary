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
                    if (0 === n.length) return 16;
                    for (let e of n) if ('visual-refresh' === e) return 24;
                    return 16;
                }
            },
            VERTICAL_PADDING: { resolve: () => 16 }
        },
        chat: {
            RESIZE_HANDLE_WIDTH: { resolve: () => 8 },
            INPUT_ICON_SIZE: {
                resolve(e) {
                    let { enabledExperiments: n } = e;
                    if (0 === n.length) return 24;
                    for (let e of n) if ('visual-refresh' === e) return 20;
                    return 24;
                }
            },
            MARKUP_LINE_HEIGHT: {
                resolve(e) {
                    let { enabledExperiments: n } = e;
                    if (0 === n.length) return 22;
                    for (let e of n) if ('visual-refresh' === e) return 24;
                    return 22;
                }
            }
        },
        guildbar: {
            AVATAR_SIZE: {
                resolve(e) {
                    let { enabledExperiments: n } = e;
                    if (0 === n.length) return 48;
                    for (let e of n) if ('visual-refresh' === e) return 40;
                    return 48;
                }
            },
            FOLDER_SIZE: { resolve: () => 48 }
        }
    }
};
