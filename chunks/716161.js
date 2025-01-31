n.d(t, {
    Ff: () => _,
    GS: () => g,
    KH: () => p,
    Nm: () => E,
    RI: () => m,
    Up: () => h,
    XV: () => f
});
var i = n(544891),
    r = n(570140),
    a = n(675478),
    s = n(131951),
    o = n(594174),
    l = n(932724),
    u = n(647177),
    c = n(901757),
    d = n(981631);
async function f() {
    let e = await i.tn.get({
        url: d.ANM.VIDEO_FILTER_ASSETS,
        rejectWithError: !1
    });
    return (
        r.Z.dispatch({
            type: 'VIDEO_FILTER_ASSETS_FETCH_SUCCESS',
            assets: e.body
        }),
        e
    );
}
async function _(e, t, n) {
    try {
        let a = await i.tn.post({
            url: d.ANM.VIDEO_FILTER_ASSETS,
            body: {
                type: t,
                asset: e,
                last_used: null == n ? void 0 : n.toISOString()
            },
            rejectWithError: !1
        });
        return (
            r.Z.dispatch({
                type: 'VIDEO_FILTER_ASSET_UPLOAD_SUCCESS',
                videoFilterAsset: a.body
            }),
            a.body
        );
    } catch (e) {
        throw new c.Z(e);
    }
}
async function p(e) {
    await i.tn.del({
        url: d.ANM.VIDEO_FILTER_ASSET(e.id),
        rejectWithError: !1
    });
    let t = (0, l.P)(o.default.getCurrentUser());
    (0, u.rD)(t) && t.id === e.id && h(null),
        r.Z.dispatch({
            type: 'VIDEO_FILTER_ASSET_DELETE_SUCCESS',
            videoFilterAsset: e
        });
}
async function h(e) {
    if (
        (await a.hW.updateAsync(
            'voiceAndVideo',
            (t) => {
                t.videoBackgroundFilterDesktop = (0, u.i7)(e);
            },
            a.fy.FREQUENT_USER_ACTION
        ),
        (0, u.rD)(e))
    ) {
        let t = await i.tn.post({
            url: d.ANM.VIDEO_FILTER_ASSET_LAST_USED(e.id),
            rejectWithError: !1
        });
        r.Z.dispatch({
            type: 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION',
            backgroundOption: t.body
        });
    } else
        r.Z.dispatch({
            type: 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION',
            backgroundOption: e
        });
}
function m(e) {
    s.Z.isSupported() &&
        r.Z.dispatch({
            type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS',
            settings: e
        });
}
function g() {
    s.Z.isSupported() && r.Z.dispatch({ type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START' });
}
function E() {
    r.Z.dispatch({ type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR' });
}
