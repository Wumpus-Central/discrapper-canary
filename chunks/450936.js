n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(570140),
    a = n(911969),
    s = n(110924),
    o = n(213459),
    c = n(812206),
    d = n(835473),
    u = n(621853),
    h = n(484459),
    p = n(973616),
    m = n(594174),
    f = n(981631);
let g = [a.yU.PRIMARY_ENTRY_POINT, a.yU.CHAT, a.yU.MESSAGE, a.yU.USER];
function C(e) {
    var t, n;
    let { context: C } = e,
        x = C.channel,
        v = i.useMemo(() => {
            if (!0 !== x.isDM()) return null;
            let e = m.default.getUser(x.getRecipientId());
            return void 0 === e || !0 !== e.bot ? null : e;
        }, [x]),
        _ = (0, l.e7)([u.Z], () => {
            var e;
            return u.Z.isFetchingProfile(null !== (e = null == v ? void 0 : v.id) && void 0 !== e ? e : f.lds);
        }),
        I = (0, s.Z)(_),
        E = (0, l.e7)([c.Z], () => c.Z.getAppIdForBotUserId(null == v ? void 0 : v.id)),
        b = (0, l.e7)([u.Z], () => {
            var e;
            return null !== v ? (null === (e = u.Z.getUserProfile(null == v ? void 0 : v.id)) || void 0 === e ? void 0 : e.application) : void 0;
        }),
        Z = null != E ? E : null == b ? void 0 : b.id;
    i.useEffect(() => {
        if (null == Z) {
            var e;
            (0, h.Z)(null !== (e = null == v ? void 0 : v.id) && void 0 !== e ? e : f.lds);
        }
    }, [v, Z]),
        i.useEffect(() => {
            (null == v ? void 0 : v.id) != null &&
                r.Z.dispatch({
                    type: 'APP_DM_OPEN',
                    botUserId: v.id
                });
        }, [null == v ? void 0 : v.id]);
    let N = (0, o.v1)(
            {
                channel: x,
                type: 'channel'
            },
            { commandTypes: g },
            {
                applicationId: Z,
                allowFetch: (null == v ? void 0 : v.id) != null,
                allowApplicationState: !0
            }
        ),
        S = N.commands.filter((e) => e.type === a.yU.PRIMARY_ENTRY_POINT && e.applicationId === Z)[0],
        T = N.commands.filter((e) => '0' !== e.id && !e.id.startsWith('-')),
        j = N.loading,
        A =
            null ===
                (t = N.descriptors.find((e) => {
                    var t;
                    return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === Z;
                })) || void 0 === t
                ? void 0
                : t.application,
        y = i.useMemo(() => (null != A ? p.ZP.createFromServer(A) : void 0), [A]),
        P = (0, d.q)(null == y ? Z : void 0),
        M = null !== (n = null != y ? y : P) && void 0 !== n ? n : void 0,
        R = null == M || (j && 0 === T.length);
    return {
        application: M,
        isInitialLoading: R,
        primaryEntryPointCommand: S,
        isProfileFetching: _,
        wasProfileFetching: I,
        applicationId: Z,
        channelId: x.id,
        commands: T
    };
}
