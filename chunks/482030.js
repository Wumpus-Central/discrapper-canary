"use strict";
n.d(t, { Ch: () => L, hg: () => D, dn: () => O, SD: () => R });
var i = n(64700),
    r = n(435558),
    a = n.n(r),
    s = n(17928),
    l = n(807081),
    o = n(212245),
    d = n(849269),
    c = n(869003),
    u = n(95561),
    _ = n(264322),
    E = n(392054),
    A = n(480084),
    h = n(29814),
    I = n(551965),
    f = n(625494),
    p = n(211401),
    T = n(989837),
    m = n(500049),
    g = n(652215),
    S = n(375708);
let N = {
        ...h.Ay.RULES.commandMention,
        parse: (e, t, n) => ({ content: h.Ay.RULES.commandMention.parse(e, t, n).content }),
    },
    C = a().pick(
        (0, I.A)([h.Ay.RULES, { commandMention: N }, (0, A.A)({ enableBuildOverrides: !1, enableEmojiClick: !1 })]),
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
    R = l.aV(C);
function O(e) {
    let {
            context: t,
            application: n,
            location: r,
            sectionName: a,
            commandName: l,
            autoDismissOnClick: A = !0,
            launchingComponentId: h,
            submitting: I = !1,
            fetchesApplication: f = !0,
            onConfirmActivityLaunchChecksAlertOpen: N,
        } = e,
        C = (0, o.p)(),
        R = (function (e) {
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
        })((0, d.Hq)({ context: t, applicationId: n.id, fetchesApplication: f })),
        O = (0, s.bG)([T.A], () => T.A.entrypoint()),
        L = i.useMemo(() => {
            if ("channel" !== t.type) return n.bot?.id ?? (0, _.Sx)(t, n.id).descriptor?.botId;
        }, [t, n.id, n.bot]),
        D = (0, d.wK)({
            application: n,
            botUserIdForAppDM: L,
            embeddedActivitiesManager: c.A,
            context: t,
            locationObject: C.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                A && p.k(m.Se.ACTIVITY),
                    (0, u.zV)(g.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: r,
                        application_id: t,
                        section_name: a,
                        action: R,
                        source: O,
                    });
            },
            launchingComponentId: h,
            commandOrigin: E.iw.APPLICATION_LAUNCHER,
            sectionName: a,
            source: O,
            fetchesApplication: f,
            onConfirmActivityLaunchChecksAlertOpen: N,
        }),
        y = "primary",
        v = l ?? S.intl.string(S.t.zKX8Nu);
    return (
        R === d.o6.JOIN
            ? ((y = "active"), (v = S.intl.string(S.t.d9PsMj)))
            : R !== d.o6.LEAVE || I || ((y = "critical-primary"), (v = S.intl.string(S.t["Hi1/aQ"]))),
        { onActivityItemSelected: D, activityAction: R, buttonVariant: y, buttonText: v }
    );
}
function L(e, t) {
    let n = T.A.entrypoint(),
        a = i.useMemo(
            () =>
                (0, r.debounce)(
                    (e, t) => {
                        (0, u.zV)(g.HAw.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, { type: e, source: t });
                    },
                    400,
                    { leading: !1, trailing: !0 },
                ),
            [],
        );
    i.useEffect(() => {
        null != e && a(e, n);
    }, [e, t, n, a]);
}
function D(e) {
    f._.dispatchToLastSubscribed(g.jej.OPEN_APP_LAUNCHER, { applicationId: e });
}
