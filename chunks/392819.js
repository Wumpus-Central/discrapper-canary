n.d(t, { Z: () => s });
var r = n(473749),
    i = n(573385),
    a = n(585483),
    o = n(981631);
function s(e) {
    let { shouldSubscribe: t, subscribeToGroupId: n, authorId: s } = e,
        l = r.useContext(i.d);
    r.useEffect(() => {
        if (!t || null == l || null == n || null == s) return;
        let { setAnimate: e } = l;
        return (
            a.S.subscribeKeyed(o.LPv.ANIMATE_CHAT_AVATAR, "".concat(n, ":").concat(s), e),
            () => void a.S.unsubscribeKeyed(o.LPv.ANIMATE_CHAT_AVATAR, "".concat(n, ":").concat(s), e)
        );
    }, [t, s, n, l]);
}
