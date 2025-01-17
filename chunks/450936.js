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
    let { channel: C } = e,
        x = i.useMemo(() => {
            if (!0 !== C.isDM()) return null;
            let e = m.default.getUser(C.getRecipientId());
            return void 0 === e || !0 !== e.bot ? null : e;
        }, [C]),
        v = (0, l.e7)([u.Z], () => {
            var e;
            return u.Z.isFetchingProfile(null !== (e = null == x ? void 0 : x.id) && void 0 !== e ? e : f.lds);
        }),
        _ = (0, s.Z)(v),
        I = (0, l.e7)([c.Z], () => c.Z.getAppIdForBotUserId(null == x ? void 0 : x.id)),
        E = (0, l.e7)([u.Z], () => {
            var e;
            return null !== x ? (null === (e = u.Z.getUserProfile(null == x ? void 0 : x.id)) || void 0 === e ? void 0 : e.application) : void 0;
        }),
        b = null != I ? I : null == E ? void 0 : E.id;
    i.useEffect(() => {
        if (null == b) {
            var e;
            (0, h.Z)(null !== (e = null == x ? void 0 : x.id) && void 0 !== e ? e : f.lds);
        }
    }, [x, b]),
        i.useEffect(() => {
            (null == x ? void 0 : x.id) != null &&
                r.Z.dispatch({
                    type: 'APP_DM_OPEN',
                    botUserId: x.id
                });
        }, [null == x ? void 0 : x.id]);
    let Z = (0, o.v1)(
            C,
            { commandTypes: g },
            {
                applicationId: b,
                allowFetch: (null == x ? void 0 : x.id) != null,
                allowApplicationState: !0
            }
        ),
        S = Z.commands.filter((e) => e.type === a.yU.PRIMARY_ENTRY_POINT && e.applicationId === b)[0],
        N = Z.commands.filter((e) => '0' !== e.id && !e.id.startsWith('-')),
        T = Z.loading,
        j =
            null ===
                (t = Z.descriptors.find((e) => {
                    var t;
                    return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === b;
                })) || void 0 === t
                ? void 0
                : t.application,
        A = i.useMemo(() => (null != j ? p.ZP.createFromServer(j) : void 0), [j]),
        y = (0, d.q)(null == A ? b : void 0),
        P = null !== (n = null != A ? A : y) && void 0 !== n ? n : void 0,
        M = null == P || (T && 0 === N.length);
    return {
        application: P,
        isInitialLoading: M,
        primaryEntryPointCommand: S,
        isProfileFetching: v,
        wasProfileFetching: _,
        applicationId: b,
        channelId: C.id,
        commands: N
    };
}
