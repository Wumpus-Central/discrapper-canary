(n.d(t, { C: () => l }), n(388685));
var r = n(661869),
    i = n(26033),
    a = n(180335),
    o = n(561308),
    s = n(981631);
function l(e, t) {
    return (0, o.n2)(e) ? null : (0, o.kr)(e) && e.author_type === r.i.USER ? t.getActivities(e.author_id).find((t) => (t.type === s.IIU.PLAYING && (0, i.m9)(e) ? (0, a.cN)(e, t) : !!(t.type === s.IIU.LISTENING && (0, i.dU)(e)) && (0, a.pB)(e, t))) : void 0;
}
