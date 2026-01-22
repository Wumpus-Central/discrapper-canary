n.d(t, {
    Ch: () => w,
    SD: () => N,
    dn: () => R,
    hg: () => P,
});
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(436857),
    l = n(212245),
    c = n(849269),
    u = n(869003),
    d = n(58149),
    f = n(264322),
    p = n(392054),
    _ = n(999443),
    h = n(542664),
    m = n(551965),
    g = n(203982),
    E = n(211401),
    b = n(989837),
    y = n(500049),
    O = n(615807),
    A = n(652215),
    v = n(985018);

function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
let T = (function (e, t) {
        return (
            (t = null != t ? t : {}),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                : I(Object(t)).forEach(function (n) {
                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                  }),
            e
        );
    })(
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        S(e, t, n[t]);
                    });
            }
            return e;
        })({}, h.A.RULES.commandMention),
        {
            parse: (e, t, n) => ({
                content: h.A.RULES.commandMention.parse(e, t, n).content,
            }),
        },
    ),
    C = a().pick(
        (0, m.A)([
            h.A.RULES,
            {
                commandMention: T,
            },
            (0, _.A)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1,
            }),
        ]),
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

function R(e) {
    let {
            context: t,
            application: n,
            location: i,
            sectionName: a,
            commandName: o,
            autoDismissOnClick: _ = !0,
            launchingComponentId: h,
            submitting: m = !1,
            fetchesApplication: g = !0,
            onConfirmActivityLaunchChecksAlertOpen: S,
        } = e,
        I = (0, l.p)(),
        T = (0, c.Hq)({
            context: t,
            applicationId: n.id,
            fetchesApplication: g,
        }),
        C = (0, O.G)(T),
        N = (0, s.bG)([b.A], () => b.A.entrypoint()),
        R = r.useMemo(() => {
            var e, r, i;
            if ("channel" !== t.type)
                return null != (e = null == (r = n.bot) ? void 0 : r.id)
                    ? e
                    : null == (i = (0, f.Sx)(t, n.id).descriptor)
                      ? void 0
                      : i.botId;
        }, [t, n.id, n.bot]),
        w = (0, c.wK)({
            application: n,
            botUserIdForAppDM: R,
            embeddedActivitiesManager: u.A,
            context: t,
            locationObject: I.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                _ && E.k(y.Se.ACTIVITY),
                    (0, d.zV)(A.HAw.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: t,
                        section_name: a,
                        action: C,
                        source: N,
                    });
            },
            launchingComponentId: h,
            commandOrigin: p.iw.APPLICATION_LAUNCHER,
            sectionName: a,
            source: N,
            fetchesApplication: g,
            onConfirmActivityLaunchChecksAlertOpen: S,
        }),
        P = "primary",
        D = null != o ? o : v.intl.string(v.t.zKX8Nu);
    return (
        C === c.o6.JOIN
            ? ((P = "active"), (D = v.intl.string(v.t.d9PsMj)))
            : C !== c.o6.LEAVE || m || ((P = "critical-primary"), (D = v.intl.string(v.t["Hi1/aQ"]))),
        {
            onActivityItemSelected: w,
            activityAction: C,
            buttonVariant: P,
            buttonText: D,
        }
    );
}

function w(e, t) {
    let n = b.A.entrypoint(),
        a = r.useMemo(
            () =>
                (0, i.debounce)(
                    (e, t) => {
                        (0, d.zV)(A.HAw.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
                            type: e,
                            source: t,
                        });
                    },
                    400,
                    {
                        leading: !1,
                        trailing: !0,
                    },
                ),
            [],
        );
    r.useEffect(() => {
        null != e && a(e, n);
    }, [e, t, n, a]);
}

function P(e) {
    g._.dispatchToLastSubscribed(A.jej.OPEN_APP_LAUNCHER, {
        applicationId: e,
    });
}
