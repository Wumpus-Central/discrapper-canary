t.d(s, { Ys: () => r });
var n = t(64700),
    a = t(311907),
    l = t(508675);
let i = /^<(a?):(\w+):(\d+)>/;
function r(e) {
    let s = n.useMemo(() => i.exec(e)?.[3], [e]);
    return (0, a.bG)([l.Ay], () => (null == s ? null : l.Ay.getCustomEmojiById(s)));
}
