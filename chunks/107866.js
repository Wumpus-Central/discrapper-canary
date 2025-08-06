n.d(t, { C: () => l }), n(388685);
var r = n(661869),
    i = n(26033),
    o = n(180335),
    a = n(561308),
    s = n(981631);
function l(e, t) {
    return (0, a.n2)(e)
        ? null
        : (0, a.kr)(e) && e.author_type === r.i.USER
          ? t
                .getActivities(e.author_id)
                .find((t) =>
                    t.type === s.IIU.PLAYING && (0, i.m9)(e)
                        ? (0, o.cN)(e, t)
                        : !!(t.type === s.IIU.LISTENING && (0, i.dU)(e)) && (0, o.pB)(e, t),
                )
          : void 0;
}
