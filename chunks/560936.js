var s = n(582128),
    u = n(473193),
    r = n(188567),
    i = n(652215);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { shouldSubscribe: t, subscribeToGroupId: n, authorId: l } = e,
                A = s.useContext(u.C);
            s.useEffect(() => {
                if (!t || null == A || null == n || null == l) return;
                let { setAnimate: e } = A;
                return (
                    r._.subscribeKeyed(i.zOV.ANIMATE_CHAT_AVATAR, `${n}:${l}`, e),
                    () => {
                        r._.unsubscribeKeyed(i.zOV.ANIMATE_CHAT_AVATAR, `${n}:${l}`, e);
                    }
                );
            }, [t, l, n, A]);
        },
    },
);
