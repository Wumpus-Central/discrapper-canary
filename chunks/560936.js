"use strict";
n.d(t, { A: () => r });
var l = n(64700),
    a = n(473193),
    s = n(203982),
    i = n(652215);
function r(e) {
    let { shouldSubscribe: t, subscribeToGroupId: n, authorId: r } = e,
        o = l.useContext(a.C);
    l.useEffect(() => {
        if (!t || null == o || null == n || null == r) return;
        let { setAnimate: e } = o;
        return (
            s._.subscribeKeyed(i.zOV.ANIMATE_CHAT_AVATAR, `${n}:${r}`, e),
            () => void s._.unsubscribeKeyed(i.zOV.ANIMATE_CHAT_AVATAR, `${n}:${r}`, e)
        );
    }, [t, r, n, o]);
}
