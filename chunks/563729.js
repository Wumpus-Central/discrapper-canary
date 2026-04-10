n.d(t, { A: () => u });
var i = n(64700),
    l = n(311907),
    s = n(311043),
    a = n(486020),
    r = n(60465),
    o = n(409626),
    c = n(422069),
    d = n(652215);
function u(e) {
    let { channelId: t } = e,
        n = (0, l.bG)([c.A], () => {
            let e = c.A.getPendingReturn();
            return null == e || e.channelId !== t ? null : e;
        }),
        u = i.useCallback(() => {
            null != n &&
                r.A.returnToGameProfile({
                    gameId: n.gameId,
                    source: o.Ob.AnnouncementChannelReturn,
                    initialScrollOffset: n.initialScrollOffset,
                });
        }, [n]),
        h = (0, l.bG)([s.A], () => (n?.gameId != null ? s.A.getGame(n.gameId) : null));
    i.useEffect(() => {
        if (h?.id != null) return () => r.A.clearGameProfilePendingReturn(h.id);
    }, [h?.id]);
    let m = h?.name;
    if (null == h || null == m) return null;
    let A =
        h?.iconHash != null && "" !== h.iconHash
            ? a.Ay.getGameAssetURL({ id: h.id, hash: h.iconHash, size: d.eQT })
            : void 0;
    return { gameId: h.id, gameName: m, gameIconUrl: A, onReturnToGameProfile: u };
}
