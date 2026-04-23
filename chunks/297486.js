"use strict";
n.d(t, { Ch: () => v, SD: () => O, dn: () => y, hg: () => D });
var i = n(64700),
    r = n(735438),
    s = n.n(r),
    a = n(17928),
    o = n(436857),
    l = n(212245),
    d = n(849269),
    _ = n(869003),
    u = n(58149),
    c = n(264322),
    E = n(392054),
    h = n(365347),
    m = n(29814),
    f = n(551965),
    g = n(625494),
    p = n(211401),
    A = n(989837),
    I = n(500049),
    T = n(615807),
    S = n(652215),
    N = n(985018);
let C = {
        ...m.A.RULES.commandMention,
        parse: (e, t, n) => ({ content: m.A.RULES.commandMention.parse(e, t, n).content }),
    },
    R = s().pick(
        (0, f.A)([m.A.RULES, { commandMention: C }, (0, h.A)({ enableBuildOverrides: !1, enableEmojiClick: !1 })]),
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
    O = o.aV(R);
function y(e) {
    let {
            context: t,
            application: n,
            location: r,
            sectionName: s,
            commandName: o,
            autoDismissOnClick: h = !0,
            launchingComponentId: m,
            submitting: f = !1,
            fetchesApplication: g = !0,
            onConfirmActivityLaunchChecksAlertOpen: C,
        } = e,
        R = (0, l.p)(),
        O = (0, d.Hq)({ context: t, applicationId: n.id, fetchesApplication: g }),
        y = (0, T.G)(O),
        v = (0, a.bG)([A.A], () => A.A.entrypoint()),
        D = i.useMemo(() => {
            if ("channel" !== t.type) return n.bot?.id ?? (0, c.Sx)(t, n.id).descriptor?.botId;
        }, [t, n.id, n.bot]),
        L = (0, d.wK)({
            application: n,
            botUserIdForAppDM: D,
            embeddedActivitiesManager: _.A,
            context: t,
            locationObject: R.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                h && p.k(I.Se.ACTIVITY),
                    (0, u.zV)(S.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: r,
                        application_id: t,
                        section_name: s,
                        action: y,
                        source: v,
                    });
            },
            launchingComponentId: m,
            commandOrigin: E.iw.APPLICATION_LAUNCHER,
            sectionName: s,
            source: v,
            fetchesApplication: g,
            onConfirmActivityLaunchChecksAlertOpen: C,
        }),
        b = "primary",
        w = o ?? N.intl.string(N.t.zKX8Nu);
    return (
        y === d.o6.JOIN
            ? ((b = "active"), (w = N.intl.string(N.t.d9PsMj)))
            : y !== d.o6.LEAVE || f || ((b = "critical-primary"), (w = N.intl.string(N.t["Hi1/aQ"]))),
        { onActivityItemSelected: L, activityAction: y, buttonVariant: b, buttonText: w }
    );
}
function v(e, t) {
    let n = A.A.entrypoint(),
        s = i.useMemo(
            () =>
                (0, r.debounce)(
                    (e, t) => {
                        (0, u.zV)(S.HAw.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, { type: e, source: t });
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
function D(e) {
    g._.dispatchToLastSubscribed(S.jej.OPEN_APP_LAUNCHER, { applicationId: e });
}
