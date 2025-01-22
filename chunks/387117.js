r.d(n, {
    V: function () {
        return a;
    }
});
var i = r(47120);
let a = {
    Modules: {
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
        },
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
        }
    }
};
