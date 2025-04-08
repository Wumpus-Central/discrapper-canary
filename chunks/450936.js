n.d(t, { Z: () => b });
var r = n(192379),
    i = n(442837),
    l = n(570140),
    o = n(911969),
    a = n(110924),
    s = n(213459),
    c = n(812206),
    u = n(835473),
    d = n(621853),
    p = n(484459),
    h = n(973616),
    f = n(594174),
    m = n(981631);
let g = [o.yU.PRIMARY_ENTRY_POINT, o.yU.CHAT, o.yU.MESSAGE, o.yU.USER];
function b(e) {
    var t, n;
    let { context: b } = e,
        _ = b.channel,
        C = r.useMemo(() => {
            if (!0 !== _.isDM()) return null;
            let e = f.default.getUser(_.getRecipientId());
            return void 0 === e || !0 !== e.bot ? null : e;
        }, [_]),
        y = (0, i.e7)([d.Z], () => {
            var e;
            return d.Z.isFetchingProfile(null != (e = null == C ? void 0 : C.id) ? e : m.lds);
        }),
        x = (0, a.Z)(y),
        v = (0, i.e7)([c.Z], () => c.Z.getAppIdForBotUserId(null == C ? void 0 : C.id)),
        j = (0, i.e7)([d.Z], () => {
            var e;
            return null !== C ? (null == (e = d.Z.getUserProfile(null == C ? void 0 : C.id)) ? void 0 : e.application) : void 0;
        }),
        O = null != v ? v : null == j ? void 0 : j.id;
    r.useEffect(() => {
        if (null == O) {
            var e;
            (0, p.Z)(null != (e = null == C ? void 0 : C.id) ? e : m.lds, void 0, { withMutualGuilds: !0 });
        }
    }, [C, O]),
        r.useEffect(() => {
            (null == C ? void 0 : C.id) != null &&
                l.Z.dispatch({
                    type: 'APP_DM_OPEN',
                    botUserId: C.id
                });
        }, [null == C ? void 0 : C.id]);
    let E = (0, s.v1)(
            {
                channel: _,
                type: 'channel'
            },
            { commandTypes: g },
            {
                applicationId: O,
                allowFetch: (null == C ? void 0 : C.id) != null,
                allowApplicationState: !0
            }
        ),
        N = E.commands.filter((e) => e.type === o.yU.PRIMARY_ENTRY_POINT && e.applicationId === O)[0],
        I = E.commands.filter((e) => '0' !== e.id && !e.id.startsWith('-')),
        P = E.loading,
        S =
            null ==
            (t = E.descriptors.find((e) => {
                var t;
                return (null == (t = e.application) ? void 0 : t.id) === O;
            }))
                ? void 0
                : t.application,
        Z = r.useMemo(() => (null != S ? h.ZP.createFromServer(S) : void 0), [S]),
        T = (0, u.q)(null == Z ? O : void 0),
        A = null != (n = null != Z ? Z : T) ? n : void 0,
        w = null == A || (P && 0 === I.length);
    return {
        application: A,
        isInitialLoading: w,
        primaryEntryPointCommand: N,
        isProfileFetching: y,
        wasProfileFetching: x,
        applicationId: O,
        channelId: _.id,
        commands: I
    };
}
