var i = n(770335);
n.d(
    t,
    {},
    {
        A: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e?.getCustomEmoji(),
                r = n?.get(t);
            if (null != r) return r;
            let a = e?.getByName(t);
            return a?.type === i.i.PACK ? a : void 0;
        },
    },
);
