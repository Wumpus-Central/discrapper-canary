n.d(t, { A: () => i });
var r = n(64700),
    s = n(829219),
    a = n(405670),
    l = n(579473);
function i(e) {
    let t = (0, a.Kr)((e) => e.transcript);
    return (r.useEffect(() => {
        let n = (0, l.tW)(e, l.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == t ||
            t.questId !== e.id ||
            t.fetchStatus === a.Lx.NONE ||
            (t.fetchStatus === a.Lx.SUCCESS && n?.url !== t.url)) &&
            (0, s.qY)(e);
    }, [t, e]),
    t?.questId === e.id && t?.fetchStatus === a.Lx.SUCCESS)
        ? (t.text ?? null)
        : null;
}
