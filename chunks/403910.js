var i = n(442837),
    r = n(339085);
e.Z = function (t, e) {
    return (0, i.e7)(
        [r.ZP],
        () => {
            var n;
            if (null == e) return null;
            let i = r.ZP.getDisambiguatedEmojiContext(t);
            return null !== (n = i.getById(e)) && void 0 !== n ? n : i.getByName(e);
        },
        [t, e]
    );
};
