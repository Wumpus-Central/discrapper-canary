n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(933557),
    l = n(981631),
    r = n(388032);
function a(e) {
    let { channel: t, isReadonly: n = !1, isCreatingThread: a = !1 } = e,
        s = (0, i.ZP)(t, !0),
        o = (0, i.ZP)(t, !1);
    if (null == t || null == s)
        return {
            placeholder: r.intl.string(r.t.MKDeyM),
            accessibilityLabel: r.intl.string(r.t.MKDeyM)
        };
    if (a)
        return {
            placeholder: r.intl.string(r.t.YzpScX),
            accessibilityLabel: r.intl.string(r.t.YzpScX)
        };
    if (n)
        return {
            placeholder: r.intl.string(r.t.RRvRp6),
            accessibilityLabel: r.intl.string(r.t.RRvRp6)
        };
    if (t.isForumPost())
        return {
            placeholder: r.intl.formatToPlainString(r.t.Y6qWLS, { channel: s }),
            accessibilityLabel: r.intl.formatToPlainString(r.t.KffKoa, { channel: o })
        };
    if (l.TPd.THREADS.has(t.type))
        return {
            placeholder: r.intl.formatToPlainString(r.t['8lzR/f'], { channel: s }),
            accessibilityLabel: r.intl.formatToPlainString(r.t.UZIMWV, { channel: o })
        };
    if (t.type === l.d4z.DM)
        return {
            placeholder: r.intl.formatToPlainString(r.t['4c+CAw'], { channel: s }),
            accessibilityLabel: r.intl.formatToPlainString(r.t.fqOxbW, { channel: o })
        };
    return {
        placeholder: r.intl.formatToPlainString(r.t['8lzR/f'], { channel: s }),
        accessibilityLabel: r.intl.formatToPlainString(r.t.ih7ZSE, { channel: o })
    };
}
