n.d(t, { Z: () => c }), n(566702);
var r = n(913527),
    l = n.n(r),
    a = n(695346),
    i = n(626135),
    o = n(337953),
    s = n(875425),
    u = n(981631);
function c(e) {
    let { text: t, emojiInfo: n, clearAfter: r, analyticsContext: c, createdAtMs: d, prompt: p } = e,
        m = t.trim();
    if (!(m.length > 0) && null == n) return a.Ok.updateSetting(void 0);
    {
        let e = a.Ok.updateSetting({
            text: m.length > 0 ? m : '',
            expiresAtMs:
                null != r && r !== s.FO.DONT_CLEAR
                    ? String(
                          l()()
                              .add((0, o.Z)(r), 'ms')
                              .toDate()
                              .getTime()
                      )
                    : '0',
            emojiId: null != n && null != n.id ? n.id : '0',
            emojiName: null != n ? n.name : '',
            createdAtMs: String(null != d ? d : l()().toDate().getTime())
        });
        return (
            i.default.track(u.rMx.CUSTOM_STATUS_UPDATED, {
                location: null != c ? c.location : null,
                emoji_type: null == n ? null : null != n.id ? 'custom' : 'unicode',
                text_len: m.length,
                clear_after: null != r ? ''.concat(r) : null,
                prompt_type: null == p ? void 0 : p.value
            }),
            e
        );
    }
}
