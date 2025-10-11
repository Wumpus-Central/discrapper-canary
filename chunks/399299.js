t.d(n, { default: () => Q });
var l = t(951288),
    r = t(647438),
    i = t(120356),
    s = t.n(i),
    a = t(442837),
    c = t(755721),
    o = t(481060),
    u = t(812206),
    d = t(605436),
    m = t(600164),
    x = t(594190),
    g = t(925329),
    h = t(565138),
    j = t(695346),
    p = t(313789),
    v = t(494620),
    f = t(518596),
    Z = t(592125),
    N = t(650774),
    S = t(430824),
    C = t(131951),
    b = t(944486),
    P = t(594174),
    T = t(449224),
    I = t(626135),
    E = t(823379),
    O = t(63063),
    y = t(358085),
    A = t(653255),
    k = t(989941),
    R = t(618407),
    w = t(586290),
    D = t(233037),
    _ = t(810013),
    M = t(537135),
    U = t(641115),
    L = t(143135),
    z = t(70722),
    G = t(981631),
    W = t(526761),
    V = t(388032),
    B = t(734102),
    F = t(542257);
function H(e) {
    let { selectedSource: n, selectSource: t, sourceChanged: r, onChangeSource: i } = e,
        s = (0, a.e7)([x.ZP, T.Z], () => ((0, y.isWindows)() ? (0, k.Z)(x.ZP, T.Z) : null)),
        d = (0, a.e7)([u.Z], () => ((null == s ? void 0 : s.id) != null ? u.Z.getApplication(s.id) : null)),
        m = (0, a.e7)([x.ZP], () => x.ZP.getRunningGames()),
        h = (0, a.Wu)([u.Z], () => m.map((e) => (null != e.id ? u.Z.getApplication(e.id) : null)).filter(E.lm), [m]),
        j = null;
    if ((null != n ? (j = n.name) : null != s && (j = s.name), null == j)) return null;
    let p = (0, L.Z)(s, n, m),
        v = r
            ? h.find((e) => {
                  let { id: n } = e;
                  return n === (null == p ? void 0 : p.id);
              })
            : d,
        f = null != n && n.id.startsWith("screen") ? o.pzj : o.GON;
    return (0, l.jsx)(o.gNt, {
        label: V.intl.string(V.t.TC7Ev7),
        children: (0, l.jsxs)(M.Z, {
            children: [
                null != v
                    ? (0, l.jsx)(g.Z, {
                          game: v,
                          size: g.A.XSMALL,
                          className: B.selectedIcon,
                      })
                    : (0, l.jsx)(f, { className: B.selectedIcon }),
                (0, l.jsx)("span", {
                    className: B.ellipsisText,
                    children: j,
                }),
                t
                    ? (0, l.jsx)(c.zx, {
                          className: B.changeButton,
                          color: c.zx.Colors.PRIMARY,
                          size: c.zx.Sizes.SMALL,
                          onClick: i,
                          children: V.intl.string(V.t.GEgsAw),
                      })
                    : null,
            ],
        }),
    });
}
function Y(e) {
    let { onChange: n, guildId: t } = e,
        r = (0, a.e7)([S.Z], () => S.Z.getGuild(t));
    return null == r
        ? (n(), null)
        : (0, l.jsx)("div", {
              className: F.modalContent,
              children: (0, l.jsx)(o.gNt, {
                  label: V.intl.string(V.t.WC3u3t),
                  children: (0, l.jsxs)(M.Z, {
                      children: [
                          (0, l.jsx)(h.Z, {
                              guild: r,
                              size: h.Z.Sizes.SMALLER,
                              className: B.selectedIcon,
                          }),
                          (0, l.jsx)("span", {
                              className: B.ellipsisText,
                              children: r.name,
                          }),
                          (0, l.jsx)(c.zx, {
                              className: B.changeButton,
                              color: c.zx.Colors.PRIMARY,
                              size: c.zx.Sizes.SMALL,
                              onClick: n,
                              children: V.intl.string(V.t.GEgsAw),
                          }),
                      ],
                  }),
              }),
          });
}
function X(e) {
    let { text: n } = e;
    return (0, l.jsxs)(m.Z, {
        align: m.Z.Align.CENTER,
        className: B.warning,
        children: [
            (0, l.jsx)(o.Mgn, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                className: B.warningIcon,
            }),
            (0, l.jsx)(o.Text, {
                color: "none",
                variant: "text-xs/normal",
                children: n,
            }),
        ],
    });
}
function q(e) {
    let { guildId: n } = e,
        t = (0, a.e7)([N.Z], () => {
            var e;
            return null != (e = N.Z.getMemberCount(n)) ? e : 0;
        }),
        i = j.eo.useSetting(),
        c = r.useCallback((e) => {
            j.eo.updateSetting(e), I.default.track(G.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: e });
        }, []);
    return t >= 2 && t <= z.tB
        ? (0, l.jsx)("div", {
              className: s()(F.modalContent, B.checkboxRow),
              children: (0, l.jsx)(o.Checkbox, {
                  checked: !!i,
                  onChange: c,
                  label: V.intl.string(V.t.Cef4t7),
              }),
          })
        : null;
}
function K(e) {
    let { enabled: n, onChange: t, screen: i } = e,
        c = r.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        u = (0, a.e7)([C.Z], () => C.Z.getUseSystemScreensharePicker() && (0, y.isLinux)());
    return (0, l.jsx)("div", {
        className: s()(F.modalContent, B.checkboxRow),
        children: (0, l.jsx)(o.Checkbox, {
            checked: n,
            onChange: c,
            label: i || u ? V.intl.string(V.t["5Adrtb"]) : V.intl.string(V.t.gRpbRE),
        }),
    });
}
function J(e) {
    let { enabled: n, onChange: t } = e,
        i = r.useCallback(
            (e) => {
                t(e);
            },
            [t],
        );
    return (0, l.jsx)("div", {
        className: s()(F.modalContent, B.checkboxRow),
        children: (0, l.jsx)(o.Checkbox, {
            checked: n,
            onChange: i,
            label: V.intl.string(V.t.JE73jI),
        }),
    });
}
function Q(e) {
    let {
            selectedSource: n,
            selectedFPS: t,
            selectedChannelId: i,
            selectedPreset: s,
            selectedResolution: c,
            sourceChanged: o,
            selectedGuildId: u,
            targetGuildPremiumTier: m,
            selectSource: x,
            selectGuild: g,
            sound: h,
            previewDisabled: j,
            onClose: N,
            onChangeSelectedFPS: S,
            onChangeSelectedResolution: T,
            onChangeSelectedPreset: I,
            onChangeSelectedChannelId: E,
            onChangeSource: y,
            onChangeAudioDevice: k,
            onChangeGuild: M,
            onChangeSound: L,
            onChangePreviewDisabled: z,
        } = e,
        F = (0, a.e7)([b.Z, Z.Z], () => Z.Z.getChannel(b.Z.getVoiceChannelId())),
        Q = (0, a.e7)([A.Z], () => A.Z.GPUDriversOutdated),
        $ = (0, a.e7)([A.Z], () => A.Z.problematicGPUDriver),
        ee = (0, a.e7)([P.default], () => P.default.getCurrentUser()),
        en = (0, R.Z)();
    null != n && n.id.startsWith("screen") && !C.Z.supportsScreenSoundshare() && (en = V.intl.string(V.t["1b0Gm5"]));
    let et = !!(null == n ? void 0 : n.id.startsWith("camera")),
        el = null != ee && ee.verified && !ee.bot,
        er = null != F && !(0, d.Yk)(F),
        ei = !(0, a.e7)([C.Z], () => C.Z.getHardwareEncoding());
    return (0, l.jsxs)(r.Fragment, {
        children: [
            et
                ? (0, l.jsx)(w.Z, {
                      selectedSource: n,
                      onChangeVideoDeviceSource: y,
                      onChangeAudioDevice: k,
                  })
                : (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(H, {
                              selectSource: x,
                              sourceChanged: o,
                              onChangeSource: y,
                              selectedSource: n,
                          }),
                          null != en ? (0, l.jsx)(X, { text: en }) : null,
                          null != n && null == en
                              ? (0, l.jsx)(K, {
                                    enabled: h,
                                    onChange: L,
                                    screen: n.id.startsWith("screen"),
                                })
                              : null,
                      ],
                  }),
            g && null != u
                ? (0, l.jsx)(Y, {
                      guildId: u,
                      onChange: M,
                  })
                : null,
            null != F
                ? (0, l.jsx)(_.Z, { channel: F })
                : (0, l.jsx)(D.Z, {
                      guildId: u,
                      selectedChannelId: i,
                      onChangeSelectedChannelId: E,
                  }),
            null != u && el && er ? (0, l.jsx)(q, { guildId: u }) : null,
            Q ? (0, l.jsx)(X, { text: V.intl.string(V.t.q65tS0) }) : null,
            $
                ? (0, l.jsx)(X, {
                      text: V.intl.format(V.t.RrLvub, {
                          helpCenterLink: O.Z.getArticleURL(G.BhN.NVIDIA_DRIVER_ISSUES),
                      }),
                  })
                : null,
            ei &&
                (0, l.jsx)(v.Z, {
                    look: v.z.WARNING,
                    className: B.hardwareWarning,
                    children: V.intl.format(V.t.zCLXws, {
                        onClick: () => {
                            N(),
                                (0, f.openUserSettings)(p.n.VOICE_AND_VIDEO_PANEL, {
                                    section: G.oAB.VOICE,
                                    subsection: W.gP,
                                    scrollPosition: W.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION,
                                });
                        },
                    }),
                }),
            (0, l.jsx)(U.Z, {
                selectedPreset: s,
                selectedFPS: t,
                selectedResolution: c,
                targetGuildPremiumTier: m,
                onClose: N,
                onFPSChange: S,
                onResolutionChange: T,
                onPresetChange: I,
                captureDeviceSelected: et,
            }),
            (0, l.jsx)(J, {
                enabled: j,
                onChange: z,
            }),
        ],
    });
}
