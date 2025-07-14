n.d(t, { Z: () => b });
var r = n(73800),
    i = n(442837),
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
    let { context: _ } = e,
        y = _.channel,
        C = r.useMemo(() => {
            if (!0 !== y.isDM()) return null;
            let e = f.default.getUser(y.getRecipientId());
            return void 0 === e || !0 !== e.bot ? null : e;
        }, [y]),
        x = (0, i.e7)([d.Z], () => {
            var e;
            return d.Z.isFetchingProfile(null != (e = null == C ? void 0 : C.id) ? e : m.lds);
        }),
        v = (0, o.Z)(x),
        j = (0, i.e7)([c.Z], () => c.Z.getAppIdForBotUserId(null == C ? void 0 : C.id)),
        O = (0, i.e7)([d.Z], () => {
            var e;
            return null !== C ? (null == (e = d.Z.getUserProfile(null == C ? void 0 : C.id)) ? void 0 : e.application) : void 0;
        }),
        E = null != j ? j : null == O ? void 0 : O.id;
    (r.useEffect(() => {
        if (null == E) {
            var e;
            (0, p.Z)(null != (e = null == C ? void 0 : C.id) ? e : m.lds, void 0, { withMutualGuilds: !0 });
        }
    }, [C, E]),
        r.useEffect(() => {
            (null == C ? void 0 : C.id) != null &&
                l.Z.dispatch({
                    type: 'APP_DM_OPEN',
                    botUserId: C.id
                });
        }, [null == C ? void 0 : C.id]));
    let S = (0, s.v1)(
            {
                channel: y,
                type: 'channel'
            },
            { commandTypes: g },
            {
                applicationId: E,
                allowFetch: (null == C ? void 0 : C.id) != null,
                allowApplicationState: !0
            }
        ),
        I = S.commands.filter((e) => e.type === a.yU.PRIMARY_ENTRY_POINT && e.applicationId === E)[0],
        P = S.commands.filter((e) => '0' !== e.id && !e.id.startsWith('-')),
        Z = S.loading,
        N =
            null ==
            (t = S.descriptors.find((e) => {
                var t;
                return (null == (t = e.application) ? void 0 : t.id) === E;
            }))
                ? void 0
                : t.application,
        T = r.useMemo(() => (null != N ? h.ZP.createFromServer(N) : void 0), [N]),
        A = (0, u.q)(null == T ? E : void 0),
        w = null != (n = null != T ? T : A) ? n : void 0,
        R = null == w || (Z && 0 === P.length);
    return {
        application: w,
        isInitialLoading: R,
        isAppDM: null != (b = null == C ? void 0 : C.bot) && b,
        primaryEntryPointCommand: I,
        isProfileFetching: x,
        wasProfileFetching: null != v ? v : null,
        applicationId: E,
        channelId: y.id,
        commands: P
    };
}
