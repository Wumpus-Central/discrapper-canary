n.d(t, { Z: () => _ });
var i = n(192379),
    l = n(442837),
    a = n(570140),
    r = n(911969),
    s = n(110924),
    o = n(213459),
    c = n(812206),
    d = n(835473),
    u = n(621853),
    h = n(484459),
    p = n(973616),
    m = n(594174),
    f = n(981631);
let g = [r.yU.PRIMARY_ENTRY_POINT, r.yU.CHAT, r.yU.MESSAGE, r.yU.USER];
function _(e) {
    var t, n;
    let { context: _ } = e,
        C = _.channel,
        x = i.useMemo(() => {
            if (!0 !== C.isDM()) return null;
            let e = m.default.getUser(C.getRecipientId());
            return void 0 === e || !0 !== e.bot ? null : e;
        }, [C]),
        v = (0, l.e7)([u.Z], () => {
            var e;
            return u.Z.isFetchingProfile(null !== (e = null == x ? void 0 : x.id) && void 0 !== e ? e : f.lds);
        }),
        E = (0, s.Z)(v),
        I = (0, l.e7)([c.Z], () => c.Z.getAppIdForBotUserId(null == x ? void 0 : x.id)),
        b = (0, l.e7)([u.Z], () => {
            var e;
            return null !== x ? (null === (e = u.Z.getUserProfile(null == x ? void 0 : x.id)) || void 0 === e ? void 0 : e.application) : void 0;
        }),
        Z = null != I ? I : null == b ? void 0 : b.id;
    i.useEffect(() => {
        if (null == Z) {
            var e;
            (0, h.Z)(null !== (e = null == x ? void 0 : x.id) && void 0 !== e ? e : f.lds);
        }
    }, [x, Z]),
        i.useEffect(() => {
            (null == x ? void 0 : x.id) != null &&
                a.Z.dispatch({
                    type: 'APP_DM_OPEN',
                    botUserId: x.id
                });
        }, [null == x ? void 0 : x.id]);
    let N = (0, o.v1)(
            {
                channel: C,
                type: 'channel'
            },
            { commandTypes: g },
            {
                applicationId: Z,
                allowFetch: (null == x ? void 0 : x.id) != null,
                allowApplicationState: !0
            }
        ),
        T = N.commands.filter((e) => e.type === r.yU.PRIMARY_ENTRY_POINT && e.applicationId === Z)[0],
        S = N.commands.filter((e) => '0' !== e.id && !e.id.startsWith('-')),
        j = N.loading,
        y =
            null ===
                (t = N.descriptors.find((e) => {
                    var t;
                    return (null === (t = e.application) || void 0 === t ? void 0 : t.id) === Z;
                })) || void 0 === t
                ? void 0
                : t.application,
        A = i.useMemo(() => (null != y ? p.ZP.createFromServer(y) : void 0), [y]),
        P = (0, d.q)(null == A ? Z : void 0),
        R = null !== (n = null != A ? A : P) && void 0 !== n ? n : void 0,
        M = null == R || (j && 0 === S.length);
    return {
        application: R,
        isInitialLoading: M,
        primaryEntryPointCommand: T,
        isProfileFetching: v,
        wasProfileFetching: E,
        applicationId: Z,
        channelId: C.id,
        commands: S
    };
}
