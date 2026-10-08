n.d(t, { Ch: () => S, hg: () => w, dn: () => C, SD: () => T });
var i = n(582128),
    a = n(435558),
    l = n.n(a),
    o = n(17928),
    c = n(807081),
    r = n(212245),
    d = n(849269),
    p = n(666860),
    u = n(264322),
    s = n(392054),
    A = n(247186),
    _ = n(999915),
    E = n(551965),
    h = n(625494),
    y = n(211401),
    f = n(989837),
    m = n(500049),
    v = n(652215),
    I = n(660183);
let b = {
        ..._.Ay.RULES.commandMention,
        parse: (e, t, n) => ({ content: _.Ay.RULES.commandMention.parse(e, t, n).content }),
    },
    g = l().pick(
        (0, E.A)([_.Ay.RULES, { commandMention: b }, (0, A.Ay)({ enableBuildOverrides: !1, enableEmojiClick: !1 })]),
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
    T = c.aV(g);
function C(e) {
    let {
            context: t,
            application: n,
            location: a,
            sectionName: l,
            commandName: c,
            autoDismissOnClick: A = !0,
            launchingComponentId: _,
            submitting: E = !1,
            fetchesApplication: h = !0,
            onConfirmActivityLaunchChecksAlertOpen: b,
        } = e,
        g = (0, r.p)(),
        T = (function (e) {
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
        })((0, d.Hq)({ context: t, applicationId: n.id, fetchesApplication: h })),
        C = (0, o.bG)([f.A], () => f.A.entrypoint()),
        S = i.useMemo(() => {
            if ("channel" !== t.type) return n.bot?.id ?? (0, u.Sx)(t, n.id).descriptor?.botId;
        }, [t, n.id, n.bot]),
        w = (0, d.wK)({
            application: n,
            botUserIdForAppDM: S,
            context: t,
            locationObject: g.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                (A && y.k(m.Se.ACTIVITY),
                    (0, p.zV)(v.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: a,
                        application_id: t,
                        section_name: l,
                        action: T,
                        source: C,
                    }));
            },
            launchingComponentId: _,
            commandOrigin: s.iw.APPLICATION_LAUNCHER,
            sectionName: l,
            source: C,
            fetchesApplication: h,
            onConfirmActivityLaunchChecksAlertOpen: b,
        }),
        L = "primary",
        P = c ?? I.intl.string(I.t.zKX8Nu);
    return (
        T === d.o6.JOIN
            ? ((L = "active"), (P = I.intl.string(I.t.d9PsMj)))
            : T !== d.o6.LEAVE || E || ((L = "critical-primary"), (P = I.intl.string(I.t["Hi1/aQ"]))),
        { onActivityItemSelected: w, activityAction: T, buttonVariant: L, buttonText: P }
    );
}
function S(e, t) {
    let n = f.A.entrypoint(),
        l = i.useMemo(
            () =>
                (0, a.debounce)(
                    (e, t) => {
                        (0, p.zV)(v.HAw.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, { type: e, source: t });
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
function w(e) {
    h._.dispatchToLastSubscribed(v.jej.OPEN_APP_LAUNCHER, { applicationId: e });
}
