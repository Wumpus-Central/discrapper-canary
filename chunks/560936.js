n.d(t, { A: () => s });
var a = n(64700),
    i = n(473193),
    l = n(625494),
    r = n(652215);
function s(e) {
    let { shouldSubscribe: t, subscribeToGroupId: n, authorId: s } = e,
        o = a.useContext(i.C);
    a.useEffect(() => {
        if (!t || null == o || null == n || null == s) return;
        let { setAnimate: e } = o;
        return (
            l._.subscribeKeyed(r.zOV.ANIMATE_CHAT_AVATAR, `${n}:${s}`, e),
            () => void l._.unsubscribeKeyed(r.zOV.ANIMATE_CHAT_AVATAR, `${n}:${s}`, e)
        );
    }, [t, s, n, o]);
}
