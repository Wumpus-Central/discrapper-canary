n.d(t, { default: () => ed }), n(47120), n(653041), n(301563);
var r = n(200651),
    l = n(192379),
    i = n(512722),
    s = n.n(i),
    o = n(642128),
    a = n(209739),
    c = n.n(a),
    d = n(252258),
    u = n(442837),
    f = n(704215),
    m = n(481060),
    h = n(668781),
    x = n(872810),
    g = n(410575),
    p = n(579806),
    _ = n(636449),
    v = n(317381),
    j = n(89425),
    b = n(812206),
    C = n(835473),
    S = n(600164),
    N = n(313201),
    y = n(243778),
    Z = n(594190),
    w = n(998594),
    O = n(751571),
    I = n(970731),
    P = n(695346),
    T = n(361291),
    E = n(592125),
    R = n(430824),
    W = n(131951),
    k = n(944486),
    A = n(594174),
    M = n(449224),
    L = n(626135),
    D = n(63063),
    G = n(358085),
    B = n(998502),
    U = n(668519),
    z = n(451467),
    F = n(537413),
    H = n(299570),
    V = n(960861),
    J = n(989941),
    X = n(399299),
    Y = n(351152),
    K = n(567126),
    q = n(143135),
    Q = n(717298),
    $ = n(70722),
    ee = n(37113),
    et = n(981631),
    en = n(921944),
    er = n(761274),
    el = n(388032),
    ei = n(711597);
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
function eo(e, t) {
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
    return t === f.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, r.jsx)(I.ZP, {
              content: el.NW.string(el.t.sFyFJy),
              buttonCTA: el.NW.string(el.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(D.Z.getArticleURL(et.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: el.NW.string(el.t.hvVgAQ),
              caretPosition: I.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function ec(e) {
    var t, i, a, I, D, U;
    let { selectGuild: Q = !1, selectSource: ec = !0, guildId: ed, analyticsLocation: eu, onClose: ef, transitionState: em } = e,
        { preset: eh, resolution: ex, fps: eg, soundshareEnabled: ep } = (0, u.cj)([T.Z], () => T.Z.getState()),
        e_ = l.useRef(Date.now()),
        ev = (0, u.e7)([k.Z, E.Z], () => E.Z.getChannel(k.Z.getVoiceChannelId())),
        ej = (0, u.e7)([Z.ZP, M.Z], () => ((0, G.isWindows)() ? (0, J.Z)(Z.ZP, M.Z) : null)),
        eb = (0, u.e7)([v.ZP], () => v.ZP.getCurrentEmbeddedActivity()),
        eC = (null == eb ? void 0 : eb.location.kind) === d.E.CONTEXTLESS,
        eS = (0, C.q)(null == eb ? void 0 : eb.applicationId),
        [eN, ey] = l.useState(null);
    l.useEffect(() => {
        (0, _.R)({ isContextless: eC }) &&
            (async () => {
                var e;
                ey(await (null === p.Z || void 0 === p.Z ? void 0 : null === (e = p.Z.window) || void 0 === e ? void 0 : e.getMediaSourceId('DISCORD_ACTIVITY_POPOUT')));
            })();
    }, [eC]);
    let eZ = (0, u.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return s()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        ew = null !== (t = null == ev ? void 0 : ev.getGuildId()) && void 0 !== t ? t : ed,
        eO = (0, u.e7)([R.Z], () => {
            var e;
            return null != ew ? (null === (e = R.Z.getGuild(ew)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [eI, eP] = null !== (i = (0, F.Z)(eh, eZ, eO)) && void 0 !== i ? i : [ee.LY.RESOLUTION_720, ee.ws.FPS_30],
        { lastPickerAction: eT } = (0, u.e7)([V.ZP], () => V.ZP.getPickerState()),
        eE = W.Z.getUseSystemScreensharePicker();
    (0, V.UB)();
    let eR = eE && (0, G.isMac)() && c().satisfies(null === p.Z || void 0 === p.Z ? void 0 : p.Z.os.release, $.jR),
        eW = [];
    em === m.Dvm.ENTERED && eE && (0, G.isMac)() && eW.push(f.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [ek, eA] = (0, y.US)(eW, void 0, !0);
    eh !== ee.tI.PRESET_CUSTOM && ((ex = eI), (eg = eP)), (0, z.Z)(eh, ex, eg, eZ, eO) || ((ex = eI), (eg = eP));
    let eM = (0, N.Dt)(),
        [eL, eD] = l.useState(((U = ec && !eR), Q ? 0 : U ? 2 : 3)),
        [eG, eB] = l.useState(eR),
        [eU, ez] = l.useState(null),
        [eF, eH] = l.useState(
            eR
                ? {
                      id: 'prepicked:',
                      name: el.NW.string(el.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eV, eJ] = l.useState(null),
        [eX, eY] = l.useState(eh),
        [eK, eq] = l.useState(ex),
        [eQ, e$] = l.useState(eg),
        [e1, e0] = l.useState(ep),
        [e2, e5] = l.useState(null !== (a = P.I0.getSetting()) && void 0 !== a && a),
        [e3, e4] = l.useState(null != ed ? ed : null),
        e7 = null !== (I = null == ev ? void 0 : ev.id) && void 0 !== I ? I : eU,
        [e8, e9] = l.useState(eR ? '' : void 0);
    async function e6() {
        var e, t;
        s()(null != ej || null != eF || (null != eb && null != eN), 'got nothing to stream');
        let n = null !== (e = null == ev ? void 0 : ev.id) && void 0 !== e ? e : eU;
        s()(null != n, 'Received null target channel ID');
        let r = E.Z.getChannel(n),
            l = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : ed;
        if (null == ev && !(await (0, j.Z)({ channelId: n }))) return;
        let i = eX,
            o = eK,
            a = eQ;
        (0, z.Z)(i, o, a, eZ, eO, r) || ((i = ee.tI.PRESET_VIDEO), (o = ee.LY.RESOLUTION_720), (a = ee.ws.FPS_30)),
            (0, x.Rc)({
                preset: i,
                resolution: o,
                frameRate: a,
                soundshareEnabled: e1
            });
        let c = {};
        if (null == eF ? void 0 : eF.id.startsWith('prepicked:')) c = V.ZP.getStreamStartOptions();
        else {
            let e = (0, q.Z)(ej, eF, Z.ZP.getRunningGames()),
                t = !(0, G.isWindows)() || null == e || (null == eF ? void 0 : eF.id.startsWith('camera:'));
            (c.pid = t ? void 0 : null == e ? void 0 : e.pid), null == c.pid && (null != eF ? ((c.sourceId = eF.id), (c.sourceName = eF.name)) : null != eN && ((c.sourceId = eN), (c.sourceName = null == eS ? void 0 : eS.name)));
        }
        (0, x.WH)(
            l,
            n,
            eo(es({}, c), {
                audioSourceId: eV,
                sound: e1,
                previewDisabled: e2,
                nativePickerStyleUsed: e8,
                goLiveModalDurationMs: Date.now() - e_.current
            })
        ),
            null != ek && eA(en.L.AUTO_DISMISS),
            eE ||
                (async () => {
                    (await O.Z.hasPermission(er.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        h.Z.show({
                            title: el.NW.string(el.t['X+mXen']),
                            body: el.NW.string(el.t.MIJCzs)
                        });
                })();
    }
    function te() {
        e6(), ef();
    }
    l.useEffect(() => {
        let e = (0, G.isWindows)() ? (0, J.Z)(Z.ZP, M.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? b.Z.getApplication(e.id) : null;
        L.default.track(et.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: eu
        }),
            w.Z.trackExposure({ location: 'GoLiveModal' });
    }, [eu]);
    let tt = l.useCallback(
            (e, t, n) => {
                var r;
                let l = (0, F.Z)(e, eZ, eO),
                    [i, o] = null != l ? l : [t, n];
                e !== eX && ((t = i), (n = o));
                let a = null !== (r = null == ev ? void 0 : ev.id) && void 0 !== r ? r : eU;
                s()(null != a, 'Received null target channel ID');
                let c = E.Z.getChannel(a);
                if (!(0, z.Z)(e, t, n, eZ, eO, c)) {
                    let [e, r] = (0, F.Z)(ee.tI.PRESET_VIDEO, eZ, eO);
                    (t = e), (n = r);
                }
                n !== eQ && e$(n), t !== eK && eq(t), i !== t || o !== n ? eY(ee.tI.PRESET_CUSTOM) : e !== eX && eY(e);
            },
            [ev, eU, eZ, eO, eQ, eK, eX]
        ),
        tn = l.useCallback(
            (e) => {
                (0, H.t)(), (0, H.T)(null != e ? e : e8);
            },
            [e8]
        );
    function tr(e) {
        if ((e.preventDefault(), 1 === eL)) return tn();
        if (2 === eL) return eD(3);
        if (null != e8) return eD(1);
        let t = (0, q.Z)(ej, eF, Z.ZP.getRunningGames());
        B.ZP.supportsFeature(et.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)
            ? (function () {
                  var e;
                  let t = null !== (e = null == ej ? void 0 : ej.pid) && void 0 !== e ? e : null;
                  (0, m.ZDy)(async () => {
                      let { default: e } = await n.e('74300').then(n.bind(n, 566852));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              eo(es({}, n), {
                                  handleStream: te,
                                  pid: t
                              })
                          );
                  });
              })()
            : te();
    }
    let tl = l.useCallback(
            (e) => {
                eH(e), null != e && (eE && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e9(e.id.split(':')[1]) : e9(void 0), eD(3), eB(!0));
            },
            [eE]
        ),
        ti = l.useCallback(
            (e) => {
                e4(e);
                var t = 3;
                eD(ec ? 2 : 3);
            },
            [ec]
        ),
        ts = !(1 === eL && eE && eT === V.Uc.Error),
        to = (function (e) {
            switch (e) {
                case 2:
                    return el.NW.string(el.t['aC4/Zm']);
                case 1:
                    return el.NW.formatToPlainString(el.t.sbbPhY, { buttonName: el.NW.string(el.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return el.NW.string(el.t['1hKIam']);
            }
        })(eL),
        ta = (0, r.jsx)(m.xBx, {
            className: ei.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(S.Z, {
                direction: S.Z.Direction.VERTICAL,
                align: S.Z.Align.CENTER,
                className: ei.header,
                children: [
                    (0, r.jsx)(m.X6q, {
                        variant: 'heading-xl/semibold',
                        id: eM,
                        className: ei.headerText,
                        children: el.NW.string(el.t.RDkJQ0)
                    }),
                    ts && null != to
                        ? (0, r.jsx)(m.Text, {
                              className: ei.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              children: to
                          })
                        : null
                ]
            })
        }),
        tc = l.useCallback(() => {
            eE && (0, H.t)(), eD(2);
        }, [eE]),
        td = (function (e, t, n, r) {
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
        })(eL, Q, ec, eG),
        tu = 1 !== eL && (3 !== eL || (null == eF && null == ej && null == eN) || null == e7),
        tf = l.useCallback(() => {
            null != td && eD(td);
        }, [td]),
        tm = (0, r.jsxs)(m.MyZ, {
            springConfig: eo(es({}, o.config.stiff), { clamp: !0 }),
            activeSlide: eL,
            width: 480,
            children: [
                (0, r.jsx)(m.Mi4, {
                    id: 0,
                    children: (0, r.jsx)('div', {
                        className: ei.modalSize,
                        children: (0, r.jsx)(Y.Z, { onSelectGuild: ti })
                    })
                }),
                (0, r.jsx)(m.Mi4, {
                    id: 2,
                    children: (0, r.jsx)('div', {
                        className: ei.modalSize,
                        children: eE
                            ? (0, r.jsx)(K.se, { onSourceSelect: tl })
                            : (0, r.jsx)(K.oA, {
                                  selectedSource: eF,
                                  onChangeSelectedSource: tl
                              })
                    })
                }),
                (0, r.jsx)(m.Mi4, {
                    id: 3,
                    children: (0, r.jsx)('div', {
                        className: ei.modalSize,
                        children: (0, r.jsx)(X.Z, {
                            selectedChannelId: null !== (D = null == ev ? void 0 : ev.id) && void 0 !== D ? D : eU,
                            selectedPreset: eX,
                            selectedResolution: eK,
                            selectedSource: eF,
                            selectedFPS: eQ,
                            sound: e1,
                            previewDisabled: e2,
                            sourceChanged: eG,
                            selectSource: ec,
                            onChangeSelectedFPS: (e) => tt(eX, eK, e),
                            onChangeSelectedResolution: (e) => tt(eX, e, eQ),
                            onChangeSelectedPreset: (e) => tt(e, eK, eQ),
                            onChangeSelectedChannelId: ez,
                            onChangeSelectedSource: tl,
                            onChangeSource: () => tc(),
                            onChangeAudioDevice: (e) => eJ(e),
                            onChangeGuild: () => eD(0),
                            onChangeSound: (e) => e0(e),
                            onChangePreviewDisabled: (e) => e5(e),
                            onClose: ef,
                            selectedGuildId: e3,
                            targetGuildPremiumTier: eO,
                            selectGuild: Q
                        })
                    })
                }),
                (0, r.jsx)(m.Mi4, {
                    id: 1,
                    children: (0, r.jsx)('div', {
                        className: ei.modalSize,
                        children: (0, r.jsx)(K.Hu, {
                            onSourceSelect: te,
                            onCancel: tf,
                            pickerType: e8
                        })
                    })
                })
            ]
        }),
        th = 1 === eL || (eR && 3 === eL) ? el.NW.string(el.t.FiBjwc) : eE && (3 !== eL || null != e8) ? el.NW.string(el.t.PDTjLC) : el.NW.string(el.t['UE/rPz']),
        tx = (0, r.jsxs)(m.mzw, {
            justify: null == td ? S.Z.Justify.START : S.Z.Justify.BETWEEN,
            children: [
                (0, r.jsx)(m.zxk, {
                    type: 'submit',
                    size: m.zxk.Sizes.SMALL,
                    disabled: tu,
                    autoFocus: !0,
                    children: th
                }),
                null == td
                    ? (0, r.jsx)(m.zxk, {
                          className: ei.cancelButton,
                          look: m.zxk.Looks.LINK,
                          size: m.zxk.Sizes.SMALL,
                          color: m.Ttl.PRIMARY,
                          onClick: ef,
                          children: el.NW.string(el.t['ETE/oK'])
                      })
                    : (0, r.jsx)(m.zxk, {
                          size: m.zxk.Sizes.SMALL,
                          color: m.Ttl.PRIMARY,
                          onClick: tf,
                          children: el.NW.string(el.t['13/7kZ'])
                      })
            ]
        });
    return (0, r.jsx)(g.Z, {
        page: et.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(m.Y0X, {
            'aria-labelledby': eM,
            transitionState: em,
            size: m.CgR.DYNAMIC,
            className: ei.modalSize,
            children: [
                (0, r.jsx)(m.olH, {
                    onClick: ef,
                    className: ei.modalCloseButton
                }),
                (0, r.jsx)('div', { className: ei.art }),
                (0, r.jsx)(m.yRy, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != ek,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(ea, {
                            visibleContent: ek,
                            markAsDismissed: eA
                        }),
                    children: () =>
                        (0, r.jsxs)('form', {
                            onSubmit: tr,
                            children: [ta, tm, tx]
                        })
                })
            ]
        })
    });
}
function ed(e) {
    let { showRefreshedGoLiveModal: t } = (0, U.a)({ location: e.analyticsLocation }),
        n = (0, u.e7)([Z.ZP], () => (null != e.sourcePID ? Z.ZP.getGameForPID(e.sourcePID) : void 0));
    return t ? (0, r.jsx)(Q.Z, eo(es({}, e), { sourceApplication: null != n ? n : void 0 })) : (0, r.jsx)(ec, es({}, e));
}
