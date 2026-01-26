r.d(t, {
    Ay: () => C,
}),
    r(896048),
    r(65821);
var n = r(627968);
r(64700);
var i = r(141931),
    l = r(397927),
    s = r(793574),
    a = r(48435),
    o = r(287809),
    c = r(258585),
    d = r(842179),
    u = r(874124),
    f = r(688465),
    h = r(461430),
    p = r(56439),
    x = r(997248),
    m = r(213279),
    j = r(420659),
    g = r(753070),
    _ = r(731854),
    v = r(191850),
    b = r(985018),
    y = r(269608);
let S = [
        {
            value: g.jQ.PRESET_AUTO,
            canUse: (e) =>
                e !== i.fS.CAMERA &&
                (0, c.eO)({
                    location: "StreamOptionsMenu",
                }).allowAutoQuality,
        },
        {
            value: g.jQ.PRESET_VIDEO,
            canUse: (e) => !0,
        },
        {
            value: g.jQ.PRESET_DOCUMENTS,
            canUse: (e) => e !== i.fS.CAMERA,
        },
        {
            value: g.jQ.PRESET_CUSTOM,
            canUse: (e) => !0,
        },
    ],
    O = [
        {
            value: g.on.RESOLUTION_720,
            canUse: (e) => !0,
        },
        {
            value: g.on.RESOLUTION_1080,
            canUse: (e) => !0,
        },
        {
            value: g.on.RESOLUTION_1440,
            canUse: (e) => !0,
        },
        {
            value: g.on.RESOLUTION_SOURCE,
            canUse: (e) => e !== i.fS.CAMERA,
        },
    ],
    A = [g.kn.FPS_15, g.kn.FPS_30, g.kn.FPS_60];

function w(e) {
    let { label: t } = e;
    return (0, n.jsxs)("div", {
        className: y.g,
        children: [
            t,
            (0, n.jsx)(l.tvc, {
                size: "xs",
                color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
            }),
        ],
    });
}

function C(e) {
    var t, r;
    let { onClose: c, onSelect: y } = e,
        [
            {
                audioSourceId: C,
                notifyFriends: E,
                hidePreview: I,
                muteStreamAudio: N,
                preset: T,
                resolution: R,
                fps: P,
                sourceType: M,
                selectedChannel: D,
            },
            U,
        ] = (0, f.tS)(),
        G = !(0, d.LQ)(D, "StreamOptionsMenu"),
        L = (0, x.A)(),
        [k, F] = null != (t = (0, j.A)(g.jQ.PRESET_VIDEO)) ? t : [g.on.RESOLUTION_720, g.kn.FPS_30],
        [H, B] = null != (r = (0, j.A)(g.jQ.PRESET_DOCUMENTS)) ? r : [g.on.RESOLUTION_SOURCE, g.kn.FPS_15],
        W = (0, a.H)({
            deviceType: _.oh.AUDIO_INPUT,
            selectedDeviceId: C,
            analyticsLocations: [s.A.GO_LIVE_MODAL_SETTINGS_SELECTION],
            asSubmenu: !0,
            onDeviceSelect: (e) => (
                U({
                    type: "set_audio_source",
                    audioSourceId: e,
                }),
                !1
            ),
            menuItemOverrideProps: {
                id: "device-audio-input",
                label: b.intl.string(v.default.YSdHVw),
                subtextLineClamp: 1,
            },
            computeMenuRadioItemOverrideProps: (e) => ({
                group: "device-audio-input-group",
                id: "device-audio-input-".concat(e),
            }),
        });
    return (0, n.jsxs)(l.W1t, {
        "data-menu-needs-migration": !0,
        "aria-label": b.intl.string(b.t["+1H47t"]),
        navId: "stream-options",
        onClose: c,
        onSelect: y,
        children: [
            (0, n.jsx)(l.rXV, {
                label: b.intl.string(v.default.P2pjmy),
                children: S.filter((e) => {
                    let { canUse: t } = e;
                    return t(M);
                }).map((e) => {
                    let { value: t } = e;
                    return (0, n.jsx)(
                        l.iDA,
                        {
                            group: "preset",
                            id: "stream-preset-".concat(t),
                            checked: T === t,
                            label: (0, h.K)(t),
                            subtext: (function (e) {
                                switch (e) {
                                    case g.jQ.PRESET_VIDEO:
                                        return b.intl.format(v.default.G5O1Mz, {
                                            resolution: (0, p.b)(k),
                                            frameRate: F,
                                        });
                                    case g.jQ.PRESET_DOCUMENTS:
                                        return b.intl.format(v.default["8tcFL5"], {
                                            resolution: (0, p.b)(H),
                                            frameRate: B,
                                        });
                                    case g.jQ.PRESET_AUTO:
                                        return b.intl.string(v.default.m4jtlc);
                                    case g.jQ.PRESET_CUSTOM:
                                        return;
                                    default:
                                        throw Error("No case implemented for ".concat(e));
                                }
                            })(t),
                            action: () =>
                                U({
                                    type: "set_preset",
                                    preset: t,
                                }),
                        },
                        t,
                    );
                }),
            }),
            T === g.jQ.PRESET_CUSTOM &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(l.bXX, {}),
                        (0, n.jsx)(l.Drp, {
                            id: "resolution",
                            label: b.intl.string(v.default.IG5n0X),
                            children: O.filter((e) => {
                                let { canUse: t } = e;
                                return t(M);
                            }).map((e) => {
                                let { value: t } = e;
                                return (0, n.jsx)(
                                    l.iDA,
                                    {
                                        group: "resolution",
                                        id: "stream-option-resolution-".concat(t),
                                        checked: R === t,
                                        void_label:
                                            t !== g.on.RESOLUTION_720
                                                ? (0, n.jsx)(w, {
                                                      label: (0, p.b)(t),
                                                  })
                                                : (0, p.b)(t),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, u.A)(T, e, P, o.default.getCurrentUser(), L))
                                                    return (
                                                        c(),
                                                        (0, m.p)({
                                                            analyticsLocation: s.A.GO_LIVE_MODAL_SETTINGS_SELECTION,
                                                        })
                                                    );
                                                U({
                                                    type: "set_resolution",
                                                    resolution: e,
                                                });
                                            })(t),
                                    },
                                    t,
                                );
                            }),
                        }),
                        (0, n.jsx)(l.Drp, {
                            id: "frame-rate",
                            label: b.intl.string(b.t.SkkeIt),
                            children: A.map((e) =>
                                (0, n.jsx)(
                                    l.iDA,
                                    {
                                        group: "frame-rate",
                                        id: "stream-option-frame-rate-".concat(e),
                                        checked: P === e,
                                        void_label:
                                            e === g.kn.FPS_60
                                                ? (0, n.jsx)(w, {
                                                      label: "".concat(e, "fps"),
                                                  })
                                                : "".concat(e, "fps"),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, u.A)(T, R, e, o.default.getCurrentUser(), L))
                                                    return (
                                                        c(),
                                                        (0, m.p)({
                                                            analyticsLocation: s.A.GO_LIVE_MODAL_SETTINGS_SELECTION,
                                                        })
                                                    );
                                                U({
                                                    type: "set_fps",
                                                    fps: e,
                                                });
                                            })(e),
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, n.jsx)(l.bXX, {}),
            (0, n.jsx)(l.sLh, {
                id: "stream-option-mute",
                checked: N,
                label: b.intl.string(v.default["b0+Irf"]),
                action: () =>
                    U({
                        type: "set_mute_audio",
                        value: !N,
                    }),
            }),
            M === i.fS.CAMERA && W,
            (0, n.jsxs)(l.Drp, {
                id: "advanced-items",
                label: b.intl.string(v.default.eYyK1v),
                children: [
                    (0, n.jsx)(l.sLh, {
                        id: "stream-option-share-preview",
                        checked: I,
                        label: b.intl.string(v.default.H3QjqX),
                        action: () =>
                            U({
                                type: "set_hide_preview",
                                hidePreview: !I,
                            }),
                    }),
                    G &&
                        (0, n.jsx)(l.sLh, {
                            id: "stream-option-notify",
                            checked: E,
                            label: b.intl.string(v.default.SiHtXy),
                            action: () =>
                                U({
                                    type: "set_notify_friends",
                                    value: !E,
                                }),
                        }),
                ],
            }),
        ],
    });
}
