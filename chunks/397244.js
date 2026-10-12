n.d(l, { A: () => i });
var t = n(652215),
    s = n(818348);
function i(e) {
    let { activities: l, status: n, applicationStream: i, voiceChannel: a } = e;
    if (n === s.cl.OFFLINE || n === s.cl.INVISIBLE) return !1;
    let r = l?.filter((e) => e.type !== t.$pd.HANG_STATUS);
    return null != i || null != a || (r?.length ?? 0) > 0;
}
