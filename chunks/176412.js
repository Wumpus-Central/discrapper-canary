n.d(t, {
    Bm: () => D,
    DK: () => j,
    P7: () => N,
    X: () => M,
    ae: () => S,
    cr: () => R,
    kU: () => U
});
var i,
    l,
    r = n(192379),
    a = n(392711),
    o = n.n(a),
    c = n(442837),
    u = n(25209),
    d = n(481060),
    p = n(2052),
    s = n(542094),
    f = n(513202),
    E = n(367907),
    v = n(213459),
    _ = n(895924),
    y = n(691424),
    b = n(428595),
    h = n(364458),
    g = n(585483),
    m = n(499254),
    A = n(573188),
    O = n(541099),
    I = n(827498),
    P = n(346683),
    Z = n(314734),
    w = n(981631),
    C = n(388032);
let L =
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
        })({}, b.Z.RULES.commandMention)),
        (l = l = { parse: (e, t, n) => ({ content: b.Z.RULES.commandMention.parse(e, t, n).content }) }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(l)).forEach(function (e) {
                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
              }),
        i),
    T = o().pick(
        (0, h.Z)([
            b.Z.RULES,
            { commandMention: L },
            (0, y.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    S = u.w4(T);
function N(e) {
    let { context: t, application: n, location: i, sectionName: l, commandName: a, autoDismissOnClick: o = !0, launchingComponentId: u, submitting: y = !1, fetchesApplication: b = !0, onConfirmActivityLaunchChecksAlertOpen: h } = e,
        g = (0, p.O)(),
        A = (0, s.Qv)({
            context: t,
            applicationId: n.id,
            fetchesApplication: b
        }),
        Z = (0, P.Q)(A),
        L = (0, c.e7)([O.Z], () => O.Z.entrypoint()),
        T = r.useMemo(() => {
            var e, i, l;
            if ('channel' !== t.type) return null != (l = null == (e = n.bot) ? void 0 : e.id) ? l : null == (i = (0, v.If)(t, n.id).descriptor) ? void 0 : i.botId;
        }, [t, n.id, n.bot]),
        S = (0, s.w1)({
            applicationId: n.id,
            botUserIdForAppDM: T,
            embeddedActivitiesManager: f.Z,
            context: t,
            locationObject: g.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                o && m.yT(I.ti.ACTIVITY),
                    (0, E.yw)(w.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: l,
                        action: Z,
                        source: L
                    });
            },
            launchingComponentId: u,
            commandOrigin: _.bB.APPLICATION_LAUNCHER,
            sectionName: l,
            source: L,
            fetchesApplication: b,
            onConfirmActivityLaunchChecksAlertOpen: h
        }),
        N = d.Ttl.BRAND,
        D = null != a ? a : C.intl.string(C.t.zKX8Nj);
    return (
        Z === s.JS.JOIN ? ((N = d.Ttl.GREEN), (D = C.intl.string(C.t.d9PsMj))) : Z !== s.JS.LEAVE || y || ((N = d.Ttl.RED), (D = C.intl.string(C.t['Hi1/aW']))),
        {
            onActivityItemSelected: S,
            activityAction: Z,
            buttonColor: N,
            buttonText: D
        }
    );
}
function D(e, t) {
    let n = O.Z.entrypoint(),
        i = r.useMemo(
            () =>
                (0, a.debounce)(
                    (e, t) => {
                        (0, E.yw)(w.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
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
    r.useEffect(() => {
        null != e && i(e, n);
    }, [e, t, n, i]);
}
function M(e) {
    g.S.dispatchToLastSubscribed(w.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
function j() {
    return A.X.getCurrentConfig({ location: 'AppLauncherWebUtils.getAppLauncherHeight()' }).enabled ? Z.M0 : Z.lv;
}
function R() {
    return A.X.getCurrentConfig({ location: 'AppLauncherWebUtils.getAppLauncherMaxHeight()' }).enabled ? Z.N8 : Z.K7;
}
function U() {
    return A.X.getCurrentConfig({ location: 'AppLauncherWebUtils.getAppLauncherSizeCSS()' }).enabled ? Z.Iu : Z.u$;
}
