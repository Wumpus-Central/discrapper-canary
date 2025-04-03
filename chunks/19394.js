function r(e) {
    var t;
    return Array.from(null != (t = e.values()) ? t : [])
        .filter((e) => null != e.ends_at)
        .sort((e, t) => (e.ends_at < t.ends_at ? -1 : 1));
}
n.d(t, { h: () => r }), n(47120), n(230036);
