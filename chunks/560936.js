n.d(t, { A: () => o });
var r = n(64700),
    i = n(473193),
    a = n(203982),
    s = n(652215);
function o(e) {
    let { shouldSubscribe: t, subscribeToGroupId: n, authorId: o } = e,
        l = r.useContext(i.C);
    r.useEffect(() => {
        if (!t || null == l || null == n || null == o) return;
        let { setAnimate: e } = l;
        return (
            a._.subscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, "".concat(n, ":").concat(o), e),
            () => void a._.unsubscribeKeyed(s.zOV.ANIMATE_CHAT_AVATAR, "".concat(n, ":").concat(o), e)
        );
    }, [t, o, n, l]);
}
