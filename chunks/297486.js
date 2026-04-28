"use strict";
n.d(t, { Ch: () => j, SD: () => S, dn: () => N, hg: () => T });
var l = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(17928),
    r = n(436857),
    o = n(212245),
    c = n(849269),
    u = n(869003),
    d = n(58149),
    h = n(264322),
    m = n(392054),
    p = n(365347),
    f = n(29814),
    g = n(551965),
    _ = n(625494),
    x = n(211401),
    C = n(989837),
    A = n(500049),
    E = n(615807),
    I = n(652215),
    v = n(985018);
let y = {
        ...f.A.RULES.commandMention,
        parse: (e, t, n) => ({ content: f.A.RULES.commandMention.parse(e, t, n).content }),
    },
    b = s().pick(
        (0, g.A)([f.A.RULES, { commandMention: y }, (0, p.A)({ enableBuildOverrides: !1, enableEmojiClick: !1 })]),
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
    S = r.aV(b);
function N(e) {
    let {
            context: t,
            application: n,
            location: i,
            sectionName: s,
            commandName: r,
            autoDismissOnClick: p = !0,
            launchingComponentId: f,
            submitting: g = !1,
            fetchesApplication: _ = !0,
            onConfirmActivityLaunchChecksAlertOpen: y,
        } = e,
        b = (0, o.p)(),
        S = (0, c.Hq)({ context: t, applicationId: n.id, fetchesApplication: _ }),
        N = (0, E.G)(S),
        j = (0, a.bG)([C.A], () => C.A.entrypoint()),
        T = l.useMemo(() => {
            if ("channel" !== t.type) return n.bot?.id ?? (0, h.Sx)(t, n.id).descriptor?.botId;
        }, [t, n.id, n.bot]),
        w = (0, c.wK)({
            application: n,
            botUserIdForAppDM: T,
            embeddedActivitiesManager: u.A,
            context: t,
            locationObject: b.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                p && x.k(A.Se.ACTIVITY),
                    (0, d.zV)(I.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: s,
                        action: N,
                        source: j,
                    });
            },
            launchingComponentId: f,
            commandOrigin: m.iw.APPLICATION_LAUNCHER,
            sectionName: s,
            source: j,
            fetchesApplication: _,
            onConfirmActivityLaunchChecksAlertOpen: y,
        }),
        R = "primary",
        L = r ?? v.intl.string(v.t.zKX8Nu);
    return (
        N === c.o6.JOIN
            ? ((R = "active"), (L = v.intl.string(v.t.d9PsMj)))
            : N !== c.o6.LEAVE || g || ((R = "critical-primary"), (L = v.intl.string(v.t["Hi1/aQ"]))),
        { onActivityItemSelected: w, activityAction: N, buttonVariant: R, buttonText: L }
    );
}
function j(e, t) {
    let n = C.A.entrypoint(),
        s = l.useMemo(
            () =>
                (0, i.debounce)(
                    (e, t) => {
                        (0, d.zV)(I.HAw.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, { type: e, source: t });
                    },
                    400,
                    { leading: !1, trailing: !0 },
                ),
            [],
        );
    l.useEffect(() => {
        null != e && s(e, n);
    }, [e, t, n, s]);
}
function T(e) {
    _._.dispatchToLastSubscribed(I.jej.OPEN_APP_LAUNCHER, { applicationId: e });
}
