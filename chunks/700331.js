"use strict";
n.d(t, { N: () => o, l: () => c });
var r = n(353640),
    i = n(734057),
    a = n(954571),
    s = n(652215),
    o = (function (e) {
        return (
            (e.VIEWER_SWIPE = "number_viewer_swipes"),
            (e.THUMBNAIL_SWIPE = "number_thumbnail_swipes"),
            (e.SELECTED_ITEM_CHANGE = "number_selected_item_changes"),
            (e.ZOOM_IN_BUTTON_PRESSED = "number_zoom_in_button_pressed"),
            (e.ZOOM_IN_IMAGE_PRESSED = "number_zoom_in_image_pressed"),
            (e.ZOOM_OUT_BUTTON_PRESSED = "number_zoom_out_button_pressed"),
            (e.ZOOM_OUT_IMAGE_PRESSED = "number_zoom_out_image_pressed"),
            (e.FORWARD_PRESSED = "number_forward_button_pressed"),
            (e.SAVE_MEDIA_PRESSED = "number_save_media_button_pressed"),
            (e.OPEN_LINK_PRESSED = "number_open_link_button_pressed"),
            (e.MORE_BUTTON_PRESSED = "number_more_button_pressed"),
            (e.COPY_IMAGE_PRESSED = "number_copy_image_more_menu_pressed"),
            (e.COPY_LINK_PRESSED = "number_copy_link_more_menu_pressed"),
            (e.CONTEXT_MENU_OPENED = "number_context_menu_opened"),
            e
        );
    })({});
let l = {
        guildId: void 0,
        channelId: void 0,
        channelType: void 0,
        numMediaItems: 0,
        hasMediaOptions: void 0,
        source: void 0,
        incrementableActions: Object.fromEntries(Object.values(o).map((e) => [e, 0])),
    },
    u = (0, r.v)(() => l),
    c = {
        markSessionStarted: (e) => {
            let t = i.A.getChannel(e.channelId);
            a.default.track(s.HAw.OPEN_MODAL, {
                type: s.JJy.MEDIA_VIEWER,
                source: e.source,
                channel_id: e.channelId,
                channel_type: t?.type,
                guild_id: t?.guild_id,
            }),
                u.setState({ ...l, ...e, channelId: e.channelId, channelType: t?.type, guildId: t?.guild_id });
        },
        markSessionCompleted: () => {
            let e = u.getState();
            a.default.track(s.HAw.MEDIA_VIEWER_SESSION_COMPLETED, {
                source: e.source,
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
                number_media_items: e.numMediaItems,
                has_media_options: e.hasMediaOptions,
                ...e.incrementableActions,
            }),
                u.setState({ ...l });
        },
        markActionPerformed: (e) => {
            u.setState((t) => ({
                incrementableActions: { ...t.incrementableActions, [e]: t.incrementableActions[e] + 1 },
            }));
        },
        trackMediaViewerImageSaved: (e) => {
            let { url: t, success: n } = e,
                r = u.getState();
            a.default.track(s.HAw.MEDIA_VIEWER_IMAGE_SAVED, { url: t, success: n, channel_id: r.channelId });
        },
        trackMediaViewerImageCopied: (e) => {
            let { url: t, success: n } = e,
                r = u.getState();
            a.default.track(s.HAw.MEDIA_VIEWER_IMAGE_COPIED, { url: t, success: n, channel_id: r.channelId });
        },
        trackMediaViewerLinkCopied: (e) => {
            let { href: t, success: n } = e,
                r = u.getState();
            a.default.track(s.HAw.MEDIA_VIEWER_LINK_COPIED, { href: t, success: n, channel_id: r.channelId });
        },
        trackMediaViewerLinkOpened: (e) => {
            let { href: t } = e,
                n = u.getState();
            a.default.track(s.HAw.MEDIA_VIEWER_LINK_OPENED, { href: t, channel_id: n.channelId });
        },
        trackMediaViewerDownloadButtonTapped: () => {
            let e = u.getState();
            a.default.track(s.HAw.MEDIA_VIEWER_DOWNLOAD_BUTTON_TAPPED, {
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
            });
        },
        trackMediaViewerShareButtonTapped: () => {
            let e = u.getState();
            a.default.track(s.HAw.MEDIA_VIEWER_SHARE_BUTTON_TAPPED, {
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
            });
        },
        trackMessageEmbedsActionCompleted: (e) => {
            let { platform: t, action: n, error: r } = e;
            a.default.track(s.HAw.MESSAGE_EMBEDS_ACTION_COMPLETED, { platform: t, error: r, action: n });
        },
    };
