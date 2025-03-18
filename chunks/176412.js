n.d(t, {
    Bm: () => S,
    P7: () => _,
    ae: () => I
});
var i,
    l,
    r = n(192379),
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    c = n(25209),
    u = n(481060),
    d = n(2052),
    p = n(542094),
    m = n(513202),
    f = n(367907),
    h = n(213459),
    v = n(895924),
    y = n(691424),
    b = n(428595),
    N = n(364458),
    g = n(499254),
    x = n(541099),
    j = n(827498),
    E = n(346683),
    P = n(981631),
    C = n(388032);
let O =
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
    A = a().pick(
        (0, N.Z)([
            b.Z.RULES,
            { commandMention: O },
            (0, y.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    I = c.w4(A);
function _(e) {
    let { context: t, application: n, location: i, sectionName: l, commandName: o, autoDismissOnClick: a = !0, launchingComponentId: c, submitting: y = !1, fetchesApplication: b = !0, onConfirmActivityLaunchChecksAlertOpen: N } = e,
        O = (0, d.O)(),
        A = (0, p.Qv)({
            context: t,
            applicationId: n.id,
            fetchesApplication: b
        }),
        I = (0, E.Q)(A),
        _ = (0, s.e7)([x.Z], () => x.Z.entrypoint()),
        S = r.useMemo(() => {
            var e, i, l;
            if ('channel' !== t.type) return null !== (l = null === (e = n.bot) || void 0 === e ? void 0 : e.id) && void 0 !== l ? l : null === (i = (0, h.If)(t, n.id).descriptor) || void 0 === i ? void 0 : i.botId;
        }, [t, n.id, n.bot]),
        T = (0, p.w1)({
            applicationId: n.id,
            botUserIdForAppDM: S,
            embeddedActivitiesManager: m.Z,
            context: t,
            locationObject: O.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                a && g.yT(j.ti.ACTIVITY),
                    (0, f.yw)(P.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: l,
                        action: I,
                        source: _
                    });
            },
            launchingComponentId: c,
            commandOrigin: v.bB.APPLICATION_LAUNCHER,
            sectionName: l,
            source: _,
            fetchesApplication: b,
            onConfirmActivityLaunchChecksAlertOpen: N
        }),
        L = u.Ttl.BRAND,
        Z = null != o ? o : C.NW.string(C.t.zKX8Nj);
    return (
        I === p.JS.JOIN ? ((L = u.Ttl.GREEN), (Z = C.NW.string(C.t.d9PsMj))) : I !== p.JS.LEAVE || y || ((L = u.Ttl.RED), (Z = C.NW.string(C.t['Hi1/aW']))),
        {
            onActivityItemSelected: T,
            activityAction: I,
            buttonColor: L,
            buttonText: Z
        }
    );
}
function S(e, t) {
    let n = x.Z.entrypoint(),
        i = r.useMemo(
            () =>
                (0, o.debounce)(
                    (e, t) => {
                        (0, f.yw)(P.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
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
