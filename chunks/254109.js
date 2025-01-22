r.d(n, {
    VO: function () {
        return f;
    },
    fS: function () {
        return d;
    },
    uG: function () {
        return i;
    },
    yg: function () {
        return p;
    }
});
var i,
    a = r(15729),
    o = r(731965),
    s = r(626135),
    l = r(981631);
!(function (e) {
    (e.VIEWER_SWIPE = 'number_viewer_swipes'), (e.THUMBNAIL_SWIPE = 'number_thumbnail_swipes'), (e.SELECTED_ITEM_CHANGE = 'number_selected_item_changes'), (e.ZOOM_IN_BUTTON_PRESSED = 'number_zoom_in_button_pressed'), (e.ZOOM_IN_IMAGE_PRESSED = 'number_zoom_in_image_pressed'), (e.ZOOM_OUT_BUTTON_PRESSED = 'number_zoom_out_button_pressed'), (e.ZOOM_OUT_IMAGE_PRESSED = 'number_zoom_out_image_pressed'), (e.FORWARD_PRESSED = 'number_forward_button_pressed'), (e.SAVE_MEDIA_PRESSED = 'number_save_media_button_pressed'), (e.OPEN_LINK_PRESSED = 'number_open_link_button_pressed'), (e.MORE_BUTTON_PRESSED = 'number_more_button_pressed'), (e.COPY_IMAGE_PRESSED = 'number_copy_image_more_menu_pressed'), (e.COPY_LINK_PRESSED = 'number_copy_link_more_menu_pressed'), (e.CONTEXT_MENU_OPENED = 'number_context_menu_opened');
})(i || (i = {}));
let u = {
        guildId: void 0,
        channelId: void 0,
        channelType: void 0,
        numMediaItems: 0,
        hasMediaOptions: void 0,
        source: void 0,
        incrementableActions: Object.fromEntries(Object.values(i).map((e) => [e, 0]))
    },
    c = (0, a.U)(() => u);
function d(e) {
    (0, o.j)(() =>
        c.setState({
            ...u,
            ...e
        })
    );
}
function f() {
    let e = c.getState();
    s.default.track(l.rMx.MEDIA_VIEWER_SESSION_COMPLETED, {
        source: e.source,
        guild_id: e.guildId,
        channel_id: e.channelId,
        channel_type: e.channelType,
        number_media_items: e.numMediaItems,
        has_media_options: e.hasMediaOptions,
        ...e.incrementableActions
    }),
        (0, o.j)(() => c.setState({ ...u }));
}
function p(e) {
    (0, o.j)(() => {
        c.setState((n) => ({
            incrementableActions: {
                ...n.incrementableActions,
                [e]: n.incrementableActions[e] + 1
            }
        }));
    });
}
