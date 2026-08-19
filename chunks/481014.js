let n = r(532618);
e.exports = (e, t) => {
    let r = n(e, null, !0),
        o = n(t, null, !0),
        i = r.compare(o);
    if (0 === i) return null;
    let a = i > 0,
        s = a ? r : o,
        l = a ? o : r,
        u = !!s.prerelease.length;
    if (l.prerelease.length && !u)
        return l.patch || l.minor ? (s.patch ? "patch" : s.minor ? "minor" : "major") : "major";
    let c = u ? "pre" : "";
    return r.major !== o.major
        ? c + "major"
        : r.minor !== o.minor
          ? c + "minor"
          : r.patch !== o.patch
            ? c + "patch"
            : "prerelease";
};
