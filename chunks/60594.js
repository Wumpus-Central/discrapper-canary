l.d(n, { default: () => er }), l(47120), l(653041);
var t = l(200651),
    i = l(192379),
    s = l(512722),
    a = l.n(s),
    r = l(642128),
    o = l(209739),
    u = l.n(o),
    c = l(442837),
    d = l(704215),
    m = l(481060),
    x = l(668781),
    h = l(872810),
    g = l(410575),
    Z = l(579806),
    v = l(636449),
    S = l(317381),
    j = l(89425),
    C = l(812206),
    f = l(835473),
    N = l(600164),
    p = l(313201),
    T = l(243778),
    E = l(594190),
    I = l(998594),
    P = l(751571),
    R = l(970731),
    k = l(695346),
    b = l(361291),
    A = l(592125),
    M = l(430824),
    _ = l(131951),
    L = l(944486),
    D = l(594174),
    z = l(449224),
    w = l(626135),
    y = l(63063),
    U = l(358085),
    G = l(998502),
    O = l(668519),
    W = l(451467),
    V = l(537413),
    F = l(299570),
    J = l(960861),
    B = l(989941),
    X = l(399299),
    Y = l(351152),
    H = l(567126),
    K = l(143135),
    q = l(717298),
    Q = l(70722),
    $ = l(37113),
    ee = l(981631),
    en = l(921944),
    el = l(761274),
    et = l(388032),
    ei = l(323499);
let es = (e) => {
    let { visibleContent: n, markAsDismissed: l } = e;
    return n === d.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, t.jsx)(R.ZP, {
              content: et.intl.string(et.t.sFyFJy),
              buttonCTA: et.intl.string(et.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(y.Z.getArticleURL(ee.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: et.intl.string(et.t.hvVgAQ),
              caretPosition: R.DF.LEFT_CENTER,
              markAsDismissed: l
          })
        : null;
};
function ea(e) {
    var n, s, o, R, y, O;
    let { selectGuild: q = !1, selectSource: ea = !0, guildId: er, analyticsLocation: eo, onClose: eu, transitionState: ec } = e,
        { preset: ed, resolution: em, fps: ex, soundshareEnabled: eh } = (0, c.cj)([b.Z], () => b.Z.getState()),
        eg = i.useRef(Date.now()),
        eZ = (0, c.e7)([L.Z, A.Z], () => A.Z.getChannel(L.Z.getVoiceChannelId())),
        ev = (0, c.e7)([E.ZP, z.Z], () => ((0, U.isWindows)() ? (0, B.Z)(E.ZP, z.Z) : null)),
        eS = (0, c.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
        ej = (0, f.q)(null == eS ? void 0 : eS.applicationId),
        [eC, ef] = i.useState(null);
    i.useEffect(() => {
        (0, v.R)() &&
            (async () => {
                var e;
                ef(await (null === Z.Z || void 0 === Z.Z ? void 0 : null === (e = Z.Z.window) || void 0 === e ? void 0 : e.getMediaSourceId('DISCORD_ACTIVITY_POPOUT')));
            })();
    }, []);
    let eN = (0, c.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return a()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        ep = null !== (n = null == eZ ? void 0 : eZ.getGuildId()) && void 0 !== n ? n : er,
        eT = (0, c.e7)([M.Z], () => {
            var e;
            return null != ep ? (null === (e = M.Z.getGuild(ep)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [eE, eI] = null !== (s = (0, V.Z)(ed, eN, eT)) && void 0 !== s ? s : [$.LY.RESOLUTION_720, $.ws.FPS_30],
        { lastPickerAction: eP } = (0, c.e7)([J.ZP], () => J.ZP.getPickerState()),
        eR = _.Z.getUseSystemScreensharePicker();
    (0, J.UB)();
    let ek = eR && (0, U.isMac)() && u().satisfies(null === Z.Z || void 0 === Z.Z ? void 0 : Z.Z.os.release, Q.jR),
        eb = [];
    ec === m.Dvm.ENTERED && eR && (0, U.isMac)() && eb.push(d.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eA, eM] = (0, T.US)(eb, void 0, !0);
    ed !== $.tI.PRESET_CUSTOM && ((em = eE), (ex = eI)), (0, W.Z)(ed, em, ex, eN, eT) || ((em = eE), (ex = eI));
    let e_ = (0, p.Dt)(),
        [eL, eD] = i.useState(((O = ea && !ek), q ? 0 : O ? 2 : 3)),
        [ez, ew] = i.useState(ek),
        [ey, eU] = i.useState(null),
        [eG, eO] = i.useState(
            ek
                ? {
                      id: 'prepicked:',
                      name: et.intl.string(et.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eW, eV] = i.useState(null),
        [eF, eJ] = i.useState(ed),
        [eB, eX] = i.useState(em),
        [eY, eH] = i.useState(ex),
        [eK, eq] = i.useState(eh),
        [eQ, e$] = i.useState(null !== (o = k.I0.getSetting()) && void 0 !== o && o),
        [e0, e1] = i.useState(null != er ? er : null),
        e3 = null !== (R = null == eZ ? void 0 : eZ.id) && void 0 !== R ? R : ey,
        [e2, e4] = i.useState(ek ? '' : void 0);
    async function e9() {
        var e, n;
        a()(null != ev || null != eG || (null != eS && null != eC), 'got nothing to stream');
        let l = null !== (e = null == eZ ? void 0 : eZ.id) && void 0 !== e ? e : ey;
        a()(null != l, 'Received null target channel ID');
        let t = A.Z.getChannel(l),
            i = null !== (n = null == t ? void 0 : t.getGuildId()) && void 0 !== n ? n : er;
        if (null == eZ && !(await (0, j.Z)({ channelId: l }))) return;
        let s = eF,
            r = eB,
            o = eY;
        (0, W.Z)(s, r, o, eN, eT, t) || ((s = $.tI.PRESET_VIDEO), (r = $.LY.RESOLUTION_720), (o = $.ws.FPS_30)),
            (0, h.Rc)({
                preset: s,
                resolution: r,
                frameRate: o,
                soundshareEnabled: eK
            });
        let u = (0, K.Z)(ev, eG, E.ZP.getRunningGames()),
            c = !(0, U.isWindows)() || null == u || (null == eG ? void 0 : eG.id.startsWith('camera:')) || null == u ? null : u.pid,
            d = null,
            m = null;
        null == c && (null != eG ? ((d = eG.id), (m = eG.name)) : null != eC && ((d = eC), (m = null == ej ? void 0 : ej.name))),
            (0, h.WH)(i, l, {
                pid: c,
                sourceId: d,
                sourceName: m,
                audioSourceId: eW,
                sound: eK,
                previewDisabled: eQ,
                nativePickerStyleUsed: e2,
                goLiveModalDurationMs: Date.now() - eg.current
            }),
            null != eA && eM(en.L.AUTO_DISMISS),
            eR ||
                (async () => {
                    (await P.Z.hasPermission(el.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        x.Z.show({
                            title: et.intl.string(et.t['X+mXen']),
                            body: et.intl.string(et.t.MIJCzs)
                        });
                })();
    }
    function e7() {
        e9(), eu();
    }
    i.useEffect(() => {
        let e = (0, U.isWindows)() ? (0, B.Z)(E.ZP, z.Z) : null,
            n = (null == e ? void 0 : e.id) != null ? C.Z.getApplication(e.id) : null;
        w.default.track(ee.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == n ? void 0 : n.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == n ? void 0 : n.id,
            location_section: eo
        }),
            I.Z.trackExposure({ location: 'GoLiveModal' });
    }, [eo]);
    let e5 = i.useCallback(
            (e, n, l) => {
                var t;
                let i = (0, V.Z)(e, eN, eT),
                    [s, r] = null != i ? i : [n, l];
                e !== eF && ((n = s), (l = r));
                let o = null !== (t = null == eZ ? void 0 : eZ.id) && void 0 !== t ? t : ey;
                a()(null != o, 'Received null target channel ID');
                let u = A.Z.getChannel(o);
                if (!(0, W.Z)(e, n, l, eN, eT, u)) {
                    let [e, t] = (0, V.Z)($.tI.PRESET_VIDEO, eN, eT);
                    (n = e), (l = t);
                }
                l !== eY && eH(l), n !== eB && eX(n), s !== n || r !== l ? eJ($.tI.PRESET_CUSTOM) : e !== eF && eJ(e);
            },
            [eZ, ey, eN, eT, eY, eB, eF]
        ),
        e8 = i.useCallback(
            (e) => {
                (0, F.t)(), (0, F.T)(null != e ? e : e2);
            },
            [e2]
        );
    function e6(e) {
        if ((e.preventDefault(), 1 === eL)) return e8();
        if (2 === eL) return eD(3);
        if (null != e2) return eD(1);
        let n = (0, K.Z)(ev, eG, E.ZP.getRunningGames());
        G.ZP.supportsFeature(ee.eRX.ELEVATED_HOOK) && (null == n ? void 0 : n.elevated)
            ? (function () {
                  var e;
                  let n = null !== (e = null == ev ? void 0 : ev.pid) && void 0 !== e ? e : null;
                  (0, m.ZDy)(async () => {
                      let { default: e } = await l.e('74300').then(l.bind(l, 566852));
                      return (l) =>
                          (0, t.jsx)(e, {
                              ...l,
                              handleStream: e7,
                              pid: n
                          });
                  });
              })()
            : e7();
    }
    let ne = i.useCallback(
            (e) => {
                eO(e), null != e && (eR && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e4(e.id.split(':')[1]) : e4(void 0), eD(3), ew(!0));
            },
            [eR]
        ),
        nn = i.useCallback(
            (e) => {
                e1(e);
                var n = 3;
                eD(ea ? 2 : 3);
            },
            [ea]
        ),
        nl = !(1 === eL && eR && eP === J.Uc.Error),
        nt = (function (e) {
            switch (e) {
                case 2:
                    return et.intl.string(et.t['aC4/Zm']);
                case 1:
                    return et.intl.formatToPlainString(et.t.sbbPhY, { buttonName: et.intl.string(et.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return et.intl.string(et.t['1hKIam']);
            }
        })(eL),
        ni = (0, t.jsx)(m.xBx, {
            className: ei.modalHeader,
            separator: !1,
            children: (0, t.jsxs)(N.Z, {
                direction: N.Z.Direction.VERTICAL,
                align: N.Z.Align.CENTER,
                className: ei.header,
                children: [
                    (0, t.jsx)(m.X6q, {
                        variant: 'heading-xl/semibold',
                        id: e_,
                        className: ei.headerText,
                        children: et.intl.string(et.t.RDkJQ0)
                    }),
                    nl && null != nt
                        ? (0, t.jsx)(m.Text, {
                              className: ei.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: nt
                          })
                        : null
                ]
            })
        }),
        ns = i.useCallback(() => {
            eR && (0, F.t)(), eD(2);
        }, [eR]),
        na = (function (e, n, l, t) {
            switch (e) {
                case 2:
                    return n ? 0 : null;
                case 1:
                    return 3;
                case 3:
                    if (t) return 2;
                    if (!l && n) return 0;
                    return null;
                default:
                    return null;
            }
        })(eL, q, ea, ez),
        nr = 1 !== eL && (3 !== eL || (null == eG && null == ev && null == eC) || null == e3),
        no = i.useCallback(() => {
            null != na && eD(na);
        }, [na]),
        nu = (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)(m.MyZ, {
                springConfig: {
                    ...r.config.stiff,
                    clamp: !0
                },
                activeSlide: eL,
                width: 480,
                children: [
                    (0, t.jsx)(m.Mi4, {
                        id: 0,
                        children: (0, t.jsx)('div', {
                            className: ei.modalSize,
                            children: (0, t.jsx)(Y.Z, { onSelectGuild: nn })
                        })
                    }),
                    (0, t.jsx)(m.Mi4, {
                        id: 2,
                        children: (0, t.jsx)('div', {
                            className: ei.modalSize,
                            children: eR
                                ? (0, t.jsx)(H.se, { onSourceSelect: ne })
                                : (0, t.jsx)(H.oA, {
                                      selectedSource: eG,
                                      onChangeSelectedSource: ne
                                  })
                        })
                    }),
                    (0, t.jsx)(m.Mi4, {
                        id: 3,
                        children: (0, t.jsx)('div', {
                            className: ei.modalSize,
                            children: (0, t.jsx)(X.Z, {
                                selectedChannelId: null !== (y = null == eZ ? void 0 : eZ.id) && void 0 !== y ? y : ey,
                                selectedPreset: eF,
                                selectedResolution: eB,
                                selectedSource: eG,
                                selectedFPS: eY,
                                sound: eK,
                                previewDisabled: eQ,
                                sourceChanged: ez,
                                selectSource: ea,
                                onChangeSelectedFPS: (e) => e5(eF, eB, e),
                                onChangeSelectedResolution: (e) => e5(eF, e, eY),
                                onChangeSelectedPreset: (e) => e5(e, eB, eY),
                                onChangeSelectedChannelId: eU,
                                onChangeSelectedSource: ne,
                                onChangeSource: () => ns(),
                                onChangeAudioDevice: (e) => eV(e),
                                onChangeGuild: () => eD(0),
                                onChangeSound: (e) => eq(e),
                                onChangePreviewDisabled: (e) => e$(e),
                                onClose: eu,
                                selectedGuildId: e0,
                                targetGuildPremiumTier: eT,
                                selectGuild: q
                            })
                        })
                    }),
                    (0, t.jsx)(m.Mi4, {
                        id: 1,
                        children: (0, t.jsx)('div', {
                            className: ei.modalSize,
                            children: (0, t.jsx)(H.Hu, {
                                onSourceSelect: e7,
                                onCancel: no,
                                pickerType: e2
                            })
                        })
                    })
                ]
            })
        }),
        nc = 1 === eL || (ek && 3 === eL) ? et.intl.string(et.t.FiBjwc) : eR && (3 !== eL || null != e2) ? et.intl.string(et.t.PDTjLC) : et.intl.string(et.t['UE/rPz']),
        nd = (0, t.jsxs)(m.mzw, {
            justify: null == na ? N.Z.Justify.START : N.Z.Justify.BETWEEN,
            children: [
                (0, t.jsx)(m.zxk, {
                    type: 'submit',
                    size: m.zxk.Sizes.SMALL,
                    disabled: nr,
                    autoFocus: !0,
                    children: nc
                }),
                null == na
                    ? (0, t.jsx)(m.zxk, {
                          className: ei.cancelButton,
                          look: m.zxk.Looks.LINK,
                          size: m.zxk.Sizes.SMALL,
                          color: m.Ttl.PRIMARY,
                          onClick: eu,
                          children: et.intl.string(et.t['ETE/oK'])
                      })
                    : (0, t.jsx)(m.zxk, {
                          size: m.zxk.Sizes.SMALL,
                          color: m.Ttl.PRIMARY,
                          onClick: no,
                          children: et.intl.string(et.t['13/7kZ'])
                      })
            ]
        });
    return (0, t.jsx)(g.Z, {
        page: ee.ZY5.GO_LIVE_MODAL,
        children: (0, t.jsxs)(m.Y0X, {
            'aria-labelledby': e_,
            transitionState: ec,
            size: m.CgR.DYNAMIC,
            className: ei.modalSize,
            children: [
                (0, t.jsx)(m.olH, {
                    onClick: eu,
                    className: ei.modalCloseButton
                }),
                (0, t.jsx)('div', { className: ei.art }),
                (0, t.jsx)(m.yRy, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eA,
                    spacing: 18,
                    renderPopout: () =>
                        (0, t.jsx)(es, {
                            visibleContent: eA,
                            markAsDismissed: eM
                        }),
                    children: () =>
                        (0, t.jsxs)('form', {
                            onSubmit: e6,
                            children: [ni, nu, nd]
                        })
                })
            ]
        })
    });
}
function er(e) {
    let { showRefreshedGoLiveModal: n } = (0, O.a)({ location: e.analyticsLocation });
    return n ? (0, t.jsx)(q.Z, { ...e }) : (0, t.jsx)(ea, { ...e });
}
