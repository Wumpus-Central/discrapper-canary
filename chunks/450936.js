n.d(t, { Z: () => b });
var i = n(647438),
    r = n(442837),
    l = n(570140),
    a = n(911969),
    o = n(110924),
    s = n(213459),
    c = n(812206),
    u = n(835473),
    d = n(621853),
    p = n(484459),
    h = n(973616),
    f = n(594174),
    m = n(981631);
let g = [a.yU.PRIMARY_ENTRY_POINT, a.yU.CHAT, a.yU.MESSAGE, a.yU.USER];
function b(e) {
    var t, n, b;
    let { context: C } = e,
        y = C.channel,
        _ = i.useMemo(() => {
            if (!0 !== y.isDM()) return null;
            let e = f.default.getUser(y.getRecipientId());
            return void 0 === e || !0 !== e.bot ? null : e;
        }, [y]),
        v = (0, r.e7)([d.Z], () => {
            var e;
            return d.Z.isFetchingProfile(null != (e = null == _ ? void 0 : _.id) ? e : m.lds);
        }),
        x = (0, o.Z)(v),
        O = (0, r.e7)([c.Z], () => c.Z.getAppIdForBotUserId(null == _ ? void 0 : _.id)),
        j = (0, r.e7)([d.Z], () => {
            var e;
            return null !== _
                ? null == (e = d.Z.getUserProfile(null == _ ? void 0 : _.id))
                    ? void 0
                    : e.application
                : void 0;
        }),
        E = null != O ? O : null == j ? void 0 : j.id;
    i.useEffect(() => {
        if (null == E) {
            var e;
            (0, p.Z)(null != (e = null == _ ? void 0 : _.id) ? e : m.lds, void 0, { withMutualGuilds: !0 });
        }
    }, [_, E]),
        i.useEffect(() => {
            (null == _ ? void 0 : _.id) != null &&
                l.Z.dispatch({
                    type: "APP_DM_OPEN",
                    botUserId: _.id,
                });
        }, [null == _ ? void 0 : _.id]);
    let S = (0, s.v1)(
            {
                channel: y,
                type: "channel",
            },
            { commandTypes: g },
            {
                applicationId: E,
                allowFetch: (null == _ ? void 0 : _.id) != null,
                allowApplicationState: !0,
            },
        ),
        P = S.commands.filter((e) => e.type === a.yU.PRIMARY_ENTRY_POINT && e.applicationId === E)[0],
        I = S.commands.filter((e) => "0" !== e.id && !e.id.startsWith("-")),
        Z = S.loading,
        T =
            null ==
            (t = S.descriptors.find((e) => {
                var t;
                return (null == (t = e.application) ? void 0 : t.id) === E;
            }))
                ? void 0
                : t.application,
        N = i.useMemo(() => (null != T ? h.ZP.createFromServer(T) : void 0), [T]),
        A = (0, u.q)(null == N ? E : void 0),
        w = null != (n = null != N ? N : A) ? n : void 0,
        M = null == w || (Z && 0 === I.length);
    return {
        application: w,
        isInitialLoading: M,
        isAppDM: null != (b = null == _ ? void 0 : _.bot) && b,
        primaryEntryPointCommand: P,
        isProfileFetching: v,
        wasProfileFetching: null != x ? x : null,
        applicationId: E,
        channelId: y.id,
        commands: I,
    };
}
