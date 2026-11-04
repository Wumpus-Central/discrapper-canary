var i = n(945810),
    r = n(682901);
let a = "NitroFileUploadRollout",
    s = (0, i.mj)({
        name: "2026-09-nitro-file-upload-rollout",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    l = (0, i.mj)({
        name: "2026-09-non-nitro-file-upload-marketing",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    });
function o() {
    let { location: e, autoTrackExposure: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return s.getConfig({ location: e ?? a }, { autoTrackExposure: t });
}
n.d(
    t,
    {},
    {
        J6: o,
        M6: function (e) {
            let { legacyCopy: t, rolloutCopy: n } = e;
            return o().enabled ? n : t;
        },
        ew: function () {
            let { location: e, autoTrackExposure: t } =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return o({ location: e, autoTrackExposure: t }).enabled ? r.gb : r.f3;
        },
        rX: function (e) {
            return s.useConfig({ location: e ?? a }).enabled;
        },
        tb: function (e) {
            return l.useConfig({ location: e }).enabled;
        },
    },
);
