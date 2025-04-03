n.d(t, {
    Bm: () => T,
    P7: () => N,
    X: () => D,
    ae: () => S
});
var i,
    r,
    o = n(192379),
    l = n(392711),
    c = n.n(l),
    a = n(442837),
    u = n(25209),
    d = n(481060),
    s = n(2052),
    p = n(542094),
    f = n(513202),
    v = n(367907),
    b = n(213459),
    y = n(895924),
    m = n(691424),
    E = n(428595),
    O = n(364458),
    g = n(585483),
    P = n(499254),
    h = n(541099),
    Z = n(827498),
    w = n(346683),
    _ = n(981631),
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
        (0, O.Z)([
            E.Z.RULES,
            { commandMention: I },
            (0, m.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    S = u.w4(j);
function N(e) {
    let { context: t, application: n, location: i, sectionName: r, commandName: l, autoDismissOnClick: c = !0, launchingComponentId: u, submitting: m = !1, fetchesApplication: E = !0, onConfirmActivityLaunchChecksAlertOpen: O, playSolo: g = !1 } = e,
        I = (0, s.O)(),
        j = (0, p.Qv)({
            context: t,
            applicationId: n.id,
            fetchesApplication: E
        }),
        S = (0, w.Q)(j),
        N = (0, a.e7)([h.Z], () => h.Z.entrypoint()),
        T = o.useMemo(() => {
            var e, i, r;
            if ('channel' !== t.type || g) return null != (r = null == (e = n.bot) ? void 0 : e.id) ? r : null == (i = (0, b.If)(t, n.id).descriptor) ? void 0 : i.botId;
        }, [t, n.id, n.bot, g]),
        D = (0, p.w1)({
            applicationId: n.id,
            botUserIdForAppDM: T,
            embeddedActivitiesManager: f.Z,
            context: t,
            locationObject: I.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                c && P.yT(Z.ti.ACTIVITY),
                    (0, v.yw)(_.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: r,
                        action: S,
                        source: N
                    });
            },
            launchingComponentId: u,
            commandOrigin: y.bB.APPLICATION_LAUNCHER,
            sectionName: r,
            source: N,
            fetchesApplication: E,
            onConfirmActivityLaunchChecksAlertOpen: O
        }),
        C = d.Ttl.BRAND,
        L = null != l ? l : A.NW.string(A.t.zKX8Nj);
    return (
        S === p.JS.JOIN ? ((C = d.Ttl.GREEN), (L = A.NW.string(A.t.d9PsMj))) : S !== p.JS.LEAVE || m || ((C = d.Ttl.RED), (L = A.NW.string(A.t['Hi1/aW']))),
        {
            onActivityItemSelected: D,
            activityAction: S,
            buttonColor: C,
            buttonText: L
        }
    );
}
function T(e, t) {
    let n = h.Z.entrypoint(),
        i = o.useMemo(
            () =>
                (0, l.debounce)(
                    (e, t) => {
                        (0, v.yw)(_.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
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
    g.S.dispatchToLastSubscribed(_.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
