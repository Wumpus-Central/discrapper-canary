let i = n(532618);
e.exports = (e, t) => {
    let n = i(e, null, !0),
        r = i(t, null, !0),
        s = n.compare(r);
    if (0 === s) return null;
    let a = s > 0,
        o = a ? n : r,
        l = a ? r : n,
        u = !!o.prerelease.length;
    if (l.prerelease.length && !u)
        return l.patch || l.minor ? (o.patch ? "patch" : o.minor ? "minor" : "major") : "major";
    let c = u ? "pre" : "";
    return n.major !== r.major
        ? c + "major"
        : n.minor !== r.minor
          ? c + "minor"
          : n.patch !== r.patch
            ? c + "patch"
            : "prerelease";
};
