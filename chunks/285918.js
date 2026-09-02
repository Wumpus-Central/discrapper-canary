"use strict";
n.d(t, { pW: () => h, F9: () => A, Mj: () => T, HR: () => E, wq: () => f, _C: () => I, Oo: () => p });
var i = n(636537),
    r = n(228366),
    a = n(594061),
    s = n(45630),
    l = n(287809),
    o = n(329551),
    d = n(965162),
    c = n(375708);
class u extends i.$F {
    constructor(e, t) {
        super(e, t, c.intl.string(c.t.Mt8yDB));
        const n = this.getFieldErrors("asset");
        null != n && n[0]?.code === "BINARY_TYPE_MAX_SIZE" && (this.message = c.intl.string(c.t.mrlScX));
    }
}
var _ = n(652215);
async function E() {
    try {
        let e = await i.Bo.get({ url: _.Rsh.VIDEO_FILTER_ASSETS, rejectWithError: !1 });
        return r.h.dispatch({ type: "VIDEO_FILTER_ASSETS_FETCH_SUCCESS", assets: e.body }), e;
    } catch (e) {
        throw (r.h.dispatch({ type: "VIDEO_FILTER_ASSETS_FETCH_FAILURE", error: e }), e);
    }
}
async function A(e, t, n) {
    try {
        let a = await i.Bo.post({
            url: _.Rsh.VIDEO_FILTER_ASSETS,
            body: { type: t, asset: e, last_used: n?.toISOString() },
            rejectWithError: !1,
        });
        return r.h.dispatch({ type: "VIDEO_FILTER_ASSET_UPLOAD_SUCCESS", videoFilterAsset: a.body }), a.body;
    } catch (e) {
        throw new u(e);
    }
}
async function h(e) {
    await i.Bo.del({ url: _.Rsh.VIDEO_FILTER_ASSET(e.id), rejectWithError: !1 });
    let t = (0, o.i)(l.default.getCurrentUser());
    (0, d.d1)(t) && t.id === e.id && I(null),
        r.h.dispatch({ type: "VIDEO_FILTER_ASSET_DELETE_SUCCESS", videoFilterAsset: e });
}
async function I(e) {
    if (
        (await a.wc.updateAsync(
            "voiceAndVideo",
            (t) => {
                t.videoBackgroundFilterDesktop = (0, d.R4)(e);
            },
            a.Sb.FREQUENT_USER_ACTION,
        ),
        (0, d.d1)(e))
    ) {
        let t = await i.Bo.post({ url: _.Rsh.VIDEO_FILTER_ASSET_LAST_USED(e.id), rejectWithError: !1 });
        r.h.dispatch({ type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION", backgroundOption: t.body });
    } else r.h.dispatch({ type: "VIDEO_SAVE_LAST_USED_BACKGROUND_OPTION", backgroundOption: e });
}
function f(e) {
    s.Ay.isSupported() && r.h.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS", settings: e });
}
function p() {
    s.Ay.isSupported() && r.h.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_START" });
}
function T() {
    r.h.dispatch({ type: "MEDIA_ENGINE_APPLY_MEDIA_FILTER_SETTINGS_ERROR" });
}
