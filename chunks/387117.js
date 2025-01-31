n.d(t, { V: () => i }), n(47120);
let i = {
    Modules: {
        chat: {
            RESIZE_HANDLE_WIDTH: { resolve: () => 8 },
            INPUT_ICON_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 24;
                    for (let e of t) if ('visual-refresh' === e) return 20;
                    return 24;
                }
            },
            MARKUP_LINE_HEIGHT: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return '1.375rem';
                    for (let e of t) if ('visual-refresh' === e) return '1.5rem';
                    return '1.375rem';
                }
            }
        },
        guildbar: {
            AVATAR_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 48;
                    for (let e of t) if ('visual-refresh' === e) return 40;
                    return 48;
                }
            },
            FOLDER_SIZE: { resolve: () => 48 }
        },
        modal: {
            HORIZONTAL_PADDING: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 16;
                    for (let e of t) if ('visual-refresh' === e) return 24;
                    return 16;
                }
            },
            VERTICAL_PADDING: { resolve: () => 16 },
            WIDTH_SMALL: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 440;
                    for (let e of t) if ('visual-refresh' === e) return 442;
                    return 440;
                }
            },
            WIDTH_MEDIUM: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 600;
                    for (let e of t) if ('visual-refresh' === e) return 602;
                    return 600;
                }
            },
            WIDTH_LARGE: { resolve: () => 800 }
        }
    }
};
