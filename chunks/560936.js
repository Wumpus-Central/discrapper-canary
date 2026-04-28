n.d(l, { A: () => a });
var r = n(64700),
    u = n(473193),
    t = n(625494),
    s = n(652215);
function a(e) {
    let { shouldSubscribe: l, subscribeToGroupId: n, authorId: a } = e,
        i = r.useContext(u.C);
    r.useEffect(() => {
        if (!l || null == i || null == n || null == a) return;
        let { setAnimate: e } = i;
        return (
            t._.subscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, `${n}:${a}`, e),
            () => void t._.unsubscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, `${n}:${a}`, e)
        );
    }, [l, a, n, i]);
}
