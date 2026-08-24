let n = r(532618);
e.exports = (e, t) => {
    let r = n(e, null, !0),
        i = n(t, null, !0),
        o = r.compare(i);
    if (0 === o) return null;
    let a = o > 0,
        s = a ? r : i,
        l = a ? i : r,
        u = !!s.prerelease.length;
    if (l.prerelease.length && !u)
        return l.patch || l.minor ? (s.patch ? "patch" : s.minor ? "minor" : "major") : "major";
    let c = u ? "pre" : "";
    return r.major !== i.major
        ? c + "major"
        : r.minor !== i.minor
          ? c + "minor"
          : r.patch !== i.patch
            ? c + "patch"
            : "prerelease";
};
