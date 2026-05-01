"use strict";
n.d(t, { Ch: () => T, SD: () => j, dn: () => _, hg: () => b });
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
    x = n(625494),
    C = n(211401),
    A = n(989837),
    E = n(500049),
    I = n(615807),
    y = n(652215),
    v = n(985018);
let S = {
        ...f.A.RULES.commandMention,
        parse: (e, t, n) => ({ content: f.A.RULES.commandMention.parse(e, t, n).content }),
    },
    N = s().pick(
        (0, g.A)([f.A.RULES, { commandMention: S }, (0, p.A)({ enableBuildOverrides: !1, enableEmojiClick: !1 })]),
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
    j = r.aV(N);
function _(e) {
    let {
            context: t,
            application: n,
            location: i,
            sectionName: s,
            commandName: r,
            autoDismissOnClick: p = !0,
            launchingComponentId: f,
            submitting: g = !1,
            fetchesApplication: x = !0,
            onConfirmActivityLaunchChecksAlertOpen: S,
        } = e,
        N = (0, o.p)(),
        j = (0, c.Hq)({ context: t, applicationId: n.id, fetchesApplication: x }),
        _ = (0, I.G)(j),
        T = (0, a.bG)([A.A], () => A.A.entrypoint()),
        b = l.useMemo(() => {
            if ("channel" !== t.type) return n.bot?.id ?? (0, h.Sx)(t, n.id).descriptor?.botId;
        }, [t, n.id, n.bot]),
        R = (0, c.wK)({
            application: n,
            botUserIdForAppDM: b,
            embeddedActivitiesManager: u.A,
            context: t,
            locationObject: N.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                p && C.k(E.Se.ACTIVITY),
                    (0, d.zV)(y.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: s,
                        action: _,
                        source: T,
                    });
            },
            launchingComponentId: f,
            commandOrigin: m.iw.APPLICATION_LAUNCHER,
            sectionName: s,
            source: T,
            fetchesApplication: x,
            onConfirmActivityLaunchChecksAlertOpen: S,
        }),
        O = "primary",
        L = r ?? v.intl.string(v.t.zKX8Nu);
    return (
        _ === c.o6.JOIN
            ? ((O = "active"), (L = v.intl.string(v.t.d9PsMj)))
            : _ !== c.o6.LEAVE || g || ((O = "critical-primary"), (L = v.intl.string(v.t["Hi1/aQ"]))),
        { onActivityItemSelected: R, activityAction: _, buttonVariant: O, buttonText: L }
    );
}
function T(e, t) {
    let n = A.A.entrypoint(),
        s = l.useMemo(
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
    l.useEffect(() => {
        null != e && s(e, n);
    }, [e, t, n, s]);
}
function b(e) {
    x._.dispatchToLastSubscribed(y.jej.OPEN_APP_LAUNCHER, { applicationId: e });
}
