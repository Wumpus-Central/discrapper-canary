n.d(t, { Ch: () => L, hg: () => w, dn: () => T, SD: () => g });
var i = n(582128),
    a = n(435558),
    l = n.n(a),
    o = n(17928),
    c = n(807081),
    r = n(212245),
    p = n(849269),
    u = n(666860),
    d = n(392054),
    s = n(247186),
    A = n(999915),
    _ = n(551965),
    E = n(625494),
    m = n(211401),
    f = n(989837),
    y = n(500049),
    h = n(652215),
    v = n(105292);
let I = {
        ...A.Ay.RULES.commandMention,
        parse: (e, t, n) => ({ content: A.Ay.RULES.commandMention.parse(e, t, n).content }),
    },
    b = l().pick(
        (0, _.A)([A.Ay.RULES, { commandMention: I }, (0, s.Ay)({ enableBuildOverrides: !1, enableEmojiClick: !1 })]),
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
    g = c.aV(b);
function T(e) {
    let {
            context: t,
            application: n,
            location: a,
            sectionName: l,
            commandName: c,
            autoDismissOnClick: s = !0,
            launchingComponentId: A,
            submitting: _ = !1,
            fetchesApplication: E = !0,
            onConfirmActivityLaunchChecksAlertOpen: I,
        } = e,
        b = (0, r.p)(),
        g = (function (e) {
            let [t, n] = i.useState(e);
            return (
                i.useLayoutEffect(() => {
                    if (e === p.o6.LEAVE) {
                        let t = setTimeout(() => n(e), 100);
                        return () => clearTimeout(t);
                    }
                    n(e);
                }, [e]),
                t
            );
        })((0, p.Hq)({ context: t, applicationId: n.id, fetchesApplication: E })),
        T = (0, o.bG)([f.A], () => f.A.entrypoint()),
        L = (0, p.wK)({
            application: n,
            context: t,
            locationObject: b.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                (s && m.k(y.Se.ACTIVITY),
                    (0, u.zV)(h.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: a,
                        application_id: t,
                        section_name: l,
                        action: g,
                        source: T,
                    }));
            },
            launchingComponentId: A,
            commandOrigin: d.iw.APPLICATION_LAUNCHER,
            sectionName: l,
            source: T,
            fetchesApplication: E,
            onConfirmActivityLaunchChecksAlertOpen: I,
        }),
        w = "primary",
        S = c ?? v.intl.string(v.t.zKX8Nu);
    return (
        g === p.o6.JOIN
            ? ((w = "active"), (S = v.intl.string(v.t.d9PsMj)))
            : g !== p.o6.LEAVE || _ || ((w = "critical-primary"), (S = v.intl.string(v.t["Hi1/aQ"]))),
        { onActivityItemSelected: L, activityAction: g, buttonVariant: w, buttonText: S }
    );
}
function L(e, t) {
    let n = f.A.entrypoint(),
        l = i.useMemo(
            () =>
                (0, a.debounce)(
                    (e, t) => {
                        (0, u.zV)(h.HAw.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, { type: e, source: t });
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
    E._.dispatchToLastSubscribed(h.jej.OPEN_APP_LAUNCHER, { applicationId: e });
}
