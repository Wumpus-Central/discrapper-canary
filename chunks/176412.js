n.d(t, {
    Bm: () => P,
    P7: () => R,
    X: () => D,
    ae: () => N,
});
var r = n(647438),
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(25209),
    l = n(2052),
    c = n(542094),
    u = n(513202),
    d = n(367907),
    f = n(213459),
    _ = n(895924),
    p = n(691424),
    h = n(428595),
    m = n(364458),
    g = n(585483),
    E = n(499254),
    b = n(541099),
    y = n(827498),
    O = n(346683),
    v = n(981631),
    I = n(388032);
function T(e, t, n) {
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
function S(e, t) {
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
let A = (function (e, t) {
        return (
            (t = null != t ? t : {}),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : S(Object(t)).forEach(function (n) {
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
                        T(e, t, n[t]);
                    });
            }
            return e;
        })({}, h.Z.RULES.commandMention),
        { parse: (e, t, n) => ({ content: h.Z.RULES.commandMention.parse(e, t, n).content }) },
    ),
    C = a().pick(
        (0, m.Z)([
            h.Z.RULES,
            { commandMention: A },
            (0, p.Z)({
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
    N = s.w4(C);
function R(e) {
    let {
            context: t,
            application: n,
            location: i,
            sectionName: a,
            commandName: s,
            autoDismissOnClick: p = !0,
            launchingComponentId: h,
            submitting: m = !1,
            fetchesApplication: g = !0,
            onConfirmActivityLaunchChecksAlertOpen: T,
        } = e,
        S = (0, l.O)(),
        A = (0, c.Qv)({
            context: t,
            applicationId: n.id,
            fetchesApplication: g,
        }),
        C = (0, O.Q)(A),
        N = (0, o.e7)([b.Z], () => b.Z.entrypoint()),
        R = r.useMemo(() => {
            var e, r, i;
            if ("channel" !== t.type)
                return null != (i = null == (e = n.bot) ? void 0 : e.id)
                    ? i
                    : null == (r = (0, f.If)(t, n.id).descriptor)
                      ? void 0
                      : r.botId;
        }, [t, n.id, n.bot]),
        P = (0, c.w1)({
            application: n,
            botUserIdForAppDM: R,
            embeddedActivitiesManager: u.Z,
            context: t,
            locationObject: S.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                p && E.y(y.ti.ACTIVITY),
                    (0, d.yw)(v.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: a,
                        action: C,
                        source: N,
                    });
            },
            launchingComponentId: h,
            commandOrigin: _.bB.APPLICATION_LAUNCHER,
            sectionName: a,
            source: N,
            fetchesApplication: g,
            onConfirmActivityLaunchChecksAlertOpen: T,
        }),
        D = "primary",
        w = null != s ? s : I.intl.string(I.t.zKX8Nu);
    return (
        C === c.JS.JOIN
            ? ((D = "active"), (w = I.intl.string(I.t.d9PsMj)))
            : C !== c.JS.LEAVE || m || ((D = "critical-primary"), (w = I.intl.string(I.t["Hi1/aQ"]))),
        {
            onActivityItemSelected: P,
            activityAction: C,
            buttonVariant: D,
            buttonText: w,
        }
    );
}
function P(e, t) {
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
function D(e) {
    g.S.dispatchToLastSubscribed(v.CkL.OPEN_APP_LAUNCHER, { applicationId: e });
}
