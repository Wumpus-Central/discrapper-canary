n.d(t, { default: () => em }), n(388685), n(539854), n(35282);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(512722),
    a = n.n(o),
    c = n(386230),
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
    I = n(540059),
    w = n(243778),
    N = n(594190),
    T = n(751571),
    E = n(970731),
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
    ei = n(921944),
    el = n(761274),
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
        ? (0, r.jsx)(E.ZP, {
              content: es.intl.string(es.t.sFyFJy),
              buttonCTA: es.intl.string(es.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(G.Z.getArticleURL(er.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: es.intl.string(es.t.hvVgAQ),
              caretPosition: E.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function ef(e) {
    var t, l, o, d, E, G;
    let { selectGuild: F = !1, selectSource: ee = !0, guildId: ef, analyticsLocation: em, onClose: eh, transitionState: ep } = e,
        { preset: ex, resolution: eg, fps: e_, soundshareEnabled: ev } = (0, m.cj)([R.Z], () => R.Z.getState()),
        ej = i.useRef(null),
        eS = i.useRef(Date.now()),
        eb = (0, m.e7)([L.Z, k.Z], () => k.Z.getChannel(L.Z.getVoiceChannelId())),
        eC = (0, m.e7)([N.ZP, B.Z], () => ((0, W.isWindows)() ? (0, X.Z)(N.ZP, B.Z) : null)),
        ey = (0, m.e7)([S.ZP], () => S.ZP.getCurrentEmbeddedActivity()),
        eO = (null == ey ? void 0 : ey.location.kind) === f.E.CONTEXTLESS,
        eZ = (0, y.q)(null == ey ? void 0 : ey.applicationId),
        [eI, ew] = i.useState(null);
    i.useEffect(() => {
        (0, j.R)() &&
            (async () => {
                var e;
                ew(await (null === v.Z || void 0 === v.Z || null == (e = v.Z.window) ? void 0 : e.getMediaSourceId('DISCORD_ACTIVITY_POPOUT')));
            })();
    }, [eO]);
    let eN = (0, m.e7)([D.default], () => {
            let e = D.default.getCurrentUser();
            return a()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        eT = null != (t = null == eb ? void 0 : eb.getGuildId()) ? t : ef,
        eE = (0, m.e7)([A.Z], () => {
            var e;
            return null != eT ? (null == (e = A.Z.getGuild(eT)) ? void 0 : e.premiumTier) : null;
        }),
        [eP, eR] = null != (l = (0, V.Z)(ex, eN, eE)) ? l : [en.LY.RESOLUTION_720, en.ws.FPS_30],
        { lastPickerAction: ek } = (0, m.e7)([J.ZP], () => J.ZP.getPickerState()),
        eA = M.Z.getUseSystemScreensharePicker();
    (0, J.UB)();
    let eM = eA && (0, W.isMac)() && u().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, et.jR),
        eL = [];
    ep === p.Dvm.ENTERED && eA && (0, W.isMac)() && eL.push(h.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eD, eB] = (0, w.US)(eL, void 0, !0);
    ex !== en.tI.PRESET_CUSTOM && ((eg = eP), (e_ = eR)), (0, H.Z)(ex, eg, e_, eN, eE) || ((eg = eP), (e_ = eR));
    let eU = (0, Z.Dt)(),
        [eG, eW] = i.useState(((G = ee && !eM), F ? 0 : G ? 2 : 3)),
        [ez, eF] = i.useState(eM),
        [eH, eV] = i.useState(null),
        [eY, eJ] = i.useState(
            eM
                ? {
                      id: 'prepicked:',
                      name: es.intl.string(es.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eX, eK] = i.useState(null),
        [eq, eQ] = i.useState(ex),
        [e$, e1] = i.useState(eg),
        [e0, e2] = i.useState(e_),
        [e5, e3] = i.useState(ev),
        [e7, e8] = i.useState(null != (o = P.I0.getSetting()) && o),
        [e4, e6] = i.useState(null != ef ? ef : null),
        e9 = null != (d = null == eb ? void 0 : eb.id) ? d : eH,
        [te, tt] = i.useState(eM ? '' : void 0),
        tn = (0, I.Q3)('GoLiveModal');
    async function tr() {
        var e, t;
        a()(null != eC || null != eY || (null != ey && null != eI), 'got nothing to stream');
        let n = null != (e = null == eb ? void 0 : eb.id) ? e : eH;
        a()(null != n, 'Received null target channel ID');
        let r = k.Z.getChannel(n),
            i = null != (t = null == r ? void 0 : r.getGuildId()) ? t : ef;
        if (null == eb && !(await (0, b.Z)({ channelId: n }))) return;
        let l = eq,
            s = e$,
            o = e0;
        (0, H.Z)(l, s, o, eN, eE, r) || ((l = en.tI.PRESET_VIDEO), (s = en.LY.RESOLUTION_720), (o = en.ws.FPS_30)),
            (0, g.Rc)({
                preset: l,
                resolution: s,
                frameRate: o,
                soundshareEnabled: e5
            });
        let c = {};
        if (null == eY ? void 0 : eY.id.startsWith('prepicked:')) c = J.ZP.getStreamStartOptions();
        else {
            let e = (0, $.Z)(eC, eY, N.ZP.getRunningGames()),
                t = !(0, W.isWindows)() || null == e || (null == eY ? void 0 : eY.id.startsWith('camera:'));
            (c.pid = t || null == e ? void 0 : e.pid), null == c.pid && (null != eY ? ((c.sourceId = eY.id), (c.sourceName = eY.name)) : null != eI && ((c.sourceId = eI), (c.sourceName = null == eZ ? void 0 : eZ.name)));
        }
        (0, g.WH)(
            i,
            n,
            ed(ec({}, c), {
                audioSourceId: eX,
                sound: e5,
                previewDisabled: e7,
                nativePickerStyleUsed: te,
                goLiveModalDurationMs: Date.now() - eS.current
            })
        ),
            null != eD && eB(ei.L.AUTO_DISMISS),
            eA ||
                (async () => {
                    (await T.Z.hasPermission(el.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        x.Z.show({
                            title: es.intl.string(es.t['X+mXen']),
                            body: es.intl.string(es.t.MIJCzs)
                        });
                })();
    }
    function ti() {
        tr(), eh();
    }
    i.useEffect(() => {
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
    let tl = i.useCallback(
            (e, t, n) => {
                var r;
                let i = (0, V.Z)(e, eN, eE),
                    [l, s] = null != i ? i : [t, n];
                e !== eq && ((t = l), (n = s));
                let o = null != (r = null == eb ? void 0 : eb.id) ? r : eH;
                a()(null != o, 'Received null target channel ID');
                let c = k.Z.getChannel(o);
                if (!(0, H.Z)(e, t, n, eN, eE, c)) {
                    let [e, r] = (0, V.Z)(en.tI.PRESET_VIDEO, eN, eE);
                    (t = e), (n = r);
                }
                n !== e0 && e2(n), t !== e$ && e1(t), l !== t || s !== n ? eQ(en.tI.PRESET_CUSTOM) : e !== eq && eQ(e);
            },
            [eb, eH, eN, eE, e0, e$, eq]
        ),
        ts = i.useCallback(
            (e) => {
                (0, Y.t)(), (0, Y.T)(null != e ? e : te);
            },
            [te]
        );
    function to(e) {
        if ((e.preventDefault(), 1 === eG)) return ts();
        if (2 === eG) return eW(3);
        if (null != te) return eW(1);
        let t = (0, $.Z)(eC, eY, N.ZP.getRunningGames());
        if (z.ZP.supportsFeature(er.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)) {
            var i;
            let e = null != (i = null == eC ? void 0 : eC.pid) ? i : null;
            (0, p.ZDy)(async () => {
                let { default: t } = await n.e('74300').then(n.bind(n, 566852));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        ed(ec({}, n), {
                            handleStream: ti,
                            pid: e
                        })
                    );
            });
        } else ti();
    }
    let ta = i.useCallback(
            (e) => {
                eJ(e), null != e && (eA && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? tt(e.id.split(':')[1]) : tt(void 0), eW(3), eF(!0));
            },
            [eA]
        ),
        tc = i.useCallback(
            (e) => {
                e6(e);
                var t = 3;
                eW(ee ? 2 : 3);
            },
            [ee]
        ),
        td = !(1 === eG && eA && ek === J.Uc.Error),
        tu = (function (e) {
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
        })(eG),
        tf = (0, r.jsx)(p.xBx, {
            className: eo.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(O.Z, {
                direction: O.Z.Direction.VERTICAL,
                align: O.Z.Align.CENTER,
                className: eo.header,
                children: [
                    (0, r.jsx)(p.X6q, {
                        variant: 'heading-xl/semibold',
                        id: eU,
                        className: eo.headerText,
                        children: es.intl.string(es.t.RDkJQ0)
                    }),
                    td && null != tu
                        ? (0, r.jsx)(p.Text, {
                              className: eo.headerDescription,
                              variant: 'text-md/normal',
                              color: tn ? 'text-secondary' : 'text-normal',
                              children: tu
                          })
                        : null
                ]
            })
        }),
        tm = i.useCallback(() => {
            eA && (0, Y.t)(), eW(2);
        }, [eA]),
        th = (function (e, t, n, r) {
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
        })(eG, F, ee, ez),
        tp = 1 !== eG && (3 !== eG || (null == eY && null == eC && null == eI) || null == e9),
        tx = i.useCallback(() => {
            null != th && eW(th);
        }, [th]),
        tg = (0, r.jsxs)(p.MyZ, {
            springConfig: ed(ec({}, c.config.stiff), { clamp: !0 }),
            activeSlide: eG,
            width: 480,
            children: [
                (0, r.jsx)(p.Mi4, {
                    id: 0,
                    children: (0, r.jsx)('div', {
                        className: eo.modalSize,
                        children: (0, r.jsx)(q.Z, { onSelectGuild: tc })
                    })
                }),
                (0, r.jsx)(p.Mi4, {
                    id: 2,
                    children: (0, r.jsx)('div', {
                        className: eo.modalSize,
                        children: eA
                            ? (0, r.jsx)(Q.se, { onSourceSelect: ta })
                            : (0, r.jsx)(Q.oA, {
                                  selectedSource: eY,
                                  onChangeSelectedSource: ta
                              })
                    })
                }),
                (0, r.jsx)(p.Mi4, {
                    id: 3,
                    children: (0, r.jsx)('div', {
                        className: eo.modalSize,
                        children: (0, r.jsx)(K.Z, {
                            selectedChannelId: null != (E = null == eb ? void 0 : eb.id) ? E : eH,
                            selectedPreset: eq,
                            selectedResolution: e$,
                            selectedSource: eY,
                            selectedFPS: e0,
                            sound: e5,
                            previewDisabled: e7,
                            sourceChanged: ez,
                            selectSource: ee,
                            onChangeSelectedFPS: (e) => tl(eq, e$, e),
                            onChangeSelectedResolution: (e) => tl(eq, e, e0),
                            onChangeSelectedPreset: (e) => tl(e, e$, e0),
                            onChangeSelectedChannelId: eV,
                            onChangeSelectedSource: ta,
                            onChangeSource: () => tm(),
                            onChangeAudioDevice: (e) => eK(e),
                            onChangeGuild: () => eW(0),
                            onChangeSound: (e) => e3(e),
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
                            onSourceSelect: ti,
                            onCancel: tx,
                            pickerType: te
                        })
                    })
                })
            ]
        }),
        t_ = 1 === eG || (eM && 3 === eG) ? es.intl.string(es.t.FiBjwc) : eA && (3 !== eG || null != te) ? es.intl.string(es.t.PDTjLC) : es.intl.string(es.t['UE/rPz']),
        tv = tn
            ? (0, r.jsxs)(p.mzw, {
                  className: eo.modalFooter,
                  direction: O.Z.Direction.HORIZONTAL,
                  justify: null == th ? O.Z.Justify.END : O.Z.Justify.BETWEEN,
                  children: [
                      null != th
                          ? (0, r.jsx)('div', {
                                children: (0, r.jsx)(p.zxk, {
                                    size: p.zxk.Sizes.SMALL,
                                    color: p.Ttl.PRIMARY,
                                    onClick: tx,
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
                                  disabled: tp,
                                  autoFocus: !0,
                                  children: t_
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
                  justify: null == th ? O.Z.Justify.START : O.Z.Justify.BETWEEN,
                  children: [
                      (0, r.jsx)(p.zxk, {
                          type: 'submit',
                          size: p.zxk.Sizes.SMALL,
                          disabled: tp,
                          autoFocus: !0,
                          children: t_
                      }),
                      null == th
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
                                onClick: tx,
                                children: es.intl.string(es.t['13/7kZ'])
                            })
                  ]
              });
    return (0, r.jsx)(_.Z, {
        page: er.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(p.Y0X, {
            'aria-labelledby': eU,
            transitionState: ep,
            size: p.CgR.DYNAMIC,
            className: s()(eo.modalSize, eo.border),
            parentComponent: 'GoLiveModal',
            children: [
                tn
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
                              (0, r.jsx)('div', { children: tf })
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
                    targetElementRef: ej,
                    position: 'right',
                    align: 'center',
                    shouldShow: null != eD,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(eu, {
                            visibleContent: eD,
                            markAsDismissed: eB
                        }),
                    children: () =>
                        (0, r.jsxs)('form', {
                            onSubmit: to,
                            ref: ej,
                            children: [!tn && tf, tg, tv]
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
