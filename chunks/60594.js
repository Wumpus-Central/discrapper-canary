n.d(t, { default: () => ea }), n(388685), n(539854), n(35282);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(512722),
    a = n.n(o),
    c = n(695469),
    d = n(209739),
    u = n.n(d),
    f = n(442837),
    m = n(704215),
    h = n(481060),
    p = n(668781),
    x = n(872810),
    g = n(410575),
    _ = n(579806),
    v = n(89425),
    j = n(812206),
    b = n(600164),
    S = n(313201),
    C = n(243778),
    y = n(594190),
    O = n(751571),
    Z = n(970731),
    I = n(695346),
    w = n(361291),
    N = n(592125),
    T = n(430824),
    E = n(131951),
    P = n(944486),
    R = n(594174),
    k = n(449224),
    A = n(626135),
    M = n(63063),
    L = n(358085),
    D = n(998502),
    B = n(668519),
    U = n(451467),
    G = n(537413),
    W = n(299570),
    z = n(960861),
    F = n(989941),
    H = n(399299),
    V = n(351152),
    Y = n(567126),
    X = n(143135),
    J = n(717298),
    K = n(70722),
    q = n(37113),
    Q = n(981631),
    $ = n(921944),
    ee = n(761274),
    et = n(388032),
    en = n(347226),
    er = n(402163);
function ei(e) {
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
function el(e, t) {
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
let es = (e) => {
    let { visibleContent: t, markAsDismissed: n } = e;
    return t === m.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, r.jsx)(Z.ZP, {
              content: et.intl.string(et.t.sFyFJy),
              buttonCTA: et.intl.string(et.t['NX+WJC']),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(M.Z.getArticleURL(Q.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: et.intl.string(et.t.hvVgAQ),
              caretPosition: Z.DF.LEFT_CENTER,
              markAsDismissed: n
          })
        : null;
};
function eo(e) {
    var t, l, o, d, Z, M;
    let { selectGuild: B = !1, selectSource: J = !0, guildId: eo, analyticsLocation: ea, onClose: ec, transitionState: ed } = e,
        { preset: eu, resolution: ef, fps: em, soundshareEnabled: eh } = (0, f.cj)([w.Z], () => w.Z.getState()),
        ep = i.useRef(null),
        ex = i.useRef(Date.now()),
        eg = (0, f.e7)([P.Z, N.Z], () => N.Z.getChannel(P.Z.getVoiceChannelId())),
        e_ = (0, f.e7)([y.ZP, k.Z], () => ((0, L.isWindows)() ? (0, F.Z)(y.ZP, k.Z) : null)),
        ev = (0, f.e7)([R.default], () => {
            let e = R.default.getCurrentUser();
            return a()(null != e, 'GoLiveModal: user cannot be undefined'), e;
        }),
        ej = null != (t = null == eg ? void 0 : eg.getGuildId()) ? t : eo,
        eb = (0, f.e7)([T.Z], () => {
            var e;
            return null != ej ? (null == (e = T.Z.getGuild(ej)) ? void 0 : e.premiumTier) : null;
        }),
        [eS, eC] = null != (l = (0, G.Z)(eu, ev, eb)) ? l : [q.LY.RESOLUTION_720, q.ws.FPS_30],
        { lastPickerAction: ey } = (0, f.e7)([z.ZP], () => z.ZP.getPickerState()),
        eO = E.Z.getUseSystemScreensharePicker();
    (0, z.UB)();
    let eZ = eO && (0, L.isMac)() && u().satisfies(null === _.Z || void 0 === _.Z ? void 0 : _.Z.os.release, K.jR),
        eI = [];
    ed === h.Dvm.ENTERED && eO && (0, L.isMac)() && eI.push(m.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [ew, eN] = (0, C.US)(eI, void 0, !0);
    eu !== q.tI.PRESET_CUSTOM && ((ef = eS), (em = eC)), (0, U.Z)(eu, ef, em, ev, eb) || ((ef = eS), (em = eC));
    let eT = (0, S.Dt)(),
        [eE, eP] = i.useState(((M = J && !eZ), B ? 0 : M ? 2 : 3)),
        [eR, ek] = i.useState(eZ),
        [eA, eM] = i.useState(null),
        [eL, eD] = i.useState(
            eZ
                ? {
                      id: 'prepicked:',
                      name: et.intl.string(et.t['KKcy9/']),
                      url: ''
                  }
                : null
        ),
        [eB, eU] = i.useState(null),
        [eG, eW] = i.useState(eu),
        [ez, eF] = i.useState(ef),
        [eH, eV] = i.useState(em),
        [eY, eX] = i.useState(eh),
        [eJ, eK] = i.useState(null != (o = I.I0.getSetting()) && o),
        [eq, eQ] = i.useState(null != eo ? eo : null),
        e$ = null != (d = null == eg ? void 0 : eg.id) ? d : eA,
        [e1, e0] = i.useState(eZ ? '' : void 0);
    async function e2() {
        var e, t;
        a()(null != e_ || null != eL, 'got nothing to stream');
        let n = null != (e = null == eg ? void 0 : eg.id) ? e : eA;
        a()(null != n, 'Received null target channel ID');
        let r = N.Z.getChannel(n),
            i = null != (t = null == r ? void 0 : r.getGuildId()) ? t : eo;
        if (null == eg && !(await (0, v.Z)({ channelId: n }))) return;
        let l = eG,
            s = ez,
            o = eH;
        (0, U.Z)(l, s, o, ev, eb, r) || ((l = q.tI.PRESET_VIDEO), (s = q.LY.RESOLUTION_720), (o = q.ws.FPS_30)),
            (0, x.Rc)({
                preset: l,
                resolution: s,
                frameRate: o,
                soundshareEnabled: eY
            });
        let c = {};
        if (null == eL ? void 0 : eL.id.startsWith('prepicked:')) c = z.ZP.getStreamStartOptions();
        else {
            let e = (0, X.Z)(e_, eL, y.ZP.getRunningGames()),
                t = !(0, L.isWindows)() || null == e || (null == eL ? void 0 : eL.id.startsWith('camera:'));
            (c.pid = t || null == e ? void 0 : e.pid), null == c.pid && null != eL && ((c.sourceId = eL.id), (c.sourceName = eL.name));
        }
        (0, x.WH)(
            i,
            n,
            el(ei({}, c), {
                audioSourceId: eB,
                sound: eY,
                previewDisabled: eJ,
                nativePickerStyleUsed: e1,
                goLiveModalDurationMs: Date.now() - ex.current
            })
        ),
            null != ew && eN($.L.AUTO_DISMISS),
            eO ||
                (async () => {
                    (await O.Z.hasPermission(ee.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        p.Z.show({
                            title: et.intl.string(et.t['X+mXen']),
                            body: et.intl.string(et.t.MIJCzs)
                        });
                })();
    }
    function e5() {
        e2(), ec();
    }
    i.useEffect(() => {
        let e = (0, L.isWindows)() ? (0, F.Z)(y.ZP, k.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? j.Z.getApplication(e.id) : null;
        A.default.track(Q.rMx.OPEN_MODAL, {
            type: 'Go Live Modal',
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: ea
        });
    }, [ea]);
    let e3 = i.useCallback(
            (e, t, n) => {
                var r;
                let i = (0, G.Z)(e, ev, eb),
                    [l, s] = null != i ? i : [t, n];
                e !== eG && ((t = l), (n = s));
                let o = null != (r = null == eg ? void 0 : eg.id) ? r : eA;
                a()(null != o, 'Received null target channel ID');
                let c = N.Z.getChannel(o);
                if (!(0, U.Z)(e, t, n, ev, eb, c)) {
                    let [e, r] = (0, G.Z)(q.tI.PRESET_VIDEO, ev, eb);
                    (t = e), (n = r);
                }
                n !== eH && eV(n), t !== ez && eF(t), l !== t || s !== n ? eW(q.tI.PRESET_CUSTOM) : e !== eG && eW(e);
            },
            [eg, eA, ev, eb, eH, ez, eG]
        ),
        e7 = i.useCallback(
            (e) => {
                (0, W.t)(), (0, W.T)(null != e ? e : e1);
            },
            [e1]
        );
    function e4(e) {
        if ((e.preventDefault(), 1 === eE)) return e7();
        if (2 === eE) return eP(3);
        if (null != e1) return eP(1);
        let t = (0, X.Z)(e_, eL, y.ZP.getRunningGames());
        if (D.ZP.supportsFeature(Q.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)) {
            var i;
            let e = null != (i = null == e_ ? void 0 : e_.pid) ? i : null;
            (0, h.ZDy)(async () => {
                let { default: t } = await n.e('74300').then(n.bind(n, 566852));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        el(ei({}, n), {
                            handleStream: e5,
                            pid: e
                        })
                    );
            });
        } else e5();
    }
    let e8 = i.useCallback(
            (e) => {
                eD(e), null != e && (eO && (null == e ? void 0 : e.id.startsWith('camera:')) !== !0 ? e0(e.id.split(':')[1]) : e0(void 0), eP(3), ek(!0));
            },
            [eO]
        ),
        e6 = i.useCallback(
            (e) => {
                eQ(e);
                var t = 3;
                eP(J ? 2 : 3);
            },
            [J]
        ),
        e9 = !(1 === eE && eO && ey === z.Uc.Error),
        te = (function (e) {
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
        })(eE),
        tt = (0, r.jsx)(h.xBx, {
            className: en.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(b.Z, {
                direction: b.Z.Direction.VERTICAL,
                align: b.Z.Align.CENTER,
                className: en.header,
                children: [
                    (0, r.jsx)(h.X6q, {
                        variant: 'heading-xl/semibold',
                        id: eT,
                        className: en.headerText,
                        children: et.intl.string(et.t.RDkJQ0)
                    }),
                    e9 && null != te
                        ? (0, r.jsx)(h.Text, {
                              className: en.headerDescription,
                              variant: 'text-md/normal',
                              color: 'text-secondary',
                              children: te
                          })
                        : null
                ]
            })
        }),
        tn = i.useCallback(() => {
            eO && (0, W.t)(), eP(2);
        }, [eO]),
        tr = (function (e, t, n, r) {
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
        })(eE, B, J, eR),
        ti = 1 !== eE && (3 !== eE || (null == eL && null == e_) || null == e$),
        tl = i.useCallback(() => {
            null != tr && eP(tr);
        }, [tr]),
        ts = (0, r.jsxs)(h.MyZ, {
            springConfig: el(ei({}, c.config.stiff), { clamp: !0 }),
            activeSlide: eE,
            width: 480,
            children: [
                (0, r.jsx)(h.Mi4, {
                    id: 0,
                    children: (0, r.jsx)('div', {
                        className: en.modalSize,
                        children: (0, r.jsx)(V.Z, { onSelectGuild: e6 })
                    })
                }),
                (0, r.jsx)(h.Mi4, {
                    id: 2,
                    children: (0, r.jsx)('div', {
                        className: en.modalSize,
                        children: eO
                            ? (0, r.jsx)(Y.se, { onSourceSelect: e8 })
                            : (0, r.jsx)(Y.oA, {
                                  selectedSource: eL,
                                  onChangeSelectedSource: e8
                              })
                    })
                }),
                (0, r.jsx)(h.Mi4, {
                    id: 3,
                    children: (0, r.jsx)('div', {
                        className: en.modalSize,
                        children: (0, r.jsx)(H.Z, {
                            selectedChannelId: null != (Z = null == eg ? void 0 : eg.id) ? Z : eA,
                            selectedPreset: eG,
                            selectedResolution: ez,
                            selectedSource: eL,
                            selectedFPS: eH,
                            sound: eY,
                            previewDisabled: eJ,
                            sourceChanged: eR,
                            selectSource: J,
                            onChangeSelectedFPS: (e) => e3(eG, ez, e),
                            onChangeSelectedResolution: (e) => e3(eG, e, eH),
                            onChangeSelectedPreset: (e) => e3(e, ez, eH),
                            onChangeSelectedChannelId: eM,
                            onChangeSelectedSource: e8,
                            onChangeSource: () => tn(),
                            onChangeAudioDevice: (e) => eU(e),
                            onChangeGuild: () => eP(0),
                            onChangeSound: (e) => eX(e),
                            onChangePreviewDisabled: (e) => eK(e),
                            onClose: ec,
                            selectedGuildId: eq,
                            targetGuildPremiumTier: eb,
                            selectGuild: B
                        })
                    })
                }),
                (0, r.jsx)(h.Mi4, {
                    id: 1,
                    children: (0, r.jsx)('div', {
                        className: en.modalSize,
                        children: (0, r.jsx)(Y.Hu, {
                            onSourceSelect: e5,
                            onCancel: tl,
                            pickerType: e1
                        })
                    })
                })
            ]
        }),
        to = 1 === eE || (eZ && 3 === eE) ? et.intl.string(et.t.FiBjwc) : eO && (3 !== eE || null != e1) ? et.intl.string(et.t.PDTjLC) : et.intl.string(et.t['UE/rPz']),
        ta = (0, r.jsxs)(h.mzw, {
            className: en.modalFooter,
            direction: b.Z.Direction.HORIZONTAL,
            justify: null == tr ? b.Z.Justify.END : b.Z.Justify.BETWEEN,
            children: [
                null != tr
                    ? (0, r.jsx)('div', {
                          children: (0, r.jsx)(h.zxk, {
                              size: h.zxk.Sizes.SMALL,
                              color: h.Ttl.PRIMARY,
                              onClick: tl,
                              children: et.intl.string(et.t['13/7kZ'])
                          })
                      })
                    : null,
                (0, r.jsxs)('div', {
                    className: en.buttonContainer,
                    children: [
                        (0, r.jsx)(h.zxk, {
                            type: 'submit',
                            size: h.zxk.Sizes.SMALL,
                            disabled: ti,
                            autoFocus: !0,
                            children: to
                        }),
                        (0, r.jsx)(h.zxk, {
                            className: en.cancelButton,
                            look: h.zxk.Looks.LINK,
                            size: h.zxk.Sizes.SMALL,
                            color: h.Ttl.PRIMARY,
                            onClick: ec,
                            children: et.intl.string(et.t['ETE/oK'])
                        })
                    ]
                })
            ]
        });
    return (0, r.jsx)(g.Z, {
        page: Q.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(h.Y0X, {
            'aria-labelledby': eT,
            transitionState: ed,
            size: h.CgR.DYNAMIC,
            className: s()(en.modalSize, en.border),
            parentComponent: 'GoLiveModal',
            children: [
                (0, r.jsxs)('div', {
                    className: en.container,
                    children: [
                        (0, r.jsx)(h.olH, {
                            onClick: ec,
                            className: en.modalCloseButton
                        }),
                        (0, r.jsx)('div', {
                            className: en.artContainer,
                            children: (0, r.jsx)('img', {
                                className: en.refreshedArt,
                                alt: '',
                                src: er
                            })
                        }),
                        (0, r.jsx)('div', { children: tt })
                    ]
                }),
                (0, r.jsx)(h.yRy, {
                    targetElementRef: ep,
                    position: 'right',
                    align: 'center',
                    shouldShow: null != ew,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(es, {
                            visibleContent: ew,
                            markAsDismissed: eN
                        }),
                    children: () =>
                        (0, r.jsxs)('form', {
                            onSubmit: e4,
                            ref: ep,
                            children: [ts, ta]
                        })
                })
            ]
        })
    });
}
function ea(e) {
    let { showRefreshedGoLiveModal: t } = (0, B.a)({ location: e.analyticsLocation }),
        n = (0, f.e7)([y.ZP], () => (null != e.sourcePID ? y.ZP.getGameForPID(e.sourcePID) : void 0));
    return t
        ? (0, r.jsx)(
              J.Z,
              el(ei({}, e), {
                  selectSource: e.selectSource,
                  sourceApplication: null != n ? n : void 0
              })
          )
        : (0, r.jsx)(eo, ei({}, e));
}
