n.d(t, {
    Bm: () => w,
    P7: () => P,
    X: () => D,
    ae: () => R,
});
var r = n(73800),
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(25209),
    l = n(755721),
    c = n(2052),
    u = n(542094),
    d = n(513202),
    f = n(367907),
    _ = n(213459),
    p = n(895924),
    h = n(691424),
    m = n(428595),
    g = n(364458),
    E = n(585483),
    b = n(499254),
    y = n(541099),
    O = n(827498),
    v = n(346683),
    I = n(981631),
    T = n(388032);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
let N = (function (e, t) {
        return (
            (t = null != t ? t : {}),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : A(Object(t)).forEach(function (n) {
                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                  }),
            e
        );
    })(
        (function (e) {
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
                        S(e, t, n[t]);
                    });
            }
            return e;
        })({}, m.Z.RULES.commandMention),
        { parse: (e, t, n) => ({ content: m.Z.RULES.commandMention.parse(e, t, n).content }) },
    ),
    C = o().pick(
        (0, g.Z)([
            m.Z.RULES,
            { commandMention: N },
            (0, h.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1,
            }),
        ]),
        [
            "commandMention",
            "customEmoji",
            "em",
            "emoji",
            "emoticon",
            "highlight",
            "inlineCode",
            "looseEm",
            "s",
            "strong",
            "text",
            "timestamp",
            "u",
            "spoiler",
        ],
    ),
    R = s.w4(C);
function P(e) {
    let {
            context: t,
            application: n,
            location: i,
            sectionName: o,
            commandName: s,
            autoDismissOnClick: h = !0,
            launchingComponentId: m,
            submitting: g = !1,
            fetchesApplication: E = !0,
            onConfirmActivityLaunchChecksAlertOpen: S,
        } = e,
        A = (0, c.O)(),
        N = (0, u.Qv)({
            context: t,
            applicationId: n.id,
            fetchesApplication: E,
        }),
        C = (0, v.Q)(N),
        R = (0, a.e7)([y.Z], () => y.Z.entrypoint()),
        P = r.useMemo(() => {
            var e, r, i;
            if ("channel" !== t.type)
                return null != (i = null == (e = n.bot) ? void 0 : e.id)
                    ? i
                    : null == (r = (0, _.If)(t, n.id).descriptor)
                      ? void 0
                      : r.botId;
        }, [t, n.id, n.bot]),
        w = (0, u.w1)({
            application: n,
            botUserIdForAppDM: P,
            embeddedActivitiesManager: d.Z,
            context: t,
            locationObject: A.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                h && b.yT(O.ti.ACTIVITY),
                    (0, f.yw)(I.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: o,
                        action: C,
                        source: R,
                    });
            },
            launchingComponentId: m,
            commandOrigin: p.bB.APPLICATION_LAUNCHER,
            sectionName: o,
            source: R,
            fetchesApplication: E,
            onConfirmActivityLaunchChecksAlertOpen: S,
        }),
        D = l.Tt.BRAND,
        L = null != s ? s : T.intl.string(T.t.zKX8Nj);
    return (
        C === u.JS.JOIN
            ? ((D = l.Tt.GREEN), (L = T.intl.string(T.t.d9PsMj)))
            : C !== u.JS.LEAVE || g || ((D = l.Tt.RED), (L = T.intl.string(T.t["Hi1/aW"]))),
        {
            onActivityItemSelected: w,
            activityAction: C,
            buttonColor: D,
            buttonText: L,
        }
    );
}
function w(e, t) {
    let n = y.Z.entrypoint(),
        o = r.useMemo(
            () =>
                (0, i.debounce)(
                    (e, t) => {
                        (0, f.yw)(I.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
                            type: e,
                            source: t,
                        });
                    },
                    400,
                    {
                        leading: !1,
                        trailing: !0,
                    },
                ),
            [],
        );
    r.useEffect(() => {
        null != e && o(e, n);
    }, [e, t, n, o]);
}
function D(e) {
    E.S.dispatchToLastSubscribed(I.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
