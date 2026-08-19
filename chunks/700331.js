n.d(t, { N: () => E, l: () => d });
var i,
    s = n(196765),
    a = n(734057),
    l = n(174459),
    r = n(652215),
    E =
        (((i = {}).VIEWER_SWIPE = "number_viewer_swipes"),
        (i.THUMBNAIL_SWIPE = "number_thumbnail_swipes"),
        (i.SELECTED_ITEM_CHANGE = "number_selected_item_changes"),
        (i.ZOOM_IN_BUTTON_PRESSED = "number_zoom_in_button_pressed"),
        (i.ZOOM_IN_IMAGE_PRESSED = "number_zoom_in_image_pressed"),
        (i.ZOOM_OUT_BUTTON_PRESSED = "number_zoom_out_button_pressed"),
        (i.ZOOM_OUT_IMAGE_PRESSED = "number_zoom_out_image_pressed"),
        (i.FORWARD_PRESSED = "number_forward_button_pressed"),
        (i.SAVE_MEDIA_PRESSED = "number_save_media_button_pressed"),
        (i.OPEN_LINK_PRESSED = "number_open_link_button_pressed"),
        (i.MORE_BUTTON_PRESSED = "number_more_button_pressed"),
        (i.COPY_IMAGE_PRESSED = "number_copy_image_more_menu_pressed"),
        (i.COPY_LINK_PRESSED = "number_copy_link_more_menu_pressed"),
        (i.CONTEXT_MENU_OPENED = "number_context_menu_opened"),
        i);
let o = {
        guildId: void 0,
        channelId: void 0,
        channelType: void 0,
        numMediaItems: 0,
        hasMediaOptions: void 0,
        source: void 0,
        incrementableActions: Object.fromEntries(Object.values(E).map((e) => [e, 0])),
    },
    c = (0, s.v)(() => o),
    d = {
        markSessionStarted: (e) => {
            let t = a.A.getChannel(e.channelId);
            l.default.track(r.HAw.OPEN_MODAL, {
                type: r.JJy.MEDIA_VIEWER,
                source: e.source,
                channel_id: e.channelId,
                channel_type: t?.type,
                guild_id: t?.guild_id,
            }),
                c.setState({ ...o, ...e, channelId: e.channelId, channelType: t?.type, guildId: t?.guild_id });
        },
        markSessionCompleted: () => {
            let e = c.getState();
            l.default.track(r.HAw.MEDIA_VIEWER_SESSION_COMPLETED, {
                source: e.source,
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
                number_media_items: e.numMediaItems,
                has_media_options: e.hasMediaOptions,
                ...e.incrementableActions,
            }),
                c.setState({ ...o });
        },
        markActionPerformed: (e) => {
            c.setState((t) => ({
                incrementableActions: { ...t.incrementableActions, [e]: t.incrementableActions[e] + 1 },
            }));
        },
        trackMediaViewerImageSaved: (e) => {
            let { url: t, success: n } = e,
                i = c.getState();
            l.default.track(r.HAw.MEDIA_VIEWER_IMAGE_SAVED, { url: t, success: n, channel_id: i.channelId });
        },
        trackMediaViewerImageCopied: (e) => {
            let { url: t, success: n } = e,
                i = c.getState();
            l.default.track(r.HAw.MEDIA_VIEWER_IMAGE_COPIED, { url: t, success: n, channel_id: i.channelId });
        },
        trackMediaViewerLinkCopied: (e) => {
            let { href: t, success: n } = e,
                i = c.getState();
            l.default.track(r.HAw.MEDIA_VIEWER_LINK_COPIED, { href: t, success: n, channel_id: i.channelId });
        },
        trackMediaViewerLinkOpened: (e) => {
            let { href: t } = e,
                n = c.getState();
            l.default.track(r.HAw.MEDIA_VIEWER_LINK_OPENED, { href: t, channel_id: n.channelId });
        },
        trackMediaViewerDownloadButtonTapped: () => {
            let e = c.getState();
            l.default.track(r.HAw.MEDIA_VIEWER_DOWNLOAD_BUTTON_TAPPED, {
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
            });
        },
        trackMediaViewerShareButtonTapped: () => {
            let e = c.getState();
            l.default.track(r.HAw.MEDIA_VIEWER_SHARE_BUTTON_TAPPED, {
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
            });
        },
        trackMessageEmbedsActionCompleted: (e) => {
            let { platform: t, action: n, error: i } = e;
            l.default.track(r.HAw.MESSAGE_EMBEDS_ACTION_COMPLETED, { platform: t, error: i, action: n });
        },
    };
