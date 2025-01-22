r.d(n, {
    gs: function () {
        return c;
    },
    p1: function () {
        return d;
    },
    s8: function () {
        return i;
    }
});
var i,
    a = r(627341);
var o = r(278074),
    s = r(981631),
    l = r(490897),
    u = r(388032);
function c(e, n) {
    return (0, o.EQ)([n, e])
        .with([s.bL.ALL_MESSAGES, l.i.ALL_MESSAGES], () => 'all_messages')
        .with([s.bL.ONLY_MENTIONS, l.i.UNSET], () => 'mentions')
        .with([s.bL.ONLY_MENTIONS, l.i.ONLY_MENTIONS], () => 'mentions')
        .with([s.bL.NO_MESSAGES, l.i.UNSET], () => 'nothing')
        .with([s.bL.NO_MESSAGES, l.i.ONLY_MENTIONS], () => 'nothing')
        .otherwise(() => 'custom');
}
function d(e) {
    return (0, o.EQ)(e)
        .with('all_messages', () => u.intl.string(u.t.hZrr6u))
        .with('mentions', () => u.intl.string(u.t.y59NJi))
        .with('nothing', () => u.intl.string(u.t['pGn/bG']))
        .with('custom', () => u.intl.string(u.t['32yow8']))
        .exhaustive();
}
!(function (e) {
    (e.ALL_MESSAGES = 'all_messages'), (e.MENTIONS = 'mentions'), (e.NOTHING = 'nothing'), (e.CUSTOM = 'custom');
})(i || (i = {}));
