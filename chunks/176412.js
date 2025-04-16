n.d(t, {
    Bm: () => D,
    P7: () => T,
    X: () => M,
    ae: () => S
});
var i,
    r,
    l = n(192379),
    o = n(392711),
    a = n.n(o),
    c = n(442837),
    u = n(25209),
    d = n(481060),
    p = n(2052),
    s = n(542094),
    f = n(513202),
    v = n(367907),
    y = n(213459),
    b = n(895924),
    E = n(691424),
    O = n(428595),
    m = n(364458),
    g = n(585483),
    P = n(499254),
    Z = n(541099),
    h = n(827498),
    _ = n(346683),
    A = n(981631),
    w = n(388032);
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
        })({}, O.Z.RULES.commandMention)),
        (r = r = { parse: (e, t, n) => ({ content: O.Z.RULES.commandMention.parse(e, t, n).content }) }),
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
    j = a().pick(
        (0, m.Z)([
            O.Z.RULES,
            { commandMention: I },
            (0, E.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    S = u.w4(j);
function T(e) {
    let { context: t, application: n, location: i, sectionName: r, commandName: o, autoDismissOnClick: a = !0, launchingComponentId: u, submitting: E = !1, fetchesApplication: O = !0, onConfirmActivityLaunchChecksAlertOpen: m, playSolo: g = !1 } = e,
        I = (0, p.O)(),
        j = (0, s.Qv)({
            context: t,
            applicationId: n.id,
            fetchesApplication: O
        }),
        S = (0, _.Q)(j),
        T = (0, c.e7)([Z.Z], () => Z.Z.entrypoint()),
        D = l.useMemo(() => {
            var e, i, r;
            if ('channel' !== t.type || g) return null != (r = null == (e = n.bot) ? void 0 : e.id) ? r : null == (i = (0, y.If)(t, n.id).descriptor) ? void 0 : i.botId;
        }, [t, n.id, n.bot, g]),
        M = (0, s.w1)({
            applicationId: n.id,
            botUserIdForAppDM: D,
            embeddedActivitiesManager: f.Z,
            context: t,
            locationObject: I.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                a && P.yT(h.ti.ACTIVITY),
                    (0, v.yw)(A.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: r,
                        action: S,
                        source: T
                    });
            },
            launchingComponentId: u,
            commandOrigin: b.bB.APPLICATION_LAUNCHER,
            sectionName: r,
            source: T,
            fetchesApplication: O,
            onConfirmActivityLaunchChecksAlertOpen: m
        }),
        L = d.Ttl.BRAND,
        N = null != o ? o : w.NW.string(w.t.zKX8Nj);
    return (
        S === s.JS.JOIN ? ((L = d.Ttl.GREEN), (N = w.NW.string(w.t.d9PsMj))) : S !== s.JS.LEAVE || E || ((L = d.Ttl.RED), (N = w.NW.string(w.t['Hi1/aW']))),
        {
            onActivityItemSelected: M,
            activityAction: S,
            buttonColor: L,
            buttonText: N
        }
    );
}
function D(e, t) {
    let n = Z.Z.entrypoint(),
        i = l.useMemo(
            () =>
                (0, o.debounce)(
                    (e, t) => {
                        (0, v.yw)(A.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
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
function M(e) {
    g.S.dispatchToLastSubscribed(A.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
