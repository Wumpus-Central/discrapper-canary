n.d(t, { Ch: () => w, hg: () => L, dn: () => S, SD: () => C });
var i = n(582128),
    a = n(435558),
    l = n.n(a),
    o = n(17928),
    c = n(807081),
    r = n(212245),
    d = n(849269),
    p = n(869003),
    u = n(95561),
    s = n(264322),
    A = n(392054),
    _ = n(247186),
    E = n(999915),
    h = n(551965),
    m = n(625494),
    y = n(211401),
    f = n(989837),
    v = n(500049),
    I = n(652215),
    b = n(375708);
let g = {
        ...E.Ay.RULES.commandMention,
        parse: (e, t, n) => ({ content: E.Ay.RULES.commandMention.parse(e, t, n).content }),
    },
    T = l().pick(
        (0, h.A)([E.Ay.RULES, { commandMention: g }, (0, _.Ay)({ enableBuildOverrides: !1, enableEmojiClick: !1 })]),
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
    C = c.aV(T);
function S(e) {
    let {
            context: t,
            application: n,
            location: a,
            sectionName: l,
            commandName: c,
            autoDismissOnClick: _ = !0,
            launchingComponentId: E,
            submitting: h = !1,
            fetchesApplication: m = !0,
            onConfirmActivityLaunchChecksAlertOpen: g,
        } = e,
        T = (0, r.p)(),
        C = (function (e) {
            let [t, n] = i.useState(e);
            return (
                i.useLayoutEffect(() => {
                    if (e === d.o6.LEAVE) {
                        let t = setTimeout(() => n(e), 100);
                        return () => clearTimeout(t);
                    }
                    n(e);
                }, [e]),
                t
            );
        })((0, d.Hq)({ context: t, applicationId: n.id, fetchesApplication: m })),
        S = (0, o.bG)([f.A], () => f.A.entrypoint()),
        w = i.useMemo(() => {
            if ("channel" !== t.type) return n.bot?.id ?? (0, s.Sx)(t, n.id).descriptor?.botId;
        }, [t, n.id, n.bot]),
        L = (0, d.wK)({
            application: n,
            botUserIdForAppDM: w,
            embeddedActivitiesManager: p.A,
            context: t,
            locationObject: T.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                (_ && y.k(v.Se.ACTIVITY),
                    (0, u.zV)(I.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: a,
                        application_id: t,
                        section_name: l,
                        action: C,
                        source: S,
                    }));
            },
            launchingComponentId: E,
            commandOrigin: A.iw.APPLICATION_LAUNCHER,
            sectionName: l,
            source: S,
            fetchesApplication: m,
            onConfirmActivityLaunchChecksAlertOpen: g,
        }),
        P = "primary",
        D = c ?? b.intl.string(b.t.zKX8Nu);
    return (
        C === d.o6.JOIN
            ? ((P = "active"), (D = b.intl.string(b.t.d9PsMj)))
            : C !== d.o6.LEAVE || h || ((P = "critical-primary"), (D = b.intl.string(b.t["Hi1/aQ"]))),
        { onActivityItemSelected: L, activityAction: C, buttonVariant: P, buttonText: D }
    );
}
function w(e, t) {
    let n = f.A.entrypoint(),
        l = i.useMemo(
            () =>
                (0, a.debounce)(
                    (e, t) => {
                        (0, u.zV)(I.HAw.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, { type: e, source: t });
                    },
                    400,
                    { leading: !1, trailing: !0 },
                ),
            [],
        );
    i.useEffect(() => {
        null != e && l(e, n);
    }, [e, t, n, l]);
}
function L(e) {
    m._.dispatchToLastSubscribed(I.jej.OPEN_APP_LAUNCHER, { applicationId: e });
}
