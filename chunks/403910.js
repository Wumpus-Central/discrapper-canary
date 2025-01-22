var i = e(442837),
    r = e(339085);
n.Z = function (t, n) {
    return (0, i.e7)(
        [r.ZP],
        () => {
            var e;
            if (null == n) return null;
            let i = r.ZP.getDisambiguatedEmojiContext(t);
            return null !== (e = i.getById(n)) && void 0 !== e ? e : i.getByName(n);
        },
        [t, n]
    );
};
