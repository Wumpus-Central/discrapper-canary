n.d(t, { default: () => em }), n(388685), n(539854), n(35282);
var r = n(255367),
    l = n(73800),
    i = n(120356),
    s = n.n(i),
    o = n(512722),
    a = n.n(o),
    c = n(683305),
    d = n(209739),
    u = n.n(d),
    f = n(252258),
    m = n(442837),
    h = n(704215),
    p = n(481060),
    x = n(668781),
    g = n(872810),
    _ = n(410575),
    v = n(579806),
    j = n(636449),
    S = n(317381),
    b = n(89425),
    C = n(812206),
    y = n(835473),
    O = n(600164),
    Z = n(313201),
    w = n(540059),
    I = n(243778),
    N = n(594190),
    E = n(751571),
    T = n(970731),
    P = n(695346),
    R = n(361291),
    k = n(592125),
    A = n(430824),
    M = n(131951),
    L = n(944486),
    D = n(594174),
    B = n(449224),
    U = n(626135),
    G = n(63063),
    W = n(358085),
    z = n(998502),
    F = n(668519),
    H = n(451467),
    V = n(537413),
    Y = n(299570),
    J = n(960861),
    X = n(989941),
    K = n(399299),
    q = n(351152),
    Q = n(567126),
    $ = n(143135),
    ee = n(717298),
    et = n(70722),
    en = n(37113),
    er = n(981631),
    el = n(921944),
    ei = n(761274),
    es = n(388032),
    eo = n(347226),
    ea = n(402163);
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
        ? (0, r.jsx)(T.ZP, {
              content: es.intl.string(es.t.sFyFJy),
              buttonCTA: es.intl.string(es.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(G.Z.getArticleURL(er.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: es.intl.string(es.t.hvVgAQ),
              caretPosition: T.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function ef(e) {
    var t, i, o, d, T, G;
    let { selectGuild: F = !1, selectSource: ee = !0, guildId: ef, analyticsLocation: em, onClose: eh, transitionState: ep } = e,
        { preset: ex, resolution: eg, fps: e_, soundshareEnabled: ev } = (0, m.cj)([R.Z], () => R.Z.getState()),
        ej = l.useRef(Date.now()),
        eS = (0, m.e7)([L.Z, k.Z], () => k.Z.getChannel(L.Z.getVoiceChannelId())),
        eb = (0, m.e7)([N.ZP, B.Z], () => ((0, W.isWindows)() ? (0, X.Z)(N.ZP, B.Z) : null)),
        eC = (0, m.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
        ey = (null == eC ? void 0 : eC.location.kind) === f.E.CONTEXTLESS,
        eO = (0, y.q)(null == eC ? void 0 : eC.applicationId),
        [eZ, ew] = l.useState(null);
    l.useEffect(() => {
        (0, j.R)() &&
            (async () => {
                var e;
                ew(await (null === v.Z || void 0 === v.Z || null == (e = v.Z.window) ? void 0 : e.getMediaSourceId('DISCORD_ACTIVITY_POPOUT')));
            })();
    }, [ey]);
    let eI = (0, m.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return a()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eN = null != (t = null == eS ? void 0 : eS.getGuildId()) ? t : ef,
        eE = (0, m.e7)([A.Z], () => {
            var e;
            return null != eN ? (null == (e = A.Z.getGuild(eN)) ? void 0 : e.premiumTier) : null;
        }),
        [eT, eP] = null != (i = (0, V.Z)(ex, eI, eE)) ? i : [en.LY.RESOLUTION_720, en.ws.FPS_30],
        { lastPickerAction: eR } = (0, m.e7)([J.ZP], () => J.ZP.getPickerState()),
        ek = M.Z.getUseSystemScreensharePicker();
    (0, J.UB)();
    let eA = ek && (0, W.isMac)() && u().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, et.jR),
        eM = [];
    ep === p.Dvm.ENTERED && ek && (0, W.isMac)() && eM.push(h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eL, eD] = (0, I.US)(eM, void 0, !0);
    ex !== en.tI.PRESET_CUSTOM && ((eg = eT), (e_ = eP)), (0, H.Z)(ex, eg, e_, eI, eE) || ((eg = eT), (e_ = eP));
    let eB = (0, Z.Dt)(),
        [eU, eG] = l.useState(((G = ee && !eA), F ? 0 : G ? 2 : 3)),
        [eW, ez] = l.useState(eA),
        [eF, eH] = l.useState(null),
        [eV, eY] = l.useState(
            eA
                ? {
                      id: 'prepicked:',
                      name: es.intl.string(es.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eJ, eX] = l.useState(null),
        [eK, eq] = l.useState(ex),
        [eQ, e$] = l.useState(eg),
        [e1, e0] = l.useState(e_),
        [e2, e5] = l.useState(ev),
        [e3, e8] = l.useState(null != (o = P.I0.getSetting()) && o),
        [e4, e7] = l.useState(null != ef ? ef : null),
        e6 = null != (d = null == eS ? void 0 : eS.id) ? d : eF,
        [e9, te] = l.useState(eA ? '' : void 0),
        tt = (0, w.Q3)('GoLiveModal');
    async function tn() {
        var e, t;
        a()(null != eb || null != eV || (null != eC && null != eZ), 'got nothing to stream');
        let n = null != (e = null == eS ? void 0 : eS.id) ? e : eF;
        a()(null != n, 'Received null target channel ID');
        let r = k.Z.getChannel(n),
            l = null != (t = null == r ? void 0 : r.getGuildId()) ? t : ef;
        if (null == eS && !(await (0, b.Z)({ channelId: n }))) return;
        let i = eK,
            s = eQ,
            o = e1;
        (0, H.Z)(i, s, o, eI, eE, r) || ((i = en.tI.PRESET_VIDEO), (s = en.LY.RESOLUTION_720), (o = en.ws.FPS_30)),
            (0, g.Rc)({
                preset: i,
                resolution: s,
                frameRate: o,
                soundshareEnabled: e2
            });
        let c = {};
        if (null == eV ? void 0 : eV.id.startsWith('prepicked:')) c = J.ZP.getStreamStartOptions();
        else {
            let e = (0, $.Z)(eb, eV, N.ZP.getRunningGames()),
                t = !(0, W.isWindows)() || null == e || (null == eV ? void 0 : eV.id.startsWith('camera:'));
            (c.pid = t || null == e ? void 0 : e.pid), null == c.pid && (null != eV ? ((c.sourceId = eV.id), (c.sourceName = eV.name)) : null != eZ && ((c.sourceId = eZ), (c.sourceName = null == eO ? void 0 : eO.name)));
        }
        (0, g.WH)(
            l,
            n,
            ed(ec({}, c), {
                audioSourceId: eJ,
                sound: e2,
                previewDisabled: e3,
                nativePickerStyleUsed: e9,
                goLiveModalDurationMs: Date.now() - ej.current
            })
        ),
            null != eL && eD(el.L.AUTO_DISMISS),
            ek ||
                (async () => {
                    (await E.Z.hasPermission(ei.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        x.Z.show({
                            title: es.intl.string(es.t['X+mXen']),
                            body: es.intl.string(es.t.MIJCzs)
                        });
                })();
    }
    function tr() {
        tn(), eh();
    }
    l.useEffect(() => {
        let e = (0, W.isWindows)() ? (0, X.Z)(N.ZP, B.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? C.Z.getApplication(e.id) : null;
        U.default.track(er.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: em
        });
    }, [em]);
    let tl = l.useCallback(
            (e, t, n) => {
                var r;
                let l = (0, V.Z)(e, eI, eE),
                    [i, s] = null != l ? l : [t, n];
                e !== eK && ((t = i), (n = s));
                let o = null != (r = null == eS ? void 0 : eS.id) ? r : eF;
                a()(null != o, 'Received null target channel ID');
                let c = k.Z.getChannel(o);
                if (!(0, H.Z)(e, t, n, eI, eE, c)) {
                    let [e, r] = (0, V.Z)(en.tI.PRESET_VIDEO, eI, eE);
                    (t = e), (n = r);
                }
                n !== e1 && e0(n), t !== eQ && e$(t), i !== t || s !== n ? eq(en.tI.PRESET_CUSTOM) : e !== eK && eq(e);
            },
            [eS, eF, eI, eE, e1, eQ, eK]
        ),
        ti = l.useCallback(
            (e) => {
                (0, Y.t)(), (0, Y.T)(null != e ? e : e9);
            },
            [e9]
        );
    function ts(e) {
        if ((e.preventDefault(), 1 === eU)) return ti();
        if (2 === eU) return eG(3);
        if (null != e9) return eG(1);
        let t = (0, $.Z)(eb, eV, N.ZP.getRunningGames());
        if (z.ZP.supportsFeature(er.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)) {
            var l;
            let e = null != (l = null == eb ? void 0 : eb.pid) ? l : null;
            (0, p.ZDy)(async () => {
                let { default: t } = await n.e('74300').then(n.bind(n, 566852));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        ed(ec({}, n), {
                            handleStream: tr,
                            pid: e
                        })
                    );
            });
        } else tr();
    }
    let to = l.useCallback(
            (e) => {
                eY(e), null != e && (ek && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? te(e.id.split(':')[1]) : te(void 0), eG(3), ez(!0));
            },
            [ek]
        ),
        ta = l.useCallback(
            (e) => {
                e7(e);
                var t = 3;
                eG(ee ? 2 : 3);
            },
            [ee]
        ),
        tc = !(1 === eU && ek && eR === J.Uc.Error),
        td = (function (e) {
            switch (e) {
                case 2:
                    return es.intl.string(es.t['aC4/Zm']);
                case 1:
                    return es.intl.formatToPlainString(es.t.sbbPhY, { buttonName: es.intl.string(es.t.FiBjwc) });
                case 3:
                    return null;
                default:
                    return es.intl.string(es.t['1hKIam']);
            }
        })(eU),
        tu = (0, r.jsx)(p.xBx, {
            className: eo.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(O.Z, {
                direction: O.Z.Direction.VERTICAL,
                align: O.Z.Align.CENTER,
                className: eo.header,
                children: [
                    (0, r.jsx)(p.X6q, {
                        variant: 'heading-xl/semibold',
                        id: eB,
                        className: eo.headerText,
                        children: es.intl.string(es.t.RDkJQ0)
                    }),
                    tc && null != td
                        ? (0, r.jsx)(p.Text, {
                              className: eo.headerDescription,
                              variant: 'text-md/normal',
                              color: tt ? 'text-secondary' : 'text-normal',
                              children: td
                          })
                        : null
                ]
            })
        }),
        tf = l.useCallback(() => {
            ek && (0, Y.t)(), eG(2);
        }, [ek]),
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
        })(eU, F, ee, eW),
        th = 1 !== eU && (3 !== eU || (null == eV && null == eb && null == eZ) || null == e6),
        tp = l.useCallback(() => {
            null != tm && eG(tm);
        }, [tm]),
        tx = (0, r.jsxs)(p.MyZ, {
            springConfig: ed(ec({}, c.config.stiff), { clamp: !0 }),
            activeSlide: eU,
            width: 480,
            children: [
                (0, r.jsx)(p.Mi4, {
                    id: 0,
                    children: (0, r.jsx)('div', {
                        className: eo.modalSize,
                        children: (0, r.jsx)(q.Z, { onSelectGuild: ta })
                    })
                }),
                (0, r.jsx)(p.Mi4, {
                    id: 2,
                    children: (0, r.jsx)('div', {
                        className: eo.modalSize,
                        children: ek
                            ? (0, r.jsx)(Q.se, { onSourceSelect: to })
                            : (0, r.jsx)(Q.oA, {
                                  selectedSource: eV,
                                  onChangeSelectedSource: to
                              })
                    })
                }),
                (0, r.jsx)(p.Mi4, {
                    id: 3,
                    children: (0, r.jsx)('div', {
                        className: eo.modalSize,
                        children: (0, r.jsx)(K.Z, {
                            selectedChannelId: null != (T = null == eS ? void 0 : eS.id) ? T : eF,
                            selectedPreset: eK,
                            selectedResolution: eQ,
                            selectedSource: eV,
                            selectedFPS: e1,
                            sound: e2,
                            previewDisabled: e3,
                            sourceChanged: eW,
                            selectSource: ee,
                            onChangeSelectedFPS: (e) => tl(eK, eQ, e),
                            onChangeSelectedResolution: (e) => tl(eK, e, e1),
                            onChangeSelectedPreset: (e) => tl(e, eQ, e1),
                            onChangeSelectedChannelId: eH,
                            onChangeSelectedSource: to,
                            onChangeSource: () => tf(),
                            onChangeAudioDevice: (e) => eX(e),
                            onChangeGuild: () => eG(0),
                            onChangeSound: (e) => e5(e),
                            onChangePreviewDisabled: (e) => e8(e),
                            onClose: eh,
                            selectedGuildId: e4,
                            targetGuildPremiumTier: eE,
                            selectGuild: F
                        })
                    })
                }),
                (0, r.jsx)(p.Mi4, {
                    id: 1,
                    children: (0, r.jsx)('div', {
                        className: eo.modalSize,
                        children: (0, r.jsx)(Q.Hu, {
                            onSourceSelect: tr,
                            onCancel: tp,
                            pickerType: e9
                        })
                    })
                })
            ]
        }),
        tg = 1 === eU || (eA && 3 === eU) ? es.intl.string(es.t.FiBjwc) : ek && (3 !== eU || null != e9) ? es.intl.string(es.t.PDTjLC) : es.intl.string(es.t['UE/rPz']),
        t_ = tt
            ? (0, r.jsxs)(p.mzw, {
                  className: eo.modalFooter,
                  direction: O.Z.Direction.HORIZONTAL,
                  justify: null == tm ? O.Z.Justify.END : O.Z.Justify.BETWEEN,
                  children: [
                      null != tm
                          ? (0, r.jsx)('div', {
                                children: (0, r.jsx)(p.zxk, {
                                    size: p.zxk.Sizes.SMALL,
                                    color: p.Ttl.PRIMARY,
                                    onClick: tp,
                                    children: es.intl.string(es.t['13/7kZ'])
                                })
                            })
                          : null,
                      (0, r.jsxs)('div', {
                          className: eo.buttonContainer,
                          children: [
                              (0, r.jsx)(p.zxk, {
                                  type: 'submit',
                                  size: p.zxk.Sizes.SMALL,
                                  disabled: th,
                                  autoFocus: !0,
                                  children: tg
                              }),
                              (0, r.jsx)(p.zxk, {
                                  className: eo.cancelButton,
                                  look: p.zxk.Looks.LINK,
                                  size: p.zxk.Sizes.SMALL,
                                  color: p.Ttl.PRIMARY,
                                  onClick: eh,
                                  children: es.intl.string(es.t['ETE/oK'])
                              })
                          ]
                      })
                  ]
              })
            : (0, r.jsxs)(p.mzw, {
                  className: eo.modalFooter,
                  justify: null == tm ? O.Z.Justify.START : O.Z.Justify.BETWEEN,
                  children: [
                      (0, r.jsx)(p.zxk, {
                          type: 'submit',
                          size: p.zxk.Sizes.SMALL,
                          disabled: th,
                          autoFocus: !0,
                          children: tg
                      }),
                      null == tm
                          ? (0, r.jsx)(p.zxk, {
                                className: eo.cancelButton,
                                look: p.zxk.Looks.LINK,
                                size: p.zxk.Sizes.SMALL,
                                color: p.Ttl.PRIMARY,
                                onClick: eh,
                                children: es.intl.string(es.t['ETE/oK'])
                            })
                          : (0, r.jsx)(p.zxk, {
                                size: p.zxk.Sizes.SMALL,
                                color: p.Ttl.PRIMARY,
                                onClick: tp,
                                children: es.intl.string(es.t['13/7kZ'])
                            })
                  ]
              });
    return (0, r.jsx)(_.Z, {
        page: er.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(p.Y0X, {
            'aria-labelledby': eB,
            transitionState: ep,
            size: p.CgR.DYNAMIC,
            className: s()(eo.modalSize, eo.border),
            children: [
                tt
                    ? (0, r.jsxs)('div', {
                          className: eo.container,
                          children: [
                              (0, r.jsx)(p.olH, {
                                  onClick: eh,
                                  className: eo.modalCloseButton
                              }),
                              (0, r.jsx)('div', {
                                  className: eo.artContainer,
                                  children: (0, r.jsx)('img', {
                                      className: eo.refreshedArt,
                                      alt: '',
                                      src: ea
                                  })
                              }),
                              (0, r.jsx)('div', { children: tu })
                          ]
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(p.olH, {
                                  onClick: eh,
                                  className: eo.modalCloseButton
                              }),
                              (0, r.jsx)('div', { className: eo.art })
                          ]
                      }),
                (0, r.jsx)(p.yRy, {
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eL,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(eu, {
                            visibleContent: eL,
                            markAsDismissed: eD
                        }),
                    children: () =>
                        (0, r.jsxs)('form', {
                            onSubmit: ts,
                            children: [!tt && tu, tx, t_]
                        })
                })
            ]
        })
    });
}
function em(e) {
    let { showRefreshedGoLiveModal: t } = (0, F.a)({ location: e.analyticsLocation }),
        n = (0, m.e7)([N.ZP], () => (null != e.sourcePID ? N.ZP.getGameForPID(e.sourcePID) : void 0));
    return t
        ? (0, r.jsx)(
              ee.Z,
              ed(ec({}, e), {
                  selectSource: e.selectSource,
                  sourceApplication: null != n ? n : void 0
              })
          )
        : (0, r.jsx)(ef, ec({}, e));
}
