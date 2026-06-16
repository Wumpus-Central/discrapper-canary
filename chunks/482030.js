"use strict";
n.d(t, { Ch: () => R, hg: () => O, dn: () => v, SD: () => N });
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(807081),
    l = n(212245),
    u = n(849269),
    c = n(869003),
    d = n(95561),
    _ = n(264322),
    h = n(392054),
    f = n(480084),
    p = n(29814),
    E = n(551965),
    m = n(625494),
    g = n(211401),
    A = n(989837),
    I = n(500049),
    T = n(652215),
    S = n(375708);
let y = {
        ...p.A.RULES.commandMention,
        parse: (e, t, n) => ({ content: p.A.RULES.commandMention.parse(e, t, n).content }),
    },
    C = s().pick(
        (0, E.A)([p.A.RULES, { commandMention: y }, (0, f.A)({ enableBuildOverrides: !1, enableEmojiClick: !1 })]),
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
    N = o.aV(C);
function v(e) {
    let {
            context: t,
            application: n,
            location: r,
            sectionName: s,
            commandName: o,
            autoDismissOnClick: f = !0,
            launchingComponentId: p,
            submitting: E = !1,
            fetchesApplication: m = !0,
            onConfirmActivityLaunchChecksAlertOpen: y,
        } = e,
        C = (0, l.p)(),
        N = (function (e) {
            let [t, n] = i.useState(e);
            return (
                i.useLayoutEffect(() => {
                    if (e === u.o6.LEAVE) {
                        let t = setTimeout(() => n(e), 100);
                        return () => clearTimeout(t);
                    }
                    n(e);
                }, [e]),
                t
            );
        })((0, u.Hq)({ context: t, applicationId: n.id, fetchesApplication: m })),
        v = (0, a.bG)([A.A], () => A.A.entrypoint()),
        R = i.useMemo(() => {
            if ("channel" !== t.type) return n.bot?.id ?? (0, _.Sx)(t, n.id).descriptor?.botId;
        }, [t, n.id, n.bot]),
        O = (0, u.wK)({
            application: n,
            botUserIdForAppDM: R,
            embeddedActivitiesManager: c.A,
            context: t,
            locationObject: C.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                f && g.k(I.Se.ACTIVITY),
                    (0, d.zV)(T.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: r,
                        application_id: t,
                        section_name: s,
                        action: N,
                        source: v,
                    });
            },
            launchingComponentId: p,
            commandOrigin: h.iw.APPLICATION_LAUNCHER,
            sectionName: s,
            source: v,
            fetchesApplication: m,
            onConfirmActivityLaunchChecksAlertOpen: y,
        }),
        b = "primary",
        D = o ?? S.intl.string(S.t.zKX8Nu);
    return (
        N === u.o6.JOIN
            ? ((b = "active"), (D = S.intl.string(S.t.d9PsMj)))
            : N !== u.o6.LEAVE || E || ((b = "critical-primary"), (D = S.intl.string(S.t["Hi1/aQ"]))),
        { onActivityItemSelected: O, activityAction: N, buttonVariant: b, buttonText: D }
    );
}
function R(e, t) {
    let n = A.A.entrypoint(),
        s = i.useMemo(
            () =>
                (0, r.debounce)(
                    (e, t) => {
                        (0, d.zV)(T.HAw.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, { type: e, source: t });
                    },
                    400,
                    { leading: !1, trailing: !0 },
                ),
            [],
        );
    i.useEffect(() => {
        null != e && s(e, n);
    }, [e, t, n, s]);
}
function O(e) {
    m._.dispatchToLastSubscribed(T.jej.OPEN_APP_LAUNCHER, { applicationId: e });
}
