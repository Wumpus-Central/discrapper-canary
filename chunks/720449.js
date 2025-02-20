n.d(t, { Z: () => c }), n(566702);
var r = n(913527),
    a = n.n(r),
    l = n(695346),
    i = n(626135),
    o = n(337953),
    s = n(875425),
    u = n(981631);
function c(e, t, n, r, c) {
    let d = e.trim();
    if (!(d.length > 0) && null == t) return l.Ok.updateSetting(void 0);
    {
        let e = l.Ok.updateSetting({
            text: d.length > 0 ? d : '',
            expiresAtMs:
                null != n && n !== s.FO.DONT_CLEAR
                    ? String(
                          a()()
                              .add((0, o.Z)(n), 'ms')
                              .toDate()
                              .getTime()
                      )
                    : '0',
            emojiId: null != t && null != t.id ? t.id : '0',
            emojiName: null != t ? t.name : '',
            createdAtMs: String(null != c ? c : a()().toDate().getTime())
        });
        return (
            i.default.track(u.rMx.CUSTOM_STATUS_UPDATED, {
                location: null != r ? r.location : null,
                emoji_type: null == t ? null : null != t.id ? 'custom' : 'unicode',
                text_len: d.length,
                clear_after: null != n ? ''.concat(n) : null
            }),
            e
        );
    }
}
