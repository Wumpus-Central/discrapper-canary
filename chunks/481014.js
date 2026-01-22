let r = n(532618);
e.exports = (e, t) => {
    let n = r(e, null, !0),
        i = r(t, null, !0),
        a = n.compare(i);
    if (0 === a) return null;
    let s = a > 0,
        o = s ? n : i,
        l = s ? i : n,
        c = !!o.prerelease.length;
    if (l.prerelease.length && !c)
        return l.patch || l.minor ? (o.patch ? "patch" : o.minor ? "minor" : "major") : "major";
    let u = c ? "pre" : "";
    return n.major !== i.major
        ? u + "major"
        : n.minor !== i.minor
          ? u + "minor"
          : n.patch !== i.patch
            ? u + "patch"
            : "prerelease";
};
