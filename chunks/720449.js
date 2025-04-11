n.d(t, { Z: () => d }), n(781311);
var r = n(913527),
    a = n.n(r),
    i = n(381499),
    l = n(695346),
    o = n(626135),
    s = n(337953),
    u = n(875425),
    c = n(981631);
function d(e) {
    let { text: t, emojiInfo: n, clearAfter: r, analyticsContext: d, createdAtMs: m, prompt: f, customStatusLabel: p } = e,
        h = t.trim();
    if (!(h.length > 0) && null == n) return l.Ok.updateSetting(void 0);
    {
        let e = l.Ok.updateSetting({
            text: h.length > 0 ? h : '',
            expiresAtMs:
                null != r && r !== u.FO.DONT_CLEAR
                    ? String(
                          a()()
                              .add((0, s.Z)(r), 'ms')
                              .toDate()
                              .getTime()
                      )
                    : '0',
            emojiId: null != n && null != n.id ? n.id : '0',
            emojiName: null != n ? n.name : '',
            createdAtMs: String(null != m ? m : a()().toDate().getTime()),
            label: null != p ? i.Gm.create({ value: p }) : void 0
        });
        return (
            o.default.track(c.rMx.CUSTOM_STATUS_UPDATED, {
                location: null != d ? d.location : null,
                emoji_type: null == n ? null : null != n.id ? 'custom' : 'unicode',
                text_len: h.length,
                clear_after: null != r ? ''.concat(r) : null,
                prompt_type: null == f ? void 0 : f.value,
                label: null != p ? p : null
            }),
            e
        );
    }
}
