n.d(e, {
    Z: function () {
        return d;
    }
});
var a = n(913527),
    l = n.n(a),
    s = n(695346),
    i = n(626135),
    o = n(337953),
    r = n(875425),
    u = n(981631);
function d(t, e, n, a, d) {
    let c = t.trim();
    if (!(c.length > 0) && null == e) return s.Ok.updateSetting(void 0);
    {
        var m;
        let t = s.Ok.updateSetting({
            text: c.length > 0 ? c : '',
            expiresAtMs:
                null != n && n !== r.F.DONT_CLEAR
                    ? String(
                          l()()
                              .add((0, o.Z)(n), 'ms')
                              .toDate()
                              .getTime()
                      )
                    : '0',
            emojiId: null != e && null != e.id ? e.id : '0',
            emojiName: null != e ? e.name : '',
            createdAtMs: String(null != d ? d : l()().toDate().getTime())
        });
        return (
            i.default.track(u.rMx.CUSTOM_STATUS_UPDATED, {
                location: null != a ? a.location : null,
                emoji_type: null == (m = e) ? null : null != m.id ? 'custom' : 'unicode',
                text_len: c.length,
                clear_after: null != n ? ''.concat(n) : null
            }),
            t
        );
    }
}
