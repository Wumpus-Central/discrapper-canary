t.d(n, {
    Bm: function () {
        return S;
    },
    P7: function () {
        return P;
    },
    ae: function () {
        return b;
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
    p = t(895924),
    h = t(691424),
    f = t(428595),
    C = t(364458),
    v = t(499254),
    _ = t(541099),
    x = t(827498),
    N = t(346683),
    I = t(981631),
    A = t(388032);
let E = {
        ...f.Z.RULES.commandMention,
        parse: (e, n, t) => ({ content: f.Z.RULES.commandMention.parse(e, n, t).content })
    },
    g = a().pick(
        (0, C.Z)([
            f.Z.RULES,
            { commandMention: E },
            (0, h.Z)({
                enableBuildOverrides: !1,
                enableEmojiClick: !1
            })
        ]),
        ['commandMention', 'customEmoji', 'em', 'emoji', 'emoticon', 'highlight', 'inlineCode', 'looseEm', 's', 'strong', 'text', 'timestamp', 'u', 'spoiler']
    ),
    b = r.w4(g);
function P(e) {
    let { channel: n, application: t, location: i, sectionName: l, commandName: a, autoDismissOnClick: r = !0, launchingComponentId: h, submitting: f = !1, fetchesApplication: C = !0 } = e,
        E = (0, c.O)(),
        g = (0, d.Qv)({
            channelId: n.id,
            applicationId: t.id,
            fetchesApplication: C
        }),
        b = (0, N.Q)(g),
        P = (0, o.e7)([_.Z], () => _.Z.entrypoint()),
        S = (0, d.w1)({
            applicationId: t.id,
            embeddedActivitiesManager: u.Z,
            channelId: n.id,
            locationObject: E.location,
            onActivityItemSelectedProp: (e) => {
                let { applicationId: n } = e;
                r && v.yT(x.ti.ACTIVITY),
                    (0, m.yw)(I.rMx.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED, {
                        location: i,
                        application_id: n,
                        section_name: l,
                        action: b,
                        source: P
                    });
            },
            launchingComponentId: h,
            commandOrigin: p.bB.APPLICATION_LAUNCHER,
            sectionName: l,
            source: P,
            fetchesApplication: C
        }),
        j = s.ButtonColors.BRAND,
        y = null != a ? a : A.intl.string(A.t.zKX8Nj);
    return (
        b === d.JS.JOIN ? ((j = s.ButtonColors.GREEN), (y = A.intl.string(A.t.d9PsMj))) : b === d.JS.LEAVE && !f && ((j = s.ButtonColors.RED), (y = A.intl.string(A.t['Hi1/aW']))),
        {
            onActivityItemSelected: S,
            activityAction: b,
            buttonColor: j,
            buttonText: y
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
