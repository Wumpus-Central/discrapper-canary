n.d(t, { Z: () => K });
var r = n(200651),
    l = n(192379),
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
    S = n(131951),
    N = n(944486),
    C = n(594174),
    b = n(449224),
    y = n(626135),
    Z = n(823379),
    I = n(63063),
    O = n(358085),
    w = n(653255),
    T = n(989941),
    E = n(618407),
    P = n(586290),
    R = n(233037),
    W = n(810013),
    k = n(537135),
    A = n(641115),
    M = n(143135),
    L = n(70722),
    D = n(981631),
    G = n(526761),
    U = n(388032),
    B = n(14383),
    z = n(347226);
function F(e) {
    let { selectedSource: t, selectSource: n, sourceChanged: l, onChangeSource: i } = e,
        s = (0, a.e7)([m.ZP, b.Z], () => ((0, O.isWindows)() ? (0, T.Z)(m.ZP, b.Z) : null)),
        c = (0, a.e7)([d.Z], () => ((null == s ? void 0 : s.id) != null ? d.Z.getApplication(s.id) : null)),
        u = (0, a.e7)([m.ZP], () => m.ZP.getRunningGames()),
        f = (0, a.Wu)([d.Z], () => u.map((e) => (null != e.id ? d.Z.getApplication(e.id) : null)).filter(Z.lm), [u]),
        x = null;
    if ((null != t ? (x = t.name) : null != s && (x = s.name), null == x)) return null;
    let p = (0, M.Z)(s, t, u),
        g = l
            ? f.find((e) => {
                  let { id: t } = e;
                  return t === (null == p ? void 0 : p.id);
              })
            : c,
        _ = null != t && t.id.startsWith('screen') ? o.pzj : o.GON;
    return (0, r.jsx)(o.xJW, {
        title: U.NW.string(U.t.TC7Ev7),
        className: z.modalContent,
        titleClassName: z.formItemTitleVerySlim,
        children: (0, r.jsxs)(k.Z, {
            children: [
                null != g
                    ? (0, r.jsx)(h.Z, {
                          game: g,
                          size: h.Z.Sizes.XSMALL,
                          className: B.selectedIcon
                      })
                    : (0, r.jsx)(_, { className: B.selectedIcon }),
                (0, r.jsx)('span', {
                    className: B.ellipsisText,
                    children: x
                }),
                n
                    ? (0, r.jsx)(o.zxk, {
                          className: B.changeButton,
                          color: o.zxk.Colors.PRIMARY,
                          size: o.zxk.Sizes.SMALL,
                          onClick: i,
                          children: U.NW.string(U.t.GEgsAw)
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
              title: U.NW.string(U.t.WC3u3t),
              className: z.modalContent,
              titleClassName: z.formItemTitle,
              children: (0, r.jsxs)(k.Z, {
                  children: [
                      (0, r.jsx)(x.Z, {
                          guild: l,
                          size: x.Z.Sizes.SMALLER,
                          className: B.selectedIcon
                      }),
                      (0, r.jsx)('span', {
                          className: B.ellipsisText,
                          children: l.toString()
                      }),
                      (0, r.jsx)(o.zxk, {
                          className: B.changeButton,
                          color: o.zxk.Colors.PRIMARY,
                          size: o.zxk.Sizes.SMALL,
                          onClick: t,
                          children: U.NW.string(U.t.GEgsAw)
                      })
                  ]
              })
          });
}
function V(e) {
    let { text: t } = e;
    return (0, r.jsxs)(f.Z, {
        align: f.Z.Align.CENTER,
        className: B.warning,
        children: [
            (0, r.jsx)(o.P4T, {
                size: 'custom',
                width: 20,
                height: 20,
                color: 'currentColor',
                className: B.warningIcon
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
            p.eo.updateSetting(t), y.default.track(D.rMx.NOTIFY_STREAM_SETTING_UPDATE, { value: t });
        }, []);
    return n >= 2 && n <= L.tB
        ? (0, r.jsx)(o.xJW, {
              className: s()(z.modalContent, B.checkboxRow),
              children: (0, r.jsx)(o.XZJ, {
                  value: !!i,
                  type: o.XZJ.Types.INVERTED,
                  onChange: c,
                  children: (0, r.jsx)(o.Text, {
                      variant: 'text-sm/normal',
                      children: U.NW.string(U.t.Cef4t7)
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
        className: s()(z.modalContent, B.checkboxRow),
        children: (0, r.jsx)(o.XZJ, {
            value: t,
            type: o.XZJ.Types.INVERTED,
            onChange: a,
            children: (0, r.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: i ? U.NW.string(U.t['5Adrtb']) : U.NW.string(U.t.gRpbRE)
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
        className: s()(z.modalContent, B.checkboxRow),
        children: (0, r.jsx)(o.XZJ, {
            value: t,
            type: o.XZJ.Types.INVERTED,
            onChange: i,
            children: (0, r.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: U.NW.string(U.t.JE73jI)
            })
        })
    });
}
function K(e) {
    let { selectedSource: t, selectedFPS: n, selectedChannelId: i, selectedPreset: s, selectedResolution: o, sourceChanged: d, selectedGuildId: f, targetGuildPremiumTier: m, selectSource: h, selectGuild: x, sound: p, previewDisabled: j, onClose: v, onChangeSelectedFPS: b, onChangeSelectedResolution: y, onChangeSelectedPreset: Z, onChangeSelectedChannelId: O, onChangeSource: T, onChangeAudioDevice: k, onChangeGuild: M, onChangeSound: L, onChangePreviewDisabled: z } = e,
        K = (0, a.e7)([N.Z, _.Z], () => _.Z.getChannel(N.Z.getVoiceChannelId())),
        q = (0, a.e7)([w.Z], () => w.Z.GPUDriversOutdated),
        Q = (0, a.e7)([w.Z], () => w.Z.problematicGPUDriver),
        $ = (0, a.e7)([C.default], () => C.default.getCurrentUser()),
        ee = (0, E.Z)();
    null != t && t.id.startsWith('screen') && !S.Z.supportsScreenSoundshare() && (ee = U.NW.string(U.t['1b0Gm5']));
    let et = !!(null == t ? void 0 : t.id.startsWith('camera')),
        en = null != $ && $.verified && !$.bot,
        er = null != K && !(0, u.Yk)(K),
        el = !(0, a.e7)([S.Z], () => S.Z.getHardwareEncoding());
    return (0, r.jsxs)(l.Fragment, {
        children: [
            et
                ? (0, r.jsx)(P.Z, {
                      selectedSource: t,
                      onChangeVideoDeviceSource: T,
                      onChangeAudioDevice: k
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
                                    onChange: L,
                                    screen: t.id.startsWith('screen')
                                })
                              : null
                      ]
                  }),
            x && null != f
                ? (0, r.jsx)(H, {
                      guildId: f,
                      onChange: M
                  })
                : null,
            null != K
                ? (0, r.jsx)(W.Z, { channel: K })
                : (0, r.jsx)(R.Z, {
                      guildId: f,
                      selectedChannelId: i,
                      onChangeSelectedChannelId: O
                  }),
            null != f && en && er ? (0, r.jsx)(Y, { guildId: f }) : null,
            q ? (0, r.jsx)(V, { text: U.NW.string(U.t.q65tS0) }) : null,
            Q ? (0, r.jsx)(V, { text: U.NW.format(U.t.RrLvub, { helpCenterLink: I.Z.getArticleURL(D.BhN.NVIDIA_DRIVER_ISSUES) }) }) : null,
            el &&
                (0, r.jsx)(g.Z, {
                    look: g.z.WARNING,
                    className: B.hardwareWarning,
                    children: U.NW.format(U.t.zCLXws, {
                        onClick: () => {
                            v(), c.Z.open(D.oAB.VOICE, null, { scrollPosition: G.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION });
                        }
                    })
                }),
            (0, r.jsx)(A.Z, {
                selectedPreset: s,
                selectedFPS: n,
                selectedResolution: o,
                targetGuildPremiumTier: m,
                onClose: v,
                onFPSChange: b,
                onResolutionChange: y,
                onPresetChange: Z,
                captureDeviceSelected: et
            }),
            (0, r.jsx)(X, {
                enabled: j,
                onChange: z
            })
        ]
    });
}
