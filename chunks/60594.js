n.d(t, { default: () => ea }), n(388685), n(539854), n(35282);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    o = n(512722),
    a = n.n(o),
    c = n(13941),
    d = n(209739),
    u = n.n(d),
    f = n(442837),
    p = n(704215),
    h = n(481060),
    m = n(668781),
    _ = n(872810),
    g = n(410575),
    x = n(579806),
    v = n(89425),
    j = n(812206),
    S = n(600164),
    b = n(313201),
    y = n(243778),
    C = n(594190),
    O = n(751571),
    w = n(970731),
    P = n(695346),
    Z = n(361291),
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
    z = n(399299),
    V = n(351152),
    X = n(567126),
    J = n(143135),
    K = n(717298),
    Y = n(70722),
    q = n(37113),
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
    let { visibleContent: t, markAsDismissed: n } = e;
    return t === p.z.GO_LIVE_SYSTEM_PICKER_COACHMARK
        ? (0, r.jsx)(w.ZP, {
              content: et.intl.string(et.t.sFyFJw),
              buttonCTA: et.intl.string(et.t["NX+WJN"]),
              onClick: () => {},
              onSecondaryClick: () => {
                  open(k.Z.getArticleURL(Q.BhN.SCREEN_SHARING_MACOS));
              },
              secondaryButtonCTA: et.intl.string(et.t.hvVgAZ),
              caretPosition: w.DF.LEFT_CENTER,
              markAsDismissed: n,
          })
        : null;
};
function eo(e) {
    var t, l, o, d, w;
    let {
            selectGuild: k = !1,
            selectSource: B = !0,
            guildId: K,
            analyticsLocation: eo,
            onClose: ea,
            transitionState: ec,
        } = e,
        { preset: ed, resolution: eu, fps: ef, soundshareEnabled: ep } = (0, f.cj)([Z.Z], () => Z.Z.getState()),
        eh = i.useRef(null),
        em = i.useRef(Date.now()),
        e_ = (0, f.e7)([N.Z, I.Z], () => I.Z.getChannel(N.Z.getVoiceChannelId())),
        eg = (0, f.e7)([C.ZP, R.Z], () => ((0, D.isWindows)() ? (0, W.Z)(C.ZP, R.Z) : null)),
        ex = (0, f.e7)([A.default], () => {
            let e = A.default.getCurrentUser();
            return a()(null != e, "GoLiveModal: user cannot be undefined"), e;
        }),
        ev = null != (t = null == e_ ? void 0 : e_.getGuildId()) ? t : K,
        ej = (0, f.e7)([E.Z], () => {
            var e;
            return null != ev ? (null == (e = E.Z.getGuild(ev)) ? void 0 : e.premiumTier) : null;
        }),
        [eS, eb] =
            null != (l = (0, U.Z)(ed, ex, ej))
                ? l
                : [q.ApplicationStreamResolutions.RESOLUTION_720, q.ApplicationStreamFPS.FPS_30],
        { lastPickerAction: ey } = (0, f.e7)([H.ZP], () => H.ZP.getPickerState()),
        eC = T.Z.getUseSystemScreensharePicker();
    (0, H.UB)();
    let eO = eC && (0, D.isMac)() && u().satisfies(null === x.Z || void 0 === x.Z ? void 0 : x.Z.os.release, Y.jR),
        ew = [];
    ec === h.Dvm.ENTERED && eC && (0, D.isMac)() && ew.push(p.z.GO_LIVE_SYSTEM_PICKER_COACHMARK);
    let [eP, eZ] = (0, y.US)(ew, void 0, !0);
    ed !== q.ApplicationStreamPresets.PRESET_CUSTOM && ((eu = eS), (ef = eb)),
        (0, G.Z)(ed, eu, ef, ex, ej) || ((eu = eS), (ef = eb));
    let eI = (0, b.Dt)(),
        [eE, eT] = i.useState(((w = B && !eO), k ? 0 : w ? 2 : 3)),
        [eN, eA] = i.useState(eO),
        [eR, eM] = i.useState(null),
        [ek, eD] = i.useState(
            eO
                ? {
                      id: "prepicked:",
                      name: et.intl.string(et.t.KKcy95),
                      url: "",
                  }
                : null,
        ),
        [eL, eB] = i.useState(null),
        [eG, eU] = i.useState(ed),
        [eF, eH] = i.useState(eu),
        [eW, ez] = i.useState(ef),
        [eV, eX] = i.useState(ep),
        [eJ, eK] = i.useState(null != (o = P.I0.getSetting()) && o),
        [eY, eq] = i.useState(null != K ? K : null),
        eQ = null != (d = null == e_ ? void 0 : e_.id) ? d : eR,
        [e$, e1] = i.useState(eO ? "" : void 0);
    async function e0() {
        var e, t;
        a()(null != eg || null != ek, "got nothing to stream");
        let n = null != (e = null == e_ ? void 0 : e_.id) ? e : eR;
        a()(null != n, "Received null target channel ID");
        let r = I.Z.getChannel(n),
            i = null != (t = null == r ? void 0 : r.getGuildId()) ? t : K;
        if (null == e_ && !(await (0, v.Z)({ channelId: n }))) return;
        let l = eG,
            s = eF,
            o = eW;
        (0, G.Z)(l, s, o, ex, ej, r) ||
            ((l = q.ApplicationStreamPresets.PRESET_VIDEO),
            (s = q.ApplicationStreamResolutions.RESOLUTION_720),
            (o = q.ApplicationStreamFPS.FPS_30)),
            (0, _.Rc)({
                preset: l,
                resolution: s,
                frameRate: o,
                soundshareEnabled: eV,
            });
        let c = {};
        if (null == ek ? void 0 : ek.id.startsWith("prepicked:")) c = H.ZP.getStreamStartOptions();
        else {
            let e = (0, J.Z)(eg, ek, C.ZP.getRunningGames()),
                t = !(0, D.isWindows)() || null == e || (null == ek ? void 0 : ek.id.startsWith("camera:"));
            (c.pid = t || null == e ? void 0 : e.pid),
                null == c.pid && null != ek && ((c.sourceId = ek.id), (c.sourceName = ek.name));
        }
        (0, _.WH)(
            i,
            n,
            el(ei({}, c), {
                audioSourceId: eL,
                sound: eV,
                previewDisabled: eJ,
                nativePickerStyleUsed: e$,
                goLiveModalDurationMs: Date.now() - em.current,
            }),
        ),
            null != eP && eZ($.L.AUTO_DISMISS),
            eC ||
                (async () => {
                    (await O.Z.hasPermission(ee.Eu.SCREEN_RECORDING, { showAuthorizationError: !1 })) ||
                        m.Z.show({
                            title: et.intl.string(et.t["X+mXeq"]),
                            body: et.intl.string(et.t.MIJCzr),
                        });
                })();
    }
    function e2() {
        e0(), ea();
    }
    i.useEffect(() => {
        let e = (0, D.isWindows)() ? (0, W.Z)(C.ZP, R.Z) : null,
            t = (null == e ? void 0 : e.id) != null ? j.Z.getApplication(e.id) : null;
        M.default.track(Q.rMx.OPEN_MODAL, {
            type: "Go Live Modal",
            application_id: null == t ? void 0 : t.id,
            application_name: null == e ? void 0 : e.name,
            game_id: null == t ? void 0 : t.id,
            location_section: eo,
        });
    }, [eo]);
    let e5 = i.useCallback(
            (e, t, n) => {
                var r;
                let i = (0, U.Z)(e, ex, ej),
                    [l, s] = null != i ? i : [t, n];
                e !== eG && ((t = l), (n = s));
                let o = null != (r = null == e_ ? void 0 : e_.id) ? r : eR;
                a()(null != o, "Received null target channel ID");
                let c = I.Z.getChannel(o);
                if (!(0, G.Z)(e, t, n, ex, ej, c)) {
                    let [e, r] = (0, U.Z)(q.ApplicationStreamPresets.PRESET_VIDEO, ex, ej);
                    (t = e), (n = r);
                }
                n !== eW && ez(n),
                    t !== eF && eH(t),
                    l !== t || s !== n ? eU(q.ApplicationStreamPresets.PRESET_CUSTOM) : e !== eG && eU(e);
            },
            [e_, eR, ex, ej, eW, eF, eG],
        ),
        e3 = i.useCallback(
            (e) => {
                (0, F.t)(), (0, F.T)(null != e ? e : e$);
            },
            [e$],
        );
    function e8(e) {
        if ((e.preventDefault(), 1 === eE)) return e3();
        if (2 === eE) return eT(3);
        if (null != e$) return eT(1);
        let t = (0, J.Z)(eg, ek, C.ZP.getRunningGames());
        if (L.ZP.supportsFeature(Q.eRX.ELEVATED_HOOK) && (null == t ? void 0 : t.elevated)) {
            var i;
            let e = null != (i = null == eg ? void 0 : eg.pid) ? i : null;
            (0, h.ZDy)(async () => {
                let { default: t } = await n.e("2795").then(n.bind(n, 75293));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        el(ei({}, n), {
                            handleStream: e2,
                            pid: e,
                        }),
                    );
            });
        } else e2();
    }
    let e4 = i.useCallback(
            (e) => {
                eD(e),
                    null != e &&
                        (eC && (null == e ? void 0 : e.id.startsWith("camera:")) !== !0
                            ? e1(e.id.split(":")[1])
                            : e1(void 0),
                        eT(3),
                        eA(!0));
            },
            [eC],
        ),
        e7 = i.useCallback(
            (e) => {
                eq(e);
                eT(B ? 2 : 3);
            },
            [B],
        ),
        e9 = !(1 === eE && eC && ey === H.Uc.Error),
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
        })(eE),
        te = (0, r.jsx)(h.xBx, {
            className: en.modalHeader,
            separator: !1,
            children: (0, r.jsxs)(S.Z, {
                direction: S.Z.Direction.VERTICAL,
                align: S.Z.Align.CENTER,
                className: en.header,
                children: [
                    (0, r.jsx)(h.Heading, {
                        variant: "heading-xl/semibold",
                        id: eI,
                        className: en.headerText,
                        children: et.intl.string(et.t.RDkJQ6),
                    }),
                    e9 && null != e6
                        ? (0, r.jsx)(h.Text, {
                              className: en.headerDescription,
                              variant: "text-md/normal",
                              color: "text-secondary",
                              children: e6,
                          })
                        : null,
                ],
            }),
        }),
        tt = i.useCallback(() => {
            eC && (0, F.t)(), eT(2);
        }, [eC]),
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
        })(eE, k, B, eN),
        tr = 1 !== eE && (3 !== eE || (null == ek && null == eg) || null == eQ),
        ti = i.useCallback(() => {
            null != tn && eT(tn);
        }, [tn]),
        tl =
            1 === eE || (eO && 3 === eE)
                ? et.intl.string(et.t.FiBjwU)
                : eC && (3 !== eE || null != e$)
                  ? et.intl.string(et.t.PDTjLN)
                  : et.intl.string(et.t["UE/rP/"]),
        ts = (0, r.jsxs)(h.mzw, {
            className: en.modalFooter,
            direction: S.Z.Direction.HORIZONTAL,
            justify: null == tn ? S.Z.Justify.END : S.Z.Justify.BETWEEN,
            children: [
                null != tn
                    ? (0, r.jsx)("div", {
                          children: (0, r.jsx)(h.Button, {
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
                        (0, r.jsx)(h.Button, {
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
                            children: (0, r.jsx)(h.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: et.intl.string(et.t["ETE/oC"]),
                                onClick: ea,
                            }),
                        }),
                    ],
                }),
            ],
        });
    return (0, r.jsx)(g.Z, {
        page: Q.ZY5.GO_LIVE_MODAL,
        children: (0, r.jsxs)(h.Y0X, {
            "aria-labelledby": eI,
            transitionState: ec,
            size: h.CgR.DYNAMIC,
            className: s()(en.modalSize, en.border),
            parentComponent: "GoLiveModal",
            children: [
                (0, r.jsxs)("div", {
                    className: en.container,
                    children: [
                        (0, r.jsx)(h.olH, {
                            onClick: ea,
                            className: en.modalCloseButton,
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
                (0, r.jsx)(h.yRy, {
                    targetElementRef: eh,
                    position: "right",
                    align: "center",
                    shouldShow: null != eP,
                    spacing: 18,
                    renderPopout: () =>
                        (0, r.jsx)(es, {
                            visibleContent: eP,
                            markAsDismissed: eZ,
                        }),
                    children: () => {
                        var e;
                        return (0, r.jsxs)("form", {
                            onSubmit: e8,
                            ref: eh,
                            children: [
                                (0, r.jsxs)(h.MyZ, {
                                    springConfig: el(ei({}, c.config.stiff), { clamp: !0 }),
                                    activeSlide: eE,
                                    width: 480,
                                    children: [
                                        (0, r.jsx)(h.Mi4, {
                                            id: 0,
                                            children: (0, r.jsx)("div", {
                                                className: en.modalSize,
                                                children: (0, r.jsx)(V.Z, { onSelectGuild: e7 }),
                                            }),
                                        }),
                                        (0, r.jsx)(h.Mi4, {
                                            id: 2,
                                            children: (0, r.jsx)("div", {
                                                className: en.modalSize,
                                                children: eC
                                                    ? (0, r.jsx)(X.se, {
                                                          onSourceSelect: e4,
                                                          selectedSource: ek,
                                                      })
                                                    : (0, r.jsx)(X.oA, {
                                                          selectedSource: ek,
                                                          onChangeSelectedSource: e4,
                                                      }),
                                            }),
                                        }),
                                        (0, r.jsx)(h.Mi4, {
                                            id: 3,
                                            children: (0, r.jsx)("div", {
                                                className: en.modalSize,
                                                children: (0, r.jsx)(z.default, {
                                                    selectedChannelId:
                                                        null != (e = null == e_ ? void 0 : e_.id) ? e : eR,
                                                    selectedPreset: eG,
                                                    selectedResolution: eF,
                                                    selectedSource: ek,
                                                    selectedFPS: eW,
                                                    sound: eV,
                                                    previewDisabled: eJ,
                                                    sourceChanged: eN,
                                                    selectSource: B,
                                                    onChangeSelectedFPS: (e) => e5(eG, eF, e),
                                                    onChangeSelectedResolution: (e) => e5(eG, e, eW),
                                                    onChangeSelectedPreset: (e) => e5(e, eF, eW),
                                                    onChangeSelectedChannelId: eM,
                                                    onChangeSelectedSource: e4,
                                                    onChangeSource: () => tt(),
                                                    onChangeAudioDevice: (e) => eB(e),
                                                    onChangeGuild: () => eT(0),
                                                    onChangeSound: (e) => eX(e),
                                                    onChangePreviewDisabled: (e) => eK(e),
                                                    onClose: ea,
                                                    selectedGuildId: eY,
                                                    targetGuildPremiumTier: ej,
                                                    selectGuild: k,
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)(h.Mi4, {
                                            id: 1,
                                            children: (0, r.jsx)("div", {
                                                className: en.modalSize,
                                                children: (0, r.jsx)(X.Hu, {
                                                    onSourceSelect: e2,
                                                    onCancel: ti,
                                                    pickerType: e$,
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                                ts,
                            ],
                        });
                    },
                }),
            ],
        }),
    });
}
function ea(e) {
    let { showRefreshedGoLiveModal: t } = (0, B.a)({ location: e.analyticsLocation }),
        n = (0, f.e7)([C.ZP], () => (null != e.sourcePID ? C.ZP.getGameForPID(e.sourcePID) : void 0));
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
