n.d(t, { Z: () => g });
var r = n(73800),
    i = n(442837),
    a = n(570140),
    o = n(911969),
    s = n(110924),
    l = n(213459),
    c = n(812206),
    u = n(835473),
    d = n(621853),
    f = n(484459),
    _ = n(973616),
    p = n(594174),
    h = n(981631);
let m = [o.yU.PRIMARY_ENTRY_POINT, o.yU.CHAT, o.yU.MESSAGE, o.yU.USER];
function g(e) {
    var t, n, g;
    let { context: E } = e,
        b = E.channel,
        y = r.useMemo(() => {
            if (!0 !== b.isDM()) return null;
            let e = p.default.getUser(b.getRecipientId());
            return void 0 === e || !0 !== e.bot ? null : e;
        }, [b]),
        O = (0, i.e7)([d.Z], () => {
            var e;
            return d.Z.isFetchingProfile(null != (e = null == y ? void 0 : y.id) ? e : h.lds);
        }),
        v = (0, s.Z)(O),
        I = (0, i.e7)([c.Z], () => c.Z.getAppIdForBotUserId(null == y ? void 0 : y.id)),
        T = (0, i.e7)([d.Z], () => {
            var e;
            return null !== y ? (null == (e = d.Z.getUserProfile(null == y ? void 0 : y.id)) ? void 0 : e.application) : void 0;
        }),
        S = null != I ? I : null == T ? void 0 : T.id;
    (r.useEffect(() => {
        if (null == S) {
            var e;
            (0, f.Z)(null != (e = null == y ? void 0 : y.id) ? e : h.lds, void 0, { withMutualGuilds: !0 });
        }
    }, [y, S]),
        r.useEffect(() => {
            (null == y ? void 0 : y.id) != null &&
                a.Z.dispatch({
                    type: 'APP_DM_OPEN',
                    botUserId: y.id
                });
        }, [null == y ? void 0 : y.id]));
    let A = (0, l.v1)(
            {
                channel: b,
                type: 'channel'
            },
            { commandTypes: m },
            {
                applicationId: S,
                allowFetch: (null == y ? void 0 : y.id) != null,
                allowApplicationState: !0
            }
        ),
        N = A.commands.filter((e) => e.type === o.yU.PRIMARY_ENTRY_POINT && e.applicationId === S)[0],
        C = A.commands.filter((e) => '0' !== e.id && !e.id.startsWith('-')),
        w = A.loading,
        R =
            null ==
            (t = A.descriptors.find((e) => {
                var t;
                return (null == (t = e.application) ? void 0 : t.id) === S;
            }))
                ? void 0
                : t.application,
        P = r.useMemo(() => (null != R ? _.ZP.createFromServer(R) : void 0), [R]),
        D = (0, u.q)(null == P ? S : void 0),
        L = null != (n = null != P ? P : D) ? n : void 0,
        x = null == L || (w && 0 === C.length);
    return {
        application: L,
        isInitialLoading: x,
        isAppDM: null != (g = null == y ? void 0 : y.bot) && g,
        primaryEntryPointCommand: N,
        isProfileFetching: O,
        wasProfileFetching: null != v ? v : null,
        applicationId: S,
        channelId: b.id,
        commands: C
    };
}
