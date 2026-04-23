function i(e, t) {
    return null == e ? null : e.isDM() ? (t.getUser(e.getRecipientId()) ?? null) : null;
}
function r(e, t) {
    return null == e ? null : null != e.getGuildId() ? (t.getGuild(e.getGuildId()) ?? null) : null;
}
n.d(t, { P: () => r, j: () => i });
