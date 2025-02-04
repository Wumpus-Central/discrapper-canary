n.d(e, { Z: () => c });
var a = n(913527),
    l = n.n(a),
    s = n(695346),
    i = n(626135),
    r = n(337953),
    o = n(875425),
    u = n(981631);
function c(t, e, n, a, c) {
    let d = t.trim();
    if (!(d.length > 0) && null == e) return s.Ok.updateSetting(void 0);
    {
        let t = s.Ok.updateSetting({
            text: d.length > 0 ? d : '',
            expiresAtMs:
                null != n && n !== o.F.DONT_CLEAR
                    ? String(
                          l()()
                              .add((0, r.Z)(n), 'ms')
                              .toDate()
                              .getTime()
                      )
                    : '0',
            emojiId: null != e && null != e.id ? e.id : '0',
            emojiName: null != e ? e.name : '',
            createdAtMs: String(null != c ? c : l()().toDate().getTime())
        });
        return (
            i.default.track(u.rMx.CUSTOM_STATUS_UPDATED, {
                location: null != a ? a.location : null,
                emoji_type: null == e ? null : null != e.id ? 'custom' : 'unicode',
                text_len: d.length,
                clear_after: null != n ? ''.concat(n) : null
            }),
            t
        );
    }
}
