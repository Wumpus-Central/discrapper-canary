"use strict";
n.d(t, { Ch: () => R, SD: () => C, dn: () => O, hg: () => b });
var r = n(64700),
    i = n(735438),
    s = n.n(i),
    a = n(311907),
    o = n(436857),
    l = n(212245),
    u = n(849269),
    c = n(869003),
    d = n(58149),
    _ = n(264322),
    f = n(392054),
    p = n(999443),
    h = n(542664),
    E = n(551965),
    m = n(203982),
    g = n(211401),
    A = n(989837),
    I = n(500049),
    T = n(615807),
    S = n(652215),
    y = n(985018);
let N = {
        ...h.A.RULES.commandMention,
        parse: (e, t, n) => ({ content: h.A.RULES.commandMention.parse(e, t, n).content }),
    },
    v = s().pick(
        (0, E.A)([h.A.RULES, { commandMention: N }, (0, p.A)({ enableBuildOverrides: !1, enableEmojiClick: !1 })]),
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
    C = o.aV(v);
function O(e) {
    let {
            context: t,
            application: n,
            location: i,
            sectionName: s,
            commandName: o,
            autoDismissOnClick: p = !0,
            launchingComponentId: h,
            submitting: E = !1,
            fetchesApplication: m = !0,
            onConfirmActivityLaunchChecksAlertOpen: N,
        } = e,
        v = (0, l.p)(),
        C = (0, u.Hq)({ context: t, applicationId: n.id, fetchesApplication: m }),
        O = (0, T.G)(C),
        R = (0, a.bG)([A.A], () => A.A.entrypoint()),
        b = r.useMemo(() => {
            if ("channel" !== t.type) return n.bot?.id ?? (0, _.Sx)(t, n.id).descriptor?.botId;
        }, [t, n.id, n.bot]),
        D = (0, u.wK)({
            application: n,
            botUserIdForAppDM: b,
            embeddedActivitiesManager: c.A,
            context: t,
            locationObject: v.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                p && g.k(I.Se.ACTIVITY),
                    (0, d.zV)(S.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: s,
                        action: O,
                        source: R,
                    });
            },
            launchingComponentId: h,
            commandOrigin: f.iw.APPLICATION_LAUNCHER,
            sectionName: s,
            source: R,
            fetchesApplication: m,
            onConfirmActivityLaunchChecksAlertOpen: N,
        }),
        L = "primary",
        w = o ?? y.intl.string(y.t.zKX8Nu);
    return (
        O === u.o6.JOIN
            ? ((L = "active"), (w = y.intl.string(y.t.d9PsMj)))
            : O !== u.o6.LEAVE || E || ((L = "critical-primary"), (w = y.intl.string(y.t["Hi1/aQ"]))),
        { onActivityItemSelected: D, activityAction: O, buttonVariant: L, buttonText: w }
    );
}
function R(e, t) {
    let n = A.A.entrypoint(),
        s = r.useMemo(
            () =>
                (0, i.debounce)(
                    (e, t) => {
                        (0, d.zV)(S.HAw.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, { type: e, source: t });
                    },
                    400,
                    { leading: !1, trailing: !0 },
                ),
            [],
        );
    r.useEffect(() => {
        null != e && s(e, n);
    }, [e, t, n, s]);
}
function b(e) {
    m._.dispatchToLastSubscribed(S.jej.OPEN_APP_LAUNCHER, { applicationId: e });
}
