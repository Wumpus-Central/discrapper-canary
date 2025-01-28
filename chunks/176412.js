t.d(n, {
    Bm: function () {
        return S;
    },
    P7: function () {
        return y;
    },
    ae: function () {
        return P;
    }
});
var i = t(192379),
    l = t(392711),
    a = t.n(l),
    o = t(442837),
    r = t(25209),
    s = t(481060),
    c = t(2052),
    d = t(542094),
    u = t(513202),
    m = t(367907),
    p = t(213459),
    h = t(895924),
    f = t(691424),
    C = t(428595),
    v = t(364458),
    x = t(499254),
    _ = t(541099),
    N = t(827498),
    A = t(346683),
    I = t(981631),
    E = t(388032);
let g = {
        ...C.Z.RULES.commandMention,
        parse: (e, n, t) => ({ content: C.Z.RULES.commandMention.parse(e, n, t).content })
    },
    b = a().pick(
        (0, v.Z)([
            C.Z.RULES,
            { commandMention: g },
            (0, f.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    P = r.w4(b);
function y(e) {
    let { context: n, application: t, location: l, sectionName: a, commandName: r, autoDismissOnClick: f = !0, launchingComponentId: C, submitting: v = !1, fetchesApplication: g = !0 } = e,
        b = (0, c.O)(),
        P = (0, d.Qv)({
            context: n,
            applicationId: t.id,
            fetchesApplication: g
        }),
        y = (0, A.Q)(P),
        S = (0, o.e7)([_.Z], () => _.Z.entrypoint()),
        j = i.useMemo(() => {
            var e, i, l;
            if ('channel' !== n.type) return null !== (l = null === (e = t.bot) || void 0 === e ? void 0 : e.id) && void 0 !== l ? l : null === (i = (0, p.If)(n, t.id).descriptor) || void 0 === i ? void 0 : i.botId;
        }, [n, t.id, t.bot]),
        T = (0, d.w1)({
            applicationId: t.id,
            botUserIdForAppDM: j,
            embeddedActivitiesManager: u.Z,
            context: n,
            locationObject: b.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: n } = e;
                f && x.yT(N.ti.ACTIVITY),
                    (0, m.yw)(I.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: l,
                        application_id: n,
                        section_name: a,
                        action: y,
                        source: S
                    });
            },
            launchingComponentId: C,
            commandOrigin: h.bB.APPLICATION_LAUNCHER,
            sectionName: a,
            source: S,
            fetchesApplication: g
        }),
        L = s.ButtonColors.BRAND,
        R = null != r ? r : E.intl.string(E.t.zKX8Nj);
    return (
        y === d.JS.JOIN ? ((L = s.ButtonColors.GREEN), (R = E.intl.string(E.t.d9PsMj))) : y === d.JS.LEAVE && !v && ((L = s.ButtonColors.RED), (R = E.intl.string(E.t['Hi1/aW']))),
        {
            onActivityItemSelected: T,
            activityAction: y,
            buttonColor: L,
            buttonText: R
        }
    );
}
function S(e, n) {
    let t = _.Z.entrypoint(),
        a = i.useMemo(
            () =>
                (0, l.debounce)(
                    (e, n) => {
                        (0, m.yw)(I.rMx.APP_LAUNCHER_EMPTY_STATE_ENCOUNTERED, {
                            type: e,
                            source: n
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
        null != e && a(e, t);
    }, [e, n, t, a]);
}
