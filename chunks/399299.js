n.d(t, { Z: () => Q });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    a = n(755721),
    c = n(481060),
    d = n(812206),
    u = n(605436),
    f = n(600164),
    m = n(594190),
    h = n(925329),
    p = n(565138),
    g = n(695346),
    x = n(313789),
    _ = n(494620),
    v = n(518596),
    j = n(592125),
    b = n(650774),
    S = n(430824),
    C = n(131951),
    y = n(944486),
    O = n(594174),
    w = n(449224),
    Z = n(626135),
    I = n(823379),
    N = n(63063),
    P = n(358085),
    T = n(653255),
    E = n(989941),
    R = n(618407),
    A = n(586290),
    k = n(233037),
    M = n(810013),
    D = n(537135),
    L = n(641115),
    B = n(143135),
    G = n(70722),
    U = n(981631),
    W = n(526761),
    z = n(388032),
    F = n(734102),
    H = n(542257);
function V(e) {
    let { selectedSource: t, selectSource: n, sourceChanged: i, onChangeSource: l } = e,
        s = (0, o.e7)([m.ZP, w.Z], () => ((0, P.isWindows)() ? (0, E.Z)(m.ZP, w.Z) : null)),
        u = (0, o.e7)([d.Z], () => ((null == s ? void 0 : s.id) != null ? d.Z.getApplication(s.id) : null)),
        f = (0, o.e7)([m.ZP], () => m.ZP.getRunningGames()),
        p = (0, o.Wu)([d.Z], () => f.map((e) => (null != e.id ? d.Z.getApplication(e.id) : null)).filter(I.lm), [f]),
        g = null;
    if ((null != t ? (g = t.name) : null != s && (g = s.name), null == g)) return null;
    let x = (0, B.Z)(s, t, f),
        _ = i
            ? p.find((e) => {
                  let { id: t } = e;
                  return t === (null == x ? void 0 : x.id);
              })
            : u,
        v = null != t && t.id.startsWith("screen") ? c.pzj : c.GON;
    return (0, r.jsx)(c.xJW, {
        title: z.intl.string(z.t.TC7Ev7),
        className: H.modalContent,
        titleClassName: H.formItemTitleVerySlim,
        children: (0, r.jsxs)(D.Z, {
            children: [
                null != _
                    ? (0, r.jsx)(h.Z, {
                          game: _,
                          size: h.A.XSMALL,
                          className: F.selectedIcon,
                      })
                    : (0, r.jsx)(v, { className: F.selectedIcon }),
                (0, r.jsx)("span", {
                    className: F.ellipsisText,
                    children: g,
                }),
                n
                    ? (0, r.jsx)(a.zx, {
                          className: F.changeButton,
                          color: a.zx.Colors.PRIMARY,
                          size: a.zx.Sizes.SMALL,
                          onClick: l,
                          children: z.intl.string(z.t.GEgsAw),
                      })
                    : null,
            ],
        }),
    });
}
function Y(e) {
    let { onChange: t, guildId: n } = e,
        i = (0, o.e7)([S.Z], () => S.Z.getGuild(n));
    return null == i
        ? (t(), null)
        : (0, r.jsx)(c.xJW, {
              title: z.intl.string(z.t.WC3u3t),
              className: H.modalContent,
              titleClassName: H.formItemTitle,
              children: (0, r.jsxs)(D.Z, {
                  children: [
                      (0, r.jsx)(p.Z, {
                          guild: i,
                          size: p.Z.Sizes.SMALLER,
                          className: F.selectedIcon,
                      }),
                      (0, r.jsx)("span", {
                          className: F.ellipsisText,
                          children: i.name,
                      }),
                      (0, r.jsx)(a.zx, {
                          className: F.changeButton,
                          color: a.zx.Colors.PRIMARY,
                          size: a.zx.Sizes.SMALL,
                          onClick: t,
                          children: z.intl.string(z.t.GEgsAw),
                      }),
                  ],
              }),
          });
}
function J(e) {
    let { text: t } = e;
    return (0, r.jsxs)(f.Z, {
        align: f.Z.Align.CENTER,
        className: F.warning,
        children: [
            (0, r.jsx)(c.Mgn, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                className: F.warningIcon,
            }),
            (0, r.jsx)(c.Text, {
                color: "none",
                variant: "text-xs/normal",
                children: t,
            }),
        ],
    });
}
function X(e) {
    let { guildId: t } = e,
        n = (0, o.e7)([b.Z], () => {
            var e;
            return null != (e = b.Z.getMemberCount(t)) ? e : 0;
        }),
        l = g.eo.useSetting(),
        a = i.useCallback((e) => {
            g.eo.updateSetting(e), Z.default.track(U.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: e });
        }, []);
    return n >= 2 && n <= G.tB
        ? (0, r.jsx)("div", {
              className: s()(H.modalContent, F.checkboxRow),
              children: (0, r.jsx)(c.XZJ, {
                  checked: !!l,
                  onChange: a,
                  label: z.intl.string(z.t.Cef4t7),
              }),
          })
        : null;
}
function K(e) {
    let { enabled: t, onChange: n, screen: l } = e,
        a = i.useCallback(
            (e) => {
                n(e);
            },
            [n],
        ),
        d = (0, o.e7)([C.Z], () => C.Z.getUseSystemScreensharePicker() && (0, P.isLinux)());
    return (0, r.jsx)("div", {
        className: s()(H.modalContent, F.checkboxRow),
        children: (0, r.jsx)(c.XZJ, {
            checked: t,
            onChange: a,
            label: l || d ? z.intl.string(z.t["5Adrtb"]) : z.intl.string(z.t.gRpbRE),
        }),
    });
}
function q(e) {
    let { enabled: t, onChange: n } = e,
        l = i.useCallback(
            (e) => {
                n(e);
            },
            [n],
        );
    return (0, r.jsx)("div", {
        className: s()(H.modalContent, F.checkboxRow),
        children: (0, r.jsx)(c.XZJ, {
            checked: t,
            onChange: l,
            label: z.intl.string(z.t.JE73jI),
        }),
    });
}
function Q(e) {
    let {
            selectedSource: t,
            selectedFPS: n,
            selectedChannelId: l,
            selectedPreset: s,
            selectedResolution: a,
            sourceChanged: c,
            selectedGuildId: d,
            targetGuildPremiumTier: f,
            selectSource: m,
            selectGuild: h,
            sound: p,
            previewDisabled: g,
            onClose: b,
            onChangeSelectedFPS: S,
            onChangeSelectedResolution: w,
            onChangeSelectedPreset: Z,
            onChangeSelectedChannelId: I,
            onChangeSource: P,
            onChangeAudioDevice: E,
            onChangeGuild: D,
            onChangeSound: B,
            onChangePreviewDisabled: G,
        } = e,
        H = (0, o.e7)([y.Z, j.Z], () => j.Z.getChannel(y.Z.getVoiceChannelId())),
        Q = (0, o.e7)([T.Z], () => T.Z.GPUDriversOutdated),
        $ = (0, o.e7)([T.Z], () => T.Z.problematicGPUDriver),
        ee = (0, o.e7)([O.default], () => O.default.getCurrentUser()),
        et = (0, R.Z)();
    null != t && t.id.startsWith("screen") && !C.Z.supportsScreenSoundshare() && (et = z.intl.string(z.t["1b0Gm5"]));
    let en = !!(null == t ? void 0 : t.id.startsWith("camera")),
        er = null != ee && ee.verified && !ee.bot,
        ei = null != H && !(0, u.Yk)(H),
        el = !(0, o.e7)([C.Z], () => C.Z.getHardwareEncoding());
    return (0, r.jsxs)(i.Fragment, {
        children: [
            en
                ? (0, r.jsx)(A.Z, {
                      selectedSource: t,
                      onChangeVideoDeviceSource: P,
                      onChangeAudioDevice: E,
                  })
                : (0, r.jsxs)("div", {
                      children: [
                          (0, r.jsx)(V, {
                              selectSource: m,
                              sourceChanged: c,
                              onChangeSource: P,
                              selectedSource: t,
                          }),
                          null != et ? (0, r.jsx)(J, { text: et }) : null,
                          null != t && null == et
                              ? (0, r.jsx)(K, {
                                    enabled: p,
                                    onChange: B,
                                    screen: t.id.startsWith("screen"),
                                })
                              : null,
                      ],
                  }),
            h && null != d
                ? (0, r.jsx)(Y, {
                      guildId: d,
                      onChange: D,
                  })
                : null,
            null != H
                ? (0, r.jsx)(M.Z, { channel: H })
                : (0, r.jsx)(k.Z, {
                      guildId: d,
                      selectedChannelId: l,
                      onChangeSelectedChannelId: I,
                  }),
            null != d && er && ei ? (0, r.jsx)(X, { guildId: d }) : null,
            Q ? (0, r.jsx)(J, { text: z.intl.string(z.t.q65tS0) }) : null,
            $
                ? (0, r.jsx)(J, {
                      text: z.intl.format(z.t.RrLvub, {
                          helpCenterLink: N.Z.getArticleURL(U.BhN.NVIDIA_DRIVER_ISSUES),
                      }),
                  })
                : null,
            el &&
                (0, r.jsx)(_.Z, {
                    look: _.z.WARNING,
                    className: F.hardwareWarning,
                    children: z.intl.format(z.t.zCLXws, {
                        onClick: () => {
                            b(),
                                (0, v.openUserSettings)(x.n.VOICE_AND_VIDEO_PANEL, {
                                    section: U.oAB.VOICE,
                                    subsection: W.gP,
                                    scrollPosition: W.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION,
                                });
                        },
                    }),
                }),
            (0, r.jsx)(L.Z, {
                selectedPreset: s,
                selectedFPS: n,
                selectedResolution: a,
                targetGuildPremiumTier: f,
                onClose: b,
                onFPSChange: S,
                onResolutionChange: w,
                onPresetChange: Z,
                captureDeviceSelected: en,
            }),
            (0, r.jsx)(q, {
                enabled: g,
                onChange: G,
            }),
        ],
    });
}
