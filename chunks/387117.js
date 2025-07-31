(n.d(t, { V: () => r }), n(388685));
let r = {
    Modules: {
        channels: {
            NAME_LINE_HEIGHT: {
                resolve(e) {
                    let { density: t } = e;
                    switch (t) {
                        case 'compact':
                            return 20;
                        case 'default':
                        default:
                            return 24;
                        case 'cozy':
                            return 28;
                    }
                }
            },
            SPINE_INVERTED_OFFSET_TOP: {
                resolve(e) {
                    let { density: t } = e;
                    switch (t) {
                        case 'compact':
                            return 2;
                        case 'default':
                        default:
                            return 6;
                        case 'cozy':
                            return 9;
                    }
                }
            },
            SPINE_OFFSET_LEFT: {
                resolve(e) {
                    let { density: t } = e;
                    switch (t) {
                        case 'compact':
                            return 20;
                        case 'default':
                        default:
                            return 24;
                        case 'cozy':
                            return 28;
                    }
                }
            }
        },
        chat: {
            AVATAR_SIZE: { resolve: () => 40 },
            INPUT_ICON_SIZE: { resolve: () => 20 },
            MARKUP_LINE_HEIGHT: { resolve: () => '1.375rem' },
            RESIZE_HANDLE_WIDTH: { resolve: () => 8 }
        },
        control: {
            INPUT_HEIGHT_MD: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 44;
                    for (let e of t) if ('mana-text-inputs' === e) return 40;
                    return 44;
                }
            },
            INPUT_HEIGHT_SM: { resolve: () => 32 },
            ITEM_HEIGHT_MD: { resolve: () => 40 },
            ITEM_HEIGHT_SM: { resolve: () => 32 }
        },
        form: { INPUT_HEIGHT: { resolve: () => 44 } },
        guildbar: {
            AVATAR_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t, density: n } = e;
                    if (0 === t.length) return 40;
                    for (let e of t)
                        if ('refresh-fast-follow-avatars' === e)
                            switch (n) {
                                case 'compact':
                                default:
                                    return 40;
                                case 'default':
                                case 'cozy':
                                    return 44;
                            }
                    return 40;
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
        icon: {
            SIZE_LG: { resolve: () => 32 },
            SIZE_MD: { resolve: () => 24 },
            SIZE_SM: { resolve: () => 18 },
            SIZE_XS: { resolve: () => 16 },
            SIZE_XXS: { resolve: () => 12 }
        },
        modal: {
            HORIZONTAL_PADDING: { resolve: () => 24 },
            VERTICAL_PADDING: { resolve: () => 16 },
            WIDTH_LARGE: { resolve: () => 800 },
            WIDTH_MEDIUM: { resolve: () => 602 },
            WIDTH_SMALL: { resolve: () => 442 }
        }
    }
};
