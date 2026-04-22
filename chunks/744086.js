s.d(t, { Ay: () => D });
var i = s(627968);
s(64700);
var r = s(141931),
    n = s(311907),
    l = s(403581),
    a = s(827734),
    o = s(861672),
    c = s(477782),
    d = s(793574),
    u = s(270816),
    f = s(734057),
    h = s(498642),
    x = s(309010),
    p = s(287809),
    _ = s(258585),
    m = s(874124),
    g = s(688465),
    j = s(461430),
    v = s(56439),
    A = s(997248),
    C = s(213279),
    S = s(420659),
    y = s(502075),
    b = s(753070),
    w = s(731854),
    E = s(710787),
    I = s(985018),
    N = s(396989);
let O = [
        {
            value: b.jQ.PRESET_AUTO,
            canUse: (e) => e !== r.fS.CAMERA && (0, _.eO)({ location: "StreamOptionsMenu" }).allowAutoQuality,
        },
        { value: b.jQ.PRESET_VIDEO, canUse: (e) => !0 },
        { value: b.jQ.PRESET_DOCUMENTS, canUse: (e) => e !== r.fS.CAMERA },
        { value: b.jQ.PRESET_CUSTOM, canUse: (e) => !0 },
    ],
    R = [
        { value: b.on.RESOLUTION_720, canUse: (e) => !0 },
        { value: b.on.RESOLUTION_1080, canUse: (e) => !0 },
        { value: b.on.RESOLUTION_1440, canUse: (e) => !0 },
        { value: b.on.RESOLUTION_SOURCE, canUse: (e) => e !== r.fS.CAMERA },
    ],
    T = [b.kn.FPS_15, b.kn.FPS_30, b.kn.FPS_60];
function M(e) {
    let { label: t } = e;
    return (0, i.jsxs)("div", {
        className: N.g,
        children: [t, (0, i.jsx)(l.t, { size: "xs", color: a.A.unsafe_rawColors.GUILD_BOOSTING_PINK })],
    });
}
function D(e) {
    let { onClose: t, onSelect: s } = e,
        [
            {
                audioSourceId: l,
                notifyFriends: a,
                hidePreview: _,
                muteStreamAudio: N,
                preset: D,
                resolution: G,
                fps: U,
                sourceType: L,
            },
            P,
        ] = (0, g.tS)(),
        k = (0, n.bG)([x.A], () => x.A.getVoiceChannelId()),
        F = (0, n.bG)([f.A, h.A], () => {
            if (null == k) return !0;
            let e = f.A.getChannel(k),
                t = e?.guild_id;
            if (null == t) return !0;
            let s = h.A.getMemberCount(t);
            return null == s || (s > y.oe && s <= y.G1);
        }, [k]),
        H = (0, A.A)(),
        [B, W] = (0, S.A)(b.jQ.PRESET_VIDEO) ?? [b.on.RESOLUTION_720, b.kn.FPS_30],
        [Z, V] = (0, S.A)(b.jQ.PRESET_DOCUMENTS) ?? [b.on.RESOLUTION_SOURCE, b.kn.FPS_15],
        z = (0, u.H)({
            deviceType: w.oh.AUDIO_INPUT,
            selectedDeviceId: l,
            analyticsLocations: [d.A.GO_LIVE_MODAL_SETTINGS_SELECTION],
            asSubmenu: !0,
            onDeviceSelect: (e) => (P({ type: "set_audio_source", audioSourceId: e }), !1),
            menuItemOverrideProps: {
                id: "device-audio-input",
                label: I.intl.string(E.default.YSdHVw),
                subtextLineClamp: 1,
            },
            computeMenuRadioItemOverrideProps: (e) => ({
                group: "device-audio-input-group",
                id: `device-audio-input-${e}`,
            }),
        });
    return (0, i.jsxs)(o.W, {
        "data-menu-needs-migration": !0,
        "aria-label": I.intl.string(I.t["+1H47t"]),
        navId: "stream-options",
        onClose: t,
        onSelect: s,
        children: [
            (0, i.jsx)(c.rX, {
                label: I.intl.string(E.default.P2pjmy),
                children: O.filter((e) => {
                    let { canUse: t } = e;
                    return t(L);
                }).map((e) => {
                    let { value: t } = e;
                    return (0, i.jsx)(
                        c.iD,
                        {
                            group: "preset",
                            id: `stream-preset-${t}`,
                            checked: D === t,
                            label: (0, j.K)(t),
                            subtext: (function (e) {
                                switch (e) {
                                    case b.jQ.PRESET_VIDEO:
                                        return I.intl.format(E.default.G5O1Mz, {
                                            resolution: (0, v.b)(B),
                                            frameRate: W,
                                        });
                                    case b.jQ.PRESET_DOCUMENTS:
                                        return I.intl.format(E.default["8tcFL5"], {
                                            resolution: (0, v.b)(Z),
                                            frameRate: V,
                                        });
                                    case b.jQ.PRESET_AUTO:
                                        return I.intl.string(E.default.m4jtlc);
                                    case b.jQ.PRESET_CUSTOM:
                                        return;
                                    default:
                                        throw Error(`No case implemented for ${e}`);
                                }
                            })(t),
                            action: () => P({ type: "set_preset", preset: t }),
                        },
                        t,
                    );
                }),
            }),
            D === b.jQ.PRESET_CUSTOM &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(c.bX, {}),
                        (0, i.jsx)(c.Dr, {
                            id: "resolution",
                            label: I.intl.string(E.default.IG5n0X),
                            children: R.filter((e) => {
                                let { canUse: t } = e;
                                return t(L);
                            }).map((e) => {
                                let { value: s } = e;
                                return (0, i.jsx)(
                                    c.iD,
                                    {
                                        group: "resolution",
                                        id: `stream-option-resolution-${s}`,
                                        checked: G === s,
                                        void_label:
                                            s !== b.on.RESOLUTION_720
                                                ? (0, i.jsx)(M, { label: (0, v.b)(s) })
                                                : (0, v.b)(s),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, m.A)(D, e, U, p.default.getCurrentUser(), H))
                                                    return (
                                                        t(),
                                                        (0, C.p)({
                                                            analyticsLocation: d.A.GO_LIVE_MODAL_SETTINGS_SELECTION,
                                                        })
                                                    );
                                                P({ type: "set_resolution", resolution: e });
                                            })(s),
                                    },
                                    s,
                                );
                            }),
                        }),
                        (0, i.jsx)(c.Dr, {
                            id: "frame-rate",
                            label: I.intl.string(I.t.SkkeIt),
                            children: T.map((e) =>
                                (0, i.jsx)(
                                    c.iD,
                                    {
                                        group: "frame-rate",
                                        id: `stream-option-frame-rate-${e}`,
                                        checked: U === e,
                                        void_label: e === b.kn.FPS_60 ? (0, i.jsx)(M, { label: `${e}fps` }) : `${e}fps`,
                                        action: () =>
                                            (function (e) {
                                                if (!(0, m.A)(D, G, e, p.default.getCurrentUser(), H))
                                                    return (
                                                        t(),
                                                        (0, C.p)({
                                                            analyticsLocation: d.A.GO_LIVE_MODAL_SETTINGS_SELECTION,
                                                        })
                                                    );
                                                P({ type: "set_fps", fps: e });
                                            })(e),
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, i.jsx)(c.bX, {}),
            (0, i.jsx)(c.sL, {
                id: "stream-option-mute",
                checked: N,
                label: I.intl.string(E.default["b0+Irf"]),
                action: () => P({ type: "set_mute_audio", value: !N }),
            }),
            L === r.fS.CAMERA && z,
            (0, i.jsxs)(c.Dr, {
                id: "advanced-items",
                label: I.intl.string(E.default.eYyK1v),
                children: [
                    (0, i.jsx)(c.sL, {
                        id: "stream-option-share-preview",
                        checked: _,
                        label: I.intl.string(E.default.H3QjqX),
                        action: () => P({ type: "set_hide_preview", hidePreview: !_ }),
                    }),
                    F &&
                        (0, i.jsx)(c.sL, {
                            id: "stream-option-notify",
                            checked: a,
                            label: I.intl.string(E.default.SiHtXy),
                            action: () => P({ type: "set_notify_friends", value: !a }),
                        }),
                ],
            }),
        ],
    });
}
