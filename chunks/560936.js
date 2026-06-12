s.d(t, { A: () => l });
var n = s(64700),
    r = s(473193),
    u = s(625494),
    i = s(652215);
function l(e) {
    let { shouldSubscribe: t, subscribeToGroupId: s, authorId: l } = e,
        A = n.useContext(r.C);
    n.useEffect(() => {
        if (!t || null == A || null == s || null == l) return;
        let { setAnimate: e } = A;
        return (
            u._.subscribeKeyed(i.zOV.ANIMATE_CHAT_AVATAR, `${s}:${l}`, e),
            () => void u._.unsubscribeKeyed(i.zOV.ANIMATE_CHAT_AVATAR, `${s}:${l}`, e)
        );
    }, [t, l, s, A]);
}
