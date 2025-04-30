n.d(t, {
    gs: () => l,
    p1: () => c,
    s8: () => s
}),
    n(314940);
var r = n(278074),
    i = n(981631),
    a = n(490897),
    o = n(388032),
    s = (function (e) {
        return (e.ALL_MESSAGES = 'all_messages'), (e.MENTIONS = 'mentions'), (e.NOTHING = 'nothing'), (e.CUSTOM = 'custom'), e;
    })({});
function l(e, t) {
    return (0, r.EQ)([t, e])
        .with([i.bL.ALL_MESSAGES, a.i.ALL_MESSAGES], () => 'all_messages')
        .with([i.bL.ONLY_MENTIONS, a.i.UNSET], () => 'mentions')
        .with([i.bL.ONLY_MENTIONS, a.i.ONLY_MENTIONS], () => 'mentions')
        .with([i.bL.NO_MESSAGES, a.i.UNSET], () => 'nothing')
        .with([i.bL.NO_MESSAGES, a.i.ONLY_MENTIONS], () => 'nothing')
        .otherwise(() => 'custom');
}
function c(e) {
    return (0, r.EQ)(e)
        .with('all_messages', () => o.intl.string(o.t.hZrr6u))
        .with('mentions', () => o.intl.string(o.t.y59NJi))
        .with('nothing', () => o.intl.string(o.t['pGn/bG']))
        .with('custom', () => o.intl.string(o.t['32yow8']))
        .exhaustive();
}
