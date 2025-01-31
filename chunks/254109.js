n.d(t, {
    VO: () => d,
    fS: () => c,
    uG: () => o,
    yg: () => f
});
var i = n(15729),
    r = n(731965),
    a = n(626135),
    s = n(981631),
    o = (function (e) {
        return (e.VIEWER_SWIPE = 'number_viewer_swipes'), (e.THUMBNAIL_SWIPE = 'number_thumbnail_swipes'), (e.SELECTED_ITEM_CHANGE = 'number_selected_item_changes'), (e.ZOOM_IN_BUTTON_PRESSED = 'number_zoom_in_button_pressed'), (e.ZOOM_IN_IMAGE_PRESSED = 'number_zoom_in_image_pressed'), (e.ZOOM_OUT_BUTTON_PRESSED = 'number_zoom_out_button_pressed'), (e.ZOOM_OUT_IMAGE_PRESSED = 'number_zoom_out_image_pressed'), (e.FORWARD_PRESSED = 'number_forward_button_pressed'), (e.SAVE_MEDIA_PRESSED = 'number_save_media_button_pressed'), (e.OPEN_LINK_PRESSED = 'number_open_link_button_pressed'), (e.MORE_BUTTON_PRESSED = 'number_more_button_pressed'), (e.COPY_IMAGE_PRESSED = 'number_copy_image_more_menu_pressed'), (e.COPY_LINK_PRESSED = 'number_copy_link_more_menu_pressed'), (e.CONTEXT_MENU_OPENED = 'number_context_menu_opened'), e;
    })({});
let l = {
        guildId: void 0,
        channelId: void 0,
        channelType: void 0,
        numMediaItems: 0,
        hasMediaOptions: void 0,
        source: void 0,
        incrementableActions: Object.fromEntries(Object.values(o).map((e) => [e, 0]))
    },
    u = (0, i.U)(() => l);
function c(e) {
    (0, r.j)(() =>
        u.setState({
            ...l,
            ...e
        })
    );
}
function d() {
    let e = u.getState();
    a.default.track(s.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
        source: e.source,
        guild_id: e.guildId,
        channel_id: e.channelId,
        channel_type: e.channelType,
        number_media_items: e.numMediaItems,
        has_media_options: e.hasMediaOptions,
        ...e.incrementableActions
    }),
        (0, r.j)(() => u.setState({ ...l }));
}
function f(e) {
    (0, r.j)(() => {
        u.setState((t) => ({
            incrementableActions: {
                ...t.incrementableActions,
                [e]: t.incrementableActions[e] + 1
            }
        }));
    });
}
