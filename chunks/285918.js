"use strict";
n.d(t, { pW: () => m, F9: () => h, Mj: () => A, HR: () => E, wq: () => g, _C: () => f, Oo: () => p });
var i = n(636537),
    r = n(228366),
    s = n(594061),
    a = n(969341),
    o = n(287809),
    l = n(329551),
    d = n(965162),
    _ = n(985018);
class u extends i.$F {
    constructor(e, t) {
        super(e, t, _.intl.string(_.t.Mt8yDB));
        const n = this.getFieldErrors("asset");
        null != n && n[0]?.code === "BINARY_TYPE_MAX_SIZE" && (this.message = _.intl.string(_.t.mrlScX));
    }
}
var c = n(652215);
async function E() {
    try {
        let e = await i.Bo.get({ url: c.Rsh.VIDEO_FILTER_ASSETS, rejectWithError: !1 });
        return r.h.dispatch({ type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS", assets: e.body }), e;
    } catch (e) {
        throw (r.h.dispatch({ type: "VIDEO_FILTER_ASSETS_FETCH_FAILURE", error: e }), e);
    }
}
async function h(e, t, n) {
    try {
        let s = await i.Bo.post({
            url: c.Rsh.VIDEO_FILTER_ASSETS,
            body: { type: t, asset: e, last_used: n?.toISOString() },
            rejectWithError: !1,
        });
        return r.h.dispatch({ type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS", videoFilterAsset: s.body }), s.body;
    } catch (e) {
        throw new u(e);
    }
}
async function m(e) {
    await i.Bo.del({ url: c.Rsh.VIDEO_FILTER_ASSET(e.id), rejectWithError: !1 });
    let t = (0, l.i)(o.default.getCurrentUser());
    (0, d.d1)(t) && t.id === e.id && f(null),
        r.h.dispatch({ type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS", videoFilterAsset: e });
}
async function f(e) {
    if (
        (await s.wc.updateAsync(
            "voiceAndVideo",
            (t) => {
                t.videoBackgroundFilterDesktop = (0, d.R4)(e);
            },
            s.Sb.FREQUENT_USER_ACTION,
        ),
        (0, d.d1)(e))
    ) {
        let t = await i.Bo.post({ url: c.Rsh.VIDEO_FILTER_ASSET_LAST_USED(e.id), rejectWithError: !1 });
        r.h.dispatch({ type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION", backgroundOption: t.body });
    } else r.h.dispatch({ type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION", backgroundOption: e });
}
function g(e) {
    a.Ay.isSupported() && r.h.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS", settings: e });
}
function p() {
    a.Ay.isSupported() && r.h.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START" });
}
function A() {
    r.h.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR" });
}
