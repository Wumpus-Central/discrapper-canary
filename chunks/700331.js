"use strict";
n.d(t, { N: () => o, l: () => u });
var r,
    a = n(353640),
    i = n(734057),
    l = n(954571),
    s = n(652215),
    o =
        (((r = {}).VIEWER_SWIPE = "number_viewer_swipes"),
        (r.THUMBNAIL_SWIPE = "number_thumbnail_swipes"),
        (r.SELECTED_ITEM_CHANGE = "number_selected_item_changes"),
        (r.ZOOM_IN_BUTTON_PRESSED = "number_zoom_in_button_pressed"),
        (r.ZOOM_IN_IMAGE_PRESSED = "number_zoom_in_image_pressed"),
        (r.ZOOM_OUT_BUTTON_PRESSED = "number_zoom_out_button_pressed"),
        (r.ZOOM_OUT_IMAGE_PRESSED = "number_zoom_out_image_pressed"),
        (r.FORWARD_PRESSED = "number_forward_button_pressed"),
        (r.SAVE_MEDIA_PRESSED = "number_save_media_button_pressed"),
        (r.OPEN_LINK_PRESSED = "number_open_link_button_pressed"),
        (r.MORE_BUTTON_PRESSED = "number_more_button_pressed"),
        (r.COPY_IMAGE_PRESSED = "number_copy_image_more_menu_pressed"),
        (r.COPY_LINK_PRESSED = "number_copy_link_more_menu_pressed"),
        (r.CONTEXT_MENU_OPENED = "number_context_menu_opened"),
        r);
let c = {
        guildId: void 0,
        channelId: void 0,
        channelType: void 0,
        numMediaItems: 0,
        hasMediaOptions: void 0,
        source: void 0,
        incrementableActions: Object.fromEntries(Object.values(o).map((e) => [e, 0])),
    },
    d = (0, a.v)(() => c),
    u = {
        markSessionStarted: (e) => {
            let t = i.A.getChannel(e.channelId);
            l.default.track(s.HAw.OPEN_MODAL, {
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
            l.default.track(s.HAw.MEDIA_VIEWER_SESSION_COMPLETED, {
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
            let { url: t, success: n } = e,
                r = d.getState();
            l.default.track(s.HAw.MEDIA_VIEWER_IMAGE_SAVED, { url: t, success: n, channel_id: r.channelId });
        },
        trackMediaViewerImageCopied: (e) => {
            let { url: t, success: n } = e,
                r = d.getState();
            l.default.track(s.HAw.MEDIA_VIEWER_IMAGE_COPIED, { url: t, success: n, channel_id: r.channelId });
        },
        trackMediaViewerLinkCopied: (e) => {
            let { href: t, success: n } = e,
                r = d.getState();
            l.default.track(s.HAw.MEDIA_VIEWER_LINK_COPIED, { href: t, success: n, channel_id: r.channelId });
        },
        trackMediaViewerLinkOpened: (e) => {
            let { href: t } = e,
                n = d.getState();
            l.default.track(s.HAw.MEDIA_VIEWER_LINK_OPENED, { href: t, channel_id: n.channelId });
        },
        trackMediaViewerDownloadButtonTapped: () => {
            let e = d.getState();
            l.default.track(s.HAw.MEDIA_VIEWER_DOWNLOAD_BUTTON_TAPPED, {
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
            });
        },
        trackMediaViewerShareButtonTapped: () => {
            let e = d.getState();
            l.default.track(s.HAw.MEDIA_VIEWER_SHARE_BUTTON_TAPPED, {
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
            });
        },
        trackMessageEmbedsActionCompleted: (e) => {
            let { platform: t, action: n, error: r } = e;
            l.default.track(s.HAw.MESSAGE_EMBEDS_ACTION_COMPLETED, { platform: t, error: r, action: n });
        },
    };
