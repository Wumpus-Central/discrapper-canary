n.d(t, { hg: () => w, SD: () => T, Ch: () => L, dn: () => g });
var i = n(582128),
    a = n(435558),
    l = n.n(a),
    o = n(855986),
    c = n(826059),
    r = n(212245),
    p = n(849269),
    u = n(149468),
    d = n(392054),
    s = n(862316),
    A = n(605275),
    _ = n(551965),
    E = n(188567),
    m = n(211401),
    f = n(989837),
    y = n(500049),
    h = n(652215),
    v = n(792996);
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
    T = c.aV(b);
function g(e) {
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
        T = (function (e) {
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
        g = (0, o.bG)([f.A], () => f.A.entrypoint()),
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
                        action: T,
                        source: g,
                    }));
            },
            launchingComponentId: A,
            commandOrigin: d.iw.APPLICATION_LAUNCHER,
            sectionName: l,
            source: g,
            fetchesApplication: E,
            onConfirmActivityLaunchChecksAlertOpen: I,
        }),
        w = "primary",
        C = c ?? v.intl.string(v.t.zKX8Nu);
    return (
        T === p.o6.JOIN
            ? ((w = "active"), (C = v.intl.string(v.t.d9PsMj)))
            : T !== p.o6.LEAVE || _ || ((w = "critical-primary"), (C = v.intl.string(v.t["Hi1/aQ"]))),
        { onActivityItemSelected: L, activityAction: T, buttonVariant: w, buttonText: C }
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
