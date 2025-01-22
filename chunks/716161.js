r.d(n, {
    Ff: function () {
        return h;
    },
    GS: function () {
        return E;
    },
    KH: function () {
        return _;
    },
    Nm: function () {
        return v;
    },
    RI: function () {
        return g;
    },
    Up: function () {
        return m;
    },
    XV: function () {
        return p;
    }
});
var i = r(544891),
    a = r(570140),
    o = r(675478),
    s = r(131951),
    l = r(594174),
    u = r(932724),
    c = r(647177),
    d = r(901757),
    f = r(981631);
async function p() {
    let e = await i.tn.get({
        url: f.ANM.VIDEO_FILTER_ASSETS,
        rejectWithError: !1
    });
    return (
        a.Z.dispatch({
            type: 'VIDEO_FILTER_ASSETS_FETCH_SUCCESS',
            assets: e.body
        }),
        e
    );
}
async function h(e, n, r) {
    try {
        let o = await i.tn.post({
            url: f.ANM.VIDEO_FILTER_ASSETS,
            body: {
                type: n,
                asset: e,
                last_used: null == r ? void 0 : r.toISOString()
            },
            rejectWithError: !1
        });
        return (
            a.Z.dispatch({
                type: 'VIDEO_FILTER_ASSET_UPLOAD_SUCCESS',
                videoFilterAsset: o.body
            }),
            o.body
        );
    } catch (e) {
        throw new d.Z(e);
    }
}
async function _(e) {
    await i.tn.del({
        url: f.ANM.VIDEO_FILTER_ASSET(e.id),
        rejectWithError: !1
    });
    let n = (0, u.P)(l.default.getCurrentUser());
    (0, c.rD)(n) && n.id === e.id && m(null),
        a.Z.dispatch({
            type: 'VIDEO_FILTER_ASSET_DELETE_SUCCESS',
            videoFilterAsset: e
        });
}
async function m(e) {
    if (
        (await o.hW.updateAsync(
            'voiceAndVideo',
            (n) => {
                n.videoBackgroundFilterDesktop = (0, c.i7)(e);
            },
            o.fy.FREQUENT_USER_ACTION
        ),
        (0, c.rD)(e))
    ) {
        let n = await i.tn.post({
            url: f.ANM.VIDEO_FILTER_ASSET_LAST_USED(e.id),
            rejectWithError: !1
        });
        a.Z.dispatch({
            type: 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION',
            backgroundOption: n.body
        });
    } else
        a.Z.dispatch({
            type: 'VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION',
            backgroundOption: e
        });
}
function g(e) {
    if (!!s.Z.isSupported())
        a.Z.dispatch({
            type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS',
            settings: e
        });
}
function E() {
    if (!!s.Z.isSupported()) a.Z.dispatch({ type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START' });
}
function v() {
    a.Z.dispatch({ type: 'MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR' });
}
