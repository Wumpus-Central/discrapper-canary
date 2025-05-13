n.d(t, { Z: () => b });
var r = n(73800),
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
        x = r.useMemo(() => {
            if (!0 !== _.isDM()) return null;
            let e = f.default.getUser(_.getRecipientId());
            return void 0 === e || !0 !== e.bot ? null : e;
        }, [_]),
        y = (0, i.e7)([d.Z], () => {
            var e;
            return d.Z.isFetchingProfile(null != (e = null == x ? void 0 : x.id) ? e : m.lds);
        }),
        C = (0, a.Z)(y),
        v = (0, i.e7)([c.Z], () => c.Z.getAppIdForBotUserId(null == x ? void 0 : x.id)),
        j = (0, i.e7)([d.Z], () => {
            var e;
            return null !== x ? (null == (e = d.Z.getUserProfile(null == x ? void 0 : x.id)) ? void 0 : e.application) : void 0;
        }),
        O = null != v ? v : null == j ? void 0 : j.id;
    r.useEffect(() => {
        if (null == O) {
            var e;
            (0, p.Z)(null != (e = null == x ? void 0 : x.id) ? e : m.lds, void 0, { withMutualGuilds: !0 });
        }
    }, [x, O]),
        r.useEffect(() => {
            (null == x ? void 0 : x.id) != null &&
                l.Z.dispatch({
                    type: 'APP_DM_OPEN',
                    botUserId: x.id
                });
        }, [null == x ? void 0 : x.id]);
    let E = (0, s.v1)(
            {
                channel: _,
                type: 'channel'
            },
            { commandTypes: g },
            {
                applicationId: O,
                allowFetch: (null == x ? void 0 : x.id) != null,
                allowApplicationState: !0
            }
        ),
        I = E.commands.filter((e) => e.type === o.yU.PRIMARY_ENTRY_POINT && e.applicationId === O)[0],
        S = E.commands.filter((e) => '0' !== e.id && !e.id.startsWith('-')),
        P = E.loading,
        Z =
            null ==
            (t = E.descriptors.find((e) => {
                var t;
                return (null == (t = e.application) ? void 0 : t.id) === O;
            }))
                ? void 0
                : t.application,
        N = r.useMemo(() => (null != Z ? h.ZP.createFromServer(Z) : void 0), [Z]),
        T = (0, u.q)(null == N ? O : void 0),
        A = null != (n = null != N ? N : T) ? n : void 0,
        w = null == A || (P && 0 === S.length);
    return {
        application: A,
        isInitialLoading: w,
        primaryEntryPointCommand: I,
        isProfileFetching: y,
        wasProfileFetching: null != C ? C : null,
        applicationId: O,
        channelId: _.id,
        commands: S
    };
}
