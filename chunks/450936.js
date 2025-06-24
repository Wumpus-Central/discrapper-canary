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
        x = r.useMemo(() => {
            if (!0 !== y.isDM()) return null;
            let e = f.default.getUser(y.getRecipientId());
            return void 0 === e || !0 !== e.bot ? null : e;
        }, [y]),
        C = (0, i.e7)([d.Z], () => {
            var e;
            return d.Z.isFetchingProfile(null != (e = null == x ? void 0 : x.id) ? e : m.lds);
        }),
        v = (0, o.Z)(C),
        j = (0, i.e7)([c.Z], () => c.Z.getAppIdForBotUserId(null == x ? void 0 : x.id)),
        O = (0, i.e7)([d.Z], () => {
            var e;
            return null !== x ? (null == (e = d.Z.getUserProfile(null == x ? void 0 : x.id)) ? void 0 : e.application) : void 0;
        }),
        E = null != j ? j : null == O ? void 0 : O.id;
    r.useEffect(() => {
        if (null == E) {
            var e;
            (0, p.Z)(null != (e = null == x ? void 0 : x.id) ? e : m.lds, void 0, { withMutualGuilds: !0 });
        }
    }, [x, E]),
        r.useEffect(() => {
            (null == x ? void 0 : x.id) != null &&
                l.Z.dispatch({
                    type: 'APP_DM_OPEN',
                    botUserId: x.id
                });
        }, [null == x ? void 0 : x.id]);
    let I = (0, s.v1)(
            {
                channel: y,
                type: 'channel'
            },
            { commandTypes: g },
            {
                applicationId: E,
                allowFetch: (null == x ? void 0 : x.id) != null,
                allowApplicationState: !0
            }
        ),
        S = I.commands.filter((e) => e.type === a.yU.PRIMARY_ENTRY_POINT && e.applicationId === E)[0],
        P = I.commands.filter((e) => '0' !== e.id && !e.id.startsWith('-')),
        Z = I.loading,
        N =
            null ==
            (t = I.descriptors.find((e) => {
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
        isAppDM: null != (b = null == x ? void 0 : x.bot) && b,
        primaryEntryPointCommand: S,
        isProfileFetching: C,
        wasProfileFetching: null != v ? v : null,
        applicationId: E,
        channelId: y.id,
        commands: P
    };
}
