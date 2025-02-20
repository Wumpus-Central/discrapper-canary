n.d(t, {
    gs: () => l,
    p1: () => c,
    s8: () => s
}),
    n(627341);
var r = n(278074),
    i = n(981631),
    o = n(490897),
    a = n(388032),
    s = (function (e) {
        return (e.ALL_MESSAGES = 'all_messages'), (e.MENTIONS = 'mentions'), (e.NOTHING = 'nothing'), (e.CUSTOM = 'custom'), e;
    })({});
function l(e, t) {
    return (0, r.EQ)([t, e])
        .with([i.bL.ALL_MESSAGES, o.i.ALL_MESSAGES], () => 'all_messages')
        .with([i.bL.ONLY_MENTIONS, o.i.UNSET], () => 'mentions')
        .with([i.bL.ONLY_MENTIONS, o.i.ONLY_MENTIONS], () => 'mentions')
        .with([i.bL.NO_MESSAGES, o.i.UNSET], () => 'nothing')
        .with([i.bL.NO_MESSAGES, o.i.ONLY_MENTIONS], () => 'nothing')
        .otherwise(() => 'custom');
}
function c(e) {
    return (0, r.EQ)(e)
        .with('all_messages', () => a.NW.string(a.t.hZrr6u))
        .with('mentions', () => a.NW.string(a.t.y59NJi))
        .with('nothing', () => a.NW.string(a.t['pGn/bG']))
        .with('custom', () => a.NW.string(a.t['32yow8']))
        .exhaustive();
}
