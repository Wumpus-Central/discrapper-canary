n.d(l, { A: () => i });
var s = n(582128),
    t = n(473193),
    r = n(625494),
    a = n(652215);
function i(e) {
    let { shouldSubscribe: l, subscribeToGroupId: n, authorId: i } = e,
        u = s.useContext(t.C);
    s.useEffect(() => {
        if (!l || null == u || null == n || null == i) return;
        let { setAnimate: e } = u;
        return (
            r._.subscribeKeyed(a.zOV.ANIMATE_CHAT_AVATAR, `${n}:${i}`, e),
            () => {
                r._.unsubscribeKeyed(a.zOV.ANIMATE_CHAT_AVATAR, `${n}:${i}`, e);
            }
        );
    }, [l, i, n, u]);
}
