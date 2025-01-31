n.d(t, {
    gs: () => l,
    p1: () => u,
    s8: () => o
}),
    n(627341);
var i = n(278074),
    r = n(981631),
    a = n(490897),
    s = n(388032),
    o = (function (e) {
        return (e.ALL_MESSAGES = 'all_messages'), (e.MENTIONS = 'mentions'), (e.NOTHING = 'nothing'), (e.CUSTOM = 'custom'), e;
    })({});
function l(e, t) {
    return (0, i.EQ)([t, e])
        .with([r.bL.ALL_MESSAGES, a.i.ALL_MESSAGES], () => 'all_messages')
        .with([r.bL.ONLY_MENTIONS, a.i.UNSET], () => 'mentions')
        .with([r.bL.ONLY_MENTIONS, a.i.ONLY_MENTIONS], () => 'mentions')
        .with([r.bL.NO_MESSAGES, a.i.UNSET], () => 'nothing')
        .with([r.bL.NO_MESSAGES, a.i.ONLY_MENTIONS], () => 'nothing')
        .otherwise(() => 'custom');
}
function u(e) {
    return (0, i.EQ)(e)
        .with('all_messages', () => s.intl.string(s.t.hZrr6u))
        .with('mentions', () => s.intl.string(s.t.y59NJi))
        .with('nothing', () => s.intl.string(s.t['pGn/bG']))
        .with('custom', () => s.intl.string(s.t['32yow8']))
        .exhaustive();
}
