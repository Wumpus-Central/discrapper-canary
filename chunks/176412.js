n.d(t, {
    Bm: () => N,
    P7: () => T,
    X: () => D,
    ae: () => S
});
var i,
    r,
    l = n(192379),
    o = n(392711),
    c = n.n(o),
    a = n(442837),
    u = n(25209),
    d = n(481060),
    p = n(2052),
    s = n(542094),
    f = n(513202),
    v = n(367907),
    b = n(213459),
    y = n(895924),
    O = n(691424),
    E = n(428595),
    m = n(364458),
    P = n(585483),
    g = n(499254),
    h = n(541099),
    w = n(827498),
    _ = n(346683),
    Z = n(981631),
    A = n(388032);
let I =
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
        })({}, E.Z.RULES.commandMention)),
        (r = r = { parse: (e, t, n) => ({ content: E.Z.RULES.commandMention.parse(e, t, n).content }) }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        i),
    j = c().pick(
        (0, m.Z)([
            E.Z.RULES,
            { commandMention: I },
            (0, O.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    S = u.w4(j);
function T(e) {
    let { context: t, application: n, location: i, sectionName: r, commandName: o, autoDismissOnClick: c = !0, launchingComponentId: u, submitting: O = !1, fetchesApplication: E = !0, onConfirmActivityLaunchChecksAlertOpen: m, playSolo: P = !1 } = e,
        I = (0, p.O)(),
        j = (0, s.Qv)({
            context: t,
            applicationId: n.id,
            fetchesApplication: E
        }),
        S = (0, _.Q)(j),
        T = (0, a.e7)([h.Z], () => h.Z.entrypoint()),
        N = l.useMemo(() => {
            var e, i, r;
            if ('channel' !== t.type || P) return null != (r = null == (e = n.bot) ? void 0 : e.id) ? r : null == (i = (0, b.If)(t, n.id).descriptor) ? void 0 : i.botId;
        }, [t, n.id, n.bot, P]),
        D = (0, s.w1)({
            applicationId: n.id,
            botUserIdForAppDM: N,
            embeddedActivitiesManager: f.Z,
            context: t,
            locationObject: I.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                c && g.yT(w.ti.ACTIVITY),
                    (0, v.yw)(Z.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: r,
                        action: S,
                        source: T
                    });
            },
            launchingComponentId: u,
            commandOrigin: y.bB.APPLICATION_LAUNCHER,
            sectionName: r,
            source: T,
            fetchesApplication: E,
            onConfirmActivityLaunchChecksAlertOpen: m
        }),
        L = d.Ttl.BRAND,
        C = null != o ? o : A.NW.string(A.t.zKX8Nj);
    return (
        S === s.JS.JOIN ? ((L = d.Ttl.GREEN), (C = A.NW.string(A.t.d9PsMj))) : S !== s.JS.LEAVE || O || ((L = d.Ttl.RED), (C = A.NW.string(A.t['Hi1/aW']))),
        {
            onActivityItemSelected: D,
            activityAction: S,
            buttonColor: L,
            buttonText: C
        }
    );
}
function N(e, t) {
    let n = h.Z.entrypoint(),
        i = l.useMemo(
            () =>
                (0, o.debounce)(
                    (e, t) => {
                        (0, v.yw)(Z.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
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
    l.useEffect(() => {
        null != e && i(e, n);
    }, [e, t, n, i]);
}
function D(e) {
    P.S.dispatchToLastSubscribed(Z.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
