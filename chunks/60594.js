t.d(n, { default: () => ei }), t(47120), t(653041);
var l = t(200651),
    i = t(192379),
    s = t(512722),
    a = t.n(s),
    r = t(642128),
    o = t(209739),
    u = t.n(o),
    c = t(442837),
    d = t(704215),
    m = t(481060),
    x = t(668781),
    g = t(872810),
    h = t(410575),
    v = t(579806),
    Z = t(636449),
    S = t(317381),
    j = t(89425),
    C = t(812206),
    f = t(835473),
    p = t(600164),
    N = t(313201),
    T = t(243778),
    E = t(594190),
    I = t(998594),
    P = t(751571),
    R = t(970731),
    k = t(695346),
    A = t(361291),
    b = t(592125),
    M = t(430824),
    D = t(131951),
    _ = t(944486),
    L = t(594174),
    z = t(449224),
    w = t(626135),
    U = t(63063),
    y = t(358085),
    G = t(998502),
    O = t(451467),
    W = t(537413),
    F = t(299570),
    B = t(960861),
    J = t(989941),
    V = t(399299),
    Y = t(351152),
    H = t(567126),
    X = t(143135),
    K = t(70722),
    q = t(37113),
    Q = t(981631),
    $ = t(921944),
    ee = t(761274),
    en = t(388032),
    et = t(456963);
let el = (e) => {
    let { visibleContent: n, markAsDismissed: t } = e;
    return n === d.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, l.jsx)(R.ZP, {
              content: en.intl.string(en.t.sFyFJy),
              buttonCTA: en.intl.string(en.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(U.Z.getArticleURL(Q.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: en.intl.string(en.t.hvVgAQ),
              caretPosition: R.DF.LEFT_CENTER,
              markAsDismissed: t
          })
        : null;
};
function ei(e) {
    var n, s, o, R, U, ei;
    let { selectGuild: es = !1, selectSource: ea = !0, guildId: er, analyticsLocation: eo, onClose: eu, transitionState: ec } = e,
        { preset: ed, resolution: em, fps: ex, soundshareEnabled: eg } = (0, c.cj)([A.Z], () => A.Z.getState()),
        eh = i.useRef(Date.now()),
        ev = (0, c.e7)([_.Z, b.Z], () => b.Z.getChannel(_.Z.getVoiceChannelId())),
        eZ = (0, c.e7)([E.ZP, z.Z], () => ((0, y.isWindows)() ? (0, J.Z)(E.ZP, z.Z) : null)),
        eS = (0, c.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
        ej = (0, f.q)(null == eS ? void 0 : eS.applicationId),
        [eC, ef] = i.useState(null);
    i.useEffect(() => {
        (0, Z.R)() &&
            (async () => {
                var e;
                ef(await (null === v.Z || void 0 === v.Z ? void 0 : null === (e = v.Z.window) || void 0 === e ? void 0 : e.getMediaSourceId('DISCORD_ACTIVITY_POPOUT')));
            })();
    }, []);
    let ep = (0, c.e7)([L.default], () => {
            let e = L.default.getCurrentUser();
            return a()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eN = null !== (n = null == ev ? void 0 : ev.getGuildId()) && void 0 !== n ? n : er,
        eT = (0, c.e7)([M.Z], () => {
            var e;
            return null != eN ? (null === (e = M.Z.getGuild(eN)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [eE, eI] = null !== (s = (0, W.Z)(ed, ep, eT)) && void 0 !== s ? s : [q.LY.RESOLUTION_720, q.ws.FPS_30],
        { lastPickerAction: eP } = (0, c.e7)([B.ZP], () => B.ZP.getPickerState()),
        eR = D.Z.getUseSystemScreensharePicker();
    (0, B.UB)();
    let ek = eR && (0, y.isMac)() && u().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, K.jR),
        eA = [];
    ec === m.Dvm.ENTERED && eR && (0, y.isMac)() && eA.push(d.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eb, eM] = (0, T.US)(eA, void 0, !0);
    ed !== q.tI.PRESET_CUSTOM && ((em = eE), (ex = eI)), (0, O.Z)(ed, em, ex, ep, eT) || ((em = eE), (ex = eI));
    let eD = (0, N.Dt)(),
        [e_, eL] = i.useState(((ei = ea && !ek), es ? 0 : ei ? 2 : 3)),
        [ez, ew] = i.useState(ek),
        [eU, ey] = i.useState(null),
        [eG, eO] = i.useState(
            ek
                ? {
                      id: 'prepicked:',
                      name: en.intl.string(en.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eW, eF] = i.useState(null),
        [eB, eJ] = i.useState(ed),
        [eV, eY] = i.useState(em),
        [eH, eX] = i.useState(ex),
        [eK, eq] = i.useState(eg),
        [eQ, e$] = i.useState(null !== (o = k.I0.getSetting()) && void 0 !== o && o),
        [e0, e1] = i.useState(null != er ? er : null),
        e3 = null !== (R = null == ev ? void 0 : ev.id) && void 0 !== R ? R : eU,
        [e4, e2] = i.useState(ek ? '' : void 0);
    async function e7() {
        var e, n;
        a()(null != eZ || null != eG || (null != eS && null != eC), 'got nothing to stream');
        let t = null !== (e = null == ev ? void 0 : ev.id) && void 0 !== e ? e : eU;
        a()(null != t, 'Received null target channel ID');
        let l = b.Z.getChannel(t),
            i = null !== (n = null == l ? void 0 : l.getGuildId()) && void 0 !== n ? n : er;
        if (null == ev && !(await (0, j.Z)({ channelId: t }))) return;
        let s = eB,
            r = eV,
            o = eH;
        (0, O.Z)(s, r, o, ep, eT, l) || ((s = q.tI.PRESET_VIDEO), (r = q.LY.RESOLUTION_720), (o = q.ws.FPS_30)),
            (0, g.Rc)({
                preset: s,
                resolution: r,
                frameRate: o,
                soundshareEnabled: eK
            });
        let u = (0, X.Z)(eZ, eG, E.ZP.getRunningGames()),
            c = !(0, y.isWindows)() || null == u || (null == eG ? void 0 : eG.id.startsWith('camera:')) || null == u ? null : u.pid,
            d = null,
            m = null;
        null == c && (null != eG ? ((d = eG.id), (m = eG.name)) : null != eC && ((d = eC), (m = null == ej ? void 0 : ej.name))),
            (0, g.WH)(i, t, {
                pid: c,
                sourceId: d,
                sourceName: m,
                audioSourceId: eW,
                sound: eK,
                previewDisabled: eQ,
                nativePickerStyleUsed: e4,
                goLiveModalDurationMs: Date.now() - eh.current
            }),
            null != eb && eM($.L.AUTO_DISMISS),
            eR ||
                (async () => {
                    (await P.Z.hasPermission(ee.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        x.Z.show({
                            title: en.intl.string(en.t['X+mXen']),
                            body: en.intl.string(en.t.MIJCzs)
                        });
                })();
    }
    function e9() {
        e7(), eu();
    }
    i.useEffect(() => {
        let e = (0, y.isWindows)() ? (0, J.Z)(E.ZP, z.Z) : null,
            n = (null == e ? void 0 : e.id) != null ? C.Z.getApplication(e.id) : null;
        w.default.track(Q.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == n ? void 0 : n.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == n ? void 0 : n.id,
            location_section: eo
        }),
            I.Z.trackExposure({ location: 'GoLiveModal' });
    }, [eo]);
    let e5 = i.useCallback(
            (e, n, t) => {
                var l;
                let i = (0, W.Z)(e, ep, eT),
                    [s, r] = null != i ? i : [n, t];
                e !== eB && ((n = s), (t = r));
                let o = null !== (l = null == ev ? void 0 : ev.id) && void 0 !== l ? l : eU;
                a()(null != o, 'Received null target channel ID');
                let u = b.Z.getChannel(o);
                if (!(0, O.Z)(e, n, t, ep, eT, u)) {
                    let [e, l] = (0, W.Z)(q.tI.PRESET_VIDEO, ep, eT);
                    (n = e), (t = l);
                }
                t !== eH && eX(t), n !== eV && eY(n), s !== n || r !== t ? eJ(q.tI.PRESET_CUSTOM) : e !== eB && eJ(e);
            },
            [ev, eU, ep, eT, eH, eV, eB]
        ),
        e6 = i.useCallback(
            (e) => {
                (0, F.t)(), (0, F.T)(null != e ? e : e4);
            },
            [e4]
        );
    function e8(e) {
        if ((e.preventDefault(), 1 === e_)) return e6();
        if (2 === e_) return eL(3);
        if (null != e4) return eL(1);
        let n = (0, X.Z)(eZ, eG, E.ZP.getRunningGames());
        G.ZP.supportsFeature(Q.eRX.ELEVATED_HOOK) && (null == n ? void 0 : n.elevated)
            ? (function () {
                  var e;
                  let n = null !== (e = null == eZ ? void 0 : eZ.pid) && void 0 !== e ? e : null;
                  (0, m.ZDy)(async () => {
                      let { default: e } = await t.e('74300').then(t.bind(t, 566852));
                      return (t) =>
                          (0, l.jsx)(e, {
                              ...t,
                              handleStream: e9,
                              pid: n
                          });
                  });
              })()
            : e9();
    }
    let ne = i.useCallback(
            (e) => {
                eO(e), null != e && (eR && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e2(e.id.split(':')[1]) : e2(void 0), eL(3), ew(!0));
            },
            [eR]
        ),
        nn = i.useCallback(
            (e) => {
                e1(e);
                var n = 3;
                eL(ea ? 2 : 3);
            },
            [ea]
        ),
        nt = !(1 === e_ && eR && eP === B.Uc.Error),
        nl = (function (e) {
            switch (e) {
                case 2:
                    return en.intl.string(en.t['aC4/Zm']);
                case 1:
                    return en.intl.formatToPlainString(en.t.sbbPhY, { buttonName: en.intl.string(en.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return en.intl.string(en.t['1hKIam']);
            }
        })(e_),
        ni = (0, l.jsx)(m.xBx, {
            className: et.modalHeader,
            separator: !1,
            children: (0, l.jsxs)(p.Z, {
                direction: p.Z.Direction.VERTICAL,
                align: p.Z.Align.CENTER,
                className: et.header,
                children: [
                    (0, l.jsx)(m.X6q, {
                        variant: 'heading-xl/semibold',
                        id: eD,
                        className: et.headerText,
                        children: en.intl.string(en.t.RDkJQ0)
                    }),
                    nt && null != nl
                        ? (0, l.jsx)(m.Text, {
                              className: et.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: nl
                          })
                        : null
                ]
            })
        }),
        ns = i.useCallback(() => {
            eR && (0, F.t)(), eL(2);
        }, [eR]),
        na = (function (e, n, t, l) {
            switch (e) {
                case 2:
                    return n ? 0 : null;
                case 1:
                    return 3;
                case 3:
                    if (l) return 2;
                    if (!t && n) return 0;
                    return null;
                default:
                    return null;
            }
        })(e_, es, ea, ez),
        nr = 1 !== e_ && (3 !== e_ || (null == eG && null == eZ && null == eC) || null == e3),
        no = i.useCallback(() => {
            null != na && eL(na);
        }, [na]),
        nu = (0, l.jsx)(l.Fragment, {
            children: (0, l.jsxs)(m.MyZ, {
                springConfig: {
                    ...r.config.stiff,
                    clamp: !0
                },
                activeSlide: e_,
                width: 480,
                children: [
                    (0, l.jsx)(m.Mi4, {
                        id: 0,
                        children: (0, l.jsx)('div', {
                            className: et.modalSize,
                            children: (0, l.jsx)(Y.Z, { onSelectGuild: nn })
                        })
                    }),
                    (0, l.jsx)(m.Mi4, {
                        id: 2,
                        children: (0, l.jsx)('div', {
                            className: et.modalSize,
                            children: eR
                                ? (0, l.jsx)(H.se, { onSourceSelect: ne })
                                : (0, l.jsx)(H.oA, {
                                      selectedSource: eG,
                                      onChangeSelectedSource: ne
                                  })
                        })
                    }),
                    (0, l.jsx)(m.Mi4, {
                        id: 3,
                        children: (0, l.jsx)('div', {
                            className: et.modalSize,
                            children: (0, l.jsx)(V.Z, {
                                selectedChannelId: null !== (U = null == ev ? void 0 : ev.id) && void 0 !== U ? U : eU,
                                selectedPreset: eB,
                                selectedResolution: eV,
                                selectedSource: eG,
                                selectedFPS: eH,
                                sound: eK,
                                previewDisabled: eQ,
                                sourceChanged: ez,
                                selectSource: ea,
                                onChangeSelectedFPS: (e) => e5(eB, eV, e),
                                onChangeSelectedResolution: (e) => e5(eB, e, eH),
                                onChangeSelectedPreset: (e) => e5(e, eV, eH),
                                onChangeSelectedChannelId: ey,
                                onChangeSelectedSource: ne,
                                onChangeSource: () => ns(),
                                onChangeAudioDevice: (e) => eF(e),
                                onChangeGuild: () => eL(0),
                                onChangeSound: (e) => eq(e),
                                onChangePreviewDisabled: (e) => e$(e),
                                onClose: eu,
                                selectedGuildId: e0,
                                targetGuildPremiumTier: eT,
                                selectGuild: es
                            })
                        })
                    }),
                    (0, l.jsx)(m.Mi4, {
                        id: 1,
                        children: (0, l.jsx)('div', {
                            className: et.modalSize,
                            children: (0, l.jsx)(H.Hu, {
                                onSourceSelect: e9,
                                onCancel: no,
                                pickerType: e4
                            })
                        })
                    })
                ]
            })
        }),
        nc = 1 === e_ || (ek && 3 === e_) ? en.intl.string(en.t.FiBjwc) : eR && (3 !== e_ || null != e4) ? en.intl.string(en.t.PDTjLC) : en.intl.string(en.t['UE/rPz']),
        nd = (0, l.jsxs)(m.mzw, {
            justify: null == na ? p.Z.Justify.START : p.Z.Justify.BETWEEN,
            children: [
                (0, l.jsx)(m.zxk, {
                    type: 'submit',
                    size: m.zxk.Sizes.SMALL,
                    disabled: nr,
                    autoFocus: !0,
                    children: nc
                }),
                null == na
                    ? (0, l.jsx)(m.zxk, {
                          className: et.cancelButton,
                          look: m.zxk.Looks.LINK,
                          size: m.zxk.Sizes.SMALL,
                          color: m.Ttl.PRIMARY,
                          onClick: eu,
                          children: en.intl.string(en.t['ETE/oK'])
                      })
                    : (0, l.jsx)(m.zxk, {
                          size: m.zxk.Sizes.SMALL,
                          color: m.Ttl.PRIMARY,
                          onClick: no,
                          children: en.intl.string(en.t['13/7kZ'])
                      })
            ]
        });
    return (0, l.jsx)(h.Z, {
        page: Q.ZY5.GO_LIVE_MODAL,
        children: (0, l.jsxs)(m.Y0X, {
            'aria-labelledby': eD,
            transitionState: ec,
            size: m.CgR.DYNAMIC,
            className: et.modalSize,
            children: [
                (0, l.jsx)(m.olH, {
                    onClick: eu,
                    className: et.modalCloseButton
                }),
                (0, l.jsx)('div', { className: et.art }),
                (0, l.jsx)(m.yRy, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eb,
                    spacing: 18,
                    renderPopout: () =>
                        (0, l.jsx)(el, {
                            visibleContent: eb,
                            markAsDismissed: eM
                        }),
                    children: () =>
                        (0, l.jsxs)('form', {
                            onSubmit: e8,
                            children: [ni, nu, nd]
                        })
                })
            ]
        })
    });
}
