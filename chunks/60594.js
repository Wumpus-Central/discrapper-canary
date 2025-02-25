n.d(t, { default: () => ec }), n(47120), n(653041), n(301563);
var r = n(200651),
    l = n(192379),
    s = n(512722),
    i = n.n(s),
    a = n(642128),
    o = n(209739),
    c = n.n(o),
    u = n(442837),
    d = n(704215),
    m = n(481060),
    p = n(668781),
    h = n(872810),
    g = n(410575),
    x = n(579806),
    f = n(636449),
    v = n(317381),
    j = n(89425),
    S = n(812206),
    N = n(835473),
    Z = n(600164),
    b = n(313201),
    O = n(243778),
    y = n(594190),
    C = n(998594),
    P = n(751571),
    E = n(970731),
    T = n(695346),
    I = n(361291),
    w = n(592125),
    _ = n(430824),
    R = n(131951),
    W = n(944486),
    A = n(594174),
    k = n(449224),
    L = n(626135),
    D = n(63063),
    M = n(358085),
    z = n(998502),
    U = n(668519),
    G = n(451467),
    F = n(537413),
    V = n(299570),
    Y = n(960861),
    B = n(989941),
    J = n(399299),
    X = n(351152),
    H = n(567126),
    K = n(143135),
    q = n(717298),
    Q = n(70722),
    $ = n(37113),
    ee = n(981631),
    et = n(921944),
    en = n(761274),
    er = n(388032),
    el = n(382840);
function es(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function ei(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ea = (e) => {
    let { visibleContent: t, markAsDismissed: n } = e;
    return t === d.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, r.jsx)(E.ZP, {
              content: er.NW.string(er.t.sFyFJy),
              buttonCTA: er.NW.string(er.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(D.Z.getArticleURL(ee.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: er.NW.string(er.t.hvVgAQ),
              caretPosition: E.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function eo(e) {
    var t, s, o, E, D, U;
    let { selectGuild: q = !1, selectSource: eo = !0, guildId: ec, analyticsLocation: eu, onClose: ed, transitionState: em } = e,
        { preset: ep, resolution: eh, fps: eg, soundshareEnabled: ex } = (0, u.cj)([I.Z], () => I.Z.getState()),
        ef = l.useRef(Date.now()),
        ev = (0, u.e7)([W.Z, w.Z], () => w.Z.getChannel(W.Z.getVoiceChannelId())),
        ej = (0, u.e7)([y.ZP, k.Z], () => ((0, M.isWindows)() ? (0, B.Z)(y.ZP, k.Z) : null)),
        eS = (0, u.e7)([v.ZP], () => v.ZP.getCurrentEmbeddedActivity()),
        eN = (0, N.q)(null == eS ? void 0 : eS.applicationId),
        [eZ, eb] = l.useState(null);
    l.useEffect(() => {
        (0, f.R)() &&
            (async () => {
                var e;
                eb(await (null === x.Z || void 0 === x.Z ? void 0 : null === (e = x.Z.window) || void 0 === e ? void 0 : e.getMediaSourceId('DISCORD_ACTIVITY_POPOUT')));
            })();
    }, []);
    let eO = (0, u.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return i()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        ey = null !== (t = null == ev ? void 0 : ev.getGuildId()) && void 0 !== t ? t : ec,
        eC = (0, u.e7)([_.Z], () => {
            var e;
            return null != ey ? (null === (e = _.Z.getGuild(ey)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [eP, eE] = null !== (s = (0, F.Z)(ep, eO, eC)) && void 0 !== s ? s : [$.LY.RESOLUTION_720, $.ws.FPS_30],
        { lastPickerAction: eT } = (0, u.e7)([Y.ZP], () => Y.ZP.getPickerState()),
        eI = R.Z.getUseSystemScreensharePicker();
    (0, Y.UB)();
    let ew = eI && (0, M.isMac)() && c().satisfies(null === x.Z || void 0 === x.Z ? void 0 : x.Z.os.release, Q.jR),
        e_ = [];
    em === m.Dvm.ENTERED && eI && (0, M.isMac)() && e_.push(d.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eR, eW] = (0, O.US)(e_, void 0, !0);
    ep !== $.tI.PRESET_CUSTOM && ((eh = eP), (eg = eE)), (0, G.Z)(ep, eh, eg, eO, eC) || ((eh = eP), (eg = eE));
    let eA = (0, b.Dt)(),
        [ek, eL] = l.useState(((U = eo && !ew), q ? 0 : U ? 2 : 3)),
        [eD, eM] = l.useState(ew),
        [ez, eU] = l.useState(null),
        [eG, eF] = l.useState(
            ew
                ? {
                      id: 'prepicked:',
                      name: er.NW.string(er.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eV, eY] = l.useState(null),
        [eB, eJ] = l.useState(ep),
        [eX, eH] = l.useState(eh),
        [eK, eq] = l.useState(eg),
        [eQ, e$] = l.useState(ex),
        [e0, e1] = l.useState(null !== (o = T.I0.getSetting()) && void 0 !== o && o),
        [e2, e3] = l.useState(null != ec ? ec : null),
        e4 = null !== (E = null == ev ? void 0 : ev.id) && void 0 !== E ? E : ez,
        [e7, e5] = l.useState(ew ? '' : void 0);
    async function e8() {
        var e, t;
        i()(null != ej || null != eG || (null != eS && null != eZ), 'got nothing to stream');
        let n = null !== (e = null == ev ? void 0 : ev.id) && void 0 !== e ? e : ez;
        i()(null != n, 'Received null target channel ID');
        let r = w.Z.getChannel(n),
            l = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : ec;
        if (null == ev && !(await (0, j.Z)({ channelId: n }))) return;
        let s = eB,
            a = eX,
            o = eK;
        (0, G.Z)(s, a, o, eO, eC, r) || ((s = $.tI.PRESET_VIDEO), (a = $.LY.RESOLUTION_720), (o = $.ws.FPS_30)),
            (0, h.Rc)({
                preset: s,
                resolution: a,
                frameRate: o,
                soundshareEnabled: eQ
            });
        let c = (0, K.Z)(ej, eG, y.ZP.getRunningGames()),
            u = !(0, M.isWindows)() || null == c || (null == eG ? void 0 : eG.id.startsWith('camera:')) || null == c ? null : c.pid,
            d = null,
            m = null;
        null == u && (null != eG ? ((d = eG.id), (m = eG.name)) : null != eZ && ((d = eZ), (m = null == eN ? void 0 : eN.name))),
            (0, h.WH)(l, n, {
                pid: u,
                sourceId: d,
                sourceName: m,
                audioSourceId: eV,
                sound: eQ,
                previewDisabled: e0,
                nativePickerStyleUsed: e7,
                goLiveModalDurationMs: Date.now() - ef.current
            }),
            null != eR && eW(et.L.AUTO_DISMISS),
            eI ||
                (async () => {
                    (await P.Z.hasPermission(en.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        p.Z.show({
                            title: er.NW.string(er.t['X+mXen']),
                            body: er.NW.string(er.t.MIJCzs)
                        });
                })();
    }
    function e6() {
        e8(), ed();
    }
    l.useEffect(() => {
        let e = (0, M.isWindows)() ? (0, B.Z)(y.ZP, k.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? S.Z.getApplication(e.id) : null;
        L.default.track(ee.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: eu
        }),
            C.Z.trackExposure({ location: 'GoLiveModal' });
    }, [eu]);
    let e9 = l.useCallback(
            (e, t, n) => {
                var r;
                let l = (0, F.Z)(e, eO, eC),
                    [s, a] = null != l ? l : [t, n];
                e !== eB && ((t = s), (n = a));
                let o = null !== (r = null == ev ? void 0 : ev.id) && void 0 !== r ? r : ez;
                i()(null != o, 'Received null target channel ID');
                let c = w.Z.getChannel(o);
                if (!(0, G.Z)(e, t, n, eO, eC, c)) {
                    let [e, r] = (0, F.Z)($.tI.PRESET_VIDEO, eO, eC);
                    (t = e), (n = r);
                }
                n !== eK && eq(n), t !== eX && eH(t), s !== t || a !== n ? eJ($.tI.PRESET_CUSTOM) : e !== eB && eJ(e);
            },
            [ev, ez, eO, eC, eK, eX, eB]
        ),
        te = l.useCallback(
            (e) => {
                (0, V.t)(), (0, V.T)(null != e ? e : e7);
            },
            [e7]
        );
    function tt(e) {
        if ((e.preventDefault(), 1 === ek)) return te();
        if (2 === ek) return eL(3);
        if (null != e7) return eL(1);
        let t = (0, K.Z)(ej, eG, y.ZP.getRunningGames());
        z.ZP.supportsFeature(ee.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)
            ? (function () {
                  var e;
                  let t = null !== (e = null == ej ? void 0 : ej.pid) && void 0 !== e ? e : null;
                  (0, m.ZDy)(async () => {
                      let { default: e } = await n.e('74300').then(n.bind(n, 566852));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              ei(es({}, n), {
                                  handleStream: e6,
                                  pid: t
                              })
                          );
                  });
              })()
            : e6();
    }
    let tn = l.useCallback(
            (e) => {
                eF(e), null != e && (eI && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e5(e.id.split(':')[1]) : e5(void 0), eL(3), eM(!0));
            },
            [eI]
        ),
        tr = l.useCallback(
            (e) => {
                e3(e);
                var t = 3;
                eL(eo ? 2 : 3);
            },
            [eo]
        ),
        tl = !(1 === ek && eI && eT === Y.Uc.Error),
        ts = (function (e) {
            switch (e) {
                case 2:
                    return er.NW.string(er.t['aC4/Zm']);
                case 1:
                    return er.NW.formatToPlainString(er.t.sbbPhY, { buttonName: er.NW.string(er.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return er.NW.string(er.t['1hKIam']);
            }
        })(ek),
        ti = (0, r.jsx)(m.xBx, {
            className: el.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(Z.Z, {
                direction: Z.Z.Direction.VERTICAL,
                align: Z.Z.Align.CENTER,
                className: el.header,
                children: [
                    (0, r.jsx)(m.X6q, {
                        variant: 'heading-xl/semibold',
                        id: eA,
                        className: el.headerText,
                        children: er.NW.string(er.t.RDkJQ0)
                    }),
                    tl && null != ts
                        ? (0, r.jsx)(m.Text, {
                              className: el.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: ts
                          })
                        : null
                ]
            })
        }),
        ta = l.useCallback(() => {
            eI && (0, V.t)(), eL(2);
        }, [eI]),
        to = (function (e, t, n, r) {
            switch (e) {
                case 2:
                    return t ? 0 : null;
                case 1:
                    return 3;
                case 3:
                    if (r) return 2;
                    if (!n && t) return 0;
                    return null;
                default:
                    return null;
            }
        })(ek, q, eo, eD),
        tc = 1 !== ek && (3 !== ek || (null == eG && null == ej && null == eZ) || null == e4),
        tu = l.useCallback(() => {
            null != to && eL(to);
        }, [to]),
        td = (0, r.jsxs)(m.MyZ, {
            springConfig: ei(es({}, a.config.stiff), { clamp: !0 }),
            activeSlide: ek,
            width: 480,
            children: [
                (0, r.jsx)(m.Mi4, {
                    id: 0,
                    children: (0, r.jsx)('div', {
                        className: el.modalSize,
                        children: (0, r.jsx)(X.Z, { onSelectGuild: tr })
                    })
                }),
                (0, r.jsx)(m.Mi4, {
                    id: 2,
                    children: (0, r.jsx)('div', {
                        className: el.modalSize,
                        children: eI
                            ? (0, r.jsx)(H.se, { onSourceSelect: tn })
                            : (0, r.jsx)(H.oA, {
                                  selectedSource: eG,
                                  onChangeSelectedSource: tn
                              })
                    })
                }),
                (0, r.jsx)(m.Mi4, {
                    id: 3,
                    children: (0, r.jsx)('div', {
                        className: el.modalSize,
                        children: (0, r.jsx)(J.Z, {
                            selectedChannelId: null !== (D = null == ev ? void 0 : ev.id) && void 0 !== D ? D : ez,
                            selectedPreset: eB,
                            selectedResolution: eX,
                            selectedSource: eG,
                            selectedFPS: eK,
                            sound: eQ,
                            previewDisabled: e0,
                            sourceChanged: eD,
                            selectSource: eo,
                            onChangeSelectedFPS: (e) => e9(eB, eX, e),
                            onChangeSelectedResolution: (e) => e9(eB, e, eK),
                            onChangeSelectedPreset: (e) => e9(e, eX, eK),
                            onChangeSelectedChannelId: eU,
                            onChangeSelectedSource: tn,
                            onChangeSource: () => ta(),
                            onChangeAudioDevice: (e) => eY(e),
                            onChangeGuild: () => eL(0),
                            onChangeSound: (e) => e$(e),
                            onChangePreviewDisabled: (e) => e1(e),
                            onClose: ed,
                            selectedGuildId: e2,
                            targetGuildPremiumTier: eC,
                            selectGuild: q
                        })
                    })
                }),
                (0, r.jsx)(m.Mi4, {
                    id: 1,
                    children: (0, r.jsx)('div', {
                        className: el.modalSize,
                        children: (0, r.jsx)(H.Hu, {
                            onSourceSelect: e6,
                            onCancel: tu,
                            pickerType: e7
                        })
                    })
                })
            ]
        }),
        tm = 1 === ek || (ew && 3 === ek) ? er.NW.string(er.t.FiBjwc) : eI && (3 !== ek || null != e7) ? er.NW.string(er.t.PDTjLC) : er.NW.string(er.t['UE/rPz']),
        tp = (0, r.jsxs)(m.mzw, {
            justify: null == to ? Z.Z.Justify.START : Z.Z.Justify.BETWEEN,
            children: [
                (0, r.jsx)(m.zxk, {
                    type: 'submit',
                    size: m.zxk.Sizes.SMALL,
                    disabled: tc,
                    autoFocus: !0,
                    children: tm
                }),
                null == to
                    ? (0, r.jsx)(m.zxk, {
                          className: el.cancelButton,
                          look: m.zxk.Looks.LINK,
                          size: m.zxk.Sizes.SMALL,
                          color: m.Ttl.PRIMARY,
                          onClick: ed,
                          children: er.NW.string(er.t['ETE/oK'])
                      })
                    : (0, r.jsx)(m.zxk, {
                          size: m.zxk.Sizes.SMALL,
                          color: m.Ttl.PRIMARY,
                          onClick: tu,
                          children: er.NW.string(er.t['13/7kZ'])
                      })
            ]
        });
    return (0, r.jsx)(g.Z, {
        page: ee.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(m.Y0X, {
            'aria-labelledby': eA,
            transitionState: em,
            size: m.CgR.DYNAMIC,
            className: el.modalSize,
            children: [
                (0, r.jsx)(m.olH, {
                    onClick: ed,
                    className: el.modalCloseButton
                }),
                (0, r.jsx)('div', { className: el.art }),
                (0, r.jsx)(m.yRy, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eR,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(ea, {
                            visibleContent: eR,
                            markAsDismissed: eW
                        }),
                    children: () =>
                        (0, r.jsxs)('form', {
                            onSubmit: tt,
                            children: [ti, td, tp]
                        })
                })
            ]
        })
    });
}
function ec(e) {
    let { showRefreshedGoLiveModal: t } = (0, U.a)({ location: e.analyticsLocation }),
        n = (0, u.e7)([y.ZP], () => (null != e.sourcePID ? y.ZP.getGameForPID(e.sourcePID) : void 0));
    return t ? (0, r.jsx)(q.Z, ei(es({}, e), { sourceApplication: null != n ? n : void 0 })) : (0, r.jsx)(eo, es({}, e));
}
