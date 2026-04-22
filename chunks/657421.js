n.d(t, { A: () => u });
var i = n(64700),
    l = n(803306),
    s = n(141468),
    r = n(963852),
    a = n(427157),
    o = n(652215),
    d = n(985018),
    c = n(144273);
function u(e) {
    return i.useMemo(() => {
        let t = (0, s.rh)({
                ...(0, r.Ay)({ channelId: "1337", content: e, flags: o.pr7.IS_GUILD_OFFICIAL }),
                state: o.cmJ.SENT,
                id: "31337",
            }),
            n = new a.A({ id: "313337", username: d.intl.string(d.t.cqpybK), discriminator: "0000", bot: !1 });
        t.author = n;
        let i = l.nj(n);
        return null != i && ((t.author = i), (t.author.getAvatarURL = () => c.A)), t;
    }, [e]);
}
