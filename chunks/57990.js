l.d(t, { A: () => d });
var n = l(989349),
    i = l.n(n),
    r = l(253932),
    a = l(954571),
    s = l(815484),
    u = l(403918),
    o = l(652215);
function d(e) {
    let {
            text: t,
            emojiInfo: l,
            clearAfter: n,
            analyticsContext: d,
            createdAtMs: c,
            prompt: A,
            analyticsLocations: _,
        } = e,
        T = t.trim();
    if (!(T.length > 0) && null == l) return r.G2.updateSetting(void 0);
    {
        let e = r.G2.updateSetting({
            text: T.length > 0 ? T : "",
            expiresAtMs:
                null != n && n !== u.yt.DONT_CLEAR
                    ? String(
                          i()()
                              .add((0, s.A)(n), "ms")
                              .toDate()
                              .getTime(),
                      )
                    : "0",
            emojiId: null != l && null != l.id ? l.id : "0",
            emojiName: null != l ? l.name : "",
            createdAtMs: String(c ?? i()().toDate().getTime()),
        });
        return (
            a.default.track(o.HAw.CUSTOM_STATUS_UPDATED, {
                location: null != d ? d.location : null,
                emoji_type: null == l ? null : null != l.id ? "custom" : "unicode",
                text_len: T.length,
                clear_after: null != n ? `${n}` : null,
                prompt_type: A?.value,
                location_stack: _,
            }),
            e
        );
    }
}
