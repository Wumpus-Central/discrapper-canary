t.d(n, { default: () => X });
var l = t(54381),
    r = t(473749),
    i = t(120356),
    s = t.n(i),
    a = t(442837),
    c = t(481060),
    o = t(812206),
    u = t(605436),
    d = t(600164),
    m = t(594190),
    g = t(925329),
    x = t(565138),
    h = t(695346),
    j = t(592125),
    v = t(650774),
    p = t(430824),
    f = t(131951),
    Z = t(944486),
    N = t(594174),
    S = t(449224),
    b = t(626135),
    C = t(823379),
    P = t(63063),
    T = t(358085),
    y = t(653255),
    O = t(989941),
    E = t(618407),
    I = t(586290),
    k = t(233037),
    A = t(810013),
    R = t(537135),
    D = t(641115),
    U = t(143135),
    _ = t(70722),
    w = t(981631),
    M = t(388032),
    L = t(740071),
    B = t(79985);
function G(e) {
    let { selectedSource: n, selectSource: t, sourceChanged: r, onChangeSource: i } = e,
        s = (0, a.e7)([m.ZP, S.Z], () => ((0, T.isWindows)() ? (0, O.Z)(m.ZP, S.Z) : null)),
        u = (0, a.e7)([o.Z], () => ((null == s ? void 0 : s.id) != null ? o.Z.getApplication(s.id) : null)),
        d = (0, a.e7)([m.ZP], () => m.ZP.getRunningGames()),
        x = (0, a.Wu)([o.Z], () => d.map((e) => (null != e.id ? o.Z.getApplication(e.id) : null)).filter(C.lm), [d]),
        h = null;
    if ((null != n ? (h = n.name) : null != s && (h = s.name), null == h)) return null;
    let j = (0, U.Z)(s, n, d),
        v = r
            ? x.find((e) => {
                  let { id: n } = e;
                  return n === (null == j ? void 0 : j.id);
              })
            : u,
        p = null != n && n.id.startsWith("screen") ? c.pzj : c.GON;
    return (0, l.jsx)("div", {
        className: B.modalContent,
        children: (0, l.jsx)(c.gNt, {
            label: M.intl.string(M.t.TC7Evz),
            children: (0, l.jsxs)(R.Z, {
                children: [
                    null != v
                        ? (0, l.jsx)(g.Z, {
                              game: v,
                              size: g.A.XSMALL,
                              className: L.selectedIcon,
                          })
                        : (0, l.jsx)(p, { className: L.selectedIcon }),
                    (0, l.jsx)("span", {
                        className: L.ellipsisText,
                        children: h,
                    }),
                    t
                        ? (0, l.jsx)("div", {
                              className: L.changeButton,
                              children: (0, l.jsx)(c.Button, {
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: i,
                                  text: M.intl.string(M.t.GEgsA4),
                              }),
                          })
                        : null,
                ],
            }),
        }),
    });
}
function z(e) {
    let { onChange: n, guildId: t } = e,
        r = (0, a.e7)([p.Z], () => p.Z.getGuild(t));
    return null == r
        ? (n(), null)
        : (0, l.jsx)("div", {
              className: B.modalContent,
              children: (0, l.jsx)(c.gNt, {
                  label: M.intl.string(M.t.WC3u3n),
                  children: (0, l.jsxs)(R.Z, {
                      children: [
                          (0, l.jsx)(x.Z, {
                              guild: r,
                              size: x.Z.Sizes.SMALLER,
                              className: L.selectedIcon,
                          }),
                          (0, l.jsx)("span", {
                              className: L.ellipsisText,
                              children: r.name,
                          }),
                          (0, l.jsx)("div", {
                              className: L.changeButton,
                              children: (0, l.jsx)(c.Button, {
                                  size: "sm",
                                  variant: "secondary",
                                  onClick: n,
                                  text: M.intl.string(M.t.GEgsA4),
                              }),
                          }),
                      ],
                  }),
              }),
          });
}
function F(e) {
    let { text: n } = e;
    return (0, l.jsxs)(d.Z, {
        align: d.Z.Align.CENTER,
        className: L.warning,
        children: [
            (0, l.jsx)(c.Mgn, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                className: L.warningIcon,
            }),
            (0, l.jsx)(c.Text, {
                color: "none",
                variant: "text-xs/normal",
                children: n,
            }),
        ],
    });
}
function W(e) {
    let { guildId: n } = e,
        t = (0, a.e7)([v.Z], () => {
            var e;
            return null != (e = v.Z.getMemberCount(n)) ? e : 0;
        }),
        i = h.eo.useSetting(),
        o = r.useCallback((e) => {
            h.eo.updateSetting(e), b.default.track(w.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: e });
        }, []);
    return t >= 2 && t <= _.tB
        ? (0, l.jsx)("div", {
              className: s()(B.modalContent, L.checkboxRow),
              children: (0, l.jsx)(c.Checkbox, {
                  checked: !!i,
                  onChange: o,
                  label: M.intl.string(M.t.Cef4t7),
              }),
          })
        : null;
}
function V(e) {
    let { enabled: n, onChange: t, screen: i } = e,
        o = r.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        u = (0, a.e7)([f.Z], () => f.Z.getUseSystemScreensharePicker() && (0, T.isLinux)());
    return (0, l.jsx)("div", {
        className: s()(B.modalContent, L.checkboxRow),
        children: (0, l.jsx)(c.Checkbox, {
            checked: n,
            onChange: o,
            label: i || u ? M.intl.string(M.t["5AdrtW"]) : M.intl.string(M.t.gRpbRF),
        }),
    });
}
function H(e) {
    let { enabled: n, onChange: t } = e,
        i = r.useCallback(
            (e) => {
                t(e);
            },
            [t],
        );
    return (0, l.jsx)("div", {
        className: s()(B.modalContent, L.checkboxRow),
        children: (0, l.jsx)(c.Checkbox, {
            checked: n,
            onChange: i,
            label: M.intl.string(M.t.JE73jB),
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
            selectedGuildId: d,
            targetGuildPremiumTier: m,
            selectSource: g,
            selectGuild: x,
            sound: h,
            previewDisabled: v,
            onClose: p,
            onChangeSelectedFPS: S,
            onChangeSelectedResolution: b,
            onChangeSelectedPreset: C,
            onChangeSelectedChannelId: T,
            onChangeSource: O,
            onChangeAudioDevice: R,
            onChangeGuild: U,
            onChangeSound: _,
            onChangePreviewDisabled: L,
        } = e,
        X = (0, a.e7)([Z.Z, j.Z], () => j.Z.getChannel(Z.Z.getVoiceChannelId())),
        Y = (0, a.e7)([y.Z], () => y.Z.GPUDriversOutdated),
        q = (0, a.e7)([y.Z], () => y.Z.problematicGPUDriver),
        K = (0, a.e7)([N.default], () => N.default.getCurrentUser()),
        J = (0, E.Z)();
    null != n && n.id.startsWith("screen") && !f.Z.supportsScreenSoundshare() && (J = M.intl.string(M.t["1b0Gm7"]));
    let Q = !!(null == n ? void 0 : n.id.startsWith("camera")),
        $ = null != K && K.verified && !K.bot,
        ee = null != X && !(0, u.Yk)(X);
    return (0, l.jsxs)(r.Fragment, {
        children: [
            (0, l.jsx)("div", {
                children: Q
                    ? (0, l.jsx)(I.Z, {
                          selectedSource: n,
                          onChangeVideoDeviceSource: O,
                          onChangeAudioDevice: R,
                      })
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(G, {
                                  selectSource: g,
                                  sourceChanged: o,
                                  onChangeSource: O,
                                  selectedSource: n,
                              }),
                              null != J ? (0, l.jsx)(F, { text: J }) : null,
                              null != n && null == J
                                  ? (0, l.jsx)(V, {
                                        enabled: h,
                                        onChange: _,
                                        screen: n.id.startsWith("screen"),
                                    })
                                  : null,
                          ],
                      }),
            }),
            x && null != d
                ? (0, l.jsx)("div", {
                      children: (0, l.jsx)(z, {
                          guildId: d,
                          onChange: U,
                      }),
                  })
                : null,
            (0, l.jsxs)("div", {
                children: [
                    null != X
                        ? (0, l.jsx)(A.Z, { channel: X })
                        : (0, l.jsx)("div", {
                              className: B.modalContent,
                              children: (0, l.jsx)(k.Z, {
                                  guildId: d,
                                  selectedChannelId: i,
                                  onChangeSelectedChannelId: T,
                              }),
                          }),
                    null != d && $ && ee ? (0, l.jsx)(W, { guildId: d }) : null,
                    Y ? (0, l.jsx)(F, { text: M.intl.string(M.t.q65tSw) }) : null,
                    q
                        ? (0, l.jsx)(F, {
                              text: M.intl.format(M.t.RrLvuT, {
                                  helpCenterLink: P.Z.getArticleURL(w.BhN.NVIDIA_DRIVER_ISSUES),
                              }),
                          })
                        : null,
                ],
            }),
            (0, l.jsx)(D.Z, {
                selectedPreset: s,
                selectedFPS: t,
                selectedResolution: c,
                targetGuildPremiumTier: m,
                onClose: p,
                onFPSChange: S,
                onResolutionChange: b,
                onPresetChange: C,
                captureDeviceSelected: Q,
            }),
            (0, l.jsx)(H, {
                enabled: v,
                onChange: L,
            }),
        ],
    });
}
