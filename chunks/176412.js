n.d(t, {
    Bm: () => w,
    P7: () => P,
    X: () => D,
    ae: () => R,
});
var r = n(647438),
    i = n(392711),
    a = n.n(i),
    o = n(442837),
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
let C = (function (e, t) {
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
    N = a().pick(
        (0, g.Z)([
            m.Z.RULES,
            { commandMention: C },
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
    R = s.w4(N);
function P(e) {
    let {
            context: t,
            application: n,
            location: i,
            sectionName: a,
            commandName: s,
            autoDismissOnClick: h = !0,
            launchingComponentId: m,
            submitting: g = !1,
            fetchesApplication: E = !0,
            onConfirmActivityLaunchChecksAlertOpen: S,
        } = e,
        A = (0, c.O)(),
        C = (0, u.Qv)({
            context: t,
            applicationId: n.id,
            fetchesApplication: E,
        }),
        N = (0, v.Q)(C),
        R = (0, o.e7)([y.Z], () => y.Z.entrypoint()),
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
                        section_name: a,
                        action: N,
                        source: R,
                    });
            },
            launchingComponentId: m,
            commandOrigin: p.bB.APPLICATION_LAUNCHER,
            sectionName: a,
            source: R,
            fetchesApplication: E,
            onConfirmActivityLaunchChecksAlertOpen: S,
        }),
        D = "primary",
        x = l.Tt.BRAND,
        L = null != s ? s : T.intl.string(T.t.zKX8Nj);
    return (
        N === u.JS.JOIN
            ? ((D = "active"), (x = l.Tt.GREEN), (L = T.intl.string(T.t.d9PsMj)))
            : N !== u.JS.LEAVE || g || ((D = "critical-primary"), (L = T.intl.string(T.t["Hi1/aW"]))),
        {
            onActivityItemSelected: w,
            activityAction: N,
            buttonVariant: D,
            buttonColor: x,
            buttonText: L,
        }
    );
}
function w(e, t) {
    let n = y.Z.entrypoint(),
        a = r.useMemo(
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
        null != e && a(e, n);
    }, [e, t, n, a]);
}
function D(e) {
    E.S.dispatchToLastSubscribed(I.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
