n.d(t, {
    N: () => d,
    l: () => _,
}),
    n(446912);
var r = n(353640),
    i = n(734057),
    a = n(954571),
    o = n(652215);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}

function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var d = (function (e) {
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
let f = {
        guildId: void 0,
        channelId: void 0,
        channelType: void 0,
        numMediaItems: 0,
        hasMediaOptions: void 0,
        source: void 0,
        incrementableActions: Object.fromEntries(Object.values(d).map((e) => [e, 0])),
    },
    p = (0, r.v)(() => f),
    _ = {
        markSessionStarted: (e) => {
            let t = i.A.getChannel(e.channelId);
            a.default.track(o.HAw.OPEN_MODAL, {
                type: o.JJy.MEDIA_VIEWER,
                source: e.source,
                channel_id: e.channelId,
                channel_type: null == t ? void 0 : t.type,
                guild_id: null == t ? void 0 : t.guild_id,
            }),
                p.setState(
                    u(l({}, f, e), {
                        channelId: e.channelId,
                        channelType: null == t ? void 0 : t.type,
                        guildId: null == t ? void 0 : t.guild_id,
                    }),
                );
        },
        markSessionCompleted: () => {
            let e = p.getState();
            a.default.track(
                o.HAw.MEDIA_VIEWER_SESSION_COMPLETED,
                l(
                    {
                        source: e.source,
                        guild_id: e.guildId,
                        channel_id: e.channelId,
                        channel_type: e.channelType,
                        number_media_items: e.numMediaItems,
                        has_media_options: e.hasMediaOptions,
                    },
                    e.incrementableActions,
                ),
            ),
                p.setState(l({}, f));
        },
        markActionPerformed: (e) => {
            p.setState((t) => ({
                incrementableActions: u(l({}, t.incrementableActions), {
                    [e]: t.incrementableActions[e] + 1,
                }),
            }));
        },
        trackMediaViewerImageSaved: (e) => {
            let { url: t, success: n } = e,
                r = p.getState();
            a.default.track(o.HAw.MEDIA_VIEWER_IMAGE_SAVED, {
                url: t,
                success: n,
                channel_id: r.channelId,
            });
        },
        trackMediaViewerImageCopied: (e) => {
            let { url: t, success: n } = e,
                r = p.getState();
            a.default.track(o.HAw.MEDIA_VIEWER_IMAGE_COPIED, {
                url: t,
                success: n,
                channel_id: r.channelId,
            });
        },
        trackMediaViewerLinkCopied: (e) => {
            let { href: t, success: n } = e,
                r = p.getState();
            a.default.track(o.HAw.MEDIA_VIEWER_LINK_COPIED, {
                href: t,
                success: n,
                channel_id: r.channelId,
            });
        },
        trackMediaViewerLinkOpened: (e) => {
            let { href: t } = e,
                n = p.getState();
            a.default.track(o.HAw.MEDIA_VIEWER_LINK_OPENED, {
                href: t,
                channel_id: n.channelId,
            });
        },
        trackMediaViewerDownloadButtonTapped: () => {
            let e = p.getState();
            a.default.track(o.HAw.MEDIA_VIEWER_DOWNLOAD_BUTTON_TAPPED, {
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
            });
        },
        trackMediaViewerShareButtonTapped: () => {
            let e = p.getState();
            a.default.track(o.HAw.MEDIA_VIEWER_SHARE_BUTTON_TAPPED, {
                guild_id: e.guildId,
                channel_id: e.channelId,
                channel_type: e.channelType,
            });
        },
        trackMessageEmbedsActionCompleted: (e) => {
            let { platform: t, action: n, error: r } = e;
            a.default.track(o.HAw.MESSAGE_EMBEDS_ACTION_COMPLETED, {
                platform: t,
                error: r,
                action: n,
            });
        },
    };
