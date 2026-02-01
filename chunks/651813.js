function i(e, t) {
    var n;
    return null == e ? null : e.isDM() && null != (n = t.getUser(e.getRecipientId())) ? n : null;
}

function r(e, t) {
    var n;
    return null == e ? null : null != e.getGuildId() && null != (n = t.getGuild(e.getGuildId())) ? n : null;
}
n.d(t, {
    P: () => r,
    j: () => i,
});
