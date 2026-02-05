s.d(t, { Ay: () => T });
var r = s(627968);
s(64700);
var i = s(141931),
    n = s(311907),
    l = s(397927),
    a = s(793574),
    o = s(48435),
    c = s(734057),
    d = s(498642),
    u = s(309010),
    f = s(287809),
    h = s(258585),
    x = s(874124),
    p = s(688465),
    m = s(461430),
    _ = s(56439),
    g = s(997248),
    j = s(213279),
    v = s(420659),
    A = s(502075),
    S = s(753070),
    C = s(731854),
    y = s(191850),
    b = s(985018),
    w = s(269608);
let I = [
        {
            value: S.jQ.PRESET_AUTO,
            canUse: (e) => e !== i.fS.CAMERA && (0, h.eO)({ location: "StreamOptionsMenu" }).allowAutoQuality,
        },
        { value: S.jQ.PRESET_VIDEO, canUse: (e) => !0 },
        { value: S.jQ.PRESET_DOCUMENTS, canUse: (e) => e !== i.fS.CAMERA },
        { value: S.jQ.PRESET_CUSTOM, canUse: (e) => !0 },
    ],
    E = [
        { value: S.on.RESOLUTION_720, canUse: (e) => !0 },
        { value: S.on.RESOLUTION_1080, canUse: (e) => !0 },
        { value: S.on.RESOLUTION_1440, canUse: (e) => !0 },
        { value: S.on.RESOLUTION_SOURCE, canUse: (e) => e !== i.fS.CAMERA },
    ],
    N = [S.kn.FPS_15, S.kn.FPS_30, S.kn.FPS_60];
function O(e) {
    let { label: t } = e;
    return (0, r.jsxs)("div", {
        className: w.g,
        children: [t, (0, r.jsx)(l.tvc, { size: "xs", color: l.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK })],
    });
}
function T(e) {
    let { onClose: t, onSelect: s } = e,
        [
            {
                audioSourceId: h,
                notifyFriends: w,
                hidePreview: T,
                muteStreamAudio: R,
                preset: M,
                resolution: U,
                fps: G,
                sourceType: L,
            },
            D,
        ] = (0, p.tS)(),
        P = (0, n.bG)([u.A], () => u.A.getVoiceChannelId()),
        F = (0, n.bG)([c.A, d.A], () => {
            if (null == P) return !0;
            let e = c.A.getChannel(P),
                t = e?.guild_id;
            if (null == t) return !0;
            let s = d.A.getMemberCount(t);
            return null == s || (s > A.oe && s <= A.G1);
        }, [P]),
        k = (0, g.A)(),
        [H, B] = (0, v.A)(S.jQ.PRESET_VIDEO) ?? [S.on.RESOLUTION_720, S.kn.FPS_30],
        [W, Z] = (0, v.A)(S.jQ.PRESET_DOCUMENTS) ?? [S.on.RESOLUTION_SOURCE, S.kn.FPS_15],
        V = (0, o.H)({
            deviceType: C.oh.AUDIO_INPUT,
            selectedDeviceId: h,
            analyticsLocations: [a.A.GO_LIVE_MODAL_SETTINGS_SELECTION],
            asSubmenu: !0,
            onDeviceSelect: (e) => (D({ type: "set_audio_source", audioSourceId: e }), !1),
            menuItemOverrideProps: {
                id: "device-audio-input",
                label: b.intl.string(y.default.YSdHVw),
                subtextLineClamp: 1,
            },
            computeMenuRadioItemOverrideProps: (e) => ({
                group: "device-audio-input-group",
                id: `device-audio-input-${e}`,
            }),
        });
    return (0, r.jsxs)(l.W1t, {
        "data-menu-needs-migration": !0,
        "aria-label": b.intl.string(b.t["+1H47t"]),
        navId: "stream-options",
        onClose: t,
        onSelect: s,
        children: [
            (0, r.jsx)(l.rXV, {
                label: b.intl.string(y.default.P2pjmy),
                children: I.filter((e) => {
                    let { canUse: t } = e;
                    return t(L);
                }).map((e) => {
                    let { value: t } = e;
                    return (0, r.jsx)(
                        l.iDA,
                        {
                            group: "preset",
                            id: `stream-preset-${t}`,
                            checked: M === t,
                            label: (0, m.K)(t),
                            subtext: (function (e) {
                                switch (e) {
                                    case S.jQ.PRESET_VIDEO:
                                        return b.intl.format(y.default.G5O1Mz, {
                                            resolution: (0, _.b)(H),
                                            frameRate: B,
                                        });
                                    case S.jQ.PRESET_DOCUMENTS:
                                        return b.intl.format(y.default["8tcFL5"], {
                                            resolution: (0, _.b)(W),
                                            frameRate: Z,
                                        });
                                    case S.jQ.PRESET_AUTO:
                                        return b.intl.string(y.default.m4jtlc);
                                    case S.jQ.PRESET_CUSTOM:
                                        return;
                                    default:
                                        throw Error(`No case implemented for ${e}`);
                                }
                            })(t),
                            action: () => D({ type: "set_preset", preset: t }),
                        },
                        t,
                    );
                }),
            }),
            M === S.jQ.PRESET_CUSTOM &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.bXX, {}),
                        (0, r.jsx)(l.Drp, {
                            id: "resolution",
                            label: b.intl.string(y.default.IG5n0X),
                            children: E.filter((e) => {
                                let { canUse: t } = e;
                                return t(L);
                            }).map((e) => {
                                let { value: s } = e;
                                return (0, r.jsx)(
                                    l.iDA,
                                    {
                                        group: "resolution",
                                        id: `stream-option-resolution-${s}`,
                                        checked: U === s,
                                        void_label:
                                            s !== S.on.RESOLUTION_720
                                                ? (0, r.jsx)(O, { label: (0, _.b)(s) })
                                                : (0, _.b)(s),
                                        action: () =>
                                            (function (e) {
                                                if (!(0, x.A)(M, e, G, f.default.getCurrentUser(), k))
                                                    return (
                                                        t(),
                                                        (0, j.p)({
                                                            analyticsLocation: a.A.GO_LIVE_MODAL_SETTINGS_SELECTION,
                                                        })
                                                    );
                                                D({ type: "set_resolution", resolution: e });
                                            })(s),
                                    },
                                    s,
                                );
                            }),
                        }),
                        (0, r.jsx)(l.Drp, {
                            id: "frame-rate",
                            label: b.intl.string(b.t.SkkeIt),
                            children: N.map((e) =>
                                (0, r.jsx)(
                                    l.iDA,
                                    {
                                        group: "frame-rate",
                                        id: `stream-option-frame-rate-${e}`,
                                        checked: G === e,
                                        void_label: e === S.kn.FPS_60 ? (0, r.jsx)(O, { label: `${e}fps` }) : `${e}fps`,
                                        action: () =>
                                            (function (e) {
                                                if (!(0, x.A)(M, U, e, f.default.getCurrentUser(), k))
                                                    return (
                                                        t(),
                                                        (0, j.p)({
                                                            analyticsLocation: a.A.GO_LIVE_MODAL_SETTINGS_SELECTION,
                                                        })
                                                    );
                                                D({ type: "set_fps", fps: e });
                                            })(e),
                                    },
                                    e,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, r.jsx)(l.bXX, {}),
            (0, r.jsx)(l.sLh, {
                id: "stream-option-mute",
                checked: R,
                label: b.intl.string(y.default["b0+Irf"]),
                action: () => D({ type: "set_mute_audio", value: !R }),
            }),
            L === i.fS.CAMERA && V,
            (0, r.jsxs)(l.Drp, {
                id: "advanced-items",
                label: b.intl.string(y.default.eYyK1v),
                children: [
                    (0, r.jsx)(l.sLh, {
                        id: "stream-option-share-preview",
                        checked: T,
                        label: b.intl.string(y.default.H3QjqX),
                        action: () => D({ type: "set_hide_preview", hidePreview: !T }),
                    }),
                    F &&
                        (0, r.jsx)(l.sLh, {
                            id: "stream-option-notify",
                            checked: w,
                            label: b.intl.string(y.default.SiHtXy),
                            action: () => D({ type: "set_notify_friends", value: !w }),
                        }),
                ],
            }),
        ],
    });
}
