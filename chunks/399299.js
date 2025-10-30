t.d(n, { default: () => X });
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
    p = t(592125),
    v = t(650774),
    f = t(430824),
    Z = t(131951),
    S = t(944486),
    N = t(594174),
    C = t(449224),
    b = t(626135),
    T = t(823379),
    P = t(63063),
    y = t(358085),
    I = t(653255),
    O = t(989941),
    E = t(618407),
    k = t(586290),
    A = t(233037),
    R = t(810013),
    M = t(537135),
    D = t(641115),
    U = t(143135),
    _ = t(70722),
    w = t(981631),
    z = t(388032),
    L = t(740071),
    G = t(79985);
function B(e) {
    let { selectedSource: n, selectSource: t, sourceChanged: r, onChangeSource: i } = e,
        s = (0, a.e7)([x.ZP, C.Z], () => ((0, y.isWindows)() ? (0, O.Z)(x.ZP, C.Z) : null)),
        d = (0, a.e7)([u.Z], () => ((null == s ? void 0 : s.id) != null ? u.Z.getApplication(s.id) : null)),
        m = (0, a.e7)([x.ZP], () => x.ZP.getRunningGames()),
        h = (0, a.Wu)([u.Z], () => m.map((e) => (null != e.id ? u.Z.getApplication(e.id) : null)).filter(T.lm), [m]),
        j = null;
    if ((null != n ? (j = n.name) : null != s && (j = s.name), null == j)) return null;
    let p = (0, U.Z)(s, n, m),
        v = r
            ? h.find((e) => {
                  let { id: n } = e;
                  return n === (null == p ? void 0 : p.id);
              })
            : d,
        f = null != n && n.id.startsWith("screen") ? o.pzj : o.GON;
    return (0, l.jsx)(o.gNt, {
        label: z.intl.string(z.t.TC7Evz),
        children: (0, l.jsxs)(M.Z, {
            children: [
                null != v
                    ? (0, l.jsx)(g.Z, {
                          game: v,
                          size: g.A.XSMALL,
                          className: L.selectedIcon,
                      })
                    : (0, l.jsx)(f, { className: L.selectedIcon }),
                (0, l.jsx)("span", {
                    className: L.ellipsisText,
                    children: j,
                }),
                t
                    ? (0, l.jsx)(c.zx, {
                          className: L.changeButton,
                          color: c.zx.Colors.PRIMARY,
                          size: c.zx.Sizes.SMALL,
                          onClick: i,
                          children: z.intl.string(z.t.GEgsA4),
                      })
                    : null,
            ],
        }),
    });
}
function W(e) {
    let { onChange: n, guildId: t } = e,
        r = (0, a.e7)([f.Z], () => f.Z.getGuild(t));
    return null == r
        ? (n(), null)
        : (0, l.jsx)("div", {
              className: G.modalContent,
              children: (0, l.jsx)(o.gNt, {
                  label: z.intl.string(z.t.WC3u3n),
                  children: (0, l.jsxs)(M.Z, {
                      children: [
                          (0, l.jsx)(h.Z, {
                              guild: r,
                              size: h.Z.Sizes.SMALLER,
                              className: L.selectedIcon,
                          }),
                          (0, l.jsx)("span", {
                              className: L.ellipsisText,
                              children: r.name,
                          }),
                          (0, l.jsx)(c.zx, {
                              className: L.changeButton,
                              color: c.zx.Colors.PRIMARY,
                              size: c.zx.Sizes.SMALL,
                              onClick: n,
                              children: z.intl.string(z.t.GEgsA4),
                          }),
                      ],
                  }),
              }),
          });
}
function F(e) {
    let { text: n } = e;
    return (0, l.jsxs)(m.Z, {
        align: m.Z.Align.CENTER,
        className: L.warning,
        children: [
            (0, l.jsx)(o.Mgn, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                className: L.warningIcon,
            }),
            (0, l.jsx)(o.Text, {
                color: "none",
                variant: "text-xs/normal",
                children: n,
            }),
        ],
    });
}
function V(e) {
    let { guildId: n } = e,
        t = (0, a.e7)([v.Z], () => {
            var e;
            return null != (e = v.Z.getMemberCount(n)) ? e : 0;
        }),
        i = j.eo.useSetting(),
        c = r.useCallback((e) => {
            j.eo.updateSetting(e), b.default.track(w.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: e });
        }, []);
    return t >= 2 && t <= _.tB
        ? (0, l.jsx)("div", {
              className: s()(G.modalContent, L.checkboxRow),
              children: (0, l.jsx)(o.Checkbox, {
                  checked: !!i,
                  onChange: c,
                  label: z.intl.string(z.t.Cef4t7),
              }),
          })
        : null;
}
function H(e) {
    let { enabled: n, onChange: t, screen: i } = e,
        c = r.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        u = (0, a.e7)([Z.Z], () => Z.Z.getUseSystemScreensharePicker() && (0, y.isLinux)());
    return (0, l.jsx)("div", {
        className: s()(G.modalContent, L.checkboxRow),
        children: (0, l.jsx)(o.Checkbox, {
            checked: n,
            onChange: c,
            label: i || u ? z.intl.string(z.t["5AdrtW"]) : z.intl.string(z.t.gRpbRF),
        }),
    });
}
function Y(e) {
    let { enabled: n, onChange: t } = e,
        i = r.useCallback(
            (e) => {
                t(e);
            },
            [t],
        );
    return (0, l.jsx)("div", {
        className: s()(G.modalContent, L.checkboxRow),
        children: (0, l.jsx)(o.Checkbox, {
            checked: n,
            onChange: i,
            label: z.intl.string(z.t.JE73jB),
        }),
    });
}
function X(e) {
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
            onClose: v,
            onChangeSelectedFPS: f,
            onChangeSelectedResolution: C,
            onChangeSelectedPreset: b,
            onChangeSelectedChannelId: T,
            onChangeSource: y,
            onChangeAudioDevice: O,
            onChangeGuild: M,
            onChangeSound: U,
            onChangePreviewDisabled: _,
        } = e,
        L = (0, a.e7)([S.Z, p.Z], () => p.Z.getChannel(S.Z.getVoiceChannelId())),
        G = (0, a.e7)([I.Z], () => I.Z.GPUDriversOutdated),
        X = (0, a.e7)([I.Z], () => I.Z.problematicGPUDriver),
        q = (0, a.e7)([N.default], () => N.default.getCurrentUser()),
        K = (0, E.Z)();
    null != n && n.id.startsWith("screen") && !Z.Z.supportsScreenSoundshare() && (K = z.intl.string(z.t["1b0Gm7"]));
    let J = !!(null == n ? void 0 : n.id.startsWith("camera")),
        Q = null != q && q.verified && !q.bot,
        $ = null != L && !(0, d.Yk)(L);
    return (0, l.jsxs)(r.Fragment, {
        children: [
            J
                ? (0, l.jsx)(k.Z, {
                      selectedSource: n,
                      onChangeVideoDeviceSource: y,
                      onChangeAudioDevice: O,
                  })
                : (0, l.jsxs)("div", {
                      children: [
                          (0, l.jsx)(B, {
                              selectSource: x,
                              sourceChanged: o,
                              onChangeSource: y,
                              selectedSource: n,
                          }),
                          null != K ? (0, l.jsx)(F, { text: K }) : null,
                          null != n && null == K
                              ? (0, l.jsx)(H, {
                                    enabled: h,
                                    onChange: U,
                                    screen: n.id.startsWith("screen"),
                                })
                              : null,
                      ],
                  }),
            g && null != u
                ? (0, l.jsx)(W, {
                      guildId: u,
                      onChange: M,
                  })
                : null,
            null != L
                ? (0, l.jsx)(R.Z, { channel: L })
                : (0, l.jsx)(A.Z, {
                      guildId: u,
                      selectedChannelId: i,
                      onChangeSelectedChannelId: T,
                  }),
            null != u && Q && $ ? (0, l.jsx)(V, { guildId: u }) : null,
            G ? (0, l.jsx)(F, { text: z.intl.string(z.t.q65tSw) }) : null,
            X
                ? (0, l.jsx)(F, {
                      text: z.intl.format(z.t.RrLvuT, {
                          helpCenterLink: P.Z.getArticleURL(w.BhN.NVIDIA_DRIVER_ISSUES),
                      }),
                  })
                : null,
            (0, l.jsx)(D.Z, {
                selectedPreset: s,
                selectedFPS: t,
                selectedResolution: c,
                targetGuildPremiumTier: m,
                onClose: v,
                onFPSChange: f,
                onResolutionChange: C,
                onPresetChange: b,
                captureDeviceSelected: J,
            }),
            (0, l.jsx)(Y, {
                enabled: j,
                onChange: _,
            }),
        ],
    });
}
