var i = n(582128),
    r = n(196765),
    a = n(121894),
    s = n(855986),
    l = n(576705),
    o = n(309010),
    d = n(233993),
    c = n(505543);
let u = (0, r.v)((e) => ({ isOnStartStageScreen: !0 }));
function _(e) {
    (0, a.r)(() => u.setState({ isOnStartStageScreen: e }));
}
n.d(
    t,
    {},
    {
        Ay: u,
        ek: _,
        vI: function (e) {
            let t = (0, s.bG)([o.Ay], () => o.Ay.getVoiceChannelId() === e.id),
                n = (0, s.bG)([l.A], () => l.A.can(d.QY, e), [e]),
                r = (0, c.A)(e.id),
                a = n && !r;
            i.useEffect(() => {
                t ? a || _(!1) : _(a);
            }, [t, a]);
        },
    },
);
