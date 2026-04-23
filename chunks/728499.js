l.d(t, { A: () => a });
var n = l(64700);
function a(e) {
    let { initial: t, defaultValue: l } = e;
    return n.useState(() => (null != t ? { hours: t.hours, minutes: t.minutes } : l));
}
l(219893);
