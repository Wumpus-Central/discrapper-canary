n.d(t, { default: () => ea }), n(388685), n(539854), n(35282);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    s = n.n(l),
    o = n(512722),
    a = n.n(o),
    c = n(467721),
    d = n(209739),
    u = n.n(d),
    f = n(442837),
    p = n(704215),
    h = n(907862),
    m = n(481060),
    _ = n(668781),
    g = n(872810),
    x = n(410575),
    v = n(579806),
    j = n(89425),
    S = n(812206),
    b = n(600164),
    y = n(313201),
    C = n(243778),
    O = n(594190),
    w = n(751571),
    Z = n(695346),
    P = n(361291),
    I = n(592125),
    E = n(430824),
    T = n(131951),
    N = n(944486),
    A = n(594174),
    R = n(449224),
    M = n(626135),
    k = n(63063),
    D = n(358085),
    L = n(998502),
    B = n(668519),
    G = n(451467),
    U = n(537413),
    F = n(299570),
    H = n(960861),
    W = n(989941),
    V = n(399299),
    z = n(351152),
    J = n(567126),
    X = n(143135),
    K = n(717298),
    q = n(70722),
    Y = n(37113),
    Q = n(981631),
    $ = n(921944),
    ee = n(761274),
    et = n(388032),
    en = n(542257),
    er = n(402163);
function ei(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
    let { visibleContent: t, markAsDismissed: n, formRef: i } = e;
    return t !== p.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? null
        : (0, r.jsx)(h.J2, {
              title: et.intl.string(et.t.sFyFJw),
              position: "right",
              body: void 0,
              targetElementRef: i,
              actions: [
                  {
                      variant: "secondary",
                      text: et.intl.string(et.t.hvVgAZ),
                      onClick: () => {
                          open(k.Z.getArticleURL(Q.BhN.SCREEN_SHARING_MACOS)), n($.L.TAKE_ACTION);
                      },
                  },
                  {
                      variant: "primary",
                      text: et.intl.string(et.t["NX+WJN"]),
                      onClick: () => {
                          n($.L.TAKE_ACTION);
                      },
                  },
              ],
              onRequestClose: () => {
                  n($.L.USER_DISMISS);
              },
          });
};
function eo(e) {
    var t, l, o, d, h, k;
    let {
            selectGuild: B = !1,
            selectSource: K = !0,
            guildId: eo,
            analyticsLocation: ea,
            onClose: ec,
            transitionState: ed,
        } = e,
        { preset: eu, resolution: ef, fps: ep, soundshareEnabled: eh } = (0, f.cj)([P.Z], () => P.Z.getState()),
        em = i.useRef(null),
        e_ = i.useRef(Date.now()),
        eg = (0, f.e7)([N.Z, I.Z], () => I.Z.getChannel(N.Z.getVoiceChannelId())),
        ex = (0, f.e7)([O.ZP, R.Z], () => ((0, D.isWindows)() ? (0, W.Z)(O.ZP, R.Z) : null)),
        ev = (0, f.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return a()(null != e, "GoLiveModal: user cannot be undefined"), e;
        }),
        ej = null != (t = null == eg ? void 0 : eg.getGuildId()) ? t : eo,
        eS = (0, f.e7)([E.Z], () => {
            var e;
            return null != ej ? (null == (e = E.Z.getGuild(ej)) ? void 0 : e.premiumTier) : null;
        }),
        [eb, ey] =
            null != (l = (0, U.Z)(eu, ev, eS))
                ? l
                : [Y.ApplicationStreamResolutions.RESOLUTION_720, Y.ApplicationStreamFPS.FPS_30],
        { lastPickerAction: eC } = (0, f.e7)([H.ZP], () => H.ZP.getPickerState()),
        eO = T.Z.getUseSystemScreensharePicker() || T.Z.getUseGamescopeCapture();
    (0, H.UB)();
    let ew = eO && (0, D.isMac)() && u().satisfies(null === v.Z || void 0 === v.Z ? void 0 : v.Z.os.release, q.jR),
        eZ = [];
    ed === m.Dvm.ENTERED && eO && (0, D.isMac)() && eZ.push(p.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eP, eI] = (0, C.US)(eZ, void 0, !0);
    eu !== Y.ApplicationStreamPresets.PRESET_CUSTOM && ((ef = eb), (ep = ey)),
        (0, G.Z)(eu, ef, ep, ev, eS) || ((ef = eb), (ep = ey));
    let eE = (0, y.Dt)(),
        [eT, eN] = i.useState(((k = K && !ew), B ? 0 : k ? 2 : 3)),
        [eA, eR] = i.useState(ew),
        [eM, ek] = i.useState(null),
        [eD, eL] = i.useState(
            ew
                ? {
                      id: "prepicked:",
                      name: et.intl.string(et.t.KKcy95),
                      url: "",
                  }
                : null,
        ),
        [eB, eG] = i.useState(null),
        [eU, eF] = i.useState(eu),
        [eH, eW] = i.useState(ef),
        [eV, ez] = i.useState(ep),
        [eJ, eX] = i.useState(eh),
        [eK, eq] = i.useState(null != (o = Z.I0.getSetting()) && o),
        [eY, eQ] = i.useState(null != eo ? eo : null),
        e$ = null != (d = null == eg ? void 0 : eg.id) ? d : eM,
        [e1, e0] = i.useState(ew ? "" : void 0);
    async function e2() {
        var e, t;
        a()(null != ex || null != eD, "got nothing to stream");
        let n = null != (e = null == eg ? void 0 : eg.id) ? e : eM;
        a()(null != n, "Received null target channel ID");
        let r = I.Z.getChannel(n),
            i = null != (t = null == r ? void 0 : r.getGuildId()) ? t : eo;
        if (null == eg && !(await (0, j.Z)({ channelId: n }))) return;
        let l = eU,
            s = eH,
            o = eV;
        (0, G.Z)(l, s, o, ev, eS, r) ||
            ((l = Y.ApplicationStreamPresets.PRESET_VIDEO),
            (s = Y.ApplicationStreamResolutions.RESOLUTION_720),
            (o = Y.ApplicationStreamFPS.FPS_30)),
            (0, g.Rc)({
                preset: l,
                resolution: s,
                frameRate: o,
                soundshareEnabled: eJ,
            });
        let c = {};
        if (null == eD ? void 0 : eD.id.startsWith("prepicked:")) c = H.ZP.getStreamStartOptions();
        else {
            let e = (0, X.Z)(ex, eD, O.ZP.getRunningGames()),
                t = !(0, D.isWindows)() || null == e || (null == eD ? void 0 : eD.id.startsWith("camera:"));
            (c.pid = t || null == e ? void 0 : e.pid),
                null == c.pid && null != eD && ((c.sourceId = eD.id), (c.sourceName = eD.name));
        }
        (0, g.WH)(
            i,
            n,
            el(ei({}, c), {
                audioSourceId: eB,
                sound: eJ,
                previewDisabled: eK,
                nativePickerStyleUsed: e1,
                goLiveModalDurationMs: Date.now() - e_.current,
            }),
        ),
            null != eP && eI($.L.AUTO_DISMISS),
            eO ||
                (async () => {
                    (await w.Z.hasPermission(ee.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        _.Z.show({
                            title: et.intl.string(et.t["X+mXeq"]),
                            body: et.intl.string(et.t.MIJCzr),
                        });
                })();
    }
    function e5() {
        e2(), ec();
    }
    i.useEffect(() => {
        let e = (0, D.isWindows)() ? (0, W.Z)(O.ZP, R.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? S.Z.getApplication(e.id) : null;
        M.default.track(Q.rMx.OPEN_MODAL, {
            type: "Go Live Modal",
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: ea,
        });
    }, [ea]);
    let e3 = i.useCallback(
            (e, t, n) => {
                var r;
                let i = (0, U.Z)(e, ev, eS),
                    [l, s] = null != i ? i : [t, n];
                e !== eU && ((t = l), (n = s));
                let o = null != (r = null == eg ? void 0 : eg.id) ? r : eM;
                a()(null != o, "Received null target channel ID");
                let c = I.Z.getChannel(o);
                if (!(0, G.Z)(e, t, n, ev, eS, c)) {
                    let [e, r] = (0, U.Z)(Y.ApplicationStreamPresets.PRESET_VIDEO, ev, eS);
                    (t = e), (n = r);
                }
                n !== eV && ez(n),
                    t !== eH && eW(t),
                    l !== t || s !== n ? eF(Y.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eU && eF(e);
            },
            [eg, eM, ev, eS, eV, eH, eU],
        ),
        e4 = i.useCallback(
            (e) => {
                (0, F.t)(), (0, F.T)(null != e ? e : e1);
            },
            [e1],
        ),
        e7 = i.useCallback(
            (e) => {
                eL(e),
                    null != e &&
                        (eO && (null == e ? void 0 : e.id.startsWith("camera:")) !== !0
                            ? e0(e.id.split(":")[1])
                            : e0(void 0),
                        eN(3),
                        eR(!0));
            },
            [eO],
        ),
        e8 = i.useCallback(
            (e) => {
                eQ(e);
                eN(K ? 2 : 3);
            },
            [K],
        ),
        e9 = !(1 === eT && eO && eC === H.Uc.Error),
        e6 = (function (e) {
            switch (e) {
                case 2:
                    return et.intl.string(et.t["aC4/Zi"]);
                case 1:
                    return et.intl.formatToPlainString(et.t.sbbPhW, { buttonName: et.intl.string(et.t.FiBjwU) });
                case 3:
                    return null;
                default:
                    return et.intl.string(et.t["1hKIah"]);
            }
        })(eT),
        te = (0, r.jsx)(m.xBx, {
            "data-migration-pending": !0,
            className: en.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(b.Z, {
                direction: b.Z.Direction.VERTICAL,
                align: b.Z.Align.CENTER,
                className: en.header,
                children: [
                    (0, r.jsx)(m.Heading, {
                        variant: "heading-xl/semibold",
                        id: eE,
                        className: en.headerText,
                        children: et.intl.string(et.t.RDkJQ6),
                    }),
                    e9 && null != e6
                        ? (0, r.jsx)(m.Text, {
                              className: en.headerDescription,
                              variant: "text-md/normal",
                              color: "text-subtle",
                              children: e6,
                          })
                        : null,
                ],
            }),
        }),
        tt = i.useCallback(() => {
            eO && (0, F.t)(), eN(2);
        }, [eO]),
        tn = (function (e, t, n, r) {
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
        })(eT, B, K, eA),
        tr = 1 !== eT && (3 !== eT || (null == eD && null == ex) || null == e$),
        ti = i.useCallback(() => {
            null != tn && eN(tn);
        }, [tn]),
        tl =
            1 === eT || (ew && 3 === eT)
                ? et.intl.string(et.t.FiBjwU)
                : eO && (3 !== eT || null != e1)
                  ? et.intl.string(et.t.PDTjLN)
                  : et.intl.string(et.t["UE/rP/"]),
        ts = (0, r.jsxs)(m.mzw, {
            "data-migration-pending": !0,
            className: en.modalFooter,
            direction: b.Z.Direction.HORIZONTAL,
            justify: null == tn ? b.Z.Justify.END : b.Z.Justify.BETWEEN,
            children: [
                null != tn
                    ? (0, r.jsx)("div", {
                          children: (0, r.jsx)(m.Button, {
                              variant: "secondary",
                              size: "sm",
                              text: et.intl.string(et.t["13/7kX"]),
                              onClick: ti,
                          }),
                      })
                    : null,
                (0, r.jsxs)("div", {
                    className: en.buttonContainer,
                    children: [
                        (0, r.jsx)(m.Button, {
                            variant: "primary",
                            size: "sm",
                            text: tl,
                            type: "submit",
                            disabled: tr,
                            autoFocus: !0,
                        }),
                        (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: en.cancelButton,
                            children: (0, r.jsx)(m.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: et.intl.string(et.t["ETE/oC"]),
                                onClick: ec,
                            }),
                        }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)(x.Z, {
        page: Q.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(m.Y0X, {
            "data-migration-pending": !0,
            "aria-labelledby": eE,
            transitionState: ed,
            size: m.CgR.DYNAMIC,
            className: s()(en.modalSize, en.border),
            parentComponent: "GoLiveModal",
            children: [
                (0, r.jsxs)("div", {
                    className: en.container,
                    children: [
                        (0, r.jsx)("div", {
                            className: en.modalCloseButton,
                            children: (0, r.jsx)(m.PZ7, { onClick: ec }),
                        }),
                        (0, r.jsx)("div", {
                            className: en.artContainer,
                            children: (0, r.jsx)("img", {
                                className: en.refreshedArt,
                                alt: "",
                                src: er,
                            }),
                        }),
                        (0, r.jsx)("div", { children: te }),
                    ],
                }),
                (0, r.jsxs)("form", {
                    onSubmit: function (e) {
                        if ((e.preventDefault(), 1 === eT)) return e4();
                        if (2 === eT) return eN(3);
                        if ("gamescope" === e1)
                            eL({
                                id: "screen:gamescope",
                                name: et.intl.string(et.t.R4wpLN),
                                url: "",
                            }),
                                e5();
                        else if (null != e1) return eN(1);
                        let t = (0, X.Z)(ex, eD, O.ZP.getRunningGames());
                        if (L.ZP.supportsFeature(Q.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)) {
                            var i;
                            let e = null != (i = null == ex ? void 0 : ex.pid) ? i : null;
                            (0, m.ZDy)(async () => {
                                let { default: t } = await n.e("2795").then(n.bind(n, 75293));
                                return (n) =>
                                    (0, r.jsx)(
                                        t,
                                        el(ei({}, n), {
                                            handleStream: e5,
                                            pid: e,
                                        }),
                                    );
                            });
                        } else e5();
                    },
                    ref: em,
                    children: [
                        (0, r.jsxs)(m.MyZ, {
                            springConfig: el(ei({}, c.config.stiff), { clamp: !0 }),
                            activeSlide: eT,
                            width: 480,
                            children: [
                                (0, r.jsx)(m.Mi4, {
                                    id: 0,
                                    children: (0, r.jsx)("div", {
                                        className: en.modalSize,
                                        children: (0, r.jsx)(z.Z, { onSelectGuild: e8 }),
                                    }),
                                }),
                                (0, r.jsx)(m.Mi4, {
                                    id: 2,
                                    children: (0, r.jsx)("div", {
                                        className: en.modalSize,
                                        children: eO
                                            ? (0, r.jsx)(J.se, {
                                                  onSourceSelect: e7,
                                                  selectedSource: eD,
                                              })
                                            : (0, r.jsx)(J.oA, {
                                                  selectedSource: eD,
                                                  onChangeSelectedSource: e7,
                                              }),
                                    }),
                                }),
                                (0, r.jsx)(m.Mi4, {
                                    id: 3,
                                    children: (0, r.jsx)("div", {
                                        className: en.modalSize,
                                        children: (0, r.jsx)(V.default, {
                                            selectedChannelId: null != (h = null == eg ? void 0 : eg.id) ? h : eM,
                                            selectedPreset: eU,
                                            selectedResolution: eH,
                                            selectedSource: eD,
                                            selectedFPS: eV,
                                            sound: eJ,
                                            previewDisabled: eK,
                                            sourceChanged: eA,
                                            selectSource: K,
                                            onChangeSelectedFPS: (e) => e3(eU, eH, e),
                                            onChangeSelectedResolution: (e) => e3(eU, e, eV),
                                            onChangeSelectedPreset: (e) => e3(e, eH, eV),
                                            onChangeSelectedChannelId: ek,
                                            onChangeSelectedSource: e7,
                                            onChangeSource: () => tt(),
                                            onChangeAudioDevice: (e) => eG(e),
                                            onChangeGuild: () => eN(0),
                                            onChangeSound: (e) => eX(e),
                                            onChangePreviewDisabled: (e) => eq(e),
                                            onClose: ec,
                                            selectedGuildId: eY,
                                            targetGuildPremiumTier: eS,
                                            selectGuild: B,
                                        }),
                                    }),
                                }),
                                (0, r.jsx)(m.Mi4, {
                                    id: 1,
                                    children: (0, r.jsx)("div", {
                                        className: en.modalSize,
                                        children: (0, r.jsx)(J.Hu, {
                                            onSourceSelect: e5,
                                            onCancel: ti,
                                            pickerType: e1,
                                        }),
                                    }),
                                }),
                            ],
                        }),
                        ts,
                    ],
                }),
                (0, r.jsx)(es, {
                    visibleContent: eP,
                    markAsDismissed: eI,
                    formRef: em,
                }),
            ],
        }),
    });
}
function ea(e) {
    let { showRefreshedGoLiveModal: t } = (0, B.a)({ location: e.analyticsLocation }),
        n = (0, f.e7)([O.ZP], () => (null != e.sourcePID ? O.ZP.getGameForPID(e.sourcePID) : void 0));
    return t
        ? (0, r.jsx)(
              K.Z,
              el(ei({}, e), {
                  selectSource: e.selectSource,
                  sourceApplication: null != n ? n : void 0,
              }),
          )
        : (0, r.jsx)(eo, ei({}, e));
}
