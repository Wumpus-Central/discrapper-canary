n.d(t, {
    Bm: () => R,
    P7: () => P,
    X: () => w,
    ae: () => N,
});
var r = n(473749),
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(25209),
    l = n(2052),
    c = n(542094),
    u = n(513202),
    d = n(367907),
    f = n(213459),
    p = n(895924),
    _ = n(691424),
    m = n(428595),
    h = n(364458),
    g = n(585483),
    E = n(499254),
    b = n(541099),
    y = n(827498),
    O = n(346683),
    v = n(981631),
    S = n(388032);
function I(e, t, n) {
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
function T(e, t) {
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
                : T(Object(t)).forEach(function (n) {
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
                        I(e, t, n[t]);
                    });
            }
            return e;
        })({}, m.Z.RULES.commandMention),
        { parse: (e, t, n) => ({ content: m.Z.RULES.commandMention.parse(e, t, n).content }) },
    ),
    A = a().pick(
        (0, h.Z)([
            m.Z.RULES,
            { commandMention: C },
            (0, _.Z)({
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
    N = s.w4(A);
function P(e) {
    let {
            context: t,
            application: n,
            location: i,
            sectionName: a,
            commandName: s,
            autoDismissOnClick: _ = !0,
            launchingComponentId: m,
            submitting: h = !1,
            fetchesApplication: g = !0,
            onConfirmActivityLaunchChecksAlertOpen: I,
        } = e,
        T = (0, l.O)(),
        C = (0, c.Qv)({
            context: t,
            applicationId: n.id,
            fetchesApplication: g,
        }),
        A = (0, O.Q)(C),
        N = (0, o.e7)([b.Z], () => b.Z.entrypoint()),
        P = r.useMemo(() => {
            var e, r, i;
            if ("channel" !== t.type)
                return null != (i = null == (e = n.bot) ? void 0 : e.id)
                    ? i
                    : null == (r = (0, f.If)(t, n.id).descriptor)
                      ? void 0
                      : r.botId;
        }, [t, n.id, n.bot]),
        R = (0, c.w1)({
            application: n,
            botUserIdForAppDM: P,
            embeddedActivitiesManager: u.Z,
            context: t,
            locationObject: T.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                _ && E.y(y.ti.ACTIVITY),
                    (0, d.yw)(v.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: a,
                        action: A,
                        source: N,
                    });
            },
            launchingComponentId: m,
            commandOrigin: p.bB.APPLICATION_LAUNCHER,
            sectionName: a,
            source: N,
            fetchesApplication: g,
            onConfirmActivityLaunchChecksAlertOpen: I,
        }),
        w = "primary",
        D = null != s ? s : S.intl.string(S.t.zKX8Nu);
    return (
        A === c.JS.JOIN
            ? ((w = "active"), (D = S.intl.string(S.t.d9PsMj)))
            : A !== c.JS.LEAVE || h || ((w = "critical-primary"), (D = S.intl.string(S.t["Hi1/aQ"]))),
        {
            onActivityItemSelected: R,
            activityAction: A,
            buttonVariant: w,
            buttonText: D,
        }
    );
}
function R(e, t) {
    let n = b.Z.entrypoint(),
        a = r.useMemo(
            () =>
                (0, i.debounce)(
                    (e, t) => {
                        (0, d.yw)(v.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
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
function w(e) {
    g.S.dispatchToLastSubscribed(v.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
