n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(570140),
    a = n(911969),
    s = n(110924),
    o = n(213459),
    c = n(404295),
    d = n(812206),
    u = n(835473),
    h = n(621853),
    p = n(484459),
    m = n(973616),
    f = n(594174),
    g = n(981631);
let C = [a.yU.PRIMARY_ENTRY_POINT, a.yU.CHAT, a.yU.MESSAGE, a.yU.USER];
function x(e) {
    var t, n;
    let { channel: x } = e,
        v = (0, c.bG)('useAppDMChatInputData'),
        _ = i.useMemo(() => {
            if (!0 !== x.isDM()) return null;
            let e = f.default.getUser(x.getRecipientId());
            return void 0 === e || !0 !== e.bot ? null : e;
        }, [x]),
        I = (0, l.e7)([h.Z], () => {
            var e;
            return h.Z.isFetchingProfile(null !== (e = null == _ ? void 0 : _.id) && void 0 !== e ? e : g.lds);
        }),
        E = (0, s.Z)(I),
        b = (0, l.e7)([d.Z], () => d.Z.getAppIdForBotUserId(null == _ ? void 0 : _.id)),
        Z = (0, l.e7)([h.Z], () => {
            var e;
            return null !== _ ? (null === (e = h.Z.getUserProfile(null == _ ? void 0 : _.id)) || void 0 === e ? void 0 : e.application) : void 0;
        }),
        N = null != b ? b : null == Z ? void 0 : Z.id;
    i.useEffect(() => {
        if (null == N && v) {
            var e;
            (0, p.Z)(null !== (e = null == _ ? void 0 : _.id) && void 0 !== e ? e : g.lds);
        }
    }, [_, N, v]),
        i.useEffect(() => {
            (null == _ ? void 0 : _.id) != null &&
                r.Z.dispatch({
                    type: 'APP_DM_OPEN',
                    botUserId: _.id
                });
        }, [null == _ ? void 0 : _.id]);
    let S = (0, o.v1)(
            x,
            { commandTypes: C },
            {
                applicationId: N,
                allowFetch: v && (null == _ ? void 0 : _.id) != null,
                allowApplicationState: !0
            }
        ),
        T = S.commands.filter((e) => e.type === a.yU.PRIMARY_ENTRY_POINT && e.applicationId === N)[0],
        j = S.commands.filter((e) => '0' !== e.id && !e.id.startsWith('-')),
        A = S.loading,
        y =
            null ===
                (t = S.descriptors.find((e) => {
                    var t;
                    return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === N;
                })) || void 0 === t
                ? void 0
                : t.application,
        P = i.useMemo(() => (null != y ? m.ZP.createFromServer(y) : void 0), [y]),
        M = (0, u.q)(null == P && v ? N : void 0),
        R = null !== (n = null != P ? P : M) && void 0 !== n ? n : void 0,
        L = null == R || (A && 0 === j.length);
    return {
        application: R,
        isInitialLoading: L,
        primaryEntryPointCommand: T,
        isProfileFetching: I,
        wasProfileFetching: E,
        applicationId: N,
        channelId: x.id,
        commands: j
    };
}
