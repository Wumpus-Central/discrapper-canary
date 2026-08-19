var n = r(72290);
e.exports =
    "object" == typeof n && n.env && n.env.NODE_DEBUG && /\bsemver\b/i.test(n.env.NODE_DEBUG)
        ? (...e) => console.error("SEMVER", ...e)
        : () => {};
