function r(e, t) {
    var n, r;
    return (
        (null == t || null == (n = t.party) ? void 0 : n.id) != null &&
        (null == e || null == (r = e.party) ? void 0 : r.id) != null &&
        e.party.id === t.party.id
    );
}
n.d(t, { w: () => r });
