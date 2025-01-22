var i = r(477660),
    a = r.n(i);
let o = /\n$/,
    s = {
        ...a().defaultRules.heading,
        requiredFirstCharacters: [' ', '#'],
        match: (e, n, r) => (n.allowHeading ? (null == r || '' === r || null != r.match(o) ? (0, i.anyScopeRegex)(/^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/)(e, n, r) : null) : null)
    };
n.Z = s;
