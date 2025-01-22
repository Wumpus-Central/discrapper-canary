function r(e) {
    return function (n, r, i) {
        for (var a = -1, o = Object(n), s = i(n), l = s.length; l--; ) {
            var u = s[e ? l : ++a];
            if (!1 === r(o[u], u, o)) break;
        }
        return n;
    };
}
n.Z = r;
