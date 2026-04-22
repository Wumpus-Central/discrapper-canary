"use strict";
n.d(t, { A: () => s });
var i = n(64700),
    a = n(473193),
    r = n(203982),
    l = n(652215);
function s(e) {
    let { shouldSubscribe: t, subscribeToGroupId: n, authorId: s } = e,
        o = i.useContext(a.C);
    i.useEffect(() => {
        if (!t || null == o || null == n || null == s) return;
        let { setAnimate: e } = o;
        return (
            r._.subscribeKeyed(l.zOV.ANIMATE_CHAT_AVATAR, `${n}:${s}`, e),
            () => void r._.unsubscribeKeyed(l.zOV.ANIMATE_CHAT_AVATAR, `${n}:${s}`, e)
        );
    }, [t, s, n, o]);
}
