"use strict";
n.d(t, { A: () => s });
var a = n(64700),
    r = n(473193),
    i = n(625494),
    l = n(652215);
function s(e) {
    let { shouldSubscribe: t, subscribeToGroupId: n, authorId: s } = e,
        o = a.useContext(r.C);
    a.useEffect(() => {
        if (!t || null == o || null == n || null == s) return;
        let { setAnimate: e } = o;
        return (
            i._.subscribeKeyed(l.zOV.ANIMATE_CHAT_AVATAR, `${n}:${s}`, e),
            () => void i._.unsubscribeKeyed(l.zOV.ANIMATE_CHAT_AVATAR, `${n}:${s}`, e)
        );
    }, [t, s, n, o]);
}
