"use strict";
n.d(t, { Ch: () => O, hg: () => R, dn: () => v, SD: () => C });
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
    f = n(392054),
    h = n(365347),
    p = n(29814),
    E = n(551965),
    m = n(625494),
    g = n(211401),
    A = n(989837),
    I = n(500049),
    T = n(652215),
    S = n(375708);
let N = {
        ...p.A.RULES.commandMention,
        parse: (e, t, n) => ({ content: p.A.RULES.commandMention.parse(e, t, n).content }),
    },
    y = s().pick(
        (0, E.A)([p.A.RULES, { commandMention: N }, (0, h.A)({ enableBuildOverrides: !1, enableEmojiClick: !1 })]),
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
    C = o.aV(y);
function v(e) {
    let {
            context: t,
            application: n,
            location: r,
            sectionName: s,
            commandName: o,
            autoDismissOnClick: h = !0,
            launchingComponentId: p,
            submitting: E = !1,
            fetchesApplication: m = !0,
            onConfirmActivityLaunchChecksAlertOpen: N,
        } = e,
        y = (0, l.p)(),
        C = (function (e) {
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
        O = i.useMemo(() => {
            if ("channel" !== t.type) return n.bot?.id ?? (0, _.Sx)(t, n.id).descriptor?.botId;
        }, [t, n.id, n.bot]),
        R = (0, u.wK)({
            application: n,
            botUserIdForAppDM: O,
            embeddedActivitiesManager: c.A,
            context: t,
            locationObject: y.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                h && g.k(I.Se.ACTIVITY),
                    (0, d.zV)(T.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: r,
                        application_id: t,
                        section_name: s,
                        action: C,
                        source: v,
                    });
            },
            launchingComponentId: p,
            commandOrigin: f.iw.APPLICATION_LAUNCHER,
            sectionName: s,
            source: v,
            fetchesApplication: m,
            onConfirmActivityLaunchChecksAlertOpen: N,
        }),
        b = "primary",
        D = o ?? S.intl.string(S.t.zKX8Nu);
    return (
        C === u.o6.JOIN
            ? ((b = "active"), (D = S.intl.string(S.t.d9PsMj)))
            : C !== u.o6.LEAVE || E || ((b = "critical-primary"), (D = S.intl.string(S.t["Hi1/aQ"]))),
        { onActivityItemSelected: R, activityAction: C, buttonVariant: b, buttonText: D }
    );
}
function O(e, t) {
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
function R(e) {
    m._.dispatchToLastSubscribed(T.jej.OPEN_APP_LAUNCHER, { applicationId: e });
}
