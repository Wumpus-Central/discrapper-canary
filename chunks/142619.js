n.d(t, { A: () => s });
var r = n(64700),
    a = n(829219),
    o = n(405670),
    i = n(579473);
function s(e) {
    let t = (0, o.Kr)((e) => e.transcript);
    return (r.useEffect(() => {
        let n = (0, i.tW)(e, i.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, !1);
        (null == t ||
            t.questId !== e.id ||
            t.fetchStatus === o.Lx.NONE ||
            (t.fetchStatus === o.Lx.SUCCESS && n?.url !== t.url)) &&
            (0, a.qY)(e);
    }, [t, e]),
    t?.questId === e.id && t?.fetchStatus === o.Lx.SUCCESS)
        ? (t.text ?? null)
        : null;
}
