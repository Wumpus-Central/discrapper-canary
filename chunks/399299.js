n.d(t, { Z: () => K });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    a = n(442837),
    o = n(481060),
    c = n(230711),
    d = n(812206),
    u = n(605436),
    f = n(600164),
    m = n(594190),
    h = n(925329),
    x = n(565138),
    p = n(695346),
    g = n(494620),
    _ = n(592125),
    j = n(650774),
    v = n(430824),
    b = n(131951),
    S = n(944486),
    C = n(594174),
    y = n(449224),
    Z = n(626135),
    I = n(823379),
    w = n(63063),
    O = n(358085),
    N = n(653255),
    T = n(989941),
    E = n(618407),
    P = n(586290),
    R = n(233037),
    k = n(810013),
    A = n(537135),
    M = n(641115),
    L = n(143135),
    D = n(70722),
    G = n(981631),
    B = n(526761),
    U = n(388032),
    z = n(14383),
    W = n(347226);
function F(e) {
    let { selectedSource: t, selectSource: n, sourceChanged: l, onChangeSource: i } = e,
        s = (0, a.e7)([m.ZP, y.Z], () => ((0, O.isWindows)() ? (0, T.Z)(m.ZP, y.Z) : null)),
        c = (0, a.e7)([d.Z], () => ((null == s ? void 0 : s.id) != null ? d.Z.getApplication(s.id) : null)),
        u = (0, a.e7)([m.ZP], () => m.ZP.getRunningGames()),
        f = (0, a.Wu)([d.Z], () => u.map((e) => (null != e.id ? d.Z.getApplication(e.id) : null)).filter(I.lm), [u]),
        x = null;
    if ((null != t ? (x = t.name) : null != s && (x = s.name), null == x)) return null;
    let p = (0, L.Z)(s, t, u),
        g = l
            ? f.find((e) => {
                  let { id: t } = e;
                  return t === (null == p ? void 0 : p.id);
              })
            : c,
        _ = null != t && t.id.startsWith('screen') ? o.pzj : o.GON;
    return (0, r.jsx)(o.xJW, {
        title: U.intl.string(U.t.TC7Ev7),
        className: W.modalContent,
        titleClassName: W.formItemTitleVerySlim,
        children: (0, r.jsxs)(A.Z, {
            children: [
                null != g
                    ? (0, r.jsx)(h.Z, {
                          game: g,
                          size: h.Z.Sizes.XSMALL,
                          className: z.selectedIcon
                      })
                    : (0, r.jsx)(_, { className: z.selectedIcon }),
                (0, r.jsx)('span', {
                    className: z.ellipsisText,
                    children: x
                }),
                n
                    ? (0, r.jsx)(o.zxk, {
                          className: z.changeButton,
                          color: o.zxk.Colors.PRIMARY,
                          size: o.zxk.Sizes.SMALL,
                          onClick: i,
                          children: U.intl.string(U.t.GEgsAw)
                      })
                    : null
            ]
        })
    });
}
function H(e) {
    let { onChange: t, guildId: n } = e,
        l = (0, a.e7)([v.Z], () => v.Z.getGuild(n));
    return null == l
        ? (t(), null)
        : (0, r.jsx)(o.xJW, {
              title: U.intl.string(U.t.WC3u3t),
              className: W.modalContent,
              titleClassName: W.formItemTitle,
              children: (0, r.jsxs)(A.Z, {
                  children: [
                      (0, r.jsx)(x.Z, {
                          guild: l,
                          size: x.Z.Sizes.SMALLER,
                          className: z.selectedIcon
                      }),
                      (0, r.jsx)('span', {
                          className: z.ellipsisText,
                          children: l.toString()
                      }),
                      (0, r.jsx)(o.zxk, {
                          className: z.changeButton,
                          color: o.zxk.Colors.PRIMARY,
                          size: o.zxk.Sizes.SMALL,
                          onClick: t,
                          children: U.intl.string(U.t.GEgsAw)
                      })
                  ]
              })
          });
}
function V(e) {
    let { text: t } = e;
    return (0, r.jsxs)(f.Z, {
        align: f.Z.Align.CENTER,
        className: z.warning,
        children: [
            (0, r.jsx)(o.P4T, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: z.warningIcon
            }),
            (0, r.jsx)(o.Text, {
                color: 'none',
                variant: 'text-xs/normal',
                children: t
            })
        ]
    });
}
function Y(e) {
    let { guildId: t } = e,
        n = (0, a.e7)([j.Z], () => {
            var e;
            return null != (e = j.Z.getMemberCount(t)) ? e : 0;
        }),
        i = p.eo.useSetting(),
        c = l.useCallback((e, t) => {
            p.eo.updateSetting(t), Z.default.track(G.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: t });
        }, []);
    return n >= 2 && n <= D.tB
        ? (0, r.jsx)(o.xJW, {
              className: s()(W.modalContent, z.checkboxRow),
              children: (0, r.jsx)(o.XZJ, {
                  value: !!i,
                  type: o.XZJ.Types.INVERTED,
                  onChange: c,
                  children: (0, r.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      children: U.intl.string(U.t.Cef4t7)
                  })
              })
          })
        : null;
}
function J(e) {
    let { enabled: t, onChange: n, screen: i } = e,
        a = l.useCallback(
            (e, t) => {
                n(t);
            },
            [n]
        );
    return (0, r.jsx)(o.xJW, {
        className: s()(W.modalContent, z.checkboxRow),
        children: (0, r.jsx)(o.XZJ, {
            value: t,
            type: o.XZJ.Types.INVERTED,
            onChange: a,
            children: (0, r.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: i ? U.intl.string(U.t['5Adrtb']) : U.intl.string(U.t.gRpbRE)
            })
        })
    });
}
function X(e) {
    let { enabled: t, onChange: n } = e,
        i = l.useCallback(
            (e, t) => {
                n(t);
            },
            [n]
        );
    return (0, r.jsx)(o.xJW, {
        className: s()(W.modalContent, z.checkboxRow),
        children: (0, r.jsx)(o.XZJ, {
            value: t,
            type: o.XZJ.Types.INVERTED,
            onChange: i,
            children: (0, r.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: U.intl.string(U.t.JE73jI)
            })
        })
    });
}
function K(e) {
    let { selectedSource: t, selectedFPS: n, selectedChannelId: i, selectedPreset: s, selectedResolution: o, sourceChanged: d, selectedGuildId: f, targetGuildPremiumTier: m, selectSource: h, selectGuild: x, sound: p, previewDisabled: j, onClose: v, onChangeSelectedFPS: y, onChangeSelectedResolution: Z, onChangeSelectedPreset: I, onChangeSelectedChannelId: O, onChangeSource: T, onChangeAudioDevice: A, onChangeGuild: L, onChangeSound: D, onChangePreviewDisabled: W } = e,
        K = (0, a.e7)([S.Z, _.Z], () => _.Z.getChannel(S.Z.getVoiceChannelId())),
        q = (0, a.e7)([N.Z], () => N.Z.GPUDriversOutdated),
        Q = (0, a.e7)([N.Z], () => N.Z.problematicGPUDriver),
        $ = (0, a.e7)([C.default], () => C.default.getCurrentUser()),
        ee = (0, E.Z)();
    null != t && t.id.startsWith('screen') && !b.Z.supportsScreenSoundshare() && (ee = U.intl.string(U.t['1b0Gm5']));
    let et = !!(null == t ? void 0 : t.id.startsWith('camera')),
        en = null != $ && $.verified && !$.bot,
        er = null != K && !(0, u.Yk)(K),
        el = !(0, a.e7)([b.Z], () => b.Z.getHardwareEncoding());
    return (0, r.jsxs)(l.Fragment, {
        children: [
            et
                ? (0, r.jsx)(P.Z, {
                      selectedSource: t,
                      onChangeVideoDeviceSource: T,
                      onChangeAudioDevice: A
                  })
                : (0, r.jsxs)('div', {
                      children: [
                          (0, r.jsx)(F, {
                              selectSource: h,
                              sourceChanged: d,
                              onChangeSource: T,
                              selectedSource: t
                          }),
                          null != ee ? (0, r.jsx)(V, { text: ee }) : null,
                          null != t && null == ee
                              ? (0, r.jsx)(J, {
                                    enabled: p,
                                    onChange: D,
                                    screen: t.id.startsWith('screen')
                                })
                              : null
                      ]
                  }),
            x && null != f
                ? (0, r.jsx)(H, {
                      guildId: f,
                      onChange: L
                  })
                : null,
            null != K
                ? (0, r.jsx)(k.Z, { channel: K })
                : (0, r.jsx)(R.Z, {
                      guildId: f,
                      selectedChannelId: i,
                      onChangeSelectedChannelId: O
                  }),
            null != f && en && er ? (0, r.jsx)(Y, { guildId: f }) : null,
            q ? (0, r.jsx)(V, { text: U.intl.string(U.t.q65tS0) }) : null,
            Q ? (0, r.jsx)(V, { text: U.intl.format(U.t.RrLvub, { helpCenterLink: w.Z.getArticleURL(G.BhN.NVIDIA_DRIVER_ISSUES) }) }) : null,
            el &&
                (0, r.jsx)(g.Z, {
                    look: g.z.WARNING,
                    className: z.hardwareWarning,
                    children: U.intl.format(U.t.zCLXws, {
                        onClick: () => {
                            v(), c.Z.open(G.oAB.VOICE, null, { scrollPosition: B.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION });
                        }
                    })
                }),
            (0, r.jsx)(M.Z, {
                selectedPreset: s,
                selectedFPS: n,
                selectedResolution: o,
                targetGuildPremiumTier: m,
                onClose: v,
                onFPSChange: y,
                onResolutionChange: Z,
                onPresetChange: I,
                captureDeviceSelected: et
            }),
            (0, r.jsx)(X, {
                enabled: j,
                onChange: W
            })
        ]
    });
}
