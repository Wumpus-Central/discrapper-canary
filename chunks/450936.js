n.d(t, { Z: () => b });
var r = n(647438),
    i = n(442837),
    l = n(570140),
    a = n(911969),
    o = n(110924),
    s = n(213459),
    c = n(812206),
    u = n(835473),
    d = n(621853),
    p = n(484459),
    f = n(973616),
    h = n(594174),
    m = n(981631);
let g = [a.yU.PRIMARY_ENTRY_POINT, a.yU.CHAT, a.yU.MESSAGE, a.yU.USER];
function b(e) {
    var t, n, b;
    let { context: _ } = e,
        y = _.channel,
        C = r.useMemo(() => {
            if (!0 !== y.isDM()) return null;
            let e = h.default.getUser(y.getRecipientId());
            return void 0 === e || !0 !== e.bot ? null : e;
        }, [y]),
        v = (0, i.e7)([d.Z], () => {
            var e;
            return d.Z.isFetchingProfile(null != (e = null == C ? void 0 : C.id) ? e : m.lds);
        }),
        O = (0, o.Z)(v),
        x = (0, i.e7)([c.Z], () => c.Z.getAppIdForBotUserId(null == C ? void 0 : C.id)),
        E = (0, i.e7)([d.Z], () => {
            var e;
            return null !== C
                ? null == (e = d.Z.getUserProfile(null == C ? void 0 : C.id))
                    ? void 0
                    : e.application
                : void 0;
        }),
        j = null != x ? x : null == E ? void 0 : E.id;
    r.useEffect(() => {
        if (null == j) {
            var e;
            (0, p.Z)(null != (e = null == C ? void 0 : C.id) ? e : m.lds, void 0, { withMutualGuilds: !0 });
        }
    }, [C, j]),
        r.useEffect(() => {
            (null == C ? void 0 : C.id) != null &&
                l.Z.dispatch({
                    type: "APP_DM_OPEN",
                    botUserId: C.id,
                });
        }, [null == C ? void 0 : C.id]);
    let S = (0, s.v1)(
            {
                channel: y,
                type: "channel",
            },
            { commandTypes: g },
            {
                applicationId: j,
                allowFetch: (null == C ? void 0 : C.id) != null,
                allowApplicationState: !0,
            },
        ),
        P = S.commands.filter((e) => e.type === a.yU.PRIMARY_ENTRY_POINT && e.applicationId === j)[0],
        I = S.commands.filter((e) => "0" !== e.id && !e.id.startsWith("-")),
        Z = S.loading,
        T =
            null ==
            (t = S.descriptors.find((e) => {
                var t;
                return (null == (t = e.application) ? void 0 : t.id) === j;
            }))
                ? void 0
                : t.application,
        N = r.useMemo(() => (null != T ? f.ZP.createFromServer(T) : void 0), [T]),
        A = (0, u.q)(null == N ? j : void 0),
        w = null != (n = null != N ? N : A) ? n : void 0,
        M = null == w || (Z && 0 === I.length);
    return {
        application: w,
        isInitialLoading: M,
        isAppDM: null != (b = null == C ? void 0 : C.bot) && b,
        primaryEntryPointCommand: P,
        isProfileFetching: v,
        wasProfileFetching: null != O ? O : null,
        applicationId: j,
        channelId: y.id,
        commands: I,
    };
}
