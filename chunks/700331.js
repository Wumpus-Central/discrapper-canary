t.d(n, { N: () => r, l: () => c });
var a,
    _ = t(353640),
    d = t(734057),
    i = t(954571),
    l = t(652215),
    r =
        (((a = {}).VIEWER_SWIPE = "number_viewer_swipes"),
        (a.THUMBNAIL_SWIPE = "number_thumbnail_swipes"),
        (a.SELECTED_ITEM_CHANGE = "number_selected_item_changes"),
        (a.ZOOM_IN_BUTTON_PRESSED = "number_zoom_in_button_pressed"),
        (a.ZOOM_IN_IMAGE_PRESSED = "number_zoom_in_image_pressed"),
        (a.ZOOM_OUT_BUTTON_PRESSED = "number_zoom_out_button_pressed"),
        (a.ZOOM_OUT_IMAGE_PRESSED = "number_zoom_out_image_pressed"),
        (a.FORWARD_PRESSED = "number_forward_button_pressed"),
        (a.SAVE_MEDIA_PRESSED = "number_save_media_button_pressed"),
        (a.OPEN_LINK_PRESSED = "number_open_link_button_pressed"),
        (a.MORE_BUTTON_PRESSED = "number_more_button_pressed"),
        (a.COPY_IMAGE_PRESSED = "number_copy_image_more_menu_pressed"),
        (a.COPY_LINK_PRESSED = "number_copy_link_more_menu_pressed"),
        (a.CONTEXT_MENU_OPENED = "number_context_menu_opened"),
        a);
let s = {
        guildId: void 0,
        channelId: void 0,
        channelType: void 0,
        numMediaItems: 0,
        hasMediaOptions: void 0,
        source: void 0,
        incrementableActions: Object.fromEntries(Object.values(r).map((e) => [e, 0])),
    },
    E = (0, _.v)(() => s),
    c = {
        markSessionStarted: (e) => {
            let n = d.A.getChannel(e.channelId);
            i.default.track(l.HAw.OPEN_MODAL, {
                type: l.JJy.MEDIA_VIEWER,
                source: e.source,
                channel_id: e.channelId,
                channel_type: n?.type,
                guild_id: n?.guild_id,
            }),
                E.setState({ ...s, ...e, channelId: e.channelId, channelType: n?.type, guildId: n?.guild_id });
        },
        markSessionCompleted: () => {
            let e = E.getState();
            i.default.track(l.HAw.MEDIA_VIEWER_SESSION_COMPLETED, {
                source: e.source,
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
                number_media_items: e.numMediaItems,
                has_media_options: e.hasMediaOptions,
                ...e.incrementableActions,
            }),
                E.setState({ ...s });
        },
        markActionPerformed: (e) => {
            E.setState((n) => ({
                incrementableActions: { ...n.incrementableActions, [e]: n.incrementableActions[e] + 1 },
            }));
        },
        trackMediaViewerImageSaved: (e) => {
            let { url: n, success: t } = e,
                a = E.getState();
            i.default.track(l.HAw.MEDIA_VIEWER_IMAGE_SAVED, { url: n, success: t, channel_id: a.channelId });
        },
        trackMediaViewerImageCopied: (e) => {
            let { url: n, success: t } = e,
                a = E.getState();
            i.default.track(l.HAw.MEDIA_VIEWER_IMAGE_COPIED, { url: n, success: t, channel_id: a.channelId });
        },
        trackMediaViewerLinkCopied: (e) => {
            let { href: n, success: t } = e,
                a = E.getState();
            i.default.track(l.HAw.MEDIA_VIEWER_LINK_COPIED, { href: n, success: t, channel_id: a.channelId });
        },
        trackMediaViewerLinkOpened: (e) => {
            let { href: n } = e,
                t = E.getState();
            i.default.track(l.HAw.MEDIA_VIEWER_LINK_OPENED, { href: n, channel_id: t.channelId });
        },
        trackMediaViewerDownloadButtonTapped: () => {
            let e = E.getState();
            i.default.track(l.HAw.MEDIA_VIEWER_DOWNLOAD_BUTTON_TAPPED, {
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
            });
        },
        trackMediaViewerShareButtonTapped: () => {
            let e = E.getState();
            i.default.track(l.HAw.MEDIA_VIEWER_SHARE_BUTTON_TAPPED, {
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
            });
        },
        trackMessageEmbedsActionCompleted: (e) => {
            let { platform: n, action: t, error: a } = e;
            i.default.track(l.HAw.MESSAGE_EMBEDS_ACTION_COMPLETED, { platform: n, error: a, action: t });
        },
    };
