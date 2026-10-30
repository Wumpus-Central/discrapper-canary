n.d(t, { A: () => E });
var r = n(477900),
    u = n(582128),
    l = n(17928),
    s = n(287809),
    i = n(738822),
    a = n(801365),
    o = n(759182),
    c = n(62405),
    d = n(190107);
function E(e) {
    let { targetSec: t, quest: n, sourceQuestContent: E, questConfig: _, clickable: f = !1 } = e,
        p = (0, l.bG)([s.default], () => s.default.getCurrentUser()),
        m = u.useMemo(() => _?.features.includes(d.Li.FULL_EPISODE_VIDEO_QUEST) === !0, [_?.features]),
        S = u.useMemo(() => (m ? (0, a.mq)(_, p) : void 0), [_, m, p]),
        v = n.userStatus?.completedAt != null,
        C = u.useMemo(
            () =>
                (0, r.jsx)(c.A, {
                    fullWidth: !0,
                    quest: n,
                    location: d.rE.VIDEO_MODAL,
                    questContent: i.uF.VIDEO_MODAL,
                    sourceQuestContent: E,
                    autoplay: !1,
                }),
            [n, E],
        ),
        A = (0, o.A)({ targetSec: t, label: S, isCompleted: v, icon: C, clickable: f });
    return m ? A : void 0;
}
