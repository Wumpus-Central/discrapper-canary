"use strict";
n.d(t, { Ch: () => j, hg: () => T, dn: () => _, SD: () => N });
var l = n(582128),
    i = n(435558),
    s = n.n(i),
    r = n(17928),
    a = n(807081),
    o = n(212245),
    u = n(849269),
    c = n(869003),
    d = n(95561),
    h = n(264322),
    m = n(392054),
    f = n(480084),
    p = n(29814),
    g = n(551965),
    x = n(625494),
    A = n(211401),
    C = n(989837),
    E = n(500049),
    I = n(652215),
    y = n(375708);
let S = {
        ...p.Ay.RULES.commandMention,
        parse: (e, t, n) => ({ content: p.Ay.RULES.commandMention.parse(e, t, n).content }),
    },
    v = s().pick(
        (0, g.A)([p.Ay.RULES, { commandMention: S }, (0, f.Ay)({ enableBuildOverrides: !1, enableEmojiClick: !1 })]),
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
    N = a.aV(v);
function _(e) {
    let {
            context: t,
            application: n,
            location: i,
            sectionName: s,
            commandName: a,
            autoDismissOnClick: f = !0,
            launchingComponentId: p,
            submitting: g = !1,
            fetchesApplication: x = !0,
            onConfirmActivityLaunchChecksAlertOpen: S,
        } = e,
        v = (0, o.p)(),
        N = (function (e) {
            let [t, n] = l.useState(e);
            return (
                l.useLayoutEffect(() => {
                    if (e === u.o6.LEAVE) {
                        let t = setTimeout(() => n(e), 100);
                        return () => clearTimeout(t);
                    }
                    n(e);
                }, [e]),
                t
            );
        })((0, u.Hq)({ context: t, applicationId: n.id, fetchesApplication: x })),
        _ = (0, r.bG)([C.A], () => C.A.entrypoint()),
        j = l.useMemo(() => {
            if ("channel" !== t.type) return n.bot?.id ?? (0, h.Sx)(t, n.id).descriptor?.botId;
        }, [t, n.id, n.bot]),
        T = (0, u.wK)({
            application: n,
            botUserIdForAppDM: j,
            embeddedActivitiesManager: c.A,
            context: t,
            locationObject: v.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                f && A.k(E.Se.ACTIVITY),
                    (0, d.zV)(I.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: s,
                        action: N,
                        source: _,
                    });
            },
            launchingComponentId: p,
            commandOrigin: m.iw.APPLICATION_LAUNCHER,
            sectionName: s,
            source: _,
            fetchesApplication: x,
            onConfirmActivityLaunchChecksAlertOpen: S,
        }),
        b = "primary",
        R = a ?? y.intl.string(y.t.zKX8Nu);
    return (
        N === u.o6.JOIN
            ? ((b = "active"), (R = y.intl.string(y.t.d9PsMj)))
            : N !== u.o6.LEAVE || g || ((b = "critical-primary"), (R = y.intl.string(y.t["Hi1/aQ"]))),
        { onActivityItemSelected: T, activityAction: N, buttonVariant: b, buttonText: R }
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
    x._.dispatchToLastSubscribed(I.jej.OPEN_APP_LAUNCHER, { applicationId: e });
}
