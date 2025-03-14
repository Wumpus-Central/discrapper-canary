n.d(t, { default: () => em }), n(47120), n(653041), n(301563);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    o = n(512722),
    a = n.n(o),
    c = n(642128),
    d = n(209739),
    u = n.n(d),
    f = n(252258),
    m = n(442837),
    h = n(704215),
    x = n(481060),
    g = n(668781),
    p = n(872810),
    _ = n(410575),
    v = n(579806),
    j = n(636449),
    b = n(317381),
    C = n(89425),
    N = n(812206),
    S = n(835473),
    y = n(600164),
    Z = n(313201),
    w = n(540059),
    O = n(243778),
    I = n(594190),
    P = n(998594),
    T = n(751571),
    E = n(970731),
    R = n(695346),
    W = n(361291),
    k = n(592125),
    A = n(430824),
    M = n(131951),
    L = n(944486),
    D = n(594174),
    G = n(449224),
    B = n(626135),
    U = n(63063),
    F = n(358085),
    z = n(998502),
    H = n(668519),
    V = n(451467),
    J = n(537413),
    X = n(299570),
    Y = n(960861),
    K = n(989941),
    q = n(399299),
    Q = n(351152),
    $ = n(567126),
    ee = n(143135),
    et = n(717298),
    en = n(70722),
    er = n(37113),
    el = n(981631),
    ei = n(921944),
    es = n(761274),
    eo = n(388032),
    ea = n(711597);
function ec(e) {
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
function ed(e, t) {
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
let eu = (e) => {
    let { visibleContent: t, markAsDismissed: n } = e;
    return t === h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, r.jsx)(E.ZP, {
              content: eo.NW.string(eo.t.sFyFJy),
              buttonCTA: eo.NW.string(eo.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(U.Z.getArticleURL(el.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: eo.NW.string(eo.t.hvVgAQ),
              caretPosition: E.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function ef(e) {
    var t, i, o, d, E, U;
    let { selectGuild: H = !1, selectSource: et = !0, guildId: ef, analyticsLocation: em, onClose: eh, transitionState: ex } = e,
        { preset: eg, resolution: ep, fps: e_, soundshareEnabled: ev } = (0, m.cj)([W.Z], () => W.Z.getState()),
        ej = l.useRef(Date.now()),
        eb = (0, m.e7)([L.Z, k.Z], () => k.Z.getChannel(L.Z.getVoiceChannelId())),
        eC = (0, m.e7)([I.ZP, G.Z], () => ((0, F.isWindows)() ? (0, K.Z)(I.ZP, G.Z) : null)),
        eN = (0, m.e7)([b.ZP], () => b.ZP.getCurrentEmbeddedActivity()),
        eS = (null == eN ? void 0 : eN.location.kind) === f.E.CONTEXTLESS,
        ey = (0, S.q)(null == eN ? void 0 : eN.applicationId),
        [eZ, ew] = l.useState(null);
    l.useEffect(() => {
        (0, j.R)({ isContextless: eS }) &&
            (async () => {
                var e;
                ew(await (null === v.Z || void 0 === v.Z ? void 0 : null === (e = v.Z.window) || void 0 === e ? void 0 : e.getMediaSourceId('DISCORD_ACTIVITY_POPOUT')));
            })();
    }, [eS]);
    let eO = (0, m.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return a()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eI = null !== (t = null == eb ? void 0 : eb.getGuildId()) && void 0 !== t ? t : ef,
        eP = (0, m.e7)([A.Z], () => {
            var e;
            return null != eI ? (null === (e = A.Z.getGuild(eI)) || void 0 === e ? void 0 : e.premiumTier) : null;
        }),
        [eT, eE] = null !== (i = (0, J.Z)(eg, eO, eP)) && void 0 !== i ? i : [er.LY.RESOLUTION_720, er.ws.FPS_30],
        { lastPickerAction: eR } = (0, m.e7)([Y.ZP], () => Y.ZP.getPickerState()),
        eW = M.Z.getUseSystemScreensharePicker();
    (0, Y.UB)();
    let ek = eW && (0, F.isMac)() && u().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, en.jR),
        eA = [];
    ex === x.Dvm.ENTERED && eW && (0, F.isMac)() && eA.push(h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eM, eL] = (0, O.US)(eA, void 0, !0);
    eg !== er.tI.PRESET_CUSTOM && ((ep = eT), (e_ = eE)), (0, V.Z)(eg, ep, e_, eO, eP) || ((ep = eT), (e_ = eE));
    let eD = (0, Z.Dt)(),
        [eG, eB] = l.useState(((U = et && !ek), H ? 0 : U ? 2 : 3)),
        [eU, eF] = l.useState(ek),
        [ez, eH] = l.useState(null),
        [eV, eJ] = l.useState(
            ek
                ? {
                      id: 'prepicked:',
                      name: eo.NW.string(eo.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eX, eY] = l.useState(null),
        [eK, eq] = l.useState(eg),
        [eQ, e$] = l.useState(ep),
        [e1, e0] = l.useState(e_),
        [e2, e5] = l.useState(ev),
        [e3, e4] = l.useState(null !== (o = R.I0.getSetting()) && void 0 !== o && o),
        [e7, e8] = l.useState(null != ef ? ef : null),
        e9 = null !== (d = null == eb ? void 0 : eb.id) && void 0 !== d ? d : ez,
        [e6, te] = l.useState(ek ? '' : void 0),
        tt = (0, w.Q3)('GoLiveModal');
    async function tn() {
        var e, t;
        a()(null != eC || null != eV || (null != eN && null != eZ), 'got nothing to stream');
        let n = null !== (e = null == eb ? void 0 : eb.id) && void 0 !== e ? e : ez;
        a()(null != n, 'Received null target channel ID');
        let r = k.Z.getChannel(n),
            l = null !== (t = null == r ? void 0 : r.getGuildId()) && void 0 !== t ? t : ef;
        if (null == eb && !(await (0, C.Z)({ channelId: n }))) return;
        let i = eK,
            s = eQ,
            o = e1;
        (0, V.Z)(i, s, o, eO, eP, r) || ((i = er.tI.PRESET_VIDEO), (s = er.LY.RESOLUTION_720), (o = er.ws.FPS_30)),
            (0, p.Rc)({
                preset: i,
                resolution: s,
                frameRate: o,
                soundshareEnabled: e2
            });
        let c = {};
        if (null == eV ? void 0 : eV.id.startsWith('prepicked:')) c = Y.ZP.getStreamStartOptions();
        else {
            let e = (0, ee.Z)(eC, eV, I.ZP.getRunningGames()),
                t = !(0, F.isWindows)() || null == e || (null == eV ? void 0 : eV.id.startsWith('camera:'));
            (c.pid = t ? void 0 : null == e ? void 0 : e.pid), null == c.pid && (null != eV ? ((c.sourceId = eV.id), (c.sourceName = eV.name)) : null != eZ && ((c.sourceId = eZ), (c.sourceName = null == ey ? void 0 : ey.name)));
        }
        (0, p.WH)(
            l,
            n,
            ed(ec({}, c), {
                audioSourceId: eX,
                sound: e2,
                previewDisabled: e3,
                nativePickerStyleUsed: e6,
                goLiveModalDurationMs: Date.now() - ej.current
            })
        ),
            null != eM && eL(ei.L.AUTO_DISMISS),
            eW ||
                (async () => {
                    (await T.Z.hasPermission(es.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        g.Z.show({
                            title: eo.NW.string(eo.t['X+mXen']),
                            body: eo.NW.string(eo.t.MIJCzs)
                        });
                })();
    }
    function tr() {
        tn(), eh();
    }
    l.useEffect(() => {
        let e = (0, F.isWindows)() ? (0, K.Z)(I.ZP, G.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? N.Z.getApplication(e.id) : null;
        B.default.track(el.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: em
        }),
            P.Z.trackExposure({ location: 'GoLiveModal' });
    }, [em]);
    let tl = l.useCallback(
            (e, t, n) => {
                var r;
                let l = (0, J.Z)(e, eO, eP),
                    [i, s] = null != l ? l : [t, n];
                e !== eK && ((t = i), (n = s));
                let o = null !== (r = null == eb ? void 0 : eb.id) && void 0 !== r ? r : ez;
                a()(null != o, 'Received null target channel ID');
                let c = k.Z.getChannel(o);
                if (!(0, V.Z)(e, t, n, eO, eP, c)) {
                    let [e, r] = (0, J.Z)(er.tI.PRESET_VIDEO, eO, eP);
                    (t = e), (n = r);
                }
                n !== e1 && e0(n), t !== eQ && e$(t), i !== t || s !== n ? eq(er.tI.PRESET_CUSTOM) : e !== eK && eq(e);
            },
            [eb, ez, eO, eP, e1, eQ, eK]
        ),
        ti = l.useCallback(
            (e) => {
                (0, X.t)(), (0, X.T)(null != e ? e : e6);
            },
            [e6]
        );
    function ts(e) {
        if ((e.preventDefault(), 1 === eG)) return ti();
        if (2 === eG) return eB(3);
        if (null != e6) return eB(1);
        let t = (0, ee.Z)(eC, eV, I.ZP.getRunningGames());
        z.ZP.supportsFeature(el.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)
            ? (function () {
                  var e;
                  let t = null !== (e = null == eC ? void 0 : eC.pid) && void 0 !== e ? e : null;
                  (0, x.ZDy)(async () => {
                      let { default: e } = await n.e('74300').then(n.bind(n, 566852));
                      return (n) =>
                          (0, r.jsx)(
                              e,
                              ed(ec({}, n), {
                                  handleStream: tr,
                                  pid: t
                              })
                          );
                  });
              })()
            : tr();
    }
    let to = l.useCallback(
            (e) => {
                eJ(e), null != e && (eW && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? te(e.id.split(':')[1]) : te(void 0), eB(3), eF(!0));
            },
            [eW]
        ),
        ta = l.useCallback(
            (e) => {
                e8(e);
                var t = 3;
                eB(et ? 2 : 3);
            },
            [et]
        ),
        tc = !(1 === eG && eW && eR === Y.Uc.Error),
        td = (function (e) {
            switch (e) {
                case 2:
                    return eo.NW.string(eo.t['aC4/Zm']);
                case 1:
                    return eo.NW.formatToPlainString(eo.t.sbbPhY, { buttonName: eo.NW.string(eo.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return eo.NW.string(eo.t['1hKIam']);
            }
        })(eG),
        tu = (0, r.jsx)(x.xBx, {
            className: ea.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(y.Z, {
                direction: y.Z.Direction.VERTICAL,
                align: y.Z.Align.CENTER,
                className: ea.header,
                children: [
                    (0, r.jsx)(x.X6q, {
                        variant: 'heading-xl/semibold',
                        id: eD,
                        className: ea.headerText,
                        children: eo.NW.string(eo.t.RDkJQ0)
                    }),
                    tc && null != td
                        ? (0, r.jsx)(x.Text, {
                              className: ea.headerDescription,
                              variant: 'text-md/normal',
                              color: tt ? 'text-secondary' : 'text-normal',
                              children: td
                          })
                        : null
                ]
            })
        }),
        tf = l.useCallback(() => {
            eW && (0, X.t)(), eB(2);
        }, [eW]),
        tm = (function (e, t, n, r) {
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
        })(eG, H, et, eU),
        th = 1 !== eG && (3 !== eG || (null == eV && null == eC && null == eZ) || null == e9),
        tx = l.useCallback(() => {
            null != tm && eB(tm);
        }, [tm]),
        tg = (0, r.jsxs)(x.MyZ, {
            springConfig: ed(ec({}, c.config.stiff), { clamp: !0 }),
            activeSlide: eG,
            width: 480,
            children: [
                (0, r.jsx)(x.Mi4, {
                    id: 0,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: (0, r.jsx)(Q.Z, { onSelectGuild: ta })
                    })
                }),
                (0, r.jsx)(x.Mi4, {
                    id: 2,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: eW
                            ? (0, r.jsx)($.se, { onSourceSelect: to })
                            : (0, r.jsx)($.oA, {
                                  selectedSource: eV,
                                  onChangeSelectedSource: to
                              })
                    })
                }),
                (0, r.jsx)(x.Mi4, {
                    id: 3,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: (0, r.jsx)(q.Z, {
                            selectedChannelId: null !== (E = null == eb ? void 0 : eb.id) && void 0 !== E ? E : ez,
                            selectedPreset: eK,
                            selectedResolution: eQ,
                            selectedSource: eV,
                            selectedFPS: e1,
                            sound: e2,
                            previewDisabled: e3,
                            sourceChanged: eU,
                            selectSource: et,
                            onChangeSelectedFPS: (e) => tl(eK, eQ, e),
                            onChangeSelectedResolution: (e) => tl(eK, e, e1),
                            onChangeSelectedPreset: (e) => tl(e, eQ, e1),
                            onChangeSelectedChannelId: eH,
                            onChangeSelectedSource: to,
                            onChangeSource: () => tf(),
                            onChangeAudioDevice: (e) => eY(e),
                            onChangeGuild: () => eB(0),
                            onChangeSound: (e) => e5(e),
                            onChangePreviewDisabled: (e) => e4(e),
                            onClose: eh,
                            selectedGuildId: e7,
                            targetGuildPremiumTier: eP,
                            selectGuild: H
                        })
                    })
                }),
                (0, r.jsx)(x.Mi4, {
                    id: 1,
                    children: (0, r.jsx)('div', {
                        className: ea.modalSize,
                        children: (0, r.jsx)($.Hu, {
                            onSourceSelect: tr,
                            onCancel: tx,
                            pickerType: e6
                        })
                    })
                })
            ]
        }),
        tp = 1 === eG || (ek && 3 === eG) ? eo.NW.string(eo.t.FiBjwc) : eW && (3 !== eG || null != e6) ? eo.NW.string(eo.t.PDTjLC) : eo.NW.string(eo.t['UE/rPz']),
        t_ = (0, r.jsxs)(x.mzw, {
            className: ea.modalFooter,
            justify: null == tm ? y.Z.Justify.START : y.Z.Justify.BETWEEN,
            children: [
                (0, r.jsx)(x.zxk, {
                    type: 'submit',
                    size: x.zxk.Sizes.SMALL,
                    disabled: th,
                    autoFocus: !0,
                    children: tp
                }),
                null == tm
                    ? (0, r.jsx)(x.zxk, {
                          className: ea.cancelButton,
                          look: x.zxk.Looks.LINK,
                          size: x.zxk.Sizes.SMALL,
                          color: x.Ttl.PRIMARY,
                          onClick: eh,
                          children: eo.NW.string(eo.t['ETE/oK'])
                      })
                    : (0, r.jsx)(x.zxk, {
                          size: x.zxk.Sizes.SMALL,
                          color: x.Ttl.PRIMARY,
                          onClick: tx,
                          children: eo.NW.string(eo.t['13/7kZ'])
                      })
            ]
        });
    return (0, r.jsx)(_.Z, {
        page: el.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(x.Y0X, {
            'aria-labelledby': eD,
            transitionState: ex,
            size: x.CgR.DYNAMIC,
            className: s()(ea.modalSize, ea.border),
            children: [
                tt
                    ? (0, r.jsxs)('div', {
                          className: ea.container,
                          children: [
                              (0, r.jsx)(x.olH, {
                                  onClick: eh,
                                  className: ea.modalCloseButton
                              }),
                              (0, r.jsx)('div', {
                                  className: ea.artContainer,
                                  children: (0, r.jsx)('div', { className: ea.refreshedArt })
                              }),
                              (0, r.jsx)('div', { children: tu })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(x.olH, {
                                  onClick: eh,
                                  className: ea.modalCloseButton
                              }),
                              (0, r.jsx)('div', { className: ea.art })
                          ]
                      }),
                (0, r.jsx)(x.yRy, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eM,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(eu, {
                            visibleContent: eM,
                            markAsDismissed: eL
                        }),
                    children: () =>
                        (0, r.jsxs)('form', {
                            onSubmit: ts,
                            children: [!tt && tu, tg, t_]
                        })
                })
            ]
        })
    });
}
function em(e) {
    let { showRefreshedGoLiveModal: t } = (0, H.a)({ location: e.analyticsLocation }),
        n = (0, m.e7)([I.ZP], () => (null != e.sourcePID ? I.ZP.getGameForPID(e.sourcePID) : void 0));
    return t ? (0, r.jsx)(et.Z, ed(ec({}, e), { sourceApplication: null != n ? n : void 0 })) : (0, r.jsx)(ef, ec({}, e));
}
