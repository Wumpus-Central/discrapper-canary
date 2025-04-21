n.d(t, { Z: () => d }), n(781311);
var l = n(913527),
    r = n.n(l),
    a = n(381499),
    i = n(695346),
    o = n(626135),
    s = n(337953),
    u = n(875425),
    c = n(981631);
function d(e) {
    let { text: t, emojiInfo: n, clearAfter: l, analyticsContext: d, createdAtMs: m, prompt: f, customStatusLabel: h } = e,
        p = t.trim();
    if (!(p.length > 0) && null == n) return i.Ok.updateSetting(void 0);
    {
        let e = i.Ok.updateSetting({
            text: p.length > 0 ? p : '',
            expiresAtMs:
                null != l && l !== u.FO.DONT_CLEAR
                    ? String(
                          r()()
                              .add((0, s.Z)(l), 'ms')
                              .toDate()
                              .getTime()
                      )
                    : '0',
            emojiId: null != n && null != n.id ? n.id : '0',
            emojiName: null != n ? n.name : '',
            createdAtMs: String(null != m ? m : r()().toDate().getTime()),
            label: null != h ? a.Gm.create({ value: h }) : void 0
        });
        return (
            o.default.track(c.rMx.CUSTOM_STATUS_UPDATED, {
                location: null != d ? d.location : null,
                emoji_type: null == n ? null : null != n.id ? 'custom' : 'unicode',
                text_len: p.length,
                clear_after: null != l ? ''.concat(l) : null,
                prompt_type: null == f ? void 0 : f.value,
                label: null != h ? h : null
            }),
            e
        );
    }
}
