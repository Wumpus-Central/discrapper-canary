n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(933557),
    l = n(981631),
    a = n(388032);
function r(e) {
    let { channel: t, isReadonly: n = !1, isCreatingThread: r = !1 } = e,
        s = (0, i.ZP)(t, !0),
        o = (0, i.ZP)(t, !1);
    if (null == t || null == s)
        return {
            placeholder: a.intl.string(a.t.MKDeyM),
            accessibilityLabel: a.intl.string(a.t.MKDeyM)
        };
    if (r)
        return {
            placeholder: a.intl.string(a.t.YzpScX),
            accessibilityLabel: a.intl.string(a.t.YzpScX)
        };
    if (n)
        return {
            placeholder: a.intl.string(a.t.RRvRp6),
            accessibilityLabel: a.intl.string(a.t.RRvRp6)
        };
    if (t.isForumPost())
        return {
            placeholder: a.intl.formatToPlainString(a.t.Y6qWLS, { channel: s }),
            accessibilityLabel: a.intl.formatToPlainString(a.t.KffKoa, { channel: o })
        };
    if (l.TPd.THREADS.has(t.type))
        return {
            placeholder: a.intl.formatToPlainString(a.t['8lzR/f'], { channel: s }),
            accessibilityLabel: a.intl.formatToPlainString(a.t.UZIMWV, { channel: o })
        };
    if (t.type === l.d4z.DM)
        return {
            placeholder: a.intl.formatToPlainString(a.t['4c+CAw'], { channel: s }),
            accessibilityLabel: a.intl.formatToPlainString(a.t.fqOxbW, { channel: o })
        };
    return {
        placeholder: a.intl.formatToPlainString(a.t['8lzR/f'], { channel: s }),
        accessibilityLabel: a.intl.formatToPlainString(a.t.ih7ZSE, { channel: o })
    };
}
