t.d(n, { Ch: () => S, hg: () => w, dn: () => C, SD: () => T });
var i = t(582128),
    a = t(435558),
    l = t.n(a),
    c = t(17928),
    o = t(807081),
    r = t(212245),
    d = t(849269),
    p = t(666860),
    u = t(264322),
    s = t(392054),
    A = t(247186),
    h = t(999915),
    _ = t(551965),
    y = t(625494),
    E = t(211401),
    f = t(989837),
    m = t(500049),
    I = t(652215),
    v = t(105292);
let g = {
        ...h.Ay.RULES.commandMention,
        parse: (e, n, t) => ({ content: h.Ay.RULES.commandMention.parse(e, n, t).content }),
    },
    b = l().pick(
        (0, _.A)([h.Ay.RULES, { commandMention: g }, (0, A.Ay)({ enableBuildOverrides: !1, enableEmojiClick: !1 })]),
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
    T = o.aV(b);
function C(e) {
    let {
            context: n,
            application: t,
            location: a,
            sectionName: l,
            commandName: o,
            autoDismissOnClick: A = !0,
            launchingComponentId: h,
            submitting: _ = !1,
            fetchesApplication: y = !0,
            onConfirmActivityLaunchChecksAlertOpen: g,
        } = e,
        b = (0, r.p)(),
        T = (function (e) {
            let [n, t] = i.useState(e);
            return (
                i.useLayoutEffect(() => {
                    if (e === d.o6.LEAVE) {
                        let n = setTimeout(() => t(e), 100);
                        return () => clearTimeout(n);
                    }
                    t(e);
                }, [e]),
                n
            );
        })((0, d.Hq)({ context: n, applicationId: t.id, fetchesApplication: y })),
        C = (0, c.bG)([f.A], () => f.A.entrypoint()),
        S = i.useMemo(() => {
            if ("channel" !== n.type) return t.bot?.id ?? (0, u.Sx)(n, t.id).descriptor?.botId;
        }, [n, t.id, t.bot]),
        w = (0, d.wK)({
            application: t,
            botUserIdForAppDM: S,
            context: n,
            locationObject: b.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: n } = e;
                (A && E.k(m.Se.ACTIVITY),
                    (0, p.zV)(I.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: a,
                        application_id: n,
                        section_name: l,
                        action: T,
                        source: C,
                    }));
            },
            launchingComponentId: h,
            commandOrigin: s.iw.APPLICATION_LAUNCHER,
            sectionName: l,
            source: C,
            fetchesApplication: y,
            onConfirmActivityLaunchChecksAlertOpen: g,
        }),
        L = "primary",
        P = o ?? v.intl.string(v.t.zKX8Nu);
    return (
        T === d.o6.JOIN
            ? ((L = "active"), (P = v.intl.string(v.t.d9PsMj)))
            : T !== d.o6.LEAVE || _ || ((L = "critical-primary"), (P = v.intl.string(v.t["Hi1/aQ"]))),
        { onActivityItemSelected: w, activityAction: T, buttonVariant: L, buttonText: P }
    );
}
function S(e, n) {
    let t = f.A.entrypoint(),
        l = i.useMemo(
            () =>
                (0, a.debounce)(
                    (e, n) => {
                        (0, p.zV)(I.HAw.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, { type: e, source: n });
                    },
                    400,
                    { leading: !1, trailing: !0 },
                ),
            [],
        );
    i.useEffect(() => {
        null != e && l(e, t);
    }, [e, n, t, l]);
}
function w(e) {
    y._.dispatchToLastSubscribed(I.jej.OPEN_APP_LAUNCHER, { applicationId: e });
}
