n.d(t, { Z: () => c }), n(566702);
var r = n(913527),
    i = n.n(r),
    a = n(695346),
    o = n(626135),
    l = n(337953),
    s = n(875425),
    u = n(981631);
function c(e) {
    let { text: t, emojiInfo: n, clearAfter: r, analyticsContext: c, createdAtMs: d, prompt: m } = e,
        p = t.trim();
    if (!(p.length > 0) && null == n) return a.Ok.updateSetting(void 0);
    {
        let e = a.Ok.updateSetting({
            text: p.length > 0 ? p : '',
            expiresAtMs:
                null != r && r !== s.FO.DONT_CLEAR
                    ? String(
                          i()()
                              .add((0, l.Z)(r), 'ms')
                              .toDate()
                              .getTime()
                      )
                    : '0',
            emojiId: null != n && null != n.id ? n.id : '0',
            emojiName: null != n ? n.name : '',
            createdAtMs: String(null != d ? d : i()().toDate().getTime())
        });
        return (
            o.default.track(u.rMx.CUSTOM_STATUS_UPDATED, {
                location: null != c ? c.location : null,
                emoji_type: null == n ? null : null != n.id ? 'custom' : 'unicode',
                text_len: p.length,
                clear_after: null != r ? ''.concat(r) : null,
                prompt_type: null == m ? void 0 : m.value
            }),
            e
        );
    }
}
