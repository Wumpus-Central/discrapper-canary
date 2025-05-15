n.d(t, {
    Ff: () => _,
    GS: () => g,
    KH: () => p,
    Nm: () => E,
    RI: () => m,
    Up: () => h,
    XV: () => f
});
var r = n(544891),
    i = n(570140),
    a = n(675478),
    o = n(131951),
    s = n(594174),
    l = n(932724),
    c = n(647177),
    u = n(901757),
    d = n(981631);
async function f() {
    try {
        let e = await r.tn.get({
            url: d.ANM.VIDEO_FILTER_ASSETS,
            rejectWithError: !1
        });
        return (
            i.Z.dispatch({
                type: 'VIDEO_FILTER_ASSETS_FETCH_SUCCESS',
                assets: e.body
            }),
            e
        );
    } catch (e) {
        throw (
            (i.Z.dispatch({
                type: 'VIDEO_FILTER_ASSETS_FETCH_FAILURE',
                error: e
            }),
            e)
        );
    }
}
async function _(e, t, n) {
    try {
        let a = await r.tn.post({
            url: d.ANM.VIDEO_FILTER_ASSETS,
            body: {
                type: t,
                asset: e,
                last_used: null == n ? void 0 : n.toISOString()
            },
            rejectWithError: !1
        });
        return (
            i.Z.dispatch({
                type: 'VIDEO_FILTER_ASSET_UPLOAD_SUCCESS',
                videoFilterAsset: a.body
            }),
            a.body
        );
    } catch (e) {
        throw new u.Z(e);
    }
}
async function p(e) {
    await r.tn.del({
        url: d.ANM.VIDEO_FILTER_ASSET(e.id),
        rejectWithError: !1
    });
    let t = (0, l.P)(s.default.getCurrentUser());
    (0, c.rD)(t) && t.id === e.id && h(null),
        i.Z.dispatch({
            type: 'VIDEO_FILTER_ASSET_DELETE_SUCCESS',
            videoFilterAsset: e
        });
}
async function h(e) {
    if (
        (await a.hW.updateAsync(
            'voiceAndVideo',
            (t) => {
                t.videoBackgroundFilterDesktop = (0, c.i7)(e);
            },
            a.fy.FREQUENT_USER_ACTION
        ),
        (0, c.rD)(e))
    ) {
        let t = await r.tn.post({
            url: d.ANM.VIDEO_FILTER_ASSET_LAST_USED(e.id),
            rejectWithError: !1
        });
        i.Z.dispatch({
            type: 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION',
            backgroundOption: t.body
        });
    } else
        i.Z.dispatch({
            type: 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION',
            backgroundOption: e
        });
}
function m(e) {
    o.Z.isSupported() &&
        i.Z.dispatch({
            type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS',
            settings: e
        });
}
function g() {
    o.Z.isSupported() && i.Z.dispatch({ type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START' });
}
function E() {
    i.Z.dispatch({ type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR' });
}
