n.d(t, { V: () => r }), n(47120);
let r = {
    Modules: {
        channels: {
            NAME_LINE_HEIGHT: {
                resolve(e) {
                    let { enabledExperiments: t, density: n } = e;
                    if (0 === t.length) return 20;
                    for (let e of t)
                        if ('visual-refresh' === e)
                            switch (n) {
                                case 'compact':
                                default:
                                    return 20;
                                case 'default':
                                    return 24;
                                case 'cozy':
                                    return 28;
                            }
                    return 20;
                }
            },
            SPINE_INVERTED_OFFSET_TOP: {
                resolve(e) {
                    let { enabledExperiments: t, density: n } = e;
                    if (0 === t.length) return 8;
                    for (let e of t)
                        if ('visual-refresh' === e)
                            switch (n) {
                                case 'compact':
                                    return 2;
                                case 'default':
                                    return 6;
                                case 'cozy':
                                    return 9;
                                default:
                                    return 8;
                            }
                    return 8;
                }
            },
            SPINE_OFFSET_LEFT: {
                resolve(e) {
                    let { enabledExperiments: t, density: n } = e;
                    if (0 === t.length) return 22;
                    for (let e of t)
                        if ('visual-refresh' === e)
                            switch (n) {
                                case 'compact':
                                    return 20;
                                case 'default':
                                    return 24;
                                case 'cozy':
                                    return 28;
                                default:
                                    return 22;
                            }
                    return 22;
                }
            }
        },
        chat: {
            AVATAR_SIZE: { resolve: () => 40 },
            INPUT_ICON_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 24;
                    for (let e of t) if ('visual-refresh' === e) return 20;
                    return 24;
                }
            },
            MARKUP_LINE_HEIGHT: { resolve: () => '1.375rem' },
            RESIZE_HANDLE_WIDTH: { resolve: () => 8 }
        },
        form: {
            INPUT_HEIGHT: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 48;
                    for (let e of t) if ('visual-refresh' === e) return 44;
                    return 48;
                }
            }
        },
        guildbar: {
            AVATAR_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t, density: n } = e;
                    if (0 === t.length) return 48;
                    for (let e of t)
                        switch (e) {
                            case 'refresh-fast-follow-avatars':
                                switch (n) {
                                    case 'compact':
                                        return 40;
                                    case 'default':
                                    case 'cozy':
                                        return 44;
                                    default:
                                        return 48;
                                }
                            case 'visual-refresh':
                                return 40;
                        }
                    return 48;
                }
            },
            FOLDER_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t, density: n } = e;
                    if (0 === t.length) return 48;
                    for (let e of t)
                        if ('refresh-fast-follow-avatars' === e)
                            switch (n) {
                                case 'compact':
                                default:
                                    return 48;
                                case 'default':
                                case 'cozy':
                                    return 52;
                            }
                    return 48;
                }
            }
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
            WIDTH_LARGE: { resolve: () => 800 },
            WIDTH_MEDIUM: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 600;
                    for (let e of t) if ('visual-refresh' === e) return 602;
                    return 600;
                }
            },
            WIDTH_SMALL: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 440;
                    for (let e of t) if ('visual-refresh' === e) return 442;
                    return 440;
                }
            }
        }
    }
};
