n.d(t, {
    Bm: () => N,
    DK: () => M,
    P7: () => j,
    X: () => D,
    ae: () => L,
    cr: () => R,
    kU: () => U
});
var i,
    a,
    o = n(192379),
    l = n(392711),
    r = n.n(l),
    c = n(442837),
    u = n(25209),
    p = n(481060),
    d = n(2052),
    s = n(542094),
    f = n(513202),
    b = n(367907),
    v = n(213459),
    y = n(895924),
    E = n(691424),
    h = n(428595),
    g = n(364458),
    m = n(585483),
    _ = n(499254),
    O = n(573188),
    A = n(541099),
    P = n(827498),
    I = n(346683),
    w = n(314734),
    C = n(981631),
    T = n(388032);
let S =
        ((i = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })({}, h.Z.RULES.commandMention)),
        (a = a = { parse: (e, t, n) => ({ content: h.Z.RULES.commandMention.parse(e, t, n).content }) }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(a)).forEach(function (e) {
                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
              }),
        i),
    Z = r().pick(
        (0, g.Z)([
            h.Z.RULES,
            { commandMention: S },
            (0, E.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    L = u.w4(Z);
function j(e) {
    let { context: t, application: n, location: i, sectionName: a, commandName: l, autoDismissOnClick: r = !0, launchingComponentId: u, submitting: E = !1, fetchesApplication: h = !0, onConfirmActivityLaunchChecksAlertOpen: g, playSolo: m = !1 } = e,
        O = (0, d.O)(),
        w = (0, s.Qv)({
            context: t,
            applicationId: n.id,
            fetchesApplication: h
        }),
        S = (0, I.Q)(w),
        Z = (0, c.e7)([A.Z], () => A.Z.entrypoint()),
        L = o.useMemo(() => {
            var e, i, a;
            if ('channel' !== t.type || m) return null != (a = null == (e = n.bot) ? void 0 : e.id) ? a : null == (i = (0, v.If)(t, n.id).descriptor) ? void 0 : i.botId;
        }, [t, n.id, n.bot, m]),
        j = (0, s.w1)({
            applicationId: n.id,
            botUserIdForAppDM: L,
            embeddedActivitiesManager: f.Z,
            context: t,
            locationObject: O.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                r && _.yT(P.ti.ACTIVITY),
                    (0, b.yw)(C.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: a,
                        action: S,
                        source: Z
                    });
            },
            launchingComponentId: u,
            commandOrigin: y.bB.APPLICATION_LAUNCHER,
            sectionName: a,
            source: Z,
            fetchesApplication: h,
            onConfirmActivityLaunchChecksAlertOpen: g
        }),
        N = p.Ttl.BRAND,
        D = null != l ? l : T.intl.string(T.t.zKX8Nj);
    return (
        S === s.JS.JOIN ? ((N = p.Ttl.GREEN), (D = T.intl.string(T.t.d9PsMj))) : S !== s.JS.LEAVE || E || ((N = p.Ttl.RED), (D = T.intl.string(T.t['Hi1/aW']))),
        {
            onActivityItemSelected: j,
            activityAction: S,
            buttonColor: N,
            buttonText: D
        }
    );
}
function N(e, t) {
    let n = A.Z.entrypoint(),
        i = o.useMemo(
            () =>
                (0, l.debounce)(
                    (e, t) => {
                        (0, b.yw)(C.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
                            type: e,
                            source: t
                        });
                    },
                    400,
                    {
                        leading: !1,
                        trailing: !0
                    }
                ),
            []
        );
    o.useEffect(() => {
        null != e && i(e, n);
    }, [e, t, n, i]);
}
function D(e) {
    m.S.dispatchToLastSubscribed(C.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
function M() {
    return O.X.getCurrentConfig({ location: 'AppLauncherWebUtils.getAppLauncherHeight()' }).enabled ? w.M0 : w.lv;
}
function R() {
    return O.X.getCurrentConfig({ location: 'AppLauncherWebUtils.getAppLauncherMaxHeight()' }).enabled ? w.N8 : w.K7;
}
function U() {
    return O.X.getCurrentConfig({ location: 'AppLauncherWebUtils.getAppLauncherSizeCSS()' }).enabled ? w.Iu : w.u$;
}
