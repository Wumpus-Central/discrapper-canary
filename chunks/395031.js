t.d(s, { Ys: () => r });
var a = t(64700),
    n = t(311907),
    l = t(508675);
let i = /^<(a?):(\w+):(\d+)>/;
function r(e) {
    let s = a.useMemo(() => i.exec(e)?.[3], [e]);
    return (0, n.bG)([l.Ay], () => (null == s ? null : l.Ay.getCustomEmojiById(s)));
}
