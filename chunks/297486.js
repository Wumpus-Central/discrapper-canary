"use strict";
n.d(t, { Ch: () => R, SD: () => b, dn: () => N, hg: () => O });
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(436857),
    l = n(212245),
    u = n(849269),
    c = n(869003),
    d = n(58149),
    _ = n(264322),
    f = n(392054),
    p = n(999443),
    h = n(542664),
    m = n(551965),
    g = n(203982),
    E = n(211401),
    A = n(989837),
    I = n(500049),
    T = n(615807),
    y = n(652215),
    S = n(985018);
let v = {
        ...h.A.RULES.commandMention,
        parse: (e, t, n) => ({ content: h.A.RULES.commandMention.parse(e, t, n).content }),
    },
    C = a().pick(
        (0, m.A)([h.A.RULES, { commandMention: v }, (0, p.A)({ enableBuildOverrides: !1, enableEmojiClick: !1 })]),
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
    b = o.aV(C);
function N(e) {
    let {
            context: t,
            application: n,
            location: i,
            sectionName: a,
            commandName: o,
            autoDismissOnClick: p = !0,
            launchingComponentId: h,
            submitting: m = !1,
            fetchesApplication: g = !0,
            onConfirmActivityLaunchChecksAlertOpen: v,
        } = e,
        C = (0, l.p)(),
        b = (0, u.Hq)({ context: t, applicationId: n.id, fetchesApplication: g }),
        N = (0, T.G)(b),
        R = (0, s.bG)([A.A], () => A.A.entrypoint()),
        O = r.useMemo(() => {
            if ("channel" !== t.type) return n.bot?.id ?? (0, _.Sx)(t, n.id).descriptor?.botId;
        }, [t, n.id, n.bot]),
        D = (0, u.wK)({
            application: n,
            botUserIdForAppDM: O,
            embeddedActivitiesManager: c.A,
            context: t,
            locationObject: C.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                p && E.k(I.Se.ACTIVITY),
                    (0, d.zV)(y.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: a,
                        action: N,
                        source: R,
                    });
            },
            launchingComponentId: h,
            commandOrigin: f.iw.APPLICATION_LAUNCHER,
            sectionName: a,
            source: R,
            fetchesApplication: g,
            onConfirmActivityLaunchChecksAlertOpen: v,
        }),
        L = "primary",
        w = o ?? S.intl.string(S.t.zKX8Nu);
    return (
        N === u.o6.JOIN
            ? ((L = "active"), (w = S.intl.string(S.t.d9PsMj)))
            : N !== u.o6.LEAVE || m || ((L = "critical-primary"), (w = S.intl.string(S.t["Hi1/aQ"]))),
        { onActivityItemSelected: D, activityAction: N, buttonVariant: L, buttonText: w }
    );
}
function R(e, t) {
    let n = A.A.entrypoint(),
        a = r.useMemo(
            () =>
                (0, i.debounce)(
                    (e, t) => {
                        (0, d.zV)(y.HAw.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, { type: e, source: t });
                    },
                    400,
                    { leading: !1, trailing: !0 },
                ),
            [],
        );
    r.useEffect(() => {
        null != e && a(e, n);
    }, [e, t, n, a]);
}
function O(e) {
    g._.dispatchToLastSubscribed(y.jej.OPEN_APP_LAUNCHER, { applicationId: e });
}
