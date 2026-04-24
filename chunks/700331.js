a.d(t, { N: () => o, l: () => u });
var n,
    r = a(353640),
    l = a(734057),
    i = a(954571),
    s = a(652215),
    o =
        (((n = {}).VIEWER_SWIPE = "number_viewer_swipes"),
        (n.THUMBNAIL_SWIPE = "number_thumbnail_swipes"),
        (n.SELECTED_ITEM_CHANGE = "number_selected_item_changes"),
        (n.ZOOM_IN_BUTTON_PRESSED = "number_zoom_in_button_pressed"),
        (n.ZOOM_IN_IMAGE_PRESSED = "number_zoom_in_image_pressed"),
        (n.ZOOM_OUT_BUTTON_PRESSED = "number_zoom_out_button_pressed"),
        (n.ZOOM_OUT_IMAGE_PRESSED = "number_zoom_out_image_pressed"),
        (n.FORWARD_PRESSED = "number_forward_button_pressed"),
        (n.SAVE_MEDIA_PRESSED = "number_save_media_button_pressed"),
        (n.OPEN_LINK_PRESSED = "number_open_link_button_pressed"),
        (n.MORE_BUTTON_PRESSED = "number_more_button_pressed"),
        (n.COPY_IMAGE_PRESSED = "number_copy_image_more_menu_pressed"),
        (n.COPY_LINK_PRESSED = "number_copy_link_more_menu_pressed"),
        (n.CONTEXT_MENU_OPENED = "number_context_menu_opened"),
        n);
let c = {
        guildId: void 0,
        channelId: void 0,
        channelType: void 0,
        numMediaItems: 0,
        hasMediaOptions: void 0,
        source: void 0,
        incrementableActions: Object.fromEntries(Object.values(o).map((e) => [e, 0])),
    },
    d = (0, r.v)(() => c),
    u = {
        markSessionStarted: (e) => {
            let t = l.A.getChannel(e.channelId);
            i.default.track(s.HAw.OPEN_MODAL, {
                type: s.JJy.MEDIA_VIEWER,
                source: e.source,
                channel_id: e.channelId,
                channel_type: t?.type,
                guild_id: t?.guild_id,
            }),
                d.setState({ ...c, ...e, channelId: e.channelId, channelType: t?.type, guildId: t?.guild_id });
        },
        markSessionCompleted: () => {
            let e = d.getState();
            i.default.track(s.HAw.MEDIA_VIEWER_SESSION_COMPLETED, {
                source: e.source,
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
                number_media_items: e.numMediaItems,
                has_media_options: e.hasMediaOptions,
                ...e.incrementableActions,
            }),
                d.setState({ ...c });
        },
        markActionPerformed: (e) => {
            d.setState((t) => ({
                incrementableActions: { ...t.incrementableActions, [e]: t.incrementableActions[e] + 1 },
            }));
        },
        trackMediaViewerImageSaved: (e) => {
            let { url: t, success: a } = e,
                n = d.getState();
            i.default.track(s.HAw.MEDIA_VIEWER_IMAGE_SAVED, { url: t, success: a, channel_id: n.channelId });
        },
        trackMediaViewerImageCopied: (e) => {
            let { url: t, success: a } = e,
                n = d.getState();
            i.default.track(s.HAw.MEDIA_VIEWER_IMAGE_COPIED, { url: t, success: a, channel_id: n.channelId });
        },
        trackMediaViewerLinkCopied: (e) => {
            let { href: t, success: a } = e,
                n = d.getState();
            i.default.track(s.HAw.MEDIA_VIEWER_LINK_COPIED, { href: t, success: a, channel_id: n.channelId });
        },
        trackMediaViewerLinkOpened: (e) => {
            let { href: t } = e,
                a = d.getState();
            i.default.track(s.HAw.MEDIA_VIEWER_LINK_OPENED, { href: t, channel_id: a.channelId });
        },
        trackMediaViewerDownloadButtonTapped: () => {
            let e = d.getState();
            i.default.track(s.HAw.MEDIA_VIEWER_DOWNLOAD_BUTTON_TAPPED, {
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
            });
        },
        trackMediaViewerShareButtonTapped: () => {
            let e = d.getState();
            i.default.track(s.HAw.MEDIA_VIEWER_SHARE_BUTTON_TAPPED, {
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
            });
        },
        trackMessageEmbedsActionCompleted: (e) => {
            let { platform: t, action: a, error: n } = e;
            i.default.track(s.HAw.MESSAGE_EMBEDS_ACTION_COMPLETED, { platform: t, error: n, action: a });
        },
    };
