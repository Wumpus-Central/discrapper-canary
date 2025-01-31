n.d(t, {
    Bm: () => T,
    P7: () => y,
    ae: () => j
});
var i = n(192379),
    l = n(392711),
    a = n.n(l),
    o = n(442837),
    s = n(25209),
    r = n(481060),
    c = n(2052),
    d = n(542094),
    u = n(513202),
    m = n(367907),
    p = n(213459),
    h = n(895924),
    v = n(691424),
    x = n(428595),
    f = n(364458),
    N = n(499254),
    C = n(541099),
    E = n(827498),
    A = n(346683),
    I = n(981631),
    g = n(388032);
let _ = {
        ...x.Z.RULES.commandMention,
        parse: (e, t, n) => ({ content: x.Z.RULES.commandMention.parse(e, t, n).content })
    },
    P = a().pick(
        (0, f.Z)([
            x.Z.RULES,
            { commandMention: _ },
            (0, v.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    j = s.w4(P);
function y(e) {
    let { context: t, application: n, location: l, sectionName: a, commandName: s, autoDismissOnClick: v = !0, launchingComponentId: x, submitting: f = !1, fetchesApplication: _ = !0 } = e,
        P = (0, c.O)(),
        j = (0, d.Qv)({
            context: t,
            applicationId: n.id,
            fetchesApplication: _
        }),
        y = (0, A.Q)(j),
        T = (0, o.e7)([C.Z], () => C.Z.entrypoint()),
        S = i.useMemo(() => {
            var e, i, l;
            if ('channel' !== t.type) return null !== (l = null === (e = n.bot) || void 0 === e ? void 0 : e.id) && void 0 !== l ? l : null === (i = (0, p.If)(t, n.id).descriptor) || void 0 === i ? void 0 : i.botId;
        }, [t, n.id, n.bot]),
        b = (0, d.w1)({
            applicationId: n.id,
            botUserIdForAppDM: S,
            embeddedActivitiesManager: u.Z,
            context: t,
            locationObject: P.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: t } = e;
                v && N.yT(E.ti.ACTIVITY),
                    (0, m.yw)(I.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: l,
                        application_id: t,
                        section_name: a,
                        action: y,
                        source: T
                    });
            },
            launchingComponentId: x,
            commandOrigin: h.bB.APPLICATION_LAUNCHER,
            sectionName: a,
            source: T,
            fetchesApplication: _
        }),
        L = r.Ttl.BRAND,
        R = null != s ? s : g.intl.string(g.t.zKX8Nj);
    return (
        y === d.JS.JOIN ? ((L = r.Ttl.GREEN), (R = g.intl.string(g.t.d9PsMj))) : y !== d.JS.LEAVE || f || ((L = r.Ttl.RED), (R = g.intl.string(g.t['Hi1/aW']))),
        {
            onActivityItemSelected: b,
            activityAction: y,
            buttonColor: L,
            buttonText: R
        }
    );
}
function T(e, t) {
    let n = C.Z.entrypoint(),
        a = i.useMemo(
            () =>
                (0, l.debounce)(
                    (e, t) => {
                        (0, m.yw)(I.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
                            type: e,
                            source: t
                        });
                    },
                    400,
                    {
                        leading: !1,
                        trailing: !0
                    }
                ),
            []
        );
    i.useEffect(() => {
        null != e && a(e, n);
    }, [e, t, n, a]);
}
