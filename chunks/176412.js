n.d(t, {
    Bm: () => T,
    P7: () => M,
    X: () => D,
    ae: () => j
});
var i,
    r,
    l = n(73800),
    o = n(392711),
    u = n.n(o),
    a = n(442837),
    c = n(25209),
    d = n(481060),
    s = n(2052),
    p = n(542094),
    f = n(513202),
    v = n(367907),
    y = n(213459),
    b = n(895924),
    m = n(691424),
    E = n(428595),
    Z = n(364458),
    O = n(585483),
    g = n(499254),
    h = n(541099),
    P = n(827498),
    _ = n(346683),
    w = n(981631),
    A = n(388032);
let I =
        ((i = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    i.forEach(function (t) {
                        var i;
                        ((i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = i));
                    }));
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
    S = u().pick(
        (0, Z.Z)([
            E.Z.RULES,
            { commandMention: I },
            (0, m.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    j = c.w4(S);
function M(e) {
    let { context: t, application: n, location: i, sectionName: r, commandName: o, autoDismissOnClick: u = !0, launchingComponentId: c, submitting: m = !1, fetchesApplication: E = !0, onConfirmActivityLaunchChecksAlertOpen: Z } = e,
        O = (0, s.O)(),
        I = (0, p.Qv)({
            context: t,
            applicationId: n.id,
            fetchesApplication: E
        }),
        S = (0, _.Q)(I),
        j = (0, a.e7)([h.Z], () => h.Z.entrypoint()),
        M = l.useMemo(() => {
            var e, i, r;
            if ('channel' !== t.type) return null != (r = null == (e = n.bot) ? void 0 : e.id) ? r : null == (i = (0, y.If)(t, n.id).descriptor) ? void 0 : i.botId;
        }, [t, n.id, n.bot]),
        T = (0, p.w1)({
            applicationId: n.id,
            botUserIdForAppDM: M,
            embeddedActivitiesManager: f.Z,
            context: t,
            locationObject: O.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                (u && g.yT(P.ti.ACTIVITY),
                    (0, v.yw)(w.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: r,
                        action: S,
                        source: j
                    }));
            },
            launchingComponentId: c,
            commandOrigin: b.bB.APPLICATION_LAUNCHER,
            sectionName: r,
            source: j,
            fetchesApplication: E,
            onConfirmActivityLaunchChecksAlertOpen: Z
        }),
        D = d.Ttl.BRAND,
        L = null != o ? o : A.intl.string(A.t.zKX8Nj);
    return (
        S === p.JS.JOIN ? ((D = d.Ttl.GREEN), (L = A.intl.string(A.t.d9PsMj))) : S !== p.JS.LEAVE || m || ((D = d.Ttl.RED), (L = A.intl.string(A.t['Hi1/aW']))),
        {
            onActivityItemSelected: T,
            activityAction: S,
            buttonColor: D,
            buttonText: L
        }
    );
}
function T(e, t) {
    let n = h.Z.entrypoint(),
        i = l.useMemo(
            () =>
                (0, o.debounce)(
                    (e, t) => {
                        (0, v.yw)(w.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
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
    O.S.dispatchToLastSubscribed(w.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
