n.d(t, { A: () => i });
var l = n(652215),
    s = n(818348);
function i(e) {
    let { activities: t, status: n, applicationStream: i, voiceChannel: a } = e;
    if (n === s.cl.OFFLINE || n === s.cl.INVISIBLE) return !1;
    let r = t?.filter((e) => e.type !== l.$pd.HANG_STATUS);
    return null != i || null != a || (r?.length ?? 0) > 0;
}
